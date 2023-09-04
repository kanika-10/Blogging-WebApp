import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sortBlogs from "../../../services/blog/sortBlogs";

export const getSortedBlogsReducer = createAsyncThunk(
  "blog/sorted",
  async (data) => {
    try {
      const result = await sortBlogs(data);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {};

export const sortBlogsSlice = createSlice({
  name: "sortedBlogs",
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getSortedBlogsReducer.fulfilled, (state, { payload }) => {
      state.sortedBlogs = payload;
    });
  },
});

export default sortBlogsSlice.reducer;
