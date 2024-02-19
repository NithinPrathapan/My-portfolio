import React from "react";
import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
const App = () => {
  return (
    <main className="bg-white px-10 ">
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
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">
            Nithin Prathpan
          </h2>
          <h3 className="text-2xl py-2">Mern stack Developer</h3>
          <p className="text-lg leading-8 text-gray-800">
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
      </section>
    </main>
  );
};

export default App;
