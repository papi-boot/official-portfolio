import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "feature/blog/blog";
export const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});
