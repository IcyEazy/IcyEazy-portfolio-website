import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0A192F]">
      {/* {Container} */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-teal-600 font-bold">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          ADIGUN Israel Collins
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Frontend and React Native Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a Frontend and React Native Developer developing myself in
          building and periodically designing phenomenal digital experiences.
          Currently, I'm focused on building responsive Frontend web
          applications using React/Nextjs, TypeScript, Redux and other important
          web development technologies and also Mobile Applications using React
          Native and other important technologies.
        </p>
        <div>
          <Link to="work" smooth={true} duration={1000}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-teal-600 hover:border-teal-600 hover:scale-95 brRad">
              View My Exercises
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
