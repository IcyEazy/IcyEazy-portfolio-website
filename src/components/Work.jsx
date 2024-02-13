import React from "react";
import bookmark from "../assets/projects/Bookmark.png";
import urlShortening from "../assets/projects/URLShortening.png";
import calculator from "../assets/projects/Calculator.png";
import crowdfundingPages from "../assets/projects/CrowdFunding.png";
import ecommercePage from "../assets/projects/EcommercePage.png";
import interactivePricingPage from "../assets/projects/InteractivePricing.png";
import IpTracker from "../assets/projects/IPTracker.png";
import launchCountdown from "../assets/projects/LaunchCountdown.png";
import mediaDashboard from "../assets/projects/MediaDashboard.png";
import multiformPages from "../assets/projects/Multiform.png";
import quizApp from "../assets/projects/QuizApp.png";
import recipeApp from "../assets/projects/RecipeApp.png";
import roomHomepage from "../assets/projects/RoomHomepage.png";
import tictactoe from "../assets/projects/Tictactoe.png";
import typingSpeed from "../assets/projects/TypingSpeed.png";
import todoApp from "../assets/projects/TodoApp.png";
import storeApp from "../assets/projects/StoreApp.png";
import reactTypeScriptTicTacToe from "../assets/projects/ReactTypeScriptTicTacToe.png";
import reactTypeScriptHangman from "../assets/projects/Hangman.png";
import reactTypeScriptSelect from "../assets/projects/Select.png";

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

        {/* {Container} */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* {Grid Item} */}
          <div
            style={{
              backgroundImage: `url(${bookmark})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* {Hover Effects} */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Bookmark Landing Page <br /> [HTML/CSS/JS]
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IcyEazy/IcyEazy-bookmark-landing-page.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Code
                  </button>
                </a>
                <a href="https://icyeazy.github.io/IcyEazy-bookmark-landing-page/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${urlShortening})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* {Hover Effects} */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                URL Shortening API <br />
                [HTML/CSS/JS/API]
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IcyEazy/IcyEazy-url-shortening-api.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Code
                  </button>
                </a>
                <a href="https://icyeazy.github.io/IcyEazy-url-shortening-api/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* {Grid Item} */}
          <div
            style={{ backgroundImage: `url(${roomHomepage})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* {Hover Effects} */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Room Homepage <br /> [HTML/CSS/JS]
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IcyEazy/IcyEazy-room-homepage.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Code
                  </button>
                </a>
                <a href="https://icyeazy.github.io/IcyEazy-room-homepage/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${IpTracker})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* {Hover Effects} */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                IP Address Tracker <br />
                [HTML/CSS/JS/API]
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IcyEazy/IcyEazy-ip-address-tracker.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Code
                  </button>
                </a>
                <a href="https://icyeazy.github.io/IcyEazy-ip-address-tracker/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* {Grid Item} */}
          <div
            style={{ backgroundImage: `url(${launchCountdown})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* {Hover Effects} */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Launch Countdown Timer <br />
                [HTML/CSS/JS]
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IcyEazy/IcyEazy-launch-countdown-timer.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Code
                  </button>
                </a>
                <a href="https://icyeazy.github.io/IcyEazy-launch-countdown-timer/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${calculator})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* {Hover Effects} */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Calculator <br />
                [HTML/CSS/JS]
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IcyEazy/IcyEazy-calculator-main-app.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Code
                  </button>
                </a>
                <a href="https://icyeazy.github.io/IcyEazy-calculator-main-app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${todoApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* {Hover Effects} */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Todo App <br />
                [HTML/CSS/JS]
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IcyEazy/IcyEazy-todo-app.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Code
                  </button>
                </a>
                <a href="https://icyeazy.github.io/IcyEazy-todo-app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ecommercePage})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* {Hover Effects} */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                E-commerce Page <br />
                [HTML/CSS/JS]
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IcyEazy/IcyEazy-e-commerce-product-page.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Code
                  </button>
                </a>
                <a href="https://icyeazy.github.io/IcyEazy-e-commerce-product-page/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${multiformPages})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* {Hover Effects} */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Multi-form Pages <br />
                [HTML/CSS/JS]
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IcyEazy/IcyEazy-multi-step-form.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Code
                  </button>
                </a>
                <a href="https://icyeazy.github.io/IcyEazy-multi-step-form/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${typingSpeed})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* {Hover Effects} */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Typing Speed Test <br />
                [HTML/CSS/JS]
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IcyEazy/IcyEazy-Typing-speed-test.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Code
                  </button>
                </a>
                <a href="https://icyeazy.github.io/IcyEazy-Typing-speed-test/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${crowdfundingPages})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* {Hover Effects} */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Crowd Funding Page <br />
                [HTML/CSS/JS]
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IcyEazy/IcyEazy-crowdfunding-product-page.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Code
                  </button>
                </a>
                <a href="https://icyeazy.github.io/IcyEazy-crowdfunding-product-page/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${interactivePricingPage})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* {Hover Effects} */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Interactive Pricing Component <br />
                [HTML/CSS/JS]
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IcyEazy/IcyEazy-interactive-pricing-component.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Code
                  </button>
                </a>
                <a href="https://icyeazy.github.io/IcyEazy-interactive-pricing-component/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${mediaDashboard})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* {Hover Effects} */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Social Media Dashboard With Theme Change <br />
                [HTML/CSS/JS]
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IcyEazy/IcyEazy-social-media-dashboard-with-theme-switcher.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Code
                  </button>
                </a>
                <a href="https://icyeazy.github.io/IcyEazy-social-media-dashboard-with-theme-switcher/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${tictactoe})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* {Hover Effects} */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Tic-Tac-Toe <br />
                [React JS]
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IcyEazy/IcyEazy-tictactoe.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Code
                  </button>
                </a>
                <a href="https://icyeazy.github.io/IcyEazy-tictactoe/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${quizApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* {Hover Effects} */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Quiz App <br />
                [React JS]
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IcyEazy/IcyEazy-quiz_app.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Code
                  </button>
                </a>
                <a href="https://icyeazy.github.io/IcyEazy-quiz_app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${recipeApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* {Hover Effects} */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Recipe App <br />
                [React JS]
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IcyEazy/IcyEazy-recipe-app.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Code
                  </button>
                </a>
                <a href="https://icyeazy.github.io/IcyEazy-recipe-app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${storeApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* {Hover Effects} */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Store App <br />
                [Vite + ReactJs, TypeScript, Bootstrap]
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IcyEazy/IcyEazy-react_typescript_store-app.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Code
                  </button>
                </a>
                <a href="https://icyeazy.github.io/IcyEazy-react_typescript_store-app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${reactTypeScriptTicTacToe})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* {Hover Effects} */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                ReactTypeScript TicTacToe <br />
                [NextJs + ReactJs, TypeScript]
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IcyEazy/IcEazy-react_typescript_tic-tac-toe.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Code
                  </button>
                </a>
                <a href="https://ic-eazy-react-typescript-tic-tac-toe.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${reactTypeScriptHangman})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* {Hover Effects} */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                ReactTypeScript Hangman <br />
                [Vite + ReactJs, TypeScript]
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IcyEazy/IcEazy-react_ts_hangman.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Code
                  </button>
                </a>
                <a href="https://icyeazy.github.io/IcEazy-react_ts_hangman/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${reactTypeScriptSelect})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* {Hover Effects} */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                React-TS Select Options <br />
                [Vite + ReactJs, TypeScript]
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/IcyEazy/IcyEazy-react_ts-select.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Code
                  </button>
                </a>
                <a href="https://icyeazy.github.io/IcyEazy-react_ts-select/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-teal-600 hover:text-white">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
