"use client";
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white text-gray-800 p-10">
      <h1 className="text-5xl font-bold mb-5 text-center text-yellow-600 ">Contact Us</h1>
      <p className="text-lg mb-8 text-center font-semibold">
        Have any questions? Feel free to reach out to us through the form below or using our contact information.
      </p>
      <div className="max-w-md mx-auto">
        <form className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 " htmlFor="name">Name</label>
            {/* Added yellow border */}
            <input type="text" id="name" className="w-full p-2 border border-yellow-600 rounded" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            {/* Added yellow border */}
            <input type="email" id="email" className="w-full p-2 border border-yellow-600 rounded" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
            {/* Added yellow border */}
            <textarea id="message" rows={4} className="w-full p-2 border border-yellow-600 rounded" required></textarea>
          </div>
          <button type="submit" className="w-full bg-yellow-600 text-white p-2 rounded hover:bg-orange-400">Send Message</button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-lg">Or reach us at:</p>
          <p>Email: contact@yourfurniture.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
