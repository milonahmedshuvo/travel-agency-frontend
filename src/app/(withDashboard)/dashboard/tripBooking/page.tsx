"use client";

import { useState } from "react";
import { Calendar, DollarSign } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard/StatCard";
import { BookingsTable } from "@/components/dashboard/BookingsTable/BookingsTable";
import Header from "@/components/dashboard/Header/Header";
import { useAnalytiseTourBookingsQuery } from "@/redux/api/analytise/analytiseApi";
import TripsOverview from "@/components/dashboard/TripsOverview/TripsOverview";
import TopPackages from "@/components/dashboard/TopPackages/TopPackages";





export default function TripBooking() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dateFilter, setDateFilter] = useState("today");
  
  const {data} = useAnalytiseTourBookingsQuery("")
  







  return (
    <div> 
      <Header/>
      <div className="space-y-6 px-3 md:px-6 mt-8">
   
     {/* if increase then col will be 4  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:grid-rows-4 gap-3">

        <div className=" row-span-1 xl:row-span-1 ">
           <StatCard
              title="Total Booking"
              value={data?.data?.tourBookingCount}
              change="+2.98%"
              trend="up"
              icon={<Calendar className="h-5 w-5 text-blue-500" />}
            />
        </div>



        {/* <div className="xl:row-span-1">
        <StatCard
              title="Total Participants"
              value="2,845"
              change="-1.45%"
              trend="down"
              icon={<Users className="h-5 w-5 text-blue-500" />}
            />
        </div> */}


        <div className="xl:row-span-1">
        <StatCard
              title="Total Earnings"
              value={`$ ${data?.data?.totalEarnings}`}
              change="+3.75%"
              trend="up"
              icon={<DollarSign className="h-5 w-5 text-blue-500" />}
            />
        </div>


        <div className=" xl:row-span-4">
        <TopPackages />
        </div>

        <div className="lg:col-span-2  xl:col-span-2  xl:row-span-3">
        <TripsOverview />
        </div>
      </div>

      <BookingsTable
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
      /> 
    </div> 

    </div>
    
  );
}
