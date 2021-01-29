import { createSelector } from "reselect";
export const categoriesSelector = (state) => state.categories.categories;
export const emailsSelector = (state) => state.emails.emails;

export const selectedEmailsSelector = (state) => state.emails.selectedEmails;

export const isEmailSelectedSelector = createSelector(
  [selectedEmailsSelector, (_, id) => id],
  (s, id) => s.includes(id)
);
export const allEmailsSelectedSelector = createSelector(
  emailsSelector,
  selectedEmailsSelector,
  (emailsSelector, selectedEmailsSelector) => {
    if (!emailsSelector.length) return false;
    return emailsSelector.length === selectedEmailsSelector.length;
  }
);
export const selectedCategorySelector = (state) =>
  state.categories.selectedCategory;
export const loadingSelector = (state) => state.emails.loading;
export const errorSelector = (state) => state.emails.error;
