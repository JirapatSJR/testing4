"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./carousel.scss";
import spriteL from "./sprite.svg";
import spriteR from "./sprite-r.svg";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const CarouselHome = ({ carousels }) => {
  return (
    <>
      <Carousel
        className=""
        showIndicators
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button
                className="nav_btn nav_btn_right md:block hidden"
                onClick={clickHandler}
              >
                <Image src={spriteR} alt="a" />
              </button>
            )
          );
        }}
        renderArrowPrev={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button
                onClick={clickHandler}
                className="nav_btn nav_btn_left md:block hidden"
              >
                <Image src={spriteL} alt="a" />
              </button>
            )
          );
        }}
      >
        {carousels.map((carousel) => {
          return (
            <div key={carousel.id}>
              <img src={carousel.Image.data.attributes.url} />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};
export default CarouselHome;
