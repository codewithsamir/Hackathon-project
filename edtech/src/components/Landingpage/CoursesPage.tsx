import { coursedata } from '@/utility/coursedata';
import React from 'react';
import Coursecard from '../Course/Coursecard';

const CoursesPage = () => {


  return (
    <div className=" flex flex-col items-center justify-center p-4 bg-gray-100">
      {/* Heading Section */}
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600 inline-block pb-2">
        Our Courses
      </h1>
      
      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursedata.slice(0, 3).map((course, index) => (
          <Coursecard key={course.title} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
