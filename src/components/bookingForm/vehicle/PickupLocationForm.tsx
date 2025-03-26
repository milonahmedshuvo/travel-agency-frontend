"use client"
import { useState } from "react"


export default function PickupLocationForm() {
  const [date, setDate] = useState("16 March, 2025")
  const [time, setTime] = useState("8.00 AM")
  const [vehicleType, setVehicleType] = useState("Boat")

  return (
    <section className="bg-[#F4F4F4] rounded">  
    <div className="space-y-6  max-w-[780px] mx-auto p-4 md:p-12  shadow bg-[#ffffff] rounded ">
      <div className="space-y-2">
        <h2 className="text-lg font-medium text-gray-700">Step 01</h2>
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="text-[#FF9966]">Pick-Up</span> Location
        </h1>
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="address" className="text-gray-700 font-medium">
            Hotel/Address Input
          </label>
          <input
            id="address"
            type="text"
            placeholder="Hotel Sheraton"
            className="w-full h-12 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="date" className="text-gray-700 font-medium">
            Pick-Up Date
          </label>
          <div className="relative">
            <input
              id="date"
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full h-12 px-3 rounded-md border border-gray-300 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="time" className="text-gray-700 font-medium">
            Time Selector
          </label>
          <div className="relative">
            <select
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full h-12 px-3 rounded-md border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="7.00 AM">7.00 AM</option>
              <option value="7.30 AM">7.30 AM</option>
              <option value="8.00 AM">8.00 AM</option>
              <option value="8.30 AM">8.30 AM</option>
              <option value="9.00 AM">9.00 AM</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="vehicle" className="text-gray-700 font-medium">
            Select Vehicle Type <span className="text-gray-400">(if applicable)</span>
          </label>
          <div className="relative">
            <select
              id="vehicle"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="w-full h-12 px-3 rounded-md border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Car">Car</option>
              <option value="Van">Van</option>
              <option value="Boat">Boat</option>
              <option value="Helicopter">Helicopter</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        <button
          className="w-full h-12 mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md flex items-center justify-center gap-2 transition-colors"
          onClick={() => console.log("Next clicked")}
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
    </section>
  )
}

