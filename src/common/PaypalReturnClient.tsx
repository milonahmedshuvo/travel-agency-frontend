"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function PaypalReturnClient() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  

  const [status, setStatus] = useState<"processing" | "success" | "error">(
    "processing"
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) return;

    const capturePayment = async () => {
      try {
        const res = await fetch(
          `http://localhost:6333/api/v1/paypal/complete-order/${token}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ intent: "CAPTURE" }),
          }
        );

        const data = await res.json();

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
    <div className="min-h-screen flex items-center justify-center flex-col gap-4 text-center p-6">
      <h1 className="text-2xl font-semibold">
        {status === "processing" && "Processing your payment..."}
        {status === "success" && "Payment Successful 🎉"}
        {status === "error" && "Payment Failed ❌"}
      </h1>
      <p className="text-gray-700">{message}</p>
    </div>
  );
}
