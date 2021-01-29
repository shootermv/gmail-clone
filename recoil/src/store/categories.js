import { atom } from "recoil";

export default atom({
  key: "categories", // unique ID (with respect to other atoms/selectors)
  default: ["Inbox", "Sent", "Trash", "Spam"] // default value (aka initial value)
});
