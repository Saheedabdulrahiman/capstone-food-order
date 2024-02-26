import { NavLink } from "react-router-dom";

export default function AdminNavigation() {
  const navPrimaryButton =
    " max-md:gap-1 max-md:text-sm max-md:px-1 max-md:text-center  flex border-2 items-center justify-center   gap-4 capitalize text-lg  py-2 px-4 rounded-xl";

  const navActiveButton =
    " max-md:gap-1 max-md:text-sm max-md:px-1 max-md:text-center  flex  items-center justify-center   gap-4 capitalize text-lg  py-2 px-4 rounded-xl bg-orange-600 text-stone-100";

  return (
    <>
      <nav className=" my-4 text-amber-700 font-semibold flex justify-center">
        <ul className=" flex space-x-6">
          <li>
            <NavLink
              to="/admin/add-item"
              className={({ isActive }) =>
                isActive ? navActiveButton : navPrimaryButton
              }
            >
              add items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/add-restaurant"
              className={({ isActive }) =>
                isActive ? navActiveButton : navPrimaryButton
              }
            >
              add restaurants
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/add-articles"
              className={({ isActive }) =>
                isActive ? navActiveButton : navPrimaryButton
              }
            >
              add articles
            </NavLink>
          </li>

          <li>
            <NavLink
              className=" max-md:gap-1 max-md:text-sm max-md:px-1 max-md:text-center  flex border-2 items-center justify-center   gap-4 uppercase text-lg  py-2 px-4 rounded-xl text-blue-700 font-bold hover:bg-blue-700 hover:text-white"
              to="/"
            >
              user-page
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
