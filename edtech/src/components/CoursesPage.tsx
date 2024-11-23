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
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <div key={index} className="max-w-sm bg-white rounded-lg shadow-lg p-6">
            <div className="h-40">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <p className="text-xl font-semibold text-center mb-2 my-2">{course.title}</p>
            <p className="text-center text-gray-700 mb-4">{course.subtitle}</p>
            <p className="text-center font-bold mb-6 my-10">Registrations Started</p>
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
