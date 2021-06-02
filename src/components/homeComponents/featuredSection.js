import React from "react";
import "./featuredSection.css";

import image01 from "../../storages/images/content/needforspeedmostwanted.jpg";
import image02 from "../../storages/images/content/maxpayne3.jpg";
import image03 from "../../storages/images/content/halo3.jpg";
import image04 from "../../storages/images/content/fruitninja.jpg";

function ContentItem(props) {
  return (
    <div className="grip_6">
      <img src={props.image} alt="images" class="img_inner"></img>
      <div className="text">
        <h4>{props.title}</h4>
        <p>{props.content}</p>
      </div>
      <a href="/" class="btn">
        read more
      </a>
    </div>
  );
}

function FeaturedContainer(props) {
  return (
    <div className="container">
      <div className="grip_24">
        <h2>{props.title}</h2>
      </div>
      <div className="content">
        <ContentItem
          title="Title01"
          content="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit."
          image={image01}
        />
        <ContentItem
          title="Title02"
          content="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit."
          image={image01}
        />
        <ContentItem
          title="Title03"
          content="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
    officia deserunt mollit."
          image={image01}
        />
        <ContentItem
          title="Title03"
          content="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
  officia deserunt mollit."
          image={image01}
        />
      </div>
      <div className="grip_24">
        <a href="/" class="link">
          See all games
        </a>
      </div>
    </div>
  );
}

export default function FeaturedSection() {
  return (
    <div>
      <div className="featuredSection">
        <FeaturedContainer title="Lastest Updates" />
      </div>
    </div>
  );
}
