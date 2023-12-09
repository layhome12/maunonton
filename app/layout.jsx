import "@/assets/css/globals.css";
import Footer from "@/components/footer/Footer";
import Sidebar from "@/components/sidebar/Sidebar";

export const metadata = {
  title: "Mau Nonton",
  description: "Tempat nonton asyik tanpa iklan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
