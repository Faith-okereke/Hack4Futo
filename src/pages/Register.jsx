import React, { useState } from "react";
import login from "../assets/login.png";
import { IoMdContact, IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";


// code includes preventing access to the login if no filled info are met!
const Register = () => {
  const [details, setDetails] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!details.username || !details.email || !details.password) {
      alert("Please fill in all the required Information.");
      return;
    }
    // If all fields are filled, you can proceed with the registration process
    navigate("/login");
  };

  return (
    <div className="grid place-items-center py-12 md:p-0">
      <img className="w-64 h-64 object-contain" src={login} alt="" />
      <h1 className="text-2xl font-bold ">Create a new account</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 items-center justify-normal mt-6">
          <i>
          <IoMdContact fontSize={30} fill="#ff63fc" />
          </i>
          <input
            className="border-2 border-gray-500 rounded-xl py-1 px-2 w-56"
            type="text"
            placeholder="Username"
            value={details.username}
            onChange={(e) => setDetails({ ...details, username: e.target.value })}
          />
        </div>
        <div className="flex gap-2 items-center justify-normal mt-6">
          <i>
            <IoMdMail fontSize={30} fill="#ff63fc" />
          </i>
          <input
            className="border-2 border-gray-500 rounded-xl py-1 px-2 w-56"
            type="text"
            placeholder="Email address"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
        </div>
        <div className="flex gap-2 items-center justify-normal mt-6">
          <i>
            <RiLockPasswordFill fontSize={30} fill="#ff63fc" />
          </i>
          <input
            className="border-2 border-gray-500 rounded-xl py-1 px-2 w-56"
            type="password"
            placeholder="Password"
            value={details.password}
            onChange={(e) => setDetails({ ...details, password: e.target.value })}
          />
        </div>
        <div className="flex flex-col items-center mt-8">
          <input
            className=" rounded-xl cursor-pointer bg-[#ff63fc] text-white px-4 py-2 text-center w-full"
            type="submit"
            value="Sign up"
          />
        </div>
        <Link to="/login" className="text-xs text-blue-700 flex justify-end pt-3 hover:underline">
          Already have an account?
        </Link>
      </form>
    </div>
  );
};

export default Register;
