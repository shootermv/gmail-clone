import React from "react";
import EmailItem from "./EmailItem/EmailItem";
import "./EmailList.css";
const EmailList = ({
  emails,
  selectedCategory,
  selectedEmails,
  onEmailClicked
}) => {
  //console.log('emails list rerendering')
  return (
    <section className="emails-list">
      {emails.length === 0 && <div className="no-emails">No Emails Yet</div>}
      {!!emails.length &&
        emails.map(({ from, to, subject, id }) => {
          return (
            <EmailItem
              key={id}
              to={to}
              id={id}
              from={from}
              subject={subject}
              selected={selectedEmails.includes(id)}
              selectedCategory={selectedCategory}
              onEmailClicked={onEmailClicked}
            />
          );
        })}
    </section>
  );
};
export default EmailList;
