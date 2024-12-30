import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div>
      <div className="bg-base-100 shadow-xl relative">
        <figure>
          <img src={image} className="w-full" alt="Shoes" />
          <p className="right-0 top-0  absolute p-3 font-bold bg-slate-700 text-white">{price} $</p>
        </figure>
        <div className="card-body items-center bg-cover text-center">
          
          <h2 className="card-title">{name}</h2>
          <p cl>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
