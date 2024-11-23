"use client";

import React from "react";
import MCQForm from "@/components/Adminpart/MCQForm";

const CreateQuizPage = () => {
  const handleQuizSubmit = (data: {
    question: string;
    answers: Array<{ id: number; text: string; image?: File | null }>;
    correctAnswer: number;
    explanation: string;
  }) => {
    console.log("Quiz Created:", data);
    // Save the quiz data to the database or state
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <MCQForm onSubmit={handleQuizSubmit} />
    </div>
  );
};

export default CreateQuizPage;
