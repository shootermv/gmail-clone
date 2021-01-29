import React, { useEffect } from "react";
import ActionsBar from "./ActionsBar/ActionsBar";
import EmailList from "./EmailsList/EmailsList";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
import SideBar from "./SideBar/Sidebar";
import { useRecoilState } from "recoil";
import selectedCategoryState from "./store/selectedCategory";
import emailsState from "./store/emails";
import loadingState from "./store/loading";
import errorState from "./store/error";

import "./styles.css";

export default () => {
  const [selectedCategory] = useRecoilState(selectedCategoryState);
  const [, setEmails] = useRecoilState(emailsState);
  const [loading, setLoading] = useRecoilState(loadingState);
  const [error, setError] = useRecoilState(errorState);

  // fetch logic
  useEffect(() => {
    let url = `https://ry0j6.sse.codesandbox.io/emails/${selectedCategory}`;
    setLoading(true);

    fetch(url)
      .then((d) => d.json())
      .then((emailsData) => {
        setEmails(emailsData);
        // setSelectedEmails([]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [selectedCategory]);

  return (
    <div className="App">
      {loading && <Loader />}
      {error && <Error />}
      <SideBar />
      <ActionsBar />
      <EmailList />
    </div>
  );
};
