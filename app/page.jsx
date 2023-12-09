import MoviesSlideshow from "@/components/slideshow/MoviesSlideshow";

const Home = () => {
  const slideShow = [
    {
      name: "Transporter 1",
      genre: "Action",
      year: 2000,
      image: "slideshow/1.png",
    },
    {
      name: "Transporter 2",
      genre: "Action",
      year: 2000,
      image: "slideshow/2.jpg",
    },
    {
      name: "Transporter 3",
      genre: "Action",
      year: 2000,
      image: "slideshow/3.jpeg",
    },
    {
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
