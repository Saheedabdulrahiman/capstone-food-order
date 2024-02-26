

export default function LoginInput({...props}) {
  const errorInput =  '  text-red-700 placeholder-gray-800 placeholder-opacity-25 bg-gray-50 border-2 rounded-full  w-full  mx-auto max-sm:h-8 sm:h-10     border-red-300 px-3 py-2 '
       const inputClass =  " placeholder-gray-800 placeholder-opacity-25 bg-gray-50 border-2 rounded-full  w-full  mx-auto max-sm:h-8 sm:h-10     border-stone-300 px-3 py-2"   
  
  return (
    <>
      <input
           className={inputClass}
             {...props}
            />
    </>
  )
}
