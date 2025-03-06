import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Navbar for Recruiter Panel */}
      <div className="shadow py-4">
        <div className="px-5 flex justify-between items-center">
          <img
            onClick={() => navigate("/")}
            className="max-sm:w-32 cursor-pointer"
            src={assets.logo}
          />
          <div className="flex  items-center gap-3">
            <p className="max-sm:hidden">Welcome, Adeniji Aliu</p>
            <div className="relative group">
              <img className="w-8 rounded-full" src={assets.company_icon} />
              <div className="absolute hidden group-hover:block top-10 right-0 z-10">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm ">
                  <li className="py-1 px-2 cursor-pointer border-b ">
                    My Profile
                  </li>
                  <li className="py-1 px-2 cursor-pointer pr-12">Logout</li>

                  {/*  <NavLink
                    className={({ isActive }) => {
                      return `py-1 px-2 cursor-pointer border-b block ${
                        isActive ? "hover:bg-blue-100" : ""
                      }`;
                    }}
                    to=""
                  >
                    MyProfile
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => {
                      return `py-1 px-2 cursor-pointer block${
                        isActive ? "hover:bg-blue-100" : ""
                      }`;
                    }}
                    to=""
                  >
                    Logout
                  </NavLink> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-start">
        {/* Left Sidebar */}
        <div className="inline-block min-h-screen border-r-2 border-gray-200 lg:1/4">
          <ul className="flex flex-col items-start pt-5 text-gray-800 ">
            <NavLink
              className={({ isActive }) =>
                ` flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && "bg-blue-100 border-blue-500 border-r-4"
                }`
              }
              to={"/dashboard/add-job"}
            >
              <img className="min-w-4" src={assets.add_icon} />
              <p className="max-sm:hidden">Add Job</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && "bg-blue-100 border-blue-500 border-r-4"
                }`
              }
              to={"/dashboard/manage-jobs"}
            >
              <img className="min-w-4" src={assets.home_icon} />
              <p className="max-sm:hidden">Manage Jobs</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && "bg-blue-100 border-blue-500 border-r-4"
                }`
              }
              to={"/dashboard/view-applications"}
            >
              <img className="min-w-4" src={assets.person_tick_icon} />
              <p className="max-sm:hidden">View Applications</p>
            </NavLink>
          </ul>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
