"use client"

import AccommodationSecoundCard from '@/components/card/accommodationCard/AccommoSecoundCard'
import { THotelPackage } from '@/components/lib/types'
import { useAppSelector } from '@/redux/hook'
import Link from 'next/link'
import React from 'react'




const SearchHotelPackage = () => {
    const hotelPackage = useAppSelector((state) => state.searchQuery.hotelPackageStore)
    





  return (
    <div className="custom-container !mb-20 mt-14">
        

         {
            hotelPackage?  <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 ">
          {hotelPackage?.map((product:THotelPackage, index:number) =><div key={index}>
                <AccommodationSecoundCard 
                id={product.id} 
                imageUrl={product?.images[1]?.url} 
                title={product.title} 
                address={product.location} 
                price={product.price} 
                ratting={'5.0'}
                kitchenValue={product.kitchen}
                bedRoomValue={product.bedRoom}
                bathroomValue={product.bathRoom}
                livingRoomValue={product.livingRoom}
                 ></AccommodationSecoundCard>
            </div>)
          }
          </div> : <div className='flex flex-col justify-center items-center h-screen gap-6'> 
                <p className="text-5xl">Hotel package not avaiable</p>
                <p className='text-xl text-white bg-blue-500  px-6 py-1 rounded-3xl '>

                    <Link href="/" > GO Back To Home Page </Link>
                </p>
          </div>
         }
        
      
     </div>
  )
}

export default SearchHotelPackage