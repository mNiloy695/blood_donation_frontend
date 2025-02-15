
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
 const MyDonation = () => {
 
  const [error, setError] = useState('');
  const [myRequest,setMyRequest]=useState([])

  // Fetch the blood requests from the API
  useEffect(() => {

    const user=localStorage.getItem('user_id');
    const fetchRequests = async () => {
      try {
       

        //  fetch my all request for blood
        const myRequestForBlood=await axios.get(`http://127.0.0.1:8000/donate/request/?user_id=${user}`)
        
        setMyRequest(myRequestForBlood.data)
      } catch (err) {
        setError('Error fetching blood requests');
        console.error('Error fetching blood requests:', err);
      }
    };
    fetchRequests();
  }, []);

  return (
   <>
    <div className="md:p-8 mt-5 md:mx-auto">
      <h1 className='m-5 flex items-center justify-center font-semibold'>Your Request's For Donate Blood</h1>
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
            {myRequest.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-3 px-4 text-center">
                  No requests available.
                </td>
              </tr>
            ) : (
              myRequest.map((request) => (
                <TableRow track="donate" key={request.id} id={request.id} address={request.address} phone={request.phone} status="Cancelled" unit={request.unit} blood={request.blood}/>
              ))
              
            )}
          </tbody>
        </table>
      </div>
    </div>

     
   </>
  );
};



export default MyDonation 