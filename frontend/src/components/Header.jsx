import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between flex-col md:flex-row lg:flex-row flex-wrap bg-[#EAE1F6] mt-10 rounded-[40px] pl-6 md:pl-8 lg:pl-10 overflow-hidden">
        {/* left */}
        <div className="w-full md:w-1/2 flex flex-col flex-wrap items-start justify-center px-4 md:px-6 py-10 md:py-[6vw] md:mb-[-12px]">
          <span className="border-1 border border-slate-600 rounded-3xl px-3 py-1">
            Mind-Body-Soul Balance
          </span>
          <div className="text-5xl mt-3 lg:text-6xl font-semibold mb-5 md:mb-7 leading-tight md:leading-tight">
            <p>Achieve balance in</p>
            <p className="mt-[-2px]">mind, body, and soul.</p>
          </div>

          <p className="font-medium text-zinc-600 tracking-tight ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit <br />
            beatae vero deleniti quasi ab dignissimos corrupti.
          </p>
        </div>
        {/* Right */}
        <div className="md:w-1/2 relative">
          <img
            className="w-full h-auto rounded-lg md:absolute bottom-0 right-[-40px]"
            src={assets.banner}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
