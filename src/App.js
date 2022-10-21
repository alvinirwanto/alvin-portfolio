import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";

import { UilArrowUp } from '@iconscout/react-unicons'

function App() {
  const [showButton, setShowButton] = useState(false)

  const addButton = () => {
    window.scrollY >= 500 ? setShowButton(true) : setShowButton(false)
  }

  window.addEventListener('scroll', addButton)

  return (
    <div className="">
      <Navbar />
      <div className="w-full flex flex-col gap-[5rem] max-w-[370px] md:max-w-[730px] xl:max-w-[1200px] mx-auto mb-[5rem] md:mb-0">
        <Home />
        <About />
        <Skills />
        <Services />
      </div>

      <button className={showButton ? 'px-2 py-3 rounded-lg bg-red-500 text-white fixed bottom-[6rem] right-3 md:bottom-8 md:right-8 duration-300 z-888' : 'px-2 py-3 rounded-lg bg-red-500 text-white fixed -bottom-[3rem] right-3 md:right-8 duration-300 z-888'}><UilArrowUp /></button>
    </div>
  );
}

export default App;
