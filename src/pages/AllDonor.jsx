import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';

const Donors = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch donors data from the API
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/donate/request/')
      .then(response => {
        setDonors(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch(err => {
        setError('Failed to fetch donor data');
        setLoading(false);
      });
  }, []);

  // Handle status change for each donor
  const handleStatusChange = (id, newStatus) => {
    axios.patch(`http://127.0.0.1:8000/donate/request/${id}/`, { status: newStatus })
      .then(response => {
        // Update the status locally in the donors array
        setDonors(donors.map(donor =>
          donor.id === id ? { ...donor, status: newStatus } : donor
        ));
        console.log('Status updated:', response.data);
      })
      .catch(err => {
        console.error('Error updating status:', err);
      });
  };

  // If loading, show a loading indicator
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there's an error, show the error message
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-gray-900 p-6">
        <h1 className="text-3xl font-semibold font-serif text-gray-900 m-4 mb-6">Donors Request</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto  m-4 border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-4 text-left border-b">User_Id</th>
                <th className="py-3 px-4 text-left border-b">Address</th>
                <th className="py-3 px-4 text-left border-b">Phone</th>
                <th className="py-3 px-4 text-left border-b">Blood Type</th>
                <th className="py-3 px-4 text-left border-b">Status</th>
                
              </tr>
            </thead>
            <tbody>
              {donors.map(donor => (
                <tr key={donor.id} className="hover:bg-gray-100">
                  <td className="py-3 px-4 border-b">{donor.user}</td>
                  <td className="py-3 px-4 border-b">{donor.address}</td>
                  <td className="py-3 px-4 border-b">{donor.phone}</td>
                  <td className="py-3 px-4 border-b">{donor.blood}</td>

                  {/* Status Dropdown */}
                  <td className="py-3 px-4 border-b">
                    <select
                      value={donor.status || ''}
                      onChange={(e) => handleStatusChange(donor.id, e.target.value)}
                      className="border rounded p-2"
                    >
                      <option value="">Select Status</option>
                      <option value="Pending">Pending</option>
                      <option value="Accepted">Accepted</option>
                      <option value="Rejected">Rejected</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>

                  {/* Actions Column */}
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Donors;
