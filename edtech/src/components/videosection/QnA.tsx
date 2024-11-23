"use client";
import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const QA = () => {
  const [question, setQuestion] = useState<string>("");
  const [questionsList, setQuestionsList] = useState<string[]>([]);

  const handleAskQuestion = () => {
    if (question.trim()) {
      setQuestionsList([...questionsList, question]);
      setQuestion("");
    }
  };

  return (
    <Box>
      <TextField
        fullWidth
        label="Ask a Question"
        variant="outlined"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAskQuestion}
      >
        Ask Question
      </Button>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Questions Asked:</Typography>
        {questionsList.length > 0 ? (
          <ul>
            {questionsList.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        ) : (
          <Typography>No questions asked yet.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default QA;
