import api from "../../store/api";

/*
TODO: Define the following 4 endpoints:
  1. getPuppies (query)
  2. getPuppy (query)
  3. addPuppy (mutation)
  4. deletePuppy (mutation)

The query endpoints should provide the "Puppy" tag.
The mutation endpoints should invalidate the "Puppy" tag.

(Optional) TODO: Write `transformResponse` and `transformErrorResponse`
functions for each endpoint.
*/

const puppyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Get all puppies
    getPuppies: builder.query({
      query: () => 'players',
      transformResponse: (response) => {
        // Handle potential missing data in response
        return response.data?.players || [];
      },
      providesTags: (result) => 
        result
          ? [...result.map(({ id }) => ({ type: 'Puppy', id })), 'Puppy']
          : ['Puppy']
    }),

    // Get single puppy by ID
    getPuppy: builder.query({
      query: (id) => `players/${id}`,
      transformResponse: (response) => response.data?.player || null,
      providesTags: (result, error, id) => [{ type: 'Puppy', id }]
    }),

    // Add new puppy
    addPuppy: builder.mutation({
      query: (puppy) => ({
        url: 'players',
        method: 'POST',
        body: {
          name: puppy.name,
          breed: puppy.breed,
          imageUrl: puppy.imageUrl || 'https://loremflickr.com/200/300/dog'
        }
      }),
      invalidatesTags: ['Puppy']
    }),

    // Delete puppy
    deletePuppy: builder.mutation({
      query: (id) => ({
        url: `players/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Puppy', id }]
    })
  })
});

// Export hooks for usage in components
export const {
  useGetPuppiesQuery,
  useGetPuppyQuery,
  useAddPuppyMutation,
  useDeletePuppyMutation
} = puppyApi;

export default puppyApi;