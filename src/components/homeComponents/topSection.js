import React, { Component } from "react";
import "./topSection.css";

import logo from "../../asserts/images/logo.png";
export default class TopSection extends Component {
  render() {
    return (
      <div className="topSection">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo"></img>
          </a>
        </div>
        <div className="search">
          <button className="searchButton" onClick="">
            Search
          </button>
          <input type="text" name="search"></input>
        </div>
      </div>
    );
  }
}
