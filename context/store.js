import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "feature/blog/blog";
import projectReducer from "feature/project/project";
export const store = configureStore({
  reducer: {
    blog: blogReducer,
    project: projectReducer,
  },
});
