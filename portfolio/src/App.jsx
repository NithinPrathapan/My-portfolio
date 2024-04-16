import React from "react";
import "./App.css";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import profile from "./assets/profile.jpeg";
import frontend from "./assets/frontend.png";
import backend from "./assets/backend.png";
import estate from "./assets/estate.png";
import grocerry from "./assets/grocerry.png";
import nike from "./assets/nike.png";
import { useState } from "react";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:nithinprathapan32567@gmail.com?subject=Message from  portfolio form&body=${message}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-[#fff] px-5  md:px-20 lg:px-40 dark:bg-gradient-to-t from-[#000] to-slate-900 ">
        <section className="mb-8">
          <nav className="py-10 mb-12 flex w-full justify-between">
            <h1 className="text-xl  dark:text-white text-teal-500 font-poppins">
              Welcome
            </h1>
            <ul className="font-poppins flex items-center">
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
                  className="bg-gradient-to-r font-poppins from-cyan-500  to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/12alI_iGd_qdrirs83b6ts4mvJzOffJjL/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className=" font-dancing text-xl tracking-widest min-w-full text-center text-teal-500 dark:text-white">
              Hi I'm
            </h2>
            <h2 className="text-4xl font-dancing tracking-widest  min-w-full py-2 md:text-6xl  drop-shadow-xl text-center text-teal-500 font-medium">
              Nithin Prathpan
            </h2>
            <h3 className="font-poppins uppercase text-2xl  py-2 md:text-3xl font-semibold text-slate-600 dark:text-white">
              Mern stack Developer
            </h3>
            <p className="font-poppins  text-1 md:text-lg text-sm leading-8 text-gray-800  py-2 mx-auto dark:text-slate-300 ">
              I'm a full-stack developer specialised in frontend and backend
              development for scalable web apps.I have made a variety of Mern
              Stack Applications. Want to know how I may help your project?
              Check out my projects from my GitHub Profile
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-4 text-gray-600 dark:text-slate-300">
            <a
              href="https://www.instagram.com/_nithin_prathapan_/?igsh=Znh5bHpiaXFidDR0"
              target="_blank"
            >
              <AiFillInstagram className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/nithin-prathapan-67a827240/"
              target="_blank"
            >
              <AiFillLinkedin className="cursor-pointer" />
            </a>
            <a href="https://github.com/NithinPrathapan" target="_blank">
              <AiFillGithub className="cursor-pointer" />{" "}
            </a>
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
          <div className="max-w-4xl text-center  my-2 mx-auto">
            <h3 className="font-poppins  text-teal-500 uppercase text-3xl dark:text-white font-semibold py-1">
              Services I offer
            </h3>
            <p className="font-poppins text-sm mx-auto  py-1 md:text-lg leading-8 text-slate-600 dark:text-slate-300">
              Custom Web Development: From concept to deployment, I develop
              custom web applications that are tailored to your unique
              requirements, ensuring scalability, security, and performance.
            </p>
            <p className="font-poppins text-sm mx-auto  py-1 md:text-lg leading-8 text-slate-600 dark:text-slate-300">
              Full-Stack Development: I specialize in full-stack development,
              offering end-to-end solutions that encompass both the frontend and
              backend aspects of web development.
            </p>
            <p className="font-poppins text-sm mx-auto  py-1 md:text-lg leading-8 text-slate-600 dark:text-slate-300">
              API Development & Integration: I design and develop robust RESTful
              APIs to facilitate seamless communication between different
              components of your application, as well as third-party
              integrations.
            </p>
          </div>
          <div className="md:flex  gap-4">
            <div className="text-center flex-1 shadow-lg p-10 max-w-lg mx-auto rounded-xl my-10 dark:text-slate-300 dark:bg-slate-900">
              <img
                src={frontend}
                className="w-[100px] h-[100px] mx-auto"
                alt="no-image"
              />
              <h3 className="font-poppins text-teal-500 uppercase text-xl font-medium pt-8 pb-2 dark:text-slate-200">
                Frontend Development
              </h3>
              <p className="font-poppins py-2">
                With React.js, a powerful JavaScript library for building user
                interfaces deliver frontend solutions that are both efficient
                and elegant.
              </p>
              <h4 className="py-4 text-teal-600 font-semibold">
                Designing tools I use
              </h4>
              <p className="font-poppins text-gray-800 dark:text-slate-300 py-1">
                Reactjs
              </p>
              <p className="font-poppins text-gray-800 dark:text-slate-300 py-1">
                Tailwind CSS
              </p>
              <p className="font-poppins text-gray-800 dark:text-slate-300 py-1">
                Redux-Toolkit
              </p>
              <p className="font-poppins text-gray-800 dark:text-slate-300 py-1">
                React-Bootstrap
              </p>
            </div>

            <div className="text-center flex-1 max-w-lg mx-auto dark:bg-slate-900 shadow-lg p-10 rounded-xl my-10">
              <img
                src={backend}
                className="w-[100px] h-[100px] mx-auto"
                alt="no-image"
              />
              <h3 className="font-poppins text-teal-500 uppercase text-xl font-medium pt-8 pb-2 dark:text-slate-200">
                Backend Development
              </h3>
              <p className="font-poppins py-2 dark:text-slate-300">
                With Node.js and Express.js, deliver backend solutions that are
                both robust and efficient. With MongoDB, a leading NoSQL
                database solution. MongoDB's document-oriented nature and
                flexible schema make it an ideal choice for storing and managing
                data in dynamic web applications.
              </p>
              <h4 className="py-4 text-teal-600 font-semibold">
                Backend tools I use
              </h4>
              <p className="font-poppins text-gray-800 py-1 dark:text-slate-300">
                Node.js
              </p>
              <p className="font-poppins text-gray-800 py-1 dark:text-slate-300">
                Express.js
              </p>
              <p className="font-poppins text-gray-800 py-1 dark:text-slate-300">
                MongoDB
              </p>
            </div>
          </div>
        </section>

        {/*Skills me section */}
        <section className=" text-center  my-2 mx-auto justify-center">
          <h3 className="font-poppins text-teal-500 uppercase text-3xl  dark:text-white font-semibold py-2 mb-2">
            Skills
          </h3>

          <div className="flex flex-wrap gap-10 py-2 mx-auto justify-center max-w-4xl">
            <div className="flex dark:bg-slate-800  flex-col flex-1 basis-1/3 max-w-[400px] min-w-[200px] rounded-md bg-[#f6f6f6] min-h-[150px] shadow-xl text-center  p-4  justify-center gap-2 hover:scale-105 duration-500 cursor-none">
              <h1 className="text-teal-600 dark:text-teal-500 font-semibold  md:text-xl text-lg">
                Web Design
              </h1>
              <p className="font-poppins text-xs md:text-lg dark:text-slate-300">
                I love designs and it's the first step before creating any
                website as I can give layout to my imagination.
              </p>
            </div>

            <div className="flex dark:bg-slate-800  flex-col flex-1 basis-1/3 max-w-[400px] min-w-[200px] rounded-md bg-[#f6f6f6] min-h-[150px] shadow-xl text-center  p-4 items-center justify-center gap-2 hover:scale-105 duration-500 cursor-none">
              <h1 className="text-teal-600 dark:text-teal-500 font-semibold  md:text-xl text-lg">
                Web Development
              </h1>
              <p className="font-poppins text-xs md:text-lg dark:text-slate-300">
                I am a self taught Full Stack Web Developer (MERN)
              </p>
            </div>

            <div className="flex dark:bg-slate-800  flex-col flex-1 basis-1/3 max-w-[400px] min-w-[200px] rounded-md bg-[#f6f6f6] min-h-[150px] shadow-xl text-center  p-4 items-center justify-center gap-2 hover:scale-105 duration-500 cursor-none">
              <h1 className="text-teal-600 dark:text-teal-500 font-semibold  md:text-xl text-lg">
                Problem Solving
              </h1>
              <p className="font-poppins text-xs md:text-lg dark:text-slate-300">
                I love solving problems whether programming problems or real
                life problems.
              </p>
            </div>
          </div>
        </section>

        {/* tech stacks section */}
        <section>
          <div className="py-2 mt-6 max-w-4xl mx-auto">
            <h1 className="text-center font-poppins uppercase font-semibold tracking-widest text-teal-500  md:text-[1.6rem]    ">
              TECH I'M FAMILIAR WITH
            </h1>
            <div className="border-teal-500  border w-20 mt-[1px]  mx-auto"></div>
            <div className="md:flex dark:text-slate-300 justify-around  py-10">
              <ul className="font-poppins text-center mb-2 flex gap-2 flex-col md:w-[25%] ">
                <li className="hover:scale-105 hover:font-bold cursor-context-menu duration-300">
                  HTML5
                </li>
                <li className="hover:scale-105 hover:font-bold cursor-context-menu duration-300">
                  CSS3
                </li>
                <li className="hover:scale-105 hover:font-bold cursor-context-menu duration-300">
                  Javascript
                </li>
                <li className="hover:scale-105 hover:font-bold cursor-context-menu duration-300">
                  React.js
                </li>
                <li className="hover:scale-105 hover:font-bold cursor-context-menu duration-300">
                  Node.js
                </li>
              </ul>
              <ul className="font-poppins text-center mb-2 flex gap-2 flex-col md:w-[25%] ">
                <li className="hover:scale-105 hover:font-bold cursor-context-menu duration-300">
                  MongoDB
                </li>
                <li className="hover:scale-105 hover:font-bold cursor-context-menu duration-300">
                  GIT
                </li>
                <li className="hover:scale-105 hover:font-bold cursor-context-menu duration-300">
                  Java
                </li>
                <li className="hover:scale-105 hover:font-bold cursor-context-menu duration-300">
                  Canva
                </li>
                <li className="hover:scale-105 hover:font-bold cursor-context-menu duration-300">
                  SQL
                </li>
              </ul>
              <ul className="font-poppins text-center mb-2 flex gap-2 flex-col md:w-[25%]">
                <li className="hover:scale-105 hover:font-bold cursor-context-menu duration-300">
                  Express
                </li>
                <li className="hover:scale-105 hover:font-bold cursor-context-menu duration-300">
                  Redux Toolkit
                </li>
                <li className="hover:scale-105 hover:font-bold cursor-context-menu duration-300">
                  Firebase
                </li>
                <li className="hover:scale-105 hover:font-bold cursor-context-menu duration-300">
                  Tailwind
                </li>
              </ul>
              <ul className="font-poppins text-center mb-2 flex gap-2 flex-col md:w-[25%] ">
                <li className="hover:scale-105 hover:font-bold cursor-context-menu duration-300">
                  SASS
                </li>
                <li className="hover:scale-105 hover:font-bold cursor-context-menu duration-300">
                  Bootstrap
                </li>
                <li className="hover:scale-105 hover:font-bold cursor-context-menu duration-300">
                  C
                </li>
                <li className="hover:scale-105 hover:font-bold cursor-context-menu duration-300">
                  C++
                </li>
                <li className="hover:scale-105 hover:font-bold cursor-context-menu duration-300">
                  Photoshop
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h1 className="text-3xl text-center text-teal-500 uppercase font-poppins dark:text-white font-semibold py-2 mb-2">
            Education
          </h1>
          <div className="py-4 mt-6 max-w-4xl flex flex-col font-poppins  mx-auto bg-[#eae8e4] dark:bg-gray-800">
            <div className="flex flex-col md:gap-2 gap-1 pt-4 text-center">
              <h1 className="md:text-[1.7rem] text-lg font-semibold dark:text-slate-300 ">
                Master Of Business Administration
              </h1>
              <p className="font-poppins text-[#646464] md:text-[0.9rem] text-xs md:tracking-widest tracking-wide">
                Mangalam College of Management Studies
              </p>
              <p className="font-poppins text-[#646464] md:text-[0.9rem] text-xs md:tracking-widest tracking-wide">
                APJ Abdul Kalam Technological University
              </p>
              <p className="font-poppins text-[#646464] md:text-[0.9rem] text-xs md:tracking-widest tracking-wide">
                CGPA - 8.7
              </p>
              <p className="font-poppins text-[#646464] md:text-[0.9rem] text-xs md:tracking-widest tracking-wide">
                2019-2021
              </p>
            </div>
            <div className="flex flex-col md:gap-2 my-4 gap-1 text-center">
              <h1 className="md:text-[1.7rem] text-lg font-semibold dark:text-slate-300">
                Bachelor Of Computer Applications
              </h1>
              <p className="font-poppins text-[#646464] md:text-[0.9rem] text-xs md:tracking-widest tracking-wide">
                Mar Augusthinose College Ramapuram
              </p>
              <p className="font-poppins text-[#646464] md:text-[0.9rem] text-xs md:tracking-widest tracking-wide">
                MG University
              </p>
              <p className="font-poppins text-[#646464] md:text-[0.9rem] text-xs md:tracking-widest tracking-wide">
                CGPA - 6.9
              </p>
              <p className="font-poppins text-[#646464] md:text-[0.9rem] text-xs md:tracking-widest tracking-wide">
                2016-2019
              </p>
            </div>
            <div className="flex flex-col md:gap-2 my-4 gap-1 text-center">
              <h1 className="md:text-[1.7rem] text-lg font-semibold dark:text-slate-300">
                Higher Secondary Education
              </h1>
              <p className="font-poppins text-[#646464] md:text-[0.9rem] text-xs md:tracking-widest tracking-wide">
                Govt. H.S.S Panamattam
              </p>
              <p className="font-poppins text-[#646464] md:text-[0.9rem] text-xs md:tracking-widest tracking-wide">
                80 %
              </p>
              <p className="font-poppins text-[#646464] md:text-[0.9rem] text-xs md:tracking-widest tracking-wide">
                2014-2016
              </p>
            </div>
            <div className="flex flex-col md:gap-2 my-4 gap-1 text-center">
              <h1 className="md:text-[1.7rem] text-lg font-semibold dark:text-slate-300">
                Higher School Education
              </h1>
              <p className="font-poppins text-[#646464] md:text-[0.9rem] text-xs md:tracking-widest tracking-wide">
                Govt. H.S.S Panamattam
              </p>
              <p className="font-poppins text-[#646464] md:text-[0.9rem] text-xs md:tracking-widest tracking-wide">
                99 %
              </p>
              <p className="font-poppins text-[#646464] md:text-[0.9rem] text-xs md:tracking-widest tracking-wide">
                2014-2016
              </p>
            </div>
          </div>
        </section>
        {/* PROJECT SECTION */}

        <section>
          <div className="max-w-4xl text-center my-2 mx-auto">
            <h3 className="font-poppins text-teal-500 uppercase text-3xl py-1 dark:text-white font-semibold ">
              Projects
            </h3>
          </div>
          <div className="flex flex-wrap md:gap-12  gap-4 font-poppins py-10 md:flex md:flex-wrap">
            <div className="   max-w-[400px]   border-none flex flex-col mx-auto justify-center items-center border  rounded-lg shadow ">
              <img
                className="rounded-t-lg hover:scale-105 object-cover w-full  transition ease-in-out  duration-500"
                src={grocerry}
                alt="grocerry"
              />

              <div className="md:p-5 p-2">
                <h5 className="mb-2 text-center  md:text-2xl text-lg font-bold tracking-tight text-slate-900 dark:text-slate-200">
                  Grocerry App
                </h5>

                <p className="mb-3 text-center font-normal text-slate-900 dark:text-slate-200 ">
                  It has been developed using React.js and designed using CSS.
                  It includes modern and responsive design.
                </p>
                <div className="flex gap-2 flex-wrap py-2 justify-center items-center">
                  <h1 className="text-slate-800 font-semibold md:text-sm text-xs bg-white  cursor-context-menu  p-1 rounded-lg">
                    React.js
                  </h1>
                  <h1 className="text-slate-800 font-semibold md:text-sm text-xs bg-white  cursor-context-menu  p-1 rounded-lg">
                    CSS
                  </h1>
                  <h1 className="text-slate-800 font-semibold md:text-sm text-xs bg-white  cursor-context-menu  p-1 rounded-lg">
                    Javascript
                  </h1>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <a href="https://grocerry.vercel.app" target="_blank">
                    <button className=" mx-auto  justify-center gap-2 md:text-lg items-center  text-sm font-medium text-center text-black bg-slate-300  md:px-4 px-2 md:py-3 py-2 rounded-lg hover:bg-slate-400 duration-200 flex ">
                      View Website
                      <FaEarthAmericas />
                    </button>
                  </a>
                  <a
                    href="https://github.com/NithinPrathapan/grocerry"
                    target="_blank"
                  >
                    <button className=" mx-auto gap-2  justify-center md:text-lg  items-center  text-sm font-medium text-center text-black bg-slate-300  md:px-4 px-2 md:py-3 py-2 rounded-lg hover:bg-slate-400 duration-200 flex ">
                      Source Code
                      <AiFillGithub className="w-5 h-5  " />
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="   max-w-[400px]   border-none flex flex-col mx-auto justify-center items-center border  rounded-lg shadow ">
              <img
                className="rounded-t-lg hover:scale-105 object-cover w-full  transition ease-in-out  duration-500"
                src={estate}
                alt="estate"
              />

              <div className="p-5">
                <h5 className="mb-2 text-center md:text-2xl text-lg font-bold tracking-tight text-slate-900 dark:text-slate-200 ">
                  Real Estate Application
                </h5>

                <p className="mb-3 text-center md:text-lg text-sm  text-slate-900 dark:text-slate-200 ">
                  It has been developed using MERN Stack and designed using
                  Tailwind CSS. It includes modern and responsive design.
                </p>
                <div className="flex gap-2 flex-wrap py-2 justify-center items-center">
                  <h1 className="text-slate-800 font-semibold  cursor-context-menu md:text-sm text-xs  bg-white  p-1 rounded-lg">
                    React.js
                  </h1>
                  <h1 className="text-slate-800 font-semibold  cursor-context-menu md:text-sm text-xs bg-white  p-1 rounded-lg">
                    Node.js
                  </h1>
                  <h1 className="text-slate-800 font-semibold  cursor-context-menu md:text-sm text-xs bg-white  p-1 rounded-lg">
                    Express.js
                  </h1>
                  <h1 className="text-slate-800 font-semibold  cursor-context-menu md:text-sm text-xs bg-white  p-1 rounded-lg">
                    MongoDB
                  </h1>
                  <h1 className="text-slate-800 font-semibold  cursor-context-menu md:text-sm text-xs bg-white  p-1 rounded-lg">
                    JWT
                  </h1>
                  <h1 className="text-slate-800 font-semibold  cursor-context-menu md:text-sm text-xs bg-white  p-1 rounded-lg">
                    Redux Toolkit
                  </h1>
                  <h1 className="text-slate-800 font-semibold  cursor-context-menu md:text-sm text-xs bg-white  p-1 rounded-lg">
                    Tailwind
                  </h1>
                  <h1 className="text-slate-800 font-semibold  cursor-context-menu md:text-sm text-xs bg-white  p-1 rounded-lg">
                    Firebase
                  </h1>
                </div>
                <div className="flex items-center justify-center gap-2 ">
                  <a
                    href="https://mern-estate-c7gd.onrender.com"
                    target="_blank"
                  >
                    <button className=" mx-auto  justify-center md:gap-2 gap-1 md:text-lg  items-center  text-sm font-medium text-center text-black bg-slate-300 md:px-4 px-2 md:py-3 py-2 rounded-lg hover:bg-slate-400 duration-200 flex ">
                      View Website
                      <FaEarthAmericas />
                    </button>
                  </a>
                  <a
                    href="https://github.com/NithinPrathapan/Real-Estate-App"
                    target="_blank"
                  >
                    <button className=" mx-auto gap-2  justify-center  items-center md:text-lg  text-sm font-medium text-center text-black bg-slate-300 md:px-4 px-2 md:py-3 py-2 rounded-lg hover:bg-slate-400 duration-200 flex ">
                      Source Code
                      <AiFillGithub className="w-5 h-5  " />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="   max-w-[400px]   border-none flex flex-col mx-auto justify-center items-center border  rounded-lg shadow ">
              <img
                className="rounded-t-lg hover:scale-105 object-fill w-full  transition ease-in-out  duration-500"
                src={nike}
                alt="nike"
              />

              <div className="p-5">
                <h5 className="mb-2 text-center md:text-2xl text-lg font-bold tracking-tight dark:text-slate-200 ">
                  Nike Store landing page
                </h5>

                <p className="mb-3 text-center md:text-lg text-sm  text-slate-900 dark:text-slate-200 ">
                  It has been developed using React.js and designed using
                  Tailwind CSS. It includes modern and responsive design.
                </p>
                <div className="flex gap-2 flex-wrap py-2 justify-center items-center">
                  <h1 className="text-slate-800 font-semibold  cursor-context-menu md:text-sm text-xs  bg-white p-1 rounded-lg">
                    React.js
                  </h1>

                  <h1 className="text-slate-800 font-semibold  cursor-context-menu md:text-sm text-xs bg-white p-1 rounded-lg">
                    Tailwind
                  </h1>
                </div>
                <div className="flex items-center justify-center gap-2 ">
                  <a
                    href="https://nike-store-blond-iota.vercel.app/"
                    target="_blank"
                  >
                    <button className=" mx-auto  justify-center md:gap-2 gap-1 md:text-lg  items-center  text-sm font-medium text-center text-black bg-slate-300 md:px-4 px-2 md:py-3 py-2 rounded-lg hover:bg-slate-400 duration-200 flex ">
                      View Website
                      <FaEarthAmericas />
                    </button>
                  </a>
                  <a
                    href="https://github.com/NithinPrathapan/nike_store"
                    target="_blank"
                  >
                    <button className=" mx-auto gap-2  justify-center  items-center md:text-lg  text-sm font-medium text-center text-black bg-slate-300 md:px-4 px-2 md:py-3 py-2 rounded-lg hover:bg-slate-400 duration-200 flex ">
                      Source Code
                      <AiFillGithub className="w-5 h-5  " />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CONTACT SECTION */}
      </main>
      <section className="min-w- bg-[#000] ">
        <div className="max-w-4xl text-center py-6 flex flex-col gap-10 mx-auto">
          <h1 className="text-white text-3xl font-semibold font-poppins underline underline-offset-4 mb-4  tracking-wider ">
            Contact
          </h1>
          <div className="md:w-[100%] w-[80%] md:px-4 px-2  items-center  md:flex block   gap-12 mt-1  justify-between mx-auto">
            <div className="flex flex-col md:flex-1 mx-auto justify-center md:min-w-[50%] mb-6  text-white font-dancing">
              <div className="w-full md:text-4xl text-2xl">
                <h1 className=" text-[#d7d3d3] w-full">Let's Connect</h1>
                <h1 className=" text-teal-500 font-semibold w-full">
                  Digitally
                </h1>
              </div>
              <div className="flex gap-2 mt-4  items-center justify-center">
                <a
                  href="https://www.instagram.com/_nithin_prathapan_/?igsh=Znh5bHpiaXFidDR0"
                  target="_blank"
                >
                  <AiFillInstagram className="cursor-pointer w-10 h-10" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nithin-prathapan-67a827240/"
                  target="_blank"
                >
                  <AiFillLinkedin className="cursor-pointer w-10 h-10" />
                </a>
                <a href="https://github.com/NithinPrathapan" target="_blank">
                  <AiFillGithub className="cursor-pointer w-10 h-10" />{" "}
                </a>
              </div>
            </div>
            <div className="text-center  flex flex-col w-full gap-1">
              <form
                onSubmit={handleSubmit}
                action=""
                className=" w-full flex flex-col gap-2 justify-center items-center"
              >
                <textarea
                  onChange={handleChange}
                  id="message"
                  className="block p-2.5 w-full min-h-12 rounded-lg outline-none text-sm text-gray-900 bg-gray-50  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your mail here..."
                ></textarea>
                <button className="bg-teal-500 flex gap-2 items-center text-black justify-center font-semibold font-poppins w-full uppercase px-4 py-3 rounded-lg">
                  Send Now <IoSend />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
