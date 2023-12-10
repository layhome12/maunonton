import MoviesSlideshow from "@/components/slideshow/MoviesSlideshow";

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

  return (
    <>
      <section className="slideshow-movies mb-5">
        <MoviesSlideshow slides={slideShow} />
      </section>
    </>
  );
};

export default Home;
