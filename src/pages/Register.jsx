import React, { useState } from "react";
import login from "../assets/login.png";
import { IoMdContact, IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [passwordStrength, setPasswordStrength] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const handleEmailChange = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
    setDetails({ ...details, email });
  };

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const passwordLength = password.length;

    if (passwordLength < 8) {
      setPasswordStrength(false);
      setWarningMessage("Password must be at least 8 characters long.");
    } else {
      setPasswordStrength(true);
      setWarningMessage("");
    }

    setDetails({ ...details, password });
  };

  const handleTermsAcceptance = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !details.username ||
      !details.email ||
      !details.password
    ) {
      alert("Please fill in all the required Information.");
      return;
    }
    if (!passwordStrength) {
      alert("Password must be at least 8 characters long.");
      return;
    }
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
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
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
            onChange={(e) =>
              setDetails({ ...details, email: e.target.value })  
            }
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
            onChange={handlePasswordChange}
          />
          {warningMessage && (
            <p className="text-red-500">{warningMessage}</p>
          )}
        </div>
        <div className="flex flex-col items-center mt-8">
          <input
            className=" rounded-xl cursor-pointer bg-[#ff63fc] text-white px-4 py-2 text-center w-full"
            type="submit"
            value="Sign up"
          />
        </div>
        <Link
          to="/login"
          className="text-xs text-blue-700 flex justify-end pt-3 hover:underline"
        >
          Already have an account?
        </Link>
      </form>
    </div>
  );
};
export default Register;




