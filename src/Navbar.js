import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="bg-customPink flex items-center justify-between p-4 w-full mt-10">
      <div className="flex items-center space-x-4">
        <a href="/" className="text-white text-lg">Explore</a>
        <a href="/" className="text-white text-lg">Services</a>
        <a href="/" className="text-white text-lg">Blogs</a>
        <a href="/" className="text-white text-lg">About Us</a>
      </div>
      {/* <div className="flex-grow flex justify-center">
        <img src="/meetmymatelogo.jpg" alt="Logo" className="h-24" />
      </div> */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input type="text" className="rounded-full px-4 py-2" placeholder="Search" />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m2.7-6.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"></path>
            </svg>
          </button>
        </div>
        <div>
          <img src="/path/to/profile-pic.png" alt="Profile" className="w-8 h-8 rounded-full" />
        </div>
        <div>
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M9 16h6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
