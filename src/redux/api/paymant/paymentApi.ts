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

    })
})



export const { useCreateTourPaypal20PaymentMutation, useCreateTourPaypal80PaymentMutation, useCreateTourPaypalPaymentMutation} = paymentApi