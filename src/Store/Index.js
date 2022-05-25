import { createSlice, configureStore } from "@reduxjs/toolkit";

//Redux state for login Button

const authSlices = createSlice({
  name: "login",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.clear();
      state.isLoggedIn = false;
    },
  },
});
export const authActions = authSlices.actions;

export const store = configureStore({
  reducer: authSlices.reducer,
});
