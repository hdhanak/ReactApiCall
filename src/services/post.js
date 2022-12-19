import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url:'posts',  
        method:"GET"
      }),
    }),
    getPostById :builder.query({
      query:(id)=>{
        console.log(id,'id');
       return {
        url:`posts/${id}`,
        method:"GET"
       }
      }
    }),
    getPostByPagination :builder.query({
      query : (num) =>{
        
        return{
          url : `posts?_limit=${num}`,
          method:"GET"
        }
      }
    }),
    deletePost :builder.mutation({
      query : (id) =>{
        console.log(id,'id de');
        return{
          url : `posts/${id}`,
          method:"DELETE"
        }
      }
    }),
    createPost : builder.mutation({
      query : (newPost)=>{
        return{
          url:"posts",
          method:"POST",
          body:newPost,
          headers:{
            'Content-type':"application/json; charset=UTF-8"
          }
        }
      }
    }),
    updatePost : builder.mutation({
      query : (updatePostData)=>{
        const {id,...data}= updatePostData
        return{
          url:`posts/${id}`,
          method:"PUT",
          body:data,
          headers:{
            'Content-type':"application/json; charset=UTF-8"
          }
        }
      }
    })

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPostQuery , useGetPostByIdQuery,useGetPostByPaginationQuery,useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation

} = postApi

