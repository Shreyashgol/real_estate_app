import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { DarkModeProvider } from "./components/DarkModeContext";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import PopularAreas from "./sections/PopularAreas";
import Contact from "./sections/Contact";
import Properties from "./sections/Properties";
import Services from "./sections/Services";
import Clients from "./sections/Clients";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <PopularAreas />
        <Properties />
        <Services />
        <Clients />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </>
  );
}

export default App;
