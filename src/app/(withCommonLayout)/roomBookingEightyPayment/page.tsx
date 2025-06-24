"use client";

import Loading from "@/components/shared/loading/Loading";
import { useGetSingleRoomBookingQuery } from "@/redux/api/hotelPackages/hotelPackegesApi";
import { useConfirmFinalRoomSplitPaymentMutation } from "@/redux/api/paymant/paymentApi";
import { useAppSelector } from "@/redux/hook"
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RoomStripeEightyPaymentPage = () => {
  const amount = useAppSelector(
    (state) => state.booking.roomBookingEightyPayment?.amount
  );
  const clientSecret = useAppSelector(
    (state) => state.booking.roomBookingEightyPayment?.clientSecret
  );
  const id = useAppSelector((state) => state.booking.roomBookingId);
  const { data: roomBooking } = useGetSingleRoomBookingQuery(id);
  const router = useRouter();

    // Room booking 
   const [confirmFinalPayment, { isLoading: isConfirmingFinal }] = useConfirmFinalRoomSplitPaymentMutation();
    

  const stripe = useStripe();
  const elements = useElements();

  const handleRoomStripeEightyPayment = async () => {
    // console.log('Stripe full payment clientSecret:', clientSecret);

    if (!stripe || !elements || !clientSecret) {
      console.error("Stripe.js has not yet loaded or clientSecret is missing.");
      toast.error("Stripe.js has not yet loaded or clientSecret is missing.");
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      console.error("CardElement not found.");
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: "user",
        },
      },
    });

    if (result.error) {
      console.error("Payment failedddd:", result.error.message);
      toast.error("Payment failed, Please try again!!");
    } else {
      if (result.paymentIntent?.status === 'succeeded') {
        console.log("card success result:", result)
      
        // TODO: Call backend to update payment status
       const paymentMethodId = result.paymentIntent.id;
        // const token = localStorage.getItem('token');
        const transactionId = roomBooking?.data?.splitPayment?.finalPaymentTransaction?.id;

    try {
      const res = await confirmFinalPayment({ id, paymentMethodId, transactionId }).unwrap();

      toast.success(`${res.message} 80%` || "Payment 80% confirmed successfully!");
      console.log("Backend response:", res);
      router.push('/booking/accommodation/roomTwentStripeConfirm');
    } catch (error) {
      toast.error("Something went wrong while confirming payment.");
      console.error("RTK mutation error:", error);
    }   

        //   confirm 20% payment for stripe



      //   try {
      //   const res = await fetch(`https://supermariobos-api.code-commando.com/api/v1/room-bookings/${id}/split-pay/final`, {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Authorization': `Bearer ${token}`
      //     },
      //     body: JSON.stringify({ paymentMethodId, transactionId: roomBooking?.data?.splitPayment?.finalPaymentTransaction?.id }),
      //   });

      //   const data = await res.json();

      //   if (data) {
      //     toast.success( `${data.message} 80% ` || "Payment 80% confirmed successfully!");
      //     console.log("Backend response:", data);

      //     router.push('/booking/accommodation/roomTwentStripeConfirm')
          
         
      //   } else {
      //     toast.error("Failed to confirm payment.");
      //     console.error("Error from backend:", data);
      //   }



      // } catch (error) {
      //   toast.error("Something went wrong while confirming payment.");
      //   console.error("Fetch error:", error);
      // }





      }
    }
  };






if(isConfirmingFinal){
  return <Loading/>
}


  return (
    <div className="flex flex-col justify-center items-center pt-10 pb-20 gap-5.5  h-screen ">
      <div className="w-[300px] border p-4 rounded-lg">
        <CardElement />
      </div>

      <button
        onClick={() => handleRoomStripeEightyPayment()}
        type="submit"
        className="w-[300px] py-3 px-4 bg-linear-to-b from-[#38B6FF] from-30%  to-[#156CF0]  text-[#fff] rounded-lg flex items-center justify-center cursor-pointer"
      >
        {`Confirm Payment 80%  $${amount}`}
      </button>
    </div>
  );
};

export default RoomStripeEightyPaymentPage;
