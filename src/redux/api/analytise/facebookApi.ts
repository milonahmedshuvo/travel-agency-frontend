/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../baseApi";

// Define response types
export type ReviewAnalyticsItem = {
  date: string;
  positive: number;
  negative: number;
};

export type CategoryItem = {
  name: "SEA_TOUR" | "LAND_TOUR" | "CULTURAL_TOUR" | "GASTRO_WINE_TOUR"; // or simply `string` if dynamic
  averageRating: number;
  totalFeedback: number;
};

export type FacebookAnalyticsResponse = {
  analytics: ReviewAnalyticsItem[];
  categories: CategoryItem[];
  totalAverage: number;
};

// Define query argument type
export type FacebookAnalyticsQueryParams = {
  startDate: string;
  endDate: string;
};

// Inject endpoints
export const facebookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    facebookAnalytise: builder.query<FacebookAnalyticsResponse, FacebookAnalyticsQueryParams>({
      query: ({ startDate, endDate }) => ({
        url: `/analytics/reviews?startDate=${startDate}&endDate=${endDate}`,
        method: "GET",
      }),
     
      transformResponse: (response: {
        message: string;
        success: boolean;
        meta: any;
        data: FacebookAnalyticsResponse;
      }) => response.data,
    }),
  }),
});

export const { useFacebookAnalytiseQuery } = facebookApi;
