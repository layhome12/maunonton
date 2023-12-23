import Layout from "@/components/layout/Layout";
import { movies, genres, years, menus } from "@/app/data";
import CardMovie from "@/components/card/CardMovie";
import SelectCustom from "@/components/select/SelectCustom";
import TypeBar from "@/components/menu/Typebar";

const Populer = () => {
  return (
    <Layout>
      {/* Populer */}
      <section className="populer container mx-auto px-5 my-8">
        <div className="title">
          <h1 className="text-[35px] text-white">Populer</h1>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Populer</li>
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
    </Layout>
  );
};

export default Populer;
