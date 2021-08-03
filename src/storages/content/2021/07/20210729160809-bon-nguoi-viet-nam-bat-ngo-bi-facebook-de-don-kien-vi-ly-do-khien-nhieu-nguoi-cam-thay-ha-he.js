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
"timestamp": '29/07/2021 04:08 PM',
"title": 'Bốn người Việt Nam bất ngờ bị Facebook đệ đơn kiện vì lý do khiến nhiều người cảm thấy hả hê',
"description": 'Vào ngày 29/6 vừa qua, Facebook đưa ra thông báo kiện hai nhóm lừa đảo trực tuyến, đáng chú ý có một nhóm người Việt trong đó.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/photo-1-1625052441581230996678.jpeg',
"alt": 'FACEBOOK,MXH,MẠNG XÃ HỘI,SCAM,CỘNG ĐỒNG MẠNG,CĐM,LỪA ĐẢO,',
"category": 'news',
"date": '29/07/2021',
"time": '04:08 PM',
"link": '/bon-nguoi-viet-nam-bat-ngo-bi-facebook-de-don-kien-vi-ly-do-khien-nhieu-nguoi-cam-thay-ha-he',
"zcomponent": 'page_20210729160809',
"filepath": './20210729160809-bon-nguoi-viet-nam-bat-ngo-bi-facebook-de-don-kien-vi-ly-do-khien-nhieu-nguoi-cam-thay-ha-he.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title =
  "Bốn người Việt Nam bất ngờ bị Facebook đệ đơn kiện vì lý do khiến nhiều người cảm thấy hả hê";
const author = "Lee Chueng Hee";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:08 PM";
const description =
  "Vào ngày 29/6 vừa qua, Facebook đưa ra thông báo kiện hai nhóm lừa đảo trực tuyến, đáng chú ý có một nhóm người Việt trong đó.";
const link =
  "bon-nguoi-viet-nam-bat-ngo-bi-facebook-de-don-kien-vi-ly-do-khien-nhieu-nguoi-cam-thay-ha-he";
const tagparam = [
  "FACEBOOK",
  "MXH",
  "MẠNG XÃ HỘI",
  "SCAM",
  "CỘNG ĐỒNG MẠNG",
  "CĐM",
  "LỪA ĐẢO",
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

export default function page_20210729160809() {
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
                      Theo như <strong>Facebook</strong> thông báo thì{" "}
                      <strong>mạng xã hội</strong> lớn bậc nhất thế giới này sẽ
                      đệ đơn kiện để chống lại những nhóm{" "}
                      <strong>lừa đảo</strong> trực tuyến. Bốn người Việt bị
                      Facebook cáo buộc bao gồm N.H.Thêm, L. Khang, N.Q.Bảo và
                      P.H.Dũng. Bốn người này bị tố cáo sử dụng thủ thuật “ăn
                      trộm cookie” nhằm đột nhập vào các tài khoản của nhân viên
                      ở những đại lý quảng cáo, sau đó sử dụng để chạy quảng cáo
                      trái phép.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/photo-1-1625052441581230996678.jpeg"
                      alt="1, FACEBOOK,MXH,MẠNG XÃ HỘI,SCAM,CỘNG ĐỒNG MẠNG,CĐM,LỪA ĐẢO,"
                      note=""
                    />
                    <p>
                      Bốn đối tượng này sử dụng thủ thuật{" "}
                      <strong>lừa đảo</strong> bằng cách khiến nạn nhân của mình
                      cài đặt một app trên Android có tên Ad Manager for{" "}
                      <strong>Facebook</strong> - "Trình quản lý Quảng cáo cho
                      Facebook". App này sẽ thu thập những thông tin đăng nhập
                      của người dùng một cách trái phép, sau đó thậm chí truy
                      cập tài khoản Facebook của nạn nhân và bắt đầu tự chạy
                      quảng cáo. Ở thời điểm hiện tại, app này đã bị xóa khỏi
                      Google Play.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Đáng chú ý hơn, bốn đối tượng này còn chạy quảng cáo cho
                      ứng dụng nhằm thực hiện thủ đoạn <strong>lừa đảo</strong>{" "}
                      trực tuyến. <strong>Facebook</strong> cho biết, theo thống
                      kê của họ thì số tiền mà nạn nhân bị thiệt hại lên tới 36
                      triệu USD. <strong>Mạng xã hội</strong> lớn nhất thế giới
                      cho biết họ đã hoàn trả lại tiền cho nạn nhân và thực hiện
                      các biện pháp tăng cường bảo mật cho tài khoản của người
                      dùng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/photo-1-162505261782664234695.png"
                      alt="2, FACEBOOK,MXH,MẠNG XÃ HỘI,SCAM,CỘNG ĐỒNG MẠNG,CĐM,LỪA ĐẢO,"
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
