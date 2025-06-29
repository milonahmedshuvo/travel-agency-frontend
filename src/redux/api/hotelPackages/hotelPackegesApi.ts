import { baseApi } from "../baseApi";
import { tagTypes } from "../tag-types";

export const hotelPackagesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createHotelPackages: builder.mutation({
      query: (hotelPackagesData) => ({
        url: "/hotel-packages",
        method: "POST",
        body: hotelPackagesData,
      }),
    }),


   updatedHotelPackages: builder.mutation({
      query: ({id, hotelData}) => ({
        url: `/hotel-packages/${id}`,
        method: "PATCH",
        body: hotelData,
      }),
    }),



    //GET ALL HOTEL PACKAGES
    getAllHotelPackages: builder.query({
      query: () => "/hotel-packages",
    }),

    //Get single hotel packages 
    getSingleHotelPackages: builder.query({
        query : (id) => `/hotel-packages/${id}`
    }),


    // Hotel and Room booking API,s
    createRoomBooking: builder.mutation({
      query : (roomBookingData) =>({
        url: "/room-bookings",
        method: "POST",
        body: roomBookingData
      }),
      invalidatesTags: [tagTypes?.hotelBookings] 
    }),
    
    getAllRoomBookings : builder.query({
      query : () => '/room-bookings',
      providesTags: [tagTypes?.hotelBookings]
    }),


     getAllRoomBookingsWithPagination : builder.query({
      query : (page) => `/room-bookings?page=${page}`
    }),

    

    getSingleRoomBooking : builder.query({
      query : (id) => `/room-bookings/${id}`,
      providesTags: [tagTypes?.hotelBookings]
    }),
   
    cencelHotelBooking : builder.mutation({
      query : ({id, reason}) => ({
        url: `/room-bookings/cancel/${id}`,
        method: "PATCH",
        body: {reason}
      }),
      invalidatesTags: [tagTypes?.hotelBookings]
    })


  }),
});

export const { useCreateHotelPackagesMutation, useGetAllHotelPackagesQuery, useGetSingleHotelPackagesQuery, useCreateRoomBookingMutation, useGetAllRoomBookingsQuery, useGetSingleRoomBookingQuery, useCencelHotelBookingMutation, useUpdatedHotelPackagesMutation, useGetAllRoomBookingsWithPaginationQuery } =
  hotelPackagesApi;
