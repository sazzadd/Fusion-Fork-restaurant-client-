import React from "react";
import Banner from "../components/Banner";
import Category from "../components/Category/Category";
import Testimonial from "../components/Testimonial";
import Featured from "./../components/Featured";
import PopularMenu from "./PopularMenu";

const Home = () => {
  return (
    <div>
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
