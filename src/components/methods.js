import React, { useEffect, useState } from "react";

import { dataContent, dataContent02 } from "storages/database";

export function RandomFeature() {
  var randomNumber = Math.floor(Math.random() * dataContent02.length);
  var obj = dataContent02[randomNumber];
  return (
    <div className="randomFeature">
      <a href={obj.link}>
        <h3>{obj.title}</h3>
      </a>
    </div>
  );
}

export function RelationNews(props) {
  var count = 0;
  return (
    <div className="relationNews">
      <ul>
        {dataContent.map((obj) => {
          if (obj.category === props.category && count < 3) {
            count += 1;
            return <li>{obj.title}</li>;
          }
        })}
      </ul>
    </div>
  );
}

export function RelationNewsInPage(props) {
  return <div class="RelationNewsInPage"></div>;
}

function ContentItem(props) {
  return (
    <div className="card">
      <a href={props.link}>
        {" "}
        <img src={props.src} alt="images" class="cardImg"></img>
      </a>
      <div className="cardText">
        <a href={props.link}>
          <h4>{props.title.substring(0, 50)}...</h4>
        </a>
        <p>{props.description.substring(0, 70)}...</p>
      </div>
      <a href={props.link} class="cardBtn">
        read more
      </a>
    </div>
  );
}

export const TabContainers = React.memo((props) => {
  var categoryCollection = [];
  props.database.map((obj, i) => {
    if (obj.category === props.category) {
      categoryCollection.push(obj);
    }
  });
  return (
    <>
      {categoryCollection.map((obj, i) => {
        if (i % 3 === 0) {
          return (
            <div className="tabContainer">
              {categoryCollection.map((obj, j) => {
                if (j === i || j === i + 1 || j === i + 2) {
                  return (
                    <ContentItem
                      title={obj.title}
                      description={obj.description}
                      src={obj.src}
                      link={obj.link}
                    />
                  );
                }
              })}
            </div>
          );
        }
      })}
    </>
  );
});
