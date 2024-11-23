"use client";

import React from "react";
import MCQForm from "@/components/Adminpart/MCQForm";

const DrivingTestPage = () => {
  const handleDrivingTestSubmit = (data: {
    question: string;
    answers: Array<{ id: number; text: string; image?: File | null }>;
    correctAnswer: number;
    explanation: string;
  }) => {
    console.log("Driving Test Question:", data);
    // Save the driving test question to the database or state
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <MCQForm onSubmit={handleDrivingTestSubmit} />
    </div>
  );
};

export default DrivingTestPage;
