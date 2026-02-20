import NavBar from '@/components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer';

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
