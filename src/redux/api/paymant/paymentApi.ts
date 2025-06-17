import { baseApi } from "../baseApi";
 

export const paymentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
            
    createTourPaypalPayment:  builder.mutation<{message: string}, {data: {paymentMethodId: string}, id: string}>({
        query: ({data, id}) => ({
            url: `tour-bookings/full-payment-confirm/${id}/paypal`,
            method: "POST",
            body: data
        }),
        invalidatesTags: ['payment'],
    }),
    createTourPaypal80Payment: builder.mutation<{message: string}, {data: {paymentMethodId: string; transactionId?: string}, id: string}>({
        query: ({data, id}) => ({
            url: `/tour-bookings/${id}/split-pay/final`,
            method: "POST",
            body: data
        }),
        invalidatesTags: ['payment'],
    }),
    createTourPaypal20Payment: builder.mutation<{message: string}, {data: {paymentMethodId: string; transactionId?: string}, id: string}>({
        query: ({data, id}) => ({
            url: `/tour-bookings/${id}/split-pay/initial`,
            method: "POST",
            body: data
        }),
        invalidatesTags: ['payment'],
    }),




    // ROOM BOOKING PAYMENTS FOR PAYPAL 
    createRoomPaypalPayment:  builder.mutation<{message: string}, {data: {paymentMethodId: string}, id: string}>({
        query: ({data, id}) => ({
            url: `room-bookings/full-payment-confirm/${id}/paypal`,
            method: "POST",
            body: data
        }),
        invalidatesTags: ['payment'],
    }),
    createRoomPaypal80Payment: builder.mutation<{message: string}, {data: {paymentMethodId: string; transactionId?: string}, id: string}>({
        query: ({data, id}) => ({
            url: `/room-bookings/${id}/split-pay/final`,
            method: "POST",
            body: data
        }),
        invalidatesTags: ['payment'],
    }),
    createRoomPaypal20Payment: builder.mutation<{message: string}, {data: {paymentMethodId: string; transactionId?: string}, id: string}>({
        query: ({data, id}) => ({
            url: `/room-bookings/${id}/split-pay/initial`,
            method: "POST",
            body: data
        }),
        invalidatesTags: ['payment'],
    }),








    // ROOM BOOKING PAYMENTS FOR STRIPE 

      // ✅ New mutation endpoint for confirming initial 20% payment
     confirmInitialRoomSplitPayment: builder.mutation({
      query: ({ id, paymentMethodId, transactionId }) => ({
        url: `/room-bookings/${id}/split-pay/initial`,
        method: 'POST',
        body: { paymentMethodId, transactionId },
      }),
      invalidatesTags: ['payment'],
    }),



    // ✅ New mutation for final (80%) payment
    confirmFinalRoomSplitPayment: builder.mutation({
      query: ({ id, paymentMethodId, transactionId }) => ({
        url: `/room-bookings/${id}/split-pay/final`,
        method: 'POST',
        body: { paymentMethodId, transactionId },
      }),
      invalidatesTags: ['payment'],
    }),

   
    confirmRoomFullPayment: builder.mutation({
       query: ({ id, paymentMethodId }) => ({
         url: `/room-bookings/full-payment-confirm/${id}/stripe`, 
         method: 'POST',
         body: { paymentMethodId },
       }),
       invalidatesTags: ['payment'],
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