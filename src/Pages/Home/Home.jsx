import EducationRoadmap from "@/Components/EducationRoadmap";
import Home1 from "./Partials/Home1";
import Techstack from "@/Components/Techstack";
import MediumArticles from "@/Components/MediumArticles";
import AboutMe from "@/Components/AboutMe";
import SocialLinks from "@/Components/SocialLinks";
import FeaturedProjects from "@/Components/FeaturedProjects";

const Home = () => {
  return (
    <>
      <div className="">
        <Home1 />
        <AboutMe />
        <Techstack />
        <FeaturedProjects/>
        <EducationRoadmap />
        <MediumArticles />
        <SocialLinks />
      </div>
    </>
  );
};

export default Home;
