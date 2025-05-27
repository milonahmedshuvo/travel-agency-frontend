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
    }) 
     


  }),
});

export const { useCreateHotelPackagesMutation, useGetAllHotelPackagesQuery, useGetSingleHotelPackagesQuery, useCreateRoomBookingMutation } =
  hotelPackagesApi;
