import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LeftFilter from './LeftFilter';

function ProductList() {
  const location = useLocation();
  const { category } = location.state || {};

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:7000/api/client/productsbycategory");
        if (data.success && Array.isArray(data.categories)) {
          const categoryData = data.categories.find(cat => cat.category === category);
          if (categoryData) {
            setProducts(categoryData.products);
          } else {
            setProducts([]);
          }
        }
      } catch (error) {
        console.error("Error fetching category products:", error);
      }
    };

    if (category) {
      fetchCategoryProducts();
    }
  }, [category]);

  

  return (
    <div>
      <h1 className="text-center !text-[20px] font-[600] text-gray-800 my-4 ">
         {category ? `${category} Products` : 'Birthday Wish List'}
      </h1>
      <div className="container-fluid w-[100%]  flex justify-between gap-2 ">
        <div className="leftpart bg-white py-2 !w-[20%]">
          <LeftFilter/>
        </div>
        <div className="rightpart bg-white  !w-[80%]">
        <div className="items flex !py-6 !gap-5 flex-wrap justify-center">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className="productItem bg-white rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 max-w-xs">
                <Link to={`/productDetails/${product._id}`}>
                <div className="imgWrapper w-[250] h-[250px] sm:h-[280px] overflow-hidden pb-2">
                    <img
                      src={product?.images?.[0]?.url || "/default-image.jpg"}
                      alt={product?.images?.[0]?.altText || product?.title}
                      className="w-[250] h-[250] object-cover duration-300 group-hover:scale-105 transition-all"
                    />
                  </div>
                </Link>

                <div className="info pb-4 px-4 text-center">
                  <h3 className="text-gray-700 text-sm md:text-base font-semibold p-1">
                    {product.title}
                  </h3>
                  <h2 className="text-gray-900 text-sm md:text-lg font-semibold mb-2">
                    ₹{product.price}
                  </h2>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No products found for this category.</p>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
