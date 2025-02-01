import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store";

export interface AuthResponse {
  accessToken: string;
}

export interface SignInRequest {
  login: string;
  password: string;
}

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    mode: "cors",
    baseUrl: "https://194.67.125.199:8443/",
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, SignInRequest>({
      query: (credentials) => ({
        url: "auth",
        method: "POST",
        body: credentials,
      }),
    }),
    registration: builder.mutation<AuthResponse, SignInRequest>({
      query: (credentials) => ({
        url: "registration",
        method: "POST",
        body: credentials,
      }),
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => "protected",
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation } = authApi;
