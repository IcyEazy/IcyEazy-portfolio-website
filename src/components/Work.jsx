import React from "react";
import { works } from "../data/Works";

const Work = () => {
  return (
    <div name="work" className="w-full h-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="p-4">
          <p className="text-4xl font-bold inline border-b-2 border-teal-600">
            Exercises
          </p>
          <p className="py-6">Check out some of my recent exercises</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {works.map((work) => (
            <div
              key={work.id}
              style={{
                backgroundImage: `url(${work.backgroundImage})`,
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
            >
              {/* {Hover Effects} */}
              <div className="opacity-0 group-hover:opacity-100 duration-500">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {work.projectName} <br /> {work.technologiesUsed}
                </span>
                <div className="pt-8 text-center">
                  <a
                    href={work.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                      Code
                    </button>
                  </a>
                  <a
                    href={work.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
