import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import Button from "../components/Button.jsx";
import { IoIosArrowForward } from "react-icons/io";

function Hero() {
  return (
    <div className=" flex items-center min-h-screen justify-center">
      <div className="container mx-auto px-6 py-6 ">
       <div className="flex flex-col lg:flex-row rounded-2xl shadow-2xl overflow-hidden"> 
          {/*left side*/}
          <div className="w-full lg:w-1/2 p-12">
            <div className="flex flex-col">
              <div className="mt-2 mb-15">
          <button className="flex border border-gray-200 rounded-full px-8 py-1 text-xl font-semibold gap-2 text-center hover:bg-gray-200">
            <button className="flex justify-center items-center gap-2 px-4 py-2 bg-gray-300 rounded-full">
              <MdOutlineEmail />
              News
            </button>
            <div className="flex py-2 gap-2">
              {" "}
              Check your new Features
              <FaArrowRight className="relative top-1" />
            </div>
          </button>
        </div>
              <div>
                <div className="text-8xl font-bold mb-4 ">
                  {" "}
                  <p>
                    Introducing the{" "}
                    <span className="text-gray-500">world's best </span>{" "}
                    marketing degree.
                  </p>
                </div>
                <div className="flex mt-15 gap-3 ">
                  <Button icon={<IoIosArrowForward />} text="Get Started" />
                  <Button icon={<MdOutlineEmail />} text="Request Access" />
                </div>
              </div>{" "}
            </div>{" "}
          </div>
          {/*right side*/}
          <div className="w-full lg:w-1/2 flex items-center justify-center  ">
            <div className="max-w-md text-gray-800 text-2xl font-medium font-sans">
              <p className="mb-6">
                Grow your audience with the top with the top podcasting toolon
                the market-create,distribute,monitize your show effortlessely.
              </p>
              <div className="flex gap-12 mt-8">
                <div>
                  <p className="text-2xl text-black">Active Users</p>
                  <p className="text-5xl font-bold">24 K+</p>
                </div>
                <div>
                  <p className="text-2xl text-black">Episodes</p>
                  <p className="text-5xl font-bold">43 K+</p>
                </div>
              </div>
              {/* Avatar */}
              <div className="flex gap-3 mt-10">
                <img src="/images (1).png" alt="" className="w-15 h-15 rounded-full border-2 border-black ml-2 first:ml-0 "/>
              <img src="/images (2).png" alt="" className="w-15 h-15 rounded-full border-2 border-black ml-2 first:ml-0 "/>
              <img src="/images.png" alt="" className="w-15 h-15 rounded-full border-2 border-black ml-2 first:ml-0 "/>
              <img src="/COLOURBOX36578961.webp" alt=""className="w-15 h-15 rounded-full border-2 border-black ml-2 first:ml-0 " />
                <div className="w-15 h-15 rounded-full outline-black outline-3  outline-offset-4 bg-black text-white flex items-center justify-center ml-2">
            +
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
