import NavBar from "@/Components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "@/Components/Footer";

const Layout = () => {
  return (
    <div>
      <NavBar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
