import React, { useState } from "react";

const RatingFilter = ({ selectedRatings, setSelectedRatings }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCheckboxChange = (range) => {
    const rangeKey = `${range[0]}-${range[1]}`;
    setSelectedRatings((prev) =>
      prev.some((r) => r[0] === range[0] && r[1] === range[1])
        ? prev.filter((r) => `${r[0]}-${r[1]}` !== rangeKey)
        : [...prev, range]
    );
  };

  return (
    <div className="mt-4 w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="text-md font-semibold cursor-pointer flex items-center gap-1 hover:text-blue-600 transition-colors duration-200"
      >
        <span>Ratings</span>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▲
        </span>
      </div>

      {isOpen && (
        <div className="mt-2 flex flex-col gap-2 pl-1">
          {[[1, 2], [2, 3], [3, 4], [4, 5]].map((range) => (
            <label
              key={`${range[0]}-${range[1]}`}
              className="flex items-center gap-2 text-sm p-1 rounded-md cursor-pointer hover:bg-blue-100 transition-colors duration-200"
            >
              <input
                type="checkbox"
                checked={selectedRatings.some(
                  (r) => r[0] === range[0] && r[1] === range[1]
                )}
                onChange={() => handleCheckboxChange(range)}
              />
              {range[0]}–{range[1]}★
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default RatingFilter;
