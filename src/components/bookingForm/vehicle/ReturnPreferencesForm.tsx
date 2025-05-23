"use client"

import { useAppDispatch } from "@/redux/hook"
import { setDropOffAddr, setNeedsAdditionalStops, setSameCarReturn } from "@/redux/slice/vehicleBooking/vehicleBookingSlice"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm, Controller } from "react-hook-form"



type FormData = {
  sameAsPickup: boolean
  dropOffLocation: string
  needAdditionalStops: string
}

export default function ReturnPreferencesForm() {
  const [isSelectOpen, setIsSelectOpen] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      sameAsPickup: false,
      dropOffLocation: "",
      needAdditionalStops: "Yes/No",
    },
  })

  const sameAsPickup = watch("sameAsPickup")
  const dispatch = useAppDispatch()
  const router = useRouter()

  const onSubmit = (data: FormData) => {
    console.log(data)
    // Submit the data or navigate

    dispatch(setDropOffAddr(data.dropOffLocation))
    dispatch(setSameCarReturn(data.sameAsPickup))

    if(data.needAdditionalStops == 'Yes'){
      dispatch(setNeedsAdditionalStops(true))
    }else {
      dispatch(setNeedsAdditionalStops(false))
    }

    router.push("/booking/reviewBookingVehicle")
  }

  return (
    <section className="bg-[#F4F4F4] rounded">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full max-w-[780px] mx-auto p-4 md:p-12 shadow bg-[#ffffff] rounded">
          <div className="mb-8">
            <p className="text-lg font-medium text-gray-600">Step 03</p>
            <h1 className="text-4xl font-bold">
              Return <span className="text-orange-400">Preferences</span>
            </h1>
          </div>

          <div className="space-y-6">
            {/* Toggle */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-base font-medium">Same as Pick-Up?</label>
                <Controller
                  control={control}
                  name="sameAsPickup"
                  render={({ field }) => (
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => field.onChange(!field.value)}>
                      <span className={`text-sm ${!field.value ? "text-red-500 font-medium" : "text-gray-500"}`}>No</span>
                      <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${field.value ? "bg-green-500" : "bg-gray-200"}`}>
                        <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${field.value ? "translate-x-6" : "translate-x-1"}`} />
                      </div>
                      <span className={`text-sm ${field.value ? "text-green-600 font-medium" : "text-gray-500"}`}>Yes</span>
                    </div>
                  )}
                />
              </div>
            </div>

            {/* Drop-off input */}
            {!sameAsPickup && (
              <div className="space-y-2">
                <label className="block text-base font-medium">New Drop-Off Location</label>
                <input
                  {...register("dropOffLocation")}
                  className="w-full border border-gray-300 rounded-md p-4 h-14 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {/* Select dropdown */}
            <div className="space-y-2">
              <label className="block text-base font-medium">Need Additional Stops?</label>
              <div className="relative">
                <div
                  className="flex items-center justify-between w-full h-14 p-4 border border-gray-300 rounded-md cursor-pointer"
                  onClick={() => setIsSelectOpen(!isSelectOpen)}
                >
                  <span className={watch("needAdditionalStops") === "Yes/No" ? "text-gray-500" : "text-black"}>
                    {watch("needAdditionalStops")}
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
                    <div className="p-3 hover:bg-gray-100 cursor-pointer" onClick={() => { setValue("needAdditionalStops", "Yes"); setIsSelectOpen(false) }}>
                      Yes
                    </div>
                    <div className="p-3 hover:bg-gray-100 cursor-pointer" onClick={() => { setValue("needAdditionalStops", "No"); setIsSelectOpen(false) }}>
                      No
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
           <div className="flex items-center gap-4">
            <Link
              href="/booking/vehicle/drinkingLocation"
              className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center bg-[#475467] text-white"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Previous Page
            </Link>

            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-t from-[#156CF0] to-[#38B6FF] text-white rounded-md flex items-center justify-center gap-2"
            >
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          </div>
        </div>
      </form>
    </section>
  )
}
