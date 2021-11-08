import "style/featuredSection.scss";
import { AdsFeaturdSection } from "components/adsMethods";
import { useSelector } from "react-redux";
import { selectDatabase } from "features/database/databaseSlice";

function ContentItem(props) {
  return (
    <div className="grip_6">
      <a href={props.link}>
        <img src={props.src} alt="images" className="img_inner" />
      </a>
      <div className="featuredText">
        <a href={props.link} id="featuredText">
          <h4>{props.title.substring(0, 45)}...</h4>
        </a>
        <p>{props.description.substring(0, 60)}...</p>
      </div>
      <a href={props.link} className="featuredBtn">
        read more
      </a>
    </div>
  );
}

function FeaturedContainer() {
  const database = useSelector(selectDatabase);
  return (
    <>
      {database.slice(0, 3).map((obj, i) => {
        if (i === 2) {
          return (
            <>
              <div className="grip_6">
                <AdsFeaturdSection />
              </div>
              <ContentItem
                key={i}
                title={obj.title}
                description={obj.description}
                src={obj.src}
                link={obj.link}
              />
            </>
          );
        } else {
          return (
            <ContentItem
              key={i}
              title={obj.title}
              description={obj.description}
              src={obj.src}
              link={obj.link}
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
