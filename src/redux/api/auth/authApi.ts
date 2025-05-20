import { baseApi } from "../baseApi";


export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => {
        console.log("Login Data:", loginData); // 👈 Log the login data here
        return {
          url: '/auth/login',
          method: 'POST',
          body: loginData, // ✅ Use `body` instead of `data`
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
