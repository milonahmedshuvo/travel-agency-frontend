/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import Header from "@/components/dashboard/Header/Header";
// import TravelarListModal from "@/components/dashboard/modal/TravelarListModal";
import Loading from "@/components/shared/loading/Loading";
import TextPagination from "@/components/others/pagination/TextPagination";
import { useGetAllTourBookingsQuery } from "@/redux/api/travellist/travellist";

const packageOptions = [
  { value: "SEA_TOUR", label: "Sea Tour" },
  { value: "LAND_TOUR", label: "Land Tour" },
  { value: "CULTURAL_TOUR", label: "Cultural Tours" },
  { value: "GASTRO_WINE_TOUR", label: "Gastro wine tour" },
];

export default function TravelerList() {
  const [packageFilter, setPackageFilter] = useState("SEA_TOUR");
  const [searchQuery, setSearchQuery] = useState("");
  const [showPackageDropdown, setShowPackageDropdown] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const [selectedBooking, setSelectedBooking] = useState(null);
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading, isError } = useGetAllTourBookingsQuery({
    page,
    limit,
    "tourPackage.category": packageFilter,
    ...(searchQuery && { search: searchQuery }),
  });

  // const handleRowClick = (booking: any) => {
  //   setSelectedBooking(booking);
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  //   setSelectedBooking(null);
  // };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">Error loading traveler data</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="px-4 md:px-6 py-8">
        <h1 className="text-2xl font-medium mb-6">Traveler List</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex flex-1 flex-col sm:flex-row gap-4">
            {/* Package Filter Dropdown */}
            <div className="relative w-full sm:w-[180px]">
              <button
                type="button"
                className="flex items-center justify-between w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setShowPackageDropdown(!showPackageDropdown)}
              >
                <span className="text-gray-500">
                  {packageOptions.find(opt => opt.value === packageFilter)?.label || "Package"}
                </span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {showPackageDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                  <ul className="py-1">
                    {packageOptions.map((option) => (
                      <li key={option.value}>
                        <button
                          type="button"
                          className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                          onClick={() => {
                            setPackageFilter(option.value);
                            setShowPackageDropdown(false);
                            setPage(1); // Reset to first page when filter changes
                          }}
                        >
                          {option.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="relative flex-1 mb-1">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search className="h-4 w-4" />
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-10 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search name, email, phone, etc"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1); // Reset to first page when search changes
              }}
            />
          </div>
        </div>

        <div className="bg-white border-0 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#E8F5FF] text-left">
                <tr>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Booking Date
                  </th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Package
                  </th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              {
                isLoading ? 
                <div>
                  <Loading/>
                </div>
                :
                <tbody className="divide-y divide-gray-200">
                {data?.data?.map((booking) => (
                  <tr
                    key={booking.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    // onClick={() => handleRowClick(booking)}
                  >
                    <td className="px-6 py-6 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-sky-100 flex-shrink-0 rounded-full overflow-hidden">
                          {booking.customer?.user?.avatar ? (
                            <Image
                              width={40}
                              height={40}
                              src={booking.customer.user.avatar}
                              alt={booking.customer.firstName}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center bg-blue-500 text-white">
                              {booking.customer?.firstName?.charAt(0) || 'G'}
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            {booking.customer?.firstName} {booking.customer?.lastName}
                          </div>
                          <div className="text-sm text-gray-500">
                            {booking.customer?.user?.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(booking.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.customer?.user?.contactNo || 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.tourPackage?.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        booking.isCancelled 
                          ? 'bg-red-100 text-red-800' 
                          : booking.isPaid 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {booking.isCancelled ? 'Cancelled' : booking.isPaid ? 'Paid' : 'Pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              }
              
            </table>

            {data?.data?.length === 0 && (
              <div className="p-8 text-center text-gray-500">
                No bookings found matching your criteria
              </div>
            )}

            {/* {showModal && selectedBooking && (
              <TravelarListModal
                selectedBooking={selectedBooking}
                closeModal={closeModal}
              />
            )} */}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
          <div className="text-sm text-gray-500">
            Showing {data?.data?.length || 0} of {data?.meta?.total || 0} bookings
          </div>

          <div className="flex items-center gap-1">
            <TextPagination
              meta={data?.meta || {
                page: 1,
                limit,
                total: 0,
                totalPage: 1
              }}
              onPageChange={(newPage) => setPage(newPage)}
            />
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          Copyright © {new Date().getFullYear()} Travel Agency
        </div>
      </div>
    </div>
  );
}