import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clear } from "../../../utils/localStorage";

export const logout = createAsyncThunk("logout", async (_, { dispatch }) => {
  clear();
  dispatch({ type: "logout" });
});

export const logoutSlice = createSlice({
  name: "logout",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, (state, { payload }) => {
      state.data = payload;
    });
  },
});

export default logoutSlice.reducer;