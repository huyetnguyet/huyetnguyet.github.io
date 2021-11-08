import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";
import * as serviceWorker from "./serviceWorker";

import "style/index.css";
import App from "App";

import store from "app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <HttpsRedirect>
      <Provider store={store}>
        <App />
      </Provider>
    </HttpsRedirect>
  </BrowserRouter>,

  document.getElementById("root")
);

serviceWorker.unregister();
