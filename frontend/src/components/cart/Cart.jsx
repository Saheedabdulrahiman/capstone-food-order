import CartContext from "../../store/CartContext";
import UserProgressContext from '../../store/UserProgressContext'
import { useContext } from 'react'
import Modal from '../UI/Modal'
import CartItem from './CartItem'

export default function Cart() {
  const cartCtx =  useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function formatCartTotal(cartTotal) {
    // Ensure cartTotal is a number
    if (typeof cartTotal !== 'number') {
      return 'Invalid input';
    }
  
    // Round the cart total to two decimal points
    const roundedTotal = Math.round(cartTotal * 100) / 100;
  
    // Convert the rounded total to a string with two decimal points
    const formattedTotal = roundedTotal.toFixed(2);
  
    return formattedTotal;
  }
  

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <>
     <Modal 
      
       open={userProgressCtx.progress === 'cart'}
       onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}
       >
       <h2 className=" my-4 capitalize  text-xl font-bold mx-4">your cart </h2>
       <ul className=" mx-4 list-none">
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item)}
          />
        ))}
      </ul>
  <p className=" flex justify-between mt-8 text-lg font-bold text-gray-700 mx-4">
    <p>Total :</p>
   <p>{formatCartTotal(cartTotal)}</p> 
    </p>
  <p className=" flex justify-end gap-4 mt-6">
    <button onClick={handleCloseCart} className=" text-gray-800 hover:text-gray-900 active:text-gray-700 hover:font-semibold">close</button>
    {cartCtx.items.length > 0 && (
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out" onClick={handleGoToCheckout}>Go to Checkout</button>
        )}
  </p>
     </Modal>
    </>
  )
}
