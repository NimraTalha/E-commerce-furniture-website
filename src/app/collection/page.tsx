"use client";
import Header from "@/components/header";
import Headermain from "@/components/headermain";
import Navbar from "@/components/navbar";
import React, { useState } from "react";

const Shopping = () => {
  const [showDetails, setShowDetails] = useState(false); // State to toggle details

  const toggleDetails = () => {
    console.log("Button clicked!"); // Debugging line
    setShowDetails((prevShowDetails) => !prevShowDetails); // Toggle the visibility of details
  };

  return (
    <div className="bg-white min-h-screen">
      <h1 className="text-center text-4xl font-bold mt-8">Shopping Page</h1>
      <p className="text-center text-lg mt-4">Welcome to the Shopping page!</p>

      {/* First Section */}
      <div className="flex justify-center items-center mt-12">
        {/* Image with box */}
        <div className="relative w-full max-w-[1000px] h-[600px] group">
          <img
            src="/set.avif"
            alt="Shopping Item"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Customizable Box */}
          <div className="absolute top-4 right-4 bg-orange-100 text-black p-6 rounded-md shadow-lg max-w-[350px]">
            <p className="text-start font-extrabold text-yellow-600 text-2xl">
              Discover Our New Collection
            </p>
            <button 
              className="bg-yellow-600 text-white px-6 py-2 rounded-md mt-2 hover:bg-opacity-75 transition duration-300"
              onClick={toggleDetails}
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Detailed Section */}
      {showDetails && (
        <div className="mt-8 p-4 border-t border-gray-300">
          <h2 className="text-2xl font-bold mb-2">More Details</h2>
          <p className="bg-white text-lg">
            Here are more details about our new collection. We offer a variety of styles and colors to choose from. 
            Whether you're looking for something casual or elegant, we have it all. 
            Check back regularly for updates on new arrivals and special offers!
          </p>
        </div>
      )}

      {/* Browse the Range Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Browse the Range</h2>
        <p className="text-lg mb-8">Explore our exquisite collections in different categories.</p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Living Room */}
          <div className="group relative w-72">
            <img
              src="/sofa1.avif" // Replace with the actual path for Living Room image
              alt="Living Room"
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="text-lg font-semibold mt-2">Living Room</h3>
          </div>

          {/* Dining Room */}
          <div className="group relative w-72">
            <img
              src="/dinign.avif" // Replace with the actual path for Dining Room image
              alt="Dining Room"
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="text-lg font-semibold mt-2">Dining Room</h3>
          </div>

          {/* Bedroom */}
          <div className="group relative w-72">
            <img
              src="/bed1.avif" // Replace with the actual path for Bedroom image
              alt="Bedroom"
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="text-lg font-semibold mt-2">Bedroom</h3>
          </div>
        </div>
      </div>

      {/* Our Products Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Products</h2>
        <p className="text-lg mb-8">Browse through our amazing products available at great prices!</p>

        {/* Product Images */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Product 1 */}
          <div className="group relative w-72">
            <img
              src="/bed2.avif" // Replace with the actual path for Product 1
              alt="Product 1"
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => alert("Product 1 added to basket!")} // Simulate adding to basket
            />
            <h3 className="text-lg font-semibold mt-2">Bedroom set</h3>
            <p className="text-sm mt-1">Price: $50 / €45 / PKR 10,500</p>
          </div>

          {/* Product 2 */}
          <div className="group relative w-72">
            <img
              src="/bed3.avif" // Replace with the actual path for Product 2
              alt="Product 2"
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => alert("Product 2 added to basket!")}
            />
            <h3 className="text-lg font-semibold mt-2">Bed</h3>
            <p className="text-sm mt-1">Price: $70 / €65 / PKR 15,500</p>
          </div>

          {/* Product 3 */}
          <div className="group relative w-72">
            <img
              src="/Bed4.avif" // Replace with the actual path for Product 3
              alt="Product 3"
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => alert("Product 3 added to basket!")}
            />
            <h3 className="text-lg font-semibold mt-2">Bed</h3>
            <p className="text-sm mt-1">Price: $60 / €55 / PKR 12,000</p>
          </div>

          {/* Product 4 */}
          <div className="group relative w-72">
            <img
              src="/dining.webp" // Replace with the actual path for Product 4
              alt="Product 4"
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => alert("Product 4 added to basket!")}
            />
            <h3 className="text-lg font-semibold mt-2">Diniing-table</h3>
            <p className="text-sm mt-1">Price: $40 / €35 / PKR 8,500</p>
          </div>
          <div className="group relative w-72">
            <img
              src="/dining2.avif" // Replace with the actual path for Product 4
              alt="Product 4"
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => alert("Product 4 added to basket!")}
            />
            <h3 className="text-lg font-semibold mt-2">Diniing-table</h3>
            <p className="text-sm mt-1">Price: $40 / €35 / PKR 8,500</p>
          </div>
          <div className="group relative w-72">
            <img
              src="/diningtable.jpg" // Replace with the actual path for Product 4
              alt="Product 4"
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => alert("Product 4 added to basket!")}
            />
            <h3 className="text-lg font-semibold mt-2">Diniing-table</h3>
            <p className="text-sm mt-1">Price: $40 / €35 / PKR 8,500</p>
          </div>
          <div className="group relative w-72">
            <img
              src="/dinng.webp" // Replace with the actual path for Product 4
              alt="Product 4"
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => alert("Product 4 added to basket!")}
            />
            <h3 className="text-lg font-semibold mt-2">Diniing-table</h3>
            <p className="text-sm mt-1">Price: $40 / €35 / PKR 8,500</p>
          </div>
          <div className="group relative w-72">
            <img
              src="/dresser.jpg" // Replace with the actual path for Product 4
              alt="Product 4"
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => alert("Product 4 added to basket!")}
            />
            <h3 className="text-lg font-semibold mt-2">Dresser</h3>
            <p className="text-sm mt-1">Price: $40 / €35 / PKR 8,500</p>
          </div>
          <div className="group relative w-72">
            <img
              src="/set.avif" // Replace with the actual path for Product 4
              alt="Product 4"
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => alert("Product 4 added to basket!")}
            />
            <h3 className="text-lg font-semibold mt-2">Diniing-table</h3>
            <p className="text-sm mt-1">Price: $40 / €35 / PKR 8,500</p>
          </div>
          <div className="group relative w-72">
            <img
              src="/bed.webp" // Replace with the actual path for Product 4
              alt="Product 4"
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => alert("Product 4 added to basket!")}
            />
            <h3 className="text-lg font-semibold mt-2">Bedroom</h3>
            <p className="text-sm mt-1">Price: $40 / €35 / PKR 8,500</p>
          </div>
          <div className="group relative w-72">
            <img
              src="/sofa.webp" // Replace with the actual path for Product 4
              alt="Product 4"
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => alert("Product 4 added to basket!")}
            />
            <h3 className="text-lg font-semibold mt-2">Sofa-set</h3>
            <p className="text-sm mt-1">Price: $40 / €35 / PKR 8,500</p>
          </div>
          <div className="group relative w-72">
            <img
              src="/sofa1.avif" // Replace with the actual path for Product 4
              alt="Product 4"
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => alert("Product 4 added to basket!")}
            />
            <h3 className="text-lg font-semibold mt-2">Sofa-set</h3>
            <p className="text-sm mt-1">Price: $40 / €35 / PKR 8,500</p>
          </div>
          <div className="group relative w-72">
            <img
              src="/sofa2.avif" // Replace with the actual path for Product 4
              alt="Product 4"
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => alert("Product 4 added to basket!")}
            />
            <h3 className="text-lg font-semibold mt-2">Sofa-set</h3>
            <p className="text-sm mt-1">Price: $40 / €35 / PKR 8,500</p>
          </div>
          <div className="group relative w-72">
            <img
              src="/space.webp" // Replace with the actual path for Product 4
              alt="Product 4"
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => alert("Product 4 added to basket!")}
            />
            <h3 className="text-lg font-semibold mt-2">Space-Table</h3>
            <p className="text-sm mt-1">Price: $40 / €35 / PKR 8,500</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
