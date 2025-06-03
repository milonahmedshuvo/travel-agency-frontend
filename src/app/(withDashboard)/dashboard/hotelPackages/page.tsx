"use client"

import HotelPackages from '@/components/dashboard/HotelPackages/HotelPackages'
import HotelPackagesCardsPage from '@/components/dashboard/HotelPackages/HotelPackagesCardsPage'
import React from 'react'



const page = () => {
  return (
    <div>
        <HotelPackages/>
        <HotelPackagesCardsPage/>
    </div>
  )
}

export default page