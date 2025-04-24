import React from "react";
import homeLogo from "@/assets/home-main.svg";
import Type from "@/Components/Type";

function Home1() {
  return (
    <section className="relative w-full min-h-screen home-section" id="home">
      {/* <Particle /> */}
      <div className="w-full px-6 py-12 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-7/12 w-full text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 heading">
              Hi There!{" "}
              <span role="img" aria-labelledby="wave" className="inline-block">
                👋🏻
              </span>
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 heading-name">
              I'M
              <strong className="text-purple-500"> Saurav Sharma</strong>
            </h1>
            <div className="pt-6 pl-12">
              <Type />
            </div>
          </div>

          <div className="md:w-5/12 w-full mt-10 md:mt-0">
            <img
              src={homeLogo}
              alt="home"
              className="w-full max-h-[450px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home1;
