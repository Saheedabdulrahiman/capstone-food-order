import { Link } from "react-router-dom";


function ErrorPage() {
 



  return (
    <>
      <nav className=" my-10">
         <ul className=" underline  flex justify-center gap-8 font-semibold "> 
            <li> 
                <Link className=" text-blue-700 hover:text-blue-800 hover:font-bold " to='/'> login page</Link>
            </li>
             <li>
                <Link className=" text-blue-700 hover:text-blue-800 hover:font-bold" to='/signup'>signup</Link>
             </li>
         </ul>
      </nav>
    <main className="  flex flex-col justify-center items-center my-12 space-y-4">
        <h1 className=" text-2xl">An error occured </h1>
        <p>could not find this page</p>
    </main>
    </>
  );
}

export default ErrorPage;
