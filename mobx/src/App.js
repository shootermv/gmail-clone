import React, { useState, useEffect } from "react";
import ActionsBar from "./ActionsBar/ActionsBar";
import EmailList from "./EmailsList/EmailsList";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
import SideBar from "./SideBar/Sidebar";
import "./styles.css";
import { observer } from "mobx-react-lite";

export default observer(({ store }) => {
  // fetch logic
  useEffect(() => {
    let url = `https://ry0j6.sse.codesandbox.io/emails/${store.selectedCategory}`;
    store.setLoading(true);
    fetch(url)
      .then((d) => {
        if (d.status !== 200) {
          throw new Error("err");
        }
        return d.json();
      })
      .then((emailsData) => {
        store.setEmails(emailsData);
        store.setSelectedEmails([]);
        store.setLoading(false);
      })
      .catch((er) => {
        store.setLoading(false);
        store.error = er;
      });
  }, [store, store.selectedCategory]);

  return (
    <div className="App">
      {store.loading && <Loader />}
      {store.error && <Error />}
      <SideBar />
      <ActionsBar />
      <EmailList />
    </div>
  );
});
