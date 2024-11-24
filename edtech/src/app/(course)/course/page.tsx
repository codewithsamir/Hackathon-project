'use client';
import React, { useState } from 'react';

import Pagelayout from '@/components/Landingpage/Pagelayout';
import { coursedata } from '@/utility/coursedata';
import Coursecard from '@/components/Course/Coursecard';
import SearchBar from '@/components/Searchbar'; // Import the SearchBar component
import Link from 'next/link';

const CoursePage = () => {
  const [filteredCourses, setFilteredCourses] = useState(coursedata);

  const handleSearch = (query: string) => {
    if (query.trim() === '') {
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
    <Pagelayout>
      <div className="px-10 w-full lg:w-[80%] mx-auto pb-10 pt-4">
        <div className="flex flex-col items-center justify-center  ">
          {/* Heading Section */}
          <h1 className="text-3xl font-bold text-center  inline-block py-4">
            Our Courses
          </h1>

          {/* Search Bar */}
          <div className="mb-8 w-full ">
            <SearchBar placeholder="Search courses..." onSearch={handleSearch} />
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Link href={`/course/${course.title}_${course.id}`} key={course.title}>
                <Coursecard key={course.title} course={course} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Pagelayout>
  );
};

export default CoursePage;
