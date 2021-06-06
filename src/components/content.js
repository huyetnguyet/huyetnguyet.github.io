import React from "react";

import TopSection from "./homeComponents/topSection";
import HomeContentSection from "./homeComponents/homeContentSection";
import Navigation from "./navigation";
import Footer from "./footer";

export function ContentImage(props) {
  return (
    <div>
      <img src={props.src} alt={props.alt} className="contentImage"></img>
      <p className="imageNote">{props.note}</p>
    </div>
  );
}

export function FacebookShareButton(props) {
  return (
    <div className="share">
      <iframe
        src={props.link}
        width="77"
        height="20"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export function Content({ children }) {
  return (
    <>
      <div id="topSection">
        <div className="container">
          <TopSection></TopSection>
        </div>
      </div>
      <div id="navigation">
        <div className="container">
          <Navigation tab=""></Navigation>
        </div>
      </div>
      <div id="bodylayout">
        <div className="container">{children}</div>
        <div className="container">
          <HomeContentSection></HomeContentSection>
        </div>
        <div className="container">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export function Tabs({ children }) {
  return (
    <>
      <div id="topSection">
        <div className="container">
          <TopSection></TopSection>
        </div>
      </div>
      <div id="navigation">
        <div className="container">
          <Navigation tab=""></Navigation>
        </div>
      </div>
      <div id="bodylayout">
        <div className="container">{children}</div>
        <div className="container">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
