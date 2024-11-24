import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center bg-white border rounded-lg shadow-md p-2 w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown} // Trigger search on "Enter" key
        placeholder={placeholder}
        className="flex-grow p-2 outline-none text-gray-700"
      />
      <button
        onClick={handleSearch}
        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
