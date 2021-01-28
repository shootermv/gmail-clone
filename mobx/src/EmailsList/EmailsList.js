import React from "react";
import EmailItem from "./EmailItem/EmailItem";
import "./EmailList.css";

import store from "../Store/store";
import { observer } from "mobx-react-lite";

const EmailList = observer(({ store }) => {
  console.log("emails list rerendering", store?.emails[0]?.from);
  return (
    <section className="emails-list">
      {store.emails.length === 0 && (
        <div className="no-emails">No Emails Yet</div>
      )}
      {!!store.emails.length &&
        store.emails.map(({ from, to, subject, id }) => {
          return <EmailItem key={id} email={{ from, to, subject, id }} />;
        })}
    </section>
  );
});
export default () => (
  <>
    <EmailList store={store} />
  </>
);
