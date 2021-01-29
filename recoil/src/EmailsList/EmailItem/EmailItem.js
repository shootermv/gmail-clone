import React from "react";
import { useRecoilState } from "recoil";
import selectedEmailsState from "../../store/selectedEmails";
import selectedCategoryState from "../../store/selectedCategory";

import "./EmailItem.css";

const EmailItem = ({ email }) => {
  const [selectedCategory] = useRecoilState(selectedCategoryState);
  const [selectedEmails, setSelectedEmails] = useRecoilState(
    selectedEmailsState
  );
  let { id, from, to, subject } = email;
  let selected = selectedEmails.includes(id);

  return (
    <div className={`email--item ${selected ? "selected" : ""}`}>
      <div className="email--checkbox-wrap">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => {
            let isSelected = selectedEmails.includes(id);
            isSelected
              ? setSelectedEmails(selectedEmails.filter((i) => i !== id))
              : setSelectedEmails([...selectedEmails, id]);
          }}
        />
      </div>
      {selectedCategory === "Inbox" && <div className="from">{from}</div>}
      {selectedCategory === "Sent" && <div className="from">to:{to}</div>}
      <div className="subject">{subject}</div>
    </div>
  );
};
export default EmailItem;
