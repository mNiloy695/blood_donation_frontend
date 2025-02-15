import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

const BloodRequestsTable = () => {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState('');
  const [myRequest,setMyRequest]=useState([])

  // Fetch the blood requests from the API
  useEffect(() => {
    const blood = localStorage.getItem('blood_group');
    const user=localStorage.getItem('user_id');
    const fetchRequests = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/recive/request/?blood=${blood}`
        );

        //  fetch my all request for blood
       
        setRequests(response.data);
        
      } catch (err) {
        setError('Error fetching blood requests');
        console.error('Error fetching blood requests:', err);
      }
    };
    fetchRequests();
  }, []);

  return (
   <>
    <div className="md:p-8 md:mx-auto">
      {error && <p className="text-red-500">{error}</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="py-3 px-4 bg-gray-100 text-left">Address</th>
              <th className="py-3 px-4 bg-gray-100 text-left">Phone</th>
              <th className="py-3 px-4 bg-gray-100 text-left">Status</th>
              <th className="py-3 px-4 bg-gray-100 text-left">Blood Group</th>
              <th className="py-3 px-4 bg-gray-100 text-left">Unit</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {requests.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-3 px-4 text-center">
                  No requests available.
                </td>
              </tr>
            ) : (
              requests.map((request) => (
                <TableRow key={request.id} address={request.address} phone={request.phone} status={request.status} unit={request.unit} blood={request.blood}/>
              ))
              
            )}
          </tbody>
        </table>
      </div>
    </div>

     
   </>
  );
};

export default BloodRequestsTable
