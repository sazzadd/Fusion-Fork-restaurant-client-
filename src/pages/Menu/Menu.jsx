import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover";
import PopularMenu from "../PopularMenu";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Fusion Fork | Menu</title>
      </Helmet>

      <Cover
        title="Our Menu"
        subTitle="Would you like to try a dish?"
        img={"https://i.ibb.co.com/5hFyPW4/herro-slide-1.jpg"}
      ></Cover>
      <div className="py-5">
        <PopularMenu></PopularMenu>
      </div>
      <Cover
        title="DESSERTS"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={"https://i.ibb.co.com/Fz7mBx1/header-how-to-design-a-balanced-dessert-menu.jpg"}
      ></Cover>
      <div className="py-5">
        <PopularMenu></PopularMenu>
      </div>
    </div>
  );
};

export default Menu;
