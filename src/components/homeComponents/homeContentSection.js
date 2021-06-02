import React from "react";
import AdSense from "react-adsense";

import "./homeContentSection.css";

import image01 from "../../storages/images/content/needforspeedmostwanted.jpg";
import image02 from "../../storages/images/content/maxpayne3.jpg";
import image03 from "../../storages/images/content/halo3.jpg";
import image04 from "../../storages/images/content/fruitninja.jpg";

function ContentItem(props) {
  return (
    <div className="item">
      <a href={props.link}>
        <img src={props.image} alt="images" class="img_inner"></img>
      </a>
      <div className="itemContent">
        <h3>{props.title}</h3>
        <div className="timestamp">
          <h5>{props.types}</h5>
          <div className="time">{props.time}</div>
        </div>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

function ContentContainer(props) {
  return (
    <div className="container">
      <div className="ads sticky">
        <h1>ads will be here</h1>
        <AdSense.Google
          client="ca-pub-9670179252828195"
          slot="1992653961"
          style={{ display: "block" }}
          format="auto"
          responsive="true"
          layoutKey="-gw-1+2a-9x+5c"
        />
      </div>
      <div className="content">
        <ContentItem
          title="Title01"
          content="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit."
          image={image01}
          types="Mobile"
          time="12/12/2012"
          link="#"
        />
        <ContentItem
          title="Title02"
          content="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit."
          image={image02}
          types="Mobile"
          time="12/12/2012"
          link="#"
        />
        <ContentItem
          title="Title03"
          content="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
    officia deserunt mollit."
          image={image03}
          types="Mobile"
          time="12/12/2012"
          link="#"
        />
        <ContentItem
          title="Title03"
          content="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
  officia deserunt mollit."
          image={image04}
          types="Mobile"
          time="12/12/2012"
          link="#"
        />
        <AdSense.Google
          client="ca-pub-7292810486004926"
          slot="7806394673"
          style={{ width: 700, height: 200, float: "left" }}
          format=""
        />
      </div>
    </div>
  );
}

export default function HomeContentSection() {
  return (
    <div className="homeContent">
      <ContentContainer title="Lastest Updates" />
    </div>
  );
}
