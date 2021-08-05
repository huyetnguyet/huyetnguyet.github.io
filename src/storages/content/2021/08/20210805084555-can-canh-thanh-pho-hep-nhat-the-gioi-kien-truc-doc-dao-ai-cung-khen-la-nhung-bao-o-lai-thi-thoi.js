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
"timestamp": '05/08/2021 08:45 AM',
"title": 'Cận cảnh thành phố hẹp nhất thế giới, kiến trúc độc đáo ai cũng khen lạ nhưng bảo ở lại thì... thôi',
"description": 'Nói chung là được cái tiếng chứ không được cái miếng nào cả!',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/bst4w0ghy7tsfghs-1628167401897111052670.jpg',
"alt": 'kiến trúc độc đáo,mạng xã hội Trung Quốc,relax,thành phố,kì lạ,',
"category": 'travel',
"date": '05/08/2021',
"time": '08:45 AM',
"link": '/can-canh-thanh-pho-hep-nhat-the-gioi-kien-truc-doc-dao-ai-cung-khen-la-nhung-bao-o-lai-thi-thoi',
"zcomponent": 'page_20210805084555',
"filepath": './20210805084555-can-canh-thanh-pho-hep-nhat-the-gioi-kien-truc-doc-dao-ai-cung-khen-la-nhung-bao-o-lai-thi-thoi.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "travel";
const categoryLink = "/travel";
const title =
  "Cận cảnh thành phố hẹp nhất thế giới, kiến trúc độc đáo ai cũng khen lạ nhưng bảo ở lại thì... thôi";
const author = "ĐỨC 2 XÍCH,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "05/08/2021 08:45 AM";
const description =
  "Nói chung là được cái tiếng chứ không được cái miếng nào cả!";
const link =
  "can-canh-thanh-pho-hep-nhat-the-gioi-kien-truc-doc-dao-ai-cung-khen-la-nhung-bao-o-lai-thi-thoi";
const tagparam = [
  "kiến trúc độc đáo",
  "mạng xã hội Trung Quốc",
  "relax",
  "thành phố",
  "kì lạ",
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

export default function page_20210805084555() {
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
                      Được xây dựng dọc theo những ngọn núi dốc của tỉnh Vân
                      Nam, Trung Quốc, huyện Diêm Tân được nhiều người coi là{" "}
                      <strong>thành phố</strong> hẹp nhất thế giới.
                    </p>
                    <p>
                      Nhìn từ trên cao, thật khó để tin rằng một khu vực như vậy
                      có thể thực sự tồn tại. Phần đất hẹp kẹp giữa dòng nước
                      nhỏ của sông Nậm Thi và những ngọn núi dốc ở hai bên dường
                      như không phải là một vị trí đẹp dành cho một{" "}
                      <strong>thành phố</strong> có khoảng 450.000 dân, nhưng đó
                      chính xác là điều khiến Diêm Tân trở nên đặc biệt.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/230k11000000ra7wz188fr550412r5q70d-1628167401861808064790.jpg"
                      alt="1, kiến trúc độc đáo,mạng xã hội Trung Quốc,relax,thành phố,kì lạ,"
                      note="Hình ảnh thành phố Diêm Tân"
                    />
                    <p>
                      Tại điểm hẹp nhất, Diêm Tân chỉ có chiều rộng 30 mét, các
                      nhà địa chất đã đo được phần rộng nhất của{" "}
                      <strong>thành phố</strong> là khoảng 300 mét.
                    </p>
                    <p>
                      Chính vì quá hẹp mà lại nằm bên cạnh một con sông, nên đặc
                      điểm cấu trúc nhà cửa ở đây luôn phải xây trên cây cột để
                      đề phòng mưa lũ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/bst4w0ghy7tsfghs-1628167401897111052670.jpg"
                      alt="2, kiến trúc độc đáo,mạng xã hội Trung Quốc,relax,thành phố,kì lạ,"
                      note=""
                    />
                    <p>
                      Đoạn phim fly-cam giới thiệu về huyện Diêm Tân đã trở nên
                      viral trên <strong>mạng xã hội Trung Quốc</strong> trong
                      suốt nhiều năm, khiến nhiều người phải thắc mắc về lý do
                      tại sao lại có người muốn sống trong một{" "}
                      <strong>thành phố</strong> chật hẹp như vậy. Nhưng thực tế
                      là những người dân tại đây hầu hết là người bản địa, họ
                      không hề muốn chuyển đi do rất nhiều lý do chủ quan lẫn
                      khách quan.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Thế nhưng, vẻ ngoài độc đáo của huyện này cũng chính là
                      điểm yếu của nó. Kinh tế của Diêm Tân được đánh giá là cực
                      kém phát triển do địa hình bao quanh bởi các dãy núi, chỉ
                      có một con đường chính đi qua <strong>thành phố</strong>,
                      nơi này được nhiều người coi là không thể tiếp cận được.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/du-lichthanh-pho-hep-nhat-the-gioi-cho-hep-nhat-chi-toi-30m-4-16281674019231503356128.jpg"
                      alt="3, kiến trúc độc đáo,mạng xã hội Trung Quốc,relax,thành phố,kì lạ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/10071e000001g2c0a7dcb-16281674104231471976067.jpg"
                      alt="4, kiến trúc độc đáo,mạng xã hội Trung Quốc,relax,thành phố,kì lạ,"
                      note=""
                    />
                    <p>Nguồn: Oddity Central</p>
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
