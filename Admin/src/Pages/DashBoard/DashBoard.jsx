import { Button, Link } from "@mui/material";
import image from "../../assets/helloAdmin.jpg";
import { FiPlus } from "react-icons/fi";
import DashBordBox from "../../Components/DashbordBoxes/DashBordBox.jsx";
import React, { useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
import Badges from "../../Components/DashbordBoxes/Badges.jsx";
import { MyContext } from "../../App.jsx";

function DashBoard() {
  const { setIsOpenAddProductPanel } = useContext(MyContext);
  const [isOpenOrderdProduct, setOpenOrderdProduct] = useState(null);

  const isShowOrder = (index) => {
    if (isOpenOrderdProduct === index) {
      setOpenOrderdProduct(null);
    } else {
      setOpenOrderdProduct(index);
    }
  };

  return (
    <>
      <DashBordBox />

      <div className="w-full bg-[#e7edfd] px-4 md:px-10 py-4 flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-2 justify-between rounded-md">
        <div className="info text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold leading-10 mb-3">
            Welcome To GiftnGifts
          </h1>
          <p className="text-sm md:text-base">
            Here's what’s happening on your store today. See the statistics at once.
          </p>
          <br />
          <Button
            className="btn-blue"
            onClick={() => setIsOpenAddProductPanel({ open: true, model: "Add Product" })}
          >
            <FiPlus className="pr-1 text-lg" />
            Add Product
          </Button>
        </div>
        <img src={image} alt="Admin Welcome" className="w-[200px] md:w-[250px]" />
      </div>

      <div className="orders my-4 shadow-md rounded-md py-4 px-4 md:px-6 bg-white">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent Orders</h2>
        </div>

        <div className="overflow-x-auto mt-5">
          <table className="w-full text-sm text-gray-600">
            <thead className="text-xs bg-gray-100 text-black">
              <tr>
                <th className="px-4 py-2">&nbsp;</th>
                <th className="px-4 py-2 whitespace-nowrap">Order Id</th>
                <th className="px-4 py-2 whitespace-nowrap">Payment Id</th>
                <th className="px-4 py-2 whitespace-nowrap">Name</th>
                <th className="px-4 py-2 whitespace-nowrap">Phone Number</th>
                <th className="px-4 py-2 whitespace-nowrap">Address</th>
                <th className="px-4 py-2 whitespace-nowrap">Pincode</th>
                <th className="px-4 py-2 whitespace-nowrap">Total Amount</th>
                <th className="px-4 py-2 whitespace-nowrap">User Id</th>
                <th className="px-4 py-2 whitespace-nowrap">Order Status</th>
                <th className="px-4 py-2 whitespace-nowrap">Date</th>
              </tr>
            </thead>

            <tbody>
              {[0, 1].map((orderIndex) => (
                <React.Fragment key={orderIndex}>
                  <tr className="bg-white border-b text-center">
                    <td className="py-3">
                      <button
                        className="px-3 py-1 rounded-full hover:bg-gray-100"
                        onClick={() => isShowOrder(orderIndex)}
                      >
                        {isOpenOrderdProduct === orderIndex ? (
                          <FaAngleUp className="text-gray-700" />
                        ) : (
                          <FaAngleDown className="text-gray-700" />
                        )}
                      </button>
                    </td>
                    <td className="px-4 py-2 font-medium">834532762373276</td>
                    <td className="px-4 py-2 font-medium">pay_PTP0qEXJSCHCV</td>
                    <td className="px-4 py-2 font-medium whitespace-nowrap">Bhoi Roshni</td>
                    <td className="px-4 py-2 font-medium whitespace-nowrap">6737846728</td>
                    <td className="px-4 py-2 font-medium max-w-[270px] overflow-auto">
                      Baji Patel Patel no vhoevad, Visnagar
                    </td>
                    <td className="px-4 py-2 font-medium">373742</td>
                    <td className="px-4 py-2 font-medium">₹2,342</td>
                    <td className="px-4 py-2 font-medium whitespace-nowrap">
                      roshuroshni264@gmail.com
                    </td>
                    <td className="px-4 py-2 font-medium">
                      <Badges status="Delivered" />
                    </td>
                    <td className="px-4 py-2 font-medium whitespace-nowrap">2024-12-1</td>
                  </tr>

                  {isOpenOrderdProduct === orderIndex && (
                    <tr>
                      <td colSpan={11}>
                        <div className="w-full px-2 md:px-10 my-2 overflow-x-auto">
                          <table className="w-full shadow text-sm text-gray-600">
                            <thead className="text-xs bg-gray-100 text-black">
                              <tr>
                                <th className="px-4 py-2 whitespace-nowrap">Product Id</th>
                                <th className="px-4 py-2 whitespace-nowrap">Product Title</th>
                                <th className="px-4 py-2 whitespace-nowrap">Product Image</th>
                                <th className="px-4 py-2 whitespace-nowrap">Price</th>
                                <th className="px-4 py-2 whitespace-nowrap">Sub Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[1, 2].map((_, i) => (
                                <tr key={i} className="bg-white border-b text-center">
                                  <td className="px-4 py-2 font-medium">64723c782ca93</td>
                                  <td className="px-4 py-2 font-medium whitespace-nowrap">
                                    Red Velvet Fresh Cream Cake Half kg
                                  </td>
                                  <td className="px-4 py-2">
                                    <img
                                      src="https://www.fnp.com/images/pr/l/v20221205201829/red-velvet-fresh-cream-cake-half-kg_1.jpg"
                                      alt=""
                                      className="w-12 h-12 object-cover rounded mx-auto"
                                    />
                                  </td>
                                  <td className="px-4 py-2 font-medium whitespace-nowrap">₹2,000</td>
                                  <td className="px-4 py-2 font-medium whitespace-nowrap">₹2,000</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
