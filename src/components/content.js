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
        title="facebook"
      ></iframe>
    </div>
  );
}

export function Content({ children }) {
  return (
    <>
      <div id="topSection">
        <div className="containerMain">
          <TopSection></TopSection>
        </div>
      </div>
      <div id="navigation">
        <div className="containerMain">
          <Navigation tab=""></Navigation>
        </div>
      </div>
      <div id="bodylayout">
        <div className="containerMain">{children}</div>
        <div className="containerMain">
          <HomeContentSection></HomeContentSection>
        </div>
        <div className="containerMain">
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
        <div className="containerMain">
          <TopSection></TopSection>
        </div>
      </div>
      <div id="navigation">
        <div className="containerMain">
          <Navigation tab=""></Navigation>
        </div>
      </div>
      <div id="bodylayout">
        <div className="containerMain">{children}</div>
        <div className="containerMain">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export function PageContent({ children }) {
  return (
    <>
      <div id="topSection">
        <div className="containerMain">
          <TopSection></TopSection>
        </div>
      </div>
      <div id="navigation">
        <div className="containerMain">
          <Navigation tab=""></Navigation>
        </div>
      </div>
      <div id="bodylayout">
        <div className="containerMain">
          <div className="homeContent">
            <div className="containerContent">
              <AdsHorizontal />
              <div className="content">{children} </div>
            </div>
          </div>
        </div>
        <div className="containerMain">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
