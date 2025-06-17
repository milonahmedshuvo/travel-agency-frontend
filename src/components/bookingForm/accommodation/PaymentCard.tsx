"use client";
import PaymentMethodModal from "@/common/PaymentMethodModal";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setRoomBookingEightyPayment, setRoomBookingPayment } from "@/redux/slice/booking/booking";
import { useRouter } from "next/navigation";
// import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function AccommodationPaymentCard() {
  const [loading, setLoading] = useState(false);
   const [loadingStripe, setLoadingStripe] = useState(false);
   const [loadingPaypal, setLoadingPaypal] = useState(false);

  const dispatch = useAppDispatch()
  const id = useAppSelector((state) => state.booking.roomBookingId)
  const router = useRouter()
  // modal state 
   const [isModalOpen, setModalOpen] = useState(false);
  console.log("booking iddddddddddddd", id)


  

  const handleRoomBookingByStripe = () => {
    setLoadingStripe(true)
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
      setLoadingStripe(false)
      // go to payment final page 
      console.log("amount", data?.data?.transactions?.amount)
      console.log("clientSecret", data?.data?.transactions?.clientSecret)

      // store clientSecret and amount in redux 
      dispatch(setRoomBookingPayment({clientSecret: data?.data?.transactions?.clientSecret,  amount: data?.data?.transactions?.amount }))
      router.push("/roomStripeFullPayment")
    }

  } catch (error) {
    console.error('Room payment requst Success:', error);
    setLoadingStripe(false)  }
};

// Call the function
makeStripePayment();

  };




  // Paypal payment it 
  const handleRoomBookingByPaypal = () => {
    setLoadingPaypal(true)
    const makeStripePayment = async () => {
    const token = localStorage.getItem('token'); 
    const url = `https://supermariobos-api.code-commando.com/api/v1/room-bookings/full-payment/${id}/paypal`;

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
    console.log('Room paypallllllllll payment requst Success:', data);

    if(data?.success){
      // go to payment final page 
      // console.log("amount", data?.data?.transactions?.amount)
      // console.log("clientSecret", data?.data?.transactions?.clientSecret)
      setLoadingPaypal(false)

      const link = data?.data?.transactions?.clientSecret

      if (link) {
    window.location.href = link;
  } else {
    toast.error('Payment link not found!');
    setLoadingPaypal(false)
  }
    }

  } catch (error) {
    console.error('Room payment requst Success:', error);
    setLoadingPaypal(false)
  }
};

// Call the function
makeStripePayment();

  };


  


  // TWENTY PARSEN payment Stripe and Paypal 
  const handleRoomBookingTwenty = () => {
     setModalOpen(true)   
  } 



  const handlePaymentSelection = (methods: {
    initialPaymentMethod: string;
    finalPaymentMethod: string;
  }) => {
    // console.log('Selected Methods:', methods);
    // Proceed with your API call or logic
    setLoading(true)

    // THIS IS STRIPE PAYMENT 
    if(methods.initialPaymentMethod === "STRIPE"){

    const makeStripePayment = async () => {
    const token = localStorage.getItem('token'); 
    const url = `https://supermariobos-api.code-commando.com/api/v1/room-bookings/${id}/split-pay`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify(methods)
    });

    const data = await response.json();
    console.log('20% payment stripe Success:', data);
    setLoading(false)

    if(data?.initial){
      // go to payment final page 20% payment and store amout transactionId, paymentMethodId
       // data?.initial.amount
      // data?.initial?.clientSecret

      // console.log("amount", data?.initial.amount)
      // console.log("clientSecret", data?.initial?.clientSecret)



      // store clientSecret and amount in redux  
      dispatch(setRoomBookingPayment({clientSecret: data?.initial?.clientSecret,  amount: data?.initial.amount}))
      dispatch(setRoomBookingEightyPayment({clientSecret: data?.final?.clientSecret,  amount: data?.final.amount}))

      router.push("/roomTwentyPaymentStripe")
    }

  } catch (error) {
    console.error('20% requst error', error);
    setLoading(false)
  }
};

// Call the function
makeStripePayment();
       
       
    }





    // THIS IS PAYPAL PAYMENET 

    if(methods.initialPaymentMethod === "PAYPAL"){
       console.log("tumi Paypal payment method choise korso")

       const makeStripePayment = async () => {
       const token = localStorage.getItem('token'); 
       const url = `https://supermariobos-api.code-commando.com/api/v1/room-bookings/${id}/split-pay`;

      try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify(methods)
    });

    const data = await response.json();


     console.log('20% payment paypal Success:', data);
     setLoading(false)


    if(data?.initial){
      // go to payment final page 
        console.log("clientSecret paypal", data?.initial?.clientSecret)
        const link = data?.initial?.clientSecret

      if (link) {
    window.location.href = link;
  } else {
    toast.error('Payment link not found!');
    setLoading(false)
  }
    }
  } catch (error) {
    console.error('Room payment requst error:', error);
    setLoading(false)
  }
};

// Call the function
makeStripePayment();
}

};




  return (
    <section className="space-y-6 bg-[#F4F4F4] ">
      <div className="space-y-6 max-w-[780px] mx-auto p-4 md:p-12  shadow bg-[#ffffff]">
        <div className="mb-3">
          {/* <p className="text-lg font-medium mb-5">Step 03</p> */}
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
          {
            loadingStripe ? <span> Processing..</span> : "Stripe Payment"
          }
          {
            !loadingStripe && <svg
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
          }
        </button>
        {/* </Link> */}

        <button
          onClick={() => handleRoomBookingByPaypal()} 
          type="button"
          className="w-full py-3 px-4 font-medium rounded-lg flex items-center justify-center bg-[#E8E8E8] text-[#101010]  mt-5 cursor-pointer"
        >
          {!loadingPaypal && <svg
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
          </svg>}
          {
            loadingPaypal ? <span> Processing..</span> : "PayPal Payment"
          }
        </button>


        <div className="flex items-center justify-center gap-6">
          <h1 className="w-[165px] h-[1px] bg-[#000000]"> </h1>
          <h1 className="uppercase">or</h1>
          <h1 className="w-[165px] h-[1px] bg-[#000000]"> </h1>
        </div>



        <button
          onClick={() => handleRoomBookingTwenty()} 
          type="button"
          className="w-full py-3 px-4 font-medium rounded-lg flex items-center justify-center bg-linear-to-b from-[#38B6FF] from-30%  to-[#156CF0]  text-[#fff]  mt-3 cursor-pointer"
        >
          {
            !loading && <svg
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
          }
          {
            loading ? <span>Processing..</span> : "Deposit 20% + Cash"
          }
        </button>
  
        <PaymentMethodModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handlePaymentSelection}
      /> 




      </div>
    </section>
  );
}
