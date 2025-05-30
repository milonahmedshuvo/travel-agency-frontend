/* eslint-disable @next/next/no-html-link-for-pages */
// components/Navbar.js
'use client'
import React, { useState } from 'react';
import logo from '../../../assets/logo/navlogo.png'
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  

  return (
    <nav className="bg-[#FFFFFF] text-[#676767] p-6 custom-container">

      <div className=" flex justify-between items-center">
        {/* Left Side: Logo */}
        <div className="text-2xl font-semibold">
          {/* <a href="/">Logo</a> */}
          {/* https://nyc3.digitaloceanspaces.com/smtech-space/9K_c6tbvneRMSIvzQrbEA-img4.jpg */}
          <Image src={logo} width={500} height={500} alt='logo' className='w-[175px] lg:w-[100px] xl:w-[175px]' />
        </div>

        {/* Right Side: Content and Buttons */}
        <div className="flex items-center space-x-6">
          {/* Content (can be links or any text) */}
          <div className="hidden lg:flex space-x-3 xl:space-x-8">
            <a href="/" className="text-[#676767] text-[18px] font-normal">Home</a>
            <a href="/toursExperience" className="text-[#676767] text-[18px] font-normal">Tours & Experience</a>
            <a href="/acommodation" className="text-[#676767] text-[18px] font-normal">Accommodations</a>
            <Link href="/blog" className="text-[#676767] text-[18px] font-normal">Blog</Link>
            <Link href="/aboutus" className="text-[#676767] text-[18px] font-normal">About Us</Link> 
            <Link href="/dashboard" className="text-[#676767] text-[18px] font-normal">Dashboard</Link>
          </div>

          {/* Sign Up and Login Buttons */}
          <div className="hidden lg:flex space-x-2.5 xl:space-x-4">
            <Link href='/signup'> 
            <button
               
              className="text-[#38B6FF] border border-[#E0E0E0] px-[36px] py-[12px] rounded-sm transition duration-300 font-semibold cursorpo"
            >
              Sign Up
            </button>
            </Link>
            <Link
              href="/login"
              className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] px-[36px] py-[12px] text-white  rounded-sm transition duration-300 font-semibold"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8 text-gray-500"
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
        <div className="lg:hidden bg-gray-100 text-white py-8 px-4  mt-4 flex flex-col space-y-5 rounded ">
            <a href="/" className="text-[#676767] text-[18px] font-normal block">Home</a>
            <a href="/toursExperience" className="text-[#676767] text-[18px] font-normal block">Tours & Experience</a>
            <a href="/services" className="text-[#676767] text-[18px] font-normal block">Accommodations</a>
            <a href="/contact" className="text-[#676767] text-[18px] font-normal block">Blog</a>
            <a href="/" className="text-[#676767] text-[18px] font-normal block">About Us</a> 

            <div className="flex flex-col space-y-3.5 xl:space-x-4">
            <button className="text-[#38B6FF] border border-[#E0E0E0] px-[36px] py-[12px] rounded-sm transition duration-300 font-semibold cursorpo"
            >
              Sign Up
            </button>
            <a
              href="/login"
              className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] px-[36px] py-[12px] text-white  rounded-sm transition duration-300 font-semibold text-center"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
