import React, { useInsertionEffect, useState ,useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../componets/Footer';
import Navbar from '../componets/Navbar';
import LoginImage from  '../assets/images/login.jpg'


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [token,settoken]=useState('')
  const navigate=useNavigate('')

  useEffect(() => {
    if (localStorage.getItem('token') && localStorage.getItem('token')!=='undefined') {
      navigate('/');
    }
  }, [navigate]); 
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    setLoading(true);
    setError('');
  

    try {
      // Make a POST request to the backend
     
        const response = await axios.post('http://127.0.0.1:8000/account/login/', { username, password } ,
        {
          headers: {
            'Content-Type':'application/json',
          },
        }
        );
        
      // Handle successful login
      if (response.data.error) {
        setError(response.data.error);
      } else {
        settoken(response.data.token);  // Set token in state

        // Save the token in localStorage immediately after receiving it
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user_id',response.data.user_id)
        localStorage.setItem('is_staff',response.data.is_staff) 
        console.log(response.data)
        localStorage.setItem('blood_group',response.data.blood_group) 
        // Navigate to the home page (or any other route)
        navigate('/');
      }
       
     
      // Handle successful response, e.g. redirect, show success message, etc.
    } catch (err) {
      setError('Login failed. Please try again.');
      
    } finally {
      setLoading(false);
    }
  };

  return (
 <>
 < Navbar/>
 <div className="flex  justify-center items-center bg-[#ffff] m-2">
      <div className="flex flex-col md:flex-row w-full items-center rounded-lg shadow-lg overflow-hidden">
        {/* Left side - Image */}
       
        <img className='md:w-[40%] p-8 w-[80%] m-4' src={LoginImage } alt="Login image" />
        
        
        {/* Right side - Form */}
        <div className="flex-1 bg-white p-6 md:p-10 w-full">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            {/* Username Input */}
            <div className="mb-6">
              <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
                placeholder="Enter your username" 
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                placeholder="Enter your password" 
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              />
            </div>

            {/* Error Message */}
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

            {/* Submit Button */}
            <button 
              type="submit" 
              className={`w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors ${loading && 'opacity-50 cursor-not-allowed'}`}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <div className="text-center mt-4 text-sm text-gray-600">
              <p>Don't have an account?  <Link to="/register" className="text-red-500 hover:text-red-600"> Sign Up</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div> 
    <Footer/>
  </>
  );
};

export default LoginForm;
