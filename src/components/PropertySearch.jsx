import React, { useState, useMemo } from "react";
import {housesData} from "../data"; // Adjust the path as needed

const PropertySearch = () => {
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    minPrice: "",
    maxPrice: "",
  });

  const filteredHouses = useMemo(() => {
    return housesData.filter((house) => {
      const matchesLocation = !filters.location || house.address.toLowerCase().includes(filters.location.toLowerCase());
      const matchesType = !filters.type || house.type === filters.type;
      const matchesMinPrice = !filters.minPrice || house.price >= parseInt(filters.minPrice);
      const matchesMaxPrice = !filters.maxPrice || house.price <= parseInt(filters.maxPrice);
      return matchesLocation && matchesType && matchesMinPrice && matchesMaxPrice;
    });
  }, [filters]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Property Search</h1>

      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by location"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="border p-2 rounded"
        />

        <select
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="">All Types</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
          className="border p-2 rounded"
        />
      </div>

      {/* Properties List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredHouses.map((house) => (
          <div key={house.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img
              src={house.image}
              alt={house.name}
              className="w-full h-48 object-cover rounded mb-2"
            />
            <h2 className="text-xl font-semibold">{house.name}</h2>
            <h2 className="text-xl font-semibold">{house.country}</h2>
            <p className="text-gray-600">{house.address}</p>
            <p className="mt-1 font-bold text-green-600">${house.price.toLocaleString()}</p>
            <p className="text-sm text-gray-500">{house.type} · {house.bedrooms} Beds · {house.bathrooms} Baths</p>
          </div>
        ))}
      </div>

      {filteredHouses.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No properties found matching your criteria.</p>
      )}
    </div>
  );
};

export default PropertySearch;
