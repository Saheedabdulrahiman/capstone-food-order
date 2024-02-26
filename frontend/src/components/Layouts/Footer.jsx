import { MdFavoriteBorder,MdOutlineFoodBank } from "react-icons/md";
import {BiFoodMenu } from "react-icons/bi";
import { IoFastFoodOutline, IoRestaurantSharp } from "react-icons/io5";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="  bg-white w-full fixed bottom-0 py-4 max-md:block hidden border-t shadow-md border-stone-300   ">
        <div className="   flex justify-evenly py-2 text-stone-800 ">
            <Link to='/explore'><MdOutlineFoodBank className=" w-6 h-6"/></Link>
            <Link><BiFoodMenu className=" w-6 h-6"/></Link>
            <Link to='/order'><IoFastFoodOutline className=" w-6 h-6"/></Link>
            <Link to='/restaurants'><IoRestaurantSharp className=" w-6 h-6"/></Link>
           
            
        </div>
      </footer>
    </>
  )
}
