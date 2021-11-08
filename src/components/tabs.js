/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import TopSection from "common/sharedComponents/topSection";
import Navigation from "common/sharedComponents/navigation";
import Footer from "common/sharedComponents/footer";

import {
  AdsHorizontal,
  AdsVertical,
  AdsVerticalHomeContent,
} from "./adsMethods";

import { data } from "storages/database/data";
import { data_games } from "storages/database/data_games";
import { data_guide } from "storages/database/data_guide";
import { data_images } from "storages/database/data_images";
import { data_life } from "storages/database/data_life";
import { data_news } from "storages/database/data_news";
import { data_stars } from "storages/database/data_stars";
import { data_tech } from "storages/database/data_tech";
import { data_travel } from "storages/database/data_travel";

export function Games() {
  return <Tab title="GAMES" categoryPage="games" data={data_games}></Tab>;
}
export function Images() {
  return <Tab title="IMAGES" categoryPage="images" data={data_images}></Tab>;
}
export function Life() {
  return <Tab title="LIFE" categoryPage="life" data={data_life}></Tab>;
}
export function News() {
  return <Tab title="NEWS" categoryPage="news" data={data_news}></Tab>;
}
export function Stars() {
  return <Tab title="STARS" categoryPage="stars" data={data_stars}></Tab>;
}
export function Tech() {
  return <Tab title="TECH" categoryPage="tech" data={data_tech}></Tab>;
}
export function Travel() {
  return <Tab title="TRAVEL" categoryPage="travel" data={data_travel}></Tab>;
}

function Tab(props) {
  const TITLE = props.title;
  const categoryPage = props.categoryPage;
  const [categoryCollection, setCategoryCollection] = useState([]);
  const [endData, setEndData] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  var count = 0;
  if (categoryCollection.length === 0) {
    var categoryCollection_copy = [...categoryCollection];
    props.data.map((obj, i) => {
      if (count <= 50) {
        categoryCollection_copy.push(obj);
      }
      count += 1;
    });

    setCategoryCollection(categoryCollection_copy);
    if (categoryCollection_copy.length === props.data.length) {
      setEndData(true);
    }
  }
  const loadmore = () => {
    if (categoryCollection.length < props.data.length) {
      setIsLoad(true);
    } else {
      setIsLoad(false);
      setEndData(true);
    }
  };

  useEffect(() => {
    console.log("test", categoryCollection);
    if (isLoad) {
      setIsLoad(false);
      // eslint-disable-next-line
      count = 0;
      var categoryCollection_copy = [...categoryCollection];
      const i = categoryCollection_copy.length + 1;
      const j = i + 50 - 1;

      props.data.map((obj, i) => {
        if (count >= i && count <= j) {
          if (!categoryCollection_copy.includes(obj)) {
            categoryCollection_copy.push(obj);
          }
        }
        count += 1;
      });

      setCategoryCollection(categoryCollection_copy);
    }
  }, [isLoad, endData]);

  return (
    <div>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div id="topSection">
        <div className="containerMain">
          <TopSection></TopSection>
        </div>
      </div>
      <div id="navigation">
        <div className="containerMain">
          <Navigation tab={categoryPage}></Navigation>
        </div>
      </div>
      <div id="bodylayout">
        <div className="containerMain">
          <div className="linespace"></div>
          <AdsVertical />
          <div className="containerLayout">
            <div className="content">
              <div>
                {props.message ? (
                  <h1>{props.message}</h1>
                ) : endData ? (
                  <TabContainers
                    database={categoryCollection}
                    category={categoryPage}
                  />
                ) : (
                  <div>
                    <TabContainers
                      database={categoryCollection}
                      category={categoryPage}
                    />
                    <button onClick={loadmore} className="loadmore">
                      Load More
                    </button>
                  </div>
                )}
              </div>
            </div>
            <AdsHorizontal />
          </div>
        </div>
        <div className="containerMain">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

function ContentItem(props) {
  var title = props.title;
  var description = props.description;
  const max_title_length = 60;
  const max_description_length = 80;

  return (
    <div className="card">
      <a href={props.link}>
        <img src={props.src} alt="images" className="cardImg"></img>
      </a>
      <div className="cardText">
        <a href={props.link}>
          <h4>{title.substring(0, max_title_length)} ...</h4>
        </a>
        <p>{description.substring(0, max_description_length)} ...</p>
      </div>
      <a href={props.link} className="cardBtn">
        read more
      </a>
    </div>
  );
}

const TabContainers = React.memo((props) => {
  var categoryCollection = [];
  props.database.map((obj, i) => {
    categoryCollection.push(obj);
  });
  return (
    <>
      {categoryCollection.map((obj, i) => {
        if (i % 3 === 0 && i % 9 === 0 && i !== 0) {
          return (
            <>
              <div className="tabContainer" key={i}>
                {categoryCollection.map((obj, j) => {
                  if (j === i || j === i + 1 || j === i + 2) {
                    return (
                      <ContentItem
                        key={j}
                        title={obj.title}
                        description={obj.description}
                        src={obj.src}
                        link={obj.link}
                      />
                    );
                  }
                })}
              </div>
              <AdsVerticalHomeContent />
            </>
          );
        } else if (i % 3 === 0) {
          return (
            <div className="tabContainer" key={i}>
              {categoryCollection.map((obj, j) => {
                if (j === i || j === i + 1 || j === i + 2) {
                  return (
                    <ContentItem
                      key={j}
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

export function Guide() {
  return <Tab title="GUIDE" categoryPage="guide" data={data_guide}></Tab>;
}

export function Search() {
  const { querySearch } = useParams();
  const newQuerySearch = querySearch.substring(1).toLowerCase();
  var newData = [];
  data.map((obj) => {
    if (obj.title.toLowerCase().search(newQuerySearch) !== -1) {
      newData.push(obj);
    } else if (obj.link.toLowerCase().search(newQuerySearch) !== -1) {
      newData.push(obj);
    }
  });

  if (newData.length === 0) {
    const message = "No result found";
    newData = [
      {
        title: "",
        description: "",
        src: "",
        alt: "",
        category: "",
        time: "",
        date: "",
        timestamp: "",
        link: "",
        component: "",
      },
    ];
    return (
      <Tab
        title="Search"
        categoryPage="search"
        data={newData}
        message={message}
      ></Tab>
    );
  } else {
    return <Tab title="Search" categoryPage="search" data={newData}></Tab>;
  }
}

export function NotFound() {
  const message = "No result found";
  const newData = [
    {
      title: "",
      description: "",
      src: "",
      alt: "",
      category: "",
      time: "",
      date: "",
      timestamp: "",
      link: "",
      component: "",
    },
  ];

  return (
    <Tab
      title="NotFound"
      categoryPage="NotFound"
      data={newData}
      message={message}
    ></Tab>
  );
}
