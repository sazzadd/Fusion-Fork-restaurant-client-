import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex items-center space-x-6 p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
      {/* Image */}
      <img
        style={{
          borderRadius: "0 200px 200px 200px",
        }}
        className="w-24 h-24 object-cover"
        src={image}
        alt={name}
      />
      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold uppercase text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm mt-2">{recipe}</p>
      </div>
      {/* Price */}
      <div>
        <p className="text-xl font-semibold text-yellow-500">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
