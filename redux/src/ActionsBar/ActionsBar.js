import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { allEmailsSelectedSelector } from "../Store/selectors";
import { toggleSelectAllEmails } from "../Store/actions";
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
          onChange={(e) => {
            console.log(e.target.checked);
            dispatch(toggleSelectAllEmails(e.target.checked));
          }}
        />
      </div>
    </header>
  );
};
export default ActionsBar;
