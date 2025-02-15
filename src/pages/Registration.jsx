import React, { useEffect, useState } from 'react';
import Footer from '../componets/Footer';
import Navbar from '../componets/Navbar';
import RegistratonImage from '../assets/images/register.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    blood_group: '',
    last_donation_date: '',
    phone: '',
    password: '',
    confirm_password: '',
  });
  const navigation=useNavigate()

  // State for error messages
  const [errors, setErrors] = useState('');
  const [token,setToken]=useState('')
  useEffect(()=>{
    if(localStorage.getItem('token') && localStorage.getItem('token')!=='undefined'){
      navigation('/profile')
    }
  },[navigation])
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Check if required fields are filled
    if (!formData.username || !formData.first_name || !formData.last_name || !formData.email || !formData.blood_group || !formData.password || !formData.confirm_password) {
      setErrors("All fields are required!");
      return; // Prevent form submission
    }

    // Password confirmation check
    if (formData.password !== formData.confirm_password) {
      setErrors("Passwords do not match!");
      return; // Prevent form submission
    }
    if(formData.password.length < 8){
      setErrors("Passwords must be at least 8 charecter!");
      return;
    }
    // Clear previous errors
    setErrors('');
    const csrfToken = document.cookie.match(/csrftoken=([^;]+)/)?.[1]; // Get CSRF token from cookies


    console.log('Form submitted', formData);

    try {
      const response = await axios.post('http://127.0.0.1:8000/account/register/', formData, {
        headers: {
          'Content-Type': 'application/json', // This tells the server we are sending JSON
          'X-CSRFToken': csrfToken,
        },
      });
      setFormData({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        blood_group: '',
        password: '',
        confirm_password: '',
        phone: '',
        last_donation_date:''
      });
      setErrors('')

      console.log('Success:', response.data);
       // Handle the successful response
       alert("Check Your mail")
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with an error
        console.error('Error response:', error.response); // Log the full error response for debugging
  
        // If multiple error messages are returned, loop through them and display them
        if (error.response.data) {
          const errorMessages = Object.values(error.response.data);
          setErrors(errorMessages.join(' | '));  // Join all error messages into one string, separated by " | "
        } else {
          setErrors('An error occurred during registration.');
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
        setErrors('No response from server');
      } else {
        // Something went wrong while setting up the request
        console.error('Error:', error.message);
        setErrors('An unexpected error occurred');
      }
    }
  };

  // Function to dynamically change blood type background color
  const getBloodGroupColor = (bloodGroup) => {
    switch (bloodGroup) {
      case 'A+':
        return 'bg-red-500'; // Red color for A+
      case 'A-':
        return 'bg-red-600'; // Darker red for A-
      case 'B+':
        return 'bg-blue-500'; // Blue color for B+
      case 'B-':
        return 'bg-blue-600'; // Darker blue for B-
      case 'AB+':
        return 'bg-green-500'; // Green color for AB+
      case 'AB-':
        return 'bg-green-600'; // Darker green for AB-
      case 'O+':
        return 'bg-yellow-500'; // Yellow for O+
      case 'O-':
        return 'bg-yellow-600'; // Darker yellow for O-
      default:
        return 'bg-gray-200'; // Default gray background
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#ffff] flex items-center justify-center">
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
        

          <div className="md:flex justify-center gap-4">
            {/* Left Side Image */}
            <div className="flex items-center md:w-[50%] px-6">
              <img className="md:h-[75%]" src={RegistratonImage} alt="register image" />
            </div>

            {/* Right Side Form */}
            <div className="md:w-[50%] m-3">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Register Now</h2>

              <form onSubmit={handleSubmit} method="POST">
                {/* Username */}
                <div className="mb-4">
                  <label htmlFor="username" className="block text-gray-600 font-semibold">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* First Name */}
                <div className="mb-4">
                  <label htmlFor="first_name" className="block text-gray-600 font-semibold">First Name</label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Last Name */}
                <div className="mb-4">
                  <label htmlFor="last_name" className="block text-gray-600 font-semibold">Last Name</label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-600 font-semibold">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Blood Group */}
                <div className="mb-4">
                  <label htmlFor="blood_group" className="block text-gray-600 font-semibold">Blood Group</label>
                  <select
                    id="blood_group"
                    name="blood_group"
                    value={formData.blood_group}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${getBloodGroupColor(formData.blood_group)}`}
                  >
                    <option value="">Select your blood group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>

                {/* Last Donation Date */}
                <div className="mb-4">
                  <label htmlFor="last_donation_date" className="block text-gray-600 font-semibold">Last Donation Date</label>
                  <input
                    type="date"
                    id="last_donation_date"
                    name="last_donation_date"
                    value={formData.last_donation_date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Phone Number */}
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-600 font-semibold">Phone Number</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-600 font-semibold">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Confirm Password */}
                <div className="mb-6">
                  <label htmlFor="confirm_password" className="block text-gray-600 font-semibold">Confirm Password</label>
                  <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Submit Button */}
                <div >
                {errors && <p className="px-3 py-6 my-2 text-red-500">{errors}</p>}
                </div>
                <div className="text-center">
                  <button type="submit" className="w-full py-3 px-6 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
