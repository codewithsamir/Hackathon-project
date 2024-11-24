import React from "react";
import BookCard from "./Bookcard";
import { books } from "@/utility/bookdata";



const BookList = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-6">
          <h2 className="text-3xl font-bold">Popular Courses Books</h2>
         
        </div>
        



    <div className="flex flex-wrap justify-center gap-4">
      {books.map((book, index) => (
        <BookCard
          key={index}
          imageUrl={book.imageUrl}
          title={book.title}
          description={book.description}
          edition={book.edition}
          rating={Number(book.rating)}
        />
      ))}
    </div>



      </div>
    </div>
  );
};

export default BookList;
