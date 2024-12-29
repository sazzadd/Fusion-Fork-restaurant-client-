import React from "react";
import featuredImg from "../assets/home/featured.jpg";
import SecTitile from "./SecTitile";

const Featured = () => {
  return (
    <div
      className="relative bg-fixed bg-cover bg-center text-white py-16"
      style={{ backgroundImage: `url(${featuredImg})` }}
    >

      <div className="absolute inset-0 bg-black opacity-50"></div>


      <div className="relative z-10 px-8 md:px-16">
        {/* <SecTitle subHeading="Check It Out" heading="Featured Item" /> */}
        <SecTitile  subHeading="Check It Out" heading="Featured Item" ></SecTitile>
        <div className="md:flex justify-center items-center mt-8 w-10/12 mx-auto">
          {/* ইমেজ */}
          <div className="flex-shrink-0">
            <img
              src={featuredImg}
              alt="Featured"
              className="w-full md:w-auto md:max-w-sm rounded-lg shadow-lg"
            />
          </div>
          {/* টেক্সট কন্টেন্ট */}
          <div className="md:ml-10 space-y-4 text-center md:text-left mt-4 md:mt-0">
            <p className="text-sm font-semibold">Aug 20</p>
            <p className="uppercase text-lg font-bold">Where I Get Some</p>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              vitae dolor doloremque. Eius, adipisci itaque? Delectus vel libero
              dolore adipisci perspiciatis modi dolor enim architecto nemo
              praesentium explicabo, ea et?
            </p>
            <button className="btn btn-outline border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition duration-300">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
