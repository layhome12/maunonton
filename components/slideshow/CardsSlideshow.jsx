"use client";

import Slider from "react-slick";
import CardMovie from "../card/CardMovie";
import FeatherIcon from "../icons/FeatherIcon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/assets/css/components/sliders.css";

const PrevButton = (props) => {
  const { className, onClick } = props;

  return (
    <button
      className={`btn btn-circle !bg-base-200 !border-none absolute my-auto top-[-80px] bottom-0 z-10 left-[-20px] flex items-center justify-center ${
        className.split(" ").includes("slick-disabled") && "!hidden"
      }`}
      onClick={onClick}
    >
      <FeatherIcon icons={"chevron-left"}/>
    </button>
  );
};

const NextButton = (props) => {
  const { className, onClick } = props;

  return (
    <button
      className={`btn btn-circle !bg-base-200 !border-none absolute my-auto top-[-80px] bottom-0 z-10 right-[-20px] flex items-center justify-center ${
        className.split(" ").includes("slick-disabled") && "!hidden"
      }`}
      onClick={onClick}
    >
      <FeatherIcon icons={"chevron-right"}/>
    </button>
  );
};

const CardsSlideshow = ({ slides = [] }) => {
  const config = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
          dots: true,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <Slider {...config}>
      {slides.map((val, key) => {
        return (
          <div className="px-2">
            <CardMovie options={val} key={key} />
          </div>
        );
      })}
    </Slider>
  );
};

export default CardsSlideshow;
