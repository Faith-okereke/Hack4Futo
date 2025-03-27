import React from "react";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex justify-end gap-[400px] items-center bg-green-700">
      <ul className="flex justify-center gap-8 py-5  text-white ">
        <li className="flex items-center justify-center hover:text-[#ff63fc] transition-colors ">
          <Link to="/">Home</Link>
        </li>
        <li className="flex items-center justify-center hover:text-[#ff63fc] transition-colors ">
          <Link>Community</Link>
        </li>
        <li className="flex items-center justify-center hover:text-[#ff63fc] transition-colors ">
          <Link>Log out</Link>
        </li>
      </ul>
      <div>
        <RxAvatar fontSize={40} color="#ffffff" className="mr-10 cursor-pointer"/>
      </div>
    </div>
  );
};

export default NavBar;
