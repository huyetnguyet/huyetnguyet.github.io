import React from "react";
import "components/homeComponents/featuredSection.css";
import { AdsFeaturdSection } from "components/adsMethods";
import { dataFeatured } from "storages/database";

function imageCheck(props) {
  if (props.download === "n") {
    return <img src={props.src} alt="images" class="img_inner"></img>;
  } else {
    return (
      <img
        src={require(props.src).default}
        alt="images"
        class="img_inner"
      ></img>
    );
  }
}

function ContentItem(props) {
  return (
    <div className="grip_6">
      <a href={props.link}>
        <imageCheck src={props.src} download={props.download} />
      </a>
      <div className="featuredText">
        <a href={props.link}>
          <h4>{props.title.substring(0, 45)}...</h4>
        </a>
        <p>{props.description.substring(0, 70)}...</p>
      </div>
      <a href={props.link} class="featuredBtn">
        read more
      </a>
    </div>
  );
}

function FeaturedContainer() {
  return (
    <>
      {dataFeatured.map((obj, i) => {
        if (i === 2) {
          return (
            <>
              <AdsFeaturdSection />
              <ContentItem
                title={obj.title}
                description={obj.description}
                src={obj.src}
                link={obj.link}
                download={obj.download}
              />
            </>
          );
        } else {
          return (
            <ContentItem
              title={obj.title}
              description={obj.description}
              src={obj.src}
              link={obj.link}
              download={obj.download}
            />
          );
        }
      })}
    </>
  );
}

export default function FeaturedSection() {
  return (
    <div>
      <div className="featuredSection">
        <div className="featuredContainer">
          <div className="grip_24">
            <h2>Lastest Updates</h2>
          </div>
          <div className="featuredContent">
            <FeaturedContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
