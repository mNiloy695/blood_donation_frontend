import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import BloodLogo from '../assets/images/logo1.png';
import axios from 'axios';
import profileImage from '../assets/images/avater.png'
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate
  const is_staff = localStorage.getItem('is_staff');

  // Handle logout
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      const csrfToken = document.cookie.match(/csrftoken=([^;]+)/)?.[1]; 
      if (token) {
        const response = await axios.post('https://blood-donation-backend-v3bp.vercel.app/account/logout/', {}, {
          headers: {
            'Authorization': `Token ${token}`,
            'X-CSRFToken': csrfToken, // Pass token in Authorization header
          }
        });

        if (response.status === 200) {
          // Successfully logged out, clear token and navigate to login page
          localStorage.removeItem('token');
          localStorage.removeItem('user_id');
          localStorage.removeItem('is_staff');
          localStorage.removeItem('blood_group');
          navigate('/login'); // Redirect to login page
        } else {
          console.error('Logout failed:', response.data);
        }
      }
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };

  // Check if the token exists when the component mounts
  const token = localStorage.getItem('token');
  const isStaff = is_staff === 'true'; // Convert string 'true' to boolean

  // Redirect to dashboard if admin and logged in
  // useEffect(() => {
  //   if (isStaff && token) {
  //     navigate('/dashboard'); // Redirect to dashboard if the user is an admin
  //   }
  // }, [isStaff, token, navigate]);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full sticky z-10 top-0">
      {/* Render for non-admin users */}
      {is_staff !== 'true' && (
        <>
          {/* Large device */}
          <div className="hidden md:flex justify-between gap-2 shadow-md bg-[#ffffff] p-8 text-center font-[Helvetica Neue, Helvetica, Arial, sans-serif] font-semibold w-full">
            <div>
              <img src={BloodLogo} alt="Logo" />
            </div>
            <div className="flex mx-2 gap-4">
              
              <Link to="/" className="hover:bg-red-400 hover:px-2 flex items-center">
                Home
              </Link>
              <Link to="/doners" className="hover:bg-red-400 bg-red-500 px-4 rounded-md hover:px-4 flex items-center">
                Search Donors
              </Link>
              <Link to="/about" className="hover:bg-red-400 hover:px-2 flex items-center">
                About
              </Link>
              <Link to="/campaign" className="hover:bg-red-400 hover:px-2 flex items-center">
                Campaign
              </Link>
              <Link to="/blog" className="hover:bg-red-400 hover:px-2 flex items-center">
                Blog
              </Link>
              <Link to="/contact" className="hover:bg-red-400 hover:px-2 flex items-center">
                Contact
              </Link>
              <Link to="/donate" className="hover:bg-red-400 hover:px-2 flex items-center">
                Donate
              </Link>
              <Link to="/request" className="hover:bg-red-400 hover:px-2 flex items-center">
                Request
              </Link>
            </div>

            {/* Render logout or login/signup links based on token presence */}
            {!token ? (
              <div className="flex gap-4">
                <Link to="/login" className="hover:bg-slate-200 p-2 rounded-md">
                  Login
                </Link>
                <Link to="/register" className="hover:bg-slate-200 rounded-md p-2">
                  SignUp
                </Link>
              </div>
            ) : (
              <div className="flex gap-4">
                {!isStaff? <Link to='/notification' className="hover:bg-red-400 w-full mt-2 rounded-md hover:px-4 text-start">
                  <i class="fa-solid fa-bell"></i>
                  </Link>:" "
                  }
                <Link onClick={handleLogout} className="hover:bg-red-400 bg-red-500 px-4 rounded-md hover:px-4 flex items-center">
                  Logout
                </Link>
                {isStaff ? (
                  <Link to="/dashboard" className="hover:bg-red-600 bg-red-700 rounded-md p-2">
                    Dashboard
                  </Link>
                ) : (
                  <Link to="/profile" className="hover:bg-slate-200 rounded-md p-2">
                   <i className="fa-solid fa-user"></i>
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Mobile and Medium device */}
          <div className="flex md:hidden justify-between gap-2 shadow-md bg-[#ffffff] p-8 text-center font-[Helvetica Neue, Helvetica, Arial, sans-serif] font-semibold w-full items-center">
            <div>
              <img src={BloodLogo} alt="Logo" />
            </div>
            <button onClick={toggleMobileMenu}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden flex flex-col items-center bg-[#ffffff] p-4 shadow-md">
              <Link to="/" className="hover:bg-red-400 hover:px-2 py-2 w-full text-start">
                Home
              </Link>
              <Link to="/about" className="hover:bg-red-400 hover:px-2 py-2 w-full text-start">
                About
              </Link>
              <Link to="/campaign" className="hover:bg-red-400 hover:px-2 py-2 w-full text-start">
                Campaign
              </Link>
              <Link to="/blog" className="hover:bg-red-400 hover:px-2 py-2 w-full text-start">
                Blog
              </Link>
              <Link to="/contact" className="hover:bg-red-400 hover:px-2 py-2 w-full text-start">
                Contact
              </Link>
              <Link to="/donate" className="hover:bg-red-400 hover:px-2 py-2 w-full text-start">
                Donate
              </Link>
              <Link to="/request" className="hover:bg-red-400 hover:px-2 py-2 w-full text-start">
                Request
              </Link>
              {!token ? (
                <>
                  <Link to="/login" className="hover:bg-slate-200 p-2 rounded-md w-full text-start mt-2">
                    Login
                  </Link>
                  <Link to="/register" className="hover:bg-slate-200 p-2 rounded-md w-full text-start mt-2">
                    SignUp
                  </Link>
                </>
              ) : (
                <>
                {!isStaff? <Link to='/notification' className="hover:bg-red-400 w-full mt-2 rounded-md hover:px-4 text-start">
                  <i className="fa-solid fa-bell"></i>
                  </Link>:" "
                  }
                
                  <Link onClick={handleLogout} className="hover:bg-red-400 w-full mt-2 rounded-md hover:px-4 text-start">
                    Logout
                  </Link>
                  <Link to={isStaff ? "/dashboard" : "/profile"} className="hover:bg-slate-200 mt-2 rounded-md w-full text-start">
                    {isStaff ? "Dashboard" : <i className="fa-solid fa-user"></i>}
                  </Link>
                </>
              )}
            </div>
          )}
        </>
      )}

      {/* Render for admin users */}
      {is_staff === 'true' && (
        <>
          {/* Large device */}
          <div className="hidden md:flex justify-between gap-2 shadow-md bg-[#ffffff] p-8 text-center font-[Helvetica Neue, Helvetica, Arial, sans-serif] font-semibold w-full">
            <div>
              <img src={BloodLogo} alt="Logo" />
            </div>
            <div className="flex mx-2 gap-4">
              <Link onClick={handleLogout} className="hover:bg-red-400 bg-red-500 px-4 rounded-md hover:px-4 flex items-center">
                Logout
              </Link>
              <Link to="/dashboard" className="hover:bg-red-600 bg-red-700 rounded-md p-2">
                Dashboard
              </Link>
            </div>
          </div>

          {/* Mobile and Medium device */}
          <div className="flex md:hidden justify-between gap-2 shadow-md bg-[#ffffff] p-8 text-center font-[Helvetica Neue, Helvetica, Arial, sans-serif] font-semibold w-full items-center">
            <div>
              <img src={BloodLogo} alt="Logo" />
            </div>
            <button onClick={toggleMobileMenu}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden flex flex-col items-center bg-[#ffffff] p-4 shadow-md">
              {!isStaff? <Link to='/notification' className="hover:bg-red-400 w-full mt-2 rounded-md hover:px-4 text-start">
                <i className="fa-solid fa-bell"></i>
                  </Link>:" "
                  }
              <Link onClick={handleLogout} className="hover:bg-red-400 w-full mt-2 rounded-md hover:px-4 text-start">
                Logout
              </Link>
              <Link to="/dashboard" className="hover:bg-red-600 bg-red-700 rounded-md p-2 w-full text-start">
                Dashboard
              </Link>
            </div>
          )}
        </>
      )}
    </nav>
  );
};

export default Navbar;
