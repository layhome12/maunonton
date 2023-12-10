import MoviesSlideshow from "@/components/slideshow/MoviesSlideshow";
import SelectCustom from "@/components/select/SelectCustom";
import "@/assets/css/page/home.css";
import TypeBar from "@/components/menu/Typebar";

const Home = () => {
  const slideShow = [
    {
      id: 1,
      name: "Transporter 1",
      genre: "Action",
      year: 2000,
      image: "slideshow/1.png",
    },
    {
      id: 2,
      name: "Transporter 2",
      genre: "Action",
      year: 2000,
      image: "slideshow/2.jpg",
    },
    {
      id: 3,
      name: "Transporter 3",
      genre: "Action",
      year: 2000,
      image: "slideshow/3.jpeg",
    },
    {
      id: 4,
      name: "Rokudenashi Majutsu Koushi to Akashic Records",
      genre: "Anime",
      year: 2000,
      image: "slideshow/4.jpg",
    },
  ];

  const genres = [
    { value: 1, label: "Action" },
    { value: 2, label: "Anime" },
    { value: 3, label: "Horror" },
  ];

  const years = [
    { value: 2023, label: "2023" },
    { value: 2022, label: "2022" },
    { value: 2021, label: "2021" },
  ];

  const menus = [
    { id: 1, text: "Populer" },
    { id: 2, text: "Terbaru" },
    { id: 3, text: "Terbaik" },
  ];

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
        <div className="content-movie">
          <div className="h-[50px] w-full bg-[#151f30] my-2"></div>
          <div className="h-[50px] w-full bg-[#151f30] my-2"></div>
          <div className="h-[50px] w-full bg-[#151f30] my-2"></div>
          <div className="h-[50px] w-full bg-[#151f30] my-2"></div>
          <div className="h-[50px] w-full bg-[#151f30] my-2"></div>
          <div className="h-[50px] w-full bg-[#151f30] my-2"></div>
          <div className="h-[50px] w-full bg-[#151f30] my-2"></div>
          <div className="h-[50px] w-full bg-[#151f30] my-2"></div>
          <div className="h-[50px] w-full bg-[#151f30] my-2"></div>
          <div className="h-[50px] w-full bg-[#151f30] my-2"></div>
          <div className="h-[50px] w-full bg-[#151f30] my-2"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
