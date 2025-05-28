import { baseApi } from "../baseApi";
 
export const blogApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
    
    createBlog: builder.mutation({
        query: (blogData) => ({
            url: "/blogs",
            method: "POST",
            body: blogData
        })
    }),

    getAllBlogs : builder.query({
        query: () => "/blogs"
    }),

    getSingleBlog : builder.query({
        query : (id) => `/blogs/${id}`
    }),


    })
})



export const { useCreateBlogMutation, useGetAllBlogsQuery, useGetSingleBlogQuery } = blogApi