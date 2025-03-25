"use client";
import Link from "next/link";


export default function PaymentCard() {


  return (
    <section className="space-y-6 bg-[#F4F4F4] ">
      <div className="space-y-6 max-w-[780px] mx-auto p-4 md:p-12  shadow bg-[#ffffff]">
        <div className="mb-3">
          <p className="text-lg font-medium mb-5">Step 05</p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-2 ">
          Choose Your 
          </h1>


          <span className="text-4xl md:text-5xl font-semibold text-[#F78C41]  block ">
            Payment Method
            </span>

          <p className="text-gray-600 mt-8">
          Need help? Contact our support team anytime.
          </p>



          <p className="text-gray-600 mt-12">
          Need help? Contact our support team anytime.
          </p>
        </div>
        
        <Link href="/booking/reviewBooking">
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] rounded-lg flex items-center justify-center text-white cursor-pointer"
          >
            Proceed to Review & Confirm
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </Link>


        <button
          type="button"
          className="w-full py-3 px-4 border border-[#E8E8E8]  rounded-lg flex items-center justify-center bg-[#E8E8E8] text-[#fff] transition-colors mt-3"
          
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Add Second Guest
        </button>



      </div>
    </section>
  );
}
