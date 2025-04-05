import React, { useState } from "react";
import productData from "../../Consone/ProductData"; 
const CategorySidebar = ({ selectedCategory, setSelectedCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  
  const categoryItems = [
    "All",
    ...Array.from(new Set(productData.map((item) => item.category)))
  ];

  const handleCheckboxChange = (category) => {
    setSelectedCategory(category); // 
  };

  return (
    <div className="w-full">
      {/* Toggle Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="text-md font-semibold mt-3 cursor-pointer flex items-center gap-1 hover:text-purple-600 transition-colors duration-200"
      >
        <span className="text-md font-semibold">Categories</span>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-90"
          } text-sm`}
        >
          ▶
        </span>
      </div>

      {/* Category List with Checkboxes */}
      {isOpen && (
        <div className="pl-3 pt-3 flex flex-col gap-2">
          {categoryItems.map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 text-sm p-1 rounded-md cursor-pointer hover:bg-purple-100 transition-colors duration-200"
            >
              <input
                type="checkbox"
                checked={selectedCategory === item}
                onChange={() => handleCheckboxChange(item)}
              />
              {item}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategorySidebar;
