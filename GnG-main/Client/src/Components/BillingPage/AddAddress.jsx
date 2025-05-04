import React from 'react'
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Totalprice from '../Cart Page/Totalprice';
function AddAddress() {
  return (
    <div>
      <div className="container !w-[100%] gap-3 !my-2 lg:w-[80%] lg:mx-w-[80%] w-full lg:flex gap-4">
      <div className="leftPart bg-white  p-5 w-[70%] lg:w-[70%]  w-full">
            <h1 className="text-[16px] pl-1">Billing Details</h1>
            <form className="w-full">
              <h6 className="pt-3 mb-2 px-1 text-[13px] font-[500]">Name and Phone *</h6>
              <div className="lg:flex items-center gap-3">
                <TextField className="w-full lg:w-[50%]" label="Full Name" size="small" variant="filled" />
                <TextField className="w-full lg:w-[50%] lg:mt-0 mt-3" label="Phone Number" size="small" variant="filled" />
              </div>
              <h6 className="pt-3 mb-2 px-1 text-[13px] font-[500]">Street Address *</h6>
              <TextField className="w-full" label="Address (Area and Street)" size="small" variant="filled" />
              <h6 className="pt-3 mb-2 px-1 text-[13px] font-[500]">City and State *</h6>
              <div className="lg:flex items-center gap-3">
                <TextField className="w-full lg:w-[50%]" label="City/District/Town" size="small" variant="filled" />
                <TextField className="w-full lg:w-[50%] lg:mt-0 mt-3" label="State" size="small" variant="filled" />
              </div>
              <h6 className="pt-3 mb-2 px-1 text-[13px] font-[500]">Pincode and Alternate Phone *</h6>
              <div className="lg:flex items-center gap-3">
                <TextField className="w-full lg:w-[50%]" label="Pincode" size="small" variant="filled" />
                <TextField className="w-full lg:w-[50%] lg:mt-0 mt-3" label="Alternate Number" size="small" variant="filled" />
              </div>
              <h6 className="pt-3 mb-2 px-1 text-[13px] font-[500]">Email Address *</h6>
              <TextField className="w-full" label="Email Address" size="small" variant="filled" />
              <div className="btns flex justify-end mx-1 mt-4 w-full">
                <Button variant="contained" className="w-full !bg-[#fb541b] !h-[45px]">
                  Deliver Here
                </Button>
              </div>
            </form>
      </div>

      {/* Right Part - Total Price */}
      <div className="rightPart w-full lg:!m-0 mt-4 lg:w-[30%]">
        <Totalprice />
      </div>
    </div>
    </div>
  )
}

export default AddAddress
