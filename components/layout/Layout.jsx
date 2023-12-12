import Footer from "@/components/footer/Footer";
import Navbar from "@/components/menu/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
