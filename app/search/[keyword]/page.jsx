import Layout from "@/components/layout/Layout";
import SearchListView from "@/components/listview/SearchListView";
import { movies } from "@/app/data";
import CardsSlideshow from "@/components/slideshow/CardsSlideshow";

const Search = ({ params }) => {
  const { keyword } = params;

  return (
    <Layout>
      {/* Search */}
      <section className="search container mx-auto px-5 my-8">
        <div className="title">
          <h1 className="text-[35px] text-white">Pencarian</h1>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>Hasil Pencarian</li>
              <li>{keyword}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Search List */}
      <section className="search-list mb-10">
        <div className="container mx-auto px-5">
          <SearchListView list={movies} />
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

export default Search;
