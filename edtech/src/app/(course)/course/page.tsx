import React from 'react';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import 'tailwindcss/tailwind.css';

const courses = [
  { title: 'Course 1', description: 'Description for Course 1' },
  { title: 'Course 2', description: 'Description for Course 2' },
  { title: 'Competitive Exam Course 1', description: 'Description for Competitive Exam Course 1' },
  { title: 'Competitive Exam Course 2', description: 'Description for Competitive Exam Course 2' },
];

const CourseCard = ({ title, description }:{title:string,description:string}) => (
  <Card className="m-4">
    <CardContent>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const CoursePage = () => (
  <Container className="mt-8">
    <Typography variant="h4" component="h1" className="mb-4">
      Courses
    </Typography>
    <Grid container spacing={4}>
      {courses.map((course, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CourseCard title={course.title} description={course.description} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default CoursePage;
