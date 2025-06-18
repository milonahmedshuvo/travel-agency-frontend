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
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[20px] font-medium text-gray-900">Review Statistics</h2>
        <div className="relative">
          <button
            className="flex items-center justify-center px-4 py-2 bg-gradient-to-t from-[#156CF0] via-[#156CF0] via-50% to-[#38B6FF] to-50% text-white rounded-md focus:outline-none text-sm font-medium"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedRange} <ChevronDown className="ml-2 h-4 w-4" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
              <ul className="py-1">
                {timeRanges.map((range) => (
                  <li key={range}>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
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
          <div className="w-3 h-3 rounded-full bg-[#3B82F6] mr-2"></div>
          <span className="text-sm text-gray-600">Positive</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#D1D5DB] mr-2"></div>
          <span className="text-sm text-gray-600">Negative</span>
        </div>
      </div>

      <div className="h-[300px] w-full">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        ) : chartData.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-sm">No data available for the selected period</p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={chartData} 
              margin={{ top: 10, right: 10, left: 0, bottom: 20 }} 
              barGap={0} 
              barSize={20}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: "#6B7280" }} 
                tickMargin={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: "#6B7280" }} 
                domain={[0, 'dataMax + 100']} 
                tickCount={5}
              />
              <Tooltip
                cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
                contentStyle={{ 
                  borderRadius: "8px", 
                  border: "none", 
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#ffffff",
                  fontSize: "12px",
                }}
                itemStyle={{
                  color: "#1F2937",
                  padding: "2px 0",
                }}
                labelStyle={{
                  fontWeight: 600,
                  color: "#111827",
                  marginBottom: "4px",
                }}
                formatter={(value, name) => [value, name]}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Bar 
                dataKey="positive" 
                fill="#3B82F6" 
                radius={[4, 4, 0, 0]} 
                name="Positive"
              />
              <Bar 
                dataKey="negative" 
                fill="#D1D5DB" 
                radius={[4, 4, 0, 0]} 
                name="Negative"
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  )
}