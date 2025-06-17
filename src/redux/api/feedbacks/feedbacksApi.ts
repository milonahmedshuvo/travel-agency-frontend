import { baseApi } from "../baseApi";

    
export const feedbacksApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

    getAllfeedbacks : builder.query({
    query : () => '/feedbacks',
    providesTags: ['/feedbacks']
   }),

   createFeedbacks : builder.mutation({
    query : (feedbacksData) => ({
        url : '/feedbacks',
        method: 'POST',
        body: feedbacksData
    }),
    invalidatesTags: ['/feedbacks']
   }),
    




    }), 
  });
  
  export const {useGetAllfeedbacksQuery, useCreateFeedbacksMutation} = feedbacksApi;