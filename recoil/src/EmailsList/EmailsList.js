import React from "react";
import emailsState from "../store/emails";
import { useRecoilState } from "recoil";
import EmailItem from "./EmailItem/EmailItem";
import "./EmailList.css";

const EmailList = () => {
  const [emails] = useRecoilState(emailsState);
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
