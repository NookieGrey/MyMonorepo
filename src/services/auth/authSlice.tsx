import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sharebookApi } from "../api/sharebookApi.ts";

interface AuthState {
  accessToken: string | null;
  isRefreshing: boolean;
  refreshPromise: Promise<string> | null;
}

const initialState: AuthState = {
  accessToken: null,
  isRefreshing: false,
  refreshPromise: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    startRefresh(state, action: PayloadAction<Promise<string>>) {
      state.isRefreshing = true;
      state.refreshPromise = action.payload;
    },
    finishRefresh(state) {
      state.isRefreshing = false;
      state.refreshPromise = null;
    },
    logout(state) {
      state.accessToken = null;
      state.isRefreshing = false;
      state.refreshPromise = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      sharebookApi.endpoints.auth.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = payload.accessToken ?? null;
      },
    );
  },
});

export const { setAccessToken, startRefresh, finishRefresh, logout } =
  authSlice.actions;

export default authSlice.reducer;
