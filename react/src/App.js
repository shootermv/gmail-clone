import React, { useState, useEffect } from "react";
import ActionsBar from "./ActionsBar/ActionsBar";
import EmailList from "./EmailsList/EmailsList";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
import SideBar from "./SideBar/Sidebar";
import "./styles.css";

export default function App() {
  const categories = ["Inbox", "Sent", "Trash", "Spam"];
  const [selectedCategory, setSelectedCat] = useState("Inbox");
  const [emails, setEmails] = useState([]);
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onEmailClicked = (id) => {
    let selected = selectedEmails.includes(id);
    selected
      ? setSelectedEmails(selectedEmails.filter((i) => i !== id))
      : setSelectedEmails([...selectedEmails, id]);
  };
  // fetch logic
  useEffect(() => {
    let url = `https://ry0j6.sse.codesandbox.io/emails/${selectedCategory}`;
    setLoading(true);
    fetch(url)
      .then((d) => d.json())
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
    <div className="App">
      {error && <Error />}
      {loading && <Loader />}
      <SideBar
        categories={categories}
        selected={selectedCategory}
        onSelectedCat={setSelectedCat}
      />
      <ActionsBar
        selectedEmails={selectedEmails}
        emails={emails}
        setSelectedEmails={setSelectedEmails}
      />
      <EmailList
        emails={emails}
        selectedCategory={selectedCategory}
        selectedEmails={selectedEmails}
        onEmailClicked={onEmailClicked}
      />
    </div>
  );
}
