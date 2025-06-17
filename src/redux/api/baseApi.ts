import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../utils/BaseQueryWithResult";
import { tagTypesList } from "./tag-types";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
<<<<<<< HEAD
  tagTypes: tagTypesList,
  
  endpoints: () => ({}),
});
=======
   tagTypes: ['blog', 'tourPackages', 'vehicles', 'payment', '/feedbacks'],
  endpoints: ( ) => ({ }),
})
>>>>>>> 7582ff5a768ac4465674cfdc0c154ea4dfce6e1c

export const {} = baseApi;
