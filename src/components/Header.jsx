import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { Context } from "../context/contextApi";
import Loader from "../shared/loader";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);
  const navigate = useNavigate();

  const searchQueryhandler = (e) => {
    if (
      (e?.key === "Enter" || e.target.value === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchresult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };
  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];
  return (
    <div
      className="sticky top-0 z-0 flex flex-row items-center
      justify-between h-14 px-4 md:px-5 bg-white dark:bg-black"
    >
      {loading && <Loader />}
      {/* {left side} */}
      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div
            className=" flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10
          w-10 rounded-full hover:bg-[#303030]/0.6"
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className=" flex h-5 items-center">
          <img
            width={80}
            className="dark:md:block"
            src="/assets/logo.png"
            alt="vidio"
          />
        </Link>
      </div>
      {/* {search Bar} */}
      <div className="group flex items-center">
        <div
          className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl
          focus-within:border-blue-500 "
        >
          <div className="w-10 items-center justify-center md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            id="searchInput"
            className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44
             md:w-64 lg:w-[500px] font-thin"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryhandler}
            value={searchQuery}
          />
        </div>
        <button
          value="searchButton"
          onClick={(e) => searchQueryhandler(e)}
          className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center 
            justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
        >
          <IoIosSearch className="text-white text-xl" />
        </button>
      </div>
      {/* {Right Icons} */}
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6] ">
            <RiVideoAddLine className="text-white text-xl cursor-pointer " />
          </div>
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6] ">
            <FiBell className="text-white text-xl cursor-pointer " />
          </div>
          <div className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden hover:bg-[#303030]/[0.6] ">
            <img
              src="https://avatars.dicebear.com/api/open-peeps/stefan.svg"
              alt="profileimage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
