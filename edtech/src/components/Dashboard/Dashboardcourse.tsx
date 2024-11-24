"use client";
import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import "tailwindcss/tailwind.css";
import Coursecard from "../Course/Coursecard";
import Link from "next/link";
import { coursedata } from "@/utility/coursedata";
import SearchBar from "@/components/Searchbar"; // Import the SearchBar component

const CoursePage = () => {
  const [filteredCourses, setFilteredCourses] = useState(coursedata);

  const handleSearch = (query: string) => {
    if (query.trim() === "") {
      setFilteredCourses(coursedata);
    } else {
      setFilteredCourses(
        coursedata.filter((course) =>
          course.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  return (
    <Container className="w-full h-full p-4">
      <Typography variant="h4" component="h1" className="mb-6">
        Courses
      </Typography>

      {/* SearchBar Integration */}
      <div className="mb-8">
        <SearchBar
          placeholder="Search for courses..."
          onSearch={handleSearch}
        />
      </div>

      {/* Course List */}
      <div className="flex flex-wrap gap-4">
        {filteredCourses.map((course) => (
          <div key={course.title}>
            <Link href={`/Dashboard/courses/${course.title}`}>
              <Coursecard course={course} />
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CoursePage;
