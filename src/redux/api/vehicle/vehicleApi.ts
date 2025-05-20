import { baseApi } from "../baseApi";

    
export const vehicleApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
    getAllVehicle : builder.query({
    query : () => '/vehicles'
   }) 


    }),
  });
  
  export const {} = vehicleApi;