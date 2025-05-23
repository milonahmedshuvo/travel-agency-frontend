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
   
   

   
    }),
  });
  
  export const {useCreatetourPackagesMutation} = tourPackagesApi;