import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import gmailStore from "./Store/store";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App store={gmailStore} />
  </React.StrictMode>,
  rootElement
);
