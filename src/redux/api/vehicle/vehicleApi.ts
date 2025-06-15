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
  }),
});

export const { useGetAllVehicleQuery, useCreateVehicleMutation } = vehicleApi;
