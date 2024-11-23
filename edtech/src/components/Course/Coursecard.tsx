import Image from 'next/image';
import React from 'react';

const Coursecard = ({ course }: { course: any }) => {
  return (
    <div
      className="w-[300px] h-[350px] bg-white rounded-lg shadow-md m-2 transform transition-transform duration-300 hover:scale-105"
      
    >
      <div className="image w-full h-[200px] overflow-hidden rounded-t-lg">
        <Image
          src={course.image}
          alt={course.title}
          width={300}
          height={200}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="content p-4">
        <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
        <p className="text-gray-600">{course.description}</p>
      </div>
    </div>
  );
};

export default Coursecard;
