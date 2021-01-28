import React, { useContext } from "react";
import EmailItem from "./EmailItem/EmailItem";
import { EmailsContext } from "../Context/EmailsContext";

import "./EmailList.css";

const EmailList = () => {
  const { emails } = useContext(EmailsContext);
  //console.log(emails.length && emails[0]);
  return (
    <section className="emails-list">
      {emails?.length === 0 && <div className="no-emails">No Emails Yet</div>}
      {!!emails?.length &&
        emails?.map(({ from, to, subject, id }) => {
          return <EmailItem key={id} email={{ from, to, subject, id }} />;
        })}
    </section>
  );
};

export default EmailList;
