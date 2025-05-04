import React from "react";

export const SearchResultlist = ({ results, onSelect }) => {
  return (
    <div className="absolute top-full left-0 w-full bg-white border mt-1 max-h-[250px] overflow-y-auto rounded shadow z-50">
      {results.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => onSelect(item)} 
        >
          <div>
            <p className="font-medium">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
