import { baseApi } from "../baseApi";


export const analytiseApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        analytiseDashboard : builder.query({
            query : () => "/analytics/dashboard"
        }),

        // /analytics/tour-bookings
        analytiseTourBookings : builder.query({
           query : () => "/analytics/tour-bookings"
        }),

        // /analytics/hotel-bookings
        analyticsHotelBookings : builder.query({
            query : () => "/analytics/hotel-bookings"
        })
    })
})



export const { useAnalytiseDashboardQuery, useAnalytiseTourBookingsQuery, useAnalyticsHotelBookingsQuery } = analytiseApi;