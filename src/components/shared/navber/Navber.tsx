/* eslint-disable @next/next/no-html-link-for-pages */
// components/Navbar.js
"use client";
import React, { useState } from "react";
import logo from "../../../assets/logo/navlogo.png";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown";
import { BedDouble, LayoutDashboard, LogOut,  MapPinned, User } from "lucide-react";
import avater from "../../../assets/logo/img1.jpg";
import { logout } from "@/redux/slice/auth/authSlice";
import { useRouter } from "next/navigation";
import { GoogleTranslate } from "@/components/google-translator";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch()
  const router = useRouter()


  // console.log("login user", user);

  const adminLinks = [
    { href: "/dashboard", text: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { href: "/dashboard/admin/adminProfile", text: "Profile", icon: <User size={16} /> },
  ];

  const userLinks = [
    { href: "/customer/profile", text: "Profile", icon: <User size={16} /> },
    { href: "/customer/myTripBookings", text: "Trip Bookings", icon: <MapPinned size={16} /> },
    { href: "/customer/myHotelBookings", text: "Hotel Bookings", icon: <BedDouble size={16} /> },
  ];


//  Logout functionality 
const handleLogout = async() => {
    dispatch(logout())

    // await logOut({}).unwrap
     localStorage.removeItem('token')
     localStorage.removeItem('refreshToken')  
     router.push("/");
  }



  return (
    <nav className="bg-[#FFFFFF] text-[#676767] px-6 custom-container-nav">
      <div className=" flex justify-between items-center">
        {/* Left Side: Logo */}
        <div className="text-2xl font-semibold">
          <Image
            src={logo}
            width={500}
            height={500}
            alt="logo"
            className="w-[175px] lg:w-[100px] xl:w-[175px] h-[140px]"
          />
        </div>

        {/* Right Side: Content and Buttons */}
        <div className="flex items-center space-x-6">
          {/* Content (can be links or any text) */}
          <div className="hidden lg:flex space-x-3 xl:space-x-8 items-center">
            <Link href="/" className="text-[#676767] text-[18px] font-normal">
              Home
            </Link>
            <Link
              href="/toursExperience"
              className="text-[#676767] text-[18px] font-normal"
            >
              Tours & Experience
            </Link>
            <Link
              href="/acommodation"
              className="text-[#676767] text-[18px] font-normal"
            >
              Accommodations
            </Link>
            <Link
              href="/blog"
              className="text-[#676767] text-[18px] font-normal"
            >
              Blog
            </Link>
            <Link
              href="/aboutus"
              className="text-[#676767] text-[18px] font-normal"
            >
              About Us
            </Link>

            <div>
              <GoogleTranslate />
            </div>
          </div>

          

          <div className="hidden md:flex items-center gap-4">
            {
              user ? (<DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 border border-white">
                  {/* Avatar or Icon Here */}
                  <Image
                    className="h-[50px] w-[50px] rounded-full"
                    src={avater}
                    width={500}
                    height={200}
                    alt="user"
                  />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56 bg-white shadow-lg rounded-md">
                {(user?.role === "SUPER_ADMIN" || user?.role === "ADMIN"
                  ? adminLinks
                  : userLinks
                ).map((link) => (
                  <Link href={link.href} key={link.href} passHref>
                    <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 text-lg">
                      {link.text}
                      <DropdownMenuShortcut>{link.icon}</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </Link>
                ))}

                <DropdownMenuItem
                    className="cursor-pointer hover:bg-gray-100 text-lg text-red-500"
                    onClick={handleLogout}
                  >
                    Log Out
                    <DropdownMenuShortcut><LogOut size={16} /></DropdownMenuShortcut>
                  </DropdownMenuItem>
              
              </DropdownMenuContent>
            </DropdownMenu>) : (<Link
              href="/login"
              className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] px-[36px] py-[12px] text-white  rounded-sm transition duration-300 font-semibold"
            >
              Login
            </Link>)
            }
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
          <Link href="/" className="text-[#676767] text-[18px] font-normal block">
            Home
          </Link>
          <Link
            href="/toursExperience"
            className="text-[#676767] text-[18px] font-normal block"
          >
            Tours & Experience
          </Link>
          <Link
            href="/services"
            className="text-[#676767] text-[18px] font-normal block"
          >
            Accommodations
          </Link>
          <Link
            href="/contact"
            className="text-[#676767] text-[18px] font-normal block"
          >
            Blog
          </Link>
          <Link href="/" className="text-[#676767] text-[18px] font-normal block">
            About Us
          </Link>

          
           {/* Show the Profile it   */}
           <div className=" md:hidden sm:flex items-center gap-4 ">
            {
              user ? (<DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className=" rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 border border-white">
                  {/* Avatar or Icon Here */}
                  <Image
                    className="h-[50px] w-[50px] rounded-full"
                    src={avater}
                    width={500}
                    height={200}
                    alt="user"
                  />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56 bg-white shadow-lg rounded-md">
                {(user?.role === "SUPER_ADMIN" || user?.role === "ADMIN"
                  ? adminLinks
                  : userLinks
                ).map((link) => (
                  <Link href={link.href} key={link.href} passHref>
                    <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 text-lg">
                      {link.text}
                      <DropdownMenuShortcut>{link.icon}</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </Link>
                ))}

                <DropdownMenuItem
                    className="cursor-pointer hover:bg-gray-100 text-lg text-red-500"
                    onClick={handleLogout}
                  >
                    Log Out
                    <DropdownMenuShortcut><LogOut size={16} /></DropdownMenuShortcut>
                  </DropdownMenuItem>
              
              </DropdownMenuContent>
            </DropdownMenu>) : (<Link
              href="/login"
              className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] px-[36px] py-[12px] text-white  rounded-sm transition duration-300 font-semibold"
            >
              Login
            </Link>)
            }
          </div>




        </div>
      )}
    </nav>
  );
};

export default Navbar;
