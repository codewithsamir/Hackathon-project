"use client";
import React from "react";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";
import BasicPie from "../Charts/Piechart"; // Importing the updated Pie chart component
import "tailwindcss/tailwind.css";

const Dashboardmainpage = () => {
  // Dummy Data for courses completed
  const coursesCompleted = 5;
  const totalCourses = 10;

  // Dummy Data for Test Results
  const averageScore = 85;

  // Pie chart data structure
  const pieChartData = {
    labels: ["Completed", "Pending"],
    data: [coursesCompleted, totalCourses - coursesCompleted],
  };

  return (
    <Container className="w-full h-full p-4">
      <Grid container spacing={4} className="w-full">
        {/* Card 1: Courses Completed */}
        <Grid item md={4}>
          <Card sx={{ bgcolor: "blue" }} className="h-full">
            <CardContent className="flex flex-col justify-between h-full">
              <Typography variant="h5" component="div" className="text-white">
                Courses Completed
              </Typography>
              <Typography variant="body2" className="text-white mt-2">
                {coursesCompleted} out of {totalCourses}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2: Test Results */}
        <Grid item md={4}>
          <Card sx={{ bgcolor: "green" }} className="h-full">
            <CardContent className="flex flex-col justify-between h-full">
              <Typography variant="h5" component="div" className="text-white">
                Test Results
              </Typography>
              <Typography variant="body2" className="text-white mt-2">
                Average Score: {averageScore}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Chart Section */}
        <Grid item md={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" className="py-4">
                User Performance
              </Typography>
              <div className="w-full flex justify-center">
                {/* Pass the pieChartData to the Pie chart component */}
                <BasicPie data={pieChartData} />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboardmainpage;
