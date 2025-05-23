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



  }),
});

export const { useLoginMutation, useRegisterUserMutation } = authApi;
