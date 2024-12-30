import React, { useEffect, useState } from "react";
import SecTitile from "../components/SecTitile";
import MenuItem from "../shared/MenuItem";
import useMenu from "../hooks/useMenu";

const PopularMenu = () => {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // });
  // console.log(menu);
  const [menu] = useMenu();
  const popular = menu.filter(item =>item.category == "popular")
  return (
    <div>
      <section>
        <SecTitile
          heading="From our Menu"
          subHeading="Popular Item"
        ></SecTitile>
      </section>
      <div className="grid md:grid-cols-2 gap space-x-5">
        {popular.map((item) => (
          <MenuItem item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
