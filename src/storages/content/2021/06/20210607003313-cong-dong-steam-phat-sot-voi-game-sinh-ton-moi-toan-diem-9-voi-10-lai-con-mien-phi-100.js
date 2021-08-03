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
"timestamp": 07/06/2021 12:33 AM",
"title": Cộng đồng Steam phát sốt với game sinh tồn mới, toàn điểm 9 với 10, lại còn miễn phí 100%",
"description": Game sinh tồn Muck đang trở thành hiện tượng trên Steam.",
"src": https://gamek.mediacdn.vn/133514250583805952/2021/6/7/photo-1-1623043993514384383939.jpg",
"alt": Muck, Game Sinh Ton, Cau Hinh Toi Thieu, He Dieu Hanh, ",
"category": games",
"date": 07/06/2021",
"time": 12:33 AM",
"link": "/cong-dong-steam-phat-sot-voi-game-sinh-ton-moi-toan-diem-9-voi-10-lai-con-mien-phi-100",
"zcomponent": page_20210607003313",
"filepath": ./20210607003313-cong-dong-steam-phat-sot-voi-game-sinh-ton-moi-toan-diem-9-voi-10-lai-con-mien-phi-100.js"
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
  "Cộng đồng Steam phát sốt với game sinh tồn mới, toàn điểm 9 với 10, lại còn miễn phí 100%";
const author = "Real Madrid";
const source = "Pháp luật và bạn đọc";
const timestamp = "07/06/2021 12:33 AM";
const description = "Game sinh tồn Muck đang trở thành hiện tượng trên Steam.";
const link =
  "cong-dong-steam-phat-sot-voi-game-sinh-ton-moi-toan-diem-9-voi-10-lai-con-mien-phi-100";
const tagparam = [
  "muck",
  "game-sinh-ton",
  "cau-hinh-toi-thieu",
  "he-dieu-hanh",
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

export default function page_20210607003313() {
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
                    <p>
                      Ra mắt chưa đầy 2 ngày,<strong>Muck</strong>Ra mắt chưa
                      đầy 2 ngày, Muck đã trở thành một trong những cái tên hot
                      nhất trên Steam. Theo thống kê của Steamchart, đã có đến
                      15000 game thủ tham gia vào thế giới của
                      <strong>Muck</strong>Ra mắt chưa đầy 2 ngày, Muck đã trở
                      thành một trong những cái tên hot nhất trên Steam. Theo
                      thống kê của Steamchart, đã có đến 15000 game thủ tham gia
                      vào thế giới của Muck trong dịp cuối tuần vừa qua. Ngoài
                      ra, điểm đánh giá của tựa game này cũng cực kỳ cao,
                      95/100. Điều này thể hiện một sự yêu thích gần như tuyệt
                      đối của game thủ với tựa game sinh tồn
                      <strong>Muck</strong>
                    </p>
                    <p>
                      {" "}
                      Về cơ bản,<strong>Muck</strong>
                    </p>
                    <p></p>
                    <p>
                      Muck được hoạt động theo cả dạng chơi đơn và co-op. Đương
                      nhiên đây là một trò chơi miễn phí nên game thủ không cần
                      bỏ tiền vẫn có thể tải và chơi thoải mái
                      <strong>Muck</strong>
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/7/photo-1-1623043993514384383939.jpg"
                      alt="Muck, Game Sinh Ton, Cau Hinh Toi Thieu, He Dieu Hanh, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/7/photo-1-16230439002991183177392.gif"
                      alt="Muck, Game Sinh Ton, Cau Hinh Toi Thieu, He Dieu Hanh, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/7/photo-1-16230440054421203093387.jpg"
                      alt="Muck, Game Sinh Ton, Cau Hinh Toi Thieu, He Dieu Hanh, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/7/photo-1-1623044012038898800490.jpg"
                      alt="Muck, Game Sinh Ton, Cau Hinh Toi Thieu, He Dieu Hanh, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/7/photo-1-16230440207831748459074.jpg"
                      alt="Muck, Game Sinh Ton, Cau Hinh Toi Thieu, He Dieu Hanh, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/7/photo-1-1623044026701856216060.jpg"
                      alt="Muck, Game Sinh Ton, Cau Hinh Toi Thieu, He Dieu Hanh, "
                      note=""
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
