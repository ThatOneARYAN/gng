
import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import SideMenu from "./Sidemenu";
function MyProfile() {
  return (
    <section className="py-6 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <SideMenu />
        </div>
        <div className="clo2 w-[80%]">
          <div className="card bg-white  shadow-md rounded px-10 ">
            <h1 className="text-[18px]  py-4 font-[600]">My Profile</h1>

            <div className="main flex justify-between mb-2">
              <div className="flex flex-col gap-1 pb-5">
                <p>Name : Bhoi Roshni </p>
                <p>phone : 7724345312</p>
                <p>Email : roshnibhoi232@gmail.com</p>
              </div>
              <div>
                <div className="btn flex gap-2 mr-2">
                  <button className="!p-0  !m-0">
                    <MdEdit className="text-blue-600 text-[20px]" />
                  </button>
                  <button className="!p-0  !m-0">
                    <MdDelete className="text-red-600 text-[20px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-white  shadow-md rounded p-10">
            <form className="w-full items-center !m-auto ">
              <h6 className="pt-3 mb-2 px-1 text-[13px] font-[500]">
                Name and Phone *
              </h6>
              <div className="lg:flex items-center gap-3">
                <TextField
                  className="w-full lg:w-[50%]"
                  label="Full Name"
                  size="small"
                  variant="filled"
                />
                <TextField
                  className="w-full lg:w-[50%] lg:mt-0 mt-3"
                  label="Phone Number"
                  size="small"
                  variant="filled"
                />
              </div>
              <h6 className="pt-3 mb-2 px-1 text-[13px] font-[500]">
                Email Address *
              </h6>
              <TextField
                className="w-[100%]"
                label="Email Address"
                size="small"
                variant="filled"
              />
              <div className="btn flex justify-center mt-8 w-full">
                <Button
                  variant="contained"
                  className="w-[35%] !m-auto !bg-[#fb541b] !h-[45px]"
                >
                  Save
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyProfile;
