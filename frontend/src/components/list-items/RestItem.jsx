export default function RestItem({ restaurant, isAdmin, onDelete, loading }) {
  return (
    <>
      <li className="   max-sm:w-[90%] lg:w-full  border-2 border-stone-300 rounded-lg  my-4 max-sm:ml-4 ">
        <div className=" flex flex-col justify-center items-center  rounded-lg pb-2   mx-auto gap-1   ">
          <img
            className="  w-[100%] h-48 object-cover mb-2 rounded-t-md border shadow-lg"
            src={restaurant.image}
            alt={restaurant.name}
          />

          <h3 className="text-lg font-semibold">{restaurant.name}</h3>
          <p className="text-gray-600 ">location: {restaurant.location}</p>
          <p className="">Opening: {restaurant.openingHours}</p>
          <p className="capitalize">Closing : {restaurant.closingHours}</p>
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
          ) : null}
        </div>
      </li>
    </>
  );
}
