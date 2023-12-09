"use client";

import Image from "next/image";
import FeatherIcon from "../icons/FeatherIcon";
import Link from "next/link";
import { useState } from "react";
import logo from "@/assets/image/logo/logo.png";

const Sidebar = () => {
  const [expandSearch, setExpandSearch] = useState(false);
  const [expandNav, setExpandNav] = useState(false);

  return (
    <header className="bg-base-200 relative">
      <div className="navbar container justify-between py-3 lg:py-4 mx-auto">
        <div className="navbar-start w-[180px] md:w-[230px]">
          <div className="mr-3 text-[#2f80ed] block lg:hidden">
            <button
              className="mt-1 text-[#ffffff99]"
              onClick={() => setExpandNav(!expandNav)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                ></path>
              </svg>
            </button>
          </div>
          <div className="w-[165px] h-[55px] relative">
            <Image
              src={logo}
              alt="logo.jpg"
              sizes="100%"
              priority
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div
          className={`navbar-center ${!expandNav && "hidden"} lg:flex lg:grow`}
        >
          <ul className="menu menu-vertical lg:menu-horizontal px-1 gap-3 lg:gap-5 z-50">
            <li>
              <a className="text-[14px] font-medium nav-link">Home</a>
            </li>
            <li>
              <a className="text-[14px] font-medium nav-link">Populer</a>
            </li>
            <li>
              <a className="text-[14px] font-medium nav-link">Terbaru</a>
            </li>
            <li>
              <a className="text-[14px] font-medium nav-link">Playlist</a>
            </li>
            <li>
              <a className="text-[14px] font-medium nav-link">List Genre</a>
            </li>
            <li>
              <details>
                <summary className="text-[14px] font-medium nav-link">
                  Lainya
                </summary>
                <ul className="p-2 bg-transparent lg:w-[250px] lg:bg-[#1c253a] z-50">
                  <li>
                    <a>Sub Menu 1</a>
                  </li>
                  <li>
                    <a>Sub Menu 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end grow md:w-[30%] md:justify-start gap-3">
          <div className="mx-3 text-[#2f80ed] block md:hidden">
            <button className="mt-1" onClick={() => setExpandSearch(true)}>
              <FeatherIcon icons={"search"} width={20} />
            </button>
          </div>
          <div
            className={`search-nav absolute left-0 right-0 top-0 bottom-0 w-full h-full flex items-center px-3 md:grow md:w-auto md:relative md:block ${
              !expandSearch && "hidden"
            }`}
          >
            <div className="join bg-[#151f30] w-full rounded-[16px] justify-between">
              <input
                type="text"
                placeholder="Cari.."
                className="input text-[14px] border-0 nav-search h-[2.5rem] font-medium bg-transparent grow pr-0"
              />
              <button className="w-[30px] mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path>
                </svg>
              </button>
            </div>
            <button
              className="ml-3 block md:hidden"
              onClick={() => setExpandSearch(false)}
            >
              <FeatherIcon icons={"x-square"} width={20} />
            </button>
          </div>
          <Link
            href={"#"}
            className="flex text-[14px] font-medium hover:text-[#2f80ed]"
          >
            Sign In
            <div className="mx-3 text-[#2f80ed]">
              <FeatherIcon icons={"log-in"} width={18} />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
