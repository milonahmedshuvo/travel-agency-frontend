"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useGetSingleRoomBookingQuery } from "@/redux/api/hotelPackages/hotelPackegesApi";
import { useAppSelector } from "@/redux/hook";

export default function PaypalReturnClient() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

   const id = useAppSelector((state) => state.booking.roomBookingId)

  const {data:paypalRoomBooking} = useGetSingleRoomBookingQuery(id)
  console.log('paypal room booking', paypalRoomBooking)


  console.log(paypalRoomBooking?.data?.transactions)




  

  const [status, setStatus] = useState<"processing" | "success" | "error">(
    "processing"
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) return;

    const capturePayment = async () => {
      try {
        const res = await fetch(
          `https://supermariobos-api.code-commando.com/api/v1/paypal/complete-order/${token}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ intent: "CAPTURE" }),
          }
        );

        const data = await res.json();


        console.log("Payment completed successfully.............!", data)




        if (res.ok && data.status === "COMPLETED") {
          setStatus("success");
          setMessage("Payment completed successfully!");

        //  after success paypal payment go to comfirmation page 
           

        } else {
          setStatus("error");
          setMessage("Payment was not completed.");
        }
      } catch (error) {
        console.error(error);
        setStatus("error");
        setMessage("Something went wrong.");
      }
    };

    capturePayment();
  }, [token]);

  return (
    <div>  
    <div className="min-h-screen flex items-center justify-center flex-col gap-4 text-center p-6">
      <h1 className="text-2xl font-semibold">
        {status === "processing" && "Processing your payment..."}
        {status === "success" && "Payment Successful 🎉"}
        {status === "error" && "Payment Failed ❌"}
      </h1>
      <p className="text-gray-700">{message}</p>
    </div>




   </div>
  );
}
