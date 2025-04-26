import Home1 from "./Partials/Home1";
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
        <FeaturedProjects />
        <MediumArticles />
        <SocialLinks />
      </div>
    </>
  );
};

export default Home;
