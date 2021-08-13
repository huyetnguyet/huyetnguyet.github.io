import React from "react";

import "./App.scss";

import { BrowserRouter as Router } from "react-router-dom";
import RoutePages from "./components/routePages";

import ReactGA from "react-ga";

const TRACKING_ID = "G-YRWV5J2V9D"; // TRACKING_ID
ReactGA.initialize(TRACKING_ID);

class App extends React.Component {
  // fake authentication Promise
  authenticate() {
    return new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds
  }

  componentDidMount() {
    window.addEventListener("load", (event) => {
      console.log("page is fully loaded");
      this.authenticate().then(() => {
        const ele = document.getElementById("loader");
        if (ele) {
          // fade out
          ele.classList.add("available");
          setTimeout(() => {
            // remove from DOM
            ele.outerHTML = "";
          }, 2000);
        }
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener("load", (event) => {
      console.log("page is remove loaded");
    });
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <RoutePages />
        </div>
      </Router>
    );
  }
}

export default App;
