import { baseApi } from "../baseApi";


    
export const tourPackagesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({


   createtourPackages : builder.mutation({
    query : (tourPackagesData) => ({
        url : '/tour-packages',
        method: 'POST',
        body: tourPackagesData
    })
   }),
    // GET LAND TOUR 
    getLandTour : builder.query({
        query: () => '/tour-packages?category=LAND_TOUR' 
    }),
    // GET SINGLE TOUR 
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


   
    }),
  });
  
  export const { useCreatetourPackagesMutation, useGetLandTourQuery, useGetSingleTourQuery, useCreateTourBookingMutation } = tourPackagesApi;