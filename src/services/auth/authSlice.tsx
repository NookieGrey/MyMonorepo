import { createSlice } from "@reduxjs/toolkit";
import { sharebookApi } from "../api/sharebookApi.ts";

type AuthState = {
  token?: string | null;
};

const slice = createSlice({
  name: "auth",
  initialState: {
    token: null,
  } as AuthState,
  reducers: {
    logout(state) {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      sharebookApi.endpoints.auth.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.accessToken;
      },
    );
  },
});

export const authReducer = slice.reducer;
