import React, { useEffect, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Collapse from 'react-collapse';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Button } from "@mui/material";
// import RangeSlider from 'range-slider-input';
import 'range-slider-input/dist/style.css';
import { Slider } from '@mui/material';
import axios from 'axios'

function LeftFilter() {
  const [isOpenCatFilter,setIsOpenCatFilter]=useState(true);
  //const [isOpenRelationFilter,setIsOpenRelationFilter]=useState(true);
  //const [isOpenAgeFilter,setIsOpenAgeFilter]=useState(true);
  const [isOpenDiscountFilter,setIsOpenDiscountFilter]=useState(true);
  const [isOpenPriceFilter, setIsOpenPriceFilter] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [category,setcategory]  =useState([])
  const [selectedCategories,setSelectedCtegories] = useState([])
  const [selectedDiscount,setSelectedDiscount] = useState([])
  const [products,setProducts] = useState([])
  const [sort,setSort] = useState([])
  const [discount,setDiscount] = useState([])

  useEffect(()=>{
     const fetchcategory =async()=>{
      try {
        const response=await axios.get("http://localhost:7000/api/getcategories")
        setcategory(response.data)
      } catch (error) {
        console.error('error occur',error)
      }
     }
     fetchcategory();
  },[])

  useEffect(()=>{
     const fetchFiltredProducts = async()=>{
        try {
          const params={
            categoryname : selectedCategories.join(","),
            minPrice : priceRange[0],
            maxPrice : priceRange[1],
            sort,
            discount:selectedDiscount.join(",")
          }

          const response = await axios.get("http://localhost:7000/api/filter",{params})
          setProducts(response.data.data)

        } catch (error) {
          console.log('someting went wrong',error)
        }
     }

     fetchFiltredProducts();


  },[selectedCategories,selectedDiscount,sort,priceRange])

  const handlecategory = (categoryname) => {
    setSelectedCtegories((prev) =>
      prev.includes(categoryname)
        ? prev.filter((cat) => cat !== categoryname)
        : [...prev, categoryname]
    );
  };
  
  const handlediscount = (discountValue) => {
    setSelectedDiscount((prev) =>
      prev.includes(discountValue)
        ? prev.filter((dis) => dis !== discountValue)
        : [...prev, discountValue]
    );
  };
  

  return (
    <>
      <aside className="sidebar ">
        {/* Category */}
        <div className="box !py-2 px-2">
          <h3 className="text-[16px] pl-3 flex items-center justify-between !font-[600]">
            Shop by Category
            <Button className="!w-[30px] !mx-8 !text-black  !h-[30px] !min-w-[30px] !rounded-full " onClick={()=>setIsOpenCatFilter(!isOpenCatFilter)}>
              {isOpenCatFilter===true ? <FaAngleUp /> :<FaAngleDown/>}</Button>
          </h3>
          <Collapse isOpened={isOpenCatFilter}>
          <div className="scroll  py-2 flex flex-col px-4">
            {
              category.map((category,index)=>(
                <FormControlLabel
                key={index}
              control={<Checkbox size="small" checked={selectedCategories.includes(category.categoryname)}
              onChange={() => handlecategory(category.categoryname)} />}
              label={category.categoryname}
            />
              ))
            }
           
          </div>
          </Collapse>
          
          
        </div>

{/* price */}
<div className="box pb-2">
  <h3 className="!text-[16px] pl-5 flex items-center justify-between !font-[600]">
    Price
    <Button
      className="!w-[30px] !mx-8 !text-black !h-[30px] !min-w-[30px] !rounded-full"
      onClick={() => setIsOpenPriceFilter(!isOpenPriceFilter)}
    >
      {isOpenPriceFilter ? <FaAngleUp /> : <FaAngleDown />}
    </Button>
  </h3>
  <Collapse isOpened={isOpenPriceFilter}>
   <div className="w-[240px] pl-3">
    <div className="py-2 px-4">
      <Slider
        value={priceRange}
        onChange={(e, newValue) => setPriceRange(newValue)}
        valueLabelDisplay="auto"
        min={0}
        max={10000}
        sx={{
          color: '#3b82f6', // Tailwind's blue-500
        }}
      />
       </div>
      <div className="flex !px-3 justify-between text-sm text-gray-600 w-[240px] ">
        <span>₹{priceRange[0]}</span>
        <span>₹{priceRange[1]}</span>
      </div>
    </div>
  </Collapse>
   </div>

        {/* Relation  
        <div className="box pb-2">
          <h3 className="text-[16px]  pl-3 flex items-center justify-between !font-[600]">
            Relation
            <Button className="!w-[30px] !mx-8 !text-black  !h-[30px] !min-w-[30px] !rounded-full " onClick={()=>setIsOpenRelationFilter(!isOpenRelationFilter)}>
              {isOpenRelationFilter===true ? <FaAngleUp /> :<FaAngleDown/>}</Button>
          </h3>
          <Collapse isOpened={isOpenRelationFilter}>
          <div className="scroll  py-2 flex flex-col px-4">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Father"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Mother"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Husband"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Wife"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Daughter"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Sister"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Brother"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fiance"
            />
          </div>
          </Collapse>
        </div>*/}
        {/* Age 
        <div className="box pb-2">
          <h3 className="text-[16px]  pl-3 flex items-center justify-between !font-[600]">
             Age
            <Button className="!w-[30px] !mx-8 !text-black  !h-[30px] !min-w-[30px] !rounded-full " onClick={()=>setIsOpenAgeFilter(!isOpenAgeFilter)}>
              {isOpenAgeFilter===true ? <FaAngleUp /> :<FaAngleDown/>}</Button>
          </h3>
          <Collapse isOpened={isOpenAgeFilter}>
          <div className="scroll  py-2 flex flex-col px-4">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="0 to 10"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="10 to 18"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="18 to 25"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="25 to 50"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="50 to 100"
            />
   
          </div>
          </Collapse>
        </div>
        */}
          {/* discount */}
          <div className="box px-2 pb-2">
          <h3 className="text-[16px]  pl-3 flex items-center justify-between !font-[600]">
             Discount
            <Button className="!w-[30px] !mx-8 !text-black  !h-[30px] !min-w-[30px] !rounded-full " onClick={()=>setIsOpenDiscountFilter(!isOpenDiscountFilter)}>
              {isOpenDiscountFilter===true ? <FaAngleUp /> :<FaAngleDown/>}</Button>
          </h3>
          <Collapse isOpened={isOpenDiscountFilter}>
          <div className="scroll  py-2 flex flex-col px-4">
          {[10, 20, 30, 40, 50].map((discount, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox
              size="small"
              checked={selectedDiscount.includes(discount)}
              onChange={() => handlediscount(discount)}
            />
          }
          label={`${discount}% or more`}
        />
      ))}
          </div>
          </Collapse>
        </div>

        
      </aside>
    </>
  );
}

export default LeftFilter;
