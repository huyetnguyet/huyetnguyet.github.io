import TopSection from "common/sharedComponents/topSection";
import Navigation from "common/sharedComponents/navigation";
import Footer from "common/sharedComponents/footer";

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
