import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r  from-red-800 to-red-800 text-white py-12 mt-16">
      <div className="max-w-screen-xl mx-auto sm:px-8">
        <div className="grid grid-cols-1 mx-2 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white">About Us</h3>
            <p className="mt-4 text-sm text-gray-200">
              Blood Donation Project aims to connect donors and recipients efficiently, saving lives with each donation.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="./about" className="text-gray-200 hover:text-red-300 transition duration-200">About</a>
              </li>
              <li>
                <a href="./donate" className="text-gray-200 hover:text-red-300 transition duration-200">Donate Now</a>
              </li>
              <li>
                <a href="./contact" className="text-gray-200 hover:text-red-300 transition duration-200">Contact</a>
              </li>
              <li>
                <a href="./request" className="text-gray-200 hover:text-red-300 transition duration-200">Reqeust For Blood</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white">Contact Us</h3>
            <p className="mt-4 text-sm text-gray-200">Email: mniloy695@gmail.com</p>
            <p className="mt-2 text-sm text-gray-200">Phone: +088 1827 455 5942</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-semibold text-white">Follow Us</h3>
            <div className="mt-4 space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100042914836541" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-300 transition duration-200">
                <i className="fab fa-facebook-square fa-2x"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-300 transition duration-200">
                <i className="fab fa-twitter-square fa-2x"></i>
              </a>
              <a href="https://www.instagram.com/n_i_l_o_y_69_5/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-300 transition duration-200">
                <i className="fab fa-instagram-square fa-2x"></i>
              </a>
            </div>
          </div>

        </div>
        
        {/* Footer Bottom */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-200">&copy; 2025 Blood Donation Project. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
