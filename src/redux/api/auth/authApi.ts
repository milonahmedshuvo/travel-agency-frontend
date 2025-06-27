import { baseApi } from "../baseApi";


export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => {
        console.log("Login Data:", loginData); 
        return {
          url: '/auth/login',
          method: 'POST',
          body: loginData, 
        };
      },
    }),


    registerUser: builder.mutation({
      query: (userData) => ({
        url: '/users/create-customer', 
        method: 'POST',
        body: userData,
      }),
    }),


    registerAdmin: builder.mutation({
      query: (userData) => ({
        url: '/users/create-admin', 
        method: 'POST',
        body: userData,
      }),
    }),


    getMe : builder.query({
      query : () => "/auth/get-me"
    }),



  }),
});

export const { useLoginMutation, useRegisterUserMutation, useGetMeQuery, useRegisterAdminMutation } = authApi;
