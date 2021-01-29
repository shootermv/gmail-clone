import { selector } from "recoil";
import selectedEmailsState from "./selectedEmails";
import emailsState from "./emails";

export default selector({
  key: "allEmailsSelectedState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const selectedEmails = get(selectedEmailsState);
    const emails = get(emailsState);
    if (!emails.length) return false;
    return emails.length === selectedEmails.length;
  }
});
