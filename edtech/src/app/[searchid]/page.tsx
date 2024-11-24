'use client';
import Pagelayout from '@/components/Landingpage/Pagelayout';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const SearchResultsPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  // Mock courses data
  const courses = [
    { id: 1, title: 'Course 1', description: 'Introduction to course 1' },
    { id: 2, title: 'Course 2', description: 'Intermediate course 2' },
    { id: 3, title: 'Course 3', description: 'Advanced topics in course 3' },
  ];

  // Filter courses based on search query
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Pagelayout>
      <div className="p-6 h-[70vh] text-center">
        <h1 className="text-3xl font-bold mb-4">Search Results for "{query}"</h1>
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="border rounded p-4 shadow-md hover:shadow-lg"
              >
                <h2 className="text-xl font-semibold">{course.title}</h2>
                <p className="text-gray-700">{course.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No courses found matching your search.</p>
        )}
      </div>
    </Pagelayout>
  );
};

export default SearchResultsPage;
