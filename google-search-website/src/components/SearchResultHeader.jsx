import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";
import { FiSettings } from "react-icons/fi";
import { CgMenuGridO } from "react-icons/cg";

const SearchResultHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const { setImageSearch } = useContext(Context);

  useEffect(() => {
    return () => setImageSearch(false)
  }, [])

  const clickHandler = (menuItem) => {
    let isTypeName = menuItem.name === 'Images'
    setSelectedMenu(menuItem.name)//set the selected menu to the item we have clicked
    setImageSearch(isTypeName ? true : false) //when ever we click on image section set the imageSearch to true otherwise it is false
  }


  return (
    <div className="p-[15px] pb-0 md:pr-5 md:pl-10 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col items-center sticky top-0 bg-white">
      {/* search and logo part */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center grow">
          <Link to="/">
            <img
              src={Logo}
              alt="Google"
              className="hidden md:block w-[92px] mr-10"
            />
          </Link>
          <div className="flex flex-col">
            <SearchInput from="searchResult" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FiSettings
            size={20}
            className="cursor-pointer  hover:bg-black/5 rounded-full p-2 box-content text-gray-600"
          />
          <CgMenuGridO
            size={20}
            className="cursor-pointer  hover:bg-black/5 rounded-full p-2 box-content text-gray-600"
          />
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md">
            Sign in
          </button>
        </div>
      </div>
      {/* Menu part */}
      <div className="flex ml-32 mt-3">
        {menu.map((menu, index) => (
          <span
            key={index}
            className={`flex items-center p-3 cursor-pointer relative ${
              selectedMenu === menu.name ? "text-[#1a73e8]" : "text-[#5f6368]"
            }`}
            onClick={() => clickHandler(menu)}
          >
            <span className="hidden md:block mr-2">{menu.icon}</span>
            <span className="text-sm">{menu.name}</span>
            {selectedMenu === menu.name && (
              <span className="h-[3px] w-[calc(100%-20px)] absolute bg-[#1a73e8] bottom-0 left-[10px]" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchResultHeader;
