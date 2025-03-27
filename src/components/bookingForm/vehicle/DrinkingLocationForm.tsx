"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"


export default function DrinkingLocationForm() {
  const [formData, setFormData] = useState({
    restaurantName: "Tanmoy Bar & Restaurant",
    address: "Dhaka, Bangladesh",
    stayDuration: "5 Hours",
  })

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const timeOptions = ["1 Hour", "2 Hours", "3 Hours", "4 Hours", "5 Hours", "6+ Hours"]

  const selectTime = (time: string) => {
    setFormData((prev) => ({ ...prev, stayDuration: time }))
    setIsDropdownOpen(false)
  }

  return (
    <section className="bg-[#F4F4F4] rounded"> 
    <div className="w-full  max-w-[780px] mx-auto p-4 md:p-12  shadow bg-[#ffffff] rounded">
      <div className="mb-8">
        <p className="text-gray-700 font-medium mb-1">Step 02</p>
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="text-orange-400">Drinking Location</span> Details
        </h1>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="restaurantName" className="block text-gray-700">
            Name of Restaurant / Bar / Winery
          </label>
          <input
            id="restaurantName"
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="address" className="block text-gray-700">
            Address
          </label>
          <input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="stayDuration" className="block text-gray-700">
            Expected Time of Stay
          </label>
          <div className="relative">
            <button
              type="button"
              className="w-full p-3 border rounded-md flex justify-between items-center bg-white"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{formData.stayDuration}</span>
              <ChevronDown className="h-5 w-5 text-gray-500" />
            </button>

            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
                {timeOptions.map((time) => (
                  <div key={time} className="p-3 hover:bg-gray-100 cursor-pointer" onClick={() => selectTime(time)}>
                    {time}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <Link href='/booking/vehicle/returnPreferences'> 
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md flex items-center justify-center"
          onClick={() => console.log("Form submitted:", formData)}
        >
          <span>Next</span>
          <ChevronRight className="ml-2 h-5 w-5" />
        </button>
        </Link>
      </div>
    </div>
    </section>
  )
}

