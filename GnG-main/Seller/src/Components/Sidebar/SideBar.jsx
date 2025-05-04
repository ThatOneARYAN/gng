import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGift } from "react-icons/fa6";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineHome } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";
import { RiProductHuntLine } from "react-icons/ri";
import { SiHackthebox } from "react-icons/si";
import { TbCategoryPlus } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { Collapse as ReactCollapse } from "react-collapse";
import { MyContext } from "../../App.jsx";
import { FiUserPlus } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const SideBar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(MyContext);
  const { setIsOpenAddProductPanel } = useContext(MyContext);

  const [submenuIndex, setSubmenuIndex] = useState(null);
  const navigate = useNavigate();
  const isOpenSubmenu = (index) => {
    setSubmenuIndex(submenuIndex === index ? null : index);
  };

  const handlelogout = async () => {
    localStorage.removeItem("stoken");
    navigate("/login");
  };
  const handleToggle = () => {
    if (typeof setIsSidebarOpen === 'function') {
      setIsSidebarOpen((prev) => !prev);
    } else {
      console.error('setIsSidebarOpen is not a function');
    }
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div
        onClick={handleToggle}
        className="p-4 cursor-pointer lg:hidden fixed top-4 left-4 z-50 bg-white rounded-md shadow-md"
      >
        <GiHamburgerMenu size={22} />
      </div>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black opacity-30 lg:hidden z-30"
        />
      )}

      {/* Sidebar */}
      <div
        className={`sidebar fixed top-0 left-0 h-full bg-white border-r border-[rgba(0,0,0,0.1)] z-40 transition-all duration-300 ease-in-out
          ${isSidebarOpen ? "w-[70%] sm:w-[18%]" : "w-0 lg:w-[18%]"}
          overflow-hidden lg:overflow-auto`}>

        <div className="py-2 w-full">
          <Link
            to="/dashboard"
            onClick={() => window.innerWidth < 640 && setIsSidebarOpen(false)}
          >
            <h1 className="justify-end items-center !px-5 text-black flex gap-2 py-2 !text-[25px] !font-bold sm:text-2xl">
              <FaGift className="text-[22px]" /> GiftNGifts
            </h1>
          </Link>
        </div>

        <ul className="pt-2 !font-[600]">
          <li>
            <Link
              to="/"
              onClick={() => window.innerWidth < 640 && setIsSidebarOpen(false)}
            >
              <Button className="w-full !py-3 !font-[600] !justify-start !px-6 flex !gap-3 !text-[16px] !text-[rgba(0,0,0,0.8)] hover:!bg-[#f1f1f1]">
                <RxDashboard className="!text-[18px]" />{" "}
                <span style={{ textTransform: "initial" }}>Dashboard</span>
              </Button>
            </Link>
          </li>

          <li>
            <Link
              to="/seller-profile"
              onClick={() => window.innerWidth < 640 && setIsSidebarOpen(false)}
            >
              <Button className="w-full !py-3 !font-[600] !justify-start !px-6 flex gap-3 !text-[16px] !text-[rgba(0,0,0,0.8)] hover:!bg-[#f1f1f1]">
                <LuUsers className="!text-[18px]" />{" "}
                <span style={{ textTransform: "initial" }}>Seller Profile</span>
              </Button>
            </Link>
          </li>

          <li>
            <Button
              className="w-full !py-3 !font-[600] !justify-start !px-6 flex !gap-3 !text-[16px] !text-[rgba(0,0,0,0.8)] hover:!bg-[#f1f1f1]"
              onClick={() => isOpenSubmenu(3)}
            >
              <RiProductHuntLine className="!text-[20px]" />
              <span style={{ textTransform: "initial" }}>Products</span>
              <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
                <FaAngleDown
                  className={`transition-all ${
                    submenuIndex === 3 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>

            <ReactCollapse isOpened={submenuIndex === 3 ? true : false}>
              <ul className="w-full">
                <li className="!w-full">
                  <Link
                    to="/products"
                    onClick={() => window.innerWidth < 640 && setIsSidebarOpen(false)}
                  >
                    <Button
                      style={{ textTransform: "initial" }}
                      className="!text-[rgba(0,0,0,0.7)] !w-full !justify-start !text-[13px] !flex !gap-3 !pl-9 !font-[500]"
                    >
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>{" "}
                      Product List
                    </Button>

                  </Link>
                </li>
                <li className="!w-full">
                <Button
                    style={{ textTransform: "initial" }}
                    className="!text-[rgba(0,0,0,0.7)] !w-full !justify-start !text-[13px] !flex !gap-3  !pl-9 !font-[500]"
                    onClick={() =>
                      setIsOpenAddProductPanel({
                        open: true,
                        model: "Add Product",
                      })
                    }
                  >
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                    Product Upload
                  </Button>
                </li>
              </ul>
            </ReactCollapse>
          </li>

          <li>
            <Button
              className="w-full !py-3 !font-[600] !justify-start !px-6 flex !gap-3 !text-[16px] !text-[rgba(0,0,0,0.8)] hover:!bg-[#f1f1f1]"
              onClick={() => isOpenSubmenu(4)}
            >
              <TbCategoryPlus className="!text-[19px]" />
              <span style={{ textTransform: "initial" }}>Category</span>
              <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
                <FaAngleDown
                  className={`transition-all ${
                    submenuIndex === 4 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>

            <ReactCollapse isOpened={submenuIndex === 4 ? true : false}>
              <ul className="w-full">
                <li className="!w-full">
                  <Link
                    to="/categorylist"
                    onClick={() => window.innerWidth < 640 && setIsSidebarOpen(false)}
                  >
                    <Button
                      style={{ textTransform: "initial" }}
                      className="!text-[rgba(0,0,0,0.7)] !w-full !justify-start !text-[13px] !flex !gap-3 !pl-9 !font-[500]"
                    >
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>{" "}
                      Category List
                    </Button>
                  </Link>
                </li>
                <li className="!w-full">
                  <Button
                    style={{ textTransform: "initial" }}
                    className="!text-[rgba(0,0,0,0.7)] !w-full !justify-start !text-[13px] !flex !gap-3  !pl-9 !font-[500]"
                    onClick={() =>
                      setIsOpenAddProductPanel({
                        open: true,
                        model: "Add New Category",
                      })
                    }
                  >
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                    Add a Category
                  </Button>
                </li>
                <li className="!w-full">
                  <Link
                    to="/subcategorylist"
                    onClick={() => window.innerWidth < 640 && setIsSidebarOpen(false)}
                  >
                    <Button
                      style={{ textTransform: "initial" }}
                      className="!text-[rgba(0,0,0,0.7)] !w-full !justify-start !text-[13px] !flex !gap-3  !pl-9 !font-[500]"
                    >
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Sub Category List
                    </Button>
                  </Link>
                </li>
                <li className="!w-full">
                  <Button
                    style={{ textTransform: "initial" }}
                    className="!text-[rgba(0,0,0,0.7)] !w-full !justify-start !text-[13px] !flex !gap-3  !pl-9 !font-[500]"
                    onClick={() =>
                      setIsOpenAddProductPanel({
                        open: true,
                        model: "Add New Sub Category",
                      })
                    }
                  >
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                    Add a Sub Category
                  </Button>
                </li>
              </ul>
            </ReactCollapse>
          </li>

          <li>
            <Link
              to="/orders"
              onClick={() => window.innerWidth < 640 && setIsSidebarOpen(false)}
            >
              <Button className="w-full !py-3 !font-[600] !justify-start !px-6 flex !gap-3 !text-[16px] !text-[rgba(0,0,0,0.8)] hover:!bg-[#f1f1f1]">
                <SiHackthebox className="!text-[19px]" />{" "}
                <span style={{ textTransform: "initial" }}>Orders</span>
              </Button>
            </Link>
          </li>

          <li>
            <Button
              onClick={handlelogout}
              className="w-full !py-3 !font-[600] !justify-start !px-6 flex !gap-3 !text-[16px] !text-[rgba(0,0,0,0.8)] hover:!bg-[#f1f1f1]"
            >
              <CiLogout className="!text-[20px]" />{" "}
              <span style={{ textTransform: "initial" }}>Logout</span>
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
