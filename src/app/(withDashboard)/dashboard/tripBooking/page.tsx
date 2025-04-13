"use client";

import { useState } from "react";
import { Calendar, Users, DollarSign } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard/StatCard";
import { TopPackages } from "@/components/dashboard/TopPackages/TopPackages";
import { TripsOverview } from "@/components/dashboard/TripsOverview/TripsOverview";
import { BookingsTable } from "@/components/dashboard/BookingsTable/BookingsTable";
import Header from "@/components/dashboard/Header/Header";




export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [timeRange, setTimeRange] = useState("12");
  const [dateFilter, setDateFilter] = useState("today");

  return (
    <div> 
      <Header/>


      <div className="space-y-6 px-3 md:px-6 mt-8">




      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 xl:grid-rows-4 gap-3">

        <div className=" row-span-1 xl:row-span-1">
           <StatCard
              title="Total Booking"
              value="1,200"
              change="+2.98%"
              trend="up"
              icon={<Calendar className="h-5 w-5 text-blue-500" />}
            />
        </div>



        <div className="xl:row-span-1">
        <StatCard
              title="Total Participants"
              value="2,845"
              change="-1.45%"
              trend="down"
              icon={<Users className="h-5 w-5 text-blue-500" />}
            />
        </div>


        <div className="xl:row-span-1">
        <StatCard
              title="Total Earnings"
              value="$14,795"
              change="+3.75%"
              trend="up"
              icon={<DollarSign className="h-5 w-5 text-blue-500" />}
            />
        </div>



        <div className=" xl:row-span-4">
        <TopPackages />
        </div>





        <div className="lg:col-span-2  xl:col-span-3  xl:row-span-3 ">
        <TripsOverview timeRange={timeRange} setTimeRange={setTimeRange} />
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
