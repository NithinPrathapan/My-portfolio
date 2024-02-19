import React from "react";
import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import profile from "./assets/myimg.jpeg";
import frontend from "./assets/frontend.png";
import backend from "./assets/backend.png";
import project from "./assets/project.webp";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
const App = () => {
  return (
    <main className="bg-white px-5  md:px-20 lg:px-40 ">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">developedby</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
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
          <h3 className="text-2xl py-2 md:text-3xl ">Mern stack Developer</h3>
          <p className="text-1 md:text-xl leading-8 text-gray-800  max-w-lg mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quo
            laudantium dolorem, deleniti iste omnis repellendus voluptates
            veniam, at libero beatae. Cupiditate facere totam nulla quaerat
            fugit officia reiciendis laudantium corrupti similique vero!
            Obcaecati.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full md:w-96 md:h-96   w-80 h-80 ">
          <img
            src={profile}
            alt="profile-image"
            className=" w-full h-full  object-cover rounded-full"
          />
        </div>
      </section>
      <section>
        <div className="">
          <h3 className="text-3xl">Services I offer</h3>
          <p className="text-lg leading-8 text-gray-800">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
            harum consequatur distinctio molestias praesentium! Id culpa
          </p>
          <p className="text-lg leading-8 text-gray-800">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
            harum consequatur distinctio molestias praesentium! Id culpa
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <img
              src={frontend}
              className="w-[100px] h-[100px] mx-auto"
              alt="no-image"
            />
            <h3 className="text-xl font-medium pt-8 pb-2">
              Frontend Development
            </h3>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis voluptatibus doloremque ea!
            </p>
            <h4 className="py-4 text-teal-600 font-semibold">
              Designing tools I use
            </h4>
            <p className="text-gray-800 py-1">Reactjs</p>
            <p className="text-gray-800 py-1">Tailwind CSS</p>
            <p className="text-gray-800 py-1">Canva</p>
            <p className="text-gray-800 py-1">React-Bootstrap</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <img
              src={backend}
              className="w-[100px] h-[100px] mx-auto"
              alt="no-image"
            />
            <h3 className="text-xl font-medium pt-8 pb-2">
              Backend Development
            </h3>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis voluptatibus doloremque ea!
            </p>
            <h4 className="py-4 text-teal-600 font-semibold">
              Backend tools I use
            </h4>
            <p className="text-gray-800 py-1">Reactjs</p>
            <p className="text-gray-800 py-1">Tailwind CSS</p>
            <p className="text-gray-800 py-1">Canva</p>
            <p className="text-gray-800 py-1">React-Bootstrap</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">Portfolio</h3>
          <p className="text-lg leading-8 text-gray-800">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
            harum consequatur distinctio molestias praesentium! Id culpa Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Commodi ipsum,
            totam labore ullam eius quas!
          </p>
          <p className="text-lg leading-8 text-gray-800">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
            harum consequatur distinctio molestias praesentium! Id culpa
          </p>
        </div>
        <div className="flex flex-wrap md:gap-10 gap-4 py-10 lg:flex lg:flex-wrap">
          <div className="flex-1  basis-1/3 ">
            <img
              className="rounded-lg object-cover w-full h-full"
              src={project}
              alt="project"
            />
          </div>
          <div className="flex-1  basis-1/3 ">
            <img
              className="rounded-lg object-cover w-full h-full"
              src={project}
              alt="project"
            />
          </div>
          <div className="flex-1  basis-1/3 ">
            <img
              className="rounded-lg object-cover w-full h-full"
              src={project}
              alt="project"
            />
          </div>
          <div className="flex-1  basis-1/3 ">
            <img
              className="rounded-lg object-cover w-full h-full"
              src={project}
              alt="project"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
