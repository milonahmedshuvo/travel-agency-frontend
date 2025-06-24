import { baseApi } from "../baseApi";
import { tagTypes } from "../tag-types";

export const tourPackagesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createtourPackages: builder.mutation({
      query: (tourPackagesData) => ({
        url: "/tour-packages",
        method: "POST",
        body: tourPackagesData,
      }),
      invalidatesTags: [tagTypes.tourPackages],
    }),

    
    updateTourPackage: builder.mutation({
      query: ({id, tourPackageData } ) => ({
         url : `/tour-packages/${id}`,
         method: "PATCH",
         body: tourPackageData
      })
    }),




    // Get sea tour
    getSeaTour: builder.query({
      query: () => "/tour-packages?category=SEA_TOUR",
      providesTags: [tagTypes.tourPackages],
    }),

    // GET LAND TOUR
    getLandTour: builder.query({
      query: () => "/tour-packages?category=LAND_TOUR",
      providesTags: [tagTypes.tourPackages],
    }),

    // GET CULTURAL_TOUR
    getCurturalTour: builder.query({
      query: () => "/tour-packages?category=CULTURAL_TOUR",
      providesTags: [tagTypes.tourPackages],
    }),

    // GET GASTRO_WINE_TOUR
    getGastroTour: builder.query({
      query: () => "/tour-packages?category=GASTRO_WINE_TOUR",
      providesTags: [tagTypes.tourPackages],
    }),

    // GET SINGLE TOUR // /tour-packages/68307a3e2bcdc10c882ce89b
    getSingleTour: builder.query({
      query: (id) => `/tour-packages/${id}`,
    }),

    






    // POST tOUR bOOKING
    createTourBooking: builder.mutation({
      query: (tourBooking) => ({
        url: "/tour-bookings",
        method: "POST",
        body: tourBooking,
      }),
      invalidatesTags: [tagTypes?.TourBookings]
    }),

    // GET all tour booking
    getAllTourBookings: builder.query({
      query: () => "/tour-bookings",
      providesTags: [tagTypes.tourPackages],
    }),

    getSingleTourBooking: builder.query({
      query: (id) => `/tour-bookings/${id}`,
      providesTags: [tagTypes.tourPackages],
    }),

    // Cencel tour booking by reason 
    cancelTourBooking: builder.mutation({
      query : ({id, reason}) => ({
        url: `/tour-bookings/cancel/${id}`,
        method: "PATCH",
        body: {reason}
      }),
      invalidatesTags: [tagTypes?.TourBookings]
    }),






  }),
});

export const {
  useCreatetourPackagesMutation,
  useGetLandTourQuery,
  useGetSingleTourQuery,
  useCreateTourBookingMutation,
  useGetSeaTourQuery,
  useGetAllTourBookingsQuery,
  useGetCurturalTourQuery,
  useGetGastroTourQuery,
  useGetSingleTourBookingQuery,

  useCancelTourBookingMutation,
  useUpdateTourPackageMutation 

} = tourPackagesApi;
