import { atom } from "recoil";

export default atom({
  key: "error", // unique ID (with respect to other atoms/selectors)
  default: null // default value (aka initial value)
});
