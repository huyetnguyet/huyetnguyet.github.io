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
"timestamp": 07/06/2021 12:35 AM",
"title": Đấu Trường Chân Lý: Không phải điều tốt, Kho Vũ Khí khả năng sẽ 'con dao hai lưỡi' đối với game thủ",
"description": Chế độ Kho Vũ Khí nhiều khả năng sẽ khiến các game thủ “ôm hận” nếu không sử dụng hợp lý.",
"src": ",
"alt": Dau Truong Chan Ly, Dtcl, Kho Vu Khi, Riot Games, Riot, Tin Game, Tin Tuc Game, Tin Tft, Tin Dtcl, Tft, ",
"category": games",
"date": 07/06/2021",
"time": 12:35 AM",
"link": "/dau-truong-chan-ly-khong-phai-dieu-tot-kho-vu-khi-kha-nang-se-con-dao-hai-luoi-doi-voi-game-thu",
"zcomponent": page_20210607003553",
"filepath": ./20210607003553-dau-truong-chan-ly-khong-phai-dieu-tot-kho-vu-khi-kha-nang-se-con-dao-hai-luoi-doi-voi-game-thu.js"
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title =
  "Đấu Trường Chân Lý: Không phải điều tốt, Kho Vũ Khí khả năng sẽ 'con dao hai lưỡi' đối với game thủ";
const author = "LộcD";
const source = "Trí Thức Trẻ";
const timestamp = "07/06/2021 12:35 AM";
const description =
  "Chế độ Kho Vũ Khí nhiều khả năng sẽ khiến các game thủ “ôm hận” nếu không sử dụng hợp lý.";
const link =
  "dau-truong-chan-ly-khong-phai-dieu-tot-kho-vu-khi-kha-nang-se-con-dao-hai-luoi-doi-voi-game-thu";
const tagparam = [
  "dau-truong-chan-ly",
  "dtcl",
  "kho-vu-khi",
  "riot-games",
  "riot",
  "tin-game",
  "tin-tuc-game",
  "tin-tft",
  "tin-dtcl",
  "tft",
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

export default function page_20210607003553() {
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
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/7/-1623010520447345349609.jpg"
                      alt="Dau Truong Chan Ly, Dtcl, Kho Vu Khi, Riot Games, Riot, Tin Game, Tin Tuc Game, Tin Tft, Tin Dtcl, Tft, "
                      note="Riot thông báo Kho Vũ Khí sẽ xuất hiện ở bản 11.12"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/-16230105223551699469966.jpg"
                      alt="Dau Truong Chan Ly, Dtcl, Kho Vu Khi, Riot Games, Riot, Tin Game, Tin Tuc Game, Tin Tft, Tin Dtcl, Tft, "
                      note="Kho Vũ Khí ở bản 11.12 sẽ bao gồm nhiều loại trang bị khác nhau, bao gồm cả trang bị hiếm"
                    />
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
