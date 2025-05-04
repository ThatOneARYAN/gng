import React from 'react';
import { IoSearch } from "react-icons/io5";

function SearchBox() {
  return (
    <div>
      <div className="w-full px-2 sm:px-4 md:px-6 items-center overflow-hidden flex h-auto rounded-md relative bg-[#f1f1f1]">
        <input 
          type="text" 
          className='w-full px-3 !h-[40px] sm:!h-[45px] md:!h-[50px] rounded-md text-[13px] sm:text-[14px] md:text-[16px] bg-[#f1f1f1] focus:outline-none' 
          placeholder='Search Product ......'  
        />
        <IoSearch className='!text-[18px] sm:!text-[20px] md:!text-[22px] text-gray-500'/>
      </div>
    </div>
  );
}

export default SearchBox;
