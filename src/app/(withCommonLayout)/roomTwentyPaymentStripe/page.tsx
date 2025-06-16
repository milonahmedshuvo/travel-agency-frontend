"use client"

import { useGetSingleRoomBookingQuery } from "@/redux/api/hotelPackages/hotelPackegesApi";
import { useAppSelector } from "@/redux/hook"
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RoomStripeFullPaymentPage = () => {
    const amount = useAppSelector((state) => state.booking.roomBookingPayment?.amount)
    const clientSecret  = useAppSelector((state) => state.booking.roomBookingPayment?.clientSecret)
    const id = useAppSelector((state) => state.booking.roomBookingId)
    const {data:roomBooking}= useGetSingleRoomBookingQuery(id)
    console.log("transition id ",  roomBooking?.data?.transactions?.id)
    const router = useRouter()
   


   




    const stripe = useStripe();
    const elements = useElements();


    const handleRoomBookingFullPaymentByStripe = async () => {
    // console.log('Stripe full payment clientSecret:', clientSecret);

    if (!stripe || !elements || !clientSecret) {
      console.error("Stripe.js has not yet loaded or clientSecret is missing.");
      toast.error("Stripe.js has not yet loaded or clientSecret is missing.")
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
          name: 'user',
        },
      },
    });

    if (result.error) {
      console.error("Payment failedddd:", result.error.message);
      toast.error("Payment failed, Please try again!!")
    } else {




      if (result.paymentIntent?.status === 'succeeded') {
        console.log("card success result:", result)
        console.log("Payment succeeded paymentIntent!", result.paymentIntent );


        // TODO: Call backend to update payment status
        console.log('paymentMethodId', result?.paymentIntent?.id)
        const paymentMethodId = result.paymentIntent.id;
        console.log('paymethod idddddddddd', paymentMethodId)




        const token = localStorage.getItem('token');

        try {
        const res = await fetch(`https://supermariobos-api.code-commando.com/api/v1/room-bookings/${id}/split-pay/initial`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ paymentMethodId, transactionId: roomBooking?.data?.splitPayment?.initialPaymentTransaction?.id }),
        });

        const data = await res.json();

    

        if (data) {
          toast.success( `${data.message} 20% ` || "Payment 20% confirmed successfully!");
          console.log("Backend response:", data);

          router.push('/booking/accommodation/roomTwentStripeConfirm')
        } else {
          toast.error("Failed to confirm payment.");
          console.error("Error from backend:", data);
        }



      } catch (error) {
        toast.error("Something went wrong while confirming payment.");
        console.error("Fetch error:", error);
      }

      }



    }
  };








  return (
    <div className="flex flex-col justify-center items-center pt-10 pb-20 gap-5.5  h-screen ">

        <div className="w-[300px] border p-4 rounded-lg">
        <CardElement />
      </div>



         <button
          onClick={() => handleRoomBookingFullPaymentByStripe()}
          type="submit"
          className="w-[300px] py-3 px-4 bg-linear-to-b from-[#38B6FF] from-30%  to-[#156CF0]  text-[#fff] rounded-lg flex items-center justify-center cursor-pointer"
        >
          {`Confirm Payment  $${amount}`}
        </button>
    </div>
  )
}

export default RoomStripeFullPaymentPage;