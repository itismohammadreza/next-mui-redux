import { globalConfig } from "@config/globalConfig";
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@services/api/axiosBaseQuery";

const api = createApi({
  baseQuery: axiosBaseQuery({baseUrl: globalConfig.apiUrl}),
  tagTypes: ["API_TAG"],
  endpoints: builder => ({
    getMovies: builder.query({
      query: () => ({url: `/movies`}),
      transformResponse: (data: any) => data.data,
      providesTags: (result = [], error, arg) => ["API_TAG", ...result.map(item => ({type: "API_TAG", id: item.id}))]
    }),
    getMovie: builder.query({
      query: (id: string) => ({url: `/movies/${id}`}),
      transformResponse: (data: any) => data.data,
      providesTags: (result, error, arg) => [{type: "API_TAG", id: arg}]
    }),
    addMovie: builder.mutation({
      query: (movie) => ({url: `/movies`, data: movie, method: "POST"}),
      transformResponse: (data: any) => data.data,
      invalidatesTags: ["API_TAG"]
    }),
    editMovie: builder.mutation({
      query: (movie) => ({url: `/movies/${movie.id}`, data: movie, method: "PUT"}),
      transformResponse: (data: any) => data.data,
      invalidatesTags: (result, error, arg) => [{type: "API_TAG", id: arg.id}]
    }),
    login: builder.mutation({
      query: (data: any) => ({url: `/login`, method: "POST", data}),
      transformResponse: (data: any) => data.data,
    }),
    register: builder.mutation({
      query: (data: any) => ({url: `/register`, method: "POST", data}),
      transformResponse: (data: any) => data.data,
    }),
  })
})

export const apiMiddleware = api.middleware;
export const apiReducer = {[api.reducerPath]: api.reducer}
export const {
  useGetMoviesQuery,
  useLazyGetMoviesQuery,
  useGetMovieQuery,
  useLazyGetMovieQuery,
  useAddMovieMutation,
  useEditMovieMutation,
  useLoginMutation,
  useRegisterMutation,
} = api;
