"use client";
import React, { useState } from "react";
import { Box, Card } from "@mui/material";
import SyllabusList from "./Syllabuslist";
import { syllabusdata } from "@/utility/sylabus";

const VideoSection = () => {
  // State to manage the currently playing video
  const [currentVideo, setCurrentVideo] = useState(
    "https://www.example.com/default-video.mp4"
  );

  // Syllabus data with topics and subtopics
  const [syllabus, setSyllabus] = useState(syllabusdata);

  return (
    <Box sx={{ display: "flex", gap: 4, p: 4 }}>
     {/* Video Player */}
     <Box
        sx={{
          flex: 2,
          position: "sticky",
          top: 102,  // Distance from the top of the viewport to keep the video sticky
          maxHeight: "calc(100vh - 64px)",  // Prevents overlapping the syllabus part when scrolling
          overflow: "hidden", // Ensures no overflow from the video player
        }}
        className="video-container"
      >
        <Card>
          <video
            src={currentVideo}
            controls
            style={{ width: "100%", height: "auto" }}
          />
        </Card>
      </Box>

      {/* Syllabus */}
      <SyllabusList syllabus={syllabus} setSyllabus={setSyllabus} setCurrentVideo={setCurrentVideo} />
    </Box>
  );
};

export default VideoSection;
