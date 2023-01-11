import React from "react";
import "./testimonials.css";
import client1 from "../../assets/client.jpeg";
// import Swiper core and required modules
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    id: 1,
    name: "Test client Name",
    avatar: client1,
    review: "Text commonly used to demonstrate the visual form of a ",
  },
  {
    id: 2,
    name: "Test client Name",
    avatar: client1,
    review: "Text commonly used to demonstrate the visual form of a ",
  },
  {
    id: 3,
    name: "Test client Name",
    avatar: client1,
    review: "Text commonly used to demonstrate the visual form of a ",
  },
];
const Testimonials = () => {

  return (
    <section id="testimonial">
      <h2>Testimonial</h2>
      <Swiper className="container testimonial__container"
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}>
        {data.map(({name, avatar, review },index) => {
          return (
            <SwiperSlide key={index} virtualIndex={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="Client" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
