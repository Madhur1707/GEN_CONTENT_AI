import { Search } from "lucide-react";
import React from "react";

function SearchSection({ onSearchInput }: any) {
  return (
    <div className="p-10 bg-gradient-to-br from-gray-900 via-purple-700 to-black flex flex-col justify-center items-center text-white">
      <h2 className="text-3xl font-bold ">Browse All Templates</h2>
      <p>What Would You Like to Create Today....!</p>
      <div className="w-full flex items-center justify-center">
        <div className="flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]">
          <Search className="text-primary" />
          <input
            className="bg-transparent outline-none text-black w-full"
            type="text"
            placeholder="Search"
            onChange={(event) => onSearchInput(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
