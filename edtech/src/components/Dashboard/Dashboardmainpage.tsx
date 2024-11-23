"use client";
import React from "react";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";
import Piechart from "../Charts/Piechart";
import "tailwindcss/tailwind.css";

const Dashboardmainpage = () => {
  return (
    <Container className="w-full h-full p-4 ">
      <Grid container spacing={4} className="w-full">
        {/* Card 1: Courses Completed */}
        <Grid item md={4}>
          <Card sx={{ bgcolor: "#711313" }} className="h-full">
            <CardContent className="flex flex-col justify-between h-full">
              <Typography variant="h5" component="div" className="text-white">
                Courses Completed
              </Typography>
              <Typography variant="body2" className="text-white mt-2">
                5 out of 10
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2: Test Results */}
        <Grid item md={4}>
          <Card sx={{ bgcolor: "#711313" }} className="h-full">
            <CardContent className="flex flex-col justify-between h-full">
              <Typography variant="h5" component="div" className="text-white">
                Test Results
              </Typography>
              <Typography variant="body2" className="text-white mt-2">
                Average Score: 85%
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
                <Piechart />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboardmainpage;
