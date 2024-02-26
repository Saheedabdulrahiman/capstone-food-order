

export default function InputLabel({label,...props}) {
  return (
    <>
    <div className=' flex relative '>
     <label htmlFor={label} className=' capitalize  text-lg mx-2  '>{label} </label>
     <input {...props}  className='  w-3/4 mx-4 rounded-md border-2 absolute left-20 '/>
     </div>
    </>
  )
}
