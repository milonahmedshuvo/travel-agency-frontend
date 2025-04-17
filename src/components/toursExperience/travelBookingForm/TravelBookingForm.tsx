"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ChevronDown, Calendar, Clock, Users, MapPin } from "lucide-react"


// Reusable Dropdown component
interface DropdownProps {
  options: string[]
  value: string
  onChange: (value: string) => void
  icon: React.ReactNode
  placeholder: string
}

function Dropdown({ options, value, onChange, icon, placeholder }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center border rounded-md px-3 py-2 bg-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon}
        <div className="flex-1 truncate">{value || placeholder}</div>
        <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onChange(option)
                setIsOpen(false)
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Date picker component
function DatePicker({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="flex items-center border rounded-md px-3 py-2 bg-white">
      <Calendar className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Select date"
        className="flex-1 outline-none"
      />
    </div>
  )
}

export default function TravelBookingForm() {
  // Sample data for dropdowns
  const locations = ["Dhaka, Bangladesh", "Kuala Lumpur, Malaysia", "Bangkok, Thailand", "Singapore", "Tokyo, Japan"]
  const destinations = ["Bali, Indonesia", "Phuket, Thailand", "Maldives", "Paris, France", "New York, USA"]
  const durations = ["12 Hours", "1 Day", "2 Days", "3 Days", "1 Week", "2 Weeks"]
  const passengerOptions = [
    "Adult-1, Children-0",
    "Adult-2, Children-0",
    "Adult-2, Children-2",
    "Adult-3, Children-5",
    "Adult-4, Children-2",
  ]

  // State for form values
  const [pickupLocation, setPickupLocation] = useState("Dhaka, Bangladesh")
  const [destination, setDestination] = useState("Bali, Indonesia")
  const [date, setDate] = useState("March 12, 2025")
  const [duration, setDuration] = useState("12 Hours")
  const [passengers, setPassengers] = useState("Adult-3, Children-5")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality here
    console.log({
      pickupLocation,
      destination,
      date,
      duration,
      passengers,
    })
  }

  return (
    <div className="bg-[#F4F4F4] ">   
    <div className="w-full py-4 custom-container ">
      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="space-y-2">
            <label htmlFor="pickup" className="block text-sm font-medium">
              Pick-up Location
            </label>
            <Dropdown
              options={locations}
              value={pickupLocation}
              onChange={setPickupLocation}
              icon={<MapPin className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />}
              placeholder="Select pick-up location"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="destination" className="block text-sm font-medium">
              Choose Your Destination
            </label>
            <Dropdown
              options={destinations}
              value={destination}
              onChange={setDestination}
              icon={<MapPin className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />}
              placeholder="Select destination"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="date" className="block text-sm font-medium">
              Date
            </label>
            <DatePicker value={date} onChange={setDate} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label htmlFor="duration" className="block text-sm font-medium">
              Duration
            </label>
            <Dropdown
              options={durations}
              value={duration}
              onChange={setDuration}
              icon={<Clock className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />}
              placeholder="Select duration"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="passengers" className="block text-sm font-medium">
              Adults - Children
            </label>
            <Dropdown
              options={passengerOptions}
              value={passengers}
              onChange={setPassengers}
              icon={<Users className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />}
              placeholder="Select passengers"
            />
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  )
}

