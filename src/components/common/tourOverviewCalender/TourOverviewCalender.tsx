"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/components/lib/utils"


// Define types for date selection
type DateSelection = {
  day: number
  month: number
  year: number
}

export default function TourOverview() {
  const [currentMonth, setCurrentMonth] = useState(4) // May (0-indexed would be 4)
  const [currentYear, setCurrentYear] = useState(2024)
  const [startDate, setStartDate] = useState<DateSelection | null>(null)
  const [endDate, setEndDate] = useState<DateSelection | null>(null)
  const [hoverDate, setHoverDate] = useState<DateSelection | null>(null)
  const [selectionMode, setSelectionMode] = useState<"start" | "end">("start")

  // Function to get the number of days in a month
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  // Function to get the first day of the month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay()
  }

  // Function to generate calendar days for the current month
  const generateCalendarDays = (month: number, year: number) => {
    const daysInMonth = getDaysInMonth(month, year)
    const firstDay = getFirstDayOfMonth(month, year)

    // Create an array for the days of the month
    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null)
    }

    // Add the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }

    return days
  }

  // Function to handle month navigation
  const navigateMonth = (direction: "prev" | "next") => {
    if (direction === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11)
        setCurrentYear(currentYear - 1)
      } else {
        setCurrentMonth(currentMonth - 1)
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0)
        setCurrentYear(currentYear + 1)
      } else {
        setCurrentMonth(currentMonth + 1)
      }
    }
  }

  // Function to compare dates (returns true if date1 is before or equal to date2)
  const isDateBeforeOrEqual = (date1: DateSelection, date2: DateSelection) => {
    if (date1.year < date2.year) return true
    if (date1.year > date2.year) return false
    if (date1.month < date2.month) return true
    if (date1.month > date2.month) return false
    return date1.day <= date2.day
  }

  // Function to check if a date is between start and end dates
  const isDateInRange = (day: number, month: number, year: number) => {
    if (!startDate || (!endDate && !hoverDate)) return false

    const currentDate = { day, month, year }

    // If we have both start and end dates
    if (startDate && endDate) {
      return isDateBeforeOrEqual(startDate, currentDate) && isDateBeforeOrEqual(currentDate, endDate)
    }

    // If we have start date and hover date (for preview)
    if (startDate && hoverDate) {
      // Determine which date comes first
      if (isDateBeforeOrEqual(startDate, hoverDate)) {
        return isDateBeforeOrEqual(startDate, currentDate) && isDateBeforeOrEqual(currentDate, hoverDate)
      } else {
        return isDateBeforeOrEqual(hoverDate, currentDate) && isDateBeforeOrEqual(currentDate, startDate)
      }
    }

    return false
  }

  // Function to check if a date is the start or end of the range
  const isStartOrEndDate = (day: number, month: number, year: number) => {
    if (startDate && startDate.day === day && startDate.month === month && startDate.year === year) {
      return "start"
    }
    if (endDate && endDate.day === day && endDate.month === month && endDate.year === year) {
      return "end"
    }
    return null
  }

  // Function to handle date selection
  const handleDateSelect = (day: number, month: number, year: number) => {
    const selectedDate = { day, month, year }

    if (selectionMode === "start") {
      // Starting a new selection
      setStartDate(selectedDate)
      setEndDate(null)
      setSelectionMode("end")
    } else {
      // Completing a selection
      // Ensure end date is after start date
      if (startDate && isDateBeforeOrEqual(startDate, selectedDate)) {
        setEndDate(selectedDate)
      } else if (startDate) {
        // If user selects a date before start date, swap them
        setEndDate(startDate)
        setStartDate(selectedDate)
      }
      setSelectionMode("start")
    }
  }

  // Function to handle date hover for range preview
  const handleDateHover = (day: number, month: number, year: number) => {
    if (selectionMode === "end" && startDate) {
      setHoverDate({ day, month, year })
    }
  }

  // Reset hover date when mouse leaves the calendar
  const handleMouseLeave = () => {
    setHoverDate(null)
  }

  // Get month name
  const getMonthName = (month: number) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    return monthNames[month]
  }

  // Get next month
  const getNextMonth = () => {
    return currentMonth === 11 ? 0 : currentMonth + 1
  }

  // Get next month's year
  const getNextMonthYear = () => {
    return currentMonth === 11 ? currentYear + 1 : currentYear
  }

  // Generate calendar days for current and next month
  const currentMonthDays = generateCalendarDays(currentMonth, currentYear)
  const nextMonthDays = generateCalendarDays(getNextMonth(), getNextMonthYear())

  // Sample unavailable dates (for demonstration)
  const unavailableDates = [
    { day: 4, month: 4, year: 2024 },
    { day: 11, month: 4, year: 2024 },
    { day: 25, month: 4, year: 2024 },
    { day: 15, month: 5, year: 2024 },
  ]

  // Check if a date is unavailable
  const isDateUnavailable = (day: number, month: number, year: number) => {
    return unavailableDates.some((date) => date.day === day && date.month === month && date.year === year)
  }

  // Format date for display
  const formatDate = (date: DateSelection | null) => {
    if (!date) return ""
    return `${date.day} ${getMonthName(date.month)} ${date.year}`
  }




//   get start date and end date by calender 

const handleBookNow = () => {
    if (!startDate || !endDate) {
      alert("Please select a start and end date before booking.");
      return;
    }

    // Simulate booking process
    console.log("Booking tour from:", startDate, "to", endDate);
  };




  return (
    <div className=" p-4 md:p-6 bg-white rounded-lg mt-5">
      <h1 className="text-2xl md:text-3xl font-medium text-gray-800 mb-6">Tour Overview – Quick Facts at a Glance</h1>

      <div className="space-y-4 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <h2 className="font-semibold text-gray-900 w-48">Tour Name:</h2>
          <p className="text-gray-700">Tuscany Wine & Vineyard Tour</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center">
          <h2 className="font-semibold text-gray-900 w-48">Location:</h2>
          <p className="text-gray-700">Florence, Italy</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center">
          <h2 className="font-semibold text-gray-900 w-48">Cancellation Period:</h2>
          <p className="text-gray-700">Free</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center">
          <h2 className="font-semibold text-gray-900 w-48">Duration:</h2>
          <p className="text-gray-700">8 Hours (Full-day tour)</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center">
          <h2 className="font-semibold text-gray-900 w-48">Price:</h2>
          <p className="text-gray-700">$129 per person</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center">
          <h2 className="font-semibold text-gray-900 w-48">Group Size:</h2>
          <p className="text-gray-700">Small groups (Max 12 people)</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center">
          <h2 className="font-semibold text-gray-900 w-48">Tour Type:</h2>
          <p className="text-gray-700">Private / Luxury / Small Group</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center">
          <h2 className="font-semibold text-gray-900 w-48">Languages Available:</h2>
          <p className="text-gray-700">English, Italian, French</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="font-semibold text-gray-900 mb-4">Availability Date:</h2>

        {/* Selected Date Range Display */}
        <div className="mb-4 p-3 bg-gray-50 rounded-md">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-2 sm:mb-0">
              <span className="text-sm font-medium text-gray-500">Start Date:</span>
              <span className="ml-2 font-medium">{startDate ? formatDate(startDate) : "Select a date"}</span>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">End Date:</span>
              <span className="ml-2 font-medium">{endDate ? formatDate(endDate) : "Select a date"}</span>
            </div>
          </div>
          {startDate && !endDate && <p className="mt-2 text-sm text-blue-600">Now select your end date</p>}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Calendar Navigation */}
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <button   onClick={() => navigateMonth("prev")} className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous month</span>
            </button>
            <h3 className="text-lg font-medium">
              {getMonthName(currentMonth)} {currentYear}
            </h3>
            <button  onClick={() => navigateMonth("next")} className="rounded-full">
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next month</span>
            </button>
          </div>

          {/* Current Month Calendar */}
          <div className="w-full lg:w-1/2" onMouseLeave={handleMouseLeave}>
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => navigateMonth("prev")}
                className="rounded-full lg:visible"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous month</span>
              </button>
              <h3 className="text-lg font-medium">
                {getMonthName(currentMonth)} {currentYear}
              </h3>
              <div className="lg:hidden">
                <button  onClick={() => navigateMonth("next")} className="rounded-full">
                  <ChevronRight className="h-5 w-5" />
                  <span className="sr-only">Next month</span>
                </button>
              </div>
              <div className="hidden lg:block lg:w-10"></div> {/* Spacer for alignment */}
            </div>

            <div className="grid grid-cols-7 gap-1 text-center">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                <div key={index} className="text-sm font-medium text-gray-500 py-1">
                  {day}
                </div>
              ))}

              {currentMonthDays.map((day, index) => {
                if (day === null) {
                  return <div key={`current-empty-${index}`} className="aspect-square"></div>
                }

                const isUnavailable = isDateUnavailable(day, currentMonth, currentYear)
                const datePosition = isStartOrEndDate(day, currentMonth, currentYear)
                const isInRange = isDateInRange(day, currentMonth, currentYear)

                return (
                  <div key={`current-${index}`} className="aspect-square p-0.5">
                    <button
                      className={cn(
                        "w-full h-full flex items-center justify-center text-sm relative",
                        isUnavailable ? "text-gray-300 cursor-not-allowed" : "hover:bg-gray-100",
                        datePosition === "start" ? "bg-blue-600 text-white rounded-l-full z-10" : "",
                        datePosition === "end" ? "bg-blue-600 text-white rounded-r-full z-10" : "",
                        isInRange && !datePosition ? "bg-blue-100" : "",
                        // Add left and right rounded corners for range endpoints
                        isInRange && index % 7 === 0 ? "rounded-l-full" : "",
                        isInRange && (index + 1) % 7 === 0 ? "rounded-r-full" : "",
                      )}
                      disabled={isUnavailable}
                      onClick={() => !isUnavailable && handleDateSelect(day, currentMonth, currentYear)}
                      onMouseEnter={() => handleDateHover(day, currentMonth, currentYear)}
                    >
                      {day}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Next Month Calendar */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0" onMouseLeave={handleMouseLeave}>
            <div className="flex items-center justify-between mb-4">
              <div className="hidden lg:block lg:w-10"></div> {/* Spacer for alignment */}
              <h3 className="text-lg font-medium">
                {getMonthName(getNextMonth())} {getNextMonthYear()}
              </h3>
              <button  onClick={() => navigateMonth("next")} className="rounded-full">
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next month</span>
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                <div key={index} className="text-sm font-medium text-gray-500 py-1">
                  {day}
                </div>
              ))}

              {nextMonthDays.map((day, index) => {
                if (day === null) {
                  return <div key={`next-empty-${index}`} className="aspect-square"></div>
                }

                const nextMonth = getNextMonth()
                const nextMonthYear = getNextMonthYear()
                const isUnavailable = isDateUnavailable(day, nextMonth, nextMonthYear)
                const datePosition = isStartOrEndDate(day, nextMonth, nextMonthYear)
                const isInRange = isDateInRange(day, nextMonth, nextMonthYear)

                return (
                  <div key={`next-${index}`} className="aspect-square p-0.5">
                    <button
                      className={cn(
                        "w-full h-full flex items-center justify-center text-sm relative",
                        isUnavailable ? "text-gray-300 cursor-not-allowed" : "hover:bg-gray-100",
                        datePosition === "start" ? "bg-blue-600 text-white rounded-l-full z-10" : "",
                        datePosition === "end" ? "bg-blue-600 text-white rounded-r-full z-10" : "",
                        isInRange && !datePosition ? "bg-blue-100" : "",
                        // Add left and right rounded corners for range endpoints
                        isInRange && index % 7 === 0 ? "rounded-l-full" : "",
                        isInRange && (index + 1) % 7 === 0 ? "rounded-r-full" : "",
                      )}
                      disabled={isUnavailable}
                      onClick={() => !isUnavailable && handleDateSelect(day, nextMonth, nextMonthYear)}
                      onMouseEnter={() => handleDateHover(day, nextMonth, nextMonthYear)}
                    >
                      {day}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleBookNow}
          type="submit"
          className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md font-medium"
          disabled={!startDate || !endDate}
        >
          Book Now
        </button>

        <button
          className="w-full sm:w-auto"
          onClick={() => {
            setStartDate(null)
            setEndDate(null)
            setSelectionMode("start")
          }}
        >
          Clear Selection
        </button>
      </div>
    </div>
  )
}

