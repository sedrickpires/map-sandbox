import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOpen: true,
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
