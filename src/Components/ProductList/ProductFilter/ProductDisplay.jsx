

import React from 'react';
import { motion } from 'framer-motion';

const ProductDisplay = ({ products }) => {
  return (
    <div className="right-container !w-full border bg-white border-none m-auto py-8">
      <div className="items flex gap-5 flex-wrap justify-center">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="productItem bg-white mb-4 rounded overflow-hidden shadow-md transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.4,
              type: "spring",
            }}
          >
            {/* Image Wrapper */}
            <div className="imgWrapper w-full !h-[250px] sm:h-[280px] overflow-hidden pb-2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover duration-300 transition-all"
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;

// import React from 'react';
// import { motion } from 'framer-motion';

// const ProductDisplay = ({ products }) => {
//   return (
//     <div className="right-container w-full bg-white border-none m-auto py-8 px-4">
//       <div className="flex gap-5 flex-wrap justify-center">
//         {products.map((product, index) => (
//           <motion.div
//             key={product.id}
//             className="bg-white mb-4 rounded overflow-hidden shadow-md transition-shadow duration-300 w-[220px] sm:w-[250px] md:w-[280px]" // ADDED FIXED WIDTHS
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
//             }}
//             transition={{
//               delay: index * 0.1,
//               duration: 0.4,
//               type: "spring",
//             }}
//           >
//             {/* Image Wrapper */}
//             <div className="w-full h-[250px] sm:h-[280px] overflow-hidden pb-2">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-full object-cover transition-all duration-300"
//               />
//             </div>

//             {/* Product Info */}
//             <div className="pb-4 px-2 text-center">
//               <h3 className="text-gray-700 text-[13px] md:text-base font-semibold p-1">
//                 {product.name}
//               </h3>
//               <h2 className="text-gray-900 text-[14px] md:text-lg font-semibold">
//                 ₹{product.price}
//               </h2>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductDisplay;
