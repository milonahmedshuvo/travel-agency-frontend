import { baseApi } from "../baseApi";
import { tagTypes } from "../tag-types";

    
export const feedbacksApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

    getAllfeedbacks : builder.query({
    query : () => '/feedbacks',
    providesTags: [tagTypes.feedbacks]
   }),


   getAllfeedbacksWithJPagintion : builder.query({
    query : (page) => `/feedbacks?page=${page}`,
    providesTags: [tagTypes.feedbacks]
   }),

   createFeedbacks : builder.mutation({
    query : (feedbacksData) => ({
        url : '/feedbacks',
        method: 'POST',
        body: feedbacksData
    }),
    invalidatesTags: [tagTypes.feedbacks]
   }),
    



    }), 
  });
  
  export const {useGetAllfeedbacksQuery, useCreateFeedbacksMutation, useGetAllfeedbacksWithJPagintionQuery } = feedbacksApi;