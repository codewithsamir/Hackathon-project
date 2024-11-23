"use client";
import React, { useState } from "react";
import Link from "next/link";
import Dashboardlayout from "@/components/Dashboard/Dashboardlayout";

const MockTestPage = () => {
  // Sample data for courses and mock tests
  const courses = [
    { id: 1, name: "Mathematics" },
    { id: 2, name: "Physics" },
    { id: 3, name: "Chemistry" },
  ];

  const mockTests = {
    1: [
      { id: 101, name: "Algebra Basics Test" },
      { id: 102, name: "Calculus Practice Test" },
    ],
    2: [
      { id: 201, name: "Mechanics Test" },
      { id: 202, name: "Electromagnetism Test" },
    ],
    3: [
      { id: 301, name: "Organic Chemistry Test" },
      { id: 302, name: "Inorganic Chemistry Test" },
    ],
  };

  // State for selected course and available tests
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [availableTests, setAvailableTests] = useState([]);

  // Handle course selection
  const handleCourseSelect = (course:any) => {
    setSelectedCourse(course);
    setAvailableTests(mockTests[course.id] || []);
  };

  return (
    <Dashboardlayout>
    <div className="w-full h-full p-6">
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-center mb-8">Mock Test Portal</h1>

      {/* Course Selection Section */}
      <h2 className="text-2xl font-semibold mb-6">Select a Course</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`p-4 border rounded-lg text-center cursor-pointer ${
              selectedCourse?.id === course.id
                ? "bg-green-500 text-white"
                : "bg-white hover:shadow-lg"
            }`}
            onClick={() => handleCourseSelect(course)}
          >
            <h3 className="text-xl font-medium">{course.name}</h3>
          </div>
        ))}
      </div>

      {/* Divider */}
      {selectedCourse && (
        <div className="mt-10 mb-6">
          <h2 className="text-2xl font-semibold">
            Available Mock Tests for {selectedCourse.name}
          </h2>
          <hr className="border-gray-300 my-4" />
        </div>
      )}

      {/* Mock Test Section */}
      {selectedCourse && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {availableTests.map((test) => (
            <div
              key={test.id}
              className="p-4 border rounded-lg hover:shadow-lg bg-white"
            >
              <h3 className="text-xl font-medium">{test.name}</h3>
              <Link
                href={`/Dashboard/mocktest/${test.name}`}
                className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Start Test
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
    </Dashboardlayout>
  );
};

export default MockTestPage;
