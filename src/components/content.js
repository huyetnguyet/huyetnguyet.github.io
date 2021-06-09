import React from "react";

import TopSection from "components/homeComponents/topSection";
import HomeContentSection from "components/homeComponents/homeContentSection";
import Navigation from "components/navigation";
import Footer from "components/footer";

import { AdsHorizontal } from "components/adsMethods";

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

export function Pages({ children }) {
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
        <div className="container">
          <div className="homeContent">
            <div className="containerContent">
              <AdsHorizontal />
              <div className="content">{children} </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
