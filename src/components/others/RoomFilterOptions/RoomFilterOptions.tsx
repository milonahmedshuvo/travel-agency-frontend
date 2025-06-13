"use client"

import { useState } from "react"
import { MapPin, Bed, DollarSign, Search } from "lucide-react"
import { useAppDispatch } from "@/redux/hook"
import { addHotelPackages, removeHotelPackages } from "@/redux/slice/searchFilter/searchFilter"
import { useRouter } from "next/navigation"

export default function RoomFilterOptionInputFiled() {
  const [location, setLocation] = useState("")
  const [room, setRoom] = useState("")
  const [priceRange, setPriceRange] = useState("")
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()
  const router = useRouter()




  const handleSearch = async () => {
    console.log({ location, room, priceRange })
    // Handle search logic here
        setLoading(true)



        if(location || room || priceRange){
          
       const queryParams = new URLSearchParams();
       
        if (location) queryParams.append("location", location);
        if (room) queryParams.append("bedRoom", room); // assuming date is a string like "2025-06-20"
        if (priceRange) queryParams.append("price", String(priceRange)); // or use min/max format if needed
    
        try {
          const res = await fetch(`https://supermariobos-api.code-commando.com/api/v1/hotel-packages?${queryParams.toString()}&page=1`);
          
          const data = await res.json();
          console.log("Search Results:", data);
           console.log('actully array', data?.data)
          // Optional: update state or dispatch to Redux here
         
    
    
          if(data?.data?.length > 0 ){
             console.log('data have store')
             setLocation("")
             
            //  store reduxt state    
            dispatch(addHotelPackages(data?.data))
            router.push('/searchHotelPackage')
             setLoading(false) 
    
          }else{
            console.log("data no store")
            // store redux state  
             dispatch(removeHotelPackages(data?.data))
             router.push('/searchHotelPackage')
            setLoading(false)
          }

        } catch (err) {
          console.error("Search Error:", err);
          setLoading(false)
        }
        }
      }







  return (
    <div className="w-full custom-container p-4 mt-10">
      <div className="bg-white rounded p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {/* Location Field */}
          <div className="space-y-2">
            <label className="text-lg  font-medium text-[#333]">Location</label>
            <div className="relative mt-2.5">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500 w-4 h-4" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
                className="pl-10 h-12 w-full border border-gray-200 rounded-lg"
              />
            </div>
          </div>

          {/* Room Field */}
          <div className="space-y-2">
            <label className="text-lg  font-medium text-gray-700">Room</label>
            <div className="relative mt-2.5">
              <Bed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500 w-4 h-4" />
              <input
                type="text"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                placeholder="Enter room info"
                className="pl-10 h-12 w-full border border-gray-200 rounded-lg"
              />
            </div>
          </div>

          {/* Price Range Field */}
          <div className="space-y-2">
            <label className="text-lg  font-medium text-gray-700">Price range</label>
            <div className="relative mt-2.5">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500 w-4 h-4" />
              <input
                type="number"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                placeholder="Enter max price"
                className="pl-10 h-12 w-full border border-gray-200 rounded-lg"
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="space-y-2">
            <div className="hidden md:block text-lg ">&nbsp;</div>
            <button
              onClick={handleSearch}
              className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center cursor-pointer"
            >
              <Search className="w-4 h-4 mr-2 cursor-pointer" />
                 {
                   loading? "Serching..." : "Search"
                 }
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
