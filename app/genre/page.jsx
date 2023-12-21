import Layout from "@/components/layout/Layout";

const Genre = () => {
  return (
    <Layout>
      {/* Genre */}
      <section className="genre container mx-auto px-5 mt-10">
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
            <div className="col-span-6 lg:col-span-3">
              <div className="card shadow-xl image-full">
                <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                </div>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-3">
              <div className="card shadow-xl image-full">
                <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rekomendasi Film */}
      <section className="recomendation container mx-auto px-5 mt-5 mb-10">
        <div>Rekomendasi Film</div>
      </section>
    </Layout>
  );
};

export default Genre;
