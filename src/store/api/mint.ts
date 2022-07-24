import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mintApi = createApi({
  reducerPath: 'mintApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  tagTypes: ["Tier"],
  endpoints: (builder) => ({
    getTiers: builder.query({ query: () => "tier/", providesTags: ["Tier"] }),
    addTier: builder.mutation({
      query: (data: { name: string }) => ({
        url: "tier/",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Tier"]
    }),
  })
})

export const {
  useGetTiersQuery,
  useAddTierMutation,
} = mintApi;
