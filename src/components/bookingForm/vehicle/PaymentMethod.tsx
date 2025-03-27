"use client"

export default function VehiclePaymentMethod () {
    

  return (
    <section className="bg-[#F4F4F4] rounded"> 
    <div className="w-full max-w-[780px] mx-auto p-4 md:p-12  shadow bg-[#ffffff] rounded">
      <div className="mb-12">
        <p className="text-lg font-medium text-gray-600">Step 04</p>
        <h1 className="text-4xl font-bold mt-3">
              Choose Your 
        </h1>

        <h1 className="text-4xl font-bold mt-2">
          <span className="text-orange-400">Payment Method</span>
        </h1>
        <p className="font-[400] text-[#333333] mt-4" >Need help? Contact our support team anytime.</p>

      </div>



      <p className="font-[400] text-[#333333] mt-4" >Need help? Contact our support team anytime.</p>
      <button className="w-full hover:bg-[#38B6FF] py-2 rounded text-[#fff] bg-[#156CF0] cursor-pointer mt-4">Stripe Payment</button>
      <button className="w-full py-2 rounded text-[#101010] bg-[#E8E8E8] cursor-pointer mt-3">Stripe Payment</button>

      
    </div>
    </section>
  )
}

