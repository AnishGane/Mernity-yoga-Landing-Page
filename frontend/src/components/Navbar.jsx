import React, { useState } from "react";
import { AiFillMediumCircle } from "react-icons/ai";
import { assets } from "../assets/assets";

const Navbar = () => {
  const link = ["About Us", "Previews", "Trainers", "Classes"];
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full mt-4">
      <nav className=" h-16 w-full px-1 pt-2 flex items-center justify-between ">
        <div className="flex items-center gap-[5px] cursor-pointer">
          <AiFillMediumCircle className="w-[20px] h-[20px]" />
          <h1 className="font-bold text-base">MERNITY YOGA</h1>{" "}
        </div>
        <ul className="hidden md:flex gap-6">
          {link.map((link, idx) => (
            <li
              className="text-sm cursor-pointer bg-white border font-semibold rounded-full px-6 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:bg-black hover:text-white transition-all duration-300"
              key={idx}
            >
              {link}
            </li>
          ))}
        </ul>
        {/* Hamburger Menu */}
        <img
          src={assets.menu}
          alt="Menu icon"
          className="w-8 md:hidden cursor-pointer"
          onClick={() => setShowMenu(true)}
        />
      </nav>

      {/* for mobile devices */}
      <div
        className={`${
          showMenu ? "fixed w-full" : "h-0 w-0"
        } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
      >
        <div className="flex items-center justify-between px-5 py-6">
          <AiFillMediumCircle className="w-8 h-8 cursor-pointer" />
          <img
            src={assets.cross}
            alt="close icon"
            onClick={() => setShowMenu(false)}
            className="w-7 font-bold cursor-pointer"
          />
        </div>
        <ul className="flex flex-col items-center gap-6 mt-5 text-lg px-5 font-medium">
          {link.map((link, idx) => (
            <li className="px-4 py-1 rounded inline-block" key={idx}>
              {link}
            </li>
          ))}
        </ul>
      </div>
      {/* End for Mobile device */}
    </div>
  );
};

export default Navbar;
