import NavBar from '@/Components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '@/Components/Footer';

const Layout = () => {
  return (
    <div className="bg-[#f1ecec] text-[#1f2937] dark:bg-[#0e0a18] dark:text-[#d1d5db]">
      <NavBar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
