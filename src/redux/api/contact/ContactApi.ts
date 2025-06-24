
import { baseApi } from "../baseApi";
import { tagTypes } from "../tag-types";

export const contactApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({

    createContact: builder.mutation({
      query: (contactData) => ({
        url: "/contacts",
        method: "POST",
        body: contactData,
      }),
      invalidatesTags: [tagTypes.contacts],
    }),

    getAllContacts : builder.query({
        query : () => '/contacts',
        providesTags: [tagTypes.contacts]
    }),

    getSingleContacts : builder.query({
        query : (id) => `/contacts/${id}`,
        providesTags : [tagTypes.contacts]
    }),

   
  
  }),

});

export const {useCreateContactMutation, useGetAllContactsQuery, useGetSingleContactsQuery} = contactApi;
