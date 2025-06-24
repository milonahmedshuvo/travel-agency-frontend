import { baseApi } from "../baseApi";
import { tagTypes } from "../tag-types";


    
export const CustomerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllCustomers: builder.query({
            query: () => ({
                url: '/customer',
                method: 'GET',
            }),
            providesTags: [tagTypes.customer],
        }),
        getSingleCustomers: builder.query({
            query: (id) => ({
                url: `/customers/${id}`,
                method: 'GET',
            }),
            providesTags: [tagTypes.customer],
        }),

        createCustomer: builder.mutation({
            query: (data) => ({
                url: '/customer',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: [tagTypes.customer],
        }),




    }), 
  });
  
  export const { useGetAllCustomersQuery, useCreateCustomerMutation, useGetSingleCustomersQuery  } = CustomerApi;