import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: "Inbox",
  categories: ["Inbox", "Sent", "Trash", "Spam"]
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    selectCategory(state, action) {
      state.selectedCategory = action.payload;
    }
  }
});
export const { selectCategory } = categoriesSlice.actions;
export const selectedCategory = (state) => state.categories.selectedCategory;

export default categoriesSlice.reducer;
