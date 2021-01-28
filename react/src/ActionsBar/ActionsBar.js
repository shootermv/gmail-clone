import React, { useState } from "react";
import "./ActionsBar.css";
const ActionsBar = ({ selectedEmails, emails, setSelectedEmails }) => {
  return (
    <header className="actions-bar">
      <div className="check-all-wrap">
        <input
          type="checkbox"
          checked={selectedEmails.length === emails.length && emails.length}
          onChange={(e) => {
            e.target.checked
              ? setSelectedEmails(emails.map(({ id }) => id))
              : setSelectedEmails([]);
          }}
        />
      </div>
    </header>
  );
};
export default ActionsBar;
