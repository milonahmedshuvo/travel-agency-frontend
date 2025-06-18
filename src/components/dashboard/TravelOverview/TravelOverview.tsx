"use client";

import {
  CalendarCheck,
  ChevronDown,
  DollarSign,
  Search,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// import { PieChart, Pie, Cell } from "recharts"
import { TourBooking, TTourPackage } from "@/components/lib/types";
import Loading from "@/components/shared/loading/Loading";
import { useAnalytiseDashboardQuery } from "@/redux/api/analytise/analytiseApi";
import {
  useGetAllTourBookingsQuery,
  useGetSeaTourQuery,
} from "@/redux/api/tourPackages/tourPackagesApi";
import Link from "next/link";
import blogImg from "../../../assets/blog/blog.png";
import RevenueOverview from "../analytics/revenue-overview";
import TopDestinations from "../analytics/top-destinations";
import TripsAnalytics from "../analytics/trips-analytics";

// Destinations data
// const destinationsData = [
//   { name: "Sea Tour", value: 35, color: "#2563eb", participants: "2,458 Participants" },
//   { name: "Land Tour", value: 28, color: "#60a5fa", participants: "2,458 Participants" },
//   { name: "Cultural Tours", value: 22, color: "#bfdbfe", participants: "2,458 Participants" },
//   { name: "Wine Adventures", value: 15, color: "#dbeafe", participants: "2,458 Participants" },
// ]

// Conversion data
// const conversionData = [
//   { name: "Conversion User", value: 65, color: "#2563eb", participants: "6,458 Participants" },
//   { name: "New Visitor User", value: 35, color: "#bfdbfe", participants: "1,200 Participants" },
// ]

// Travel packages data

// Activities data
// const activitiesData = [
//   {
//     id: 1,
//     icon: <User className="h-5 w-5 text-white" />,
//     iconBg: "bg-blue-500",
//     content: (
//       <>
//         <span className="font-medium">Alberto Cortez</span> updated his profile
//         and added a new payment method
//       </>
//     ),
//     time: "9:30 AM",
//     today: true,
//   },
//   {
//     id: 2,
//     icon: <Calendar className="h-5 w-5 text-white" />,
//     iconBg: "bg-blue-500",
//     content: (
//       <>
//         <span className="font-medium">Camellia Swan</span> booked the Venice
//         Dreams package for June 25, 2024.
//       </>
//     ),
//     time: "10:00 AM",
//     today: true,
//   },
//   {
//     id: 3,
//     icon: <CreditCard className="h-5 w-5 text-white" />,
//     iconBg: "bg-blue-500",
//     content: (
//       <>
//         Payment was processed for{" "}
//         <span className="font-medium">Ludwig Contessas</span> Alpine Escape
//         package.
//       </>
//     ),
//     time: "11:15 AM",
//     today: true,
//   },
//   {
//     id: 4,
//     icon: <Calendar className="h-5 w-5 text-white" />,
//     iconBg: "bg-blue-500",
//     content: (
//       <>
//         <span className="font-medium">Armina Raul Meyes</span> canceled her
//         Caribbean Cruise package.
//       </>
//     ),
//     time: "12:45 PM",
//     today: true,
//   },
//   {
//     id: 5,
//     icon: <MessageSquare className="h-5 w-5 text-white" />,
//     iconBg: "bg-blue-500",
//     content: (
//       <>
//         <span className="font-medium">Lydia Billings</span> submitted a review
//         for her recent package.
//       </>
//     ),
//     time: "2:30 PM",
//     today: true,
//   },
// ];

// Custom dropdown component
export function CustomDropdown({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-8 items-center justify-between rounded-md border border-gray-300 bg-blue-500 px-3 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none"
      >
        {value} <ChevronDown className="ml-2 h-4 w-4" />
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-1 w-40 rounded-md border border-gray-200 bg-white shadow-lg">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function TravelDashboardOverview() {
  // const [destinationsTimeframe, setDestinationsTimeframe] = useState("This Month")
  // const [conversionTimeframe, setConversionTimeframe] = useState("This Month")
  // const [sortBy, setSortBy] = useState("Latest")
  const [searchQuery, setSearchQuery] = useState("");

  // ANALYTISE DASHBORAD API FROM REDUX
  const { data } = useAnalytiseDashboardQuery("");
  const { data: tours } = useGetSeaTourQuery("");
  // console.log("sajib", tours);
  const { data: tourBookings, isLoading } = useGetAllTourBookingsQuery("");

  const filteredBookings = tourBookings?.data?.filter(
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" px-4 md:px-6 space-y-6 mt-7">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-gray-200 bg-white shadow-xs">
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-blue-50 p-3">
                <CalendarCheck className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Tour Booking
                </p>
                <h3 className="text-2xl font-bold">
                  {data?.data?.tourBookingCount}
                </h3>
              </div>
            </div>
            <div className="rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
              +2.98%
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-blue-50 p-3">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Room Booking
                </p>
                <h3 className="text-2xl font-bold">
                  {data?.data?.roomBookingCount}
                </h3>
              </div>
            </div>
            <div className="rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
              -1.45%
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-blue-50 p-3">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Customer
                </p>
                <h3 className="text-2xl font-bold">
                  {data?.data?.totalCustomer}
                </h3>
              </div>
            </div>
            <div className="rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
              -1.45%
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-blue-50 p-3">
                <DollarSign className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Earnings
                </p>
                <h3 className="text-2xl font-bold">
                  ${data?.data?.totalEarnings}
                </h3>
              </div>
            </div>
            <div className="rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
              +3.75%
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Revenue Overview */}
        <RevenueOverview />
        <TopDestinations />
      </div>

      {/* Total Trips */}
      <TripsAnalytics />

      {/* Travel Packages and Conversion Rate */}
      <div className="">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-[20px] text-[600] ">Travel Packages</h2>
              <div className="flex items-center space-x-2">
                {/* <span className="text-sm text-gray-500">Sort by:</span> */}
                {/* <CustomDropdown
                  options={["Latest", "Price: Low to High", "Price: High to Low", "Rating"]}
                  value={sortBy}
                  onChange={setSortBy}
                /> */}
                <button className="inline-flex h-8 items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none cursor-pointer">
                  <Link href="/toursExperience" prefetch>
                    View All
                  </Link>
                </button>
              </div>
            </div>
            {tours?.data?.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {tours?.data?.slice(0, 4).map((pkg: TTourPackage) => (
                  <div
                    key={pkg.id}
                    className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
                  >
                    <div className="relative h-48 w-full">
                      <Link href={`/toursExperience/${pkg.id}`}>
                        <Image
                          src={pkg.images?.[1]?.url || blogImg}
                          alt={pkg.location}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </Link>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">{pkg.location}</h3>
                      <p className="mt-2 text-xl font-bold text-orange-500">
                        ${pkg.price}
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-md text-gray-600">
                          {pkg.duration} Days Trip
                        </span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm font-medium">
                            {"5.0"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-10">tours packages is not found</p>
            )}
          </div>
        </div>

        {/* Conversion Rate */}
        {/* <div className="rounded-lg border border-gray-200 bg-white shadow-xs">
          <div className="flex flex-row items-center justify-between px-4 pt-4 ">
            <h3 className="text-[20px] font-[500]">Conversion Rate</h3>
            <CustomDropdown
              options={["This Week", "This Month", "This Year"]}
              value={conversionTimeframe}
              onChange={setConversionTimeframe}
            />
          </div>
          <div className="p-2">
            <div className="flex flex-col items-center">
              <div className="h-[200px] w-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={conversionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={0}
                      dataKey="value"
                      startAngle={90}
                      endAngle={-270}
                    >
                      {conversionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 w-full">
                <ul className="space-y-2">
                  {conversionData.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2 h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <div>
                        <p className="text-sm font-medium">
                          {item.name} ({item.value}%)
                        </p>
                        <p className="text-xs text-gray-500">{item.participants}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Recent Bookings and Activity */}
      <div className="w-full">
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-row items-center justify-between p-4">
              <h3 className="text-[20px] font-[500]">Recent Bookings</h3>
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
                <button className="inline-flex h-9 items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none cursor-pointer ">
                  <Link href="/dashboard/tripBooking">View All</Link>
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="overflow-x-auto">
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
                      <th className="whitespace-nowrap px-4 py-2 text-left text-xs font-medium text-gray-500">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredBookings?.map((booking: TourBooking) => (
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
                            : "N/A"}
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
                              booking.status === "Confirmed"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {booking.status}
                          </span> */}
                          <button className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] px-3 rounded text-white text-sm py-0.5 cursor-pointer">
                            {" "}
                            Confirmed{" "}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        {/* <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="p-2">
            <h3 className="text-[20px] font-[500]">Recent Activity</h3>
          </div>
          <div className="p-4">
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-sm font-medium text-gray-500">
                  Today
                </h3>
                <div className="space-y-4">
                  {activitiesData.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start space-x-3"
                    >
                      <div className={`rounded-full p-2 ${activity.iconBg}`}>
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-[#333E47] text-[16px] mb-2.5">
                          {activity.content}
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <footer className="py-4 text-center text-sm text-gray-500">
        Copyright © 2024 Travel Agency
      </footer>
    </div>
  );
}
