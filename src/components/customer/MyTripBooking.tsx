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




interface BookingsTableProps {
  currentPage: number
  setCurrentPage: (page: number) => void
  dateFilter: string
  setDateFilter: (filter: string) => void
}



// Sample data


export function MyTripBookingsTable({ currentPage, setCurrentPage, dateFilter, setDateFilter }: BookingsTableProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const {data:tourBookings} = useGetAllTourBookingsQuery("")

  // Items per page
  const itemsPerPage = 8
  const totalPages = Math.ceil(tourBookings?.data?.length / itemsPerPage)

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = tourBookings?.data?.slice(indexOfFirstItem, indexOfLastItem)

  

const dateFormate = (date:string) => {
   const DateObject = new Date(date)
   const updateDate = DateObject.toLocaleDateString()
   return updateDate
}




  return (
    <Card>
      <CardHeader className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0 pb-4">
        <CardTitle className="text-[20px] font-[500]">Bookings</CardTitle>
        {/* <h1>ddddddddddddddd</h1> */}
      </CardHeader>
      <CardContent>
        
        <div className="overflow-x-auto">
          <CustomTable>
            <CustomTableHeader>
              <CustomTableRow>
                <CustomTableHead className="w-[150px]">
                  Name <ChevronDown className="ml-1 h-3 w-3 inline " />
                </CustomTableHead>
                <CustomTableHead>
                  Booking Code <ChevronDown className="ml-1 h-3 w-3 inline" />
                </CustomTableHead>
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
              {currentItems?.map((booking:TourBooking) => (
                <CustomTableRow key={booking.id}>
                  <CustomTableCell className="font-medium">{'tour name N/A'}</CustomTableCell>
                  <CustomTableCell>{booking.id.slice(0, 4)}</CustomTableCell>
                  <CustomTableCell>{'tour package type'}</CustomTableCell>
                  <CustomTableCell>{`${booking.duration} Hours`}</CustomTableCell>
                  <CustomTableCell>{'vehicle type'}</CustomTableCell>
                  <CustomTableCell>{dateFormate(booking.updatedAt)}</CustomTableCell>
                  <CustomTableCell>{"tour price N/A"}</CustomTableCell>
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

                    <CustomBadge className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF]" > Confirmed </CustomBadge>


                  </CustomTableCell>
                </CustomTableRow>
              ))}
            </CustomTableBody>
          </CustomTable>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, tourBookings?.data?.length)} out of {tourBookings?.data?.length}
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
