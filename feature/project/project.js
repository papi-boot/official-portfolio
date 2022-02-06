import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  project_id: "",
  project_title: "",
  project_content_link: "",
  project_website_link: "",
  project_description: "",
  project_body: "",
  project_thumbnail: "",
  project_date_created: "",
  project_created_at: "",
  project_updated_at: "",
};

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    value: {
      ...initialStateValue,
    },
  },
  reducers: {
    projectChange: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { projectChange } = projectSlice.actions;
export default projectSlice.reducer;
