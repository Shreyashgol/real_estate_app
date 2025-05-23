import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-10 lg:px-32 px-6 md:px-20 overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-color text-gray-500 mb-12 max-w-80 mx-auto">
        Real Stories from Those Who Found Home with Us
      </p>

      <div className="flex flex-wrap gap-6 justify-center">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[400px] border shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-30 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mt-4">{testimonial.name}</h2>
            <p className="text-gray-600 mt-2">{testimonial.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4 mt-4">
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt=""></img>
              ))}
            </div>
            <p className="text-gray-600 ">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
