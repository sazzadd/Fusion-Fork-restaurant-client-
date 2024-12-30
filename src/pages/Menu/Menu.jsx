import React from "react";
import { Helmet } from "react-helmet-async";
import SecTitile from "../../components/SecTitile";
import useMenu from "../../hooks/useMenu";
import Cover from "../../shared/Cover";
import MenuCategory from "./MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category == "dessert");
  const pizza = menu.filter((item) => item.category == "pizza");
  const soup = menu.filter((item) => item.category == "soup");
  const salad = menu.filter((item) => item.category == "salad");
  const offered = menu.filter((item) => item.category == "offered");
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
      <SecTitile heading="todays Offer" subHeading="Don't miss "></SecTitile>
      <div className="py-5">
        <MenuCategory items={offered}></MenuCategory>
      </div>
      <MenuCategory
        items={dessert}
        title="Dessert"
        subTitle="Craving Something Sweet? Explore Our Dessert Menu!"
        img={
          "https://i.ibb.co.com/Fz7mBx1/header-how-to-design-a-balanced-dessert-menu.jpg"
        }
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        title="pizza"
        subTitle="Order Now and Experience Pizza Like Never Before!"
        img={
          "https://i.ibb.co.com/3mQw8Wk/homemade-pizza-monterey-jack-cheese.jpg"
        }
      ></MenuCategory>
      <MenuCategory
        items={salad}
        title="salad"
        subTitle="Fresh, Crisp, and Packed with Flavor - The Perfect Salad Awaits!"
        img={"https://i.ibb.co.com/jhyFt4H/salad-bg.jpg"}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        title="soup"
        subTitle="Warm, Wholesome, and Delicious  Soup Made with Love."
        img={"https://i.ibb.co.com/CKQPKFH/soup-bg.jpg"}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
