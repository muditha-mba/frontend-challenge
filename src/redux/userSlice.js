import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    error: false,
    errorMessage: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.error = false;
      state.errorMessage = null;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.error = true;
      state.errorMessage = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;

export default userSlice.reducer;
