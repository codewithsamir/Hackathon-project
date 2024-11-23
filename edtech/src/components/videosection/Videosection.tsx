"use client";
import React, { useState } from "react";
import { Box, Card } from "@mui/material";
import SyllabusList from "./Syllabuslist";
import { syllabusdata } from "@/utility/sylabus";  // Assuming syllabusdata is imported from utility
import Videotabs from "./Videotabs";

const VideoSection = () => {
  const [currentVideo, setCurrentVideo] = useState(
    "https://www.example.com/default-video.mp4"
  );
  const [selectedSyllabus, setSelectedSyllabus] = useState(syllabusdata[0] || {}); // Default to the first topic
  const [syllabus, setSyllabus] = useState(syllabusdata);

  return (
    <Box sx={{ display: "flex", gap: 4, p: 4, height: "100vh", width: "100%" }}>
      {/* Video Player Container */}
      <Box
        sx={{
          position: "relative",
          width: "calc(100% - 400px)",
          overflowY: "auto",
          maxHeight: "calc(100vh - 64px)",
        }}
        className="custom-scroll"
      >
        <Card sx={{ mb: 2 }}>
          <video
            src={currentVideo}
            controls
            style={{ width: "100%", height: "auto" }}
          />
        </Card>
        <Videotabs syllabus={selectedSyllabus} />
      </Box>

      {/* Syllabus List Container */}
      <Box
        sx={{
          flex: 1,
          maxHeight: "calc(100vh - 64px)",
          overflowY: "auto",
          borderLeft: "2px solid #ccc",
          width: "300px",
        }}
        className="custom-scroll"
      >
        <SyllabusList
          syllabus={syllabus}
          setSelectedSyllabus={setSelectedSyllabus}
          setCurrentVideo={setCurrentVideo}
        />
      </Box>
    </Box>
  );
};

export default VideoSection;
