"use client";
import React, { useState } from "react";
import { Box, Paper, Tabs, Tab } from "@mui/material";
import Overview from "./Overview";
import MakeNote from "./Makenote";
import QA from "./QnA";
import Quiz from "./Quiz";
import Review from "./Review";

const Videotabs = ({ syllabus }: any) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 0:
        return <Overview syllabusdata={syllabus} />;
      case 1:
        return <MakeNote />;
      case 2:
        return <QA />;
      case 3:
        return <Quiz questions={syllabus?.quiz || []} />;  // Pass quiz data if available
      case 4:
        return <Review />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ flex: 1, padding: 2, height: "100vh" }}>
      <Paper sx={{ p: 2 }}>
        {/* Tab Header */}
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="video details tabs"
          centered
          variant="fullWidth"
        >
          <Tab label="Overview" />
          <Tab label="Make Note" />
          <Tab label="Q&A" />
          <Tab label="Quiz" />
          <Tab label="Review" />
        </Tabs>

        {/* Render content based on the selected tab */}
        <div className="py-6">{renderContent()}</div>
      </Paper>
    </Box>
  );
};

export default Videotabs;
