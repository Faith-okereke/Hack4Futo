import React, { useState, useContext } from "react";
import login from "../assets/login.png";
import { IoMdContact } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { LuLoaderCircle } from "react-icons/lu";

const Login = () => {
  const [details, setDetails] = useState({ username: "", password: "" });
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!details.username || !details.password) {
      alert("Please fill in both username and password or Login if you have an account!");
      return;
    }
    setLoading(true);
    setUser(true);
    console.log(user);
    navigate("/");
  };
    
  return (
    <div className="grid place-items-center py-12 md:p-0">
      <img className="w-64 h-64 object-contain" src={login} alt="" />
      <h1 className="text-2xl font-bold ">Welcome back!</h1>
      <form onSubmit={handleLogin}>
        <div className="flex gap-2 items-center justify-normal mt-6">
          <i>
            <IoMdContact fontSize={30} fill="#ff63fc" />
          </i>
          <input
            className="border-2 border-gray-500 rounded-xl py-1 px-2 w-56"
            type="text"
            placeholder="Username"
            value={details.username}
            onChange={(e) => {
              setDetails({ ...details, username: e.target.value });
            }}
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
        onChange={(e) => {
        setDetails({ ...details, password: e.target.value });
      }}
      />
        </div>
      
        
        <div className="flex flex-col items-center mt-8">
          {loading && (
            <i>
              <LuLoaderCircle />
            </i>
          )}
          <input
            className=" rounded-xl cursor-pointer bg-[#ff63fc] text-white px-4 py-2 text-center w-full"
            type="submit"
            value="Login"
          />
        </div>
        <a
          className="text-xs text-blue-700 flex justify-end pt-3 hover:underline"
          href=""
        >
          Forgot Password?
        </a>
        <Link
          to="/register"
          className="text-xs text-blue-700 flex justify-end pt-3 hover:underline"
        >
          You do not have an account?
        </Link>
      </form>
    </div>
  );
};

export default Login;