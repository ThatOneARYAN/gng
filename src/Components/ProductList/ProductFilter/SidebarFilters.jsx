// Inside SidebarFilters.jsx
import React from "react";
import CategoryFilter from "./CategoryFilter";
import CategorySidebar from "./CategoryFilter";
import RelationshipFilter from "./RelationshipFilter";
import RatingFilter from "./RatingFilter";
import DiscountFilter from "./DiscountFilter";
import AgeGroupFilter from "./AgeFilter";
import PriceSlider from "./PriceSlider";


const SidebarFilters = ({
  query,
  setQuery,
  selectedCategory,
  setSelectedCategory,
  isCategoryOpen,
  setIsCategoryOpen,
  selectedRelationship,
  selectedSubCategory,          
  setSelectedSubCategory, 
  setSelectedRelationship,
  selectedRatings,
  setSelectedRatings,
  selectedDiscounts,
  setSelectedDiscounts,
  selectedAgeGroups,
  setSelectedAgeGroups,
  priceRange,
  setPriceRange,
  setFilteredProducts,
}) => {
  return (
    <div className="w-full md:w-1/4 shadow-md bg-white p-4 rounded-md">
      <h3 className="text-center text-lg font-semibold mb-4">Filters</h3>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full p-2 border border-gray-300 rounded-md my-2"
      />

      <PriceSlider priceRange={priceRange} setPriceRange={setPriceRange} />
      <CategoryFilter
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
  isCategoryOpen={isCategoryOpen}
  setIsCategoryOpen={setIsCategoryOpen}
  setFilteredProducts={setFilteredProducts}
/>

      {/* <RelationshipFilter
        selectedRelationship={selectedRelationship}
        setSelectedRelationship={setSelectedRelationship}
      /> */}
      <RelationshipFilter
  selectedRelationships={selectedRelationship}
  setSelectedRelationships={setSelectedRelationship}
/>

      <RatingFilter
        selectedRatings={selectedRatings}
        setSelectedRatings={setSelectedRatings}
      />
      <DiscountFilter
        selectedDiscounts={selectedDiscounts}
        setSelectedDiscounts={setSelectedDiscounts}
      />
      <AgeGroupFilter
        selectedAgeGroups={selectedAgeGroups}
        setSelectedAgeGroups={setSelectedAgeGroups}
      />
    </div>
  );
};

export default SidebarFilters;
