import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import login from "../../../services/auth/login";
import { getItem, setItem } from "../../../utils/localStorage";

const initialState = {
  user: JSON.parse(getItem("user")),
};

export const loginReducer = createAsyncThunk("login", async (data) => {
  try {
    const result = await login(data);
    setItem("token", result.data.token);
    setItem("user", JSON.stringify(result.data.user));
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginReducer.fulfilled, (state, { payload }) => {
      state.user = payload.user;
    });
  },
});

export default userSlice.reducer;
