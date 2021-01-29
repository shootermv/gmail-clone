import constants from "./constants";

const initialState = {
  categories: ["Inbox", "Sent", "Trash", "Spam"],
  selectedCategory: "Inbox"
};

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.SELECT_CATEGORY:
      const selectedCategory = action.category;
      return {
        ...state,
        selectedCategory
      };

    default:
      return state;
  }
}
