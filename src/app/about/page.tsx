// app/about/page.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-gray-800 p-10">
      <h1 className="text-3xl font-bold mb-5 text-center">About Us</h1>
      <p className="text-lg mb-8 text-center">
        We are committed to providing high-quality furniture that brings comfort and style to your space. Our unique designs and durable materials ensure that every piece meets your expectations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Quality Materials</h2>
          <p>We use only the best materials to craft furniture that lasts.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Custom Designs</h2>
          <p>Each piece is uniquely designed to match modern aesthetics.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Affordable Prices</h2>
          <p>Get premium furniture without breaking the bank.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
