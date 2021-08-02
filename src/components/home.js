import React from "react";

import TopSection from "components/homeComponents/topSection";
import Navigation from "components/navigation";
import Footer from "components/footer";

import Slider from "components/homeComponents/slider";
import BannerSection from "components/homeComponents/bannerSection";
import FeaturedSection from "components/homeComponents/featuredSection";
import HomeContentSection from "components/homeComponents/homeContentSection";

import { AdsVertical } from "components/adsMethods";

export default function Home() {
  const container = "containerMain";
  return (
    <div>
      <div id="topSection">
        <div className={container}>
          <TopSection></TopSection>
        </div>
      </div>
      <div id="navigation">
        <div className={container}>
          <Navigation tab="home"></Navigation>
        </div>
      </div>
      <div id="bodylayout">
        <div className={container}>
          <div className="linespace"></div>
          <Slider></Slider>
        </div>
        <div className={container}>
          <BannerSection></BannerSection>
        </div>
        <div className={container}>
          <AdsVertical />
        </div>

        <div className={container}>
          <FeaturedSection></FeaturedSection>
        </div>

        <div className={container}>
          <HomeContentSection></HomeContentSection>
        </div>
        <div className={container}>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
