import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import About from "./components/About";
import PropertySearch from "./components/PropertySearch";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PropertyDetails from "./components/PropertyDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />

      <Routes>
        <Route path="/" element={<PropertySearch />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;


