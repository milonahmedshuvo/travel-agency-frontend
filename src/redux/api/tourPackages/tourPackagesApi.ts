import { baseApi } from "../baseApi";


    
export const tourPackagesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({


   createtourPackages : builder.mutation({
    query : (tourPackagesData) => ({
        url : '/tour-packages',
        method: 'POST',
        body: tourPackagesData
    }),
    invalidatesTags : ['tourPackages']
   }),


    // Get sea tour 
    getSeaTour : builder.query({
        query: () => '/tour-packages?category=SEA_TOUR', 
        providesTags: ['tourPackages']
    }),

    // GET LAND TOUR 
    getLandTour : builder.query({
        query: () => '/tour-packages?category=LAND_TOUR' 
    }),
    
    // GET CULTURAL_TOUR
    getCurturalTour: builder.query({
        query: () => '/tour-packages?category=CULTURAL_TOUR'
    }),

     // GET GASTRO_WINE_TOUR
    getGastroTour: builder.query({
        query: () => '/tour-packages?category=GASTRO_WINE_TOUR'
    }),


   

    // GET SINGLE TOUR // /tour-packages/68307a3e2bcdc10c882ce89b
    getSingleTour : builder.query({
        query : (id) => `/tour-packages/${id}`
    }),

    // POST tOUR bOOKING 
    createTourBooking : builder.mutation({
        query: (tourBooking) => ({
            url : '/tour-bookings',
            method: 'POST',
            body: tourBooking
        })
    }), 

    // GET all tour booking
    getAllTourBookings: builder.query({
        query : () => "/tour-bookings" 
    }),

    getSingleTourBooking : builder.query({
        query : (id) => `/tour-bookings/${id}`  
    })
     

   
    }),
  });
  
  export const { useCreatetourPackagesMutation, useGetLandTourQuery, useGetSingleTourQuery, useCreateTourBookingMutation, useGetSeaTourQuery, useGetAllTourBookingsQuery, useGetCurturalTourQuery, useGetGastroTourQuery, useGetSingleTourBookingQuery } = tourPackagesApi;