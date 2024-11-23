"use client";
import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const Review = () => {
  const [review, setReview] = useState<string>("");

  const handleSubmitReview = () => {
    console.log("Review Submitted: ", review); // You can integrate backend or local storage to store reviews
    setReview(""); // Clear the review input after submission
  };

  return (
    <Box>
      <TextField
        fullWidth
        multiline
        rows={6}
        label="Leave a Review"
        variant="outlined"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmitReview}
      >
        Submit Review
      </Button>
    </Box>
  );
};

export default Review;
