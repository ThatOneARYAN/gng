import React, { useState } from "react";
import RelationData from "../../Consone/RelationData"; 

const RelationshipFilter = ({ selectedRelationships, setSelectedRelationships }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (relation) => {
    if (selectedRelationships.includes(relation)) {
      setSelectedRelationships(selectedRelationships.filter((r) => r !== relation));
    } else {
      setSelectedRelationships([...selectedRelationships, relation]);
    }
  };

  return (
    <div className="w-full">
      <p
        onClick={() => setIsOpen(!isOpen)}
        className="text-md font-semibold mt-3 cursor-pointer flex items-center gap-1 hover:text-purple-600 transition-colors duration-200"
      >
        Relationship
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
          {RelationData.map((relation) => (
            <label
              key={relation.text}
              className="flex items-center gap-2 text-sm p-1 rounded-md cursor-pointer hover:bg-purple-100 transition-colors duration-200"
            >
              <input
                type="checkbox"
                checked={selectedRelationships.includes(relation.text)}
                onChange={() => handleCheckboxChange(relation.text)}
              />
              {relation.text}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default RelationshipFilter;
