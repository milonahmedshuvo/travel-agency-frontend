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
    
    // Get sea tour 
    getSeaTour : builder.query({
        query: () => '/tour-packages?category=SEA_TOUR' 
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

     
   


   
    }),
  });
  
  export const { useCreatetourPackagesMutation, useGetLandTourQuery, useGetSingleTourQuery, useCreateTourBookingMutation, useGetSeaTourQuery } = tourPackagesApi;