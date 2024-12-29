import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";
import SecTitile from "../SecTitile";
// import './styles.css';
const Category = () => {
  return (
    <div className="py-10">
      <div>
        <SecTitile
          heading={"Order Online"}
          subHeading={"From 11an to 10pm"}
        ></SecTitile>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h3 className="text-2xl uppercase text-white text-center  -mt-12">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img2} alt="" />
          <h3 className="text-2xl uppercase text-white text-center  -mt-12">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img3} alt="" />
          <h3 className="text-2xl uppercase text-white text-center  -mt-12">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img4} alt="" />
          <h3 className="text-2xl uppercase text-white text-center  -mt-12">
            Dessert
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img5} alt="" />
          <h3 className="text-2xl uppercase text-white text-center  -mt-12">
            Salad
          </h3>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Category;
