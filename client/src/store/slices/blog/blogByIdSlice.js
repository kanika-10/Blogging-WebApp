import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogById from "../../../services/blog/blogById";

export const blogbyIdReducer = createAsyncThunk("blog/:id", async (data) => {
  try {
    const result = await blogById(data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  singleBlogDetails: [],
};

export const blogDetailsSlice = createSlice({
  name: "blogDetails",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(blogbyIdReducer.fulfilled, (state, { payload }) => {
      state.singleBlogDetails = payload;
    });
  },
});

export default blogDetailsSlice.reducer;
