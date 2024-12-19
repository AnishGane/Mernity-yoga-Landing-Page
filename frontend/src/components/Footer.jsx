import React from "react";
import { AiFillMediumCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full border-t-2 border-zinc-400">
      <div className=" py-3 h-40 my-5 px-2 flex flex-col md:flex-wrap gap-8 md:gap-1 md:flex-row justify-between items-start">
        {/* For Logo */}
        <div className="flex items-center gap-[5px] cursor-pointer">
          <AiFillMediumCircle className="w-[20px] h-[20px]" />
          <h1 className="font-bold text-base">MERNITY YOGA</h1>{" "}
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li className="text-zinc-700 hover:text-zinc-950 cursor-pointer">
              About Us
            </li>
            <li className="text-zinc-700 hover:text-zinc-950 cursor-pointer">
              Previews
            </li>
            <li className="text-zinc-700 hover:text-zinc-950 cursor-pointer">
              Trainers
            </li>
            <li className="text-zinc-700 hover:text-zinc-950 cursor-pointer">
              Classes
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li className="text-zinc-700 hover:text-zinc-950 cursor-pointer">
              Privacy Policy
            </li>
            <li className="text-zinc-700 hover:text-zinc-950 cursor-pointer">
              Terms & Conditions
            </li>
            <li className="text-zinc-700 hover:text-zinc-950 cursor-pointer">
              Contact Us
            </li>
            <li className="text-zinc-700 hover:text-zinc-950 cursor-pointer">
              Support
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li className="text-zinc-700 hover:text-zinc-950 cursor-pointer">
              www.mernity-yoga.com
            </li>
            <li className="text-zinc-700 hover:text-zinc-950 cursor-pointer">
              anishgane10@gmail.com.com
            </li>
            <li className="text-zinc-700 hover:text-zinc-950 cursor-pointer">
              +977 9840252188
            </li>
            <li className="text-zinc-700 hover:text-zinc-950 cursor-pointer">
              Doodhpati - 07, Bhaktapur, Nepal
            </li>
          </ul>
        </div>
        <div className="border-t-2 mt-2 md:mt-5  border-zinc-400 w-full py-6 text-center">
          <p>Copyright &copy; 2024 MERNITY YOGA - All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
