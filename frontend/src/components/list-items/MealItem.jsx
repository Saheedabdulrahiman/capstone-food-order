import { useContext } from "react";
import CartContext from "../../store/CartContext";
import { FaShoppingCart , FaRupeeSign} from "react-icons/fa";

export default function MealItem({ meal, isAdmin, onDelete, loading, onEdit }) {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  let editStyle =
    "border-2 border-stone-400 text-blue-700 hover:text-white hover:bg-blue-700 hover:border-0 font-bold active:bg-green-700 capitalize px-2  rounded-lg";

  return (
    <>
      <li className="   max-sm:w-full lg:w-full  border-2 border-stone-300 rounded-lg  my-4 ">
        <div className=" flex flex-col justify-center items-center  rounded-lg pb-2   mx-auto gap-1  ">
          <img
            className="  w-[100%] h-48 object-cover mb-2 rounded-t-md border shadow-lg"
            src={meal.image}
            alt={meal.name}
          />

          <h3 className="text-lg font-semibold capitalize">{meal.name}</h3> 
          <p className="text-gray-600 flex items-center  "><FaRupeeSign />{meal.price}</p>
          <p className="">Restuarant: {meal.nameOfRestaurant}</p>
          <p className="text-gray-500 capitalize">category: {meal.category}</p>

          <p>
            {isAdmin ? (
              <div className="  flex justify-between w-3/4 my-2 gap-4 ">
                <button
                  onClick={onDelete}
                  disabled={loading}
                  className="  border-2 border-stone-400 text-red-700 hover:border-0 active:border-0 font-bold active:bg-red-600 hover:bg-red-600 hover:text-white  active:text-white capitalize px-2  rounded-lg"
                >
                  {" "}
                  {loading ? "Deleting..." : "Delete"}
                </button>
                <button onClick={onEdit} className={editStyle}>
                  edit
                </button>
              </div>
            ) : (
              <button
                onClick={handleAddMealToCart}
                className=" flex justify-center items-center gap-2 py-2 px-4 bg-green-700  text-stone-100 rounded-lg hover:bg-green-600 active:bg-green-400 active:text-black active:border-2 "
              >
                <FaShoppingCart className=" w-4  h-4 " />
                Add to Cart
              </button>
            )}
          </p>
        </div>
      </li>
    </>
  );
}
