import Layout from "@/components/layout/Layout";
import { movies, genres, years, menus } from "@/app/data";
import SelectCustom from "@/components/select/SelectCustom";
import TypeBar from "@/components/menu/Typebar";
import CardPlaylist from "@/components/card/CardPlaylist";

const Playlist = () => {
  return (
    <Layout>
      {/* Playlist */}
      <section className="playlist container mx-auto px-5 my-8">
        <div className="title">
          <h1 className="text-[35px] text-white">Playlist</h1>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Playlist</li>
            </ul>
          </div>
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
        <div className="content-movie grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-8 px-2">
          {movies.map((val, key) => {
            return (
              <div key={key}>
                <CardPlaylist options={val} />
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Playlist;
