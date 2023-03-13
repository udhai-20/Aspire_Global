import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel.css";

let testimonialCarousel = [
  {
    name: "Manushi Gupta",
    score: " IELTS BAND ACHIEVED 8.0",
    img: "../Images/testimonial_1.jpg",
    comment:
      "Being an english graduate I wanted to Pursue my career in the language and hence I enrolled for IELTS examination in Aspire Bangalore. Indeed it was a delightful experience .The Faculties were very clear with their points and guided each one of us with utmost sincerity. Thank you team Aspire Bangalore.",
  },
  {
    name: "Vaishnav Mathur",
    score: "IELTS BAND ACHIEVED 8.5",
    img: "../Images/testimonial_2.jpg",
    comment:
      "Aspire is one of the best places to study in Bangalore to live your dreams of Abroad. I Am eternally grateful to my IELTS teachers who not only taught me the subject but inspired me to pursue my dreams. Every single minute spent here was worth every penny.",
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
      <b className="carouselItem__score">{c.score}</b>
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
