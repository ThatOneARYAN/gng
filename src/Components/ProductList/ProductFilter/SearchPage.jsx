

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; 

import SidebarFilters from "./SidebarFilters";
import ProductDisplay from "./ProductDisplay";
import productData from "../../Consone/ProductData";

function SearchPage() {
  const location = useLocation();
  const passedQuery = location.state?.query || "";
  const [query, setQuery] = useState(passedQuery); 
  
  
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const [selectedRelationships, setSelectedRelationships] = useState([]);

  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);
  const [selectedAgeGroups, setSelectedAgeGroups] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  
  useEffect(() => {
    const search = query?.trim().toLowerCase() || "";
  
    
  
    const filtered = productData.filter((product) => {
      const nameMatches = product.name?.toLowerCase().includes(search);
      const categoryMatches =
        selectedCategory === "All" || product.category === selectedCategory;
      
        const relationshipMatches =
  selectedRelationships.length === 0 ||
  (product.relationship &&
    selectedRelationships.includes(product.relationship.toLowerCase()));


       
      
          const ratingsMatch =
        selectedRatings.length === 0 ||
        selectedRatings.some(
          (range) => product.rating >= range[0] && product.rating < range[1]
        );
      const discountsMatch =
        selectedDiscounts.length === 0 ||
        selectedDiscounts.some(
          (range) => product.discount >= range[0] && product.discount < range[1]
        );
      const ageMatch =
        selectedAgeGroups.length === 0 ||
        selectedAgeGroups.some(
          (range) =>
            product.agegroup &&
            product.agegroup[0] >= range[0] &&
            product.agegroup[1] <= range[1]
        );
      const priceMatch =
        product.price >= priceRange[0] && product.price <= priceRange[1];
  
      return (
        categoryMatches &&
        relationshipMatches &&
        nameMatches &&
        ratingsMatch &&
        discountsMatch &&
        ageMatch &&
        priceMatch
      );
    });
  
    // console.log("✅ Filtered Products:", filtered); // Step 4
  
    setFilteredProducts(filtered);
  }, [
    query,
    selectedCategory,
    selectedRelationships,
    selectedRatings,
    selectedDiscounts,
    selectedAgeGroups,
    priceRange,
    productData
  ]);
  
  

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center text-3xl font-bold text-gray-800 my-6">
        🎂 Birthday Wish List 🎂
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <SidebarFilters
          query={query}
          setQuery={setQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedSubCategory={selectedSubCategory}
          setSelectedSubCategory={setSelectedSubCategory}
          isCategoryOpen={isCategoryOpen}
          setIsCategoryOpen={setIsCategoryOpen}
          selectedRelationship={selectedRelationships}
          setSelectedRelationship={setSelectedRelationships}
          selectedRatings={selectedRatings}
          setSelectedRatings={setSelectedRatings}
          selectedDiscounts={selectedDiscounts}
          setSelectedDiscounts={setSelectedDiscounts}
          selectedAgeGroups={selectedAgeGroups}
          setSelectedAgeGroups={setSelectedAgeGroups}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          setFilteredProducts={setFilteredProducts}
        />
  
        {/* ✅ Use only ProductDisplay component */}
        <ProductDisplay products={filteredProducts} />
      </div>
    </div>
  );
  
}
export default SearchPage;
