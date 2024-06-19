import { globalConfig } from "@config/globalConfig";
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@services/api/axiosBaseQuery";
import { Product, User } from "@models/business";

const api = createApi({
  baseQuery: axiosBaseQuery({baseUrl: globalConfig.apiUrl}),
  tagTypes: ["API_TAG"],
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => ({url: `/products`}),
      transformResponse: (data: any) => data.data,
      providesTags: (result = [], error, arg) => ["API_TAG", ...result.map((item: any) => ({
        type: "API_TAG",
        id: item.id
      }))]
    }),
    getProduct: builder.query({
      query: (id: string) => ({url: `/products/${id}`}),
      providesTags: (result, error, arg) => [{type: "API_TAG", id: arg}]
    }),
    addProduct: builder.mutation({
      query: (product: Product) => ({url: `/products`, data: product, method: "POST"}),
      invalidatesTags: ["API_TAG"]
    }),
    editProduct: builder.mutation({
      query: (product: Product) => ({url: `/products/${product.id}`, data: product, method: "PUT"}),
      invalidatesTags: (result, error, arg) => [{type: "API_TAG", id: arg.id}]
    }),
    login: builder.mutation({
      query: (data: User) => ({url: `/auth/login`, method: "POST", data}),
    }),
    register: builder.mutation({
      query: (data: User) => ({url: `/auth/register`, method: "POST", data}),
    }),
    getProfile: builder.query({
      query: () => ({url: `/auth/profile`, method: "GET"}),
    }),
  })
})

export const apiEndpoints = api.endpoints;
export const apiMiddleware = api.middleware;
export const apiReducer = {[api.reducerPath]: api.reducer}
export const {
  useGetProductsQuery,
  useLazyGetProductsQuery,
  useGetProductQuery,
  useLazyGetProductQuery,
  useAddProductMutation,
  useEditProductMutation,
  useLoginMutation,
  useRegisterMutation,
  useLazyGetProfileQuery
} = api;
