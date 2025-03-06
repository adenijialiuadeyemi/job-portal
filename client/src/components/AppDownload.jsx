import React from "react";
import { assets } from "../assets/assets";
import Footer from "./Footer";

const AppDownload = () => {
  return (
    <div className="container px-4 mx-auto my-20 2xl:px-20">
      <div className="relative bg-gradient-to-r from-violet-50 to-purple-50 p-12 sm:p-24 lg:p-32 rounded-lg">
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold mb-8 max-w-md">
            Download Mobile App for Better Experience
          </h1>
          <div className="flex gap-4">
            <a href="" className="inline-block">
              <img src={assets.play_store} className="h-12" alt="" />
            </a>
            <a href="" className="inline-block">
              <img src={assets.app_store} className="h-12" alt="" />
            </a>
          </div>
          <img
            src={assets.app_main_img}
            className="absolute bottom-0 right-0 w-80 mr-32 max-lg:hidden"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
