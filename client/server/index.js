// server.js  (ESM syntax ধরে নিচ্ছি—package.json‑এ "type": "module" আছে)

// -------------------- ১) ডিপেন্ডেন্সিগুলো --------------------
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";   // Node >= 20 হলে বিল্ট‑ইন fetch ব্যবহার করতে পারেন

dotenv.config();

// -------------------- ২) অ্যাপ কনফিগার --------------------
const app = express();
app.use(cors());
app.use(express.json());

// -------------------- ৩) রুট: প্রশ্ন জেনারেট --------------------
app.post("/api/generate-questions", async (req, res) => {
  const { topics = [], numQuestions = 5 } = req.body;

  // ইনপুট ভ্যালিডেশন (গুরুত্বপূর্ণ)
  if (!Array.isArray(topics) || topics.length === 0) {
    return res.status(400).json({ error: "topics array is required" });
  }

  const prompt = `Generate ${numQuestions} multiple‑choice questions based on the following CSE topics: ${topics.join(
    ", "
  )}.
Each question must include:
- a clear question
- 4 options
- correct answer
- short explanation

Return your result STRICTLY as valid JSON:
[
  {
    "question": "...",
    "options": ["...", "...", "...", "..."],
    "answer": "...",
    "explanation": "..."
  }
]`;

  try {
    // -------------------- ৩·ক) Hugging Face inference call --------------------
const response = await fetch("https://api-inference.huggingface.co/models/bigscience/bloomz-560m", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ inputs: prompt }),
      }
    );

    if (!response.ok) {
      // HF endpoint কোনো‑কারণে 4xx/5xx দিলে
      const errText = await response.text();
      throw new Error(
        `HF API responded with ${response.status}: ${errText.slice(0, 100)}…`
      );
    }

    const data = await response.json();

    // HF পরিবর্তে কখনও [{ generated_text: "…" }] বা { generated_text: "…" } দেয়
    const rawText =
      (Array.isArray(data) ? data[0]?.generated_text : data.generated_text) ||
      "";

    // -------------------- ৩·খ) JSON টুকু আলাদা করা --------------------
    const jsonStart = rawText.indexOf("[");
    const jsonEnd = rawText.lastIndexOf("]");

    if (jsonStart === -1 || jsonEnd === -1) {
      throw new Error("Could not find JSON brackets in model output");
    }

    const jsonSlice = rawText.slice(jsonStart, jsonEnd + 1);

    let questions;
    try {
      questions = JSON.parse(jsonSlice);
    } catch (parseErr) {
      // মডেল স্ট্রিক্ট JSON না দিলে graceful fallback
      console.warn("⚠️  JSON parse failed:", parseErr.message);
      return res.status(200).json({
        questions: [
          {
            question: "⚠️ Couldn't parse JSON from model.",
            options: [],
            answer: "",
            explanation: rawText,
          },
        ],
      });
    }

    // সফল
    return res.json({ questions });
  } catch (err) {
    console.error("❌ HuggingFace Error:", err.message);
    return res.status(500).json({
      error: "Failed to generate questions",
      details: err.message,
    });
  }
});

// -------------------- ৪) সার্ভার রান --------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅  Server running on http://localhost:${PORT}`);
});
