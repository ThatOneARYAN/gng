// import React from "react";
// import Button from "@mui/material/Button";
// import { IoSearchSharp } from "react-icons/io5";

// function Search() {
//   return (
//     <div className="searchBox w-full  bg-[#e5e5e5]  rounded-[5px] relative p-2">
//       <input
//         type="text"
//         placeholder="Search for Products....."
//         className="w-full h-[20px] bg-transparent focus:outline-none p-2 text-[15px]"
//         style={{placeholder:'color:#1f1f1f'}}/>
//       <Button className="!absolute top-[4px] right-[5px] z-50 !w-[37px] !min-w-[35px] h-[35px] !rounded-full !text-black">
//         <IoSearchSharp className="text-[#4e4e4e] text-[20px]" />
//       </Button>
//     </div>
//   );
// }

// export default Search;

// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import { IoSearchSharp } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";  // 👈 Import this

// function Search() {
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate(); // 👈 Hook to programmatically navigate

//   const handleSearch = () => {
//     navigate(`/SearchPage?query=${encodeURIComponent(query)}`); // 👈 Send query as URL param
//   };

//   return (
//     <div className="searchBox w-full bg-[#e5e5e5] rounded-[5px] relative p-2">
//       <input
//         type="text"
//         placeholder="Search for Products....."
//         className="w-full h-[20px] bg-transparent focus:outline-none p-2 text-[15px]"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)} // 👈 Update query state
//       />
//       <Button
//         onClick={handleSearch} // 👈 Navigate on click
//         className="!absolute top-[4px] right-[5px] z-50 !w-[37px] !min-w-[35px] h-[35px] !rounded-full !text-black"
//       >
//         <IoSearchSharp className="text-[#4e4e4e] text-[20px]" />
//       </Button>
//     </div>
//   );
// }

// export default Search;

import React, { useState } from "react";
import Button from "@mui/material/Button";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate

function Search() {
  const [inputValue, setInputValue] = useState(""); // ✅ hold the search input
  const navigate = useNavigate(); // ✅ initialize navigation

  const handleSearch = () => {
    // Navigate to SearchPage and pass query as state
    navigate("/SearchPage", { state: { query: inputValue } });
  };

  return (
    <div className="searchBox w-full bg-[#e5e5e5] rounded-[5px] relative p-2">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search for Products....."
        className="w-full h-[20px] bg-transparent focus:outline-none p-2 text-[15px]"
        style={{ placeholder: "color:#1f1f1f" }}
      />
      <Button
        onClick={handleSearch} // ✅ handle click to navigate
        className="!absolute top-[4px] right-[5px] z-50 !w-[37px] !min-w-[35px] h-[35px] !rounded-full !text-black"
      >
        <IoSearchSharp className="text-[#4e4e4e] text-[20px]" />
      </Button>
    </div>
  );
}

export default Search;

