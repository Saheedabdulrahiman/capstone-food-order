import { FaShoppingCart } from "react-icons/fa";
import { RiUserLine,RiLogoutCircleLine  } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { useContext } from "react";
import UserProgressContext from "../../store/UserProgressContext";
import { deleteAuthToken } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Header() {

const userProgressCtx =   useContext(UserProgressContext)

const navigate = useNavigate()
function handlShowCart(){
  userProgressCtx.showCart()
 }

function handleLogout(){
  deleteAuthToken()
  return navigate('/')
}
 
  return (
    <>
     <header className=' lg:bg-white lg:w-[85%] max-md:w-full max-md:bg-white lg:ml-72 md:right-0  font-lexend  flex justify-between max-sm:h-24 max-md:h-20 md:h-24 lg:justify-start lg:pl-12 lg:space-x-4  fixed top-0 left-0  z-10'>
        {/* <div>
          <span> handel the Sidebar hambuger icon</span>
        </div> */}
        <div className=" flex flex-col justify-center  ">
        {/* <p className=" capitalize md:text-3xl text-2xl font-bold">{ }</p> */}
        {/* <p className=" max-sm:hidden text-sm font-semibold ">hello name welcome</p> */}
        </div>
        <div className=" flex justify-center items-center">
        <input type="text" placeholder="search anything" className=" h-12 md:w-72 max-sm:w-32 border-2 rounded-xl px-4 border-stone-400 md:hidden lg:block lg:ml-16 " />
        </div>
        <div className="  gap-6 flex   items-center md:absolute right-20 top-6">
       
        <span onClick={handlShowCart} className=" border-2 border-stone-600 w-12 h-12 rounded-full hover:cursor-pointer flex justify-center items-center hover:bg-stone-100  active:bg-purple-700 active:text-stone-100"><FaShoppingCart className=" w-6 h-6" /></span>
       
        <span className="  w-12 h-12 rounded-full hover:cursor-pointer flex justify-center items-center hover:bg-stone-100 active:bg-stone-300 ">< RiUserLine className="  w-10 h-10" /></span>
        <button onClick={handleLogout}  className="bg-crimson flex items-center gap-2 text-red-700 font-semibold py-2 px-4 rounded-full mx-3 shadow  hover:text-white hover:bg-red-700 max-md:hidden "><RiLogoutCircleLine className=" w-5 h-5" />Logout</button>
         <span onClick={handleLogout} className=" mr-6 md:hidden"><BiLogOut className=" w-10 h-10 text-red-700 "/></span>
        </div>
     </header>
    </>
    
  )
}
