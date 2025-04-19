"use client"

import { useState } from "react"
import { MoreHorizontal } from "lucide-react"

// Rating data
const ratingCategories = [
  { name: "Accommodation", rating: 4.6 },
  { name: "Sea Tour", rating: 4.8 },
  { name: "Land Tour", rating: 4.4 },
  { name: "Cultural Tours", rating: 4.7 },
  { name: "Culinary & Wine Adventures", rating: 4.3 },
]

export default function RatingsOverview() {
  const overallRating = 4.5
  const totalReviews = 1250
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            {overallRating}
            <span  className="text-sm text-gray-500 font-normal ml-1">/5</span>
          </div>
        </div>

        <div>
          <div className="mt-1 text-lg font-semibold text-blue-500">Excellent</div>
           <div className="text-sm text-gray-500 mt-1">From {totalReviews.toLocaleString()} Reviews</div>
        </div>

      </div>

      <div className="space-y-4">
        {ratingCategories.map((category) => (
          <div key={category.name} className="flex items-center justify-between">
            <span className="text-gray-700">{category.name}</span>
            <div className="flex items-center">
              <div className="flex mr-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">
                    {star <= Math.floor(category.rating) ? "★" : star - 0.5 <= category.rating ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <span className="text-gray-700 font-medium">{category.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
