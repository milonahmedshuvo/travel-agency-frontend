"use client"

import { useState, useEffect, useRef } from "react"
import { Search, ChevronLeft, ChevronRight, Calendar, ChevronDown } from "lucide-react"

// Sample data for traveler feedback
const travelers = [
  {
    id: 1,
    name: "Camellia Swan",
    initials: "CS",
    package: "Venice Dreams",
    rating: 4.5,
    review:
      "The Venice Dreams package was fantastic! The gondola ride was magical, and the guided tours were very informative. I highly recommend this tour for anyone looking to experience the charm of Venice.",
  },
  {
    id: 2,
    name: "Raphael Goodman",
    initials: "RG",
    package: "Safari Adventure",
    rating: 5,
    review:
      "A well-organized Safari Adventure with knowledgeable guides, unforgettable close encounters with the Big Five, and luxurious tented camps offering stunning Serengeti views.",
  },
  {
    id: 3,
    name: "Ludwig Contessa",
    initials: "LC",
    package: "Alpine Escape",
    rating: 4,
    review:
      "The Alpine Escape tour offered stunning Swiss Alps views, top-notch accommodations, and a perfect activity-relaxation mix. A must-do for nature lovers and adventure seekers.",
  },
  {
    id: 4,
    name: "Armina Raul Meyes",
    initials: "AR",
    package: "Caribbean Cruise",
    rating: 3.5,
    review:
      "The Caribbean Cruise featured beautiful destinations, excellent food, friendly staff, and luxurious amenities, despite some schedule delays. Overall, it was an enjoyable and good experience.",
  },
  {
    id: 5,
    name: "James Dunn",
    initials: "JD",
    package: "Parisian Romance",
    rating: 5,
    review:
      "The Parisian Romance package exceeded expectations with fantastic Eiffel Tower and Louvre tours, a charming hotel, delicious meals, and a perfect getaway for couples exploring Paris.",
  },
  {
    id: 6,
    name: "Sophia Lee",
    initials: "SL",
    package: "Tokyo Cultural Adventure",
    rating: 4.5,
    review:
      "Tokyo Cultural Adventure offered deep insights into Japanese culture and history with a well-balanced itinerary. Highly recommended for cultural enthusiasts seeking an enlightening experience.",
  },
  {
    id: 7,
    name: "Michael Smith",
    initials: "MS",
    package: "Greek Island Hopping",
    rating: 4,
    review:
      "The Greek Island Hopping tour was wonderful with unique island experiences and excellent accommodations. Despite some ferry schedule issues, it was overall a great adventure.",
  },
  {
    id: 8,
    name: "Emily Davis",
    initials: "ED",
    package: "Bali Beach Escape",
    rating: 5,
    review:
      "Bali Beach Escape was a dream with a stunning beachfront villa, well-planned activities, relaxing spa treatments, and yoga sessions. I left rejuvenated and eager to return.",
  },
]

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
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
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
  const totalPages = Math.ceil(totalItems / itemsPerPage)

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

  const filteredTravelers = travelers.filter(
    (traveler) =>
      traveler.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      traveler.package.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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
        {filteredTravelers.map((traveler) => (
          <div key={traveler.id} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3">
                {traveler.initials}
              </div>
              <div>
                <h3 className="font-semibold">{traveler.name}</h3>
                <p className="text-sm text-gray-500">{traveler.package}</p>
              </div>
            </div>

            <div className="mb-2 flex items-center">
              {renderStars(traveler.rating)}
              <span className="ml-2 text-gray-700">{traveler.rating}</span>
            </div>

            <p className="text-sm text-gray-700 line-clamp-4">{traveler.review}</p>
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

        <div className="flex items-center">
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
        </div>
      </div>
    </div>
  )
}
