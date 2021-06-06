import React, { useEffect } from "react";
import "./navigation.css";

function checkTab(tab) {
  var navHome = document.getElementById("navHome");
  var navGames = document.getElementById("navGames");
  var navNews = document.getElementById("navNews");
  var navTech = document.getElementById("navTech");
  var navGuide = document.getElementById("navGuide");
  var navTravel = document.getElementById("navTravel");
  var navGallery = document.getElementById("navGallery");
  if (navHome === null) {
    console.log(navHome);
  } else {
    if (tab === "home") {
      navHome.classList.add("active");
      navGames.classList.remove("active");
      navNews.classList.remove("active");
      navTech.classList.remove("active");
      navGuide.classList.remove("active");
      navTravel.classList.remove("active");
      navGallery.classList.remove("active");
    } else if (tab === "games") {
      navHome.classList.remove("active");
      navGames.classList.add("active");
      navNews.classList.remove("active");
      navTech.classList.remove("active");
      navGuide.classList.remove("active");
      navTravel.classList.remove("active");
      navGallery.classList.remove("active");
    } else if (tab === "news") {
      navHome.classList.remove("active");
      navGames.classList.remove("active");
      navNews.classList.add("active");
      navTech.classList.remove("active");
      navGuide.classList.remove("active");
      navTravel.classList.remove("active");
      navGallery.classList.remove("active");
    } else if (tab === "tech") {
      navHome.classList.remove("active");
      navGames.classList.remove("active");
      navNews.classList.remove("active");
      navTech.classList.add("active");
      navGuide.classList.remove("active");
      navTravel.classList.remove("active");
      navGallery.classList.remove("active");
    } else if (tab === "guide") {
      navHome.classList.remove("active");
      navGames.classList.remove("active");
      navNews.classList.remove("active");
      navTech.classList.remove("active");
      navGuide.classList.add("active");
      navTravel.classList.remove("active");
      navGallery.classList.remove("active");
    } else if (tab === "travel") {
      navHome.classList.remove("active");
      navGames.classList.remove("active");
      navNews.classList.remove("active");
      navTech.classList.remove("active");
      navGuide.classList.remove("active");
      navTravel.classList.add("active");
      navGallery.classList.remove("active");
    } else if (tab === "gallery") {
      navHome.classList.remove("active");
      navGames.classList.remove("active");
      navNews.classList.remove("active");
      navTech.classList.remove("active");
      navGuide.classList.remove("active");
      navTravel.classList.remove("active");
      navGallery.classList.add("active");
    }
  }
}
export default function Navigation(props) {
  useEffect(() => {
    checkTab(props.tab);
  });
  return (
    <div className="navigation">
      <ul>
        <li>
          <a href="/" id="navHome">
            HOME
          </a>
        </li>

        <li>
          <a href="/games" id="navGames">
            GAMES
          </a>
        </li>

        <li>
          <a href="/news" id="navNews">
            NEWS
          </a>
        </li>

        <li>
          <a href="/tech" id="navTech">
            TECH
          </a>
        </li>

        <li>
          <a href="/guide" id="navGuide">
            GUIDE
          </a>
        </li>
        <li>
          <a href="/travel" id="navTravel">
            TRAVEL
          </a>
        </li>
        <li>
          <a href="/gallery" id="navGallery">
            GALLEY
          </a>
        </li>
      </ul>
    </div>
  );
}
