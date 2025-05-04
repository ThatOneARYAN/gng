import React from "react";
import products from "./products";

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div
          className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden"
          key={product.id}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">
              {product.category} - {product.subCategory}
            </p>
            <p className="line-through text-gray-500">₹{product.oldPrice}</p>
            <p className="text-xl font-bold text-orange-600">₹{product.price}</p>
            <p className="text-sm text-gray-500 mt-2">Sales: {product.sales}</p>
            <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
              <div
                className="h-full bg-green-500 rounded-full"
                style={{ width: `${product.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
