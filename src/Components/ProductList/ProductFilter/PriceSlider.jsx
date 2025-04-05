// import React from "react";

// const PriceSlider = ({ priceRange, setPriceRange }) => {
//   const [min, max] = priceRange;

//   const handleMinChange = (e) => {
//     const newMin = Number(e.target.value);
//     if (newMin <= max) {
//       setPriceRange([newMin, max]);
//     }
//   };

//   const handleMaxChange = (e) => {
//     const newMax = Number(e.target.value);
//     if (newMax >= min) {
//       setPriceRange([min, newMax]);
//     }
//   };

//   const handleSliderChange = (e) => {
//     const newValue = Number(e.target.value);
//     const midpoint = (min + max) / 2;

//     // Adjust closer value based on midpoint
//     if (Math.abs(newValue - min) < Math.abs(newValue - max)) {
//       setPriceRange([newValue, max]);
//     } else {
//       setPriceRange([min, newValue]);
//     }
//   };

//   return (
//     <div className="mb-4">
//       <label className="block font-semibold text-sm mb-2">Price Range</label>
//       <div className="flex flex-col sm:flex-row items-center gap-3 mb-2">
//         <input
//           type="number"
//           value={min}
//           onChange={handleMinChange}
//           className="w-full sm:w-1/2 p-1 border border-gray-300 rounded-md text-sm"
//           min="0"
//         />
//         <span className="text-gray-500">to</span>
//         <input
//           type="number"
//           value={max}
//           onChange={handleMaxChange}
//           className="w-full sm:w-1/2 p-1 border border-gray-300 rounded-md text-sm"
//           min="0"
//         />
//       </div>

//       <input
//         type="range"
//         min="0"
//         max="1000"
//         value={(min + max) / 2}
//         onChange={handleSliderChange}
//         className="w-full"
//       />
//       <div className="text-xs text-gray-500 mt-1">Adjust slider to fine-tune range</div>
//     </div>
//   );
// };

// export default PriceSlider;

import React from "react";

const PriceSlider = ({ priceRange, setPriceRange }) => {
  const [min, max] = priceRange;

  const handleMinChange = (e) => {
    const newMin = Number(e.target.value);
    if (newMin <= max) {
      setPriceRange([newMin, max]);
    }
  };

  const handleMaxChange = (e) => {
    const newMax = Number(e.target.value);
    if (newMax >= min) {
      setPriceRange([min, newMax]);
    }
  };

  const handleSliderChange = (e) => {
    const newValue = Number(e.target.value);
    const midpoint = (min + max) / 2;

    // Adjust the closest boundary based on midpoint
    if (Math.abs(newValue - min) < Math.abs(newValue - max)) {
      setPriceRange([newValue, max]);
    } else {
      setPriceRange([min, newValue]);
    }
  };

  return (
    <div className="mb-4">
      <label className="block font-semibold text-sm mb-2">Price Range</label>
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-2">
        <input
          type="number"
          value={min}
          onChange={handleMinChange}
          className="w-full sm:w-1/2 p-1 border border-gray-300 rounded-md text-sm"
          min="0"
          max={max}
        />
        <span className="text-gray-500">to</span>
        <input
          type="number"
          value={max}
          onChange={handleMaxChange}
          className="w-full sm:w-1/2 p-1 border border-gray-300 rounded-md text-sm"
          min="0"
          max={min}
        />
      </div>

      <input
        type="range"
        min="0"
        max="1000"
        value={(min + max) / 2}
        onChange={handleSliderChange}
        className="w-full"
      />
      <div className="text-xs text-gray-500 mt-1">Adjust slider to fine-tune range</div>
    </div>
  );
};

export default PriceSlider;
