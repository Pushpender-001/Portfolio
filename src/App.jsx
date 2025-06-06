import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import Skills from "./Components/Skills"
import Footer from "./Components/Footer";
function App()  {
 return (
    <div className=" bg-[#171d32] h-auto w-full overflow-hidden">
      <Header />
      <Home/>
      <About/>
      <Project/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default App
