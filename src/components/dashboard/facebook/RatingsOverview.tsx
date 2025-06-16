"use client"

import { useState } from "react"
import { MoreHorizontal } from "lucide-react"
import { useFacebookAnalytiseQuery } from "@/redux/api/analytise/facebookApi"
import { format, subMonths } from "date-fns"

export default function RatingsOverview() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Get ratings data (last 3 months used as default)
  const today = new Date()
  const startDate = format(subMonths(today, 12), "yyyy-MM-dd")
  const endDate = format(today, "yyyy-MM-dd")

  const { data, isLoading } = useFacebookAnalytiseQuery({ startDate, endDate })
  // console.log(data)
  const overallRating = data?.totalAverage || 0
  const totalReviews = data?.categories?.reduce((acc, curr) => acc + curr.totalFeedback, 0) || 0
  const ratingCategories = data?.categories || []

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[20px] font-medium">Ratings</h2>
        <div className="relative">
          <button
            className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MoreHorizontal className="h-5 w-5" />
            <span className="sr-only">More options</span>
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <ul className="py-1">
                <li>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Export as CSV
                  </button>
                </li>
                <li>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Print Report
                  </button>
                </li>
                <li>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    View Detailed Analytics
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mb-6 flex gap-3">
        <div className="flex items-center">
          <div className="text-4xl font-bold text-blue-500 flex items-center">
            <span className="text-yellow-400 mr-2">★</span>
            {overallRating.toFixed(1)}
            <span className="text-sm text-gray-500 font-normal ml-1">/5</span>
          </div>
        </div>
        <div>
          <div className="mt-1 text-lg font-semibold text-blue-500">Excellent</div>
          <div className="text-sm text-gray-500 mt-1">From {totalReviews.toLocaleString()} Reviews</div>
        </div>
      </div>

      {isLoading ? (
        <p className="text-gray-500">Loading category ratings...</p>
      ) : (
        <div className="space-y-4">
          {ratingCategories?.map((category) => (
            <div key={category.name} className="flex items-center justify-between">
              <span className="text-gray-700 capitalize">{category.name.replace(/_/g, " ").toLowerCase()}</span>
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400">
                      {star <= Math.floor(category.averageRating)
                        ? "★"
                        : star - 0.5 <= category.averageRating
                        ? "★"
                        : "☆"}
                    </span>
                  ))}
                </div>
                <span className="text-gray-700 font-medium">
                  {category.averageRating.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
