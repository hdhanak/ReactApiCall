import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie';

// Define a service using a base URL and expected endpoints

const access_token = localStorage.getItem('token')
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  credentials: true,
  endpoints: (builder) => ({
    allRegisted: builder.query({
      query: () => {
        console.log(access_token,'access_token');
        
        return {
          url: 'getRegister',
          method: "GET",
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        }


      },
    }),


  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAllRegistedQuery
} = userApi

