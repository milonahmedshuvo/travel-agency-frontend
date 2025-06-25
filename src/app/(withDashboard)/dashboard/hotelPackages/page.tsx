"use client"

import Header from '@/components/dashboard/Header/Header'
// import HotelPackages from '@/components/dashboard/HotelPackages/HotelPackages'
import HotelPackagesCardsPage from '@/components/dashboard/HotelPackages/HotelPackagesCardsPage'
import React from 'react'



const page = () => {
  return (
    <div>
        {/* <HotelPackages/> */}
         <Header/>
        <HotelPackagesCardsPage/>
    </div>
  )
}

export default page