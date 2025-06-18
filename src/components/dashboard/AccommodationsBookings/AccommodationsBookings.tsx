"use client";

import { useState } from "react";
import { Search, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useGetAllRoomBookingsQuery } from "@/redux/api/hotelPackages/hotelPackegesApi";
import { TRoomBooking } from "@/components/lib/types";
import Loading from "@/components/shared/loading/Loading";
import Link from "next/link";

export default function AccommodationsBookings() {
  const { data, isLoading } = useGetAllRoomBookingsQuery("");
  const [searchTerm, setSearchTerm] = useState("");

  console.log({ searchTerm });

  const [dateFilter, setDateFilter] = useState("Today");
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  // const [showEntriesDropdown, setShowEntriesDropdown] = useState(false)
  // const [entriesPerPage, setEntriesPerPage] = useState("8")

  const dateOptions = [
    "Today",
    "Yesterday",
    "This Week",
    "This Month",
    "Custom Range",
  ];

  const filterRoomBooking = data?.data?.data?.filter(
    (booking: TRoomBooking) =>
      booking?.hotelPackage?.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      booking.roomType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dateFormated = (date: string) => {
    const formatedDate = new Date(date);
    const stringFormatedDated = formatedDate.toLocaleDateString();
    return stringFormatedDated;
  };


  if (isLoading) {
    return <Loading/>;
  }




  return (
    <div className="space-y-6 ">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-[#101010] text-[20px]">Accommodations Bookings</h1>
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search name, package, etc"
              className="pl-8 w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Custom Select Dropdown */}
          <div className="relative w-full sm:w-36">
            <button
              type="button"
              className="flex items-center justify-between w-full h-10 px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setShowDateDropdown(!showDateDropdown)}
            >
              <span>{dateFilter}</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>

            {showDateDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                <ul className="py-1 max-h-60 overflow-auto">
                  {dateOptions.map((option) => (
                    <li
                      key={option}
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setDateFilter(option);
                        setShowDateDropdown(false);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Table - Hidden on mobile */}
      <div className="hidden md:block rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Name</th>
              <th className="px-4 py-3 text-left font-medium">Booking Code</th>
              <th className="px-4 py-3 text-left font-medium">Room Type</th>
              <th className="px-4 py-3 text-left font-medium">Check-In</th>
              <th className="px-4 py-3 text-left font-medium">Check-Out</th>
              <th className="px-4 py-3 text-left font-medium">Price</th>
              <th className="px-4 py-3 text-left font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filterRoomBooking?.map((booking: TRoomBooking, index: number) => (
              <tr key={index} className="bg-white">
                <td className="px-4 py-3">{booking?.hotelPackage?.title}</td>
                <td className="px-4 py-3">{"bookingCode N/A"}</td>
                <td className="px-4 py-3">{booking?.roomType}</td>
                <td className="px-4 py-3">
                  {dateFormated(booking?.checkInDate)}{" "}
                </td>
                <td className="px-4 py-3">
                  {dateFormated(booking?.checkOutDate)}
                </td>
                <td className="px-4 py-3">{booking?.hotelPackage?.price}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-600 text-white">
                    {/* {booking.status} */} Confirmed
                  </span>
                </td>

                <td className="px-4 py-3">
                  <Link href={`/dashboard/hotelBooking/${booking.id}`}>
                      <button className="border border-gray-400 px-2 py-0.5 rounded cursor-pointer">View</button>
                    </Link>
                  </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards - Shown only on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-4">
        {filterRoomBooking?.map((booking: TRoomBooking, index: number) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">
                  {booking?.hotelPackage?.title}
                </h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-600 text-white">
                  {/* {booking.status} */} Confirmed
                </span>
              </div>
            </div>
            <div className="px-4 py-3 space-y-2 text-sm">
              <div className="grid grid-cols-2 gap-1">
                <span className="text-gray-500">Booking Code:</span>
                <span>{"N/A"}</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <span className="text-gray-500">Room Type:</span>
                <span>{booking?.roomType}</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <span className="text-gray-500">Check-In:</span>
                <span>{dateFormated(booking?.checkInDate)}</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <span className="text-gray-500">Check-Out:</span>
                <span>{dateFormated(booking?.checkOutDate)}</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <span className="text-gray-500">Price:</span>
                <span className="font-medium">
                  {booking?.hotelPackage?.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-end items-center gap-4">
        {/* <div className="text-sm text-gray-500">
          Showing{" "}
          <div className="relative inline-block w-16 mx-1">
            <button
              type="button"
              className="flex items-center justify-between w-full h-8 px-2 py-1 text-xs border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setShowEntriesDropdown(!showEntriesDropdown)}
            >
              <span>{entriesPerPage}</span>
              <ChevronDown className="h-3 w-3 text-gray-500" />
            </button>

            {showEntriesDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                <ul className="py-1 max-h-60 overflow-auto">
                  {["8", "16", "24", "32"].map((option) => (
                    <li
                      key={option}
                      className="px-2 py-1 text-xs hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setEntriesPerPage(option)
                        setShowEntriesDropdown(false)
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>{" "}
          out of 286
        </div> */}

        <div className="flex items-center space-x-2">
          <button
            className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-300 bg-white text-gray-400 cursor-not-allowed"
            disabled
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </button>

          <button className="inline-flex items-center justify-center h-8 min-w-[2rem] rounded-md border border-gray-300 bg-blue-600 text-white hover:bg-blue-700">
            1
          </button>

          <button className="inline-flex items-center justify-center h-8 min-w-[2rem] rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
            2
          </button>

          <button className="inline-flex items-center justify-center h-8 min-w-[2rem] rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
            3
          </button>

          <span className="mx-1">...</span>

          <button className="inline-flex items-center justify-center h-8 min-w-[2rem] rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
            15
          </button>

          <button className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </button>
        </div>
      </div>
    </div>
  );
}
