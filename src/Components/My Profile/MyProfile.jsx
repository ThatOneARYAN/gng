import React from 'react';
import SideMenu from './SideMenu';
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';
function MyProfile() {
  return (
    <section className='py-6 w-full'>
      <div className="container flex gap-5">
      <div className="col1 w-[20%]">
       <SideMenu/>
       </div>
       <div className="clo2 w-[80%]">
        <div className="card bg-white p-5 shadow-md rounded">
            <h1 className="text-[17px] pl-1 py-2 font-[600]">My Profile</h1>
         
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
                        <div className="btns flex justify-center gap-5 mx-1 mb-3 mt-8 w-full">
                          <Button variant="contained" className="w-[50%] !bg-[#ff9f00]  !h-[45px]">
                            Save
                          </Button>
                          <Button variant="contained" className="w-[50%] !bg-[#fb541b] !h-[45px]">
                            Edit
                          </Button>
                        </div>
             </form>
        </div>
       </div>
      </div>
      
    </section>
  )
}

export default MyProfile
