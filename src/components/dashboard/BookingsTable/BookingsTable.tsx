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
import Loading from "@/components/shared/loading/Loading"

interface BookingsTableProps {
  currentPage: number
  setCurrentPage: (page: number) => void
  dateFilter: string
  setDateFilter: (filter: string) => void
}




export function BookingsTable({ currentPage, setCurrentPage, dateFilter, setDateFilter }: BookingsTableProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const {data:tourBookings, isLoading} = useGetAllTourBookingsQuery("")

  // Items per page
  const itemsPerPage = 8
  const totalPages = Math.ceil(tourBookings?.data?.length / itemsPerPage)

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = tourBookings?.data?.slice(indexOfFirstItem, indexOfLastItem)



 const filteredBookings = currentItems?.filter(
    (booking: TourBooking) =>
      booking?.tourPackage?.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      booking?.vehicleBooking?.tourPackageVehicle?.vehicleType
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );


//  DATE FORMATE SETUP 
  const dateFormate = (date:string) => {
   const DateObject = new Date(date)
   const updateDate = DateObject.toLocaleDateString()
   return updateDate
}


  if(isLoading){
    return <Loading/>
  }


  return (
    <Card>
      <CardHeader className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0 pb-4">
        <CardTitle className="text-[20px] font-[500]">Bookings</CardTitle>
       
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


      </CardHeader>
      <CardContent>
        
        <div className="overflow-x-auto">
          <CustomTable>
            <CustomTableHeader>
              <CustomTableRow>
                <CustomTableHead className="w-[150px]">
                  Name <ChevronDown className="ml-1 h-3 w-3 inline " />
                </CustomTableHead>
                {/* <CustomTableHead>
                  Booking Code <ChevronDown className="ml-1 h-3 w-3 inline" />
                </CustomTableHead> */}
                <CustomTableHead>
                  Package <ChevronDown className="ml-1 h-3 w-3 inline" />
                </CustomTableHead>
                <CustomTableHead>
                  Duration <ChevronDown className="ml-1 h-3 w-3 inline" />
                </CustomTableHead>
                <CustomTableHead>
                  Vehicle <ChevronDown className="ml-1 h-3 w-3 inline" />
                </CustomTableHead>
                <CustomTableHead>
                  Date <ChevronDown className="ml-1 h-3 w-3 inline" />
                </CustomTableHead>
                <CustomTableHead>
                  Price <ChevronDown className="ml-1 h-3 w-3 inline" />
                </CustomTableHead>
                <CustomTableHead>
                  Status <ChevronDown className="ml-1 h-3 w-3 inline" />
                </CustomTableHead>
              </CustomTableRow>
            </CustomTableHeader>
            <CustomTableBody>
              {filteredBookings?.map((booking:TourBooking) => (
                // <Link href={`/dashboard/tripBooking/${booking.id}`} key={booking.id}> </Link>
                <CustomTableRow key={booking.id}>
                  <CustomTableCell className="font-normal">{booking?.tourPackage?.title || "N/A"}</CustomTableCell>
                  {/* <CustomTableCell>{booking.id.slice(0, 5)}</CustomTableCell> */}
                  <CustomTableCell>{booking?.tourPackage?.category}</CustomTableCell>
                  <CustomTableCell>{`${booking.duration} Hours`}</CustomTableCell>
                  <CustomTableCell>{booking?.vehicleBooking?.tourPackageVehicle
                            ?.vehicleType
                            ? booking?.vehicleBooking?.tourPackageVehicle
                                ?.vehicleType
                            : "N/A"}</CustomTableCell>
                  <CustomTableCell>{dateFormate(booking.updatedAt)}</CustomTableCell>
                  <CustomTableCell>${booking?.tourPackage?.price || "N/A" }</CustomTableCell>
                  <CustomTableCell>

                    {/* <CustomBadge
                      variant={booking.status === "Confirmed" ? "default" : "outline"}
                      className={
                        booking.status === "Confirmed"
                          ? "bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF]"
                          : "bg-blue-100 text-blue-500 hover:bg-blue-200"
                      }
                    >
                      {booking.status}
                    </CustomBadge> */}


                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${booking?.transactions?.status === "SUCCEEDED" && "bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF]"}  ${booking?.transactions?.status === "PROCESSING" && "bg-blue-300 text-blue-500 hover:bg-blue-200"}   ${booking?.transactions?.status === "REQUIRES_PAYMENT_METHOD" && "bg-amber-400"} ${booking?.transactions === null && 'bg-red-500 opacity-80' }    text-white`}>

                    { booking?.transactions?.status}
                    {booking?.transactions === null && "Not pay" }  
                  </span>

                    {/* <CustomBadge className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF]" > Confirmed </CustomBadge> */}
                  </CustomTableCell>

                   <CustomTableCell>
                    <Link href={`/dashboard/tripBooking/${booking.id}`}>
                      <button className="border border-gray-400 px-2 py-0.5 rounded cursor-pointer">View</button>
                    </Link>
                   </CustomTableCell>


                </CustomTableRow>
              ))}
            </CustomTableBody>
          </CustomTable>
        </div>




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



      </CardContent>
    </Card>
  )
}
