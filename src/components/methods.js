/* eslint-disable array-callback-return */
import React from "react";
import { AdsVertical } from "components/adsMethods";
import { dataContent, dataContent02 } from "storages/database";

export function RandomFeature() {
  var randomNumber = null;
  var obj = null;
  if (dataContent02.length > 0) {
    randomNumber = Math.floor(Math.random() * dataContent02.length);
    obj = dataContent02[randomNumber];
  } else {
    randomNumber = Math.floor(Math.random() * dataContent.length);
    obj = dataContent[randomNumber];
  }

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
        {dataContent.map((obj, key) => {
          if (obj.category === props.category && count < 3) {
            count += 1;
            return <li key={key}>{obj.title}</li>;
          }
        })}
      </ul>
    </div>
  );
}

export function RelationNewsInPage(props) {
  var count = 0;
  var temp_data = null;
  if (dataContent02.length > 0) {
    temp_data = [...dataContent02];
  } else {
    temp_data = [...dataContent];
  }

  return (
    <>
      <AdsVertical />
      <div className="relationNewsInPage">
        <ul>
          {temp_data.map((obj, key) => {
            if (obj.category === props.category && count < 3) {
              count += 1;
              return (
                <a href={obj.link}>
                  <li key={key}>{obj.title}</li>
                </a>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
}
