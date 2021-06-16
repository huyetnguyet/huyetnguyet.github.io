/* eslint-disable array-callback-return */
import React from "react";
import Tabletop from "tabletop";
import { googleSheetKey } from "../config/googleSheetMethod";

import TopSection from "./homeComponents/topSection";
import Navigation from "./navigation";
import Footer from "./footer";

import { TabContainers } from "./methods";

import { AdsHorizontal, AdsVertical } from "./adsMethods";

import { dataContent } from "../storages/database";

var categoryCollection = [];
var newCategoryCollection = [];
const categoryPage = "tech";

dataContent.map((obj, i) => {
  if (obj.category === categoryPage) {
    categoryCollection.push(obj);
  }
});

class NewComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: googleSheetKey,
      callback: (googleData) => {
        this.setState({
          data: googleData,
        });
      },
      simpleSheet: true,
    });
    var check = false;
    for (var i; i < this.state.data.length; i++) {
      for (var j; j < categoryCollection.length; j++) {
        if (categoryCollection[j] === this.state.data[j]) {
          check = true;
          break;
        }
      }
      if (check === false) {
        newCategoryCollection.push(this.state.data[i]);
      } else {
        check = true;
      }
    }
  }
  render() {
    return (
      <div {...this.props}>
        <TabContainers
          database={newCategoryCollection}
          category={this.props.category}
        />
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return <button {...this.props}>click</button>;
  }
}

export default class Games extends React.Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true,
      loadmore: false,
    });
  }

  componentDidMount() {
    if (categoryCollection.length > 12) {
      this.setState({ loadmore: true });
    }
  }

  render() {
    return (
      <div>
        <div id="topSection">
          <div className="container">
            <TopSection></TopSection>
          </div>
        </div>
        <div id="navigation">
          <div className="container">
            <Navigation tab={categoryPage}></Navigation>
          </div>
        </div>
        <div id="bodylayout">
          <div className="container">
            <div className="linespace"></div> <AdsVertical />
            <div className="containerLayout">
              <div className="content">
                <TabContainers
                  database={categoryCollection}
                  category={categoryPage}
                />

                {this.state.clicked ? (
                  <NewComponent
                    database={categoryCollection}
                    category="games"
                  />
                ) : null}
                {this.state.loadmore ? (
                  <Button onClick={this.handleClick} />
                ) : null}
              </div>

              <AdsHorizontal />
            </div>
          </div>
          <div className="container">
            <Footer></Footer>
          </div>
        </div>
      </div>
    );
  }
}
