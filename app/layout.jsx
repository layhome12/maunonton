import "@/assets/css/globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/menu/Navbar";

export const metadata = {
  title: "Mau Nonton",
  description: "Tempat nonton asyik tanpa iklan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
