"use client"
import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import 'tailwindcss/tailwind.css';
import Coursecard from '../Course/Coursecard';
import Link from 'next/link';

const CoursePage = ({ onCourseSelect }:any) => {
  const courses = [
    { id: 1, title: 'Course 1', description: 'Description for Course 1' , image: 'https://images.unsplash.com/photo-1499332347742-4946bddc7d94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVybiUyMHN0YWNrfGVufDB8fDB8fHww' },
    { id: 2, title: 'Course 2', description: 'Description for Course 2' , image: 'https://images.unsplash.com/photo-1499332347742-4946bddc7d94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVybiUyMHN0YWNrfGVufDB8fDB8fHww'    },
    // Add more courses as needed
  ];

  return (
    <Container className="w-full h-full p-4">
      <Typography variant="h4" component="h1" className="P-6">
        Courses
      </Typography>
      <div className="flex  flex-wrap"> 
        {courses.map((course) => (
       <div key={course.id}>
        <Link href={`/Dashboard/courses/${course.title}`}>
        <Coursecard  course={course} />
        </Link>
       </div>
        ))}
      </div>
      
    </Container>
  );
};

export default CoursePage;
