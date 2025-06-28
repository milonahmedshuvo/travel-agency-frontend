"use client";

import { useState } from "react";
import { Search, ChevronLeft, ChevronRight,  } from "lucide-react";
import { useGetAllRoomBookingsQuery } from "@/redux/api/hotelPackages/hotelPackegesApi";
import { TRoomBooking } from "@/components/lib/types";
import Loading from "@/components/shared/loading/Loading";
import Link from "next/link";
import { CustomButton } from "@/components/ui/CustomButton";

export default function AccommodationsBookings() {
  const { data, isLoading } = useGetAllRoomBookingsQuery("");
  const [searchTerm, setSearchTerm] = useState("");
  const roomBooking = data?.data?.data || [];
 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8
  const totalPages = Math.ceil(roomBooking?.length / itemsPerPage)

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = roomBooking?.slice(indexOfFirstItem, indexOfLastItem)
 
 









  // const dateOptions = [
  //   "Today",
  //   "Yesterday",
  //   "This Week",
  //   "This Month",
  //   "Custom Range",
  // ];



  const filterRoomBooking = currentItems?.filter(
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
          {/* <div className="relative w-full sm:w-36">
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


          </div> */}
        </div>
      </div>

      {/* Desktop Table - Hidden on mobile */}
      <div className="hidden md:block rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Name</th>
              {/* <th className="px-4 py-3 text-left font-medium">Booking Code</th> */}
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
                {/* <td className="px-4 py-3">{"bookingCode N/A"}</td> */}
                <td className="px-4 py-3">{booking?.roomType}</td>
                <td className="px-4 py-3">
                  {dateFormated(booking?.checkInDate)}{" "}
                </td>
                <td className="px-4 py-3">
                  {dateFormated(booking?.checkOutDate)}
                </td>
                <td className="px-4 py-3">{booking?.hotelPackage?.price}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${booking?.transactions?.status === "SUCCEEDED" && "bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF]"}  ${booking?.transactions?.status === "PROCESSING" && "bg-blue-300 text-blue-500 hover:bg-blue-200"} ${booking?.transactions?.status === "REQUIRES_PAYMENT_METHOD" && "bg-amber-400"} ${booking?.transactions === null && 'bg-red-500 opacity-80' } text-white`}>
                    { booking?.transactions?.status}  
                    {booking?.transactions === null && "Not pay" }
                  </span>
                  {/* {
                    booking?.transactions?.status
                  } */}

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
        {/* PAGINATION  */}
                   <div className="mt-4 flex items-center justify-between">
                            <div className="text-sm text-muted-foreground">
                              {/* Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, tourBookings?.data?.length)} out of {tourBookings?.data?.length} */}
                            </div>
                            <div className="flex items-center space-x-2">
                              <CustomButton
                                variant="outline"
                                size="icon"
                                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                              >
                                <ChevronLeft className="h-4 w-4" />
                              </CustomButton>
                  
                  
                              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                // Show current page and surrounding pages
                                let pageToShow
                                if (totalPages <= 5) {
                                  pageToShow = i + 1
                                } else if (currentPage <= 3) {
                                  pageToShow = i + 1
                                } else if (currentPage >= totalPages - 2) {
                                  pageToShow = totalPages - 4 + i
                                } else {
                                  pageToShow = currentPage - 2 + i
                                }
                  
                                return (
                                  <CustomButton
                                    key={i}
                                    variant={currentPage === pageToShow ? "default" : "outline"}
                                    size="icon"
                                    onClick={() => setCurrentPage(pageToShow)}
                                    className={currentPage === pageToShow ? "bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF]" : ""}
                                  >
                                    {pageToShow}
                                  </CustomButton>
                                )
                              })}
                              {totalPages > 5 && currentPage < totalPages - 2 && (
                                <>
                                  <span className="text-muted-foreground">...</span>
                                  <CustomButton variant="outline" size="icon" onClick={() => setCurrentPage(totalPages)}>
                                    {totalPages}
                                  </CustomButton>
                                </>
                              )}
                              <CustomButton
                                variant="outline"
                                size="icon"
                                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                              >
                                <ChevronRight className="h-4 w-4" />
                              </CustomButton>
                            </div>
                          </div>
    </div>
  );
}
