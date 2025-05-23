"use client"

import Link from "next/link"

export default function PriceAdjustment () {
  



  

  
  

  return (
    <section className="bg-[#F4F4F4] rounded"> 
    <div className="w-full max-w-[780px] mx-auto p-4 md:p-12  shadow bg-[#ffffff] rounded">
      <div className="mb-12">
        <p className="text-lg font-medium text-gray-600">Step 04</p>
        <h1 className="text-4xl font-bold mt-3">
           Price  <span className="text-orange-400">Adjustment & </span>
        </h1>

        <h1 className="text-4xl font-bold mt-2">
          <span className="text-orange-400">Confirmation</span>
        </h1>
      </div>



      <div>
        <p className="text-[18px] text-[#475467]">Vehicle Cost</p>
        <p className="text-[36px] text-[#101010] font-[600]">$256.00</p>
        <Link href='/booking/vehicle/paymentMethod' >
        <button className="w-full bg-[#38B6FF] py-2 rounded text-[#fff] hover:bg-[#156CF0] cursor-pointer mt-4">Confirm & Pay Now</button>
        </Link>
      </div>

      
    </div>
    </section>
  )
}

