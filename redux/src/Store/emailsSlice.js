import {
  createSlice,
  createAsyncThunk,
  createSelector
} from "@reduxjs/toolkit";

export const fetchEmails = createAsyncThunk(
  "emails/fetchEmails",
  async (selectedCategory) => {
    let url = `https://ry0j6.sse.codesandbox.io/emails/${selectedCategory}`;
    return fetch(url)
      .then((d) => {
        if (d.status !== 200) {
          throw new Error("err");
        }
        return d.json();
      })
      .then((emailsData) => {
        return emailsData;
      });
  }
);

const initialState = {
  error: null,
  loading: false,
  emails: [],
  selectedEmails: []
};

const emailsSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    setSelectedEmails(state, action) {
      state.selectedEmails = action.payload;
    },
    toggleSelectedEmails(state, action) {
      let allSelected = action.payload;
      state.selectedEmails = allSelected
        ? state.emails.map(({ id }) => id)
        : [];
    },
    emailSelectionToggle(state, action) {
      let id = action.payload;
      let isSelected = state.selectedEmails.includes(id);

      state.selectedEmails = isSelected
        ? state.selectedEmails.filter((i) => i !== id)
        : [...state.selectedEmails, id];
    }
  },
  extraReducers: {
    [fetchEmails.fulfilled]: (state, action) => {
      state.loading = false;
      state.emails = action.payload;
    },
    [fetchEmails.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchEmails.rejected]: (state, action) => {
      state.loading = false;
      state.error = "some error happened";
    }
  }
});
export const {
  emailsLoaded,
  setLoading,
  setError,
  toggleSelectedEmails,
  setSelectedEmails,
  emailSelectionToggle
} = emailsSlice.actions;
export const fetchE = fetchEmails;
export const emails = (state) => state.emails.emails;
export const selectedEmails = (state) => state.emails.selectedEmails;
export const isEmailSelected = createSelector(
  selectedEmails,
  (_, id) => id,
  (selectedEmails, id) => {
    return selectedEmails.includes(id);
  }
);
export const allEmailsSelected = createSelector(
  [emails, selectedEmails],
  (emails, selectedEmails) => {
    if (!emails.length) return false;
    return emails.length === selectedEmails.length;
  }
);
export default emailsSlice.reducer;
