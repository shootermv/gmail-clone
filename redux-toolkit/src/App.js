import React, { useEffect } from "react";
import ActionsBar from "./ActionsBar/ActionsBar";
import EmailList from "./EmailsList/EmailsList";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
import SideBar from "./SideBar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmails } from "./Store/emailsSlice";
import { selectedCategory as SelCat } from "./Store/categoriesSlice";
import "./styles.css";

export default () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(SelCat);
  const loading = useSelector((state) => state.emails.loading);
  const error = useSelector((state) => state.emails.error);

  useEffect(() => {
    dispatch(fetchEmails(selectedCategory));
  }, [dispatch, selectedCategory]);

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
