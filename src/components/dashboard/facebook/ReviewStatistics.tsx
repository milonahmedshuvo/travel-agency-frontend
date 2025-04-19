"use client"

import { useState } from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"
import { ChevronDown } from "lucide-react"

// Sample data for the chart
const data = [
  { month: "Aug 27", positive: 900, negative: 550 },
  { month: "Sep 27", positive: 800, negative: 620 },
  { month: "Oct 27", positive: 1050, negative: 480 },
  { month: "Nov 27", positive: 950, negative: 380 },
  { month: "Dec 27", positive: 780, negative: 580 },
  { month: "Jan 28", positive: 650, negative: 800 },
  { month: "Feb 28", positive: 850, negative: 550 },
  { month: "Mar 28", positive: 980, negative: 580 },
  { month: "Apr 28", positive: 1100, negative: 650 },
  { month: "May 28", positive: 950, negative: 500 },
  { month: "Jun 28", positive: 820, negative: 300 },
  { month: "Jul 28", positive: 950, negative: 550 },
]

const timeRanges = ["Last 12 Months", "Last 6 Months", "Last 3 Months", "Last Month", "This Year", "Last Year"]

export default function ReviewStatistics() {
  const [selectedRange, setSelectedRange] = useState("Last 12 Months")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[20px] font-medium">Review Statistics</h2>
        <div className="relative">
          <button
            className="flex items-center justify-center px-4 py-2 bg-linear-to-t from-[#156CF0]  via-50%  to-[#38B6FF] to-50% text-white rounded-md focus:outline-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedRange} <ChevronDown className="ml-2 h-4 w-4" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <ul className="py-1">
                {timeRanges.map((range) => (
                  <li key={range}>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setSelectedRange(range)
                        setIsDropdownOpen(false)
                      }}
                    >
                      {range}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center mb-4 space-x-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
          <span className="text-sm text-gray-600">Positive</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
          <span className="text-sm text-gray-600">Negative</span>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 20 }} barGap={0} barSize={20}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} domain={[0, 1200]} tickCount={5} />
            <Tooltip
              cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
              contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
            />
            <Bar dataKey="positive" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="negative" fill="#D1D5DB" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
