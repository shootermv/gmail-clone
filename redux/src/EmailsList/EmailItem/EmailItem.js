import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  selectedCategorySelector as SelCat,
  isEmailSelectedSelector
} from "../../Store/selectors";
import { toggleSelectedEmails } from "../../Store/actions";
import "./EmailItem.css";

const EmailItem = ({ email }) => {
  let { id, from, to, subject } = email;
  let selected = useSelector((state) => isEmailSelectedSelector(state, id));
  const selectedCategory = useSelector(SelCat);
  const dispatch = useDispatch();
  return (
    <div className={`email--item ${selected ? "selected" : ""}`}>
      <div className="email--checkbox-wrap">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => dispatch(toggleSelectedEmails(id))}
        />
      </div>
      {selectedCategory === "Inbox" && <div className="from">{from}</div>}
      {selectedCategory === "Sent" && <div className="from">to:{to}</div>}
      <div className="subject">{subject}</div>
    </div>
  );
};
export default EmailItem;
