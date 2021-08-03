import React from "react";

import "./homeContentSection.scss";
import { AdsHorizontal, AdsVerticalHomeContent } from "components/adsMethods";
import { Pagenavi01 } from "components/pages";

import { dataContent } from "storages/database";

function ContentItem(props) {
  return (
    <div className="item">
      <a href={props.link}>
        <img src={props.src} alt={props.alt} className="img_inner"></img>
      </a>
      <div className="itemContent">
        <a href={props.link}>
          <h3 className="desktop">{props.title.substring(0, 70)}...</h3>
          <h3 className="mobile">{props.title.substring(0, 40)}...</h3>
        </a>
        <div className="timestamp">
          <h5>{props.category}</h5>
          <div className="time">
            {props.date} {props.time}
          </div>
        </div>
        <p className="desktop">{props.description.substring(0, 100)}...</p>
        <p className="mobile">{props.description.substring(0, 50)}...</p>
      </div>
    </div>
  );
}

export function MainContent(props) {
  return (
    <>
      <AdsVerticalHomeContent />
      {props.data.map((obj, i) => {
        if ((i + 1) % 5 === 0) {
          return (
            <div key={i}>
              <ContentItem
                title={obj.title}
                description={obj.description}
                src={obj.src}
                alt={obj.alt}
                category={obj.category}
                date={obj.date}
                time={obj.time}
                link={obj.link}
              />
              <AdsVerticalHomeContent />
            </div>
          );
        } else {
          return (
            <ContentItem
              key={i}
              title={obj.title}
              description={obj.description}
              src={obj.src}
              alt={obj.alt}
              category={obj.category}
              date={obj.date}
              time={obj.time}
              link={obj.link}
            />
          );
        }
      })}
    </>
  );
}

export default function HomeContentSection(props) {
  return (
    <div className="homeContent">
      <div className="containerContent">
        <div className="content">
          <MainContent data={dataContent}></MainContent>
          <Pagenavi01 />
        </div>
        <AdsHorizontal />
      </div>
    </div>
  );
}
