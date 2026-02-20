import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/Layout/Layout';
import Home from '@/Pages/Home/Home';
import About from '@/Pages/About/About';
import Projects from '@/Pages/Projects/Projects';
import ResumePage from '@/Pages/Resume/ResumePage';
import PageNotFound from '@/components/PageNotFound';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="projects" element={<Projects />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
