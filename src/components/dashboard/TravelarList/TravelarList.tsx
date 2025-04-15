"use client"

import { useState, useEffect, useRef } from "react"
import { Search, ChevronDown, SlidersHorizontal } from "lucide-react"
import Image from "next/image"

interface Traveler {
  id: number
  name: string
  email: string
  date: string
  phone: string
  package: string
  cancelReason: string
  avatar: string
}

const packages = ["All Packages", "Sea Tour", "Land Tour", "Cultural Tours", "Culinary & Wine Adventures"]

const memberCategories = ["All Categories", "Regular", "Premium", "VIP", "Corporate"]

const ITEMS_PER_PAGE = 10



export default function TravelerList() {
  const [travelers, setTravelers] = useState<Traveler[]>([])
  const [filteredTravelers, setFilteredTravelers] = useState<Traveler[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPackage, setSelectedPackage] = useState("All Packages")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [currentPage, setCurrentPage] = useState(1)
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Traveler | null
    direction: "ascending" | "descending"
  }>({ key: null, direction: "ascending" })

  // Dropdown state
  const [packageDropdownOpen, setPackageDropdownOpen] = useState(false)
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false)

  // Refs for dropdown click outside detection
  const packageDropdownRef = useRef<HTMLDivElement>(null)
  const categoryDropdownRef = useRef<HTMLDivElement>(null)

  // Mobile detection
  const [isMobile, setIsMobile] = useState(false)

  // Handle window resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (packageDropdownRef.current && !packageDropdownRef.current.contains(event.target as Node)) {
        setPackageDropdownOpen(false)
      }
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node)) {
        setCategoryDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Load mock data
  useEffect(() => {
    const mockData: Traveler[] = [
      {
        id: 1,
        name: "Camelia Swan",
        email: "camelia.swan@example.com",
        date: "March 12, 2025",
        phone: "+1 (555) 123-4567",
        package: "Sea Tour",
        cancelReason: "Personal Reasons - Change of plans, personal emergency",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 2,
        name: "Raphael Goodman",
        email: "raphael.goodman@example.com",
        date: "March 12, 2025",
        phone: "+1 (555) 234-5678",
        package: "Land Tour",
        cancelReason: "Unforeseen Circumstances - Family emergency",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 3,
        name: "Ludwig Contessa",
        email: "ludwig.contessa@example.com",
        date: "March 12, 2025",
        phone: "+1 (555) 345-6789",
        package: "Cultural Tours",
        cancelReason: "Travel Restrictions - Visa issues, government restrictions",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 4,
        name: "Armina Raul Meyes",
        email: "armina.meyes@example.com",
        date: "March 12, 2025",
        phone: "+1 (555) 456-7890",
        package: "Sea Tour",
        cancelReason: "Personal Reasons - Change of plans, personal emergency",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 5,
        name: "James Dunn",
        email: "james.dunn@example.com",
        date: "March 12, 2025",
        phone: "+1 (555) 567-8901",
        package: "Cultural Tours",
        cancelReason: "Personal Reasons - Change of plans, personal emergency",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 6,
        name: "Hillary Grey",
        email: "hillary.grey@example.com",
        date: "March 12, 2025",
        phone: "+1 (555) 345-6780",
        package: "Sea Tour",
        cancelReason: "Flight or Transportation Issues - Delayed or cancelled flights",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 7,
        name: "Lucas O'connor",
        email: "lucas.oconnor@example.com",
        date: "March 12, 2025",
        phone: "+1 (555) 901-2345",
        package: "Cultural Tours",
        cancelReason: "Personal Reasons - Change of plans, personal emergency",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 8,
        name: "Layla Linch",
        email: "layla.linch@example.com",
        date: "March 12, 2025",
        phone: "+1 (555) 012-3456",
        package: "Sea Tour",
        cancelReason: "Personal Reasons - Change of plans, personal emergency",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 9,
        name: "Sophia Lee",
        email: "sophia.lee@example.com",
        date: "March 12, 2025",
        phone: "+1 (555) 678-9012",
        package: "Culinary & Wine Adventures",
        cancelReason: "Tour Operator Changes - Date or itinerary modifications",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 10,
        name: "Michael Smith",
        email: "michael.smith@example.com",
        date: "March 12, 2025",
        phone: "+1 (555) 789-0123",
        package: "Cultural Tours",
        cancelReason: "Personal Reasons - Change of plans, personal emergency",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 11,
        name: "Zaire Dorwart",
        email: "zaire.dorwart@example.com",
        date: "March 12, 2025",
        phone: "+1 (555) 345-7890",
        package: "Culinary & Wine Adventures",
        cancelReason: "Financial Reasons - Budget constraints or unexpected expenses",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ]

    setTravelers(mockData)
    setFilteredTravelers(mockData)
  }, [])

  // Apply filters and search
  useEffect(() => {
    let result = [...travelers]

    // Apply package filter
    if (selectedPackage !== "All Packages") {
      result = result.filter((traveler) => traveler.package === selectedPackage)
    }

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (traveler) =>
          traveler.name.toLowerCase().includes(query) ||
          traveler.email.toLowerCase().includes(query) ||
          traveler.phone.toLowerCase().includes(query) ||
          traveler.package.toLowerCase().includes(query) ||
          traveler.cancelReason.toLowerCase().includes(query),
      )
    }

    // Apply sorting
    if (sortConfig.key) {
      result.sort((a, b) => {
        if (a[sortConfig.key!] < b[sortConfig.key!]) {
          return sortConfig.direction === "ascending" ? -1 : 1
        }
        if (a[sortConfig.key!] > b[sortConfig.key!]) {
          return sortConfig.direction === "ascending" ? 1 : -1
        }
        return 0
      })
    }

    setFilteredTravelers(result)
    setCurrentPage(1) // Reset to first page when filters change
  }, [travelers, selectedPackage, selectedCategory, searchQuery, sortConfig])

  // Handle sorting
  const requestSort = (key: keyof Traveler) => {
    let direction: "ascending" | "descending" = "ascending"
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }
    setSortConfig({ key, direction })
  }

  // Pagination
  const totalPages = Math.ceil(filteredTravelers.length / ITEMS_PER_PAGE)
  const paginatedTravelers = filteredTravelers.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
  }





  return (
    <div className="space-y-4 px-4 md:px-6 mt-7">
        <h1 className="text-[#101010] text-[22px] font-[500]  mb-6">Traveler List</h1>
        
      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {/* Package Dropdown */}
          <div className="relative" ref={packageDropdownRef}>
            <button
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
              onClick={() => setPackageDropdownOpen(!packageDropdownOpen)}
            >
              {selectedPackage} <ChevronDown className="h-4 w-4" />
            </button>

            {packageDropdownOpen && (
              <div className="absolute z-10 mt-1 w-56 rounded-md bg-white shadow-lg border border-gray-200">
                <div className="py-1">
                  {packages.map((pkg) => (
                    <button
                      key={pkg}
                      className={`block w-full text-left px-4 py-2 text-sm ${selectedPackage === pkg ? "bg-gray-100" : "hover:bg-gray-50"}`}
                      onClick={() => {
                        setSelectedPackage(pkg)
                        setPackageDropdownOpen(false)
                      }}
                    >
                      {pkg}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Member Category Dropdown */}
          <div className="relative" ref={categoryDropdownRef}>
            <button
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
              onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
            >
              Member Category <ChevronDown className="h-4 w-4" />
            </button>

            {categoryDropdownOpen && (
              <div className="absolute z-10 mt-1 w-56 rounded-md bg-white shadow-lg border border-gray-200">
                <div className="py-1">
                  {memberCategories.map((category) => (
                    <button
                      key={category}
                      className={`block w-full text-left px-4 py-2 text-sm ${selectedCategory === category ? "bg-gray-100" : "hover:bg-gray-50"}`}
                      onClick={() => {
                        setSelectedCategory(category)
                        setCategoryDropdownOpen(false)
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="relative w-full sm:w-auto max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="search"
            placeholder="Search name, address, job, etc."
            className="w-full pl-8 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-2 top-2 text-gray-400 hover:text-gray-600">
            <SlidersHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>




      {/* Table */}
      <div className="rounded-md  bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#E8F5FF]">
              <tr>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort("name")}
                >
                  Name {sortConfig.key === "name" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </th>
                {!isMobile && (
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                )}
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort("phone")}
                >
                  Phone Number {sortConfig.key === "phone" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort("package")}
                >
                  Packages {sortConfig.key === "package" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </th>
                {!isMobile && (
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort("cancelReason")}
                  >
                    Cancel Reason{" "}
                    {sortConfig.key === "cancelReason" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedTravelers.length > 0 ? (
                paginatedTravelers.map((traveler) => (
                  <tr key={traveler.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                          {traveler.avatar ? (
                            <Image
                              src={traveler.avatar || "/placeholder.svg"}
                              width={500}
                              height={500}
                              alt={traveler.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                ;(e.target as HTMLImageElement).style.display = "none"
                              }}
                            />
                          ) : null}
                          <span className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                            {getInitials(traveler.name)}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{traveler.name}</div>
                          <div className="text-sm text-gray-500">{traveler.email}</div>
                        </div>
                      </div>
                    </td>
                    {!isMobile && (
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{traveler.date}</td>
                    )}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{traveler.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{traveler.package}</td>
                    {!isMobile && (
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{traveler.cancelReason}</td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={isMobile ? 3 : 5} className="px-6 py-8 text-center text-sm text-gray-500">
                    No travelers found matching your criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing {Math.min(ITEMS_PER_PAGE, filteredTravelers.length)} out of {filteredTravelers.length}
        </div>
        <div className="flex items-center space-x-2">
          <button
            className={`px-3 py-1 text-sm border border-gray-300 rounded-md ${
              currentPage === 1 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white hover:bg-gray-50"
            }`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            // Show pages around current page
            let pageNum = i + 1
            if (totalPages > 5) {
              if (currentPage > 3) {
                pageNum = currentPage - 3 + i
              }
              if (currentPage > totalPages - 2) {
                pageNum = totalPages - 4 + i
              }
            }

            return (
              <button
                key={i}
                className={`w-8 h-8 text-sm rounded-md ${
                  currentPage === pageNum
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => setCurrentPage(pageNum)}
              >
                {pageNum}
              </button>
            )
          })}

          {totalPages > 5 && currentPage < totalPages - 2 && (
            <>
              <span className="text-gray-500">...</span>
              <button
                className="w-8 h-8 text-sm bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
                onClick={() => setCurrentPage(totalPages)}
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            className={`px-3 py-1 text-sm border border-gray-300 rounded-md ${
              currentPage === totalPages ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white hover:bg-gray-50"
            }`}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
