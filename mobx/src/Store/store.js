import { makeAutoObservable, observable } from "mobx";
import { observer } from "mobx-react-lite";
class Store {
  categories = ["Inbox", "Sent", "Trash", "Spam"];
  loading = false;
  emails = [];
  selectedEmails = [];
  selectedCategory = "Inbox";
  error = null;
  constructor() {
    makeAutoObservable(this, {
      loading: observable,
      emails: observable,
      selectedEmails: observable,
      selectedCategory: observable
    });
  }
  isSelectedEmail = (id) => this.selectedEmails.includes(id);
  setSelectedCategory = (category) => {
    this.selectedCategory = category;
  };
  toggleAllSelectedEmails(isAllSelected) {
    this.selectedEmails = isAllSelected ? this.emails.map(({ id }) => id) : [];
  }
  emailSelectionToggle(id) {
    let isSelected = this.selectedEmails.includes(id);
    isSelected
      ? this.setSelectedEmails(this.selectedEmails.filter((i) => i !== id))
      : this.setSelectedEmails([...this.selectedEmails, id]);
  }
  setSelectedEmails(emailIds) {
    this.selectedEmails = emailIds;
  }
  setEmails(emails) {
    this.emails = emails;
  }
  setLoading(val) {
    this.loading = val;
  }
}

const gmailStore = new Store();

export default gmailStore;
