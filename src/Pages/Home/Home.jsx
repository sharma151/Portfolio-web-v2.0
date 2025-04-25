import EducationRoadmap from "@/Components/EducationRoadmap";
import Home1 from "./Partials/Home1";
import Techstack from "@/Components/Techstack";
import MediumArticles from "@/Components/MediumArticles";
import AboutMe from "@/Components/AboutMe";

const Home = () => {
  return (
    <>
      <div className="">
        <Home1 />
        <AboutMe />
        <Techstack />
        <EducationRoadmap />
        <MediumArticles />
      </div>
    </>
  );
};

export default Home;
