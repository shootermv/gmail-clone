import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import EmailsContextProvider from "./Context/EmailsContext";

//console.log("JJJ", store.getState());
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <EmailsContextProvider>
      <App />
    </EmailsContextProvider>
  </React.StrictMode>,
  rootElement
);
