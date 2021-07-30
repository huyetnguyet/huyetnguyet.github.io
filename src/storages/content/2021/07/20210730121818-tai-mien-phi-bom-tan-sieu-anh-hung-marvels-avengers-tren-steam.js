import React from "react";
import "components/page.css";
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
"timestamp": '30/07/2021 12:18 PM',
"title": 'Tải miễn phí bom tấn siêu anh hùng Marvel's Avengers trên Steam',
"description": 'Tải Marvel's Avengers và chiến thôi.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/30/photo-1-1627620857366227458726.jpg',
"alt": 'SIÊU ANH HÙNG,GAME PHIÊU LƯU,MARVEL’S AVENGERS,GAME MIỄN PHÍ,GAME SIÊU ANH HÙNG,',
"category": 'games',
"date": '30/07/2021',
"time": '12:18 PM',
"link": '/tai-mien-phi-bom-tan-sieu-anh-hung-marvels-avengers-tren-steam',
"zcomponent": 'page_20210730121818',
"filepath": './20210730121818-tai-mien-phi-bom-tan-sieu-anh-hung-marvels-avengers-tren-steam.js'
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
const title = "Tải miễn phí bom tấn siêu anh hùng Marvel's Avengers trên Steam";
const author = "Real Madrid";
const source = "Pháp luật và bạn đọc";
const timestamp = "30/07/2021 12:18 PM";
const description = "Tải Marvel's Avengers và chiến thôi.";
const link = "tai-mien-phi-bom-tan-sieu-anh-hung-marvels-avengers-tren-steam";
const tagparam = [
  "SIÊU ANH HÙNG",
  "GAME PHIÊU LƯU",
  "MARVEL’S AVENGERS",
  "GAME MIỄN PHÍ",
  "GAME SIÊU ANH HÙNG",
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

export default function page_20210730121818() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <p>
                    Theo thông báo của Steam, từ ngay cho đến hết ngày 2/8, bom
                    tấn <strong>siêu anh hùng</strong> Marvel's Avengers sẽ được
                    mở của miễn phí. Game thủ chỉ cần có tải khoản Steam là có
                    thể tải và chơi ngay bây giờ mà không tốn bất cứ khoản phí
                    nào.
                  </p>
                  <p>
                    Được biết, Marvel's Avengers là một tựa{" "}
                    <strong>game phiêu lưu</strong> hành động góc nhìn thứ ba
                    lấy bối cảnh của vũ trụ Marvel với những{" "}
                    <strong>siêu anh hùng</strong> trong biệt đội Avengers. Game
                    được giới thiệu lần đầu vào hội chợ E3 2019 và được phát
                    triển bởi Crystal Dynamics xuất bản bởi Square Enix. Theo
                    những gì tiết lộ về cốt truyện thì trong Marvel's Avengers,
                    người chơi sẽ có nhiệm vụ tập hợp lại và xây dựng lại đội
                    hình Avengers. Game sẽ có cả chế độ camapign chơi đơn và chế
                    độ multiplayer.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-1-16276208678291596417404.jpg"
                    alt="2, SIÊU ANH HÙNG,GAME PHIÊU LƯU,MARVEL’S AVENGERS,GAME MIỄN PHÍ,GAME SIÊU ANH HÙNG,"
                    note=""
                  />
                  <p>
                    Mô tả về trò chơi này, PC Games cho biết: "
                    <strong>Marvel’s Avengers</strong> là sản phẩm sáng tạo với
                    sự cộng tác của Crystal Dynamics và Marvel Games. Kết hợp
                    giữa trải nghiệm game và chất điện ảnh, đây sẽ là trò chơi
                    Avengers hoành tráng nhất trong lịch sử. Những trải nghiệm
                    trong Marvel’s Avengers sẽ đạt cực đại khi bạn tham gia phần
                    chơi co-op 4 người. Mỗi người một{" "}
                    <strong>siêu anh hùng</strong> khác nhau, với sức mạnh, ý
                    chí và vận mệnh riêng, tất cả tạo nên một đội hùng để bảo vệ
                    một thế giới đang không ngừng bị đe dọa".
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>Cấu hình tối thiểu để chơi Marvel's Avengers</p>
                  <p>Hệ điều hành: Windows 10 64-bit</p>
                  <p>CPU: Intel Core i3-4160</p>
                  <p>Memory: 8 GB RAM</p>
                  <p>Card đồ họa: NVIDIA GTX 950 / AMD 270 </p>
                  <p>Dung lượng: 75 GB </p>
                  <p>Cấu hình đề nghị</p>
                  <p>HĐH: Windows 10 64-bit</p>
                  <p>
                    CPU: Intel Core i7 4770K 3,4 Ghz hoặc AMD Ryzen 5 1600 3,2
                    Ghz
                  </p>
                  <p>RAM: 16 GB</p>
                  <p>
                    Card đồ họa: NVIDIA GTX 1060 6GB hoặc AMD Radeon RX 480 8GB
                  </p>
                  <p>Dung lượng: 110 GB </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/30/photo-1-1627620857366227458726.jpg"
                    alt="1, SIÊU ANH HÙNG,GAME PHIÊU LƯU,MARVEL’S AVENGERS,GAME MIỄN PHÍ,GAME SIÊU ANH HÙNG,"
                    note=""
                  />
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
