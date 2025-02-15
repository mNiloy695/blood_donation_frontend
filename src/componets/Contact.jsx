import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    location: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Thank you for your submission!');
  };

  return (
    <div className=" w-full mx-auto p-6 bg-white shadow-xl rounded-lg ">
      <h2 className="text-2xl font-semibold text-center text-black md:text-4xl font-[Poppins]">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-6 m-2 md:m-11">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your location"
          />
        </div>

        {/* Message/Body */}
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            rows="4"
            placeholder="Write your message"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full px-6 py-3 bg-red-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
