import React, { Component } from "react";
import "./home.css";

import TopSection from "./homeComponents/topSection";

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
      </div>
    );
  }
}
