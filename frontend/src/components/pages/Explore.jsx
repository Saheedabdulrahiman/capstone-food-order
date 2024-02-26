import Sidebar from "../Layouts/Sidebar";
import Header from "../Layouts/Header";

import Footer from "../Layouts/Footer";

import Cart from "../cart/Cart";

import { CartContextProvider } from "../../store/CartContext";
import { UserProgressContextProvider } from "../../store/UserProgressContext";
import ExploreMain from "../contents/ExploreMain";

export default function Explore() {
  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvider>
          <div className=" flex  font-lexend ">
            <Sidebar />

            <div className=" flex flex-col w-full font-lexend">
              <Header />
              <ExploreMain />
            </div>
          </div>
          <Footer />
          <Cart />
        </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}
