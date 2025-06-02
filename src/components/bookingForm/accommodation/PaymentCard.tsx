"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setRoomBookingPayment } from "@/redux/slice/booking/booking";
import { useRouter } from "next/navigation";
// import Link from "next/link";
import React from "react";

export default function AccommodationPaymentCard() {
  const dispatch = useAppDispatch()
  const id = useAppSelector((state) => state.booking.roomBookingId)
  const router = useRouter()

  console.log("booking id", id)

  const handleRoomBookingByStripe = () => {
    const makeStripePayment = async () => {
    const token = localStorage.getItem('token'); 
    const url = `https://supermariobos-api.code-commando.com/api/v1/room-bookings/full-payment/${id}/stripe`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
      // body: JSON.stringify(requestBody)
    });

    // if (!response.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }
    const data = await response.json();
    console.log('Room payment requst Success:', data);
    if(data?.success){
      // go to payment final page 
      console.log("amount", data?.data?.transactions?.amount)
      console.log("clientSecret", data?.data?.transactions?.clientSecret)

      // store clientSecret and amount in redux 
      dispatch(setRoomBookingPayment({clientSecret: data?.data?.transactions?.clientSecret,  amount: data?.data?.transactions?.amount }))
      router.push("/roomStripeFullPayment")
    }

  } catch (error) {
    console.error('Room payment requst Success:', error);
  }
};

// Call the function
makeStripePayment();

  };






  return (
    <section className="space-y-6 bg-[#F4F4F4] ">
      <div className="space-y-6 max-w-[780px] mx-auto p-4 md:p-12  shadow bg-[#ffffff]">
        <div className="mb-3">
          <p className="text-lg font-medium mb-5">Step 03</p>
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

        {/* <Link href="#"> */}
        <button
          onClick={() => handleRoomBookingByStripe()}
          type="submit"
          className="w-full py-3 px-4 bg-[#E8E8E8] text-[#101010] rounded-lg flex items-center justify-center cursor-pointer"
        >
          Stripe Payment
        </button>
        {/* </Link> */}

        <button
          type="button"
          className="w-full py-3 px-4 font-medium rounded-lg flex items-center justify-center bg-[#E8E8E8] text-[#101010]  mt-5 cursor-pointer"
        >
          PayPal Payment
        </button>

        <div className="flex items-center justify-center gap-6">
          <h1 className="w-[165px] h-[1px] bg-[#000000]"> </h1>
          <h1 className="uppercase">or</h1>
          <h1 className="w-[165px] h-[1px] bg-[#000000]"> </h1>
        </div>

        <button
          type="button"
          className="w-full py-3 px-4 font-medium rounded-lg flex items-center justify-center bg-linear-to-b from-[#38B6FF] from-30%  to-[#156CF0]  text-[#fff]  mt-3 cursor-pointer"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          Deposit 20% + Cash
        </button>
      </div>
    </section>
  );
}
