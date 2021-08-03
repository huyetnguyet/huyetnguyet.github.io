import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 07/06/2021 06:35 PM",
"title": Trông Nhiệt Ba 'gánh' tấm váy nhìn mà phát ngốt này, ta như hiểu được tầm quan trọng của nhan sắc trong chuyện ăn mặc",
"description": Nhan sắc của Địch Lệ Nhiệt Ba như thể tấm phao cứu sinh, 'gánh' được vô số trang phục dù có khó mặc tới mấy.",
"src": https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/7/1944697613056473045284797254835451750697360n-16230581050632067566763.jpg",
"alt": Star Style, Thoi Trang, Sao Do Thoi Trang, Dich Le Nhiet Ba, Nu Dien Vien Trung Quoc, Sao Cbiz, Loi Trang Phuc, Trang Phuc Tham Do, ",
"category": images",
"date": 07/06/2021",
"time": 06:35 PM",
"link": "/nhin-nhiet-ba-ganh-tam-vay-nhin-ma-phat-ngot-nay-ta-nhu-hieu-duoc-tam-quan-trong-cua-nhan-sac-trong-chuyen-an-mac",
"zcomponent": page_20210607183535",
"filepath": ./20210607183535-nhin-nhiet-ba-ganh-tam-vay-nhin-ma-phat-ngot-nay-ta-nhu-hieu-duoc-tam-quan-trong-cua-nhan-sac-trong-chuyen-an-mac.js"
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  "Trông Nhiệt Ba 'gánh' tấm váy nhìn mà phát ngốt này, ta như hiểu được tầm quan trọng của nhan sắc trong chuyện ăn mặc";
const author = "HÀ TRẦN,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "07/06/2021 06:35 PM";
const description =
  "Nhan sắc của Địch Lệ Nhiệt Ba như thể tấm phao cứu sinh, 'gánh' được vô số trang phục dù có khó mặc tới mấy.";
const link =
  "nhin-nhiet-ba-ganh-tam-vay-nhin-ma-phat-ngot-nay-ta-nhu-hieu-duoc-tam-quan-trong-cua-nhan-sac-trong-chuyen-an-mac";
const tagparam = [
  "star-style",
  "thoi-trang",
  "sao-do-thoi-trang",
  "dich-le-nhiet-ba",
  "nu-dien-vien-trung-quoc",
  "sao-cbiz",
  "loi-trang-phuc",
  "trang-phuc-tham-do",
];
const facebookLinkShare =
  "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fhuyetnguyet.com%2F" +
  link +
  "&layout=button_count&size=small&width=77&height=20&appId";

const updatedTags = tagparam.map((tag) => {
  const link =
    "https://www.google.com/search?q=huyetnguyet+" + tag.replace(" ", "+");
  return (
    <a href={link} className="tag">
      {tag}
    </a>
  );
});

export default function page_20210607183535() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              {">"}
            </div>
            <a href={categoryLink} className="pathName">
              {category}
            </a>
          </div>
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="info">
            <p>
              <div className="author">{author}</div> - Theo {source} |{" "}
              {timestamp}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsVertical />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <div className="contentBodyLeft">
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/7/1944697613056473045284797254835451750697360n-16230581050632067566763.jpg"
                      alt="Star Style, Thoi Trang, Sao Do Thoi Trang, Dich Le Nhiet Ba, Nu Dien Vien Trung Quoc, Sao Cbiz, Loi Trang Phuc, Trang Phuc Tham Do, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/7/1956222904510787527889821297865379505161194n-1623058105142853618624.jpg"
                      alt="Star Style, Thoi Trang, Sao Do Thoi Trang, Dich Le Nhiet Ba, Nu Dien Vien Trung Quoc, Sao Cbiz, Loi Trang Phuc, Trang Phuc Tham Do, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/7/1976608912659275318856476205900797586671010n-1623058196127379082360.jpg"
                      alt="Star Style, Thoi Trang, Sao Do Thoi Trang, Dich Le Nhiet Ba, Nu Dien Vien Trung Quoc, Sao Cbiz, Loi Trang Phuc, Trang Phuc Tham Do, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/7/19252077418722167529536932707754049812990306n-16230582654871855237431.jpg"
                      alt="Star Style, Thoi Trang, Sao Do Thoi Trang, Dich Le Nhiet Ba, Nu Dien Vien Trung Quoc, Sao Cbiz, Loi Trang Phuc, Trang Phuc Tham Do, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/7/19561508410012015639530676240676009375106970n-16230582655671300351428.jpg"
                      alt="Star Style, Thoi Trang, Sao Do Thoi Trang, Dich Le Nhiet Ba, Nu Dien Vien Trung Quoc, Sao Cbiz, Loi Trang Phuc, Trang Phuc Tham Do, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/7/1959749475134544000698673337438734963166220n-1623058034759824026071.jpg"
                      alt="Star Style, Thoi Trang, Sao Do Thoi Trang, Dich Le Nhiet Ba, Nu Dien Vien Trung Quoc, Sao Cbiz, Loi Trang Phuc, Trang Phuc Tham Do, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/7/1942828023213464895867638447664160704794163n-1-1623058034669702276811.jpg"
                      alt="Star Style, Thoi Trang, Sao Do Thoi Trang, Dich Le Nhiet Ba, Nu Dien Vien Trung Quoc, Sao Cbiz, Loi Trang Phuc, Trang Phuc Tham Do, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/add-16230590090421180007761.jpg"
                      alt="Star Style, Thoi Trang, Sao Do Thoi Trang, Dich Le Nhiet Ba, Nu Dien Vien Trung Quoc, Sao Cbiz, Loi Trang Phuc, Trang Phuc Tham Do, "
                      note=""
                    />
                    <p>Ảnh: Internet</p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
