/* eslint-disable @typescript-eslint/no-explicit-any */
import { GenericResponse, RevenueOverview, TourStats } from "@/components/lib/types";
import { baseApi } from "../baseApi";
import { reqTypes } from "../req-types";
import { tagTypes } from "../tag-types";

const ANALYTICS_URL = "/analytics";

export const analytiseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    analytiseDashboard: builder.query({
      query: () => `${ANALYTICS_URL}/dashboard`,
    }),

    // /analytics/tour-bookings
    analytiseTourBookings: builder.query({
      query: () => `${ANALYTICS_URL}/tour-bookings`,
    }),

    // /analytics/hotel-bookings
    analyticsHotelBookings: builder.query({
      query: () => `${ANALYTICS_URL}/hotel-bookings`,
    }),

    topDestinations: builder.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${ANALYTICS_URL}/top-destinations`,
          method: reqTypes.get,
          params: arg,
        };
      },
      transformResponse: (
        response: GenericResponse<TourStats[]>,
        meta: any
      ) => {
        return {
          topDestinations: response.data,
          meta,
        };
      },
      providesTags: [tagTypes.analytics],
    }),

    revenueOverview: builder.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${ANALYTICS_URL}/revenue-overview`,
          method: reqTypes.get,
          params: arg,
        };
      },
      transformResponse: (
        response: GenericResponse<RevenueOverview[]>,
        meta: any
      ) => {
        return {
          revenueOverview: response.data,
          meta,
        };
      },
      providesTags: [tagTypes.analytics],
    }),
  }),
});

export const {
  useAnalytiseDashboardQuery,
  useAnalytiseTourBookingsQuery,
  useAnalyticsHotelBookingsQuery,
  useTopDestinationsQuery,
  useRevenueOverviewQuery
} = analytiseApi;
