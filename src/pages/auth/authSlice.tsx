import { createSlice } from "@reduxjs/toolkit";
import { sharebookApi } from "../../api/sharebookApi.ts";

type AuthState = {
  token: string | undefined;
};

const slice = createSlice({
  name: "auth",
  // todo remove localStorage for sure
  initialState: {
    token: import.meta.env.SSR
      ? undefined
      : localStorage.getItem("accessToken"),
  } as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      sharebookApi.endpoints.auth.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.accessToken;
        if (payload.accessToken)
          localStorage.setItem("accessToken", payload.accessToken);
      },
    );
  },
});

export const authReducer = slice.reducer;
