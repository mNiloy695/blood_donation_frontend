import React, { useEffect, useState } from 'react';
import Blood_Card from '../componets/Blood_Card';
import axios from 'axios';
import Navbar from '../componets/Navbar';
import Contact from '../componets/Contact';
import Footer from '../componets/Footer';

const BloodCard = () => {
  const [error, setError] = useState('');
  const [donors, setDonors] = useState([]);
  const [filteredDonors, setFilteredDonors] = useState([]);
  const [token, setToken] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  const [addresses, setAddresses] = useState([]);
  const [bloodGroups, setBloodGroups] = useState(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && token !== 'undefined') {
      setToken(token);
      console.log(token);
    }
  }, []);

  // Fetch the list of donors and user details with blood cards
  const all_donors = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log("Token being sent in request:", token);

      if (!token || token === 'undefined') {
        setError('No token found. Please login again.');
        return;
      }

      const response = await axios.get('http://127.0.0.1:8000/donate/request/', {
        headers: {
          'Authorization': `Token ${token}`,
        },
      });

      if (response.data.error) {
        setError(response.data.error);
      } else {
        setError('');
        const donorWithUserDetails = [];

        // Fetch user details for each donor
        for (let donor of response.data) {
          const donorUserResponse = await axios.get(`http://127.0.0.1:8000/account/register/${donor.user}/`);
          const userDetails = donorUserResponse.data;

          donorWithUserDetails.push({
            ...donor,
            userDetails,
          });
        }

        setDonors(donorWithUserDetails);
        setFilteredDonors(donorWithUserDetails);
        
        // Extract unique addresses for the filter
        const uniqueAddresses = [...new Set(donorWithUserDetails.map(donor => donor.address))];
        setAddresses(uniqueAddresses);
      }
    } catch (err) {
      console.error('Error during fetching donors:', err);
      setError('An error occurred while fetching data');
    }
  };

  useEffect(() => {
    all_donors(); // Fetch data when the component mounts
  }, []);

  // Filter donors based on search term, address, and blood group
  const filterDonors = () => {
    let filtered = donors;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(donor =>
        donor.userDetails.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donor.userDetails.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donor.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Address filter
    if (selectedAddress) {
      filtered = filtered.filter(donor => donor.address === selectedAddress);
    }

    // Blood group filter
    if (selectedBloodGroup) {
      filtered = filtered.filter(donor => donor.blood === selectedBloodGroup);
    }

    setFilteredDonors(filtered);
  };

  // Run the filter every time a filter changes
  useEffect(() => {
    filterDonors();
  }, [searchTerm, selectedAddress, selectedBloodGroup]);

  return (
    <>
      <Navbar />

      {/* Filters Section */}
      <div className="bg-gradient-to-r from-gray-600 to-gray-700 py-8 text-white m-6 rounded-md shadow-lg">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center  px-4">
          <div className="flex font-medium flex-col sm:flex-row gap-6 sm:gap-4 w-full sm:w-auto ">
            {/* Search Bar */}
            <input
              type="text"
              className="px-6 py-3 rounded-xl shadow-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 w-full sm:w-60"
              placeholder="Search by name or address"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Address Filter */}
            <select
              className="px-6 py-3 rounded-xl shadow-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 w-full sm:w-60"
              value={selectedAddress}
              onChange={(e) => setSelectedAddress(e.target.value)}
            >
              <option value="">Select Address</option>
              {addresses.map((address, index) => (
                <option key={index} value={address}>
                  {address}
                </option>
              ))}
            </select>

            {/* Blood Group Filter */}
            <select
              className="px-6 py-3 rounded-xl shadow-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 w-full sm:w-60"
              value={selectedBloodGroup}
              onChange={(e) => setSelectedBloodGroup(e.target.value)}
            >
              <option value="">Select Blood Group</option>
              {bloodGroups.map((group, index) => (
                <option key={index} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="my-6 px-4">
        {/* Display error message if exists */}
        {error && <div className="text-red-500 text-center font-semibold">{error}</div>}

        {/* Render Blood_Card for each filtered donor */}
        <div className="flex flex-col justify-between gap-2 m-2 sm:flex-row flex-wrap">
          {filteredDonors.map((donor) => (
            <Blood_Card
              id={donor.id}
              key={donor.id} // Ensure each donor has a unique key
              name={`${donor.userDetails.first_name} ${donor.userDetails.last_name}`} // Full name
              blood_group={donor.blood}
              address={donor.address}
              unit={donor.unit}
              phone={donor.phone}
              email={donor.email}
            />
          ))}
        </div>
      </div>

      <div className='my-20'>
        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default BloodCard;
