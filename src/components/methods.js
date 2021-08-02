/* eslint-disable array-callback-return */
import React from "react";
import { AdsVertical } from "components/adsMethods";
import { dataContent, dataContent02 } from "storages/database";

export function RandomFeature() {
  var randomNumber = Math.floor(Math.random() * dataContent02.length);
  if (dataContent02.length > 0) {
    var obj = dataContent02[randomNumber];
    return (
      <div className="randomFeature">
        <a href={obj.link}>
          <h3>{obj.title}</h3>
        </a>
      </div>
    );
  } else {
    return <></>;
  }
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
  return (
    <>
      <div className="relationNewsInPage">
        <ul>
          {dataContent02.map((obj, key) => {
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
      <AdsVertical />
    </>
  );
}

export function SearchMethods() {
  let fruits = ["apple", "banana", "grapes", "mango", "orange"];

  /**
   * Filter array items based on search criteria (query)
   */
  function filterItems(arr, query) {
    return arr.filter(function (el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
  }

  console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
  console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
}
