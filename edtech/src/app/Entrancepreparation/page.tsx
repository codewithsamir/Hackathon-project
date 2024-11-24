"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"; // Import js-cookie to manage cookies
import Pagelayout from "@/components/Landingpage/Pagelayout";
import EntranceCard from "@/components/Entrancecard";
import { entranceData } from "@/utility/entrancedata";
import SearchBar from "@/components/Searchbar";

const EntrancePreparation: React.FC = () => {
  const [filteredData, setFilteredData] = useState(entranceData);
  const router = useRouter();

  // Handle search logic
  const handleSearch = (query: string) => {
    const results = entranceData.filter((entrance) =>
      entrance.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(results);
  };

  // Handle card click
  const handleCardClick = (entranceId: string) => {
    const authToken = Cookies.get("authToken");

    if (authToken) {
      // If user is logged in, redirect to the Dashboard entrance test
      router.push(`/Dashboard/Entrancetest?entranceId=${entranceId}`);
    } else {
      // If user is not logged in, redirect to login page
      router.push("/login");
    }
  };

  return (
    <Pagelayout>
      <div className="p-10">
        <div className="flex flex-col items-center justify-center p-4 bg-gray-100">
          {/* Page Heading */}
          <h1 className="text-3xl font-bold text-center mb-4 inline-block pb-2">
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
              filteredData.map((entrance:any) => (
                <div
                  key={entrance.title}
                  className="cursor-pointer"
                  onClick={() => handleCardClick(entrance.title)} // Call handleCardClick on card click
                >
                  <EntranceCard entrance={entrance} />
                </div>
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
