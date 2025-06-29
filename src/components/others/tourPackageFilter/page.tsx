"use client";

import { getBaseUrl } from "@/config/base-url";
import { useAppDispatch } from "@/redux/hook";
import {
  addTourPackages,
  removeTourpackages,
} from "@/redux/slice/searchFilter/searchFilter";
import { Bed, DollarSign, MapPin, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TourPackageFilterFiled() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [duration, setduration] = useState(0);

  const handleSearch = async () => {
    // console.log({ location, date, duration })
    // Handle search logic here
    setLoading(true);
    if (location || date || duration) {
      console.log("success click");

      const queryParams = new URLSearchParams();
      let queryDate;
      //    1971-02-21

      if (date) {
        queryDate = `packageDate[${date}T00:00:00.000Z,${date}T23:59:59.999Z]`;
      } else {
        queryDate = "";
      }

      if (location) queryParams.append("location", location);
      if (date) queryParams.append("dateRange", queryDate); // assuming date is a string like "2025-06-20"
      if (duration) queryParams.append("duration", String(duration)); // or use min/max format if needed

      try {
        const res = await fetch(
          `${getBaseUrl()}/tour-packages?${queryParams.toString()}&page=1`
        );

        const data = await res.json();
        console.log("Search Results:", data);
        console.log("actully array", data?.data);
        // Optional: update state or dispatch to Redux here

        if (data?.data?.length > 0) {
          console.log("data have store");
          setLocation("");
          setDate("");
          setduration(0);
          //  store reduxt state
          dispatch(addTourPackages(data?.data));
          router.push("/searchTourPackage");
          setLoading(false);
        } else {
          console.log("data no store");
          // store redux state
          dispatch(removeTourpackages());
          router.push("/searchTourPackage");
          setLoading(false);
        }
      } catch (err) {
        console.error("Search Error:", err);
        setLoading(false);
      }
    }
  };

  return (
    <div className="custom-container p-4 mt-10">
      <div className="bg-white rounded p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {/* Location Field */}
          <div className="space-y-2">
            <label className="text-lg  font-medium text-[#333]">
              Choose Your Destination
            </label>
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

          {/* Date Field */}
          <div className="space-y-2">
            <label className="text-lg  font-medium text-gray-700">Date</label>
            <div className="relative mt-2.5">
              <Bed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500 w-4 h-4" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Enter Date info"
                className="pl-10 h-12 w-full border border-gray-200 rounded-lg"
              />
            </div>
          </div>

          {/* Price Range Field */}
          <div className="space-y-2">
            <label className="text-lg  font-medium text-gray-700">
              Duration
            </label>
            <div className="relative mt-2.5">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500 w-4 h-4" />
              <input
                type="number"
                value={duration}
                onChange={(e) => setduration(Number(e.target.value))}
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
              className="w-full h-12 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] text-white rounded-lg font-medium flex items-center justify-center cursor-pointer"
            >
              <Search className="w-4 h-4 mr-2 cursor-pointer" />
              {loading ? "Serching..." : "Search"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
