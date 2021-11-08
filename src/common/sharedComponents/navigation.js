import { useEffect } from "react";
import "style/navigation.css";
import { Navbar, Nav } from "react-bootstrap";

function checkTab(tab) {
  var navHome = document.getElementById("navHome");
  var navGames = document.getElementById("navGames");
  var navGuide = document.getElementById("navGuide");
  var navImages = document.getElementById("navImages");
  var navLife = document.getElementById("navLife");
  var navNews = document.getElementById("navNews");
  var navStars = document.getElementById("navStars");
  var navTech = document.getElementById("navTech");
  var navTravel = document.getElementById("navTravel");
  if (navHome === null) {
  } else {
    if (tab === "home") {
      navHome.classList.add("active");
      navGames.classList.remove("active");
      navGuide.classList.remove("active");
      navImages.classList.remove("active");
      navLife.classList.remove("active");
      navNews.classList.remove("active");
      navStars.classList.remove("active");
      navTech.classList.remove("active");
      navTravel.classList.remove("active");
    } else if (tab === "games") {
      navHome.classList.remove("active");
      navGames.classList.add("active");
      navGuide.classList.remove("active");
      navImages.classList.remove("active");
      navLife.classList.remove("active");
      navNews.classList.remove("active");
      navStars.classList.remove("active");
      navTech.classList.remove("active");
      navTravel.classList.remove("active");
    } else if (tab === "guide") {
      navHome.classList.remove("active");
      navGames.classList.remove("active");
      navGuide.classList.add("active");
      navImages.classList.remove("active");
      navLife.classList.remove("active");
      navNews.classList.remove("active");
      navStars.classList.remove("active");
      navTech.classList.remove("active");
      navTravel.classList.remove("active");
    } else if (tab === "images") {
      navHome.classList.remove("active");
      navGames.classList.remove("active");
      navGuide.classList.remove("active");
      navImages.classList.add("active");
      navLife.classList.remove("active");
      navNews.classList.remove("active");
      navStars.classList.remove("active");
      navTech.classList.remove("active");
      navTravel.classList.remove("active");
    } else if (tab === "life") {
      navHome.classList.remove("active");
      navGames.classList.remove("active");
      navGuide.classList.remove("active");
      navImages.classList.remove("active");
      navLife.classList.add("active");
      navNews.classList.remove("active");
      navStars.classList.remove("active");
      navTech.classList.remove("active");
      navTravel.classList.remove("active");
    } else if (tab === "news") {
      navHome.classList.remove("active");
      navGames.classList.remove("active");
      navGuide.classList.remove("active");
      navImages.classList.remove("active");
      navLife.classList.remove("active");
      navNews.classList.add("active");
      navStars.classList.remove("active");
      navTech.classList.remove("active");
      navTravel.classList.remove("active");
    } else if (tab === "stars") {
      navHome.classList.remove("active");
      navGames.classList.remove("active");
      navGuide.classList.remove("active");
      navImages.classList.remove("active");
      navLife.classList.remove("active");
      navNews.classList.remove("active");
      navStars.classList.add("active");
      navTech.classList.remove("active");
      navTravel.classList.remove("active");
    } else if (tab === "tech") {
      navHome.classList.remove("active");
      navGames.classList.remove("active");
      navGuide.classList.remove("active");
      navImages.classList.remove("active");
      navLife.classList.remove("active");
      navNews.classList.remove("active");
      navStars.classList.remove("active");
      navTech.classList.add("active");
      navTravel.classList.remove("active");
    } else if (tab === "travel") {
      navHome.classList.remove("active");
      navGames.classList.remove("active");
      navGuide.classList.remove("active");
      navImages.classList.remove("active");
      navLife.classList.remove("active");
      navNews.classList.remove("active");
      navStars.classList.remove("active");
      navTech.classList.remove("active");
      navTravel.classList.add("active");
    }
  }
}
export default function Navigation(props) {
  useEffect(() => {
    checkTab(props.tab);
  });
  return (
    <>
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
            <a href="/images" id="navImages">
              IMAGES
            </a>
          </li>

          <li>
            <a href="/life" id="navLife">
              LIFE
            </a>
          </li>
          <li>
            <a href="/news" id="navNews">
              NEWS
            </a>
          </li>
          <li>
            <a href="/stars" id="navStars">
              STARS
            </a>
          </li>
          <li>
            <a href="/tech" id="navTech">
              TECH
            </a>
          </li>
          <li>
            <a href="/travel" id="navTravel">
              TRAVEL
            </a>
          </li>
        </ul>
      </div>
      <div className="mobile">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/games">GAMES</Nav.Link>
              <Nav.Link href="/guide">GUIDE</Nav.Link>
              <Nav.Link href="/images">IMAGES</Nav.Link>
              <Nav.Link href="/life">LIFE</Nav.Link>
              <Nav.Link href="/news">NEWS</Nav.Link>
              <Nav.Link href="/stars">STARS</Nav.Link>
              <Nav.Link href="/tech">TECH</Nav.Link>
              <Nav.Link href="/travel">TRAVEL</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}
