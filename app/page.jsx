import MoviesSlideshow from "@/components/slideshow/MoviesSlideshow";
import SelectCustom from "@/components/select/SelectCustom";
import "@/assets/css/page/home.css";
import TypeBar from "@/components/menu/Typebar";
import { slideShow, genres, menus, years, movies } from "./data";
import CardMovie from "@/components/card/CardMovie";
import CardsSlideshow from "@/components/slideshow/CardsSlideshow";
import ArtikelSlideshow from "@/components/slideshow/ArtikelSlideshow";
import Layout from "@/components/layout/Layout";
import ScrollTop from "@/components/floating/ScrollTop";
import Movies from "@/models/Movies";

const Home = () => {

  return (
    <Layout>
      <ScrollTop />

      {/* Slideshow */}
      <section className="slideshow-movies mb-5">
        <div className="container mx-auto py-5">
          <MoviesSlideshow slides={slideShow} />
        </div>
      </section>

      {/* Movie List */}
      <section className="movies-list mb-5 container mx-auto">
        <div className="sticky-header w-full bg-[#151f30] md:rounded-[8px] grid grid-cols-12 py-5 px-4 gap-3 items-center !z-10">
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

      {/* Rekomendasi List */}
      <section className="rekomendasi-list bg-base-200">
        <div className="container mx-auto py-6 my-5 md:px-8">
          <h1 className="text-[30px] md:text-[34px] text-white px-2 md:px-0">
            Rekomendasi
          </h1>
          <div className="mt-5 md:mt-7 mb-3">
            <CardsSlideshow slides={movies} />
          </div>
        </div>
      </section>

      {/* Artikel List */}
      <section className="artikel-list">
        <div className="container mx-auto py-6 my-5 md:px-8">
          <h1 className="text-[30px] md:text-[34px] text-white px-3 md:px-1">
            <span className="text-[#75b8ff]">Artikel</span> Film
          </h1>
          <p className="px-3 md:px-1">Daftar Artikel, Review dan Ulasan Film</p>
          <div className="mt-5 md:mt-8 mb-3">
            <ArtikelSlideshow slides={slideShow} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
