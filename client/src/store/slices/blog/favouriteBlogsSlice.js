import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getFavourites from "../../../services/blog/getFavourites";

export const getFavouriteBlogsReducer = createAsyncThunk(
  "blog/favourites",
  async () => {
    try {
      const result = await getFavourites();
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {};

export const favouriteBlogsSlice = createSlice({
  name: "favouriteBlogs",
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(
      getFavouriteBlogsReducer.fulfilled,
      (state, { payload }) => {
        state.favouriteBlogs = payload;
      }
    );
  },
});

export default favouriteBlogsSlice.reducer;
