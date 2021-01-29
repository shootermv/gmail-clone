import constants from "./constants";
const initialState = {
  error: null,
  loading: false,
  emails: [],
  selectedEmails: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_CATEGORY_EMAILS:
      return {
        ...state,
        loading: true
      };
    case constants.FETCH_CATEGORY_EMAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        emails: action.emails
      };
    case constants.FETCH_CATEGORY_EMAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case constants.SELECT_ALL_CATEGORY_EMAILS:
      const allSelected = action.allSelected;

      return {
        ...state,
        selectedEmails: allSelected ? state.emails.map(({ id }) => id) : []
      };
    case constants.TOGGLE_CATEGORY_SELECTED_EMAILS:
      let id = action.id;
      let isSelected = state.selectedEmails.includes(id);

      let selectedEmails = isSelected
        ? state.selectedEmails.filter((i) => i !== id)
        : [...state.selectedEmails, id];
      return {
        ...state,
        selectedEmails
      };
    default:
      return state;
  }
}
