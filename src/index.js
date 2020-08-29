import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth0-provider-with-history";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";

import "./index.css";

const store = configureStore();
ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);
