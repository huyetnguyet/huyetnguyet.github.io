import React, { Component } from "react";

export function RandomFeature() {
  return <div></div>;
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
