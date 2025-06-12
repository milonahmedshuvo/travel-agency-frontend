/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Search, ChevronDown, Calendar } from "lucide-react"
import { CustomTable, CustomTableBody, CustomTableCell, CustomTableHead, CustomTableHeader, CustomTableRow } from "@/components/ui/CustomTable"
import { CustomInput } from "@/components/ui/CustomInput"
import { CustomSelect, CustomSelectItem } from "@/components/ui/CustomSelect"
import { CustomButton } from "@/components/ui/CustomButton"
import { useGetAllTourBookingsQuery } from "@/redux/api/tourPackages/tourPackagesApi"
import { TourBooking } from "@/components/lib/types"
import { CustomBadge } from "@/components/ui/CustomBadge"
import Link from "next/link"
import Loading from "../shared/loading/Loading"








// Sample data
export function MyTripBookingsTable() {
  const [searchQuery, setSearchQuery] = useState("")
 const {data:tourBookings, isLoading} = useGetAllTourBookingsQuery("")
  

  // console.log("Recent tour bookings", tourBookings?.data )


  if(isLoading){
    return <Loading/>
  }


  

const filteredBookings = tourBookings?.data?.filter(
    (booking:TourBooking) =>
      booking?.tourPackage?.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking?.vehicleBooking?.tourPackageVehicle?.vehicleType.toLowerCase().includes(searchQuery.toLowerCase()),
  )  
  


  const dateFormate = (date:string) => {
   const DateObject = new Date(date)
   const updateDate = DateObject.toLocaleDateString()
   return updateDate
}







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


                {
                  tourBookings?.data?.length > 0 ? <table className="w-full border-collapse">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="whitespace-nowrap px-4 py-2 text-left text-xs font-medium text-gray-500">Name</th>
                      <th className="whitespace-nowrap px-4 py-2 text-left text-xs font-medium text-gray-500">
                        Package
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left text-xs font-medium text-gray-500">
                        Duration
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left text-xs font-medium text-gray-500">
                        Vehicle
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left text-xs font-medium text-gray-500">Date</th>
                      <th className="whitespace-nowrap px-4 py-2 text-left text-xs font-medium text-gray-500">Price</th>
                      <th className="whitespace-nowrap px-4 py-2 text-left text-xs font-medium text-gray-500 ">
                        Status
                      </th>

                      <th className="whitespace-nowrap px-4 py-2 text-left text-xs font-medium text-gray-500 ">
                        Status
                      </th>

                       
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredBookings?.map((booking:TourBooking) => (
                      
                      // <Link href={`/customer/myTripBookings/${booking.id}`} > </Link>


                      <tr key={booking.id} className="py-10" >
                        <td className="whitespace-nowrap px-4 py-6 font-medium">{booking?.tourPackage?.title}</td>
                        <td className="whitespace-nowrap px-4 py-6">{booking?.tourPackage?.category}</td>
                        <td className="whitespace-nowrap px-4 py-6">{booking.duration}</td>
                        <td className="whitespace-nowrap px-4 py-6">{booking?.vehicleBooking?.tourPackageVehicle?.vehicleType ? booking?.vehicleBooking?.tourPackageVehicle?.vehicleType : "N/A" } </td>
                        <td className="whitespace-nowrap px-4 py-6">{dateFormate(booking.updatedAt)}</td>
                        <td className="whitespace-nowrap px-4 py-6">{booking?.tourPackage?.price}</td>
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
                          <button className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] px-3 rounded text-white text-sm py-0.5 cursor-pointer " > Confirmed </button>
                         
                        </td>

                        <td className="whitespace-nowrap px-4 py-6 ">
                          <Link href={`/customer/myTripBookings/${booking.id}`} >  
                          <span className="py-0.5 px-3 border border-gray-300 rounded cursor-pointer">view</span>
                          </Link>
                        </td>
                        
                      </tr>


                      
                    ))}
                  </tbody>
                </table> : <p className="text-4xl text-center my-20">Tour booking not found</p>
                }

                


              </div>
            </div>
          </div>
        </div>
   </div>
  )
}
