import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.",
      name: "Alvin Lim",
      title: "Technical Co-Founder, CTO at Dimensional",
      imageUrl: "https://media.istockphoto.com/id/1152189749/photo/cute-little-indian-asian-school-boy-with-note-book-isolated-over-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=lIs2gghGNKpyJu8A885Zn3u_tj21ABSlEwyhkpfdVeE=",
      courseUrl: "#",
    },
    {
      quote: "Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.",
      name: "Roy Evil",
      title: "Technical Co-Founder, CTO at Dimensional",
      imageUrl: "https://images.unsplash.com/photo-1495995424756-6a5a3f9e7543?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbGxhZ2UlMjBzdHVkZW50fGVufDB8fDB8fHww",
      courseUrl: "#",
    },
    {
      quote: "Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.",
      name: "Robat Evil",
      title: "Technical Co-Founder, CTO at Dimensional",
      imageUrl: "https://media.istockphoto.com/id/1152086681/photo/male-student-with-a-backpack-and-books.webp?a=1&b=1&s=612x612&w=0&k=20&c=K4uzAlutklzz6p0-Sk_44uB1BkZw90dgBoFwuVVLJxY=",
      courseUrl: "#",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col"
            >
              <p className="font-bold text-[25px]">
                <RiDoubleQuotesL />
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-bold">{testimonial.quote}</span>
              </p>
              <div className="flex items-center mt-auto">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              <a
                href={testimonial.courseUrl}
                className="text-blue-500 mt-4 block"
              >
                View this iOS & Swift course &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
