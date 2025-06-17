import { baseApi } from "../baseApi";
import { tagTypes } from "../tag-types";

export const vehicleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllVehicle: builder.query({
      query: () => "/vehicles",
      providesTags: [tagTypes.vehicles],
    }),

    createVehicle: builder.mutation({
      query: (vehicleData) => ({
        url: "/vehicles",
        method: "POST",
        body: vehicleData,
      }),
      invalidatesTags: [tagTypes.vehicles],
    }),
    getSingleVehicle: builder.query({
      query: (id) => ({
        url:`/vehicles/${id}`,
        method: 'GET'
      })
    }),
    updateVehicle: builder.mutation({
      query: ({id,data}) => ({
        url: `/vehicles/${id}`,
        method: 'PATCH',
        body: data
      })
    })
  }),

});

export const { useGetAllVehicleQuery, useCreateVehicleMutation, useGetSingleVehicleQuery, useUpdateVehicleMutation } = vehicleApi;
