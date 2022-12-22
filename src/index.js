import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { IntlProvider } from "react-intl";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <IntlProvider locale="en" defaultFormats="en">
    <App />
  </IntlProvider>
);
