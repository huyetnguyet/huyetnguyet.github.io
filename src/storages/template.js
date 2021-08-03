import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";
/* ---------------------------------------------------------------- */
/*
<ContentItem title="" 
src="" 
alt="" 
category="" 
time="" 
link=""/>

 {
    title: "",
    description: "",
    src: "",
    alt: "",
    category: "",
    time: "",
    date: "",
    timestamp: "",
    link: "",
    component: "",
    filepath: "",
  },





<ContentImage
src=""
alt=""
note=""
/>
*/
/* ---------------------------------------------------------------- */
const category = "";
const categoryLink = "/";
const title = "";
const author = "";
const source = "";
const date = "";
const time = "";
const description = "";
const link = "";
const tagparam = [];
const facebookLinkShare =
  "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fhuyetnguyet.com%2F" +
  link +
  "&layout=button_count&size=small&width=77&height=20&appId";

const updatedTags = tagparam.map((tag) => {
  const link =
    "https://www.google.com/search?q=huyetnguyet+" + tag.replace(" ", "+");
  return (
    <a href={link} className="tag">
      {tag}
    </a>
  );
});

export default function page_() {
  return (
    <>
      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              >
            </div>
            <a href={categoryLink} className="pathName">
              {category}
            </a>
          </div>
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="info">
            <p>
              <div className="author">{author}</div> - Theo {source} | {date}{" "}
              {time}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsVertical />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <div className="contentBodyLeft">
                    <RelationNewsInPage category={category} />
                    <></>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
