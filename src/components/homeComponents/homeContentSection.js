import React, { Component } from "react";
import Tabletop from "tabletop";

import "./homeContentSection.css";
import { AdsHorizontal, AdsVerticalHomeContent } from "../adsMethods";
import { googleSheetKey } from "../../config/googleSheetMethod";

import { dataContent } from "../../storages/database";

function ContentItem(props) {
  return (
    <div className="item">
      <a href={props.link}>
        <img src={props.src} alt={props.alt} class="img_inner"></img>
      </a>
      <div className="itemContent">
        <a href={props.link}>
          <h3>{props.title}</h3>
        </a>
        <div className="timestamp">
          <h5>{props.category}</h5>
          <div className="time">
            {props.date} {props.time}
          </div>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount() {}

  render() {
    return (
      <>
        <AdsVerticalHomeContent />;
        {dataContent.map((obj, i) => {
          if ((i + 1) % 5 === 0) {
            return (
              <>
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
                <AdsVerticalHomeContent />;
              </>
            );
          } else {
            return (
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
            );
          }
        })}
      </>
    );
  }
}
export default function HomeContentSection() {
  return (
    <div className="homeContent">
      <div className="containerContent">
        <AdsHorizontal />
        <div className="content">
          <MainContent></MainContent>
        </div>
      </div>
    </div>
  );
}
