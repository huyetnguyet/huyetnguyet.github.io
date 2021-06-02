import React, { Component } from "react";
import "./home.css";

import TopSection from "./homeComponents/topSection";
import Navigation from "./navigation";
import Slider from "./homeComponents/slider";
import BannerSection from "./homeComponents/bannerSection";
import FeaturedSection from "./homeComponents/featuredSection";
import HomeContentSection from "./homeComponents/homeContentSection";

import Footer from "./footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div id="topSection">
          <div className="homeContainer">
            <TopSection></TopSection>
          </div>
        </div>
        <div id="navigation">
          <div className="homeContainer">
            <Navigation tab="home"></Navigation>
          </div>
        </div>
        <div id="bodylayout">
          <div className="homeContainer">
            <div className="linespace"></div>
            <Slider></Slider>
          </div>
          <div className="homeContainer">
            <BannerSection></BannerSection>
          </div>
          <div className="homeContainer">
            <FeaturedSection></FeaturedSection>
          </div>
          <div className="homeContainer">
            <HomeContentSection></HomeContentSection>
          </div>
          <div className="homeContainer">
            <Footer></Footer>
          </div>
        </div>
      </div>
    );
  }
}
