"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight, ListFilter, MoveRight, Plus } from "lucide-react"
// import VehicleImg  from "../../../assets/landTour/img1.jpg"
import Link from "next/link"
import { useGetAllVehicleQuery } from "@/redux/api/vehicle/vehicleApi"
import Loading from "@/components/shared/loading/Loading"


export type TVehicle = {
  id: string;
  name: string;
  slug: string;
  img: string;
  pricePerHR: number;
  vehicleType: string; 
  createdAt: string;
  updatedAt: string;
};




export default function VehicleListPage() {
  const {data, isLoading} = useGetAllVehicleQuery(undefined)
  console.log('get vehicle', data?.data?.data) 
  if(isLoading){
    return <Loading/>
  }
 




  return (
    <div className="px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl text-[#000E19] font-[500]">Vehicle Listd</h1>
        <div className="flex gap-2">
            <Link href='/dashboard/addVehicle' > 
          <button className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF]  text-white  flex justify-center items-center py-2 px-2.5  rounded cursor-pointer ">
            <Plus className="mr-2 h-4 w-4" /> Add New Vehicle
          </button>
          </Link>
          <button  className="lg:hidden">
            <ListFilter className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data?.data?.data?.map((vehicle:TVehicle, index:number) => (
          <VehicleCard key={index} vehicle={vehicle} />
        ))}
      </div>


      <div className="mt-8 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing <span className="font-medium">11</span> out of <span className="font-medium">1,450</span>
        </div>
        <div className="flex items-center space-x-2">
          <button>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </button>
          <button className="bg-blue-500 text-white hover:bg-blue-600 w-6">
            1
          </button>
          <button>
            2
          </button>
          <button>
            3
          </button>
          <span className="px-2">...</span>
          <button>
            16
          </button>
          <button>
            <ChevronRight className="h-4 w-4 text-black  " />
            <span className="sr-only">Next page</span>
          </button>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">Copyright © 2024 Travel Agency</div>
    </div>
  )
}



function VehicleCard({ vehicle }: { vehicle: TVehicle }) {
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="relative h-56">
        <Image src={vehicle.img || "/placeholder.svg"} alt={vehicle.name} fill className="object-cover" />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold">{vehicle.name}</h2>
        <div className="mt-2 space-y-1">
          <div className="flex justify-start items-center gap-1.5">
            <span className="text-[#101010]">Vehicle Type:</span>
            <span className="text-[#757D83]">{vehicle.vehicleType}</span>
          </div>
          <div className="flex justify-start items-center gap-1.5">
            <span className="text-[#101010]">Price:</span>
            <span className="text-[#757D83]">{vehicle.pricePerHR}</span>
          </div>
        </div>
        <button className="w-full mt-4 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] flex items-center justify-center text-white py-2.5 px-2 rounded cursor-pointer"> View Service History <MoveRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

// Sample data
// const vehicles: Vehicle[] = [
//   {
//     name: "Toyota Corolla 2020",
//     type: "Private Car",
//     price: "$25/per hour",
//     image: VehicleImg,
//   },
//   {
//     name: "Toyota Corolla 2020",
//     type: "Helicopter",
//     price: "$25/per hour",
//     image: VehicleImg,
//   },
//   {
//     name: "Toyota Corolla 2020",
//     type: "Boat",
//     price: "$25/per hour",
//     image: VehicleImg,
//   },
//   {
//     name: "Toyota Corolla 2020",
//     type: "Private Car",
//     price: "$25/per hour",
//     image: VehicleImg,
//   },
//   {
//     name: "Toyota Corolla 2020",
//     type: "Helicopter",
//     price: "$25/per hour",
//     image: VehicleImg,
//   },
//   {
//     name: "Toyota Corolla 2020",
//     type: "Boat",
//     price: "$25/per hour",
//     image: VehicleImg,
//   },
//   {
//     name: "Toyota Corolla 2020",
//     type: "Private Car",
//     price: "$25/per hour",
//     image: VehicleImg,
//   },
//   {
//     name: "Toyota Corolla 2020",
//     type: "Helicopter",
//     price: "$25/per hour",
//     image: VehicleImg,
//   },
//   {
//     name: "Toyota Corolla 2020",
//     type: "Boat",
//     price: "$25/per hour",
//     image: VehicleImg,
//   },
// ]
