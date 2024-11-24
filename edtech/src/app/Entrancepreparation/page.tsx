"use client";

import React, { useState } from "react";
import Pagelayout from "@/components/Landingpage/Pagelayout";
import EntranceCard from "@/components/Entrancecard";
import { entranceData } from "@/utility/entrancedata";
import SearchBar from "@/components/Searchbar";
import Link from "next/link";

const EntrancePreparation: React.FC = () => {
  const [filteredData, setFilteredData] = useState(entranceData);

  // Handle search logic
  const handleSearch = (query: string) => {
    const results = entranceData.filter((entrance) =>
      entrance.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(results);
  };

  return (
    <Pagelayout>
      <div className="p-10">
        <div className="flex flex-col items-center justify-center p-4 bg-gray-100">
          {/* Page Heading */}
          <h1 className="text-3xl font-bold text-center mb-4  inline-block pb-2">
            Entrance Preparation
          </h1>

          {/* Search Bar */}
          <div className="mb-8 w-full max-w-lg">
            <SearchBar
              placeholder="Search for an entrance preparation course..."
              onSearch={handleSearch}
            />
          </div>

          {/* Grid of Entrance Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.length > 0 ? (
              filteredData.map((entrance) => (
                <Link href={`/Entrancepreparation/${entrance.title}_${entrance.id}`} key={entrance.title}>
                    <EntranceCard key={entrance.title} entrance={entrance} />
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">
                No courses match your search.
              </p>
            )}
          </div>
        </div>
      </div>
    </Pagelayout>
  );
};

export default EntrancePreparation;
