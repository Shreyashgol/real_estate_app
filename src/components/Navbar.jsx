import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { logout, user } = useAuth();

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="logo" className="w-20 h-20" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 text-white font-semibold text-lg">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#PropertySearch" className="cursor-pointer hover:text-gray-400">
            Property Search
          </a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>

        {/* Desktop Auth Section */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <span className="text-white font-semibold">{user.email}</span>
              <button
                onClick={logout}
                className="bg-white px-6 py-2 rounded-full hover:bg-gray-200"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-white px-6 py-2 rounded-full hover:bg-gray-200"
            >
              Login / Signup
            </Link>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          alt="menu"
          className="md:hidden w-7"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full h-full bg-white" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden transition-all z-20`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt="close"
          />
        </div>

        <ul className="flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium">
          <a onClick={() => setShowMobileMenu(false)} href="#Header" className="px-4 py-2">
            Home
          </a>
          <a onClick={() => setShowMobileMenu(false)} href="#About" className="px-4 py-2">
            About
          </a>
          <a onClick={() => setShowMobileMenu(false)} href="#PropertySearch" className="px-4 py-2">
            Property Search
          </a>
          <a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className="px-4 py-2">
            Testimonials
          </a>

          {/* Mobile Auth Buttons */}
          {user ? (
            <button
              onClick={() => {
                logout();
                setShowMobileMenu(false);
              }}
              className="text-red-600 font-semibold"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setShowMobileMenu(false)}
              className="text-blue-600 font-semibold"
            >
              Login / Signup
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

