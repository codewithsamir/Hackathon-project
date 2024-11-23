"use client";

import React, { useState } from "react";

// Define the structure for answers
interface Answer {
  id: number;
  text: string;
  image?: File | null; // Optional: Allow image uploads
}

// Define props for the form
interface MCQFormProps {
  onSubmit: (data: {
    question: string;
    answers: Answer[];
    correctAnswer: number;
    explanation: string;
  }) => void; // Callback when the form is submitted
}

const MCQForm: React.FC<MCQFormProps> = ({ onSubmit }) => {
  const [question, setQuestion] = useState<string>("");
  const [answers, setAnswers] = useState<Answer[]>([
    { id: 1, text: "", image: null },
    { id: 2, text: "", image: null },
  ]);
  const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);
  const [explanation, setExplanation] = useState<string>("");

  // Handle answer text change
  const handleAnswerChange = (id: number, text: string) => {
    setAnswers((prev) =>
      prev.map((answer) => (answer.id === id ? { ...answer, text } : answer))
    );
  };

  // Handle image upload
  const handleImageChange = (id: number, file: File | null) => {
    setAnswers((prev) =>
      prev.map((answer) => (answer.id === id ? { ...answer, image: file } : answer))
    );
  };

  // Add a new answer field
  const addAnswerField = () => {
    setAnswers((prev) => [
      ...prev,
      { id: prev.length + 1, text: "", image: null },
    ]);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!question || correctAnswer === null) {
      alert("Please provide a question and select the correct answer.");
      return;
    }

    onSubmit({ question, answers, correctAnswer, explanation });
    // Reset form after submission
    setQuestion("");
    setAnswers([
      { id: 1, text: "", image: null },
      { id: 2, text: "", image: null },
    ]);
    setCorrectAnswer(null);
    setExplanation("");
  };

  return (
    <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 mx-auto">
      <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
        Create a New Question
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Question Field */}
        <div className="mb-6">
          <label htmlFor="question" className="block text-sm font-bold text-gray-700">
            Question
          </label>
          <textarea
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={3}
            className="mt-2 w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter the question here"
            required
          ></textarea>
        </div>

        {/* Answer Fields */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-gray-700 mb-3">
            Answers
          </label>
          {answers.map((answer) => (
            <div key={answer.id} className="flex items-center mb-4">
              <input
                type="radio"
                id={`correct-${answer.id}`}
                name="correct-answer"
                checked={correctAnswer === answer.id}
                onChange={() => setCorrectAnswer(answer.id)}
                className="mr-2"
              />
              <input
                type="text"
                value={answer.text}
                onChange={(e) => handleAnswerChange(answer.id, e.target.value)}
                placeholder={`Option ${answer.id}`}
                className="w-2/3 p-2 rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleImageChange(answer.id, e.target.files ? e.target.files[0] : null)
                }
                className="ml-3"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addAnswerField}
            className="mt-2 text-indigo-600 hover:underline"
          >
            + Add another answer
          </button>
        </div>

        {/* Explanation Field */}
        <div className="mb-6">
          <label
            htmlFor="explanation"
            className="block text-sm font-bold text-gray-700"
          >
            Explanation (Optional)
          </label>
          <textarea
            id="explanation"
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            rows={3}
            className="mt-2 w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-indigo-500"
            placeholder="Provide an explanation for the correct answer"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-2 rounded-md shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
        >
          Save Question
        </button>
      </form>
    </div>
  );
};

export default MCQForm;
