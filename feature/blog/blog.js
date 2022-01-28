import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  blogs: [],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    value: {
      ...initialStateValue,
    },
  },
  reducers: {
    fetchBlogs: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { fetchBlogs } = blogSlice.actions;

export default blogSlice.reducer;
