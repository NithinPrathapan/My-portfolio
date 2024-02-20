import React from "react";
import "./App.css";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import profile from "./assets/myimg.jpeg";
import frontend from "./assets/frontend.png";
import backend from "./assets/backend.png";
import estate from "./assets/estate.png";
import grocerry from "./assets/grocerry.png";
import { useState } from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-[#fff] px-5  md:px-20 lg:px-40 dark:bg-gradient-to-t from-[#000] to-slate-900 ">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              developedby
            </h1>
            <ul className="flex items-center">
              {darkMode ? (
                <li>
                  <BsSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-white text-2xl"
                  />
                </li>
              ) : (
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                </li>
              )}

              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center w-full">
            <h2 className="text-4xl  min-w-full py-2 md:text-6xl  text-center text-teal-600 font-medium">
              Nithin Prathpan
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl font-semibold text-gray-800 dark:text-white">
              Mern stack Developer
            </h3>
            <p className="text-1 md:text-xl leading-8 text-gray-800  max-w-lg mx-auto dark:text-slate-400 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quo
              laudantium dolorem, deleniti iste omnis repellendus voluptates
              veniam, at libero beatae. Cupiditate facere totam nulla quaerat
              fugit officia reiciendis laudantium corrupti similique vero!
              Obcaecati.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-slate-400">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-600 rounded-full md:w-96 md:h-96   w-80 h-80 ">
            <img
              src={profile}
              alt="profile-image"
              className=" w-full h-full  object-cover rounded-full"
            />
          </div>
        </section>
        <section>
          <div className="max-w-xl text-center my-2 mx-auto">
            <h3 className="text-3xl dark:text-white font-semibold py-1">
              Services I offer
            </h3>
            <p className="text-lg leading-8 text-gray-800 dark:text-slate-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              harum consequatur distinctio molestias praesentium! Id culpa
            </p>
            <p className="text-lg leading-8 text-gray-800 dark:text-slate-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              harum consequatur distinctio molestias praesentium! Id culpa
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 max-w-lg mx-auto rounded-xl my-10 dark:text-slate-400 dark:bg-slate-900">
              <img
                src={frontend}
                className="w-[100px] h-[100px] mx-auto"
                alt="no-image"
              />
              <h3 className="text-xl font-medium pt-8 pb-2 dark:text-slate-200">
                Frontend Development
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis voluptatibus doloremque ea!
              </p>
              <h4 className="py-4 text-teal-600 font-semibold">
                Designing tools I use
              </h4>
              <p className="text-gray-800 dark:text-slate-400 py-1">Reactjs</p>
              <p className="text-gray-800 dark:text-slate-400 py-1">
                Tailwind CSS
              </p>
              <p className="text-gray-800 dark:text-slate-400 py-1">Canva</p>
              <p className="text-gray-800 dark:text-slate-400 py-1">
                React-Bootstrap
              </p>
            </div>

            <div className="text-center max-w-lg mx-auto dark:bg-slate-900 shadow-lg p-10 rounded-xl my-10">
              <img
                src={backend}
                className="w-[100px] h-[100px] mx-auto"
                alt="no-image"
              />
              <h3 className="text-xl font-medium pt-8 pb-2 dark:text-slate-200">
                Backend Development
              </h3>
              <p className="py-2 dark:text-slate-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis voluptatibus doloremque ea!
              </p>
              <h4 className="py-4 text-teal-600 font-semibold">
                Backend tools I use
              </h4>
              <p className="text-gray-800 py-1 dark:text-slate-400">Reactjs</p>
              <p className="text-gray-800 py-1 dark:text-slate-400">
                Tailwind CSS
              </p>
              <p className="text-gray-800 py-1 dark:text-slate-400">Canva</p>
              <p className="text-gray-800 py-1 dark:text-slate-400">
                React-Bootstrap
              </p>
            </div>
          </div>
        </section>

        {/*Skills me section */}
        <section className=" text-center my-2 mx-auto justify-center">
          <h3 className="text-3xl  dark:text-white font-semibold py-2 mb-2">
            Skills
          </h3>

          <div className="flex flex-wrap gap-10 py-2 mx-auto justify-center">
            <div className="flex flex-col flex-1 basis-1/3 max-w-[400px] min-w-[200px] rounded-md bg-[#f6f6f6] min-h-[150px] shadow-xl text-center  p-4 items-center justify-center gap-2 hover:scale-105 duration-500 cursor-none">
              <h1 className="text-teal-600 font-semibold  md:text-xl text-lg">
                Web Design
              </h1>
              <p className="text-xs md:text-lg w-[80%]">
                I love designs and it's the first step before creating any
                website as I can give layout to my imagination
              </p>
            </div>

            <div className="flex flex-col flex-1 basis-1/3 max-w-[400px] min-w-[200px] rounded-md bg-[#f6f6f6] min-h-[150px] shadow-xl text-center  p-4 items-center justify-center gap-2 hover:scale-105 duration-500 cursor-none">
              <h1 className="text-teal-600 font-semibold  md:text-xl text-lg">
                Web Design
              </h1>
              <p className="text-xs md:text-lg w-[80%]">
                I love designs and it's the first step before creating any
                website as I can give layout to my imagination
              </p>
            </div>

            <div className="flex flex-col flex-1 basis-1/3 max-w-[400px] min-w-[200px] rounded-md bg-[#f6f6f6] min-h-[150px] shadow-xl text-center  p-4 items-center justify-center gap-2 hover:scale-105 duration-500 cursor-none">
              <h1 className="text-teal-600 font-semibold  md:text-xl text-lg">
                Web Design
              </h1>
              <p className="text-xs md:text-lg w-[80%]">
                I love designs and it's the first step before creating any
                website as I can give layout to my imagination
              </p>
            </div>
          </div>
        </section>

        {/* tech stacks section */}
        <section>
          <div className="py-2 mt-6 max-w-full mx-auto">
            <h1 className="text-center uppercase font-semibold tracking-widest text-teal-500  text-[1.6rem]    ">
              TECH I'M FAMILIAR WITH
            </h1>
            <div className="border-teal-500  border w-20 mt-[1px]  mx-auto"></div>
            <div className="md:flex dark:text-slate-400 justify-around  py-10">
              <ul className="text-center mb-2 flex gap-2 flex-col ">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>React.js</li>
                <li>Node.js</li>
              </ul>
              <ul className="text-center mb-2 flex gap-2 flex-col ">
                <li>MongoDB</li>
                <li>GIT</li>
                <li>Java</li>
                <li>Canva</li>
                <li>SQL</li>
              </ul>
              <ul className="text-center mb-2 flex gap-2 flex-col">
                <li>Express</li>
                <li>Redux Toolkit</li>
                <li>Firebase</li>
                <li>Tailwind</li>
              </ul>
              <ul className="text-center mb-2 flex gap-2 flex-col ">
                <li>SASS</li>
                <li>Bootstrap</li>
                <li>C</li>
                <li>C++</li>
                <li>Photoshop</li>
              </ul>
            </div>
          </div>
        </section>
        {/* PROJECT SECTION */}

        <section>
          <div className="max-w-xl text-center my-2 mx-auto">
            <h3 className="text-3xl py-1 dark:text-white font-semibold ">
              Projects
            </h3>
            <p className="md:text-lg text-sm leading-8 text-gray-800 dark:text-slate-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              harum consequatur distinctio molestias praesentium! Id culpa Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Commodi ipsum,
              totam labore ullam eius quas!
            </p>
            <p className="md:text-lg text-sm leading-8 text-gray-800 dark:text-slate-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              harum consequatur distinctio molestias praesentium! Id culpa
            </p>
          </div>
          <div className="flex flex-wrap md:gap-10 gap-4 py-10 lg:flex lg:flex-wrap">
            <div className="image md:flex-1 md:basis-1/3 relative">
              <img
                className="rounded-lg object-cover w-full h-full block m-auto"
                src={grocerry}
                alt="project"
              />
              <div
                className="content top-0 left-0 absolute h-full w-full rounded-lg bg-[#000000c3]
               items-center flex gap-1 justify-center flex-col opacity-0  transition-all duration-500
                ease-in-out hover:opacity-100 hover:cursor-pointer text-center"
              >
                <h1 className="text-teal-500 md:text-2xl text-center   font-bold ">
                  Grocerry App
                </h1>
                <p className="text-slate-400 w-[80%] md:text-lg text-xs  ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  a autem suscipit ea!
                </p>
              </div>
            </div>
            <div className="image md:flex-1 md:basis-1/3 relative">
              <img
                className="rounded-lg object-cover w-full h-full block m-auto"
                src={estate}
                alt="project"
              />
              <div
                className="content top-0 left-0 absolute h-full w-full rounded-lg bg-[#000000c3]
               items-center flex gap-1 justify-center flex-col opacity-0  transition-all duration-500
                ease-in-out hover:opacity-100 hover:cursor-pointer text-center"
              >
                <h1 className="text-teal-500 md:text-2xl text-center   font-bold ">
                  Real Estate App
                </h1>
                <p className="text-slate-400 w-[80%] md:text-lg text-xs ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  a autem suscipit ea!
                </p>
              </div>
            </div>
            <div className="image md:flex-1 md:basis-1/3 relative">
              <img
                className="rounded-lg object-cover w-full h-full block m-auto"
                src={grocerry}
                alt="project"
              />
              <div
                className="content top-0 left-0 absolute h-full w-full rounded-lg bg-[#000000c3]
               items-center flex gap-1 justify-center flex-col opacity-0  transition-all duration-500
                ease-in-out hover:opacity-100 hover:cursor-pointer text-center"
              >
                <h1 className="text-teal-500 md:text-2xl text-center   font-bold ">
                  Grocerry App
                </h1>
                <p className="text-slate-400 w-[80%] md:text-lg text-xs  ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  a autem suscipit ea!
                </p>
              </div>
            </div>
            <div className="image md:flex-1 md:basis-1/3 relative">
              <img
                className="rounded-lg object-cover w-full h-full block m-auto"
                src={estate}
                alt="project"
              />
              <div
                className="content top-0 left-0 absolute h-full w-full rounded-lg bg-[#000000c3]
               items-center flex gap-1 justify-center flex-col opacity-0  transition-all duration-500
                ease-in-out hover:opacity-100 hover:cursor-pointer text-center"
              >
                <h1 className="text-teal-500 md:text-2xl text-center   font-bold ">
                  Real Estate App
                </h1>
                <p className="text-slate-400 w-[80%] md:text-lg text-xs ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  a autem suscipit ea!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
