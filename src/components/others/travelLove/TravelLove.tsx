/* eslint-disable @next/next/no-img-element */
'use client'

import ThreeImage from "@/components/testing/ThreeImage"





export default function TravelLove () {
    

   

  return (
    <section  className="bg-[#FAFAFA]">

<div className="custom-container mx-auto px-4"> 
      <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">


        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">Why Travelers Love</h2>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-[#FF9966] leading-tight">Our Sea Tours</h2>
              <div className="absolute bottom-0 left-0 w-3/4 h-1 bg-blue-500"></div>
            </div>
          </div>


          <div className="space-y-6 mt-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 bg-blue-500 flex items-center justify-center rounded-sm transform rotate-45">
                  <div className="w-4 h-4 bg-white transform -rotate-45"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Unforgettable Experiences:</h3>
                <p className="text-gray-600 mt-2 text-lg">
                  Snorkel in pristine waters, kayak along scenic coastlines, and sail under golden sunsets.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 bg-blue-500 flex items-center justify-center rounded-sm transform rotate-45">
                  <div className="w-4 h-4 bg-white transform -rotate-45"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Expert Guides & Instructors:</h3>
                <p className="text-gray-600 mt-2 text-lg">Learn from certified professionals who prioritize safety and fun.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 bg-blue-500 flex items-center justify-center rounded-sm transform rotate-45">
                  <div className="w-4 h-4 bg-white transform -rotate-45"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Eco-Friendly & Sustainable:</h3>
                <p className="text-gray-600 mt-2 text-lg">We support marine conservation and responsible tourism.</p>
              </div>
            </div>
          </div>
        </div>





        {/* Right Images */}
        <div className="w-full md:w-1/2 relative  mt-8 md:mt-0">
            <ThreeImage/>
           

        </div>


        
      </div>
      </div>
    
    </section>
  )
}

