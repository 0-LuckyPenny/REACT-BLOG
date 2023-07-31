import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from '../../models/post.model'

export const postApi = createApi({

  // Define the slice name for the reducer in the store.
  reducerPath: 'postApi',

  // Configure the base query function for making API requests, specifying the base URL.
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api',}),

  // Define tagTypes to identify cache tags for entities. In this case, only 'Post' is specified.
  tagTypes: ['Post'],

   // Define the endpoints for the API, including queries and mutations.
  endpoints: (builder) => ({

    // Query to fetch posts. It takes a 'name' parameter but doesn't use it in this case.
    getPosts: builder.query<Post[], string>({
      query: (name) => '/posts',
      providesTags: ['Post'],
    }),

    // Mutation to add a new post. It takes a 'payload' parameter containing the post data.
    addNewPost: builder.mutation({
      query: (payload) => ({
        url: '/posts',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Post'],
    }),

    // Mutation to update an existing post. It takes a 'payload' parameter containing the updated post data.
    updatePost: builder.mutation({
      query: (payload) => {
        console.log(payload)
        const { id, ...body } = payload
        return {
          url: `/posts/${id}`,
          method: 'PUT',
          body,
        }
      },
      invalidatesTags: ['Post'],
    }),

    // Mutation to delete a post. It takes an 'id' parameter specifying the post to be deleted.
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
        credentials: 'include',
      }),
      invalidatesTags: ['Post'],
    }),

  }),
})

// Destructure and export the query and mutation hooks for the defined endpoints.
export const {
  useGetPostsQuery,
  useAddNewPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi