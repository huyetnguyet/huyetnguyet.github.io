import "style/homeContentSection.scss";
import { AdsHorizontal, AdsVerticalHomeContent } from "components/adsMethods";
import { useSelector } from "react-redux";
import { selectDatabase } from "features/database/databaseSlice";

function ContentItem(props) {
  return (
    <div className="item">
      <a href={props.link}>
        <img src={props.src} alt={props.alt} className="img_inner"></img>
      </a>
      <div className="itemContent">
        <a href={props.link} id="itemContent">
          <h3 className="desktop">{props.title.substring(0, 100)}...</h3>
          <h3 className="mobile">{props.title.substring(0, 50)}...</h3>
        </a>
        <div className="timestamp">
          <h5>{props.category}</h5>
          <div className="time">
            {props.date} {props.time}
          </div>
        </div>
        <p className="desktop">{props.description.substring(0, 100)}...</p>
        <p className="mobile">{props.description.substring(0, 50)}...</p>
      </div>
    </div>
  );
}

export function MainContent(props) {
  return (
    <>
      <AdsVerticalHomeContent />
      {props.data.slice(3).map((obj, i) => {
        if ((i + 1) % 5 === 0) {
          return (
            <div key={i}>
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
            </div>
          );
        } else {
          return (
            <ContentItem
              key={i}
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

export default function HomeContentSection() {
  const database = useSelector(selectDatabase);
  return (
    <div className="homeContent">
      <div className="containerContent">
        <div className="content">
          <MainContent data={database}></MainContent>
        </div>
        <AdsHorizontal />
      </div>
    </div>
  );
}
