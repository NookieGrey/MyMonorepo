import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
  activeId: string | null;
}

const initialState: ChatState = {
  activeId: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setActiveId(state, action: PayloadAction<string>) {
      state.activeId = action.payload;
    },
  },
});

export const { setActiveId } = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
