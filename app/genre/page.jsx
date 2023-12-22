import CardGenre from "@/components/card/CardGenre";
import Layout from "@/components/layout/Layout";
import { genres, movies } from "@/app/data";
import CardsSlideshow from "@/components/slideshow/CardsSlideshow";

const Genre = () => {
  return (
    <Layout>
      {/* Genre */}
      <section className="genre container mx-auto px-5 mt-8">
        <div className="title">
          <h1 className="text-[35px] text-white">Genre</h1>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Genre</li>
            </ul>
          </div>
        </div>
        <div className="list my-5">
          <div className="grid grid-cols-12 gap-5">
            {genres.map((val, key) => {
              return (
                <div
                  key={key}
                  className="col-span-6 md:col-span-4 lg:col-span-3"
                >
                  <CardGenre options={val} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rekomendasi List */}
      <section className="rekomendasi-list bg-base-200">
        <div className="container mx-auto py-6 mt-10 mb-1 md:px-8">
          <h1 className="text-[30px] md:text-[34px] text-white px-2 md:px-0">
            Rekomendasi
          </h1>
          <div className="mt-5 md:mt-7 mb-3">
            <CardsSlideshow slides={movies} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Genre;
