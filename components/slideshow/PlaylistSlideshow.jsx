"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/assets/css/components/sliders.css";
import FeatherIcon from "../icons/FeatherIcon";
import Image from "next/image";
import Link from "next/link";

const PrevButton = (props) => {
  const { className, onClick } = props;

  return (
    <button
      className={`btn btn-circle !bg-base-100 !border-none absolute my-auto top-[-26px] bottom-0 z-10 left-[-15px] flex items-center justify-center ${
        className.split(" ").includes("slick-disabled") && "!hidden"
      }`}
      onClick={onClick}
    >
      <FeatherIcon icons={"chevron-left"} />
    </button>
  );
};

const NextButton = (props) => {
  const { className, onClick } = props;

  return (
    <button
      className={`btn btn-circle !bg-base-100 !border-none absolute my-auto top-[-26px] bottom-0 z-10 right-[-15px] flex items-center justify-center ${
        className.split(" ").includes("slick-disabled") && "!hidden"
      }`}
      onClick={onClick}
    >
      <FeatherIcon icons={"chevron-right"} />
    </button>
  );
};

const PlaylistSlideshow = ({ slides = [], isActive = 1 }) => {
  const activeItems =
    Math.abs(isActive) > slides.length ? 1 : Math.abs(isActive);

  const initialShow = (itemActive, slidesToShow) => {
    return itemActive - slidesToShow > 0 ? itemActive - slidesToShow : 0;
  };

  const config = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: initialShow(activeItems, 6),
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          initialSlide: initialShow(activeItems, 6),
        },
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: initialShow(activeItems, 5),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: initialShow(activeItems, 3),
        },
      },
    ],
  };

  return (
    <div className="playlist-slide">
      <Slider {...config}>
        {slides.map((val, key) => {
          return (
            <div className="px-2" key={key}>
              <div
                className={`card w-full h-[100px] bg-base-100 shadow-xl image-full cursor-pointer mb-1 ${
                  key + 1 == activeItems ? "active" : ""
                }`}
              >
                <figure className="!relative">
                  <Image
                    className="w-full"
                    src={val.image}
                    alt={val.name}
                    fill
                    sizes="100%"
                  />
                </figure>
                <div className="card-body relative p-3">
                  <div className="absolute bottom-[2px] left-[8px] flex justify-center items-center gap-2">
                    <FeatherIcon icons={"play-circle"} width={13} />
                    <span className="text-[12px]">{val.duration}</span>
                  </div>
                </div>
              </div>
              <small>Episode {key + 1}</small>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PlaylistSlideshow;
