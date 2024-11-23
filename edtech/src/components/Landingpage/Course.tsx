import React from "react";

const books = [
  {
    label: "Trending",
    labelColor: "bg-green-500",
    imageUrl: "/web.jpg",
    title: "Frontend Development",
    description: "Css,Html, javascript",
    edition: "2024 Edition",

    rating: "4.8",
  },
  {
    label: "Bestselling",
    labelColor: "bg-blue-500",
    imageUrl: "/backend.png",
    title: "Backend Development",
    description: "Python,Node.js,Ruby,Java,PHP,C#",
    edition: "2024 Edition",

    rating: "4.8",
  },
  {
    label: "Bestselling",
    labelColor: "bg-blue-500",
    imageUrl: "andriod.jpg",
    title: "Android Development",
    description: "Java,Kotlin",
    edition: "2024 Edition",
    
    rating: "4.8",
  },
  {

    labelColor: "bg-yellow-500",
    imageUrl: "ciber.jpg",
    title: "cybersecurity",
    description: "Python,C/C++,Java,Javascript,Ruby,Powershell",
    edition: "2024 Edition",
  
    rating: "4.9",
  },
//   {
    
//     labelColor: "bg-yellow-500",
//     imageUrl: "haking.jpg",
//     title: "Hacking, Several Programming",
//     description: "Python,C/C++,Javascript,Ruby,Bash",
//     edition: "2024 Edition",
   
//     rating: "4.9",
//   },
];

const NEETBooks = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-6">
          <h2 className="text-3xl font-bold">Popular Courses Books</h2>
         
        </div>
        <div className="flex flex-wrap gap-4 justify-center   ">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition border-2 w-[300px]"
            >
              {/* Label */}
              {/* <div
                className={`absolute -top-2 -left-2 px-3 py-1 text-white text-xs font-semibold rounded-md ${book.labelColor}`}
              >
                {book.label}
              </div> */}
              {/* Image */}
              <img
                src={book.imageUrl}
                alt={book.title}
                className="w-full h-40 object-cover rounded"
              />
              {/* Title */}
              <h3 className="text-lg font-semibold mt-4">{book.title}</h3>
              <p className="text-sm text-gray-600">{book.description}</p>
              <p className="text-purple-600 text-sm font-medium">
                {book.edition}
              </p>
             
              {/* Rating */}
              <div className="flex items-center mt-2">
                <span className="text-sm font-bold text-gray-800">
                  {book.rating}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-500 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.217 3.74a1 1 0 00.95.69h3.907c.969 0 1.371 1.24.588 1.81l-3.158 2.3a1 1 0 00-.364 1.118l1.217 3.74c.3.921-.755 1.688-1.538 1.118l-3.158-2.3a1 1 0 00-1.176 0l-3.158 2.3c-.783.57-1.838-.197-1.538-1.118l1.217-3.74a1 1 0 00-.364-1.118l-3.158-2.3c-.783-.57-.38-1.81.588-1.81h3.907a1 1 0 00.95-.69l1.217-3.74z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NEETBooks;
