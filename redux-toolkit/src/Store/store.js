import { configureStore } from "@reduxjs/toolkit";
import emailsSlice from "./emailsSlice";
import categoriesSlice from "./categoriesSlice";

// elsewhere
/*
export default function rootReducer(state = initialState, action) {
  const categoryState = postsReducer(state.post, action);
  const {hasPostReallyBeenAdded} = postState;
  const emailsState  = commentsReducer(state.comments, action, hasPostReallyBeenAdded);
  return { category : categoryState, emails : emailsState };
}

*/

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    emails: emailsSlice
  }
});
