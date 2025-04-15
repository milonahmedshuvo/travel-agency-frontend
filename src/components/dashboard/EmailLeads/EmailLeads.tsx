/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useEffect } from "react"
import { Search, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

interface Lead {
  id: string
  email: string
  subscriptionDate: string
  phoneNumber: string
  address: string
  selected?: boolean
}

export default function EmailLeadsTable() {
  const [searchQuery, setSearchQuery] = useState("")
  const [dateFilter, setDateFilter] = useState("Today")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedLeads, setSelectedLeads] = useState<string[]>([])
  const [allSelected, setAllSelected] = useState(false)
  const [leads, setLeads] = useState<Lead[]>([])
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([])
  const [isSelectOpen, setIsSelectOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const itemsPerPage = 10
  const totalLeads = 1450
  const totalPages = Math.ceil(totalLeads / itemsPerPage)

  // Custom mobile hook replacement
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  useEffect(() => {
    // Mock data generation
    const mockLeads: Lead[] = [
      {
        id: "1",
        email: "camellia.swan@example.com",
        subscriptionDate: "March 12, 2025",
        phoneNumber: "+1 (555) 123-4567",
        address: "Bali, Indonesia",
      },
      {
        id: "2",
        email: "raphael.goodman@example.com",
        subscriptionDate: "March 12, 2025",
        phoneNumber: "+1 (555) 234-5678",
        address: "Jakarta, Indonesia",
      },
      {
        id: "3",
        email: "ludwig.contessa@example.com",
        subscriptionDate: "March 12, 2025",
        phoneNumber: "+1 (555) 345-6789",
        address: "Bandung, Indonesia",
      },
      {
        id: "4",
        email: "armina.meyes@example.com",
        subscriptionDate: "March 12, 2025",
        phoneNumber: "+1 (555) 456-7890",
        address: "Surabaya, Indonesia",
      },
      {
        id: "5",
        email: "james.dunn@example.com",
        subscriptionDate: "March 12, 2025",
        phoneNumber: "+1 (555) 567-8901",
        address: "Yogyakarta, Indonesia",
      },
      {
        id: "6",
        email: "hillary.grey@example.com",
        subscriptionDate: "March 12, 2025",
        phoneNumber: "+1 (555) 345-6780",
        address: "Melbourne, Australia",
      },
      {
        id: "7",
        email: "lucas.oconnor@example.com",
        subscriptionDate: "March 12, 2025",
        phoneNumber: "+1 (555) 901-2345",
        address: "Munich, Germany",
      },
      {
        id: "8",
        email: "layla.linch@example.com",
        subscriptionDate: "March 12, 2025",
        phoneNumber: "+1 (555) 012-3456",
        address: "Cape Town, South Africa",
      },
      {
        id: "9",
        email: "sophia.lee@example.com",
        subscriptionDate: "March 12, 2025",
        phoneNumber: "+1 (555) 678-9012",
        address: "Seoul, South Korea",
      },
      {
        id: "10",
        email: "michael.smith@example.com",
        subscriptionDate: "March 12, 2025",
        phoneNumber: "+1 (555) 789-0123",
        address: "Sydney, Australia",
      },
      {
        id: "11",
        email: "zaire.dorwart@example.com",
        subscriptionDate: "March 12, 2025",
        phoneNumber: "+1 (555) 345-7890",
        address: "Madrid, Spain",
      },
    ]

    setLeads(mockLeads)
    setFilteredLeads(mockLeads)
  }, [])

  useEffect(() => {
    // Filter leads based on search query
    const filtered = leads.filter(
      (lead) =>
        lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.phoneNumber.includes(searchQuery),
    )
    setFilteredLeads(filtered)
    setCurrentPage(1) // Reset to first page when filtering
  }, [searchQuery, leads])

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedLeads([])
    } else {
      setSelectedLeads(filteredLeads.map((lead) => lead.id))
    }
    setAllSelected(!allSelected)
  }

  const handleSelectLead = (id: string) => {
    if (selectedLeads.includes(id)) {
      setSelectedLeads(selectedLeads.filter((leadId) => leadId !== id))
      setAllSelected(false)
    } else {
      setSelectedLeads([...selectedLeads, id])
      if (selectedLeads.length + 1 === filteredLeads.length) {
        setAllSelected(true)
      }
    }
  }

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  const displayedLeads = filteredLeads.slice(0, itemsPerPage)

  // Helper function to combine class names (replacement for cn utility)
  const classNames = (...classes: (string | boolean | undefined)[]) => {
    return classes.filter(Boolean).join(" ")
  }

  return (
    <div className="w-full mt-10 px-4 md:px-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-[20px] font-[500] mb-4 md:mb-0">Email leads</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search name, package, etc"
              className="pl-10 w-full md:w-64 h-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Custom select dropdown */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center justify-between w-full md:w-40 h-10 px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setIsSelectOpen(!isSelectOpen)}
            >
              <span>{dateFilter}</span>
              <ChevronDown className="h-4 w-4 ml-2" />
            </button>

            {isSelectOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg  ">
                <ul className="py-1">
                  {["Today", "Yesterday", "Last 7 days", "Last 30 days", "Custom"].map((option) => (
                    <li
                      key={option}
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setDateFilter(option)
                        setIsSelectOpen(false)
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-50">
              <th className="p-4 text-left">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={allSelected}
                    onChange={handleSelectAll}
                    aria-label="Select all"
                  />
                </div>
              </th>
              <th className="p-4 text-left font-medium text-gray-600">Name</th>
              <th className="p-4 text-left font-medium text-gray-600">Subscription Date</th>
              <th className="p-4 text-left font-medium text-gray-600">Phone Number</th>
              <th className="p-4 text-left font-medium text-gray-600">Address</th>
            </tr>
          </thead>
          <tbody>
            {displayedLeads.map((lead) => (
              <tr key={lead.id} className="border-b border-gray-200 hover:bg-gray-50 ">
                <td className="p-4 ">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={selectedLeads.includes(lead.id)}
                      onChange={() => handleSelectLead(lead.id)}
                      aria-label={`Select ${lead.email}`}
                    />
                  </div>
                </td>
                <td className="p-4 text-gray-600">{lead.email}</td>
                <td className="p-4">{lead.subscriptionDate}</td>
                <td className="p-4">{lead.phoneNumber}</td>
                <td className="p-4">{lead.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-6">
        <div className="text-sm text-gray-500 mb-4 md:mb-0">
          Showing {Math.min(itemsPerPage, filteredLeads.length)} out of {totalLeads}
        </div>
        <div className="flex items-center space-x-2">
          {/* Previous page button */}
          <button
            className={classNames(
              "inline-flex items-center justify-center w-8 h-8 rounded-md border",
              currentPage === 1
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-gray-300 text-gray-700 hover:bg-gray-50",
            )}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Page numbers */}
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={classNames(
                "inline-flex items-center justify-center w-8 h-8 rounded-md",
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-50",
              )}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}

          <span className="text-gray-500">...</span>

          <button
            className={classNames(
              "inline-flex items-center justify-center w-8 h-8 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50",
            )}
            onClick={() => handlePageChange(16)}
          >
            16
          </button>

          {/* Next page button */}
          <button
            className={classNames(
              "inline-flex items-center justify-center w-8 h-8 rounded-md border",
              currentPage === totalPages
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-gray-300 text-gray-700 hover:bg-gray-50",
            )}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
