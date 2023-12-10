import MoviesSlideshow from "@/components/slideshow/MoviesSlideshow";
import SelectCustom from "@/components/select/SelectCustom";
import "@/assets/css/page/home.css";
import TypeBar from "@/components/menu/Typebar";
import { slideShow, genres, menus, years, movies } from "./data";
import CardMovie from "@/components/card/CardMovie";

const Home = () => {
  return (
    <>
      {/* Slideshow */}
      <section className="slideshow-movies mb-5">
        <div className="container mx-auto py-5">
          <MoviesSlideshow slides={slideShow} />
        </div>
      </section>

      {/* Movie List */}
      <section className="movies-list mb-5 container mx-auto">
        <div className="sticky-header w-full bg-[#151f30] md:rounded-[8px] grid grid-cols-12 py-5 px-4 gap-3 items-center">
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <SelectCustom options={genres} placeholder="Semua Genre" />
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <SelectCustom options={years} placeholder="Semua Tahun" />
          </div>
          <div className="col-span-6 lg:col-span-8 hidden md:flex justify-end">
            <TypeBar options={menus} selected={1} />
          </div>
        </div>
        <div className="content-movie grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-8 px-2">
          {movies.map((val, key) => {
            return (
              <div key={key}>
                <CardMovie options={val} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
