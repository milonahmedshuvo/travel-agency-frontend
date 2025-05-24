"use client"
import { TVehicleOfObject } from "@/components/dashboard/HotelPackages/AddHotelPackages/AddHotelPackages"
import { useGetAllVehicleQuery } from "@/redux/api/vehicle/vehicleApi"
import { useAppDispatch } from "@/redux/hook"
import { setPickUpAddr, setPickUpDate, setPickUpTime, setTourPackageVehicleId, setVehicleType } from "@/redux/slice/vehicleBooking/vehicleBookingSlice"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"

type FormValues = {
  address: string
  date: string
  time: string
  vehicleType: string
}

export default function PickupLocationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      date: "16 March, 2025",
      time: "8.00 AM",
      vehicleType: "Boat"
    }
  })
  const router = useRouter()
  const dispatch = useAppDispatch()
  const {data:vehicleData} = useGetAllVehicleQuery(undefined)
  const [vehicleId, setVehicleId] = useState("")
  



  



  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data)
    // Add your navigation logic or data handling here
    const vehicleType = JSON.parse(data.vehicleType)

   dispatch(setPickUpAddr(data.address))
   dispatch(setPickUpDate(data.date))
   dispatch(setPickUpTime(data.time))
   dispatch( setVehicleType(vehicleType.vehicleType))
   dispatch(setTourPackageVehicleId(vehicleId))




       

    //console.log("vehicle type:", vehicleType.vehicleType, vehicleType.id)
    router.push('/booking/vehicle/drinkingLocation')
  }


  return (
    <section className="bg-[#F4F4F4] rounded">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 max-w-[780px] mx-auto p-4 md:p-12 shadow bg-[#ffffff] rounded"
      >
        <div className="flex justify-end items-center mb-4">
          <Link href="/booking/reviewBooking">
            <button type="button" className="text-gray-700 flex items-center">
              Skip <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </Link>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-[#FF9966]">Pick-Up</span> Location
          </h1>
        </div>

        <div className="space-y-5">
          {/* Address Field */}
          <div className="space-y-2">
            <label htmlFor="address" className="text-gray-700 font-medium">
              Hotel/Address Input
            </label>
            <input
              id="address"
              type="text"
              placeholder="Hotel Sheraton"
              {...register("address", { required: "Address is required" })}
              className="w-full h-12 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          {/* Date Field */}
          <div className="space-y-2">
            <label htmlFor="date" className="text-gray-700 font-medium">
              Pick-Up Date
            </label>
            <div className="relative">
              <input
                id="date"
                type="text"
                {...register("date", { required: "Date is required" })}
                className="w-full h-12 px-3 rounded-md border border-gray-300 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
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
                  className="text-gray-500"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
              </div>
            </div>
          </div>

          {/* Time Field */}
          <div className="space-y-2">
            <label htmlFor="time" className="text-gray-700 font-medium">
              Time Selector
            </label>
            <div className="relative">
              <select
                id="time"
                {...register("time")}
                className="w-full h-12 px-3 rounded-md border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="7.00 AM">7.00 AM</option>
                <option value="7.30 AM">7.30 AM</option>
                <option value="8.00 AM">8.00 AM</option>
                <option value="8.30 AM">8.30 AM</option>
                <option value="9.00 AM">9.00 AM</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
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
                  className="text-gray-500"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>



          {/* Vehicle Type Field */}
          <div className="space-y-2">
            <label htmlFor="vehicleType" className="text-gray-700 font-medium">
              Select Vehicle Type{" "}
              <span className="text-gray-400">(if applicable)</span>
            </label>
            <div className="relative">
              <select
                id="vehicleType"
                {...register("vehicleType")}
                className="w-full h-12 px-3 rounded-md border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => { 
                  const selected = JSON.parse(e.target.value)
                  // console.log('current vehicle selected', selected.id)
                  setVehicleId(selected.id)
                }}
              >
                {
                  vehicleData?.data?.data?.map((vehicle:TVehicleOfObject) => <option key={vehicle.id} value={JSON.stringify({vehicleType: vehicle?.vehicleType, id: vehicle.id }) }>{vehicle?.vehicleType}</option> )
                }

                {/* <option value="BOAT">BOAT</option>
                <option value="CAR">CAR</option>
                <option value="VAN">VAN</option>
                <option value="AIRCRAFT">AIRCRAFT</option> */}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
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
                  className="text-gray-500"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/booking/gustDatailsThree" className="w-full">
              <button
                type="button"
                className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center bg-[#475467] text-white cursor-pointer"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
                Previous Page
              </button>
            </Link>

            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] text-white rounded-md flex items-center justify-center gap-2 cursor-pointer"
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
