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
"timestamp": '29/07/2021 04:20 PM',
"title": 'Biểu tượng cảm xúc nào nổi tiếng nhất thế giới?',
"description": 'Phần lớn người dùng emoji đồng ý rằng biểu tượng “cười ra nước mắt” vô cùng thú vị.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-1-16266831185991254590428.jpg',
"alt": 'EMOJI,NỔI TIẾNG NHẤT,NGƯỜI THAM GIA,MẠNG XÃ HỘI,',
"category": 'tech',
"date": '29/07/2021',
"time": '04:20 PM',
"link": '/bieu-tuong-cam-xuc-nao-noi-tieng-nhat-the-gioi',
"zcomponent": 'page_20210729162028',
"filepath": './20210729162028-bieu-tuong-cam-xuc-nao-noi-tieng-nhat-the-gioi.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "tech";
const categoryLink = "/tech";
const title = "Biểu tượng cảm xúc nào nổi tiếng nhất thế giới?";
const author = "Du Lam";
const source = "ICTNews";
const timestamp = "29/07/2021 04:20 PM";
const description =
  "Phần lớn người dùng emoji đồng ý rằng biểu tượng “cười ra nước mắt” vô cùng thú vị.";
const link = "bieu-tuong-cam-xuc-nao-noi-tieng-nhat-the-gioi";
const tagparam = ["EMOJI", "NỔI TIẾNG NHẤT", "NGƯỜI THAM GIA", "MẠNG XÃ HỘI"];
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

export default function page_20210729162028() {
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
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    Khảo sát 7.000 người dùng tại Mỹ, Anh, Đức, Pháp, Nhật Bản,
                    Australia và Hàn Quốc của Adobe cho thấy biểu tượng "cười ra
                    nước mắt" là <strong>emoji</strong> phổ biến nhất thế giới.
                    Hai biểu tượng đứng thứ hai và ba lần lượt là ra dấu ngón
                    cái (tán thành) và trái tim đỏ. Biểu tượng "nháy mắt hôn" và
                    "mặt buồn" hoàn thành top 5.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-1-16266831185991254590428.jpg"
                    alt="1, EMOJI,NỔI TIẾNG NHẤT,NGƯỜI THAM GIA,MẠNG XÃ HỘI,"
                    note=""
                  />
                  <p>
                    Adobe công bố phát hiện ngay trước Ngày{" "}
                    <strong>Emoji</strong> 2021 diễn ra. Dù vậy, không phải ai
                    cũng đồng tình với vị trí số 1. Chẳng hạn, thế hệ Gen Z cho
                    rằng emoji "cười ra nước mắt" không còn thú vị nữa, vì những
                    người lớn tuổi hơn như mẹ, anh chị, người già… đều dùng nó.
                  </p>
                  <p>
                    Báo cáo Xu hướng <strong>Emoji</strong> mới nhất của Adobe
                    cũng chỉ ra 3 emoji hay bị hiểu nhầm nhất. Đó chính là biểu
                    tượng cà tím, đào và mặt hề.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Phần lớn <strong>người tham gia</strong> khảo sát (90%) tin
                    rằng <strong>emoji</strong> giúp họ biểu lộ ý kiến dễ dàng
                    hơn, 89% cho biết emoji đơn giản hóa việc giao tiếp, vượt
                    qua rào cản ngôn ngữ. 67% nghĩ rằng những người dùng emoji
                    thân thiện, vui tính và thú vị hơn những người không dùng.
                  </p>
                  <p>
                    Nhiều người cảm thấy thoải mái khi bày tỏ cảm xúc bằng{" "}
                    <strong>emoji</strong> hơn là nói chuyện trực tiếp hay qua
                    điện thoại. 55% tiết lộ dùng emoji khi nói chuyện khiến sức
                    khỏe tinh thần của họ tích cực hơn. 76% nói emoji là công cụ
                    giao tiếp quan trọng để tạo ra sự thống nhất, tôn trọng và
                    hiểu lẫn nhau. 88% cảm thấy đồng cảm với những người dùng
                    emoji.
                  </p>
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
