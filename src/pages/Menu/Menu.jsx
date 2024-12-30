import React from "react";
import { Helmet } from "react-helmet-async";
import menuImg from "../../assets/menu/menu-bg.png";
import Cover from "../../shared/Cover";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Fusion Fork | Menu</title>
      </Helmet>
      
      <Cover img={"https://i.ibb.co.com/5hFyPW4/herro-slide-1.jpg"}></Cover>
    </div>
  );
};

export default Menu;
