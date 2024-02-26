import LoginButton from "../UI/LoginButton";
import LoginInput from "../UI/LoginInput";
import loginPageImg from "../assets/4435255.jpg";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to login");
      }

      // Set token in local storage
      localStorage.setItem("token", data.token);
      localStorage.setItem("access", data.token);
      localStorage.setItem("refresh", data.token);

      // Check local storage after a short delay
      setTimeout(() => {
        const storedToken = localStorage.getItem("token");
        console.log("Stored token:", storedToken);
        console.log(localStorage);
      }, 1000); // Adjust the delay as needed

      setFormData({
        email: "",
        password: "",
      });

      // Log the token in console
      
      if(data.role ==='user'){
        alert("user Login successful!");
        // // Redirect to the explore page
        return navigate("/order");
      } else if(data.role==='admin'){
        alert('admin login successful')
        return navigate('/admin/add-item')
      }
    
      console.log("Token:", data.token);
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed. Please try again.");
    }
  };
  return (
    <>
      {/* do the responsive when the sm then image goes */}
      <div className="  flex my-12 mx-auto justify-center w-[70%] font-lexend max-md:w-full lg:mt-24 ">
        <div className=" w-[60%] lg:block hidden  ">
          <img
            className=" w-full h-full rounded-l-lg"
            src={loginPageImg}
            alt="login-page-image"
          />
        </div>
        <div className=" w-[40%] border-2 lg:rounded-r-lg py-2 max-lg:w-3/4 max-lg:rounded-xl  ">
          <div className=" flex justify-end py-4 gap-2 pr-4">
            <button className=" py-1 px-3 rounded-full uppercase text-sm text-white font-bold bg-orange-500 hover:bg-orange-600 active:bg-orange-800 ">
              login{" "}
            </button>
            <Link
              to="/signup"
              className=" uppercase font-bold text-sm flex justify-center items-center"
            >
              signup
            </Link>
          </div>
          <h2 className=" text-center text-3xl uppercase my-2 font-bold">
            login{" "}
          </h2>
          <p className=" text-center text-xs text-stone-400 py-3">
            More than 1000+ food items from difffernt parts of the city{" "}
          </p>
          <form onSubmit={handleSubmit}>
            <div className=" max-sm:w-3/4 lg:w-[70%] mx-auto space-y-3  max-sm:space-y-2 max-md:px-3 md:px-6  flex flex-col justify-center rounded my-2">
              <LoginInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <LoginInput
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />

              <LoginButton type="submit" label="login" />
            </div>
          </form>

          <div className=" flex my-2 mx-12">
            <div className="flex-grow border-t-2 border-l-2 h-0 my-auto " />
            <p className=" px-2 text-stone-400">or login with</p>
            <div className="flex-grow border-t-2 border-l-2 h-0 my-auto " />
          </div>
          <div className="  flex justify-center gap-8 my-4">
            <span className="  border-2 border-stone-200 p-2 rounded-full hover:bg-stone-100 active:bg-stone-200">
              <FaFacebookF />
            </span>
            <span className="  border-2 border-stone-200 p-2 rounded-full  hover:bg-stone-100 active:bg-stone-200">
              <FaGoogle />
            </span>
            <span className="  border-2 border-stone-200 p-2 rounded-full  hover:bg-stone-100 active:bg-stone-200">
              <FaXTwitter />
            </span>
          </div>

          <p className=" text-center">
            not a member then{" "}
            <Link
              to="/signup"
              className=" font-semibold text-blue-700 underline mx-2"
            >
              sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
