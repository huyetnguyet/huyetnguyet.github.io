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
"timestamp": '03/08/2021 11:11 AM',
"title": 'Cấu hình máy tính như nào để chơi được Bless Unleashed, game nhập vai trực tuyến miễn phí hot nhất Steam?',
"description": 'Bless Unleashed là game miễn phí cực hot trên Steam.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-1627918275629617952262.jpeg',
"alt": 'CẤU HÌNH MÁY TÍNH,GAME NHẬP VAI,GAME MIỄN PHÍ,BLESS UNLEASHED,STEAM,GAME MMORPG,FREE TO PLAY,',
"category": 'games',
"date": '03/08/2021',
"time": '11:11 AM',
"link": '/cau-hinh-may-tinh-nhu-nao-de-choi-duoc-bless-unleashed-game-nhap-vai-truc-tuyen-mien-phi-hot-nhat-steam',
"zcomponent": 'page_20210803111127',
"filepath": './20210803111127-cau-hinh-may-tinh-nhu-nao-de-choi-duoc-bless-unleashed-game-nhap-vai-truc-tuyen-mien-phi-hot-nhat-steam.js'
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
  "Cấu hình máy tính như nào để chơi được Bless Unleashed, game nhập vai trực tuyến miễn phí hot nhất Steam?";
const author = "Real Madrid";
const source = "Pháp luật và bạn đọc";
const timestamp = "03/08/2021 11:11 AM";
const description = "Bless Unleashed là game miễn phí cực hot trên Steam.";
const link =
  "cau-hinh-may-tinh-nhu-nao-de-choi-duoc-bless-unleashed-game-nhap-vai-truc-tuyen-mien-phi-hot-nhat-steam";
const tagparam = [
  "CẤU HÌNH MÁY TÍNH",
  "GAME NHẬP VAI",
  "GAME MIỄN PHÍ",
  "BLESS UNLEASHED",
  "STEAM",
  "GAME MMORPG",
  "FREE TO PLAY",
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

export default function page_20210803111127() {
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
                      Như thông tin chúng tôi đã đưa, vào ngày 6/8 tới đây, tựa{" "}
                      <strong>game nhập vai</strong> trực tuyến nhiều người chơi{" "}
                      <strong>Bless Unleashed</strong> sẽ chính thức phát hành
                      trên <strong>Steam</strong>. Với nền tảng đồ họa tuyệt
                      đẹp, cùng với đó là miễn phí 100%, đây hứa hẹn sẽ là trò
                      chơi cực hot trên Steam trong thời gian tới đây.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-1627918275629617952262.jpeg"
                      alt="1, CẤU HÌNH MÁY TÍNH,GAME NHẬP VAI,GAME MIỄN PHÍ,BLESS UNLEASHED,STEAM,GAME MMORPG,FREE TO PLAY,"
                      note=""
                    />
                    <p>
                      Trong <strong>Bless Unleashed</strong>, người chơi sẽ được
                      nhập vai vào những nhà thám hiểm khác nhau phải chiến đầu
                      chống lại bè lũ quái vật, rồng và những kẻ thù khổng lồ
                      khác. Giống như các tựa <strong>game MMORPG</strong> khác
                      có bối cảnh giả tưởng, Bless Unleashed sẽ cho phép người
                      chơi phối hợp với những người khác để khám phá các
                      dungeon, thu thập chiến lợi phẩm và phát triển nhân vật
                      của mình trong suốt cuộc phiêu lưu.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/2/photo-1-1627918216394616163273.gif"
                      alt="2, CẤU HÌNH MÁY TÍNH,GAME NHẬP VAI,GAME MIỄN PHÍ,BLESS UNLEASHED,STEAM,GAME MMORPG,FREE TO PLAY,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      {" "}
                      <strong>Bless Unleashed</strong> hiện có 5 lớp nhân vật
                      khác nhau, phù hợp với phong cách chơi của từng loại game
                      thủ. Mỗi class đều có điểm mạnh điểm yêu riêng, thích hợp
                      với từng vị trí trong một tổ đội tác chiến. Việc nắm rõ ưu
                      nhược điểm của từng lớp nhân vật sẽ khiến người chơi dễ
                      dàng tiếp cận và hiểu game nhiều hơn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/2/photo-1-16279182509991353252753.gif"
                      alt="3, CẤU HÌNH MÁY TÍNH,GAME NHẬP VAI,GAME MIỄN PHÍ,BLESS UNLEASHED,STEAM,GAME MMORPG,FREE TO PLAY,"
                      note=""
                    />
                    <p>
                      <strong>Bless Unleashed</strong> là một tựa game{" "}
                      <strong>Free to Play</strong> mà trong đó người chơi chỉ
                      cần tải về và chơi, giống như hầu hết các tựa game khác
                      thuộc thể loại này, game cũng cho phép người chơi mua skin
                      để làm đẹp nhân vật của mình bằng tiền thật.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/2/photo-1-162791822631296092373.gif"
                      alt="4, CẤU HÌNH MÁY TÍNH,GAME NHẬP VAI,GAME MIỄN PHÍ,BLESS UNLEASHED,STEAM,GAME MMORPG,FREE TO PLAY,"
                      note=""
                    />
                    <h5>
                      Cấu hình tối thiểu để chơi được{" "}
                      <strong>Bless Unleashed</strong>:
                    </h5>
                    <p>HĐH: Windows 7 64-bit, Windows 8.1, Windows 10</p>
                    <p>Bộ xử lý: Intel Core i5-4430 / AMD FX-6300</p>
                    <p>RAM: 8 GB</p>
                    <p>
                      Card đồ họa: NVIDIA GeForce GTX 960 2GB / AMD Radeon R7
                      370 2GB
                    </p>
                    <p>DirectX: Phiên bản 11</p>
                    <p>50 GB dung lượng khả dụng</p>
                    <h5>
                      Cấu hình đề nghị để chơi mượt{" "}
                      <strong>Bless Unleashed</strong> ở cài đặt đồ họa đẹp:
                    </h5>
                    <p>HĐH: Windows 7 64-bit, Windows 8.1, Windows 10</p>
                    <p>Bộ xử lý: Intel Core i5-6600K / AMD Ryzen 5 1600</p>
                    <p>RAM: 16 GB</p>
                    <p>
                      Card đồ họa: NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX
                      580 4GB
                    </p>
                    <p>DirectX: Phiên bản 11</p>
                    <p>50 GB dung lượng khả dụng</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/2/photo-2-1627918250755506445393.gif"
                      alt="5, CẤU HÌNH MÁY TÍNH,GAME NHẬP VAI,GAME MIỄN PHÍ,BLESS UNLEASHED,STEAM,GAME MMORPG,FREE TO PLAY,"
                      note=""
                    />
                  </div>
                  <AdsHorizontal />
                </div>
              </div>

              <RandomFeature />

              <div className="source">Source: {source}</div>

              <FacebookShareButton link={facebookLinkShare} />

              <div className="tags">Tags: {updatedTags}</div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
