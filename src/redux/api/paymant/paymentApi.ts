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
     confirmRoom20StripePayment: builder.mutation({
      query: ({ id, paymentMethodId, transactionId }) => ({
        url: `/room-bookings/${id}/split-pay/initial`,
        method: "POST",
        body: {
          paymentMethodId,
          transactionId,
        },
      }),
      invalidatesTags: ['payment'],
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
      invalidatesTags: ['payment'],
    }),


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
     useConfirmRoom20StripePaymentMutation,
     useConfirmRoom80StripePaymentMutation,
    } = paymentApi