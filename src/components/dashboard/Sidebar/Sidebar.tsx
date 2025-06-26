"use client";
import React, { useState } from "react";
import {
  LayoutGrid,
  Users,
  Car,
  Home,
  Gift,
  Mail,
  XCircle,
  MessageSquare,
  FileText,
  HeadphonesIcon,
  LogOut,
  MenuIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../../assets/logo/navlogo.png'
import { useAppDispatch } from "@/redux/hook";
import { useRouter } from "next/navigation";
import { logout } from "@/redux/slice/auth/authSlice";


type SidebarProps = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ collapsed, setCollapsed }: SidebarProps) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [activeItem, setActiveItems] = useState("Overview");
  const menuItems = [
    {
      icon: <LayoutGrid size={20} />,
      label: "Overview",
      key: "1",
      path: "/dashboard",
    },
    {
      icon: <Users size={20} />,
      label: "Traveler List",
      key: "2",
      path: "/dashboard/travelerList",
    },
    {
      icon: <Users size={20} />,
      label: "Vehicle List",
      key: "3",
      path: "/dashboard/vehiclelist",
    },
    {
      icon: <Car size={20} />,
      label: "Trip Booking",
      key: "4",
      path: "/dashboard/tripBooking",
    },
    {
      icon: <Home size={20} />,
      label: "Hotel Booking",
      key: "5",
      path: "/dashboard/hotelBooking",
    },
    {
      icon: <Gift size={20} />,
      label: "Tour Packages",
      key: "6",
      path: "/dashboard/tourPackages",
    },
    {
      icon: <Home size={20} />,
      label: "Hotel Packages",
      key: "7",
      path: "/dashboard/hotelPackages",
    },
    {
      icon: <Mail size={20} />,
      label: "Email Leads",
      key: "8",
      path: "/dashboard/emailLeads",
    },
    {
      icon: <XCircle size={20} />,
      label: "Cancel Package",
      key: "9",
      path: "/dashboard/cancelPackages",
    },
    { icon: <MessageSquare size={20} />, label: "Feedback", key: "9" },
    {
      icon: <FileText size={20} />,
      label: "Blogs",
      key: "10",
      active: true,
      path: "/dashboard/blogs",
    },
    { icon: <HeadphonesIcon size={20} />, label: "Support", key: "11" },
    {
      icon: <XCircle size={20} />,
      label: "Feedback",
      key: "11",
      path: "/dashboard/feedback",
    },
    {
      icon: <XCircle size={20} />,
      label: "Support",
      key: "12",
      path: "/dashboard/support",
    },
  ];

 

  const handleLogout = async() => {
          dispatch(logout())
          // await logOut({}).unwrap
           localStorage.removeItem('token')
           localStorage.removeItem('refreshToken')  
           router.push("/");
        }



  return (
    <div>
      {/* Mobile menu button */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-white p-2 rounded-md shadow-md"
        onClick={() => setCollapsed(!collapsed)}
      >
        <MenuIcon size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 bottom-0 z-40 h-screen bg-white shadow-lg transition-all duration-300 ${
          collapsed ? "-translate-x-full" : "translate-x-0"
        } md:translate-x-0 w-80 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-2 h-20 flex items-center border-b border-gray-200">
          <Link href='/'>           
            <Image
            src={logo}
            width={500}
            height={500}
            alt="logo"
            className="w-[175px] lg:w-[100px] xl:w-[145px] h-[80px]"
          />
          </Link>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-4 px-2">
            {menuItems.map(
              (item) =>
                item.path && (
                  <li key={item.key} onClick={() => setActiveItems(item.label)}>
                    <Link
                      href={item.path}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-md text-[20px] font-[400] transition-colors ${
                        activeItem === item.label
                          ? "bg-blue-500 text-white"
                          : "text-[#475467] hover:bg-gray-100"
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                )
            )}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4">
          <button className="flex items-center gap-3 px-4 py-2.5 w-full text-left text-sm font-medium text-gray-700 bg-gray-100 rounded-md transition-colors cursor-pointer hover:text-red-500" onClick={handleLogout} >
            <LogOut size={20} />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
