import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { housesData } from "../data";
import { FaBed, FaBath } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";


const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = housesData.find((house) => house.id.toString() === id);

  if (!property) {
    return <p className="text-center text-gray-500">Property not found</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
      {/* Floating Back Button */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-6 left-6 bg-white border shadow-md px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition z-50"
      >
        ← Back to Listings
      </button>
      {/* Left - Property Details */}
      <div className="md:col-span-2">
        <h2 className="text-3xl font-bold">{property.name}</h2>
        <p className="text-gray-500">{property.address}</p>

        <div className="flex gap-2 my-2">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            {property.type}
          </span>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            {property.country}
          </span>
        </div>

        <h3 className="text-2xl text-purple-700 font-bold mt-2 mb-4">
          ${property.price.toLocaleString()}
        </h3>

        <img
          src={property.image}
          alt={property.name}
          className="w-full h-96 object-cover rounded-lg mb-4"
        />

        <div className="flex items-center text-gray-600 gap-6 text-lg mb-4">
          <p className="flex items-center gap-1">
            <FaBed /> {property.bedrooms}
          </p>
          <p className="flex items-center gap-1">
            <FaBath /> {property.bathrooms}
          </p>
          <p className="flex items-center gap-1">
            <TbRulerMeasure /> {property.surface} sq ft
          </p>
        </div>

        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat.
          Repudiandae ratione impedit delectus consectetur. Aspernatur vero
          obcaecati placeat ab distinctio unde ipsam molestias atque eligendi.
        </p>
      </div>

      {/* Right - Contact Form */}
      <div className="border rounded-lg p-6 shadow">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={property.agent.image}
            alt={property.agent.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold">{property.agent.name}</h4>
            <a href="#" className="text-sm text-blue-500">
              View listings
            </a>
          </div>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name*"
            className="w-full border rounded p-2"
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-full border rounded p-2"
          />
          <input
            type="tel"
            placeholder="Phone*"
            className="w-full border rounded p-2"
          />
          <textarea
            placeholder={`Hello, I am interested in [${property.name}]`}
            className="w-full border rounded p-2"
            rows={3}
          ></textarea>

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Send message
            </button>
            <button
              type="button"
              className="border border-purple-600 text-purple-600 px-4 py-2 rounded"
            >
              Call
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyDetails;
