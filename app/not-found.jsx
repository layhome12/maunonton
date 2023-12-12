export const metadata = {
  title: "404 Not Found",
  description: "Halaman tidak ditemukan",
};


export default function NotFound() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
      <h1 className="text-[70px]">404</h1>
      <h2 className="text-[22px]">Not Found</h2>
      <p className="mt-2">Halaman yang anda cari tidak ditemukan</p>
    </div>
  );
}
