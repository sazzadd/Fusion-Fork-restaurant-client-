import React, { useEffect, useState } from "react";
import SecTitile from "./SecTitile";
// import Swiper core and required modules
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper/modules";
// Import Swiper styles
import { Rating } from "@smastrom/react-rating";
import "swiper/css";
import "swiper/css/navigation";

import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <SecTitile heading="TESTIMONIAL"></SecTitile>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center m-24">
                <div>
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                </div>
                <FaQuoteLeft className="text-3xl  text-gray-500 mx-auto mt-5 mb-4" />
                <p className="text-center py-4">{review.details}</p>
                <h3 className="text-2xl text-center text-orange-400">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
