import React, { useState, useMemo } from "react";
import { housesData } from "../data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PropertySearch = () => {
  const [inputFilters, setInputFilters] = useState({
    location: "",
    type: "",
    minPrice: "",
    maxPrice: "",
  });

  const [appliedFilters, setAppliedFilters] = useState({
    location: "",
    type: "",
    minPrice: "",
    maxPrice: "",
  });

  const filteredHouses = useMemo(() => {
    return housesData.filter((house) => {
      const matchesLocation =
        !appliedFilters.location ||
        house.address.toLowerCase().includes(appliedFilters.location.toLowerCase());
      const matchesType = !appliedFilters.type || house.type === appliedFilters.type;
      const matchesMinPrice =
        !appliedFilters.minPrice || house.price >= parseInt(appliedFilters.minPrice);
      const matchesMaxPrice =
        !appliedFilters.maxPrice || house.price <= parseInt(appliedFilters.maxPrice);
      return (
        matchesLocation && matchesType && matchesMinPrice && matchesMaxPrice
      );
    });
  }, [appliedFilters]);

  const handleSearch = () => {
    setAppliedFilters({ ...inputFilters });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="max-w-6xl my-20 mx-auto p-4"
      id="PropertySearch"
    >
      <h1 className="text-5xl sm:text-4xl font-bold mb-8 text-center">
        PropertySearch
      </h1>

      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by location"
          value={inputFilters.location}
          onChange={(e) =>
            setInputFilters({ ...inputFilters, location: e.target.value })
          }
          className="border p-2 rounded"
        />

        <select
          value={inputFilters.type}
          onChange={(e) =>
            setInputFilters({ ...inputFilters, type: e.target.value })
          }
          className="border p-2 rounded"
        >
          <option value="">All Types</option>
          <option value="House">House</option>
          <option value="Apartament">Apartament</option>
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={inputFilters.minPrice}
          onChange={(e) =>
            setInputFilters({ ...inputFilters, minPrice: e.target.value })
          }
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Max Price"
          value={inputFilters.maxPrice}
          onChange={(e) =>
            setInputFilters({ ...inputFilters, maxPrice: e.target.value })
          }
          className="border p-2 rounded"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* Properties List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredHouses.map((house) => (
          <Link to={`/property/${house.id}`} key={house.id}>
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer">
              <img
                src={house.image}
                alt={house.name}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h2 className="text-xl font-semibold">{house.name}</h2>
              <h2 className="text-xl font-semibold">{house.country}</h2>
              <p className="text-gray-600">{house.address}</p>
              <p className="mt-1 font-bold text-green-600">
                ${house.price.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">
                {house.type} · {house.bedrooms} Beds · {house.bathrooms} Baths
              </p>
            </div>
          </Link>
        ))}
      </div>

      {filteredHouses.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No properties found matching your criteria.
        </p>
      )}
    </motion.div>
  );
};

export default PropertySearch;


