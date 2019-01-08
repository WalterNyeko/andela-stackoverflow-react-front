import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import history from "./history";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <App>
    <Router history={history} />
  </App>,

  document.getElementById("root")
);
