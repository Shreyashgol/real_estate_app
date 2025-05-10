import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Header from "./components/Header";
import About from "./components/About";
import PropertySearch from "./components/PropertySearch";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PropertyDetails from "./components/PropertyDetails";


function App() {
  return (
    <>
    <ToastContainer />
      <Header/>
      <Router>
      <Routes>
        <Route path="/" element={<PropertySearch />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </Router>
      <About/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      
    </>
  );
}

export default App;
