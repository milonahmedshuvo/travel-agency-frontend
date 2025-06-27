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

        updateCustomer : builder.mutation({
            query: ({id, data}) => ({
                url: `/customers/${id}`,
                method: "PATCH",
                body: data
            })
        }),

        updateAdmin : builder.mutation({
            query: ({id, data}) => ({
                url: `/admins/${id}`,
                method: "PATCH",
                body: data
            })
        }),





    }), 
  });
  
  export const { useGetAllCustomersQuery, useCreateCustomerMutation, useGetSingleCustomersQuery, useUpdateCustomerMutation, useUpdateAdminMutation } = CustomerApi;