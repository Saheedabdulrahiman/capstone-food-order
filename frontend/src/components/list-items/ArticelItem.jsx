import React from "react";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function ArticelItem({ article, isAdmin, onDelete, loading, onEdit }) {

  const cartCtx = useContext(CartContext);

  function handleAddArticleToCart() {
    // Assuming you have a function to add articles to the cart in your CartContext
    cartCtx.addItem(article);
  }

  let editStyle = "border-2 border-stone-400 text-blue-700 hover:text-white hover:bg-blue-700 hover:border-0 font-bold active:bg-green-700 capitalize px-2  rounded-lg";

  return (
    <>
      <li className="   max-sm:w-[90%] lg:w-full  border-2 border-stone-300 rounded-lg  my-4 ">
        <div className=" flex flex-col justify-center items-center  rounded-lg pb-2   mx-auto gap-1  ">
          <img
            className="  w-[100%] h-48 object-cover mb-2 rounded-t-md border shadow-lg md:h-60"
            src={article.image}
            alt={article.name}
          />

          <h3 className="text-lg font-semibold capitalize">{article.name}</h3>
          <p className="text-gray-800 ">category : {article.category}</p>
          <p className=" text-center px-3 text-stone-500 text-sm">
            {article.description}
          </p>

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
                <button
                  onClick={onEdit}
                  className={editStyle}>
                  Edit
                </button>
              </div>
            ) : null}
          </p>
        </div>
      </li>
    </>
  );
}
