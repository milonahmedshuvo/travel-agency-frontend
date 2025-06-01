"use client"

import VehicleCard from "@/components/card/vehicleCard/VehicleCard"
// import img1 from '../../../assets/card/Vehicle/img1.jpg'
import { useState } from "react"
import { useGetAllVehicleQuery } from "@/redux/api/vehicle/vehicleApi"
import { TVehicle } from "@/components/dashboard/Vehicle/Vehicle"







const AllVehicleTourCards = () => {
      const [activeTab, setActiveTab] = useState("BOAT");
      const {data} = useGetAllVehicleQuery("")

      console.log("all vehicle data", data?.data?.data)




  return (
    <div className='custom-container'>



        <div>
       <h1 className="font-semibold text-[40px] md:text-[48px] ">
       Featured  <span className="text-[#FF914D]">Vehicle</span>
      </h1>
      <p className="text-[#333333] text-[16px] font-normal mt-1.5">
      Hit the open road and explore in style with the perfect bike, scooter, car, boat tour for your needs.
      </p>


         {/* Button group */}
        <div className="flex flex-wrap gap-3.5 lg:gap-4 mt-6">
          {[
            { id: "BOAT", label: "BOAT" },
            { id: "CAR", label: "CAR" },
            { id: "VAN", label: "VAN" },
            { id: "AIRCRAFT", label: "AIRCRAFT"},
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? "bg-gradient-to-t from-[#156CF0] to-[#38B6FF] text-white"
                  : "border border-[#333333] focus:bg-gradient-to-t from-[#156CF0] to-[#38B6FF] focus:text-white focus:border-0"
              } rounded-lg px-6.5 py-2.5 cursor-pointer focus:outline-none`}
            >
              {tab.label}
            </button>
          ))}
        </div>



    </div>  



        {/* product card use map */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 "> 
      {data?.data?.data?.map((vehicle:TVehicle, index:number) => (
          <div key={index}>
            <VehicleCard
              id= {vehicle.id}
              imageUrl={vehicle.img}
              title={vehicle.name}
              price={vehicle.pricePerHR}
              time={"Price Per Hour"}
              ratting={'5.0'}
            ></VehicleCard>
          </div>
        ))}
      </div>  
    </div>
  )
}

export default AllVehicleTourCards