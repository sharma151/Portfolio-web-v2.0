import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/Layout/Layout";
import Home from "@/Pages/Home/Home";
import About from "@/Pages/About/About";
import Projects from "@/Pages/Projects/Projects";
import ResumePage from "@/Pages/Resume/ResumePage";
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
      </Routes>
    </Router>
  );
};

export default AppRoutes;
