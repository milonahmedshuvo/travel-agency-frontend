"use client"

import { MyTripBookingsTable } from "@/components/customer/MyTripBooking";
import { useState } from "react";


const MyTripBookingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dateFilter, setDateFilter] = useState("today");


  return (
    <div className="custom-container">
      <MyTripBookingsTable 
      currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
      />
    </div>
  )
}

export default MyTripBookingPage;