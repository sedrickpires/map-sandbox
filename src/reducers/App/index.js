import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOpen: false,
};
const AppSlice = createSlice({
  name: "markers",
  initialState: initialState,
  reducers: {
    toggleMenu(state, action) {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const { toggleMenu } = AppSlice.actions;

export default AppSlice.reducer;
