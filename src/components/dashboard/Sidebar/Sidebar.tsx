import React from 'react'
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




type SidebarProps = {
    collapsed: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  };



const Sidebar = ({collapsed, setCollapsed}: SidebarProps) => {

    

    const menuItems = [
      { icon: <LayoutGrid size={20} />, label: "Overview", key: "1", path: '/dashboard/content' },
      { icon: <Users size={20} />, label: "Traveler List", key: "2", path: '/dashboard/travelerList'},
      { icon: <Car size={20} />, label: "Trip Booking", key: "3", path: '/dashboard/tripBooking'},
      { icon: <Home size={20} />, label: "Hotel Booking", key: "4", path: '/dashboard/hotelBooking' },
      { icon: <Gift size={20} />, label: "Tour Packages", key: "5" },
      { icon: <Home size={20} />, label: "Hotel Packages", key: "6" },
      { icon: <Mail size={20} />, label: "Email Marketing", key: "7" },
      { icon: <XCircle size={20} />, label: "Cancel Package", key: "8" },
      { icon: <MessageSquare size={20} />, label: "Feedback", key: "9" },
      { icon: <FileText size={20} />, label: "Blogs", key: "10", active: true },
      { icon: <HeadphonesIcon size={20} />, label: "Support", key: "11" },
    ]





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
        <div className="p-4 h-20 flex items-center border-b border-gray-200">
          <div className="text-4xl font-bold text-[#FF8A65]">LOGO</div>
        </div>





        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {menuItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-md text-[20px] text-[#475467] font-[400]  transition-colors ${
                    item.active ? "bg-blue-500 text-white" : "text-[#475467] font-[400] hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t">
          <button className="flex items-center gap-3 px-4 py-2.5 w-full text-left text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
            <LogOut size={20} />
            <span>Log Out</span>
          </button>
        </div>
      </div>



    </div>
  )
}

export default Sidebar