import { baseApi } from "../baseApi";

export const hotelPackagesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createHotelPackages: builder.mutation({
      query: (hotelPackagesData) => ({
        url: "/hotel-packages",
        method: "POST",
        body: hotelPackagesData,
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
      }) 
    }),
    
    getAllRoomBookings : builder.query({
      query : () => '/room-bookings'
    }),

    getSingleRoomBooking : builder.query({
      query : (id) => `/room-bookings/${id}`
    }),

    

    




     


  }),
});

export const { useCreateHotelPackagesMutation, useGetAllHotelPackagesQuery, useGetSingleHotelPackagesQuery, useCreateRoomBookingMutation, useGetAllRoomBookingsQuery, useGetSingleRoomBookingQuery } =
  hotelPackagesApi;
