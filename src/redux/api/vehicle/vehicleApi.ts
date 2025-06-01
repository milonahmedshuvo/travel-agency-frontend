import { baseApi } from "../baseApi";

    
export const vehicleApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

    getAllVehicle : builder.query({
    query : () => '/vehicles',
    providesTags: ['vehicles']
   }),

   createVehicle : builder.mutation({
    query : (vehicleData) => ({
        url : '/vehicles',
        method: 'POST',
        body: vehicleData
    }),
    invalidatesTags: ['vehicles']
   }),
    




    }), 
  });
  
  export const {useGetAllVehicleQuery, useCreateVehicleMutation} = vehicleApi;