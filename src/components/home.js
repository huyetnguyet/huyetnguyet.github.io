import React, { Component } from "react";
import "./home.css";

import TopSection from "./homeComponents/topSection";
import Navigation from "./navigation";
import Footer from "./footer";

import Slider from "./homeComponents/slider";
import BannerSection from "./homeComponents/bannerSection";
import FeaturedSection from "./homeComponents/featuredSection";
import HomeContentSection from "./homeComponents/homeContentSection";

import { AdsVertical } from "components/adsMethods";

export default class Home extends Component {
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
            <Navigation tab="home"></Navigation>
          </div>
        </div>
        <div id="bodylayout">
          <div className="container">
            <div className="linespace">
              <AdsVertical />
            </div>
            <Slider></Slider>
          </div>
          <div className="container">
            <BannerSection></BannerSection>
          </div>
          <div className="container">
            <FeaturedSection></FeaturedSection>
          </div>
          <div className="container">
            <HomeContentSection></HomeContentSection>
          </div>
          <div className="container">
            <Footer></Footer>
          </div>
        </div>
      </div>
    );
  }
}
