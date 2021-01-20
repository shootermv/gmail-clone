import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectedCategory as SelCat } from "../../Store/categoriesSlice";
import { isEmailSelected, emailSelectionToggle } from "../../Store/emailsSlice";
import "./EmailItem.css";

const EmailItem = ({ email }) => {
  let { id, from, to, subject } = email;
  let selected = useSelector((state) => isEmailSelected(state, id));
  const selectedCategory = useSelector(SelCat);
  const dispatch = useDispatch();
  return (
    <div className={`email--item ${selected ? "selected" : ""}`}>
      <div className="email--checkbox-wrap">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => dispatch(emailSelectionToggle(id))}
        />
      </div>
      {selectedCategory === "Inbox" && <div className="from">{from}</div>}
      {selectedCategory === "Sent" && <div className="from">to:{to}</div>}
      <div className="subject">{subject}</div>
    </div>
  );
};
export default EmailItem;
