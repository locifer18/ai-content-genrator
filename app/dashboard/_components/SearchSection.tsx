import { Search } from "lucide-react";
import React from "react";

const SearchSection = ({onSearchInput}:any) => {

  return (
    <div className="p-6 md:p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center text-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center">Discover All Templates</h2>
      <p className="mt-2 text-center text-sm md:text-base">
        Explore a wide range of templates to kickstart your projects
      </p>
      <div className="w-full flex justify-center">
        <div className="flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-full max-w-md md:w-[50%]">
          <Search className="text-primary h-4 w-4" />
          <input
            type="text"
            placeholder="Search templates..."
            className="w-full bg-transparent outline-none text-black text-sm"
            onChange={(event) => onSearchInput(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
