import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const MainLayouts = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}

      <div className="">
        <Outlet></Outlet>
      </div>
      {noHeaderFooter || (
        <div>
          <Footer></Footer>
        </div>
      )}
    </div>
    // <Footer></Footer>
  );
};

export default MainLayouts;
