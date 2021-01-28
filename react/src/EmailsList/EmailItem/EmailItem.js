import React from "react";
import "./EmailItem.css";
const EmailItem = ({
  from,
  to,
  id,
  selected,
  subject,
  selectedCategory,
  onEmailClicked
}) => {
  return (
    <div className={`email--item ${selected ? "selected" : ""}`}>
      <div className="email--checkbox-wrap">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onEmailClicked(id)}
        />
      </div>
      {selectedCategory === "Inbox" && <div className="from">{from}</div>}
      {selectedCategory === "Sent" && <div className="from">to:{to}</div>}
      <div className="subject">{subject}</div>
    </div>
  );
};
export default EmailItem;
