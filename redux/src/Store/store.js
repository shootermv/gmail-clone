import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import emailsReducer from "./emailsReducer";
import categoriesReducer from "./categoriesReducer";

export const store = createStore(
  combineReducers({
    categories: categoriesReducer,
    emails: emailsReducer
  }),
  applyMiddleware(thunk)
);
