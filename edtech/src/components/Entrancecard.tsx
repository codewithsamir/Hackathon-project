"use client";

import React from "react";

type EntranceCardProps = {
  entrance: {
    title: string;
    description: string;
    imageUrl: string;
    price: number;
  };
};

const EntranceCard: React.FC<EntranceCardProps> = ({ entrance }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition border-2 w-[300px]">
      <img
        src={entrance.imageUrl}
        alt={entrance.title}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-semibold mt-4">{entrance.title}</h3>
      <p className="text-sm text-gray-600">{entrance.description}</p>
      {/* <p className="text-purple-600 text-lg font-medium mt-2">${entrance.price}</p> */}
    </div>
  );
};

export default EntranceCard;
