import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/auth/' }),
  credentials: 'include',
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url:'getAllUser',  
        method:"GET",
        
      }),
    }),
    // getPostById :builder.query({
    //   query:(id)=>{
    //     console.log(id,'id');
    //    return {
    //     url:`posts/${id}`,
    //     method:"GET"
    //    }
    //   }
    // }),
    // getPostByPagination :builder.query({
    //   query : (num) =>{
        
    //     return{
    //       url : `posts?_limit=${num}`,
    //       method:"GET"
    //     }
    //   }
    // }),
    // deletePost :builder.mutation({
    //   query : (id) =>{
    //     console.log(id,'id de');
    //     return{
    //       url : `posts/${id}`,
    //       method:"DELETE"
    //     }
    //   }
    // }),
   
    registerUser : builder.mutation({
      query : (newPost)=>{
        return{
          url:"register",
          method:"POST",
          body:newPost,
          headers:{
            'Content-type':"application/json; charset=UTF-8"
          }
        }
      }
    }),
    loginUser: builder.mutation({
    query : (data) => {
      return {
        url: 'login',
        method: 'POST',
        body: data,
        headers:{
          'Content-type':"application/json; charset=UTF-8"
        }
      };
    },
    async onQueryStarted(args, { dispatch, queryFulfilled }) {
      try {
        // await queryFulfilled;
        // await dispatch(userApi.endpoints.getMe.initiate(null));
        console.log("hello this is you got....");
      } catch (error) {}
    },
  }),


    // updatePost : builder.mutation({
    //   query : (updatePostData)=>{
    //     const {id,...data}= updatePostData
    //     return{
    //       url:`posts/${id}`,
    //       method:"PUT",
    //       body:data,
    //       headers:{
    //         'Content-type':"application/json; charset=UTF-8"
    //       }
    //     }
    //   }
    // })

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    //  useGetAllPostQuery , useGetPostByIdQuery,useGetPostByPaginationQuery,useDeletePostMutation,
    // useUpdatePostMutation
    useRegisterUserMutation,
    useGetAllUserQuery,
    useLoginUserMutation

} = authApi

