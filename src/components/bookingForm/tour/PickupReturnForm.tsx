/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import {  ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"

type FormValues = {
  hotelAddress: string
  pickupDate: Date
  pickupTime: string
  vehicleType: string
}

const timeOptions = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
]

const vehicleOptions = ["Boat", "Car", "Van", "Minibus", "Luxury Vehicle"]

export default function PickupReturnForm() {
  const [showCalendar, setShowCalendar] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      hotelAddress: "Hotel Sheraton",
      pickupDate: new Date(),
      pickupTime: "8:00 AM",
      vehicleType: "Boat",
    },
  })

  const selectedDate = watch("pickupDate")

  const onSubmit = (data: FormValues) => {
    console.log( 'pick up date:', data)
    // Handle form submission
  }


  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setValue("pickupDate", new Date(e.target.value))
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-6">
      <div className="flex justify-end items-center mb-4">
        {/* <h2 className="text-xl font-medium">
          Step 03 <span className="text-gray-400">(Optional)</span>
        </h2> */}
        <Link href='/booking/reviewBooking'> 
        <button className="text-gray-700 flex items-center">
          Skip <ChevronRight className="ml-1 h-4 w-4" />
        </button>
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-3">
        <span className="text-orange-400">Pick-Up & Return</span>
        <br />
        Preferences
      </h1>

      <p className="text-gray-700 mb-10">
        If you plan to drink during your excursion, please provide your pick-up and return details so we can arrange
        safe transportation for you.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="hotelAddress" className="block text-lg font-medium">
            Hotel/Address Input
          </label>
          <input
            id="hotelAddress"
            type="text"
            placeholder="Enter hotel or address"
            {...register("hotelAddress", { required: "Address is required" })}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.hotelAddress && <p className="text-red-500 text-sm">{errors.hotelAddress.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="pickupDate" className="block text-lg font-medium">
            Pick-Up Date
          </label>
        <div className="relative">
            <input
              id="date"
              type="date"
              aria-invalid={errors.pickupDate ? "true" : "false"}
              aria-describedby={errors.pickupDate ? "date-error" : undefined}
              className={`w-full border ${errors.pickupDate ? "border-red-500" : "border-gray-300"} rounded-md p-4 text-base pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              {...register("pickupDate")}
            />
            {/* <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} /> */}
            {errors.pickupDate && (
              <p id="date-error" className="mt-1 text-sm text-red-600">
                {errors.pickupDate.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="pickupTime" className="block text-lg font-medium">
            Time Selector
          </label>
          <Controller
            control={control}
            name="pickupTime"
            render={({ field }) => (
              <div className="relative">
                <select
                  className="w-full p-3 rounded-lg border border-gray-300 appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={field.onChange}
                  value={field.value}
                >
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 pointer-events-none text-gray-500" />
              </div>
            )}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="vehicleType" className="block text-lg font-medium">
            Select Vehicle Type <span className="text-gray-400">(if applicable)</span>
          </label>
          <Controller
            control={control}
            name="vehicleType"
            render={({ field }) => (
              <div className="relative">
                <select
                  className="w-full p-3 rounded-lg border border-gray-300 appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={field.onChange}
                  value={field.value}
                >
                  {vehicleOptions.map((vehicle) => (
                    <option key={vehicle} value={vehicle}>
                      {vehicle}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 pointer-events-none text-gray-500" />
              </div>
            )}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            type="button"
            className="flex-1 bg-gray-800 text-white hover:bg-gray-700 p-3 rounded-lg transition-colors"
          >
            Previous Page
          </button>
          <button
            type="submit"
            className="flex-1 bg-blue-500 text-white hover:bg-blue-600 p-3 rounded-lg flex items-center justify-center transition-colors"
          >
            Next <ChevronRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  )
}
