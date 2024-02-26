import Sidebar from '../Layouts/Sidebar'
import Header from '../Layouts/Header'

import Footer from '../Layouts/Footer'
import ListRestaurants from '../contents/ListRestaurants'
import Cart from '../cart/Cart'

import { CartContextProvider } from '../../store/CartContext'
import { UserProgressContextProvider } from '../../store/UserProgressContext'

export default function Restaurants() {
  return (
   <>
    <UserProgressContextProvider>
     <CartContextProvider>
   <div className=" flex  font-lexend ">
    <Sidebar/>

     <div className=" flex flex-col w-full font-lexend">
     <Header/>
      <ListRestaurants/>
      
     </div>
     
     </div>
     <Footer/>
     <Cart/>
     </CartContextProvider>
     </UserProgressContextProvider>

   </>
  )
}
