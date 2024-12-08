import React from 'react'
import { TbUserExclamation } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <div className="bg-yellow-100 w-[1349px] h-100px py-4 px-6 flex justify-between items-center">
    <div className="flex-grow flex justify-center space-x-6">
      <a href="#" className="text-black font-medium hover:text-gray-700">Home</a>
      <a href="#" className="text-black font-medium hover:text-gray-700">Shop</a>
      <a href="#" className="text-black font-medium hover:text-gray-700">About</a>
      <a href="#" className="text-black font-medium hover:text-gray-700">Contact</a>
    </div>
    <div className='flex mr-10 space-x-5'> 
  <TbUserExclamation />
  <CiSearch />
  <CiHeart />
  <BsCart3 />
   </div>
  </div>
  
  )
}

export default Header