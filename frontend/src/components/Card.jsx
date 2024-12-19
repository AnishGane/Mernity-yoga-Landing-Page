import React, { useState } from "react";
import { assets } from "../assets/assets";

const Card = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-6 w-full mb-5 mt-8">
      {/* Card 1 */}
      <div className="col-span-1 sm:col-span-3 lg:col-span-4 rounded-[40px] relative w-full h-[400px]">
        <div className="flex items-center justify-between px-10 py-8 absolute w-full">
          <span className="bg-white rounded-full px-4 py-2 font-semibold cursor-pointer hover:scale-105 transition-all duration-100">
            View More
          </span>
          <div className="bg-white rounded-full p-2 cursor-pointer hover:scale-110 transition-all duration-100">
            <img src={assets.right_arrow} alt="arrow" className="w-5" />
          </div>
        </div>
        <img
          src={assets.yoga1}
          alt="yoga pic"
          className="w-full object-cover rounded-[40px] h-full"
        />
        <p className="px-3 absolute bottom-7 left-5 text-4xl font-semibold leading-9">
          Improved <br />
          Flexibility
        </p>
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black/50 to-transparent rounded-b-[40px]"></div>
      </div>
      {/* Card 1 Ends */}
      {/* Card 2 */}
      <div className="col-span-1 sm:col-span-3 lg:col-span-4 rounded-[40px] relative w-full h-[400px]">
        <div className="flex items-center justify-between px-10 py-8 absolute w-full">
          <span className="bg-white rounded-full px-4 py-2 font-semibold cursor-pointer hover:scale-105 transition-all duration-100">
            View More
          </span>
          <div className="bg-white rounded-full p-2 cursor-pointer hover:scale-110 transition-all duration-100">
            <img src={assets.right_arrow} alt="arrow" className="w-5" />
          </div>
        </div>
        <img
          src={assets.yoga2}
          alt="yoga pic"
          className="w-full object-cover rounded-[40px] h-full"
        />
        <p className="px-3 absolute bottom-7 left-5 text-4xl font-semibold text-white leading-9">
          Mental <br />
          Clarity
        </p>
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black/50 to-transparent rounded-b-[40px]"></div>
      </div>
      {/* Card 2 Ends */}
      {/* Card 3 */}
      <div className="col-span-1 sm:col-span-6 lg:col-span-4 rounded-[40px] relative w-full h-[400px]">
        <div className="flex items-center justify-between px-10 py-8 absolute w-full">
          <span className="bg-white rounded-full px-4 py-2 font-semibold cursor-pointer hover:scale-105 transition-all duration-100">
            Join our classes
          </span>
          <div className="bg-white rounded-full p-2 cursor-pointer hover:scale-110 transition-all duration-100">
            <img src={assets.right_arrow} alt="arrow" className="w-5" />
          </div>
        </div>
        <img
          src={assets.yoga3}
          alt="yoga pic"
          className="w-full object-cover rounded-[40px] h-full"
        />
        <div className="w-full flex flex-col gap-6 absolute bottom-7 text-4xl px-9 leading-9">
          <p className="font-semibold">
            Join Us For a Yoga <br />
            Classes Today!
          </p>
          <div className="relative rounded-full z-10">
            <form action="">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-full border-2 outline-none pr-36 border-white bg-transparent rounded-full placeholder:text-white text-sm flex items-center justify-center text-white px-6 py-3"
              />
              <button
                type="submit"
                className="z-20 absolute bg-white flex items-center justify-center rounded-full px-7 cursor-pointer bottom-0 font-semibold text-sm h-full right-0"
                onClick={(e) => e.preventDefault()}
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black/50 to-transparent rounded-b-[40px]"></div>
      </div>
      {/* Card 3 Ends */}
    </div>
  );
};

export default Card;
