// gpt.js

/**
 * Fetches MCQ questions from your backend GPT endpoint.
 *
 * @param {string[]} topics - Array of CSE-related topics (e.g., ['AI', 'DBMS'])
 * @param {number} numQuestions - Number of questions to generate
 * @returns {Promise<Array>} - Resolves with an array of question objects
 * @throws {Error} - If request fails or response is invalid
 */
export const getGPTQuestions = async (topics, numQuestions) => {
  if (!Array.isArray(topics) || typeof numQuestions !== "number") {
    throw new Error("Invalid arguments: 'topics' must be an array and 'numQuestions' must be a number.");
  }

  try {
    const res = await fetch("http://localhost:5000/api/generate-questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topics, numQuestions }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Server error ${res.status}: ${text}`);
    }

    const data = await res.json();

    if (!Array.isArray(data.questions)) {
      throw new Error("Invalid response: 'questions' not found.");
    }

    return data.questions;
  } catch (err) {
    console.error("❌ getGPTQuestions Error:", err.message);
    throw err;
  }
};
