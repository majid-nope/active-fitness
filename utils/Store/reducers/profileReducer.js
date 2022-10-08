import { createSlice } from "@reduxjs/toolkit";

const profileReducer = createSlice({
  name: "profile",
  initialState: { theme: "light" },
  reducers: {
    changeTheme(state, action) {
      state.theme = action.payload;
    },
  },
});
export const { changeTheme} = profileReducer.actions;
export default profileReducer.reducer
