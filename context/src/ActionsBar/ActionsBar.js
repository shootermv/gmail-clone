import React, { useContext } from "react";
import { EmailsContext } from "../Context/EmailsContext";

import "./ActionsBar.css";

const ActionsBar = () => {
  const { emails, selectedEmails, toggleSelectedEmails } = useContext(
    EmailsContext
  );
  return (
    <header className="actions-bar">
      <div className="check-all-wrap">
        <input
          type="checkbox"
          checked={selectedEmails?.length === emails?.length && emails.length}
          onChange={(e) => toggleSelectedEmails(e.target.checked)}
        />
      </div>
    </header>
  );
};
export default ActionsBar;
