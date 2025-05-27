"use client"

import { useForm } from "react-hook-form"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAppDispatch } from "@/redux/hook"
import { setAddress, setExpTimeSty, setRestaurant } from "@/redux/slice/vehicleBooking/vehicleBookingSlice"


type FormValues = {
  restaurantName: string
  address: string
  stayDuration: string
}

export default function DrinkingLocationForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      restaurantName: "Tanmoy Bar & Restaurant",
      address: "Dhaka, Bangladesh",
      stayDuration: "10:00"
    }
  })

 


  const dispatch = useAppDispatch()




  const onSubmit = (data: FormValues) => {
    console.log("Submitted data:", data)
    // handle navigation or state updates here



     dispatch(setRestaurant(data.restaurantName))
     dispatch(setAddress(data.address))
     dispatch(setExpTimeSty(data.stayDuration))

    router.push('/booking/vehicle/returnPreferences')
  }

  return (
    <section className="bg-[#F4F4F4] rounded">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[780px] mx-auto p-4 md:p-12 shadow bg-white rounded"
      >
        <div className="mb-8">
          {/* <p className="text-gray-700 font-medium mb-1">Step 02</p> */}
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-orange-400">Drinking Location</span> Details
          </h1>
        </div>

        <div className="space-y-6">
          {/* Restaurant Name */}
          <div className="space-y-2">
            <label htmlFor="restaurantName" className="block text-gray-700">
              Name of Restaurant / Bar / Winery
            </label>
            <input
              id="restaurantName"
              {...register("restaurantName", { required: "Restaurant name is required" })}
              className="w-full p-3 border rounded-md"
            />
            {errors.restaurantName && <p className="text-red-500 text-sm">{errors.restaurantName.message}</p>}
          </div>

          {/* Address */}
          <div className="space-y-2">
            <label htmlFor="address" className="block text-gray-700">
              Address
            </label>
            <input
              id="address"
              {...register("address", { required: "Address is required" })}
              className="w-full p-3 border rounded-md"
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
          </div>

          {/* Stay Duration Dropdown */}
          <div className="space-y-2">
            <label htmlFor="stayDuration" className="block text-gray-700">
              Expected Time of Stay
            </label>
            <input
        type="time"
        id="stayDuration"
        {...register("stayDuration")}
        className="border p-2 rounded block w-full"
      />
          </div>






          {/* Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/booking/vehicle/pickupLocation"
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
              className="w-full h-12 bg-gradient-to-t from-[#156CF0] to-[#38B6FF] text-white rounded-md flex items-center justify-center gap-2 cursor-pointer"
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
      </form>
    </section>
  )
}
