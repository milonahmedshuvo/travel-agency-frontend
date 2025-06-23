/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { TourBooking } from "@/components/lib/types";
import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import TextPagination from "../others/pagination/TextPagination";
import Loading from "../shared/loading/Loading";
import { getBaseUrl } from "@/config/base-url";

// Sample data
export function MyTripBookingsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  //  const {data:tourBookings, isLoading} = useGetAllTourBookingsQuery("")
  // console.log("Recent tour bookings", tourBookings?.data )
  const [newPage, setNewPage] = useState(1);
  const [tourBookings, settourBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tourBookingsMeta, settourBookingsMeta] = useState<{
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  }>({
    page: 1,
    limit: 12,
    total: 100,
    totalPage: 10,
  });

  useEffect(() => {
    const fetchtourBookings = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `${getBaseUrl()}/tour-bookings?isCancelled=false&page=${newPage}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // optional
            },
          }
        );

        const data = await response.json();
        settourBookings(data?.data || []);
        settourBookingsMeta(data?.meta);
      } catch (error) {
        console.error("Error fetching tourBookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchtourBookings();
  }, [newPage]);

  if (loading) {
    return <Loading />;
  }

  const filteredBookings = tourBookings?.filter(
    (booking: TourBooking) =>
      booking?.tourPackage?.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      booking?.vehicleBooking?.tourPackageVehicle?.vehicleType
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  const dateFormate = (date: string) => {
    const DateObject = new Date(date);
    const updateDate = DateObject.toLocaleDateString();
    return updateDate;
  };

  return (
    <div className="grid grid-cols-1 gap-6 ">
      <div className="lg:col-span-2">
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-row items-center justify-between p-4">
            <h3 className="text-[20px] font-[500]">My tour Bookings</h3>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <input
                  type="search"
                  placeholder="Search anything"
                  className="h-9 rounded-md border border-gray-300 pl-8 pr-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {/* <button className="inline-flex h-9 items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none cursor-pointer ">
                  <Link href='/dashboard/tripBooking'> 
                  View All
                  </Link>
                </button> */}
            </div>
          </div>
          <div className="p-4">
            <div className="overflow-x-auto">
              {tourBookings?.length > 0 ? (
                <table className="w-full border-collapse">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="whitespace-nowrap px-4 py-2 text-left text-xs font-medium text-gray-500">
                        Name
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left text-xs font-medium text-gray-500">
                        Package
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left text-xs font-medium text-gray-500">
                        Duration
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left text-xs font-medium text-gray-500">
                        Vehicle
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left text-xs font-medium text-gray-500">
                        Date
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left text-xs font-medium text-gray-500">
                        Price
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left text-xs font-medium text-gray-500 ">
                        Status
                      </th>

                      <th className="whitespace-nowrap px-4 py-2 text-left text-xs font-medium text-gray-500 ">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredBookings?.map((booking: TourBooking) => (
                      // <Link href={`/tourBookings/myTripBookings/${booking.id}`} > </Link>

                      <tr key={booking.id} className="py-10">
                        <td className="whitespace-nowrap px-4 py-6 font-medium">
                          {booking?.tourPackage?.title}
                        </td>
                        <td className="whitespace-nowrap px-4 py-6">
                          {booking?.tourPackage?.category}
                        </td>
                        <td className="whitespace-nowrap px-4 py-6">
                          {booking.duration}
                        </td>
                        <td className="whitespace-nowrap px-4 py-6">
                          {booking?.vehicleBooking?.tourPackageVehicle
                            ?.vehicleType
                            ? booking?.vehicleBooking?.tourPackageVehicle
                                ?.vehicleType
                            : "N/A"}{" "}
                        </td>
                        <td className="whitespace-nowrap px-4 py-6">
                          {dateFormate(booking.updatedAt)}
                        </td>
                        <td className="whitespace-nowrap px-4 py-6">
                          {booking?.tourPackage?.price}
                        </td>
                        <td className="whitespace-nowrap px-4 py-6">
                          {/* <span
                            className={`rounded-md px-2 py-1 text-xs font-medium ${
                              booking.isPaid
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {booking.status}
                          </span>  */}

                          {booking?.isPaid ? (
                            <button className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] px-3 rounded text-white text-sm py-0.5 cursor-pointer ">
                              {" "}
                              Confirmed{" "}
                            </button>
                          ) : (
                            <button className="bg-yellow-100 text-yellow-800 px-3 rounded  text-sm py-0.5 cursor-pointer ">
                              {" "}
                              Not Confirmed{" "}
                            </button>
                          )}
                        </td>

                        <td className="whitespace-nowrap px-4 py-6 ">
                          <Link href={`/customer/myTripBookings/${booking.id}`}>
                            <span className="py-0.5 px-3 border border-gray-300 rounded cursor-pointer">
                              view
                            </span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-4xl text-center my-20">
                  Tour booking not found
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Pagination  */}
        <div className="mt-10 flex justify-end">
          <TextPagination
            meta={tourBookingsMeta}
            onPageChange={(newPage) => {
              setNewPage(newPage);
            }}
          />
        </div>
      </div>
    </div>
  );
}
