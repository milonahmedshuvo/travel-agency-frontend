"use client";

import { getBaseUrl } from "@/config/base-url";
import { useAppSelector } from "@/redux/hook";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RoomStripeFullPaymentPage = () => {
  const amount = useAppSelector(
    (state) => state.booking.roomBookingPayment?.amount
  );
  const clientSecret = useAppSelector(
    (state) => state.booking.roomBookingPayment?.clientSecret
  );
  const id = useAppSelector((state) => state.booking.roomBookingId);
  const router = useRouter();

  const stripe = useStripe();
  const elements = useElements();

  const handleRoomBookingFullPaymentByStripe = async () => {
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
          name: "Mizan",
        },
      },
    });

    if (result.error) {
      console.error("Payment failedddd:", result.error.message);
      toast.error("Payment failed, Please try again!!");
    } else {
      if (result.paymentIntent?.status === "succeeded") {
        console.log("Payment succeeded paymentIntent!", result.paymentIntent);

        // TODO: Call backend to update payment status
        console.log("paymentMethodId", result?.paymentIntent?.id);
        const paymentMethodId = result.paymentIntent.id;

        const token = localStorage.getItem("token");

        try {
          const res = await fetch(
            `${getBaseUrl()}/room-bookings/full-payment-confirm/${id}/stripe`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({ paymentMethodId }),
            }
          );

          const data = await res.json();

          if (data.success) {
            toast.success(data.message || "Payment confirmed successfully!");
            console.log("Backend responsesssssssssss:", data);

            router.push("/booking/accommodation/roomTwentStripeConfirm");
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
    <div className="flex justify-center flex-col items-center pt-10 pb-20 gap-5.5 h-screen ">
      <div className="w-[300px] border p-4 rounded-lg">
        <CardElement />
      </div>

      <button
        onClick={() => handleRoomBookingFullPaymentByStripe()}
        type="submit"
        className="w-[300px] py-3 px-4 bg-linear-to-b from-[#38B6FF] from-30%  to-[#156CF0]  text-[#fff] rounded-lg flex items-center justify-center cursor-pointer"
      >
        {`Confirm Payment $${amount}`}
      </button>
    </div>
  );
};

export default RoomStripeFullPaymentPage;
