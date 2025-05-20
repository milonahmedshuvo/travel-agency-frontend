import { createApi,  } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from '../utils/BaseQueryWithResult';

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: [''],
  endpoints: ( ) => ({ }),
})



export const { } = baseApi;