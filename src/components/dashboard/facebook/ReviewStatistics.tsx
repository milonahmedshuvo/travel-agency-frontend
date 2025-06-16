"use client"

import { useState } from "react"
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"
import { ChevronDown } from "lucide-react"
import { useFacebookAnalytiseQuery } from "@/redux/api/analytise/facebookApi"
import { format, subMonths, startOfYear, endOfYear } from "date-fns"

const timeRanges = [
  "Last 12 Months",
  "Last 6 Months",
  "Last 3 Months",
  "Last Month",
  "This Year",
  "Last Year",
]

function getDateRange(range: string) {


  
  const today = new Date()
  switch (range) {
    case "Last 12 Months":
      return {
        startDate: format(subMonths(today, 12), "yyyy-MM-dd"),
        endDate: format(today, "yyyy-MM-dd"),
      }
    case "Last 6 Months":
      return {
        startDate: format(subMonths(today, 6), "yyyy-MM-dd"),
        endDate: format(today, "yyyy-MM-dd"),
      }
    case "Last 3 Months":
      return {
        startDate: format(subMonths(today, 3), "yyyy-MM-dd"),
        endDate: format(today, "yyyy-MM-dd"),
      }
    case "Last Month":
      return {
        startDate: format(subMonths(today, 1), "yyyy-MM-dd"),
        endDate: format(today, "yyyy-MM-dd"),
      }
    case "This Year":
      return {
        startDate: format(startOfYear(today), "yyyy-MM-dd"),
        endDate: format(today, "yyyy-MM-dd"),
      }
    case "Last Year":
      const lastYear = new Date(today.getFullYear() - 1, 0, 1)
      return {
        startDate: format(startOfYear(lastYear), "yyyy-MM-dd"),
        endDate: format(endOfYear(lastYear), "yyyy-MM-dd"),
      }
    default:
      return {
        startDate: format(subMonths(today, 12), "yyyy-MM-dd"),
        endDate: format(today, "yyyy-MM-dd"),
      }
  }
}

export default function ReviewStatistics() {
  const [selectedRange, setSelectedRange] = useState("Last 12 Months")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const { startDate, endDate } = getDateRange(selectedRange)
  const { data: reviews, isLoading } = useFacebookAnalytiseQuery({
    startDate,
    endDate,
  })

  // Prepare chart data
  const chartData =
    reviews?.analytics.map((item) => ({
      month: format(new Date(item.date), "MMM dd"),
      positive: item.positive,
      negative: item.negative,
    })) || []

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[20px] font-medium">Review Statistics</h2>
        <div className="relative">
          <button
            className="flex items-center justify-center px-4 py-2 bg-gradient-to-t from-[#156CF0] to-[#38B6FF] text-white rounded-md focus:outline-none"
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
        {isLoading ? (
          <p className="text-gray-500">Loading chart...</p>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }} barGap={0} barSize={20}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} domain={[0, 'auto']} />
              <Tooltip
                cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
                contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
              />
              <Bar dataKey="positive" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="negative" fill="#D1D5DB" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  )
}
