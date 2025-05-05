import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { MdOutlineCloudUpload } from "react-icons/md";
import axios from "axios";

function AddSubCategory() {
  const [subCategoryName, setSubCategoryName] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch categories on mount
  useEffect(() => {
    axios.get("http://localhost:7000/api/getcategories") // Make sure this endpoint exists
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error fetching categories", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!subCategoryName.trim() || !selectedCategory) {
      alert("Please enter a subcategory name and select a category.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:7000/api/addsubcategory", {
        subcategory: subCategoryName.trim(),
        categoryId: selectedCategory,
      });

      alert(response.data.message || "Subcategory added!");
      setSubCategoryName("");
      setSelectedCategory("");
    } catch (error) {
      console.error("Error:", error);
      alert(error.response?.data?.message || "Failed to add subcategory");
    }
  };

  return (
    <section className="p-5 bg-gray-50 min-h-screen">
    <form className="h-auto py-2 px-4 sm:px-8 md:px-10 w-full max-w-[700px] mx-auto">
      <div className="grid grid-cols-1 gap-4 mb-3 w-full">
          <div>
            <h3 className="text-sm font-medium mb-2">Subcategory Name</h3>
            <input
              type="text"
              value={subCategoryName}
              onChange={(e) => setSubCategoryName(e.target.value)}
              className="w-full p-3 text-sm h-[40px] border border-[rgba(0,0,0,0.4)] bg-white focus:outline-none"
            />
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Select Category</h3>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 sm:p-3 text-sm sm:text-base h-[45px] sm:h-[50px] border border-[rgba(0,0,0,0.4)] bg-white focus:outline-none"
              >
              <option value="">-- Select Category --</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.categoryname}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Button
          type="button"
          className="flex items-center justify-center gap-2 btn-blue btn-lgw-full sm:w-[50%] md:w-[30%] mx-auto mt-4"
          onClick={handleSubmit}
        >
          <MdOutlineCloudUpload className="text-[22px]" />
          Upload Subcategory
        </Button>
      </form>
    </section>
  );
}

export default AddSubCategory;
