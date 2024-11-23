"use client";
import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import Mocktest from "../Mocktest/Mocktest";

const Quiz = ({ questions }: any) => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setIsQuizStarted(true); // Start the quiz
  };

  return (
    <Box>
      {!isQuizStarted ? (
        <Button variant="contained" color="primary" onClick={handleStartQuiz}>
          Start Quiz
        </Button>
      ) : (
        <Mocktest questions={questions} />  // Pass quiz data to Mocktest
      )}
    </Box>
  );
};

export default Quiz;
