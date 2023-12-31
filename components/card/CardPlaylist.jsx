"use client";

import Link from "next/link";
import FeatherIcon from "../icons/FeatherIcon";
import Image from "next/image";
import "@/assets/css/components/cards.css";

const CardPlaylist = ({ options }) => {
  const handleBookmarkClick = (e, id) => {
    e.preventDefault();
    console.log("Bookmark save", id);
  };

  return (
    <Link href={`/play/${options.id}`}>
      <div className="card card-movie px-1 cursor-pointer">
        <figure className="!relative rounded-[15px] h-[260px] lg:h-[285px] 2xl:h-[340px]">
          <Image
            className="w-full"
            src={options.image}
            alt={options.image}
            fill
            sizes="100%"
          />
          <div className="floating w-full h-full relative">
            <button
              className="btn btn-square btn-bookmark btn-sm absolute top-3 left-3 text-[#2f80ed] hover:text-[#ffc312] z-[5]"
              onClick={(e) => handleBookmarkClick(e, options.id)}
            >
              <FeatherIcon icons={"bookmark"} width={17} />
            </button>
            <div className="w-[3.8rem] h-[2rem] rating-box absolute rounded-lg top-3 right-3 bg-base-100 flex items-center px-2 gap-1">
              <span className="text-[#ffc312]">
                <FeatherIcon icons={"star"} width={17} />
              </span>
              <span className="text-[14px] font-medium">{options.rating}</span>
            </div>
            <svg
              className="player-icon"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <ul className="playlist-info flex gap-3 text-[13px] text-[#eaeaea] font-thin absolute bottom-8 left-0">
              <li className="text-warning">{options.genre}</li>
              <li>
                <span className="font-bold text-[20px]">24</span> Eps
              </li>
            </ul>
          </div>
        </figure>
        <div className="card-body justify-end p-2 gap-1">
          <h2 className="card-title font-normal text-[16px] line-clamp-2">
            {options.name}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default CardPlaylist;
