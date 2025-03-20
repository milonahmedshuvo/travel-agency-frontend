/* eslint-disable @next/next/no-html-link-for-pages */
// components/Navbar.js
'use client'
import React, { useState } from 'react';
import logo from '../../../assets/logo/navlogo.png'
import Image from 'next/image';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  return (
    <nav className="bg-[#FFFFFF] text-[#676767] p-6 custom-container">

      <div className=" flex justify-between items-center">
        {/* Left Side: Logo */}
        <div className="text-2xl font-semibold">
          {/* <a href="/">Logo</a> */}
          <Image src={logo} width={500} height={500} alt='logo' className='w-[175px]' />
        </div>

        {/* Right Side: Content and Buttons */}
        <div className="flex items-center space-x-6">
          {/* Content (can be links or any text) */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-[#676767] text-[18px] font-normal">Home</a>
            <a href="/toursExperience" className="text-[#676767] text-[18px] font-normal">Tours & Experience</a>
            <a href="/services" className="text-[#676767] text-[18px] font-normal">Accommodations</a>
            <a href="/contact" className="text-[#676767] text-[18px] font-normal">Blog</a>
            <a href="/" className="text-[#676767] text-[18px] font-normal">About Us</a> 
          </div>

          {/* Sign Up and Login Buttons */}
          <div className="hidden md:flex space-x-4">
            <button
              
              className="text-[#38B6FF] border border-[#E0E0E0] px-[36px] py-[12px] rounded-sm transition duration-300 font-semibold cursorpo"
            >
              Sign Up
            </button>
            <a
              href="/login"
              className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] px-[36px] py-[12px] text-white  rounded-sm transition duration-300 font-semibold"
            >
              Login
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-700 text-white p-4">
          <a href="/" className="block py-2 ">Home</a>
          <a href="/about" className="block py-2 ">About</a>
          <a href="/services" className="block py-2 ">Services</a>
          <a href="/contact" className="block py-2 ">Contact</a>
          <a href="/signup" className="block py-2 ">Sign Up</a>
          <a href="/login" className="block py-2 ">Login</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
