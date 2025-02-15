import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white text-gray-900 flex">
      {/* Sidebar */}
      <div className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-1/4 w-4/5 bg-red-600 p-5 fixed  inset-0 z-1 mt-5 md:mt-1 lg:relative transition-all`}>
        <h2 className="text-white text-2xl mt-5 font-bold mb-8">Blood Donation Admin</h2>
        <ul className="text-white space-y-4">
          <li className="hover:bg-red-700 p-2 rounded">
            <a href="#">Dashboard</a>
          </li>
          <li className="hover:bg-red-700 p-2 rounded">
            <Link to="/all_donate_request">Donors</Link>
          </li>
          <li className="hover:bg-red-700 p-2 rounded">
            <Link to='/all_recive_request'>Requests</Link>
          </li>
          <li className="hover:bg-red-700 p-2 rounded">
            <a href="#">Reports</a>
          </li>
          <li className="hover:bg-red-700 p-2 rounded">
            <a href="#">Settings</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={`flex-1 p-8 space-y-6 lg:ml-1/5 lg:pl-8 ${isSidebarOpen ? 'ml-0' : 'ml-20'} transition-all`}>
        <div className="lg:hidden mb-4">
          {/* Hamburger Button */}
          <button
            onClick={toggleSidebar}
            className="text-gray-900 p-2 bg-red-600 text-white rounded-lg"
          >
            {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
          </button>
        </div>

        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Dashboard</h1>

        {/* Stats Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-red-600 text-white p-6 rounded-lg shadow-md transition-all hover:bg-red-700">
            <h3 className="text-2xl">Total Donors</h3>
            <p className="text-4xl mt-2">500</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md transition-all hover:bg-gray-300">
            <h3 className="text-2xl">Pending Requests</h3>
            <p className="text-4xl mt-2">15</p>
          </div>
          <div className="bg-green-600 text-white p-6 rounded-lg shadow-md transition-all hover:bg-green-700">
            <h3 className="text-2xl">Successful Donations</h3>
            <p className="text-4xl mt-2">400</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md transition-all hover:bg-gray-300">
            <h3 className="text-2xl">Reviews</h3>
            <p className="text-4xl mt-2">150</p>
          </div>
          <div className="bg-green-600 text-white p-6 rounded-lg shadow-md transition-all hover:bg-green-700">
            <h3 className="text-2xl">Users</h3>
            <p className="text-4xl mt-2">4000</p>
          </div>
          <div className="bg-green-600 text-white p-6 rounded-lg shadow-md transition-all hover:bg-green-700">
            <h3 className="text-2xl">Requests</h3>
            <p className="text-4xl mt-2">40</p>
          </div>
        </div>

        {/* Additional Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card Example */}
          <div className="bg-white border rounded-lg shadow-lg p-6 transition-all hover:shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800">Upcoming Events</h3>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maiores omnis quod minus necessitatibus commodi </p>
          </div>

          <div className="bg-white border rounded-lg shadow-lg p-6 transition-all hover:shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800">Recent Activities</h3>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dignissimos deserunt cum atque commodi voluptate .</p>
          </div>

          <div className="bg-white border rounded-lg shadow-lg p-6 transition-all hover:shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800">Notifications</h3>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam in consequatur similique saepe molestiae q.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Dashboard;
