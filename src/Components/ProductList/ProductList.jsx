import React from 'react'
import productData from '../Consone/ProductData.js'
function ProductList() {
  return (
    <div>
        <h2 className="text-center text-2xl md:text-2xl font-bold text-gray-800 my-6">
          🎂 Birthday Wish List 🎂
        </h2>
        <div className="main flex justify-between gap-3 ">
        <div className="left-container !w-[20%] !h-[105vh] shadow-md bg-white">
         <h3 className='text-center'> filter </h3>
        </div>
      <div className="right-container  !w-[80%] border bg-white border-none m-auto  py-8">
        <div className="items flex gap-5 flex-wrap justify-center">
        {productData.map((product) => (
            <div key={product.id} className="productItem bg-white mb-4 rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            
            
            {/* Image Wrapper */}
            <div className="imgWrapper  w-full !h-[250px] sm:h-[280px] overflow-hidden pb-2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover duration-300 group-hover:scale-105 transition-all"
              />
            </div>

            {/* Product Info */}
            <div className="info pb-4 px-2 text-center">
              <h3 className="text-gray-700 !text-[13px] md:text-base font-semibold p-1">
                {product.name}
              </h3>
              <h2 className="text-gray-900 !text-[14px] md:text-lg font-semibold">
                ₹{product.price}
              </h2>
            </div>

          </div>
            
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default ProductList
