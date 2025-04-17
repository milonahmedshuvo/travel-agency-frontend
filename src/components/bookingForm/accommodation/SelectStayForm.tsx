"use client"

import { useState } from "react"
import { Calendar, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function SelectStayForm() {
  const [checkInDate, setCheckInDate] = useState("March 12, 2025")
  const [checkOutDate, setCheckOutDate] = useState("March 15, 2025")
  const [guests, setGuests] = useState("3 Person")
  const [roomType, setRoomType] = useState("Deluxe Room - $155/per night")
  const [dataConsent, setDataConsent] = useState(false)
  const [termsConsent, setTermsConsent] = useState(false)

//   /booking/accommodation/selectStayForm


  return (
    <section className="max-w-[780px] mx-auto p-4 md:p-12 shadow bg-[#ffffff] ">
      <div className="mb-8">
        <p className="text-lg font-medium text-gray-600">Step 01</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">
          Select <span className="text-orange-400">Your Stay</span>
        </h1>
        <p className="text-gray-600 mt-2">Choose your check-in & check-out dates</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="check-in" className="text-lg font-medium text-gray-700">
              Check-in:
            </label>
            <div className="relative">
              <input
                id="check-in"
                type="text"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="pl-4 pr-10 py-3 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-blue-200"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="check-out" className="text-lg font-medium text-gray-700">
              Check-out:
            </label>
            <div className="relative">
              <input
                id="check-out"
                type="text"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="pl-4 pr-10 py-3 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-blue-200"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="guests" className="text-lg font-medium text-gray-700">
            Number of Guests:
          </label>
          <div className="relative">
            <select
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="appearance-none w-full pl-4 pr-10 py-3 border rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-blue-200"
            >
              <option value="1 Person">1 Person</option>
              <option value="2 Person">2 Person</option>
              <option value="3 Person">3 Person</option>
              <option value="4 Person">4 Person</option>
              <option value="5+ Person">5+ Person</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="room-type" className="text-lg font-medium text-gray-700">
            Select Room Type:
          </label>
          <div className="relative">
            <select
              id="room-type"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="appearance-none w-full pl-4 pr-10 py-3 border rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-blue-200"
            >
              <option value="Standard Room - $120/per night">Standard Room - $120/per night</option>
              <option value="Deluxe Room - $155/per night">Deluxe Room - $155/per night</option>
              <option value="Suite - $220/per night">Suite - $220/per night</option>
              <option value="Executive Suite - $350/per night">Executive Suite - $350/per night</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-2">
          <div className="flex items-start space-x-3">
            <div className="flex items-center h-5">
              <input
                id="data-consent"
                type="checkbox"
                checked={dataConsent}
                onChange={(e) => setDataConsent(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-200"
              />
            </div>
            <label htmlFor="data-consent" className="text-gray-600">
              By using this form, you agree with the storage and handling of your data by this website.
            </label>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex items-center h-5">
              <input
                id="terms-consent"
                type="checkbox"
                checked={termsConsent}
                onChange={(e) => setTermsConsent(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-200"
              />
            </div>
            <label htmlFor="terms-consent" className="text-gray-600">
              By using this form you agree to our{" "}
              <Link href="#" className="text-gray-800 font-medium underline">
                Terms and Conditions
              </Link>
            </label>
          </div>
        </div>

         <Link href='/booking/accommodation/guestFormOne' > 
        <button
          type="button"
          className="w-full py-3 px-4 mt-4 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] text-white font-medium rounded-md flex items-center justify-center transition-colors duration-200"
        >
          Enter Guest Details <ChevronRight className="ml-2" size={18} />
        </button>
        </Link>
      </div>
    </section>
  )
}

