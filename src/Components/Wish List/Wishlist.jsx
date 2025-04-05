import React from 'react'
import SideMenu from '../My Profile/SideMenu'
import MywishLists from './MywishLists'

function Wishlist() {
  return (
     
    <section className='py-6 w-full'>
    <div className="container flex gap-5">
      <div className="col1 w-[20%]">
      <SideMenu/>
      </div>
      <div className="col2 w-[80%]">
               <div className="!py-4  bg-white sm:px-3 px-2 border-b border-[rgba(0,0,0,0.1)]">
                 <h2 className="text-[rgba(0,0,0,0.8)]">Your Cart</h2>
                 <p className="">
                   There are <span className="font-bold">2</span> products in your
                   cart
                 </p>
               </div>
               <div className="shadow-md rounded-md bg-white reviewScroll w-full border-b border-gray-200 pt-1  !max-h-[420px] overflow-y-scroll overflow-x-hidden">
                 <MywishLists />
                 <MywishLists />
                 <MywishLists />
                 <MywishLists />
               </div>
      </div>
      </div>
      </section>
  )
}

export default Wishlist
