"use client"
import React, { useState } from 'react'
import TabBikeTourCards from './TabBikeTourCards'
import TabSeaTourCards from '../tourExperience/SeaTourCards'
import TabLandTourCards from '../tourExperience/LandTourCards'



const Vehicle = () => {
      const [activeTab, setActiveTab] = useState('Bike Tour')
  
      
      const renderTab = () => {

        switch(activeTab) {
          case 'Bike Tour':
            return <TabBikeTourCards/> 
            
          case "Scooter Tour":
            return <TabSeaTourCards/>
            
          case "Car Tour": 
            return <TabLandTourCards/>
          
          case "Boat Tour":
            return <TabBikeTourCards/>

            default :
            return null
        }
      }




  return (
    <div className='custom-container'>
       <h1 className="font-semibold text-[40px] md:text-[48px] ">
       Featured  <span className="text-[#FF914D]">Vehicle</span>
      </h1>
      <p className="text-[#333333] text-[16px] font-normal mt-1.5">
      Hit the open road and explore in style with the perfect bike, scooter, car, boat tour for your needs.
      </p>


        {/* button group  */}
      <div className="flex flex-col md:flex-row gap-3.5 lg:gap-4 mt-6">
        <button onClick={()=> setActiveTab('Bike Tour')}  className={`${activeTab == 'Bike Tour'? ' rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] text-white ' : "border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  focus:bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] focus:text-white focus:border-0"}`}>
        Bike Tour
        </button>
        <button onClick={()=> setActiveTab('Scooter Tour')} className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  focus:bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] focus:text-white focus:border-0">
         Scooter Tour
        </button>
        <button onClick={()=> setActiveTab('Car Tour')} className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  focus:bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] focus:text-white focus:border-0">
         Car Tour
        </button>
        <button onClick={()=> setActiveTab('Boat Tour')} className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  focus:bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] focus:text-white focus:border-0">
         Boat Tour
        </button>
      </div>



      {/* product card use map */}
       {renderTab()}

       

      

    </div>
  )
}

export default Vehicle