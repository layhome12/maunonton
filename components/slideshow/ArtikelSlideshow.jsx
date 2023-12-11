"use client";
import Slider from "react-slick";
import FeatherIcon from "../icons/FeatherIcon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/assets/css/components/sliders.css";
import Image from "next/image";

const PrevButton = (props) => {
  const { className, onClick } = props;

  return (
    <button
      className={`btn btn-circle !bg-base-100 !border-none absolute my-auto top-0 bottom-0 z-10 left-[-18px] flex items-center justify-center ${
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
      className={`btn btn-circle !bg-base-100 !border-none absolute my-auto top-0 bottom-0 z-10 right-[-18px] flex items-center justify-center ${
        className.split(" ").includes("slick-disabled") && "!hidden"
      }`}
      onClick={onClick}
    >
      <FeatherIcon icons={"chevron-right"} />
    </button>
  );
};

const ArtikelSlideshow = ({ slides = [] }) => {
  const config = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 2,
    rows: 2,
    arrows: true,
    autoplay: false,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          centerMode: false,
          arrows: false,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <Slider {...config}>
      {slides.map((val, key) => {
        return (
          <div className="p-3" key={key}>
            <div className="card card-side !grid grid-cols-3 bg-[#151f30] cursor-pointer">
              <figure className="!relative w-full h-[185px]">
                <Image
                  className="w-full"
                  src={val.image}
                  alt={val.name}
                  fill
                  sizes="100%"
                />
                <button
                  className="btn btn-square btn-bookmark absolute top-5 left-5 btn-sm text-[#2f80ed] hover:text-[#ffc312] rounded-lg"
                  onClick={() => handleBookmarkClick(val.id)}
                >
                  <FeatherIcon icons={"bookmark"} width={17} />
                </button>
              </figure>
              <div className="card-body px-5 py-3 col-span-2">
                <h2 className="card-title font-medium text-[18px] line-clamp-2">
                  {val.name}
                </h2>
                <span className="text-[13px] line-clamp-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default ArtikelSlideshow;
