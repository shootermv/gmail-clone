import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import EmailsContextProvider from "./Context/EmailsContext";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from "recoil";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <EmailsContextProvider>
        <App />
      </EmailsContextProvider>
    </RecoilRoot>
  </React.StrictMode>,
  rootElement
);
