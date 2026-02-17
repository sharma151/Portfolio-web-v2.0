import Home1 from './Partials/Home1';
import MediumArticles from '@/Components/MediumArticles';
import HomeAboutMe from '@/Components/HomeAboutMe';
import FeaturedProjects from '@/Components/FeaturedProjects';
import ContactUs from '@/Components/ContactUS';

const Home = () => {
  const projects = [
    {
      title: 'Social media platform',
      image:
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: null,
      live: null,
      info: 'A full-featured social media platform built with React, implementing user authentication, photo posting, user search, and profile management. Utilizes Context API, Redux, React Hooks, component-based architecture, API integration with interceptors, and best practices for scalable, professional-grade development.',
    },
    {
      title: 'InfoSnap',
      image:
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://github.com/sharma151/Businesscard-Generator',
      live: 'https://businesscard-generator.vercel.app/',
      info: 'A versatile generator hub built with React and styled using Sass/SCSS, allowing users to create barcodes, QR codes, and digital business cards by simply entering their data. Designed for ease of use with a clean, responsive interface.',
    },
    {
      title: 'Task Schedular',
      image:
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://github.com/sharma151/Task-schedular',
      live: 'https://tasksschedular.vercel.app/',
      info: 'A task scheduler application built with TypeScript, React, and Tailwind CSS. Allows users to create, edit, delete, and save tasks based on specific dates. Designed with a clean UI and structured for scalability and maintainability.',
    },
  ];
  return (
    <>
      <div className="">
        <Home1 />
        <HomeAboutMe />
        <FeaturedProjects heading="Featured projects" projects={projects} />
        <MediumArticles />
        <div id="contact-section">
          <ContactUs />
        </div>
      </div>
    </>
  );
};

export default Home;
