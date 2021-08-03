import React, { useState, useEffect } from "react";
import "./topSection.css";

import logo from "../../asserts/images/logo.png";

export default function TopSection() {
  const [querySearch, setQuerySearch] = useState("");

  useEffect(() => {
    if (querySearch.length > 0) {
      console.log(querySearch);
    }
  });

  return (
    <div className="topSection">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo"></img>
        </a>
      </div>
      <div className="search">
        <button
          className="searchButton"
          onClick={(event) =>
            (window.location.href = querySearch.replaceAll(" ", "-"))
          }
        >
          Search
        </button>
        <input
          type="text"
          name="search"
          onChange={(e) => setQuerySearch("/search:" + e.target.value)}
        ></input>
      </div>
    </div>
  );
}
