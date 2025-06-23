// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import {
//   useCreateTourPaypal20PaymentMutation,
//   useCreateTourPaypal80PaymentMutation,
//   useCreateTourPaypalPaymentMutation,
// } from "@/redux/api/paymant/paymentApi";
// // import { useGetSingleRoomBookingQuery } from "@/redux/api/hotelPackages/hotelPackegesApi";
// // import { useAppSelector } from "@/redux/hook";
// import { toast } from "sonner";

// export default function PaypalReturnClient() {
//   const [status, setStatus] = useState<"processing" | "success" | "error">(
//     "processing"
//   );
//   const [message, setMessage] = useState("");

//   const searchParams = useSearchParams();
//   const token = searchParams.get("token");
//   const payType = searchParams.get("payType");
//   const payFor = searchParams.get("payFor");

//   //  const id = useAppSelector((state) => state.booking.roomBookingId)

//   // const {data:paypalRoomBooking} = useGetSingleRoomBookingQuery(id)

//   // console.log('paypal room booking', paypalRoomBooking)
//   // console.log(paypalRoomBooking?.data?.transactions)

//   const [payTourFull] = useCreateTourPaypalPaymentMutation();
//   const [payTour20] = useCreateTourPaypal20PaymentMutation();
//   const [payTour80] = useCreateTourPaypal80PaymentMutation();

//   if (payFor === "tour") {
//     if (payType === "20") {
//       toast.promise(
//         payTour20({
//           data: { paymentMethodId: "", transactionId: "" },
//           id: "tourId",
//         }).unwrap(),
//         {
//           loading: "Loading...",
//           success: (data) => data?.message,
//           error: (err) => err?.message,
//         }
//       );
//     } else if (payType === "80") {
//       toast.promise(
//         payTour80({
//           data: { paymentMethodId: "", transactionId: "" },
//           id: "tourId",
//         }).unwrap(),
//         {
//           loading: "Loading...",
//           success: (data) => data?.message,
//           error: (err) => err?.message,
//         }
//       );
//     } else if (payType === "full") {
//       toast.promise(
//         payTourFull({
//           data: { paymentMethodId: ""},
//           id: "tourId",
//         }).unwrap(),
//         {
//           loading: "Loading...",
//           success: (data) => data?.message,
//           error: (err) => err?.message,
//         }
//       );
//     }
//   }

//   // useEffect(() => {
//   //   if (!token) return;

//   //   const capturePayment = async () => {
//   //     try {
//   //       const res = await fetch(
//   //         `${getBaseUrl()}/paypal/complete-order/${token}`,
//   //         {
//   //           method: "POST",
//   //           headers: { "Content-Type": "application/json" },
//   //           body: JSON.stringify({ intent: "CAPTURE" }),
//   //         }
//   //       );

//   //       const data = await res.json();

//   //       console.log("Payment completed successfully.............!", data);

//   //       if (res.ok && data.status === "COMPLETED") {
//   //         setStatus("success");
//   //         setMessage("Payment completed successfully!");

//   //         //  after success paypal payment go to comfirmation page
//   //       } else {
//   //         setStatus("error");
//   //         setMessage("Payment was not completed.");
//   //       }
//   //     } catch (error) {
//   //       console.error(error);
//   //       setStatus("error");
//   //       setMessage("Something went wrong.");
//   //     }
//   //   };

//   //   capturePayment();
//   // }, [token]);

//   return (
//     <div>
//       <div className="min-h-screen flex items-center justify-center flex-col gap-4 text-center p-6">
//         <h1 className="text-2xl font-semibold">
//           {status === "processing" && "Processing your payment..."}
//           {status === "success" && "Payment Successful 🎉"}
//           {status === "error" && "Payment Failed ❌"}
//         </h1>
//         <p className="text-gray-700">{message}</p>
//       </div>
//     </div>
//   );
// }

"use client";

import { useGetSingleRoomBookingQuery } from "@/redux/api/hotelPackages/hotelPackegesApi";
import {
  useCreateRoomPaypal20PaymentMutation,
  useCreateRoomPaypal80PaymentMutation,
  useCreateRoomPaypalPaymentMutation,
  useCreateTourPaypal20PaymentMutation,
  useCreateTourPaypal80PaymentMutation,
  useCreateTourPaypalPaymentMutation,
} from "@/redux/api/paymant/paymentApi";
import { useGetSingleTourBookingQuery } from "@/redux/api/tourPackages/tourPackagesApi";
import { useAppSelector } from "@/redux/hook";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function PaypalReturnClient() {
  const [status, setStatus] = useState<"processing" | "success" | "error">(
    "processing"
  );
  const [message, setMessage] = useState("");
  const tourBookingId = useAppSelector((state) => state.booking.tourBookingId);
  const { data } = useGetSingleTourBookingQuery(tourBookingId);

  const initialTourBookingId =
    data?.data?.splitPayment?.initialPaymentTransaction?.id || "";
  const finalTourBookingId =
    data?.data?.splitPayment?.finalPaymentTransaction?.id || "";
  // const fullTourBookingId = data?.data?.transactions?.id;

  // Room Bookings functionality implements
  const roomBookingId = useAppSelector((state) => state.booking.roomBookingId);
  const { data: roomData } = useGetSingleRoomBookingQuery(roomBookingId);

  const initialRoomBookingId =
    roomData?.data?.splitPayment?.initialPaymentTransaction?.id || "";
  const finalRoomBookingId =
    roomData?.data?.splitPayment?.finalPaymentTransaction?.id || "";

  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const payType = searchParams.get("paymentType");
  const payFor = searchParams.get("bookingType");

  const [payTourFull] = useCreateTourPaypalPaymentMutation();
  const [payTour20] = useCreateTourPaypal20PaymentMutation();
  const [payTour80] = useCreateTourPaypal80PaymentMutation();

  const [payRoomFull] = useCreateRoomPaypalPaymentMutation();
  const [payRoom20] = useCreateRoomPaypal20PaymentMutation();
  const [payRoom80] = useCreateRoomPaypal80PaymentMutation();

  useEffect(() => {
    if (!payType || !payFor) return;

    // const tourId = "684d9bb839ec80254f7c6886"; // replace with dynamic ID if needed

    const handlePayment = async () => {
      try {
        let result;

        if (payFor === "tour") {
          if (payType === "initial" && initialTourBookingId) {
            result = toast.promise(
              payTour20({
                data: {
                  paymentMethodId: token!,
                  transactionId: initialTourBookingId,
                },
                id: tourBookingId!,
              }).unwrap(),
              {
                loading: "Processing 20% payment...",
                success: (data) => {
                  setStatus("success");
                  setMessage(data.message || "20% Payment successful!");
                  return data.message;
                },
                error: (err) => {
                  setStatus("error");
                  setMessage(err.message || "20% Payment failed.");
                  return err.message;
                },
              }
            );
          } else if (payType === "final" && finalTourBookingId) {
            result = toast.promise(
              payTour80({
                data: {
                  paymentMethodId: token!,
                  transactionId: finalTourBookingId,
                },
                id: tourBookingId!,
              }).unwrap(),
              {
                loading: "Processing 80% payment...",
                success: (data) => {
                  setStatus("success");
                  setMessage(data.message || "80% Payment successful!");
                  return data.message;
                },
                error: (err) => {
                  setStatus("error");
                  setMessage(err.message || "80% Payment failed.");
                  return err.message;
                },
              }
            );
          } else if (payType === "full") {
            result = toast.promise(
              payTourFull({
                data: { paymentMethodId: token! },
                id: tourBookingId!,
              }).unwrap(),
              {
                loading: "Processing full payment...",
                success: (data) => {
                  setStatus("success");
                  setMessage(data.message || "Full Payment successful!");
                  return data.message;
                },
                error: (err) => {
                  setStatus("error");
                  setMessage(err.message || "Full Payment failed.");
                  return err.message;
                },
              }
            );
          }

          await result;
        }

        // Room Booking functionality implements
        if (payFor === "hotel") {
          if (payType === "initial" && initialRoomBookingId) {
            result = toast.promise(
              payRoom20({
                data: {
                  paymentMethodId: token!,
                  transactionId: initialRoomBookingId,
                },
                id: roomBookingId!,
              }).unwrap(),
              {
                loading: "Processing 20% payment...",
                success: (data) => {
                  setStatus("success");
                  setMessage(data.message || "20% Payment successful!");
                  return data.message;
                },
                error: (err) => {
                  setStatus("error");
                  setMessage(err.message || "20% Payment failed.");
                  return err.message;
                },
              }
            );
          } else if (payType === "final" && finalRoomBookingId) {
            result = toast.promise(
              payRoom80({
                data: {
                  paymentMethodId: token!,
                  transactionId: finalRoomBookingId,
                },
                id: roomBookingId!,
              }).unwrap(),
              {
                loading: "Processing 80% payment...",
                success: (data) => {
                  setStatus("success");
                  setMessage(data.message || "80% Payment successful!");
                  return data.message;
                },
                error: (err) => {
                  setStatus("error");
                  setMessage(err.message || "80% Payment failed.");
                  return err.message;
                },
              }
            );
          } else if (payType === "full") {
            result = toast.promise(
              payRoomFull({
                data: { paymentMethodId: token! },
                id: roomBookingId!,
              }).unwrap(),
              {
                loading: "Processing full payment...",
                success: (data) => {
                  setStatus("success");
                  setMessage(data.message || "Full Payment successful!");
                  return data.message;
                },
                error: (err) => {
                  setStatus("error");
                  setMessage(err.message || "Full Payment failed.");
                  return err.message;
                },
              }
            );
          }

          await result;
        }
      } catch (error) {
        console.error("Unexpected error during payment processing:", error);
        setStatus("error");
        setMessage("Unexpected error occurred.");
      }
    };

    handlePayment();
  }, [
    payType,
    payFor,
    payTourFull,
    payTour80,
    payTour20,
    token,
    tourBookingId,
    initialTourBookingId,
    finalTourBookingId,
    payRoom20,
    payRoom80,
    payRoomFull,
    initialRoomBookingId,
    finalRoomBookingId,
    roomBookingId,
  ]);

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
