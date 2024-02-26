import LoginButton from "../UI/LoginButton";
import LoginInput from "../UI/LoginInput";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Error signing up");
      }

      const data = await response.json();
      console.log(data); // Handle successful signup response
      // Reset the form after successful signup
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      return navigate("/");
    } catch (error) {
      console.error("Error signing up:", error.message);
      // Handle error
    }
  };

  return (
    <>
      <div className="  max-md:w-[80%]  md:w-1/2 lg:w-1/4  mt-16 border-2 shadow-2xl rounded-2xl py-4  space-y-2 flex flex-col items-center mx-auto ">
        <h2 className=" uppercase font-bold text-lg">sign up </h2>
        <p className=" font-light text-stone-400">create your account</p>

        <form className=" flex justify-center" onSubmit={handleSubmit}>
          <div className=" w-[60%] space-y-4 ">
            <LoginInput
              placeholder="name"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            <LoginInput
              placeholder="email"
              type="eamil"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            <LoginInput
              placeholder="password"
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
            <LoginInput
              placeholder="confirm password"
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <LoginButton label="sign up" type="submit" />
          </div>
        </form>

        <p> or</p>

        <div className=" flex justify-evenly gap-6 my-4 ">
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

        <p>
          Already have an account ?{" "}
          <Link className=" underline text-blue-700 font-semibold mx-1" to="/">
            login
          </Link>
        </p>
      </div>
    </>
  );
}
