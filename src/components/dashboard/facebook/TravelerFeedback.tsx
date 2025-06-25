"use client"

import { useState, useEffect, useRef } from "react"
import { Search, Calendar, ChevronDown } from "lucide-react"
import {  useGetAllfeedbacksWithJPagintionQuery } from "@/redux/api/feedbacks/feedbacksApi"
import { TReview } from "@/components/lib/types"
import Image from "next/image"


// Sample data for traveler feedback


const packages = [
  "All Packages",
  "Venice Dreams",
  "Safari Adventure",
  "Alpine Escape",
  "Caribbean Cruise",
  "Parisian Romance",
  "Tokyo Cultural Adventure",
  "Greek Island Hopping",
  "Bali Beach Escape",
]

const dateRanges = [
  "Last 7 days",
  "Last 30 days",
  "Last 3 months",
  "Last 6 months",
  "Last year",
  "Custom range",
]

const itemsPerPageOptions = ["4", "8", "12", "16", "24"]

export default function TravelerFeedback() {
  // const [newPage, setPage] = useState(1)
  const {data} = useGetAllfeedbacksWithJPagintionQuery(1)



  const [searchQuery, setSearchQuery] = useState("")
  // const [currentPage, setCurrentPage] = useState(1)
  const [selectedPackage, setSelectedPackage] = useState("All Packages")
  const [dateRange, setDateRange] = useState("1 June 28 - 15 July 28")
  const [itemsPerPage, setItemsPerPage] = useState(8)
  const [isPackageDropdownOpen, setIsPackageDropdownOpen] = useState(false)
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false)
  const [isItemsPerPageDropdownOpen, setIsItemsPerPageDropdownOpen] = useState(false)

  const packageDropdownRef = useRef<HTMLDivElement>(null)
  const dateDropdownRef = useRef<HTMLDivElement>(null)
  const itemsPerPageDropdownRef = useRef<HTMLDivElement>(null)

  const totalItems = 286 // Total number of reviews as shown in the design
  // const totalPages = Math.ceil(totalItems / itemsPerPage)



  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (packageDropdownRef.current && !packageDropdownRef.current.contains(event.target as Node)) {
        setIsPackageDropdownOpen(false)
      }
      if (dateDropdownRef.current && !dateDropdownRef.current.contains(event.target as Node)) {
        setIsDateDropdownOpen(false)
      }
      if (itemsPerPageDropdownRef.current && !itemsPerPageDropdownRef.current.contains(event.target as Node)) {
        setIsItemsPerPageDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])



  const renderStars = (rating: number) => {

    return (
      <div className="flex text-yellow-400">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star}>{star <= Math.floor(rating) ? "★" : star - 0.5 <= rating ? "★" : "☆"}</span>
        ))}
      </div>
    )
  }



  const filteredTravelers = data?.data?.data?.filter(
    (traveler:TReview) =>
      traveler?.customer.user?.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      traveler?.customer?.location?.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  console.log("travellers", data?.data?.meta)



  return (
    <div>
      <h2 className="text-[20px] font-medium mb-6">Traveler Feedback</h2>

      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search name, package, etc."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-4">
          <div className="relative" ref={packageDropdownRef}>
            <button
              className="flex items-center justify-between w-[180px] px-4 py-2 text-left border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none"
              onClick={() => setIsPackageDropdownOpen(!isPackageDropdownOpen)}
            >
              <span>{selectedPackage}</span>
              <ChevronDown className="h-4 w-4 ml-2" />
            </button>
            {isPackageDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                <ul className="py-1 max-h-60 overflow-auto">
                  {packages.map((pkg) => (
                    <li key={pkg}>
                      <button
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        onClick={() => {
                          setSelectedPackage(pkg)
                          setIsPackageDropdownOpen(false)
                        }}
                      >
                        {pkg}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="relative" ref={dateDropdownRef}>
            <button
              className="flex items-center px-4 py-2 bg-linear-to-t from-[#156CF0]  via-50%  to-[#38B6FF] to-50% text-white rounded-md  focus:outline-none"
              onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}
            >
              <Calendar className="mr-2 h-4 w-4" />
              {dateRange}
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            {isDateDropdownOpen && (
              <div className="absolute z-10 w-48 mt-1 bg-white border border-gray-300 rounded-md shadow-lg right-0">
                <ul className="py-1">
                  {dateRanges.map((range) => (
                    <li key={range}>
                      <button
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        onClick={() => {
                          setDateRange(range)
                          setIsDateDropdownOpen(false)
                        }}
                      >
                        {range}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredTravelers?.map((traveler:TReview) => (
          <div key={traveler.id} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3">
                {/* {traveler.initials} */} 
                {/* <Image src={ traveler?.customer?.user?.avatar || "ddd" } width={500} height={500} alt="image" />
                <h3 className="font-semibold">{traveler?.customer?.user?.username.charAt(0)}</h3> */}
                 {
                    traveler?.customer?.user?.avatar? <Image src={ traveler?.customer?.user?.avatar || "ddd" } width={500} height={500} alt="image" /> : <h3 className="font-semibold">{traveler?.customer?.user?.username.charAt(0)}</h3>
                 }

              </div>

              <div>
                <h3 className="font-semibold">{traveler?.customer?.user?.username}</h3>
                <p className="text-sm text-gray-500">{traveler?.tourPackage?.category}</p>
              </div>
            </div>

            <div className="mb-2 flex items-center">
              {renderStars(traveler?.rating)}
              <span className="ml-2 text-gray-700">{traveler?.rating}</span>
            </div>

            <p className="text-sm text-gray-700 line-clamp-4">{`${traveler?.comment ? traveler?.comment : 'No comment' }`} </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
        <div className="flex items-center mb-4 sm:mb-0">
          <span className="text-sm text-gray-500 mr-2">Showing</span>
          <div className="relative" ref={itemsPerPageDropdownRef}>
            <button
              className="flex items-center justify-between w-[70px] px-3 py-1 text-left border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none"
              onClick={() => setIsItemsPerPageDropdownOpen(!isItemsPerPageDropdownOpen)}
            >
              <span>{itemsPerPage}</span>
              <ChevronDown className="h-3 w-3 ml-1" />
            </button>
            {isItemsPerPageDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                <ul className="py-1">
                  {itemsPerPageOptions.map((option) => (
                    <li key={option}>
                      <button
                        className="block w-full text-left px-3 py-1 text-sm hover:bg-gray-100"
                        onClick={() => {
                          setItemsPerPage(Number.parseInt(option))
                          setIsItemsPerPageDropdownOpen(false)
                        }}
                      >
                        {option}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <span className="text-sm text-gray-500 ml-2">out of {totalItems}</span>
        </div>

        {/* <div className="flex items-center">
          <button
            className="p-2 border border-gray-300 rounded-md mr-1 hover:bg-gray-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {[...Array(Math.min(5, totalPages))].map((_, index) => {
            let pageNumber

            if (totalPages <= 5) {
              pageNumber = index + 1
            } else if (currentPage <= 3) {
              pageNumber = index + 1
              if (index === 4) pageNumber = totalPages
            } else if (currentPage >= totalPages - 2) {
              pageNumber = totalPages - 4 + index
            } else {
              pageNumber = currentPage - 2 + index
              if (index === 4) pageNumber = totalPages
            }

            return (
              <button
                key={index}
                className={`mx-1 px-3 py-1 rounded-md focus:outline-none ${
                  currentPage === pageNumber ? "bg-blue-500 text-white" : "border border-gray-300 hover:bg-gray-100"
                }`}
                onClick={() => setCurrentPage(pageNumber)}
              >
                {pageNumber}
              </button>
            )
          })}

          <button
            className="p-2 border border-gray-300 rounded-md ml-1 hover:bg-gray-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div> */}
{/* 
             <div className="flex items-center gap-1">
                    <TextPagination
                      meta={data?.data?.meta}
                      onPageChange={(newPage) => setPage(newPage)}
                    />
                  </div> */}


      </div>
    </div>
  )
}
