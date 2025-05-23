import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  const [length, setLength] = useState(0);
  const a1 = () => {
    setLength(length + 1);
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Band
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passinate About Properties, Dedicated to your Vision{" "}
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        ></img>

        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600 ">
          <div className="grid grid-cols-2 gapp-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
          At Estate, we are committed to transforming the way India buys, sells, and rents properties. As one of the country's leading real estate platforms, our mission is to empower users with accurate data, detailed listings, and trusted tools to make informed property decisions. Whether you're a first-time buyer, a seasoned investor, or looking to rent, Estate offers a seamless, transparent, and reliable experience backed by cutting-edge technology and expert support.
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
