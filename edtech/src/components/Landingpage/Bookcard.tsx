import React from "react";
import { FaStar } from "react-icons/fa";

interface BookCardProps {
  imageUrl: string;
  title: string;
  description: string;
  edition?: string;
  rating: number;
}

const BookCard: React.FC<BookCardProps> = ({
  imageUrl,
  title,
  description,
  edition,
  rating,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition border-2 w-[300px]">
      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover rounded"
      />
      {/* Title */}
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      {edition && <p className="text-purple-600 text-sm font-medium">{edition}</p>}
      {/* Rating */}
      <div className="flex items-center mt-2">
        <span className="text-sm font-bold text-gray-800">{rating}</span>
        <FaStar className="text-yellow-500 ml-1" />
      </div>
    </div>
  );
};

export default BookCard;
