import React from 'react';

const CoursesPage = () => {
  const courses = [
    {
      title: 'Data Analytics Course Highish',
      subtitle: 'Job Assistance | Gain Data Analytics Expertise',
      image: '/data analytic.jpeg',
    },
    {
      title: 'Data Analytics Course Highish',
      subtitle: 'Job Assistance | Gain Data Analytics Expertise',
      image: '/data analytic2.jpg',
    },
    {
      title: 'Data Analytics Course Highish',
      subtitle: 'Job Assistance | Gain Data Analytics Expertise',
      image: '/data analytic3.jpeg',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      {/* Heading Section */}
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600 inline-block pb-2">
        Our Courses
      </h1>
      
      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="max-w-xs bg-white rounded-lg shadow-lg p-4">
            {/* Image */}
            <div className="h-40">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Course Title */}
            <p className="text-lg font-semibold text-center my-2">{course.title}</p>
            
            {/* Subtitle */}
            <p className="text-sm text-center text-gray-700 mb-4">{course.subtitle}</p>
            
            {/* Registration Info */}
            {/* <p className="text-center font-bold mb-6 text-red-600">Registrations Started</p> */}

            {/* Button */}
            <div className="flex justify-center">
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
