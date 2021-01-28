import React from "react";
import "./ActionsBar.css";

import { observer } from "mobx-react-lite";
import store from "../Store/store";

const ActionsBar = observer(({ store }) => {
  return (
    <header className="actions-bar">
      <div className="check-all-wrap">
        <input
          type="checkbox"
          checked={
            store.selectedEmails.length === store.emails.length &&
            store.emails.length
          }
          onChange={(e) => {
            store.toggleAllSelectedEmails(e.target.checked);
          }}
        />
      </div>
    </header>
  );
});
export default () => (
  <>
    <ActionsBar store={store} />
  </>
);
