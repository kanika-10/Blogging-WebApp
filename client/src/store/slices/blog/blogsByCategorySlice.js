import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getBlogByCategory from "../../../services/blog/getBlogByCategory";

export const getblogByCategoryReducer = createAsyncThunk(
  "blog/category",
  async (data) => {
    try {
      const result = await getBlogByCategory(data);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {};

export const blogsByCategorySlice = createSlice({
  name: "blogsByCategory",
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(
      getblogByCategoryReducer.fulfilled,
      (state, { payload }) => {
        state.blogsByCategory = payload;
      }
    );
  },
});

export default blogsByCategorySlice.reducer;
