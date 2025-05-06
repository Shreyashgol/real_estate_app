import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Header from "./components/Header";
import About from "./components/About";
import PropertySearch from "./components/PropertySearch";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <ToastContainer />
      <Header/>
      <PropertySearch/>
      <About/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
