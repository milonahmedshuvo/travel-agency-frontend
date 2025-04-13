"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Search, ChevronDown, Calendar } from "lucide-react"
import { CustomTable, CustomTableBody, CustomTableCell, CustomTableHead, CustomTableHeader, CustomTableRow } from "@/components/ui/CustomTable"
import { CustomInput } from "@/components/ui/CustomInput"
import { CustomSelect, CustomSelectItem } from "@/components/ui/CustomSelect"
import { CustomBadge } from "@/components/ui/CustomBadge"
import { CustomButton } from "@/components/ui/CustomButton"




interface BookingsTableProps {
  currentPage: number
  setCurrentPage: (page: number) => void
  dateFilter: string
  setDateFilter: (filter: string) => void
}



// Sample data
const bookings = [
  {
    id: 1,
    name: "Camellia Swan",
    bookingCode: "BKG12345",
    package: "Sea Tour",
    duration: "5 Hr",
    vehicle: "Bike",
    date: "June 25 - June 30",
    price: "$1,500",
    status: "Confirmed",
  },
  {
    id: 2,
    name: "Raphael Goodman",
    bookingCode: "BKG12346",
    package: "Land Tour",
    duration: "5 Hr",
    vehicle: "Scottie",
    date: "Jun 25 - Jul 2",
    price: "$3,200",
    status: "Pending",
  },
  {
    id: 3,
    name: "Ludwig Contessa",
    bookingCode: "BKG12347",
    package: "Cultural Tours",
    duration: "5 Hr",
    vehicle: "Boat",
    date: "Jun 26 - Jul 2",
    price: "$2,100",
    status: "Confirmed",
  },
  {
    id: 4,
    name: "Raphael Goodman",
    bookingCode: "BKG12348",
    package: "Wine Adventures",
    duration: "5 Hr",
    vehicle: "N/A",
    date: "Jun 25 - Jul 2",
    price: "$3,200",
    status: "Pending",
  },
  {
    id: 5,
    name: "James Dunn",
    bookingCode: "BKG12349",
    package: "Cultural Tours",
    duration: "5 Hr",
    vehicle: "Bike",
    date: "Jun 26 - Jun 30",
    price: "$1,200",
    status: "Confirmed",
  },
  {
    id: 6,
    name: "Hillary Grey",
    bookingCode: "BKG12350",
    package: "Sea Tour",
    duration: "5 Hr",
    vehicle: "N/A",
    date: "Jun 27 - Jul 3",
    price: "$1,800",
    status: "Confirmed",
  },
  {
    id: 7,
    name: "Lucas O'Connor",
    bookingCode: "BKG12351",
    package: "Cultural Tours",
    duration: "5 Hr",
    vehicle: "Boat",
    date: "Jun 28 - Jul 7",
    price: "$2,500",
    status: "Pending",
  },
  {
    id: 8,
    name: "Lucas O'Connor",
    bookingCode: "BKG12351",
    package: "Land Tour",
    duration: "5 Hr",
    vehicle: "Boat",
    date: "Jun 28 - Jul 7",
    price: "$2,500",
    status: "Pending",
  },
  {
    id: 9,
    name: "Layla Linch",
    bookingCode: "BKG12352",
    package: "Cultural Tours",
    duration: "5 Hr",
    vehicle: "Scottie",
    date: "Jun 29 - Jul 6",
    price: "$1,600",
    status: "Confirmed",
  },
  {
    id: 10,
    name: "Layla Linch",
    bookingCode: "BKG12352",
    package: "Land Tour",
    duration: "5 Hr",
    vehicle: "Scottie",
    date: "Jun 29 - Jul 6",
    price: "$1,600",
    status: "Confirmed",
  },
]

export function BookingsTable({ currentPage, setCurrentPage, dateFilter, setDateFilter }: BookingsTableProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // Items per page
  const itemsPerPage = 8
  const totalPages = Math.ceil(bookings.length / itemsPerPage)

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = bookings.slice(indexOfFirstItem, indexOfLastItem)



  return (
    <Card>
      <CardHeader className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0 pb-4">
        <CardTitle className="text-[20px] font-[500]">Bookings</CardTitle>
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <CustomInput
              type="search"
              placeholder="Search name, package, etc"
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <CustomSelect
            value={dateFilter}
            onValueChange={setDateFilter}
            className="w-full md:w-[180px]"
            placeholder="Today"
          >
            <CustomSelectItem value="today" onClick={setDateFilter}>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Today
              </div>
            </CustomSelectItem>
            <CustomSelectItem value="yesterday" onClick={setDateFilter}>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Yesterday
              </div>
            </CustomSelectItem>
            <CustomSelectItem value="this-week" onClick={setDateFilter}>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                This Week
              </div>
            </CustomSelectItem>
            <CustomSelectItem value="this-month" onClick={setDateFilter}>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                This Month
              </div>
            </CustomSelectItem>
            <CustomSelectItem value="custom" onClick={setDateFilter}>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Custom Range
              </div>
            </CustomSelectItem>
          </CustomSelect>
        </div>
      </CardHeader>
      <CardContent>
        
        <div className="overflow-x-auto">
          <CustomTable>
            <CustomTableHeader>
              <CustomTableRow>
                <CustomTableHead className="w-[150px]">
                  Name <ChevronDown className="ml-1 h-3 w-3 inline" />
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
              {currentItems.map((booking) => (
                <CustomTableRow key={booking.id}>
                  <CustomTableCell className="font-medium">{booking.name}</CustomTableCell>
                  <CustomTableCell>{booking.bookingCode}</CustomTableCell>
                  <CustomTableCell>{booking.package}</CustomTableCell>
                  <CustomTableCell>{booking.duration}</CustomTableCell>
                  <CustomTableCell>{booking.vehicle}</CustomTableCell>
                  <CustomTableCell>{booking.date}</CustomTableCell>
                  <CustomTableCell>{booking.price}</CustomTableCell>
                  <CustomTableCell>
                    <CustomBadge
                      variant={booking.status === "Confirmed" ? "default" : "outline"}
                      className={
                        booking.status === "Confirmed"
                          ? "bg-blue-500 hover:bg-blue-600"
                          : "bg-blue-100 text-blue-500 hover:bg-blue-200"
                      }
                    >
                      {booking.status}
                    </CustomBadge>
                  </CustomTableCell>
                </CustomTableRow>
              ))}
            </CustomTableBody>
          </CustomTable>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, bookings.length)} out of {bookings.length}
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
                  className={currentPage === pageToShow ? "bg-blue-500 hover:bg-blue-600" : ""}
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
