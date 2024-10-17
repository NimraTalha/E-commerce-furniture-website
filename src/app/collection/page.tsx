"use client";

import Image from "next/image";
import React, { useState, useCallback } from "react";

const Shopping = () => {
  const [showDetails, setShowDetails] = useState(false);

  // Toggle Details function
  const toggleDetails = useCallback(() => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  }, []);

  // Function to handle adding products to the basket
  const handleAddToBasket = useCallback((productName: string) => {
    alert(`${productName} added to basket!`);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <h1 className="text-center text-4xl font-bold mt-8">Shopping Page</h1>
      <h4 className="text-center text-lg mt-4">Welcome to Shopping page.</h4>

      {/* First Section */}
      <div className="flex justify-center items-center mt-12">
        {/* Image with box */}
        <div className="relative w-full max-w-[1000px] h-[600px] group">
          <Image
            src="/set.avif"
            alt="Shopping Item"
            width={1000}
            height={600}
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
  &quot;Here are more details about our new collection. We offer a variety of styles and colors to choose from.
  Whether you&apos;re looking for something casual or elegant, we have it all.
  Check back regularly for updates on new arrivals and special offers!&quot;
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
            <Image
              src="/sofa1.avif"
              alt="Living Room"
              width={288}
              height={192}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => handleAddToBasket("Living Room Set")}
            />
            <h3 className="text-lg font-semibold mt-2">Living Room</h3>
          </div>

          {/* Dining Room */}
          <div className="group relative w-72">
            <Image
              src="/dinign.avif"
              alt="Dining Room"
              width={288}
              height={192}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => handleAddToBasket("Dining Room Set")}
            />
            <h3 className="text-lg font-semibold mt-2">Dining Room</h3>
          </div>

          {/* Bedroom */}
          <div className="group relative w-72">
            <Image
              src="/bed1.avif"
              alt="Bedroom"
              width={288}
              height={192}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => handleAddToBasket("Bedroom Set")}
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
            <Image
              src="/bed2.avif"
              alt="Bedroom Set"
              width={288}
              height={192}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => handleAddToBasket("Bedroom Set")}
            />
            <h3 className="text-lg font-semibold mt-2">Bedroom Set</h3>
            <p className="text-sm mt-1">Price: $50 / €45 / PKR 10,500</p>
          </div>

          {/* Product 2 */}
          <div className="group relative w-72">
            <Image
              src="/bed3.avif"
              alt="Bed"
              width={288}
              height={192}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => handleAddToBasket("Bed")}
            />
            <h3 className="text-lg font-semibold mt-2">Bed</h3>
            <p className="text-sm mt-1">Price: $70 / €65 / PKR 15,500</p>
          </div>

          {/* Product 3 */}
          <div className="group relative w-72">
            <Image
              src="/bed4.avif"
              alt="Bed"
              width={288}
              height={192}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => handleAddToBasket("Bed")}
            />
            <h3 className="text-lg font-semibold mt-2">Bed</h3>
            <p className="text-sm mt-1">Price: $60 / €55 / PKR 12,000</p>
          </div>

          {/* Product 4 */}
          <div className="group relative w-72">
            <Image
              src="/dining.webp"
              alt="Dining Table"
              width={288}
              height={192}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => handleAddToBasket("Dining Table")}
            />
            <h3 className="text-lg font-semibold mt-2">Dining Table</h3>
            <p className="text-sm mt-1">Price: $40 / €35 / PKR 8,500</p>
          </div>

          {/* Product 5 */}
          <div className="group relative w-72">
            <Image
              src="/dining2.avif"
              alt="Dining Table"
              width={288}
              height={192}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => handleAddToBasket("Dining Table")}
            />
            <h3 className="text-lg font-semibold mt-2">Dining Table</h3>
            <p className="text-sm mt-1">Price: $40 / €35 / PKR 8,500</p>
          </div>

          {/* Product 6 */}
          <div className="group relative w-72">
            <Image
              src="/diningtable.jpg"
              alt="Dining Table"
              width={288}
              height={192}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => handleAddToBasket("Dining Table")}
            />
            <h3 className="text-lg font-semibold mt-2">Dining Table</h3>
            <p className="text-sm mt-1">Price: $40 / €35 / PKR 8,500</p>
          </div>

          {/* Product 7 */}
          <div className="group relative w-72">
            <Image
              src="/bed.avif"
              alt="Bed"
              width={288}
              height={192}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => handleAddToBasket("Bed")}
            />
            <h3 className="text-lg font-semibold mt-2">Bed</h3>
            <p className="text-sm mt-1">Price: $60 / €55 / PKR 12,000</p>
          </div>
          <div className="group relative w-72">
            <Image
              src="/sofa.webp"
              alt="Bed"
              width={288}
              height={192}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => handleAddToBasket("Bed")}
            />
            <h3 className="text-lg font-semibold mt-2">Sofa</h3>
            <p className="text-sm mt-1">Price: $70 / €65 / PKR 15,500</p>
          </div>
          <div className="group relative w-72">
            <Image
              src="/sofa1.avif"
              alt="Bed"
              width={288}
              height={192}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => handleAddToBasket("Bed")}
            />
            <h3 className="text-lg font-semibold mt-2">Sofa</h3>
            <p className="text-sm mt-1">Price: $70 / €65 / PKR 15,500</p>
          </div>
          <div className="group relative w-72">
            <Image
              src="/sofa2.avif"
              alt="Bed"
              width={288}
              height={192}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => handleAddToBasket("Sofa")}
            />
            <h3 className="text-lg font-semibold mt-2">Sofa</h3>
            <p className="text-sm mt-1">Price: $70 / €65 / PKR 15,500</p>
          </div>
          <div className="group relative w-72">
            <Image
              src="/space.webp"
              alt="Bed"
              width={288}
              height={192}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => handleAddToBasket("Space")}
            />
            <h3 className="text-lg font-semibold mt-2">SpaceTable</h3>
            <p className="text-sm mt-1">Price: $70 / €65 / PKR 15,500</p>
          </div>
          <div className="group relative w-72">
            <Image
              src="/dinng.webp"
              alt="Bed"
              width={288}
              height={192}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => handleAddToBasket("DiningTable")}
            />
            <h3 className="text-lg font-semibold mt-2">Dining-Table</h3>
            <p className="text-sm mt-1">Price: $70 / €65 / PKR 15,500</p>
          </div>
          <div className="group relative w-72">
            <Image
              src="/dinign.avif"
              alt="Bed"
              width={288}
              height={192}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => handleAddToBasket("DiningTable")}
            />
            <h3 className="text-lg font-semibold mt-2">Dining-Table</h3>
            <p className="text-sm mt-1">Price: $70 / €65 / PKR 15,500</p>
          </div>
          <div className="group relative w-72">
            <Image
              src="/dining2.avif"
              alt="Bed"
              width={288}
              height={192}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => handleAddToBasket("DiningTable")}
            />
            <h3 className="text-lg font-semibold mt-2">Dining-Table</h3>
            <p className="text-sm mt-1">Price: $70 / €65 / PKR 15,500</p>
          </div>
          <div className="group relative w-72">
            <Image
              src="/dresser.jpg"
              alt="Dresser"
              width={288}
              height={192}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              onClick={() => handleAddToBasket("DiningTable")}
            />
            <h3 className="text-lg font-semibold mt-2">Dresser</h3>
            <p className="text-sm mt-1">Price: $70 / €65 / PKR 15,500</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;