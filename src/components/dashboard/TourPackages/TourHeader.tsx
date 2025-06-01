"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

interface HeaderProps {
  title: string
  onAddPackage: () => void
}

export function Header({ title, onAddPackage }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedSort, setSelectedSort] = useState("Sea Tour")

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  
  console.log(selectedSort)
  


  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
      <h1 className="text-[23px] font-[500] text-[#000E19]">{title}</h1>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between w-[140px] px-3 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span>{selectedSort}</span>
              <svg
                className={`w-4 h-4 ml-2 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                <ul className="py-1">
                  <li
                    className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    onClick={() => setSelectedSort("Sea Tour")}
                  >
                    Sea Tour
                  </li>
                  <li
                    className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    onClick={() => setSelectedSort("Low to High")}
                  >
                    Low to High
                  </li>
                  <li
                    className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    onClick={() => setSelectedSort("High to Low")}
                  >
                    High to Low
                  </li>
                  <li
                    className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    onClick={() => setSelectedSort("Rating")}
                  >
                    Rating
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <button
          onClick={onAddPackage}
          className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-linear-to-t from-[#156CF0]  via-50%  to-[#38B6FF] to-50% rounded-md  transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" /> Add Hotel
        </button>
      </div>
    </div>
  )
}
