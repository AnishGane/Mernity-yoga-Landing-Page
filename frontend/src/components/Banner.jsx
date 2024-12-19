import React from "react";
import { assets } from "../assets/assets";
const Banner = () => {
  return (
    <div>
      <div className="w-full bg-black mb-10 text-white flex justify-between flex-col md:flex-row flex-wrap mt-10 rounded-[40px] p-4 pl-6 md:pl-8 lg:pl-10 overflow-hidden">
        {/* left */}
        <div className="lg:w-1/2 md:w-full w-full flex flex-col items-start justify-center px-4 md:px-6 py-10 md:py-[6vw] md:mb-[-12px]">
          <span className="border-1 border border-slate-600 rounded-3xl px-3 py-1">
            Peacefull Mindset & Body
          </span>
          <div className="text-5xl mt-3 sm:text-5xl md:text-3xl lg:text-6xl font-semibold mb-7 leading-tight md:leading-tight">
            <p>Various Workshops,</p>
            <p className="mt-[-2px]">Yoga Classes & Events</p>
          </div>
          <p className="font-medium text-zinc-400 tracking-tighter">
            Lorem ipsum dolor sit amet consectetur adipisicing elit beatae vero
            deleniti quasi ab dignissimos corrupti. <br /> delectus distinctio
            quam sunt voluptates reiciendis commodi, animi qui ratione, nemo
            facilis <br /> quaerat eos dolorem inventore alias velit. Dolore,
            perferendis id!
          </p>
          <button className="mt-10 border px-10 border-white text-white hover:bg-white font-semibold hover:text-black transition-all duration-300 hover:scale-105 py-3 rounded-full">
            Learm More
          </button>
        </div>

        {/* Right */}
        <div className="lg:w-1/2 md:w-full w-full flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full md:grid-cols-2 gap-6 mb-5 mt-8">
            {/* Card 1 */}
            <div className="col-span-1 rounded-[40px] relative w-full h-[300px] md:h-[400px]">
              <div className="px-3 absolute top-7 left-5">
                <p className="text-4xl font-semibold leading-9">
                  Relax and <br />
                  Rejuvenate
                </p>
                <p className="text-xs px-1 mt-2">lorem ipsum dolor sit.</p>
              </div>
              <img
                src={assets.yoga5}
                alt="yoga pic"
                className="w-full object-cover rounded-[40px] h-full"
              />
              <div className="flex items-center justify-between absolute bottom-7 right-5 ">
                <div className="z-10 flex items-center justify-center gap-2 bg-white text-black rounded-full px-5 py-3 cursor-pointer hover:scale-105 transition-all duration-200">
                  <span className="font-semibold text-sm">Explore new</span>
                  <img
                    src={assets.right_arrow}
                    className="w-3 rounded-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black/50 to-transparent rounded-b-[40px]"></div>
            </div>
            {/* Card 1 Ends */}
            {/* Card 2 */}
            <div className="col-span-1 rounded-[40px] relative w-full h-[300px] md:h-[400px]">
              <div className="px-3 absolute top-7 left-5">
                <p className="text-4xl font-semibold leading-9">
                  Women's <br />
                  Wellness <br />
                  Yoga Retreat
                </p>
                <p className="text-xs px-2 mt-2">lorem ipsum dolor.</p>
              </div>
              <img
                src={assets.yoga4}
                alt="yoga pic"
                className="w-full object-cover rounded-[40px] h-full"
              />
              <div className="flex items-center justify-between absolute bottom-7 right-5 ">
                <div className="z-10 flex items-center justify-center gap-2 bg-white text-black rounded-full px-5 py-3 cursor-pointer hover:scale-105 transition-all duration-200">
                  <span className="font-semibold text-sm">Explore new</span>
                  <img
                    src={assets.right_arrow}
                    className="w-3 rounded-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black/50 to-transparent rounded-b-[40px]"></div>
            </div>
            {/* Card 2 Ends */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
