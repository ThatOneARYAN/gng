import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider } from "@mui/material";

function Header() {
  const [anchorMyAccount, setAnchorMyAccount] = useState(null);
  const openMyAccount = Boolean(anchorMyAccount);
  const token = localStorage.getItem("stoken");
  const name = localStorage.getItem("name") || "";
  const navigate = useNavigate();

  const handleClickMyAccount = (event) => {
    if (token) {
      setAnchorMyAccount(event.currentTarget);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("stoken");
    localStorage.removeItem("name");
    navigate("/login");
  };

  const handleCloseMyAccount = () => {
    setAnchorMyAccount(null);
  };

  return (
    <>
      <header className="ml-auto shadow-md w-full md:w-[82%] py-3 md:py-4 h-auto items-center bg-white">
        <div className="loginBtn flex justify-end w-full px-4 md:px-6">
          {token ? (
            <div
              onClick={handleClickMyAccount}
              className="cursor-pointer bg-[#5f6fff] text-white text-[14px] sm:text-[16px] md:text-[18px] font-semibold rounded-full w-9 md:w-10 h-9 md:h-10 flex items-center justify-center"
              title="Account"
            >
              {name && name[0] ? name[0].toUpperCase() : ""}
            </div>
          ) : (
            <Link to="/login">
              <button className="cursor-pointer border-2 border-gray-300 text-[14px] sm:text-[16px] md:text-[18px] text-gray-500 rounded pt-1 pb-2 px-6 md:px-8">
                Login
              </button>
            </Link>
          )}
        </div>

        <Menu
          anchorEl={anchorMyAccount}
          id="account-menu"
          open={openMyAccount}
          onClose={handleCloseMyAccount}
          onClick={handleCloseMyAccount}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem className="!bg-white">
            <div className="flex items-center gap-2">
              <div className="rounded-full w-[38px] h-[38px] bg-[#5f6fff] text-white flex items-center justify-center text-lg font-semibold">
                {name && name[0] ? name[0].toUpperCase() : ""}
              </div>
              <div className="info">
                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-[500] !leading-5">
                  {name}
                </h3>
              </div>
            </div>
          </MenuItem>

          <Divider />

          <MenuItem className="flex items-center gap-3 !ml-2">
            <FaRegUser className="text-[14px] sm:text-[16px]" />
            <span className="text-[12px] sm:text-[14px]">My account</span>
          </MenuItem>

          <MenuItem onClick={handleLogout} className="flex items-center gap-3 !ml-2">
            <PiSignOutBold className="text-[14px] sm:text-[16px]" />
            <span className="text-[12px] sm:text-[14px]">Sign Out</span>
          </MenuItem>
        </Menu>
      </header>
    </>
  );
}

export default Header;
