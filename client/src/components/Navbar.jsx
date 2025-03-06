import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
const Navbar = () => {
  const navigate = useNavigate();

  //for pop up
  const { openSignIn, openSignUp } = useClerk();

  const { user } = useUser();

  const { setShowRecruiterLogin } = useContext(AppContext);
  return (
    <div className="shadow py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img
          onClick={() => navigate("/")}
          src={assets.logo}
          className="cursor-pointer"
          alt="logo"
        />

        {user ? (
          <div className="flex gap-3 items-center">
            <Link to="/applications">Applied Jobs</Link>
            <p> | </p>
            <p className="max-sm:hidden">
              Hi, {user.firstName + " " + user.lastName}{" "}
            </p>
            <UserButton />
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            <button
              onClick={() => setShowRecruiterLogin(true)}
              className="text-gray-600"
            >
              Recruiter Login
            </button>
            <button
              className="bg-blue-600 rounded-full px-6 sm:px-9 py-2 text-white "
              onClick={openSignIn}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
