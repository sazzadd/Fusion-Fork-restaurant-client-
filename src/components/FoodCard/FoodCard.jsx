import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="relative">
        <figure>
          <img
            src={image}
            alt={name}
            className="w-full h-56 object-cover transition-transform duration-300 transform hover:scale-105"
          />
          <p className="absolute top-2 right-2 px-3 py-1 bg-black bg-opacity-70 text-white text-sm rounded-md font-semibold">
            ${price}
          </p>
        </figure>
      </div>
      <div className="p-5 bg-gradient-to-r from-gray-100 via-white to-gray-100">
        <h2 className="text-lg font-bold text-gray-800 mb-2 text-center">
          {name}
        </h2>
        <p className="text-sm text-gray-600 text-center mb-4">{recipe}</p>
        <div className="flex justify-center">
          <button className="btn btn-outline border-0 border-b-4 border-[#BB8506] mb-8 mt-4 text-black hover:text-white hover:bg-black hover:border-black transform hover:scale-105 transition-all duration-300 ease-in-out">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
