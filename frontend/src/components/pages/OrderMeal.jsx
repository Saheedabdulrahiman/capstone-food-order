
import Sidebar from '../Layouts/Sidebar'
import Header from '../Layouts/Header'
import Meals from '../contents/Meals'
import Footer from '../Layouts/Footer'
import Cart from '../cart/Cart'
import { CartContextProvider } from '../../store/CartContext'
import { UserProgressContextProvider } from '../../store/UserProgressContext'

export default function OrderMeal() {
  return (
    <>
     <UserProgressContextProvider>
     <CartContextProvider>
       <div className=" flex  font-lexend ">
    <Sidebar/>

     <div className=" flex flex-col w-full font-lexend">
     <Header/>
      <Meals/>
      
     </div>
     
     </div>
     <Footer/>
     <Cart/>
     </CartContextProvider>
     </UserProgressContextProvider>
    </>
  )
}
