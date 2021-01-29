import constants from "./constants";

let success = (emails) => ({
  type: constants.FETCH_CATEGORY_EMAILS_SUCCESS,
  emails
});
let failure = (error) => ({
  type: constants.FETCH_CATEGORY_EMAILS_ERROR,
  error
});
export const fetchEmails = (selectedCategory) => async (dispatch) => {
  dispatch({
    type: constants.FETCH_CATEGORY_EMAILS,
    selectedCategory
  });
  try {
    let url = `https://ry0j6.sse.codesandbox.io/emails/${selectedCategory}`;
    let emails = await fetch(url).then((d) => {
      if (d.status !== 200) {
        throw new Error("err");
      }
      return d.json();
    });
    dispatch(success(emails));
  } catch (error) {
    console.log("xxx");
    dispatch(failure(error));
  }
};
export const toggleSelectAllEmails = (allSelected) => {
  //console.log(allSelected);
  return {
    type: constants.SELECT_ALL_CATEGORY_EMAILS,
    allSelected
  };
};
export const toggleSelectedEmails = (id) => ({
  type: constants.TOGGLE_CATEGORY_SELECTED_EMAILS,
  id
});
export const selectCategory = (category) => ({
  type: constants.SELECT_CATEGORY,
  category
});
