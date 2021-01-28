import React from "react";
import "./EmailItem.css";

import { observer } from "mobx-react-lite";
import store from "../../Store/store";

const EmailItem = observer(({ email, store }) => {
  let { from, to, id, subject } = email;
  let selected = store.isSelectedEmail(id);
  return (
    <div className={`email--item ${selected ? "selected" : ""}`}>
      <div className="email--checkbox-wrap">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => store.emailSelectionToggle(id)}
        />
      </div>
      {store?.selectedCategory === "Inbox" && (
        <div className="from">{from}</div>
      )}
      {store?.selectedCategory === "Sent" && (
        <div className="from">to:{to}</div>
      )}
      <div className="subject">{subject}</div>
    </div>
  );
});
export default ({ email }) => (
  <>
    <EmailItem email={email} store={store} />
  </>
);
