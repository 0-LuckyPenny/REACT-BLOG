import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Category } from '../../models/category.model'

export const categoryApi = createApi({

  // Define the slice name for the reducer in the store.
  reducerPath: 'categoryApi',

  // Configure the base query function for making API requests, specifying the base URL.
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api',}),

  // Define tagTypes to identify cache tags for entities. In this case, only 'Category' is specified.
  tagTypes: ['Category'],

  // Define the endpoints for the API, including queries and mutations.
  endpoints: (builder) => ({

    // Define a query to fetch categories. It takes a 'name' parameter but doesn't use it in this case.
    getCategories: builder.query<Category[], string>({
      query: (name) => '/categories',
      providesTags: ['Category'],
    }),

    // Define a mutation to add a new category. It takes a 'payload' parameter containing the category data.
    addNewCategory: builder.mutation({
      query: (payload) => ({
        url: '/categories',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Category'],
    }),

    // Define a mutation to update an existing category. It takes a 'payload' parameter containing the updated category data.
    updateCategory: builder.mutation({
      query: (payload) => {
        console.log(payload)
        const { id, ...body } = payload
        return {
          url: `/categories/${id}`,
          method: 'PUT',
          body,
        }
      },
      invalidatesTags: ['Category'],
    }),

    // Define a mutation to delete a category. It takes an 'id' parameter specifying the category to be deleted.
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: 'DELETE',
        credentials: 'include',
      }),
      invalidatesTags: ['Category'],
    }),

  }),
})

// Destructure and export the query and mutation hooks for the defined endpoints.
export const {
  useGetCategoriesQuery,
  useAddNewCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi