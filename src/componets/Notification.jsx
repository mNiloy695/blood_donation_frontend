import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import { Navigate, useNavigate } from 'react-router-dom';

const BloodRequestPopup = ({ userId }) => {
  const [bloodData, setBloodData] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const navigator=useNavigate()

  // Fetch data when the component is mounted
  useEffect(() => {
    const id = localStorage.getItem('user_id');
    const token = localStorage.getItem('token');

    axios.get(`http://127.0.0.1:8000/blood/specificRequest/?user_id=${id}`, {
      headers: {
        'Authorization': `Token ${token}`,
      }
    })
      .then(response => {
        setBloodData(response.data); // Assume the response has the necessary data
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, [userId]);

  const closePopup = () => {
    setIsVisible(false); // Close the popup when clicked
    navigator('/')
  };

  return (
    <>
      <Navbar />
      {isVisible && bloodData ? (
        
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md
           w-80 text-center">
            <h2 className="text-xl font-semibold mb-4">Blood Request Details</h2>
            {bloodData.map((request, index) => (
              <div key={index} className="mb-4 flex justify-between">
                <p><strong>Blood:</strong> {request.blood_group}</p>
               
                <p><strong>Status:</strong> {request.status}</p>
                <p><strong>phone:</strong> {request.phone}</p>
                {console.log(bloodData)}
              </div>
              
            ))}
            <button
              onClick={closePopup}
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
     

    </>
  );
};

export default BloodRequestPopup;
