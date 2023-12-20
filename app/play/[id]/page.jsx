import Layout from "@/components/layout/Layout";
import FeatherIcon from "@/components/icons/FeatherIcon";
import "@/assets/css/page/player.css";
import Player from "@/components/player/Player";
import ComponentNonSsr from "@/components/ComponentNonSsr";
import { playlist, movies } from "@/app/data";
import PlaylistSlideshow from "@/components/slideshow/PlaylistSlideshow";
import Comment from "@/components/comments/Comment";
import CardMovie from "@/components/card/CardMovie";

const Play = () => {
  return (
    <Layout>
      {/* Movie Player */}
      <section className="movie-player w-100 min-h-[450px] relative py-12">
        <div
          className="movie-cover"
          style={{
            background: `url('/player/player-cover.jpg')`,
          }}
        ></div>
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-10 lg:col-span-9">
              {/* Title */}
              <div className="title">
                <div className="mb-5">
                  <a
                    className="link-trailer flex items-center text-[18px] text-white w-[120px]"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-[33px] md:w-[38px] lg:w-[42px]"
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
                    Trailer
                  </a>
                </div>
                <h1 className="text-[27px] md:text-[30px] lg:text-[36px] text-white">
                  Rokudenashi Majutsu Koushi to Akashic Records
                </h1>
                <div className="information flex gap-5 mt-3">
                  <div>
                    <div className="flex gap-2 items-center">
                      <div className="text-[#4896ff]">
                        <FeatherIcon icons={"star"} width={20} height={20} />
                      </div>
                      <span>9.4</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2 items-center">
                      <div className="text-[#4896ff]">
                        <FeatherIcon icons={"book"} width={20} height={20} />
                      </div>
                      <span>Anime</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2 items-center">
                      <div className="text-[#4896ff]">
                        <FeatherIcon icons={"play"} width={22} height={22} />
                      </div>
                      <span>1 h 42 min</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Player */}
              <div className="player">
                <div className="mt-5">
                  <ComponentNonSsr>
                    <Player />
                  </ComponentNonSsr>
                </div>
              </div>

              {/* Tools */}
              <div className="tools my-3">
                <div className="flex justify-between">
                  <a
                    className="flex gap-2 items-center text-[14px] hover:text-[#72aeff]"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-[#4896ff]">
                      <FeatherIcon icons={"download"} width={20} />
                    </div>
                    Download
                  </a>

                  <a
                    className="flex gap-2 items-center text-[14px] hover:text-[#72aeff]"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-[#4896ff]">
                      <FeatherIcon icons={"bookmark"} width={20} />
                    </div>
                    Tambah ke Favorit
                  </a>
                </div>
              </div>

              {/* Playlist */}
              <div className="playlist mt-7">
                <div className="flex gap-2 my-3">
                  <div className="text-[#4896ff]">
                    <FeatherIcon icons={"play"} width={22} />
                  </div>
                  <h1 className="text-[18px]">Playlist</h1>
                </div>
                <PlaylistSlideshow slides={playlist} />
              </div>
              <div className="description mt-5">
                <p className="text-[15px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                {/* Genre */}
                <div className="genre mt-5">
                  <span className="font-medium text-[18px] text-white">
                    Genre
                  </span>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="btn btn-neutral btn-sm font-normal mx-1 hover:bg-[#2f80ed] text-white"
                    >
                      Anime
                    </a>
                    <a
                      href="#"
                      className="btn btn-neutral btn-sm font-normal mx-1 hover:bg-[#2f80ed] text-white"
                    >
                      Magic
                    </a>
                    <a
                      href="#"
                      className="btn btn-neutral btn-sm font-normal mx-1 hover:bg-[#2f80ed] text-white"
                    >
                      Action
                    </a>
                  </div>
                </div>

                {/* Share */}
                <div className="share my-7">
                  <span className="font-medium text-[18px] text-white">
                    Share
                  </span>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="btn btn-info btn-sm font-normal mx-1 text-white"
                    >
                      <FeatherIcon icons={"facebook"} width={18} />
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="btn btn-primary btn-sm font-normal mx-1 text-white"
                    >
                      <FeatherIcon icons={"twitter"} width={18} />
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="btn btn-accent btn-sm font-normal mx-1 text-white"
                    >
                      <FeatherIcon icons={"instagram"} width={18} />
                      Instagram
                    </a>
                  </div>
                </div>

                <hr className="border-gray-800" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments and Items*/}
      <section className="comment-items mb-5">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-12 lg:gap-10">
            <div className="col-span-12 md:col-span-10 lg:col-span-8">
              <h5 className="text-[22px] text-white">
                Komentar
                <div className="badge badge-primary ml-3">+99</div>
              </h5>
              <Comment />
            </div>
            <div className="col-span-12 md:col-span-12 lg:col-span-4 pt-6 lg:pt-0">
              <h5 className="text-[20px] text-white">Tonton Lainya</h5>
              <div className="grid grid-cols-8 gap-4 mt-7">
                {movies.map((val, key) => {
                  return (
                    <div className="col-span-4 md:col-span-2 lg:col-span-4">
                      <CardMovie options={val} key={key} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Movie */}
      <section className="movie-other">
        <div className="container mx-auto px-5">
          <h5>Other Movie</h5>
        </div>
      </section>
    </Layout>
  );
};

export default Play;
