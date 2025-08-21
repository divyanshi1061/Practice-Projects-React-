import React from "react";
import { FaEyeSlash} from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from "react";


function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex items-center bg-white min-h-screen ">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row rounded-2xl shadow-2xl overflow-hidden ">
          {/*left side*/}
          <div className="w-full lg:w-1/2 p-12">
            <div className="flex flex-col">
              <h3 className="text-3xl text-gray-700 font-semibold mb-2">
               {isLogin ? "Welcome Back" : "Create an Account"}
              </h3>
              <p className="text-gray-600">{isLogin ? "Login to your account" : "Join to your forever account"}</p>
              {/*Social Button*/}
              <div className="grid grid-cols-2 gap-6 mt-6 ">
                <button className="flex justify-center items-center gap-2 py-2 border border-gray-300 rounded">
                  <img className="w-5" src="google.png" alt="google" />
                </button>
                <button className="flex justify-center items-center gap-2 py-2 border border-gray-300 rounded">
                  <img className="w-6" src="facebook.png" alt="facebook" />
                </button>
              </div>
              {/*Line*/}
              <div className="flex items-center my-4 gap-3 mt-6">
                <div className="flex-grow border-t border-gray-700"></div>
                <span className="text-gray-700">or</span>
                <div className="flex-grow border-t border-gray-700"></div>
              </div>

              {/*Authentication Form*/}
              <form onSubmit={handleSubmit} action="">
                {/*Name Field*/}
                {!isLogin && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 " htmlFor="">
                     First Name
                    </label>
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded outline-none placeholder:text-sm placeholder:text-gray-600"
                      placeholder="Enter your First Name"
                      type="text"
                    />
                  </div>
                                    <div>
                    <label className="block text-gray-700 mb-2 " htmlFor="">
                      Last Name
                    </label>
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded outline-none placeholder:text-sm placeholder:text-gray-600"
                      placeholder="Enter your Last Name"
                      type="text"
                    />
                  </div></div>
                )}
                {/*Email Field*/}
                <div className="mb-4 mt-6">
                  <label className="block text-gray-700 mb-2 " htmlFor="">
                    Email Address
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded outline-none placeholder:text-sm placeholder:text-gray-600"
                    placeholder="Enter your email"
                    type="text"
                  />
                </div>

                {/*Password Field*/}
                <div className="mb-4 mt-6">
                  <label className="block text-gray-700 mb-2 " htmlFor="">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded outline-none placeholder:text-sm placeholder:text-gray-600"
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                    />{" "}
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-3 right-3 text-gray-600 hover:text-gray-700 cursor-pointer"
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                </div>
                {/*Confirm Password Field*/}
                {!isLogin && (
                  <div className="mb-4 mt-6">
                  <label className="block text-gray-700 mb-2 " htmlFor="">
                   Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded outline-none placeholder:text-sm placeholder:text-gray-600"
                      placeholder="Enter your password"
                      type={showConfirmPassword ? "text" : "password"}
                    />{" "}
                    <button
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute top-3 right-3 text-gray-600 hover:text-gray-700 cursor-pointer"
                    >
                      {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                </div>
              )}

                {/*Remember Checkbox*/}
                {isLogin &&( <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <input className="w-4 h-4" type="checkbox" name="" id="" />
                    <span className="text-sm text-gray-700 font-semibold">
                      Remember Me
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-amber-600 text-sm font-semibold hover:underline"
                  >
                    Forgot Password
                  </a>
                </div>)}
               
                {/*Login Button*/}
                <div className="mt-6"><button className="w-full bg-amber-600 text-white font-bold rounded cursor-pointer py-2">{isLogin ? "Login" : "Sign Up"}</button></div>
                <p className="text-sm text-center text-gray-600 mt-4">
                  {isLogin?"Don't have account": "Already have account"}
                  <span onClick={() => setIsLogin(!isLogin)} className="
                  text-amber-600 hover:underline cursor-pointer ">{ isLogin ? " Sign Up" : " Login"}</span>
                </p>
            
              </form>
            </div>
          </div>
          {/*Right Side banner*/}
          <div className="relative w-full lg:w-1/2 bg-cover bg-center mt-6 lg:mt-0 h-60 lg:h-auto flex items-center justify-center text-white" style={{backgroundImage:"url('./banner.jpg')"}}>
          <div className="absolute inset-0 bg-black opacity-50">

          </div>
          <div className="relative text-center">
            <h3 className="
            text-3xl font-bold ">Login Your Account and Explore it</h3>
            <p className="max-w-sm mx-auto">Login your account and save orders,cart items and enjoy offers.</p>
            <button className="mt-6 px-6 py-2 border-2 border-white rounded cursor-pointer font-bold">Create an Account</button>
          
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
