import React from "react";
import EmailItem from "./EmailItem/EmailItem";
import { useSelector } from "react-redux";
import { emailsSelector } from "../Store/selectors";
import "./EmailList.css";

const EmailList = () => {
  const emails = useSelector(emailsSelector);
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
