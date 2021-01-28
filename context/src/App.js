import React, { useContext } from "react";
import ActionsBar from "./ActionsBar/ActionsBar";
import EmailList from "./EmailsList/EmailsList";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
import SideBar from "./SideBar/Sidebar";

import { EmailsContext } from "./Context/EmailsContext";

import "./styles.css";

export default () => {
  const { loading, error } = useContext(EmailsContext);

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
