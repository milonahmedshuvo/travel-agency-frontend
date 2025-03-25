/* eslint-disable jsx-a11y/role-supports-aria-props */
"use client"
import { useState } from "react"
import { useForm, Controller, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Calendar, ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"


// Define the form validation schema with Zod
const bookingFormSchema = z.object({
  tourName: z.string().min(1, "Tour name is required"),
  date: z.string().min(1, "Date is required"),
  duration: z.string().min(1, "Duration is required"),
  groupSize: z.string().min(1, "Group size is required"),
  dataConsent: z.boolean().refine((val: boolean) => val === true, {
    message: "You must agree to the data storage policy",
  }),
  termsConsent: z.boolean().refine((val: boolean) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
})



// Create a TypeScript type from the schema
type BookingFormValues = z.infer<typeof bookingFormSchema>

export default function TourBookingForm() {
  // Initialize React Hook Form with validation schema
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    // reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      tourName: "Santorini Sunset Catamaran Cruise",
      date: "16 March, 2025",
      duration: "5 Hours",
      groupSize: "3 Person",
      dataConsent: false,
      termsConsent: false,
    },
  })



  // State for custom dropdowns
  const [showDurationDropdown, setShowDurationDropdown] = useState(false)
  const [showGroupSizeDropdown, setShowGroupSizeDropdown] = useState(false)

  const durations = ["3 Hours", "4 Hours", "5 Hours", "6 Hours", "Full Day"]
  const groupSizes = ["1 Person", "2 Person", "3 Person", "4 Person", "5+ Person"]





  // Form submission handler
  const onSubmit: SubmitHandler<BookingFormValues> = async (data) => {
    try {
      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("Form submitted successfully:", data)

      alert("Booking information submitted successfully! Proceeding to guest details...")
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }



  return (
    <section className="bg-[#F4F4F4]">
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[780px] mx-auto p-4 md:p-12  shadow bg-[#ffffff]">
      <div className="mb-3">
        <p className="text-lg font-medium mb-5">Step 01</p>
        <h1 className="text-4xl md:text-5xl font-semibold mb-5">
          Select <span className="text-[#F78C41]">Tour & Date</span>
        </h1>
        <p className="text-gray-600 mb-5">Book early to guarantee availability!</p>
      </div>

      <div className="space-y-6">
        {/* Tour Name Field */}
        <div>
          <label htmlFor="tourName" className="block text-lg font-medium mb-2">
            Tour Name
          </label>
          <input
            id="tourName"
            type="text"
            aria-invalid={errors.tourName ? "true" : "false"}
            aria-describedby={errors.tourName ? "tourName-error" : undefined}
            className={`w-full border ${errors.tourName ? "border-red-500" : "border-gray-300"} rounded-md p-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500`}
            {...register("tourName")}
          />
          {errors.tourName && (
            <p id="tourName-error" className="mt-1 text-sm text-red-600">
              {errors.tourName.message}
            </p>
          )}
        </div>

        {/* Date Field */}
        <div>
          <label htmlFor="date" className="block text-lg font-medium mb-2">
            Availability Date
          </label>
          <div className="relative">
            <input
              id="date"
              type="text"
              aria-invalid={errors.date ? "true" : "false"}
              aria-describedby={errors.date ? "date-error" : undefined}
              className={`w-full border ${errors.date ? "border-red-500" : "border-gray-300"} rounded-md p-4 text-base pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              {...register("date")}
            />
            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            {errors.date && (
              <p id="date-error" className="mt-1 text-sm text-red-600">
                {errors.date.message}
              </p>
            )}
          </div>
        </div>

        {/* Duration Field */}
        <div>
          <label htmlFor="duration" className="block text-lg font-medium mb-2">
            Duration
          </label>
          <Controller
            name="duration"
            control={control}
            render={({ field }) => (
              <div className="relative">
                <button
                  type="button"
                  id="duration"
                  onClick={() => setShowDurationDropdown(!showDurationDropdown)}
                  aria-haspopup="listbox"
                  aria-expanded={showDurationDropdown}
                  aria-invalid={errors.duration ? "true" : "false"}
                  aria-describedby={errors.duration ? "duration-error" : undefined}
                  className={`w-full flex items-center justify-between border ${errors.duration ? "border-red-500" : "border-gray-300"} rounded-md p-4 text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <span>{field.value}</span>
                  <ChevronDown size={20} className="text-gray-500" />
                </button>

                {showDurationDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                    <ul className="py-1 max-h-60 overflow-auto" role="listbox">
                      {durations.map((item) => (
                        <li key={item} role="option" aria-selected={field.value === item}>
                          <button
                            type="button"
                            className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                              field.value === item ? "bg-gray-100" : ""
                            }`}
                            onClick={() => {
                              field.onChange(item)
                              setShowDurationDropdown(false)
                            }}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {errors.duration && (
                  <p id="duration-error" className="mt-1 text-sm text-red-600">
                    {errors.duration.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Group Size Field */}
        <div>
          <label htmlFor="groupSize" className="block text-lg font-medium mb-2">
            Group Size
          </label>
          <Controller
            name="groupSize"
            control={control}
            render={({ field }) => (
              <div className="relative">
                <button
                  type="button"
                  id="groupSize"
                  onClick={() => setShowGroupSizeDropdown(!showGroupSizeDropdown)}
                  aria-haspopup="listbox"
                  aria-expanded={showGroupSizeDropdown}
                  aria-invalid={errors.groupSize ? "true" : "false"}
                  aria-describedby={errors.groupSize ? "groupSize-error" : undefined}
                  className={`w-full flex items-center justify-between border ${errors.groupSize ? "border-red-500" : "border-gray-300"} rounded-md p-4 text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <span>{field.value}</span>
                  <ChevronDown size={20} className="text-gray-500" />
                </button>

                {showGroupSizeDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                    <ul className="py-1 max-h-60 overflow-auto" role="listbox">
                      {groupSizes.map((item) => (
                        <li key={item} role="option" aria-selected={field.value === item}>
                          <button
                            type="button"
                            className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                              field.value === item ? "bg-gray-100" : ""
                            }`}
                            onClick={() => {
                              field.onChange(item)
                              setShowGroupSizeDropdown(false)
                            }}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {errors.groupSize && (
                  <p id="groupSize-error" className="mt-1 text-sm text-red-600">
                    {errors.groupSize.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Consent Checkboxes */}
        <div className="space-y-4 pt-2">
          <div className="flex items-start space-x-2">
            <div className="flex h-5 items-center">
              <input
                id="dataConsent"
                type="checkbox"
                aria-invalid={errors.dataConsent ? "true" : "false"}
                aria-describedby={errors.dataConsent ? "dataConsent-error" : undefined}
                className={`h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500 ${
                  errors.dataConsent ? "border-red-500" : ""
                }`}
                {...register("dataConsent")}
              />
            </div>
            <label htmlFor="dataConsent" className="text-gray-600 font-normal">
              By using this form, you agree with the storage and handling of your data by this website.
            </label>
          </div>
          {errors.dataConsent && (
            <p id="dataConsent-error" className="mt-1 text-sm text-red-600">
              {errors.dataConsent.message}
            </p>
          )}

          <div className="flex items-start space-x-2">
            <div className="flex h-5 items-center">
              <input
                id="termsConsent"
                type="checkbox"
                aria-invalid={errors.termsConsent ? "true" : "false"}
                aria-describedby={errors.termsConsent ? "termsConsent-error" : undefined}
                className={`h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500 ${
                  errors.termsConsent ? "border-red-500" : ""
                }`}
                {...register("termsConsent")}
              />
            </div>
            <label htmlFor="termsConsent" className="text-gray-600 font-normal">
              By using this form you agree to our{" "}
              <a href="#" className="text-gray-900 underline font-medium">
                Terms and Conditions
              </a>
            </label>
          </div>
          {errors.termsConsent && (
            <p id="termsConsent-error" className="mt-1 text-sm text-red-600">
              {errors.termsConsent.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Link href='/booking/tourBookingStep2' > 
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-base font-medium mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            "Processing..."
          ) : (
            <>
              Enter Guest Details
              <ChevronRight className="ml-2" size={20} />
            </>
          )}
        </button>
        </Link>
      </div>
    </form>
    </section>
  )
}

