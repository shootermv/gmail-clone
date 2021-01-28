import React, { createContext, useState, useEffect } from "react";

export const EmailsContext = createContext();

const EmailsContextProvider = ({ children }) => {
  const categories = ["Inbox", "Sent", "Trash", "Spam"];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const emailSelectionToggle = (id) => {
    let isSelected = selectedEmails.includes(id);
    isSelected
      ? setSelectedEmails(selectedEmails.filter((i) => i !== id))
      : setSelectedEmails([...selectedEmails, id]);
  };
  const toggleSelectedEmails = (isAllSelected) => {
    let selectedEmails = isAllSelected ? emails.map(({ id }) => id) : [];
    setSelectedEmails(selectedEmails);
  };

  useEffect(() => {
    let url = `https://ry0j6.sse.codesandbox.io/emails/${selectedCategory}`;
    setLoading(true);
    fetch(url)
      .then((d) => {
        if (d.status !== 200) {
          throw new Error("err");
        }
        return d.json();
      })
      .then((emailsData) => {
        setEmails(emailsData);
        setSelectedEmails([]);
        setLoading(false);
      })
      .catch((er) => {
        setLoading(false);
        setError(er);
      });
  }, [selectedCategory]);

  return (
    <EmailsContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        categories,
        selectedEmails,
        setSelectedEmails,
        emails,
        setEmails,
        error,
        setError,
        loading,
        setLoading,
        emailSelectionToggle,
        toggleSelectedEmails
      }}
    >
      {children}
    </EmailsContext.Provider>
  );
};

export default EmailsContextProvider;
