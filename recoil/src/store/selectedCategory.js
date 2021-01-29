import { atom } from "recoil";

export default atom({
  key: "selectedCategory", // unique ID (with respect to other atoms/selectors)
  default: "Inbox" // default value (aka initial value)
});
