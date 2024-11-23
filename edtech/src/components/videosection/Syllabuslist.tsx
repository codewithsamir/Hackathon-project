"use client"
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Collapse,
  LinearProgress,
  IconButton,
} from "@mui/material";
import { ExpandLess, ExpandMore, CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";


interface Subtopic {
  id: number;
  title: string;
  url: string;
  completed: boolean;
}

interface Topic {
  id: number;
  title: string;
  subtopics: Subtopic[];
}

const SyllabusList = ({syllabus,setSyllabus,setCurrentVideo,setSelectedSyllabus}:any) => {
  // Sample syllabus data
//   const [syllabus, setSyllabus] = useState<Topic[]>(syllabusdata);

  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);
//   const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  // Handle topic expansion
  const handleExpandClick = (topicId: number) => {
    setExpandedTopic((prev) => (prev === topicId ? null : topicId));
  };

  // Toggle completion status
  const toggleCompletion = (topicId: number, subtopicId: number) => {
    setSyllabus((prevSyllabus) =>
      prevSyllabus.map((topic) =>
        topic.id === topicId
          ? {
              ...topic,
              subtopics: topic.subtopics.map((subtopic) =>
                subtopic.id === subtopicId
                  ? { ...subtopic, completed: !subtopic.completed }
                  : subtopic
              ),
            }
          : topic
      )
    );
  };

  // Calculate progress for each topic
  const calculateProgress = (subtopics: Subtopic[]) => {
    const completedCount = subtopics.filter((sub) => sub.completed).length;
    return (completedCount / subtopics.length) * 100;
  };

  return (
    <Box sx={{ flex: 1}}>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Syllabus
          </Typography>
          <List>
            {syllabus.map((topic) => (
              <React.Fragment key={topic.id}>
                {/* Main Topic */}
                <ListItem disablePadding>
                  <ListItemButton onClick={() => handleExpandClick(topic.id)}>
                    <Box
                      sx={{ flex: 1, display: "flex", alignItems: "center" }}
                    >
                      <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                        {topic.title}
                      </Typography>
                      {expandedTopic === topic.id ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </Box>
                  </ListItemButton>
                </ListItem>

                {/* Progress Bar */}
                <Box sx={{ mx: 2, my: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={calculateProgress(topic.subtopics)}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      "& .MuiLinearProgress-bar": {
                        backgroundColor:
                          calculateProgress(topic.subtopics) === 100
                            ? "#4caf50"
                            : "#1976d2",
                      },
                    }}
                  />
                </Box>

                {/* Subtopics */}
                <Collapse
                  in={expandedTopic === topic.id}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {topic.subtopics.map((subtopic) => (
                      <ListItem
                        key={subtopic.id}
                        sx={{ pl: 4, display: "flex", alignItems: "center" }}
                      >
                        <IconButton
                          size="small"
                          onClick={() => toggleCompletion(topic.id, subtopic.id)}
                          sx={{ color: subtopic.completed ? "#4caf50" : "gray" }}
                        >
                          {subtopic.completed ? (
                            <CheckCircle fontSize="small" />
                          ) : (
                            <RadioButtonUnchecked fontSize="small" />
                          )}
                        </IconButton>
                        <ListItemButton
                          onClick={() => {
                            setSelectedSyllabus(topic);
                            setCurrentVideo(subtopic.url)}}
                          sx={{
                            flex: 1,
                            color: subtopic.completed ? "#4caf50" : "inherit",
                            textDecoration: subtopic.completed
                              ? "line-through"
                              : "none",
                          }}
                        >
                          {subtopic.title}
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SyllabusList;
