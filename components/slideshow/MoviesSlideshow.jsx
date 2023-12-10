"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/assets/css/components/sliders.css";
import FeatherIcon from "../icons/FeatherIcon";
import Image from "next/image";

const MoviesSlideshow = ({ slides = [] }) => {
  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  const handleBookmarkClick = (id) => {
    console.log("Bookmark save", id);
  };

  return (
    <Slider {...config}>
      {slides.map((val, key) => {
        return (
          <div className="px-2" key={key}>
            <div className="card w-full h-[230px] md:h-[270px] bg-base-100 shadow-xl image-full cursor-pointer">
              <figure className="!relative">
                <Image
                  className="w-full"
                  src={val.image}
                  alt={val.name}
                  fill
                  sizes="100%"
                />
              </figure>
              <div className="card-body justify-end relative">
                <h2 className="card-title text-[25px] md:text-[30px] font-medium lg:font-normal text-white">
                  {val.name}
                </h2>
                <ul className="flex gap-3 text-[14px] text-[#eaeaea] md:mt-2">
                  <li>{val.genre}</li>
                  <li>{val.year}</li>
                </ul>
                <button
                  className="btn btn-square btn-bookmark absolute top-5 left-5 btn-sm text-[#2f80ed] hover:text-[#ffc312] rounded-lg"
                  onClick={() => handleBookmarkClick(val.id)}
                >
                  <FeatherIcon icons={"bookmark"} width={17} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default MoviesSlideshow;
