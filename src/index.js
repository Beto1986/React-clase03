//import { StrictMode } from "react";
//import App from "./App";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  //<StrictMode>
  <App nombre="" unColor="red" />,
  //</StrictMode>,
  rootElement
);
