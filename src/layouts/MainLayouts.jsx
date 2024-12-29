import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const MainLayouts = () => {
  return (
    <div>
     <Navbar></Navbar>
      <div className="">
        <Outlet></Outlet>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
    // <Footer></Footer>
  );
};

export default MainLayouts;
