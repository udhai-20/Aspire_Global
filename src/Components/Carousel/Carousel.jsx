import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel.css";

let testimonialCarousel = [
  {
    name: "student1",
    img: "https://www.inspiruseducation.com/wp-content/uploads/2020/05/Trishant-Shetty-150x150.png?x61251",
    comment:
      "I had a fantastic experience with the one on one training at Inspirus for IELTS. The faculty was meticulous and the strategies she suggested made the difference during the test. The writing section, which was the most challenging for me, required a lot of practice to help build the pace for the test day. What really helped me was the feedback on my essays from my faculty on how I could strategize my time and write a neat essay on any given topic. 30-45 days of preparation and 6-7 mock tests helped me achieve a desired score. The best part of my coaching was that even with my erratic schedule, the folks at Inspirus were extremely accommodating and helped me get a high score in IELTS",
  },
  {
    name: "student1",
    img: "https://www.inspiruseducation.com/wp-content/uploads/2020/05/Trishant-Shetty-150x150.png?x61251",
    comment:
      "I had a fantastic experience with the one on one training at Inspirus for IELTS. The faculty was meticulous and the strategies she suggested made the difference during the test. The writing section, which was the most challenging for me, required a lot of practice to help build the pace for the test day. What really helped me was the feedback on my essays from my faculty on how I could strategize my time and write a neat essay on any given topic. 30-45 days of preparation and 6-7 mock tests helped me achieve a desired score. The best part of my coaching was that even with my erratic schedule, the folks at Inspirus were extremely accommodating and helped me get a high score in IELTS",
  },
  {
    name: "student1",
    img: "https://www.inspiruseducation.com/wp-content/uploads/2020/05/Trishant-Shetty-150x150.png?x61251",
    comment:
      "I had a fantastic experience with the one on one training at Inspirus for IELTS. The faculty was meticulous and the strategies she suggested made the difference during the test. The writing section, which was the most challenging for me, required a lot of practice to help build the pace for the test day. What really helped me was the feedback on my essays from my faculty on how I could strategize my time and write a neat essay on any given topic. 30-45 days of preparation and 6-7 mock tests helped me achieve a desired score. The best part of my coaching was that even with my erratic schedule, the folks at Inspirus were extremely accommodating and helped me get a high score in IELTS",
  },
  {
    name: "student1",
    img: "https://www.inspiruseducation.com/wp-content/uploads/2020/05/Trishant-Shetty-150x150.png?x61251",
    comment:
      "I had a fantastic experience with the one on one training at Inspirus for IELTS. The faculty was meticulous and the strategies she suggested made the difference during the test. The writing section, which was the most challenging for me, required a lot of practice to help build the pace for the test day. What really helped me was the feedback on my essays from my faculty on how I could strategize my time and write a neat essay on any given topic. 30-45 days of preparation and 6-7 mock tests helped me achieve a desired score. The best part of my coaching was that even with my erratic schedule, the folks at Inspirus were extremely accommodating and helped me get a high score in IELTS",
  },
];
const handleDragStart = (e) => e.preventDefault();
function Carousel() {
  const items = testimonialCarousel.map((c) => (
    <div className="carouselItem">
      <div className="image_container">
        <img
          className="carouselItem__img"
          src={c.img}
          alt={c?.name}
          onDragStart={handleDragStart}
        />
      </div>

      <b className="carouselItem__name">{c?.name}</b>
      <b className="carouselItem__score">IELTS band achieved 8.5</b>
      <b className="carouselItem__txt">{c?.comment}</b>
    </div>
  ));
  const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 1,
    },
    1024: {
      items: 1,
    },
  };

  return (
    <AliceCarousel
      autoPlay
      responsive={responsive}
      infinite
      disableButtonsControls
      autoPlayInterval={3000}
      keyboardNavigation={true}
      // disableDotsControls
      mouseTracking
      items={items}
    />
  );
}

export default Carousel;
