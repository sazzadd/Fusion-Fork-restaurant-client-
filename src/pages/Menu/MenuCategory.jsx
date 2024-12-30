import React from "react";
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
    </div>
  );
};

export default MenuCategory;
{
}
