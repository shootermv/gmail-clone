import React, { useContext } from "react";
import { EmailsContext } from "../../Context/EmailsContext";
import "./EmailItem.css";

const EmailItem = ({ email }) => {
  const { selectedCategory, selectedEmails, emailSelectionToggle } = useContext(
    EmailsContext
  );
  let { id, from, to, subject } = email;
  let selected = selectedEmails.includes(id);

  return (
    <div className={`email--item ${selected ? "selected" : ""}`}>
      <div className="email--checkbox-wrap">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => emailSelectionToggle(id)}
        />
      </div>
      {selectedCategory === "Inbox" && <div className="from">{from}</div>}
      {selectedCategory === "Sent" && <div className="from">to:{to}</div>}
      <div className="subject">{subject}</div>
    </div>
  );
};
export default EmailItem;
