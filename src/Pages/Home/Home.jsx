import EducationRoadmap from "@/Components/EducationRoadmap";
import Home1 from "./Partials/Home1";
import Techstack from "@/Components/Techstack";
import MediumArticles from "@/Components/MediumArticles";

const Home = () => {
  return (
    <>
      <div className="">
        <Home1 />
        <Techstack />
        <EducationRoadmap />
        <MediumArticles />
      </div>
    </>
  );
};

export default Home;
