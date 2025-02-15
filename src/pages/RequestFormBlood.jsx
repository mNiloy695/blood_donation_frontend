import React, { useEffect, useState } from 'react';
import BloodImage from '../assets/images/banner.png'
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import Contact from '../componets/Contact';
import BestcampingImage from '../componets/Home/BestcampingImage'
import Image1 from  '../assets/images/image1.jpg'
import Image2 from  '../assets/images/image2.jpg'
import Image3 from  '../assets/images/image3.jpg'
import Image4 from  '../assets/images/image4.jpg'
import Image5 from  '../assets/images/image5.jpg'
import Image6 from  '../assets/images/image6.jpg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RequestFormBlood = () => {
  const [blood, setBlood] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [unit, setUnit] = useState(1);
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const [user, setUser] = useState(0);
  
  const navigation = useNavigate();

  // Fetch token and user from localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user_id');  // user_id renamed to user
    setToken(token);
    setUser(user);

    if (!token || token === 'undefined') {
      console.log('No token found, redirecting to login');
      navigation('/login');  // Redirect to login page
    }
  }, [navigation]);

  const bloodGroups = ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'];

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!blood || !address || !phone || !unit || !user) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/recive/request/', 
        { user, blood, address, phone, unit },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
          }
        }
      );
      if (response.data.error) {
        setError(response.data.error);
      } else {
        alert('Request successfully sent');
        console.log(response.data);
        setAddress('');
        setBlood('');
        setPhone('');
        setError('');
        setUnit('');
        
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row shadow-lg bg-[#ffff]">
          <div className='flex items-center justify-center w-[100%]'>
            <img className='w-[90%]'  src={BloodImage} alt="" />
          </div>
          {/* Form Section */}
          <div className="w-full p-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6 font-[Poppins]">Request For Blood</h2>

            {error && <div className="text-red-500 text-center mb-4">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="blood" className="block text-lg text-gray-700">Blood Group</label>
                <select
                  id="blood"
                  value={blood}
                  onChange={(e) => setBlood(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                >
                  <option value="">Select Blood Group</option>
                  {bloodGroups.map((group) => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="address" className="block text-lg text-gray-700">Address</label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-lg text-gray-700">Phone</label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="unit" className="block text-lg text-gray-700">Unit</label>
                <input
                  type="number"
                  id="unit"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  min="1"
                  required
                />
              </div>

              <button type="submit" className="w-full py-3 bg-red-600 text-white text-xl font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className='mt-40 mb-40'>
        <h1 className='text-center mb-40 font-bold font-[Poppins] md:text-5xl text-3xl'>Camping</h1>
        <div className='flex my-4 justify-center flex-col md:flex-row flex-wrap gap-11'>
          <BestcampingImage image={Image1} />
          <BestcampingImage image={Image2} />
          <BestcampingImage image={Image3} />
        </div>
        <div className='flex m-4 justify-center gap-11 flex-col md:flex-row flex-wrap'>
          <BestcampingImage image={Image4} />
          <BestcampingImage image={Image5} />
          <BestcampingImage image={Image6} />
        </div>
      </div>

      <div className='my-20'>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default RequestFormBlood;
