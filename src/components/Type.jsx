import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend Developer ",
          "Freelancer",
          "Software Engineer I",
          // "Hiking / Trekking Enthusiast",
          // "Crafting Scalable & Responsive Interfaces",
          // "Turning coffee into commits ☕️💾",
          // "MERN Stack Developer",
          // "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
