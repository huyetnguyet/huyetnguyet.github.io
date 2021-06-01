import React, { Component } from "react";
import "./home.css";

import TopSection from "./homeComponents/topSection";
import Navigation from "./navigation";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            width: "100%",
            backgroundColor: "#a21514",
          }}
        >
          <div className="homeContainer">
            <TopSection></TopSection>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            backgroundColor: "#1e1e1e",
          }}
        >
          <div className="homeContainer">
            <Navigation tab="home"></Navigation>
          </div>
        </div>
      </div>
    );
  }
}
