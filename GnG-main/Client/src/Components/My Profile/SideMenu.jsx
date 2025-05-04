import React from 'react'
import { Avatar, Button, Divider } from '@mui/material'
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { RiLogoutCircleLine } from "react-icons/ri";
import {NavLink} from 'react-router'
import { IoBagCheckOutline } from "react-icons/io5";
function SideMenu() {
  return (
    <>
          <div className="card bg-white shadow-md rounded-md">
           <div className="w-full px-5 pt-5 pb-3 flex items-center justify-center flex-col">
            <div className=' w-[90px] group h-[90px]  overflow-hidden rounded-full mb-2 relative'>
                      <Avatar
                        className="sm:!mb-6 !mb-18"
                        alt="Remy Sharp"
                        src="https://bni-india.in/img/site/61b86b9dbc9e2500070cdb9a.jpg"
                        sx={{ width: 90, height: 90 }}
                      />
                      <div  className='overlay w-[100%] group-hover:opacity-100 h-[100%] absolute top-0 z-50 bg-[rgba(0,0,0,0.6)] flex items-center justify-center opacity-0 transition-all'>
                        <IoCloudUploadOutline className='text-white text-[18px]' />
                        <input type="file" className='absolute top-0 left-0 w-full h-full opacity-0' />
                      </div>
                      </div>
                     <h2 className='font-[600] text-[15px]'>Bhoi Roshni</h2>
                     <p className='text-[12px] font-[500]'>bhoiroshni847@gmail.com</p>

           </div>
          <Divider/>
           <ul className='list-none pb-5 pt-3 myAccountTabs'>
            <li className='w-full'>
            <NavLink to="/myProfile" >
            <Button className='flex !px-5 !py-2 items-center !text-left !justify-start gap-2 w-full  !capitalize !rounded-none !text-[rgba(0,0,0,0.8)] '><FaRegUser className='text-[16px]'/> My Profile</Button>
            </NavLink>
            </li>
            <li className='w-full'>
            <NavLink to="/orders">
            <Button className='flex !py-2 !px-5 items-center !text-left !justify-start gap-2 w-full  !capitalize !rounded-none !text-[rgba(0,0,0,0.8)] '><IoBagCheckOutline className='text-[17px]' /> My Orders</Button>
            </NavLink>
            </li>
            <li className='w-full'>
            <NavLink to="/wishlist">
            <Button className='flex !py-2 !px-5 items-center !text-left !justify-start gap-2 w-full  !capitalize !rounded-none !text-[rgba(0,0,0,0.8)] '><FiHeart className='text-[16px]' /> My WishList </Button>
            </NavLink>
            </li>
            <li className='w-full'>
            <Button className='flex !py-2 !px-5 items-center !text-left !justify-start gap-2 w-full  !capitalize !rounded-none !text-[rgba(0,0,0,0.8)] '><RiLogoutCircleLine className='text-[16px]' /> Logout</Button>
            </li>
           </ul>
          </div>
    </>
  )
}

export default SideMenu