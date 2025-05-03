import Home1 from "./Partials/Home1";
import MediumArticles from "@/Components/MediumArticles";
import HomeAboutMe from "@/Components/HomeAboutMe";
import SocialLinks from "@/Components/SocialLinks";
import FeaturedProjects from "@/Components/FeaturedProjects";
import ContactUs from "@/Components/ContactUS";

const Home = () => {
  const projects = [
    {
      title: "Social media Website",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/your-username/portfolio",
      live: "https://yourportfolio.live",
      info: "This is my personal portfolio website where I showcase my projects and skills.",
    },
    {
      title: "Business card Generator",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/your-username/blog-app",
      live: "https://yourblogapp.live",
      info: "A blogging platform where users can create, read, and comment on posts.",
    },
    {
      title: "Todolist App",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/your-username/blog-app",
      live: "https://yourblogapp.live",
      info: "A blogging platform where users can create, read, and comment on posts.",
    },
  ];
  return (
    <>
      <div className="">
        <Home1 />
        <HomeAboutMe />
        <FeaturedProjects heading="Featured projects" projects={projects} />
        <MediumArticles />
        <ContactUs />
      </div>
    </>
  );
};

export default Home;
