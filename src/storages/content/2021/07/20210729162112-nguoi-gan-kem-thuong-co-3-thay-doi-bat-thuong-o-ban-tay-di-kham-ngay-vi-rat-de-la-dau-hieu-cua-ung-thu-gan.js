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
"timestamp": '29/07/2021 04:21 PM',
"title": 'Người gan kém thường có 3 thay đổi bất thường ở bàn tay, đi khám ngay vì rất dễ là dấu hiệu của ung thư gan',
"description": 'Ung thư gan có thể nhen nhóm xuất hiện trong cơ thể bạn bất cứ lúc nào và ngay khi thấy 3 hiện tượng ở bàn tay dưới đây là lúc bạn cần đi kiểm tra gan ngay.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/20/photo-1-16267430533472025884574.jpg',
"alt": 'thay đổi bất thường,mu bàn tay,tế bào gan,',
"category": 'life',
"date": '29/07/2021',
"time": '04:21 PM',
"link": '/nguoi-gan-kem-thuong-co-3-thay-doi-bat-thuong-o-ban-tay-di-kham-ngay-vi-rat-de-la-dau-hieu-cua-ung-thu-gan',
"zcomponent": 'page_20210729162112',
"filepath": './20210729162112-nguoi-gan-kem-thuong-co-3-thay-doi-bat-thuong-o-ban-tay-di-kham-ngay-vi-rat-de-la-dau-hieu-cua-ung-thu-gan.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "life";
const categoryLink = "/life";
const title =
  "Người gan kém thường có 3 thay đổi bất thường ở bàn tay, đi khám ngay vì rất dễ là dấu hiệu của ung thư gan";
const author = "SƠ RI,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "29/07/2021 04:21 PM";
const description =
  "Ung thư gan có thể nhen nhóm xuất hiện trong cơ thể bạn bất cứ lúc nào và ngay khi thấy 3 hiện tượng ở bàn tay dưới đây là lúc bạn cần đi kiểm tra gan ngay.";
const link =
  "nguoi-gan-kem-thuong-co-3-thay-doi-bat-thuong-o-ban-tay-di-kham-ngay-vi-rat-de-la-dau-hieu-cua-ung-thu-gan";
const tagparam = ["thay đổi bất thường", "mu bàn tay", "tế bào gan"];
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

export default function page_20210729162112() {
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
                    Ung thư gan là một trong những căn bệnh rất phổ biến ngày
                    nay và tỷ lệ người mắc bệnh đang ngày càng tăng cao. Nếu bạn
                    không chủ động phát hiện ra bệnh từ sớm thì khả năng chữa
                    khỏi bệnh sẽ giảm xuống. Vậy nên, ngay khi thấy có 3 hiện
                    tượng xuất hiện ở lòng bàn tay dưới đây thì bạn nên chủ động
                    đi kiểm tra gan ngay.
                    <RelationNewsInPage category={category} />
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/20/photo-1-16267430533472025884574.jpg"
                    alt="1, thay đổi bất thường,mu bàn tay,tế bào gan,"
                    note=""
                  />
                  <p>
                    Nếu trên <strong>mu bàn tay</strong> lộ ra những đường gân
                    xanh rõ rệt thì điều này cho thấy gan và túi mật hoạt động
                    không tốt. Điều này khiến bạn thường dễ sinh ra nóng giận,
                    cáu gắt. Vậy nên, bạn đừng chủ quan khi thấy mu bàn tay nổi
                    gân xanh thường xuyên nhé!
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/20/photo-1-16267431040531096335686.jpg"
                    alt="2, thay đổi bất thường,mu bàn tay,tế bào gan,"
                    note=""
                  />
                  <p>
                    Các vết mẩn đỏ xuất hiện trên lòng bàn tay và các đầu ngón
                    tay cũng là một dấu hiệu rõ rệt của bệnh về gan. Khi bạn ấn
                    mạnh vào thì màu đỏ sẽ mờ dần nhưng chỉ một lúc sau là lại
                    trở về màu đỏ như cũ. Đây là biểu hiện của các bệnh như viêm
                    gan, xơ gan cấp và mãn tính hay thậm chí còn là dấu hiệu của
                    ung thư gan. Do đó, bạn đừng chủ quan khi thấy hiện tượng
                    này xuất hiện trên lòng bàn tay của mình.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/20/photo-1-1626743126302229050729.jpg"
                    alt="3, thay đổi bất thường,mu bàn tay,tế bào gan,"
                    note=""
                  />
                  <p>
                    Móng tay có sọc nâu là dấu hiệu <strong>tế bào gan</strong>{" "}
                    đang bị tổn thương. Nếu bạn bị viêm gan thì các tế bào gan
                    sẽ sưng to, sâu, hoại tử và làm xuất hiện triệu chứng sọc
                    nâu trên móng tay. Sau khi đã điều trị khỏi bệnh gan thì
                    triệu chứng này sẽ được cải thiện rõ rệt.
                  </p>
                  <p>Nguồn và ảnh: Sohu, Healthline</p>
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
