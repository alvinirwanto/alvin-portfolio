import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";

import { UilArrowUp } from '@iconscout/react-unicons'
import Qualification from "./components/Qualification";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showButton, setShowButton] = useState(false)

  const addButton = () => {
    window.scrollY >= 500 ? setShowButton(true) : setShowButton(false)
  }

  window.addEventListener('scroll', addButton)

  return (
    <div className="">
      <Navbar />
      <div className="w-full flex flex-col gap-[5rem] md:gap-[10rem] max-w-[370px] md:max-w-[730px] xl:max-w-[1200px] mx-auto mb-[5rem] md:mb-0">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Portfolio />
        <Testimonial />
        <Contact />
      </div>
      <Footer />

      <button className={showButton ? 'px-2 py-3 rounded-lg bg-[color:var(--base-color)] text-white fixed bottom-[6rem] right-3 md:bottom-8 md:right-8 duration-300 z-888 hover:animate-bounce' : 'px-2 py-3 rounded-lg bg-[color:var(--base-color)] text-white fixed -bottom-[3rem] right-3 md:right-8 duration-300 z-888'}><UilArrowUp /></button>
    </div>
  );
}

export default App;
