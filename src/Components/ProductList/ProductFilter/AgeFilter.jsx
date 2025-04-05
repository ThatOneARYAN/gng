import React, { useState } from "react";

const AgeGroupFilter = ({ selectedAgeGroups, setSelectedAgeGroups }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ageRanges = [
    [1, 3],
    [3, 7],
    [7, 11],
    [11, 15],
    [15, 20],
    [20, 30],
  ];

  const handleCheckboxChange = (range) => {
    const alreadySelected = selectedAgeGroups.some(
      (r) => r[0] === range[0] && r[1] === range[1]
    );

    if (alreadySelected) {
      setSelectedAgeGroups((prev) =>
        prev.filter((r) => r[0] !== range[0] || r[1] !== range[1])
      );
    } else {
      setSelectedAgeGroups((prev) => [...prev, range]);
    }
  };

  return (
    <div className="mt-4 w-full">
      <p
        onClick={() => setIsOpen(!isOpen)}
        className="text-md font-semibold cursor-pointer flex items-center gap-1 hover:text-purple-600 transition-colors duration-200"
      >
        Age Groups
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▲
        </span>
      </p>

      {isOpen && (
        <div className="pl-2 pt-2 flex flex-col gap-1">
          {ageRanges.map((range) => (
            <label
              key={range[0]}
              className="flex items-center gap-2 text-sm px-2 py-1 rounded-md transition-colors duration-200 hover:bg-purple-100"
            >
              <input
                type="checkbox"
                checked={selectedAgeGroups.some(
                  (r) => r[0] === range[0] && r[1] === range[1]
                )}
                onChange={() => handleCheckboxChange(range)}
              />
              {range[0]} – {range[1]} Years
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default AgeGroupFilter;
