import React, { useEffect } from "react";
import "./navigation.css";

function checkTab(tab) {
  var navHome = document.getElementById("navHome");
  var navGames = document.getElementById("navGames");
  var navGuide = document.getElementById("navGuide");
  var navReviews = document.getElementById("navReviews");
  var navImages = document.getElementById("navImages");
  var navVideos = document.getElementById("navVideos");
  if (navHome === null) {
    console.log(navHome);
  } else {
    if (tab === "home") {
      navHome.classList.add("active");
      navGames.classList.remove("active");
      navGuide.classList.remove("active");
      navReviews.classList.remove("active");
      navImages.classList.remove("active");
      navVideos.classList.remove("active");
    } else if (tab === "games") {
      navHome.classList.remove("active");
      navGames.classList.add("active");
      navGuide.classList.remove("active");
      navReviews.classList.remove("active");
      navImages.classList.remove("active");
      navVideos.classList.remove("active");
    } else if (tab === "guides") {
      navHome.classList.remove("active");
      navGames.classList.remove("active");
      navGuide.classList.add("active");
      navReviews.classList.remove("active");
      navImages.classList.remove("active");
      navVideos.classList.remove("active");
    } else if (tab === "reviews") {
      navHome.classList.renove("active");
      navGames.classList.remove("active");
      navGuide.classList.remove("active");
      navReviews.classList.add("active");
      navImages.classList.remove("active");
      navVideos.classList.remove("active");
    } else if (tab === "images") {
      navHome.classList.remove("active");
      navGames.classList.remove("active");
      navGuide.classList.remove("active");
      navReviews.classList.remove("active");
      navImages.classList.add("active");
      navVideos.classList.remove("active");
    } else if (tab === "videos") {
      navHome.classList.remove("active");
      navGames.classList.remove("active");
      navGuide.classList.remove("active");
      navReviews.classList.remove("active");
      navImages.classList.remove("active");
      navVideos.classList.add("active");
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
          <a href="/guide" id="navGuide">
            GUIDE
          </a>
        </li>
        <li>
          <a href="/reviews" id="navReviews">
            REVIEWS
          </a>
        </li>
        <li>
          <a href="/images" id="navImages">
            Images
          </a>
        </li>
        <li>
          <a href="/videos" id="navVideos">
            VIDEOS
          </a>
        </li>
      </ul>
    </div>
  );
}
