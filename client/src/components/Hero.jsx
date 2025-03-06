import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);

    titleRef.current.value = "";
    locationRef.current.value = "";
  };
  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-purple-500 to-purple-950 text-white py-16 mx-2 rounded-xl text-center ">
        <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-medium">
          Over 1000+ jobs available for you to apply
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quod
          velit ratione nihil explicabo fugiat magni possimus assumenda cum
          suscipit iure totam nisi debitis, officia numquam optio vel impedit
          officiis!
        </p>
        <div className="flex items-center justify-between bg-white rounded text-gray-600 mx-4 sm:mx-auto pl-4 max-w-xl">
          <div className="flex items-center">
            <img className="h-4 sm:h-5" src={assets.search_icon} />
            <input
              type="text"
              placeholder="Search for jobs"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
              ref={titleRef}
            />
          </div>
          <div className="flex items-center">
            <img className="h-4 sm:h-5" src={assets.location_icon} />
            <input
              type="text"
              placeholder="Location"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
              ref={locationRef}
            />
          </div>
          <button
            className="bg-blue-600 px-6 py-2 rounded outline-none m-1 text-white"
            onClick={onSearch}
          >
            Search
          </button>
        </div>
      </div>

      <div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex">
        <div className="flex gap-10 xl:gap-16 justify-center  flex-wrap ">
          <p>Trusted by</p>
          <img className="h-6" src={assets.microsoft_logo} alt="" />
          <img className="h-6" src={assets.walmart_logo} alt="" />
          <img className="h-6" src={assets.accenture_logo} alt="" />
          <img className="h-6" src={assets.samsung_logo} alt="" />
          <img className="h-6" src={assets.amazon_logo} alt="" />
          <img className="h-6" src={assets.adobe_logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
