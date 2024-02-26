import { MdFavoriteBorder, MdOutlineFoodBank } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { IoFastFoodOutline, IoRestaurantSharp } from "react-icons/io5";
import { PiBowlFoodBold } from "react-icons/pi";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import UserProgressContext from "../../store/UserProgressContext";
import { NavLink, } from "react-router-dom";

export default function Sidebar() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNoOfItems, item) => {
    return totalNoOfItems + item.quantity;
  }, 0);

  function handlShowCart() {
    userProgressCtx.showCart();
  }

  const navPrimaryButton =
    " flex  items-center justify-start   gap-4 capitalize text-lg  py-2 px-4 rounded-xl hover:text-orange-800 hover:font-semibold";

  const navActiveButton =
    " flex  items-center justify-start   gap-4 capitalize text-lg  py-2 px-4 rounded-xl bg-orange-600 text-stone-100";

  return (
    <>
      <aside className=" font-lexend max-sm:w-3/4 sm:w-52 md:w-72 h-screen pt-4 border-r-2 flex flex-col  items-center shadow-xl fixed max-lg:hidden ">
        <h2 className=" capitalize font-bold text-3xl mt-6">the stable</h2>

        <div className="  mt-14 ">
          <nav>
            <ul className=" space-y-6 ">
            <li className=" ">
                <NavLink
                  to="/order"
                  className={({ isActive }) =>
                    isActive ? navActiveButton : navPrimaryButton
                  }
                  
                >
                  <IoFastFoodOutline />
                  order
                </NavLink>
              </li>

              {/* <li className=" ">
                <NavLink
                  to="/favorite"
                  className={({ isActive }) =>
                    isActive ? navActiveButton : navPrimaryButton
                  }
                >
                  <MdFavoriteBorder />
                  Favorite
                </NavLink>
              </li> */}

              <li className=" ">
                <NavLink
                  to="/restaurants"
                  className={({ isActive }) =>
                    isActive ? navActiveButton : navPrimaryButton
                  }
                >
                  <IoRestaurantSharp />
                  restaurants
                </NavLink>
              </li>

             
              <li className=" ">
                <NavLink
                  to="/explore"
                  className={({ isActive }) =>
                    isActive ? navActiveButton : navPrimaryButton
                  }
                >
                  <MdOutlineFoodBank />
                  explore
                </NavLink>
              </li>

            </ul>
          </nav>
        </div>
        <div className=" w-full flex flex-col justify-center items-center absolute bottom-16 left-0 ">
          <button
            onClick={handlShowCart}
            className="  bg-purple-700 py-3 px-6 font-bold uppercase w-3/4 rounded-lg text-white hover:bg-purple-800 active:bg-purple-900 active:text-stone-100 "
          >
            show cart ({totalCartItems})
          </button>
        </div>
      </aside>
    </>
  );
}
