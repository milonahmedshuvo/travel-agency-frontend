"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

export default function ReturnPreferencesForm() {
  const [sameAsPickup, setSameAsPickup] = useState(false)
  const [dropOffLocation, setDropOffLocation] = useState("Mirpur, Bangladesh")
  const [needAdditionalStops, setNeedAdditionalStops] = useState("Yes/No")
  const [isSelectOpen, setIsSelectOpen] = useState(false)

  const handleNext = () => {
    console.log({
      sameAsPickup,
      dropOffLocation,
      needAdditionalStops,
    })
    // Handle form submission
  }

  const handleToggle = () => {
    setSameAsPickup(!sameAsPickup)
  }

  
  const selectOption = (option: string) => {
    setNeedAdditionalStops(option)
    setIsSelectOpen(false)
  }

  return (
    <section className="bg-[#F4F4F4] rounded"> 
    <div className="w-full max-w-[780px] mx-auto p-4 md:p-12  shadow bg-[#ffffff] rounded">
      <div className="mb-8">
        <p className="text-lg font-medium text-gray-600">Step 03</p>
        <h1 className="text-4xl font-bold">
          Return <span className="text-orange-400">Preferences</span>
        </h1>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="same-pickup" className="text-base font-medium">
              Same as Pick-Up?
            </label>
            <div className="flex items-center gap-2">
              <span className={`text-sm ${!sameAsPickup ? "text-red-500 font-medium" : "text-gray-500"}`}>No</span>

              {/* Custom toggle switch */}
              <div
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${sameAsPickup ? "bg-green-500" : "bg-gray-200"}`}
                onClick={handleToggle}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${sameAsPickup ? "translate-x-6" : "translate-x-1"}`}
                />
              </div>

              <span className={`text-sm ${sameAsPickup ? "text-green-600 font-medium" : "text-gray-500"}`}>Yes</span>
            </div>
          </div>
        </div>

        {!sameAsPickup && (
          <div className="space-y-2">
            <label htmlFor="drop-off" className="block text-base font-medium">
              New Drop-Off Location
            </label>
            <input
              id="drop-off"
              type="text"
              value={dropOffLocation}
              onChange={(e) => setDropOffLocation(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-4 h-14 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="additional-stops" className="block text-base font-medium">
            Need Additional Stops?
          </label>

          {/* Custom select dropdown */}
          <div className="relative">
            <div
              className="flex items-center justify-between w-full h-14 p-4 border border-gray-300 rounded-md cursor-pointer"
              onClick={() => setIsSelectOpen(!isSelectOpen)}
            >
              <span className={needAdditionalStops === "Yes/No" ? "text-gray-500" : "text-black"}>
                {needAdditionalStops}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform ${isSelectOpen ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>

            {isSelectOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                <div className="p-3 hover:bg-gray-100 cursor-pointer" onClick={() => selectOption("Yes")}>
                  Yes
                </div>
                <div className="p-3 hover:bg-gray-100 cursor-pointer" onClick={() => selectOption("No")}>
                  No
                </div>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="w-full h-14 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md flex items-center justify-center"
        >
          Next
          <ChevronRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
    </section>
  )
}

