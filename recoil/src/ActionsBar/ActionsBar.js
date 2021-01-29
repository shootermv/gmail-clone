import React from "react";
import { useRecoilState } from "recoil";
import allEmailsSelectedSelector from "../store/allEmailsSelected";
import selectedEmailsState from "../store/selectedEmails";
import emailsState from "../store/emails";

import "./ActionsBar.css";

const ActionsBar = () => {
  const [allEmailsSelected] = useRecoilState(allEmailsSelectedSelector);
  const [, setSelectedEmails] = useRecoilState(selectedEmailsState);
  const [emails] = useRecoilState(emailsState);
  return (
    <header className="actions-bar">
      <div className="check-all-wrap">
        <input
          type="checkbox"
          checked={allEmailsSelected}
          onChange={(e) => {
            let selectAll = e.target.checked;
            setSelectedEmails(selectAll ? emails.map(({ id }) => id) : []);
          }}
        />
      </div>
    </header>
  );
};
export default ActionsBar;
