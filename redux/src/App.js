import React, { useEffect } from "react";
import ActionsBar from "./ActionsBar/ActionsBar";
import EmailList from "./EmailsList/EmailsList";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
import SideBar from "./SideBar/Sidebar";
import { useDispatch, useSelector } from "react-redux";

import "./styles.css";
import {
  errorSelector,
  loadingSelector,
  selectedCategorySelector
} from "./Store/selectors";
import { fetchEmails } from "./Store/actions";

export default () => {
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const selectedCategory = useSelector(selectedCategorySelector);
  const dispatch = useDispatch();
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
