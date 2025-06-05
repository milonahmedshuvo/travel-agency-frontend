/* eslint-disable jsx-a11y/role-supports-aria-props */
"use client"
import { useEffect} from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { ChevronRight } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { setBookingSelectTourDateDatails } from "@/redux/slice/booking/booking"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
// import Link from "next/link"




// Define the form validation schema with Zod
const bookingFormSchema = z.object({
  tourName: z.string().min(1, "Tour name is required"),
  date: z.string().min(1, "Date is required"),
  duration: z.preprocess(
    (val) => (val === "" ? undefined : Number(val)),
    z.number({ invalid_type_error: "Duration is required" }).min(1, "Duration must be at least 1")
  ),
  groupSize: z.preprocess(
    (val) => (val === "" ? undefined : Number(val)),
    z.number({ invalid_type_error: "Group size is required" }).min(1, "Group size must be at least 1")
  ),
  dataConsent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the data storage policy",
  }),
  termsConsent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
})


// Create a TypeScript type from the schema
type BookingFormValues = z.infer<typeof bookingFormSchema>

export default function TourBookingForm() {
  // Initialize React Hook Form with validation schema
  const selectTourDateDatails = useAppSelector((state) => state.booking.bookingSelectTourDate)
  const { register, handleSubmit,formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      tourName: "",
      date: "",
      duration: 0,
      groupSize: 0,
      dataConsent: false,
      termsConsent: false,
    },
  })

  // resert useForm after reload redux state 
  useEffect(()=>{
    if(selectTourDateDatails){
      reset(selectTourDateDatails)
    }
  },[selectTourDateDatails, reset])


  // manage redux all  state
  const dispatch = useAppDispatch()
  const router  = useRouter()





  // Form submission handler
  const onSubmit: SubmitHandler<BookingFormValues> = async (data) => {
    try {
      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("Form submitted successfully:", data)

      dispatch(setBookingSelectTourDateDatails(data))
      reset()
      toast.success('Successfully created!');
      router.push('/booking/gustDatailsOne')

      // alert("Booking information submitted successfully! Proceeding to guest details...")
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }






  return (
    <section className="bg-[#F4F4F4]">
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[780px] mx-auto p-4 md:p-12  shadow bg-[#ffffff]">
      <div className="mb-3">
        {/* <p className="text-lg font-medium mb-5">Step 01</p> */}
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
              type="date"
              aria-invalid={errors.date ? "true" : "false"}
              aria-describedby={errors.date ? "date-error" : undefined}
              className={`w-full border ${errors.date ? "border-red-500" : "border-gray-300"} rounded-md p-4 text-base pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              {...register("date")}
            />
            {/* <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} /> */}
            {errors.date && (
              <p id="date-error" className="mt-1 text-sm text-red-600">
                {errors.date.message}
              </p>
            )}
          </div>
        </div>


        {/* Duration Field  duration */}
        <div>
          <label htmlFor="duration" className="block text-lg font-medium mb-2">
             Duration Hours
          </label>
          <input
            id="duration"
            type="number"
            className={`w-full border ${errors.duration ? "border-red-500" : "border-gray-300"} rounded-md p-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500`}
            {...register("duration")}
          />
          {errors.duration && (
            <p id="duration-error" className="mt-1 text-sm text-red-600">
              {errors.duration.message}
            </p>
          )}
        </div>



        {/* Group Size Field  groupSize*/}
         <div>
          <label htmlFor="duration" className="block text-lg font-medium mb-2">
            Group Size
          </label>
          <input
            id="groupSize"
            type="number"
            aria-invalid={errors.groupSize ? "true" : "false"}
            aria-describedby={errors.groupSize ? "groupSize-error" : undefined}
            className={`w-full border ${errors.groupSize ? "border-red-500" : "border-gray-300"} rounded-md p-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500`}
            {...register("groupSize")}
          />
          {errors.groupSize && (
            <p id="groupSize-error" className="mt-1 text-sm text-red-600">
              {errors.groupSize.message}
            </p>
          )}
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
        {/* <Link href='/booking/tourBookingStep2' >  */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center py-2 px-4 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] text-white rounded-md text-base font-medium mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed"
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
        {/* </Link> */}
      </div>
    </form>
    </section>
  )
}

