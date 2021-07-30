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
"timestamp": '29/07/2021 04:17 PM',
"title": 'Không khoe thì thôi, một khi đã “show” thì Ngân Sát Thủ cũng khiến anh em phải "nóng mặt" với đường cong hoàn hảo!',
"description": 'Với phong cách “kín cổng cao tường”, Ngân Sát Thủ không nhiều lần khoe vóc dáng quyến rũ, nhưng cứ hở ra là khiến dân tình trầm trồ.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/16/-16264268804161922126421.jpg',
"alt": 'STREAMER,NGÂN SÁT THỦ,VÒNG 3,NÓNG BỎNG,',
"category": 'images',
"date": '29/07/2021',
"time": '04:17 PM',
"link": '/khong-khoe-thi-thoi-mot-khi-da-show-thi-ngan-sat-thu-cung-khien-anh-em-phai-nong-mat-voi-duong-cong-hoan-hao',
"zcomponent": 'page_20210729161737',
"filepath": './20210729161737-khong-khoe-thi-thoi-mot-khi-da-show-thi-ngan-sat-thu-cung-khien-anh-em-phai-nong-mat-voi-duong-cong-hoan-hao.js'
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
  'Không khoe thì thôi, một khi đã “show” thì Ngân Sát Thủ cũng khiến anh em phải "nóng mặt" với đường cong hoàn hảo!';
const author = "Kayle";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:17 PM";
const description =
  "Với phong cách “kín cổng cao tường”, Ngân Sát Thủ không nhiều lần khoe vóc dáng quyến rũ, nhưng cứ hở ra là khiến dân tình trầm trồ.";
const link =
  "khong-khoe-thi-thoi-mot-khi-da-show-thi-ngan-sat-thu-cung-khien-anh-em-phai-nong-mat-voi-duong-cong-hoan-hao";
const tagparam = ["STREAMER", "NGÂN SÁT THỦ", "VÒNG 3", "NÓNG BỎNG"];
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

export default function page_20210729161737() {
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
                    Thông minh, xinh đẹp, kỹ năng chơi game đỉnh,{" "}
                    <strong>Ngân Sát Thủ</strong> là một trong những{" "}
                    <strong>streamer</strong> nữ chiếm được nhiều tình cảm của
                    fan.{" "}
                  </p>
                  <p>
                    Vốn theo đuổi hình tượng dễ thương, thường xuyên mặc áo
                    phông rộng rãi nên mỗi khi nữ <strong>streamer</strong> này
                    bạo dạn mặc trang phục bó sát, khoe đường cong, "cố tình hớ
                    hênh" đều khiến người hâm mộ phải trầm trồ.
                  </p>
                  <p>
                    Điểm lại những khoảnh khắc thả dáng trong trang phục ngắn để
                    lộ vòng một và vòng ba nở nang, cực “mướt” gây “bão mạng”
                    của cô nàng, fan liên tiếp dành những lời khen cho nhan sắc
                    xinh đẹp và quyến rũ. Đây là thành quả của chuỗi ngày luyện
                    tập thể dục thể thao, yoga chăm chỉ của Ngân.{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-1626427972906307816831.jpg"
                    alt="1, STREAMER,NGÂN SÁT THỦ,VÒNG 3,NÓNG BỎNG,"
                    note="Dòng chú thích khoe khéo số đo vòng 3."
                  />
                  <p>
                    Nếu như thường xuyên theo dõi cuộc sống của cô nàng, người
                    hâm mộ sẽ biết, trong thời gian ở nhà thực hiện giãn cách,
                    bên cạnh việc livestream đều đặn thì hoạt động thể chất như
                    tập thể dục, tập yoga được cô nàng ưu tiên luyện tập để duy
                    trì một thân hình thon gọn, quyến rũ.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Nhìn những bức hình gợi cảm này, fan không khỏi "nóng mặt".
                  </p>
                  <p>
                    Việc âm thầm hoàn thiện bản thân này của nữ{" "}
                    <strong>streamer</strong> là minh chứng cho thấy{" "}
                    <strong>Ngân Sát Thủ</strong> là cô gái độc lập, mạnh mẽ và
                    yêu bản thân. Những bức ảnh Ngân Sát Thủ tự tin khoe hình
                    thể "hút hồn" trên mạng xã hội vẫn luôn là chủ đề "nóng"
                    thường nhận được lượt tương tác cực cao từ 2 triệu người
                    theo dõi.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/16/-16264268804161922126421.jpg"
                    alt="2, STREAMER,NGÂN SÁT THỦ,VÒNG 3,NÓNG BỎNG,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/16/-16264268825451371146272.jpg"
                    alt="3, STREAMER,NGÂN SÁT THỦ,VÒNG 3,NÓNG BỎNG,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/16/-1626426883519608299646.jpg"
                    alt="4, STREAMER,NGÂN SÁT THỦ,VÒNG 3,NÓNG BỎNG,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/16/-162642688301798277459.jpg"
                    alt="5, STREAMER,NGÂN SÁT THỦ,VÒNG 3,NÓNG BỎNG,"
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
