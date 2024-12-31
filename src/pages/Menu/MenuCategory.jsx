import React from "react";
import { Link } from "react-router-dom";
import Cover from "../../shared/Cover";
import MenuItem from "../../shared/MenuItem";

const MenuCategory = ({ items, title, img, subTitle }) => {
  return (
    <div>
      {title && <Cover img={img} subTitle={subTitle} title={title}></Cover>}
      <div className="w-10/12 mx-auto py-4">
        <div className="grid md:grid-cols-2 gap space-x-5 ">
          {items.map((item) => (
            <MenuItem item={item}></MenuItem>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 mb-8 border-b-4 mt-4">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
{
}
