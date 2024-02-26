

export default function Button({label,...props}) {
  return (
   <>
      <div className=" w-full  flex justify-center items-center">
        <button {...props} className=" items-center justify-center flex font-lexend text-xl uppercase w-full my-4 max-sm:h-8 sm:h-10 rounded-full bg-orange-500 hover:bg-orange-600 active:bg-orange-800 text-white font-bold py-2 px-4   ">{label}</button>
      </div>
   </>
    )
}
