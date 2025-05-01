import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";


import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import PropertySearch from "./components/PropertySearch";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Header/>
      <About/>
      <Projects/>
      <PropertySearch/>
      <Testimonials/>
      
    </>
  );
}

export default App;
