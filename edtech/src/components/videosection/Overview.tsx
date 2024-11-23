"use client";
import React from "react";
import { Typography, Box } from "@mui/material";

const Overview: React.FC = ({syllabusdata}:any) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        {syllabusdata.title}
      </Typography>
      <Typography variant="body1" paragraph>
     {syllabusdata.description}
      </Typography>
      <Typography variant="body1" paragraph>
        Make sure to follow along with the examples in the video. You can pause and rewind the video to fully understand each concept 
        before moving on to the next part. If you have any questions, feel free to ask in the Q&A section.
      </Typography>
      <Typography variant="body1">
        Enjoy the video, and don't forget to take notes!
      </Typography>
    </Box>
  );
};

export default Overview;
