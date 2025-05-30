import { baseApi } from "../baseApi";
 
export const blogApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
    
    createBlog: builder.mutation({
        query: (blogData) => ({
            url: "/blogs",
            method: "POST",
            body: blogData
        }),
        invalidatesTags: ['blog'],
    }),

    getAllBlogs : builder.query({
        query: () => "/blogs",
        providesTags: ['blog'],
    }),

    getSingleBlog : builder.query({
        query : (id) => `/blogs/${id}`
    }),

    blogDelete : builder.mutation({
        query : (id) => ({
           url: `/blogs/${id}`,
           method: 'DELETE', 
        }),
       invalidatesTags: ['blog'],
    }),

    })
})



export const { useCreateBlogMutation, useGetAllBlogsQuery, useGetSingleBlogQuery, useBlogDeleteMutation } = blogApi