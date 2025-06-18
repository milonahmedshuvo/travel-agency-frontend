import { baseApi } from "../baseApi";
import { tagTypes } from "../tag-types";
 
export const blogApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
    
    createBlog: builder.mutation({
        query: (blogData) => ({
            url: "/blogs",
            method: "POST",
            body: blogData
        }),
        invalidatesTags: [tagTypes.blog],
    }),

    getAllBlogs : builder.query({
        query: () => "/blogs",
        providesTags: [tagTypes.blog],
    }),

    getSingleBlog : builder.query({
        query : (id) => `/blogs/${id}`
    }),

    blogDelete : builder.mutation({
        query : (id) => ({
           url: `/blogs/${id}`,
           method: 'DELETE', 
        }),
       invalidatesTags: [tagTypes.blog],
    }),

    })
})



export const { useCreateBlogMutation, useGetAllBlogsQuery, useGetSingleBlogQuery, useBlogDeleteMutation } = blogApi