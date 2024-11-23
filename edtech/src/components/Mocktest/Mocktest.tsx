"use client";

import React, { useState } from "react";

// Define types for the questions and answers
interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

const Mocktest = ({questions}:any) => {
  // Sample quiz questions with explanations
 console.log(questions);
 

  // State for current question and selected answer
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  const currentQuestion = questions[currentQuestionIndex];

  // Handle answer selection
  const handleAnswerClick = (answer: string): void => {
    setSelectedAnswer(answer);
    setShowExplanation(true); // Show explanation after an answer is selected
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1); // Increment score if correct
    }
  };

  // Move to the next question
  const handleNextClick = (): void => {
    setSelectedAnswer(null);
    setShowExplanation(false); // Reset explanation visibility
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  // Restart quiz
  const handleRestart = (): void => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowExplanation(false);
  };

  return (
    <div className="flex flex-col items-center h-screen  p-4">
      {currentQuestionIndex < questions.length ? (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
          {/* Question */}
          <h1 className="text-2xl font-semibold mb-4 text-center">
            {currentQuestion.question}
          </h1>

          {/* Options */}
          <div className="grid grid-cols-2 gap-4">
            {currentQuestion.options.map((option:any, index:any) => (
              <button
                key={index}
                className={`p-4 rounded-lg font-medium text-center border-2 ${
                  selectedAnswer === option
                    ? option === currentQuestion.correctAnswer
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => handleAnswerClick(option)}
                disabled={showExplanation} // Disable buttons after selecting an answer
              >
                {option}
              </button>
            ))}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              {selectedAnswer !== currentQuestion.correctAnswer ? (
                <p className="text-red-500 font-medium">
                  Incorrect! The correct answer is:{" "}
                  <span className="text-green-600">
                    {currentQuestion.correctAnswer}
                  </span>
                </p>
              ) : (
                <p className="text-green-500 font-medium">Correct!</p>
              )}
              <p className="mt-2 text-gray-700">{currentQuestion.explanation}</p>
            </div>
          )}

          {/* Next Button */}
          <div className="mt-6 text-right">
            <button
              className={`px-6 py-2 rounded-lg font-medium ${
                showExplanation
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              onClick={handleNextClick}
              disabled={!showExplanation}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full text-center">
          {/* Quiz Completed */}
          <h1 className="text-2xl font-semibold mb-4">Quiz Completed!</h1>
          <p className="text-lg">
            Your Score: {score} / {questions.length}
          </p>
          <button
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600"
            onClick={handleRestart}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Mocktest;
