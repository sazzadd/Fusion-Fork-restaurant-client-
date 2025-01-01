import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage: "url(https://i.ibb.co/r3dNFw4/authentication.png)",
      }}
    >
      <div
        className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-6 md:p-8 flex flex-col md:flex-row"
        style={{
          backgroundImage: "url(https://i.ibb.co/r3dNFw4/authentication.png)",
        }}
      >
        {/* Left Side Form */}
        <div className="md:w-1/2 md:pr-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-amber-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type here"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-amber-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-amber-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 focus:outline-none focus:ring focus:ring-amber-300"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            Already registered?{" "}
            <Link to="/login" className="text-amber-500 hover:underline">
              Go to log in
            </Link>
          </p>
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-1/4 bg-gray-300"></div>
            <p className="px-4 text-sm text-gray-500">Or sign up with</p>
            <div className="h-px w-1/4 bg-gray-300"></div>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <button className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transform transition duration-300 hover:scale-110">
              <FaFacebook size={24} />
            </button>
            <button className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 transform transition duration-300 hover:scale-110">
              <FaGoogle size={24} />
            </button>
            <button className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-500 transform transition duration-300 hover:scale-110">
              <FaGithub size={24} />
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="hidden md:block md:w-1/2 md:pl-6">
          <img
            src="https://i.ibb.co/xzcx4xm/authentication2-1.png"
            alt="Illustration"
            className="w-full mt-24 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
