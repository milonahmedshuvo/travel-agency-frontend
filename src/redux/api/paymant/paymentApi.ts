import { baseApi } from "../baseApi";
import { tagTypes } from "../tag-types";
 

export const paymentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
            
    createTourPaypalPayment:  builder.mutation<{message: string}, {data: {paymentMethodId: string}, id: string}>({
        query: ({data, id}) => ({
            url: `tour-bookings/full-payment-confirm/${id}/paypal`,
            method: "POST",
            body: data
        }),
        invalidatesTags: [tagTypes.payment],
    }),
    createTourPaypal80Payment: builder.mutation<{message: string}, {data: {paymentMethodId: string; transactionId?: string}, id: string}>({
        query: ({data, id}) => ({
            url: `/tour-bookings/${id}/split-pay/final`,
            method: "POST",
            body: data
        }),
        invalidatesTags: [tagTypes.payment],
    }),
    createTourPaypal20Payment: builder.mutation<{message: string}, {data: {paymentMethodId: string; transactionId?: string}, id: string}>({
        query: ({data, id}) => ({
            url: `/tour-bookings/${id}/split-pay/initial`,
            method: "POST",
            body: data
        }),
        invalidatesTags: [tagTypes.payment],
    }),




    // ROOM BOOKING PAYMENTS FOR PAYPAL 
    createRoomPaypalPayment:  builder.mutation<{message: string}, {data: {paymentMethodId: string}, id: string}>({
        query: ({data, id}) => ({
            url: `room-bookings/full-payment-confirm/${id}/paypal`,
            method: "POST",
            body: data
        }),
        invalidatesTags: [tagTypes.payment],
    }),
    createRoomPaypal80Payment: builder.mutation<{message: string}, {data: {paymentMethodId: string; transactionId?: string}, id: string}>({
        query: ({data, id}) => ({
            url: `/room-bookings/${id}/split-pay/final`,
            method: "POST",
            body: data
        }),
        invalidatesTags: [tagTypes.payment],
    }),
    createRoomPaypal20Payment: builder.mutation<{message: string}, {data: {paymentMethodId: string; transactionId?: string}, id: string}>({
        query: ({data, id}) => ({
            url: `/room-bookings/${id}/split-pay/initial`,
            method: "POST",
            body: data
        }),
        invalidatesTags: [tagTypes.payment],
    }),








    // ROOM BOOKING PAYMENTS FOR STRIPE  

      // ✅ New mutation endpoint for confirming initial 20% payment
     confirmInitialRoomSplitPayment: builder.mutation({
      query: ({ id, paymentMethodId, transactionId }) => ({
        url: `/room-bookings/${id}/split-pay/initial`,
        method: "POST",
        body: {
          paymentMethodId,
          transactionId,
        },
      }),
      invalidatesTags: [tagTypes.payment],
    }), 

    confirmRoom80StripePayment: builder.mutation({
      query: ({ id, paymentMethodId, transactionId, token }) => ({
        url: `/room-bookings/${id}/split-pay/final`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: {
          paymentMethodId,
          transactionId,
        },
      }),
      invalidatesTags: [tagTypes.payment],
    }),



    // ✅ New mutation for final (80%) payment
    confirmFinalRoomSplitPayment: builder.mutation({
      query: ({ id, paymentMethodId, transactionId }) => ({
        url: `/room-bookings/${id}/split-pay/final`,
        method: 'POST',
        body: { paymentMethodId, transactionId },
      }),
      invalidatesTags:[tagTypes.payment],
    }),

   
    confirmRoomFullPayment: builder.mutation({
       query: ({ id, paymentMethodId }) => ({
         url: `/room-bookings/full-payment-confirm/${id}/stripe`, 
         method: 'POST',
         body: { paymentMethodId },
       }),
       invalidatesTags:[tagTypes.payment],
    })
    })
})



export const {
     useCreateTourPaypal20PaymentMutation, 
     useCreateTourPaypal80PaymentMutation, 
     useCreateTourPaypalPaymentMutation, 

     useCreateRoomPaypalPaymentMutation,
     useCreateRoomPaypal80PaymentMutation,
     useCreateRoomPaypal20PaymentMutation,

    //  Room booking Stripe 
    useConfirmInitialRoomSplitPaymentMutation,
    useConfirmFinalRoomSplitPaymentMutation,
    useConfirmRoomFullPaymentMutation
    } = paymentApi