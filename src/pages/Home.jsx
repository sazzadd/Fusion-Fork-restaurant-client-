import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Category from "../components/Category/Category";
import Testimonial from "../components/Testimonial";
import Featured from "./../components/Featured";
import PopularMenu from "./PopularMenu";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Fusion Fork | Menu</title>
      </Helmet>
      <div>
        <Banner></Banner>
        <Category></Category>
        <section className="w-11/12 mx-auto">
          <PopularMenu></PopularMenu>
        </section>
        <section>
          <Featured></Featured>
        </section>
        <section>
          <Testimonial></Testimonial>
        </section>
      </div>
    </div>
  );
};

export default Home;
