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
"timestamp": '29/07/2021 04:12 PM',
"title": 'Đỏ mặt với những hình ảnh khoe thân quá đà của hot girl tham gia Nóng Cùng Euro',
"description": 'Hằng Habi đang là cái tên được chú ý bởi những hình ảnh nóng bỏng quá đà của mình.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/6/2027121808496674859489985109134781483385345n-1625566481943913953278.jpeg',
"alt": 'Hằng Habi,nóng cùng euro 2020,nóng cùng euro,Euro 2020,gái xinh,',
"category": 'images',
"date": '29/07/2021',
"time": '04:12 PM',
"link": '/do-mat-voi-nhung-hinh-anh-khoe-than-qua-da-cua-hot-girl-tham-gia-nong-cung-euro',
"zcomponent": 'page_20210729161250',
"filepath": './20210729161250-do-mat-voi-nhung-hinh-anh-khoe-than-qua-da-cua-hot-girl-tham-gia-nong-cung-euro.js'
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
  "Đỏ mặt với những hình ảnh khoe thân quá đà của hot girl tham gia Nóng Cùng Euro";
const author = "NE,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "29/07/2021 04:12 PM";
const description =
  "Hằng Habi đang là cái tên được chú ý bởi những hình ảnh nóng bỏng quá đà của mình.";
const link =
  "do-mat-voi-nhung-hinh-anh-khoe-than-qua-da-cua-hot-girl-tham-gia-nong-cung-euro";
const tagparam = [
  "Hằng Habi",
  "nóng cùng euro 2020",
  "nóng cùng euro",
  "Euro 2020",
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

export default function page_20210729161250() {
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
                    Cứ mỗi kỳ Euro, ngoài những pha bóng xuất sắc trên sân, các
                    fan bóng đá Việt Nam còn vô cùng quan tâm đến dàn{" "}
                    <strong>gái xinh</strong> sẽ đại diện cho các đội bóng trong{" "}
                    <strong>
                      <strong>Nóng Cùng Euro</strong> 2020
                    </strong>
                    . Năm nay, dù chỉ phát sóng được vài tập, song, chương trình
                    đã khiến nhiều người chú ý khi quy tụ những gương mặt xinh
                    xắn như Lê Bống, Trang Tracy, hot girl võ thuật Thảo
                    Uyên,... và <strong>Hằng Habi</strong>.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Nổi tiếng với danh xưng hot girl phòng gym Hà Thành, Phạm
                    Thu Hằng - <strong>Hằng Habi</strong> (SN: 1996) bất ngờ
                    xuất hiện trong{" "}
                    <strong>
                      <strong>Nóng Cùng Euro</strong> 2020
                    </strong>{" "}
                    với vai trò đại diện cho ĐT Đức. Ngay lập tức,{" "}
                    <strong>gái xinh</strong> nhanh chóng được chú ý bởi vẻ
                    ngoài xinh xắn cùng số đo 3 vòng khủng: 88-62-91.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/6/hot-girl-nong-cung-euro-dot-mat-netizen-bang-body-sieu-nong-bong-1625568453512566491723.jpeg"
                    alt="1, Hằng Habi,nóng cùng euro 2020,nóng cùng euro,Euro 2020,gái xinh,"
                    note="Hằng Habi - gái xinh được chú ý trong NÓNG CÙNG EURO"
                  />
                  <p>Cô nàng đại diện cho đội tuyển Đức</p>
                  <p>
                    Trước khi có được thân hình phồn thực như hiện tại, cô nàng
                    từng vô cùng tự ti bởi vẻ ngoài gầy còm của mình. Sau đó,
                    nhờ chăm chỉ tập luyện, <strong>Hằng Habi</strong> dần lột
                    xác, trở nên xinh xắn và đầy đặn hơn hẳn.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/6/2041471998496675092823299170070070748152226n-16255664819501511784760.jpeg"
                    alt="2, Hằng Habi,nóng cùng euro 2020,nóng cùng euro,Euro 2020,gái xinh,"
                    note="Những bức ảnh thiếu vải khiến nhiều người phải đỏ mặt của cô nàng"
                  />
                  <p>
                    <strong>Hằng Habi</strong> sở hữu số đo 3 vòng khủng
                  </p>
                  <p>
                    Hiện tại đang là một người mẫu ảnh tự do,{" "}
                    <strong>Hằng Habi</strong> thường xuyên đăng tải những tấm
                    ảnh sexy trên MXH. Trong số đó, có cả những bức hình nóng
                    bỏng quá đà khiến nhiều người phải đỏ mặt khi trông thấy. Cô
                    nàng cũng vấp phải vô số những ý kiến trái chiều vì hình ảnh
                    hở hang, thiếu vải của mình trên cõi mạng. Song, Hằng Habi
                    chọn cách không quan tâm trước những bình luận này.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/6/2027121808496674859489985109134781483385345n-1625566481943913953278.jpeg"
                    alt="3, Hằng Habi,nóng cùng euro 2020,nóng cùng euro,Euro 2020,gái xinh,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/6/1761313187535310021915597881042113975719002n-16255668733771827429777.jpg"
                    alt="4, Hằng Habi,nóng cùng euro 2020,nóng cùng euro,Euro 2020,gái xinh,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/6/19222004428819940521122153490299117967604295n-16255668733281100891448.jpg"
                    alt="5, Hằng Habi,nóng cùng euro 2020,nóng cùng euro,Euro 2020,gái xinh,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/6/1670118227948523780971767278355314212104825n-16255686459811492986610-1625568752296280331637.jpeg"
                    alt="6, Hằng Habi,nóng cùng euro 2020,nóng cùng euro,Euro 2020,gái xinh,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/6/base64-16255686118431666212218.png"
                    alt="7, Hằng Habi,nóng cùng euro 2020,nóng cùng euro,Euro 2020,gái xinh,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/6/base64-16255686118431666212218.png"
                    alt="8, Hằng Habi,nóng cùng euro 2020,nóng cùng euro,Euro 2020,gái xinh,"
                    note=""
                  />
                  <p>Ảnh: Tổng hợp</p>
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
