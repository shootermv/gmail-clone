import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  allEmailsSelected as allEmailsSelectedSelector,
  toggleSelectedEmails
} from "../Store/emailsSlice";

import "./ActionsBar.css";

const ActionsBar = () => {
  const allEmailsSelected = useSelector(allEmailsSelectedSelector);
  const dispatch = useDispatch();
  return (
    <header className="actions-bar">
      <div className="check-all-wrap">
        <input
          type="checkbox"
          checked={allEmailsSelected}
          onChange={(e) => dispatch(toggleSelectedEmails(e.target.checked))}
        />
      </div>
    </header>
  );
};
export default ActionsBar;
