import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sharebookApi } from "../api/sharebookApi.ts";

interface AuthState {
  accessToken: string | null;
  refreshCookie: string | null;
  returnCookie: string | null;
  isRefreshing: boolean;
  refreshPromise: Promise<string> | null;
}

const initialState: AuthState = {
  accessToken: null,
  refreshCookie: null,
  returnCookie: null,
  isRefreshing: false,
  refreshPromise: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string | null>) {
      state.accessToken = action.payload;
    },
    setRefreshCookie(state, action: PayloadAction<string | null>) {
      state.refreshCookie = action.payload;
    },
    setReturnCookie(state, action: PayloadAction<string | null>) {
      state.returnCookie = action.payload;
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
      state.refreshCookie = null;
      state.returnCookie = null;
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

export const {
  setAccessToken,
  setRefreshCookie,
  setReturnCookie,
  startRefresh,
  finishRefresh,
  logout,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
