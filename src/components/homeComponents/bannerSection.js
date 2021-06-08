import React from "react";
import "components/homeComponents/bannerSection.css";

import image01 from "asserts/homeSlider/banner01.jpg";
import image02 from "asserts/homeSlider/banner02.jpg";
import image03 from "asserts/homeSlider/banner03.jpg";

function Banner(props) {
  return (
    <a href={props.link}>
      <img src={props.image} alt="images"></img>
      <div className="contentText">
        <span>{props.title.substring(0, 50)}</span>
      </div>
    </a>
  );
}

export default function BannereSection() {
  return (
    <div className="bannerSection">
      <Banner
        link="/nhung-khoanh-khac-tuyet-dep-cua-tuyen-viet-nam-khien-nguoi-ham-mo-do-ran-ran"
        title="Những khoảnh khắc tuyệt đẹp của tuyển Việt Nam khiến người hâm mộ 'đổ rần rần'"
        image={image01}
      ></Banner>
      <Banner
        link="/chum-anh-oi-gioi-oi-van-hau-dep-trai-qua"
        title="Chùm ảnh: Ối giời ơi Văn Hậu đẹp trai quá!"
        image={image02}
      ></Banner>
      <Banner
        link="/nhiet-ba-ngay-cang-tao-bao-toi-ngop-tho-het-khoe-lung-tran-sexy-lai-bat-lu-voi-vay-xuyen-thau-khoe-vong-1-cang-tran"
        title="Nhiệt Ba ngày càng táo bạo tới ngộp thở: Hết khoe lưng trần sexy lại 'bắt lú' với váy xuyên thấu khoe vòng 1 căng tràn"
        image={image03}
      ></Banner>
    </div>
  );
}
