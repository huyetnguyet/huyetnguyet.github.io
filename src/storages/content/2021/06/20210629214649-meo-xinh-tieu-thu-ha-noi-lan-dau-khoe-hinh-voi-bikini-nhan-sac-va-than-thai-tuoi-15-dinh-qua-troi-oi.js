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
"timestamp": '29/06/2021 09:46 PM',
"title": 'Meo Xinh - tiểu thư Hà Nội lần đầu khoe hình với bikini, nhan sắc và thần thái tuổi 15 đỉnh quá trời ơi',
"description": 'Dù mới 15 tuổi thôi nhưng Lê Gia Linh (Meo Xinh) thực sự xứng đáng là một "thế lực" nhan sắc đáng gờm đấy!',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210629214649--12-032345.jpg',
"alt": 'Lê Gia Linh,Meo xinh,lê gia linh (meo xinh),rich kid 2k6,Tiểu thư,tiểu thư 2k6,Hello GenZ,Hello Gen Z,youtuber gen z,Gái đẹp đại chiến bikini,đại chiến bikini,gái xinh,',
"category": 'images',
"date": '29/06/2021',
"time": '09:46 PM',
"link": '/meo-xinh-tieu-thu-ha-noi-lan-dau-khoe-hinh-voi-bikini-nhan-sac-va-than-thai-tuoi-15-dinh-qua-troi-oi',
"zcomponent": 'page_20210629214649',
"filepath": './20210629214649-meo-xinh-tieu-thu-ha-noi-lan-dau-khoe-hinh-voi-bikini-nhan-sac-va-than-thai-tuoi-15-dinh-qua-troi-oi.js'
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
  "Meo Xinh - tiểu thư Hà Nội lần đầu khoe hình với bikini, nhan sắc và thần thái tuổi 15 đỉnh quá trời ơi";
const author = "M416,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "29/06/2021 09:46 PM";
const description =
  'Dù mới 15 tuổi thôi nhưng Lê Gia Linh (Meo Xinh) thực sự xứng đáng là một "thế lực" nhan sắc đáng gờm đấy!';
const link =
  "meo-xinh-tieu-thu-ha-noi-lan-dau-khoe-hinh-voi-bikini-nhan-sac-va-than-thai-tuoi-15-dinh-qua-troi-oi";
const tagparam = [
  "Lê Gia Linh",
  "Meo xinh",
  "lê gia linh (meo xinh)",
  "rich kid 2k6",
  "Tiểu thư",
  "tiểu thư 2k6",
  "Hello GenZ",
  "Hello Gen Z",
  "youtuber gen z",
  "Gái đẹp đại chiến bikini",
  "đại chiến bikini",
  "gái xinh",
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

export default function page_20210629214649() {
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
                      Với những người chơi hệ hóng chuyên nghiệp trên MXH thì
                      chắc hẳn sẽ không quá xa lạ với cái tên{" "}
                      <strong>Lê Gia Linh</strong> (nickname{" "}
                      <strong>Meo Xinh</strong>). Được coi là cái tên triển vọng
                      của giới rich kid Hà thành, đồng thời là một thế lực đáng
                      gờm trên địa hạt làm video cả ở TikTok lẫn YouTube, thế
                      nhưng Gia Linh thực tế vẫn chỉ là một cô bạn sinh năm 2k6,
                      năm nay vừa lên lớp 10.
                    </p>
                    <p>
                      Dẫu vậy, tuổi trẻ thì tài cao, sức hút của Gia Linh là thứ
                      không thể phủ nhận được. Ngoài cuộc sống sang chảnh như
                      mơ, cô bạn này còn được yêu mến bởi ngoại hình xinh xắn,
                      dễ thương chuẩn <strong>tiểu thư</strong>. Mới đây, Gia
                      Linh tiếp tục chứng minh nhan sắc thu hút của mình khi lần
                      đầu tiên khoe dáng với bikini.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214649--10-157430.jpg")
                          .default
                      }
                      alt="1, Lê Gia Linh,Meo xinh,lê gia linh (meo xinh),rich kid 2k6,Tiểu thư,tiểu thư 2k6,Hello GenZ,Hello Gen Z,youtuber gen z,Gái đẹp đại chiến bikini,đại chiến bikini,gái xinh,"
                      note="Cận cảnh nhan sắc xinh xắn của cô bạn tiểu thư 2k6"
                    />
                    <p>
                      Được biết, Gia Linh đang có chuyến du lịch nghỉ dưỡng cùng
                      gia đình tại Quy Nhơn. Mà đã đi chơi với biển xanh mây
                      trắng nắng vàng như vậy thì đương nhiên, bikini là thứ
                      không thể thiếu.
                    </p>
                    <p>
                      Có thể thấy lần đầu công khai ảnh theo style sexy cỡ này
                      nên trông Gia Linh còn khá ngại ngùng. Tuy nhiên, nét xinh
                      hay thần thái của cô bạn thì không vì thế mà giảm đi chút
                      nào cả. Ngược lại, Gia Linh vẫn nhận được tới tấp lời khen
                      nhờ nước da trắng hồng và vóc dáng thanh mảnh.
                    </p>
                    <p>
                      Lần đầu khoe dáng với bikini nên trông Gia Linh còn khá
                      khép nép nhưng thần thái của cô bạn thì vẫn rất xịn
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214649--11-339788.jpg")
                          .default
                      }
                      alt="2, Lê Gia Linh,Meo xinh,lê gia linh (meo xinh),rich kid 2k6,Tiểu thư,tiểu thư 2k6,Hello GenZ,Hello Gen Z,youtuber gen z,Gái đẹp đại chiến bikini,đại chiến bikini,gái xinh,"
                      note="Được biết cả gia đình của Gia Linh đang đi nghỉ dưỡng ở một resort tại Quy Nhơn"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214649--12-032345.jpg")
                          .default
                      }
                      alt="3, Lê Gia Linh,Meo xinh,lê gia linh (meo xinh),rich kid 2k6,Tiểu thư,tiểu thư 2k6,Hello GenZ,Hello Gen Z,youtuber gen z,Gái đẹp đại chiến bikini,đại chiến bikini,gái xinh,"
                      note=""
                    />
                    <p>
                      Mới 15 tuổi mà đã tỏa sáng cỡ này thì vài năm nữa thôi, cô
                      bạn nhất định sẽ trở thành gương mặt "có số má" của hội
                      gái đẹp đình đám cho mà xem!
                    </p>
                    <p>
                      Gia Linh là một trong những <strong>gái xinh</strong> Gen
                      Z nổi bật
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Và hẳn là cô bạn đã được thừa hưởng gen trội từ gia đình
                      "cực phẩm" của mình
                    </p>

                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214649--13-95504.jpeg")
                          .default
                      }
                      alt="4, Lê Gia Linh,Meo xinh,lê gia linh (meo xinh),rich kid 2k6,Tiểu thư,tiểu thư 2k6,Hello GenZ,Hello Gen Z,youtuber gen z,Gái đẹp đại chiến bikini,đại chiến bikini,gái xinh,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214649--14-981931.jpg")
                          .default
                      }
                      alt="5, Lê Gia Linh,Meo xinh,lê gia linh (meo xinh),rich kid 2k6,Tiểu thư,tiểu thư 2k6,Hello GenZ,Hello Gen Z,youtuber gen z,Gái đẹp đại chiến bikini,đại chiến bikini,gái xinh,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214649--15-043880.jpg")
                          .default
                      }
                      alt="6, Lê Gia Linh,Meo xinh,lê gia linh (meo xinh),rich kid 2k6,Tiểu thư,tiểu thư 2k6,Hello GenZ,Hello Gen Z,youtuber gen z,Gái đẹp đại chiến bikini,đại chiến bikini,gái xinh,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214649--16-903787.jpg")
                          .default
                      }
                      alt="7, Lê Gia Linh,Meo xinh,lê gia linh (meo xinh),rich kid 2k6,Tiểu thư,tiểu thư 2k6,Hello GenZ,Hello Gen Z,youtuber gen z,Gái đẹp đại chiến bikini,đại chiến bikini,gái xinh,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214649--17-266935.jpg")
                          .default
                      }
                      alt="8, Lê Gia Linh,Meo xinh,lê gia linh (meo xinh),rich kid 2k6,Tiểu thư,tiểu thư 2k6,Hello GenZ,Hello Gen Z,youtuber gen z,Gái đẹp đại chiến bikini,đại chiến bikini,gái xinh,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214649--18-262695.jpg")
                          .default
                      }
                      alt="9, Lê Gia Linh,Meo xinh,lê gia linh (meo xinh),rich kid 2k6,Tiểu thư,tiểu thư 2k6,Hello GenZ,Hello Gen Z,youtuber gen z,Gái đẹp đại chiến bikini,đại chiến bikini,gái xinh,"
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
