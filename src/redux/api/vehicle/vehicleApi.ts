import { baseApi } from "../baseApi";

    
export const vehicleApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
    getAllVehicle : builder.query({
    query : () => '/vehicles'
   }),

   createVehicle : builder.mutation({
    query : (vehicleData) => ({
        url : '/vehicles',
        method: 'POST',
        body: vehicleData
    })
   }) 
   
    }),
  });
  
  export const {useGetAllVehicleQuery, useCreateVehicleMutation} = vehicleApi;