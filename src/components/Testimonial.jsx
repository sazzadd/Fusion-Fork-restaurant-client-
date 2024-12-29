import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8 md:py-12">
      <p className="text-yellow-500 text-sm md:text-base">---What Our Clients Say---</p>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-2">
        TESTIMONIALS
      </h2>
      <div className="flex items-center justify-center my-4">
        {[...Array(4)].map((_, index) => (
          <FaStar key={index} className="text-yellow-500 text-xl md:text-2xl" />
        ))}
        <FaStar className="text-gray-300 text-xl md:text-2xl" />
      </div>
      <div className="flex items-center justify-between w-full max-w-4xl">
        <button className="text-blue-500 text-2xl md:text-3xl">
          <FiChevronLeft />
        </button>
        <div className="text-center mx-4">
          <FaQuoteLeft className="text-3xl text-gray-500 mx-auto mb-4" />
          <p className="text-sm md:text-base text-gray-600 max-w-lg">
            Various version have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like). It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
          <p className="text-yellow-500 text-lg md:text-xl font-semibold mt-4">
            JANE DOE
          </p>
        </div>
        <button className="text-blue-500 text-2xl md:text-3xl">
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
