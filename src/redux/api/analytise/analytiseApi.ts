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
    })
})



export const { useAnalytiseDashboardQuery, useAnalytiseTourBookingsQuery } = analytiseApi;