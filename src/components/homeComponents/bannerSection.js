import React from "react";
import "./bannerSection.css";

import image01 from "../../storages/images/content/angrybirdsstarwars.jpg";
import image02 from "../../storages/images/content/diablo.jpg";
import image03 from "../../storages/images/content/battlefield3.jpg";

function Banner(props) {
  return (
    <a href={props.link}>
      <img src={props.image} alt="images"></img>
      <div className="contentText">
        <span>{props.title}</span>
      </div>
    </a>
  );
}

export default function BannereSection() {
  return (
    <div className="bannerSection">
      <Banner link="/" title="" image={image01}></Banner>
      <Banner link="/" title="" image={image02}></Banner>
      <Banner link="/" title="" image={image03}></Banner>
    </div>
  );
}
