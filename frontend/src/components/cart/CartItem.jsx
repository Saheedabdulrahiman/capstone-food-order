
export default function CartItem({
  name,
  
  quantity,
  price,
  onIncrease,
  onDecrease,
}) {
  return (
    <li className=" flex justify-between items-center my-4" >
      <p>
        {name} - {quantity} x {price}
      </p>
      <p className=" flex gap-4 items-center">
        <button className="cursor-pointer text-sm w-6 h-6 rounded-full border-none bg-yellow-600 text-yellow-100 flex justify-center items-center hover:bg-gray-800 hover:text-yellow-400 active:bg-gray-900 active:text-yellow-500" onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button  className="cursor-pointer text-sm w-6 h-6 rounded-full border-none bg-yellow-600 text-yellow-100 flex justify-center items-center hover:bg-gray-800 hover:text-yellow-400 active:bg-gray-900 active:text-yellow-500" onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}