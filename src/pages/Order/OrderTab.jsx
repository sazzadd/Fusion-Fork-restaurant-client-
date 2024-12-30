import React from "react";
import FoodCard from "../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div>
      <div className="w-10/12 mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {items.map((item) => (
            <FoodCard item={item}></FoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderTab;
