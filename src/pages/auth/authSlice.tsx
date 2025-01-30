import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./auth";

type AuthState = {
  token: string | null;
};

const slice = createSlice({
  name: "auth",
  initialState: { token: null } as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.accessToken;
      },
    );
  },
});

export const authReducer = slice.reducer;
