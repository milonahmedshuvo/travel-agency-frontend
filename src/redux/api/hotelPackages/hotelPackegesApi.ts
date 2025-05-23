import { baseApi } from "../baseApi";



    
export const hotelPackagesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({


   createHotelPackages : builder.mutation({
    query : (hotelPackagesData) => ({
        url : '/hotel-packages',
        method: 'POST',
        body: hotelPackagesData
    })
   }),
   
   

   
    }),
  });
  
  export const {useCreateHotelPackagesMutation} = hotelPackagesApi;