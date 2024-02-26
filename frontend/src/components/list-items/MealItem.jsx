import { useContext } from "react";
import CartContext from "../../store/CartContext";
import { FaShoppingCart } from "react-icons/fa";
export default function MealItem({ meal, isAdmin, onDelete, loading }) {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <>
      <li className="   max-sm:w-[90%] lg:w-full  border-2 border-stone-300 rounded-lg  my-4 ">
        <div className=" flex flex-col justify-center items-center  rounded-lg pb-2   mx-auto gap-1  ">
          <img
            className="  w-[100%] h-48 object-cover mb-2 rounded-t-md border shadow-lg"
            src={meal.image}
            alt={meal.name}
          />

          <h3 className="text-lg font-semibold">{meal.name}</h3>
          <p className="text-gray-600 ">${meal.price}</p>
          <p className="">Restuarant: {meal.nameOfResturent}</p>
          <p className="text-gray-500 capitalize">category: {meal.category}</p>

          <p>
            {isAdmin ? (
              <div className="  flex flex-row justify-center w-3/4 my-2 ">
                <button
                  onClick={onDelete}
                  disabled={loading}
                  className="  border-2 border-stone-400 text-red-700 font-bold active:bg-red-600  active:text-white capitalize px-4 py-1 rounded-lg"
                >
                  {" "}
                  {loading ? "Deleting..." : "Delete"}
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
