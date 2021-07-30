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
"timestamp": '29/07/2021 04:06 PM',
"title": 'Giải mã: Tại sao nhiều khách sạn lại lắp phòng tắm kính trong suốt?',
"description": 'Thiết kế này chắc chắn được các cặp đôi ưa thích. Tuy nhiên, những lí do khác cũng vô cùng thuyết phục.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/k2-16266627360011266503501.jpeg',
"alt": 'khách sạn,kính trong suốt,phòng tắm,phòng tắm khách sạn,Hổng ngờ luôn á!,',
"category": 'life',
"date": '29/07/2021',
"time": '04:06 PM',
"link": '/giai-ma-tai-sao-nhieu-khach-san-lai-lap-phong-tam-kinh-trong-suot',
"zcomponent": 'page_20210729160657',
"filepath": './20210729160657-giai-ma-tai-sao-nhieu-khach-san-lai-lap-phong-tam-kinh-trong-suot.js'
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
  "Giải mã: Tại sao nhiều khách sạn lại lắp phòng tắm kính trong suốt?";
const author = "TIÊN YÊN,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "29/07/2021 04:06 PM";
const description =
  "Thiết kế này chắc chắn được các cặp đôi ưa thích. Tuy nhiên, những lí do khác cũng vô cùng thuyết phục.";
const link =
  "giai-ma-tai-sao-nhieu-khach-san-lai-lap-phong-tam-kinh-trong-suot";
const tagparam = [
  "khách sạn",
  "kính trong suốt",
  "phòng tắm",
  "phòng tắm khách sạn",
  "Hổng ngờ luôn á!",
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

export default function page_20210729160657() {
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
                  <h5>1. Tạo cảm giác rộng rãi</h5>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/k2-16266627360011266503501.jpeg"
                    alt="1, khách sạn,kính trong suốt,phòng tắm,phòng tắm khách sạn,Hổng ngờ luôn á!,"
                    note=""
                  />
                  <p>
                    Khi bước vào một căn phòng dù ở nhà nghỉ bình dân hay{" "}
                    <strong>khách sạn</strong> cao cấp, nếu{" "}
                    <strong>phòng tắm</strong> được lắp{" "}
                    <strong>kính trong suốt</strong>, chắc chắn ấn tượng đầu
                    tiên hẳn là căn phòng này thật rộng và sạch sẽ. Bởi đó chính
                    là hiệu ứng thị giác mà phòng tắm kính trong suốt này mang
                    lại.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Hơn nữa, trên thực tế, để tối đa hóa hiệu quả sử dụng diện
                    tích của cả tòa nhà, các <strong>khách sạn</strong> lựa chọn
                    làm <strong>phòng tắm</strong> trong suốt để vừa cắt giảm
                    diện tích căn phòng càng nhiều càng tốt, vừa đảm bảo được sự
                    thoải mái cho khách hàng. Xây tường gạch truyền thống chắc
                    chắn tốn ít không gian hơn so với vách kính rồi.
                  </p>
                  <h5>2. Tiết kiệm năng lượng khá hiệu quả</h5>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/k3-1626662736085146408564.jpeg"
                    alt="2, khách sạn,kính trong suốt,phòng tắm,phòng tắm khách sạn,Hổng ngờ luôn á!,"
                    note=""
                  />
                  <p>
                    Ánh sáng ban ngày chiếu vào kính <strong>phòng tắm</strong>{" "}
                    phản xạ lại và có thể giúp căn phòng trở nên sáng sủa mà
                    không cần đến bóng đèn điện. Lắp phòng tắm bằng{" "}
                    <strong>kính trong suốt</strong> vừa hiện đại, sang trọng
                    hơn mà lại giúp tận dụng ánh nắng mặt trời, tiết kiệm năng
                    lượng. Khách hàng không sử dụng tới đèn điện, phải chăng{" "}
                    <strong>khách sạn</strong> đã đỡ tốn một khoản chi phí cho
                    hóa đơn tiền điện đó hay sao?
                  </p>
                  <h5>3. Đảm bảo an toàn</h5>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/k3-1626662736085146408564.jpeg"
                    alt="3, khách sạn,kính trong suốt,phòng tắm,phòng tắm khách sạn,Hổng ngờ luôn á!,"
                    note=""
                  />
                  <p>
                    Theo Trey Echo - một cựu nhân viên của tập đoàn du lịch GM
                    PA Hà Lan chia sẻ, rất nhiều khách tới thuê{" "}
                    <strong>khách sạn</strong> một mình, và một trong số đó
                    thường là các doanh nhân. Khi vào <strong>phòng tắm</strong>
                    , họ có không gian riêng, cách biệt với thế giới bên ngoài.
                    Tiếng nước chảy rất ồn, át đi mọi âm thanh khác, tăng thêm
                    phần cách biệt.
                  </p>
                  <p>
                    Tuy nhiên, nếu ai đó có ý đồ xấu, lợi dụng lúc họ đang đi
                    tắm thì tất nhiên họ không thể biết được. Ở trong{" "}
                    <strong>phòng tắm</strong> <strong>kính trong suốt</strong>,
                    ít nhất bạn cũng có thể có thêm thời gian để nhận biết tình
                    hình và biết đâu thoát khỏi tình huống xấu.
                  </p>
                  <p>
                    Tất nhiên, riêng tư thì vẫn có riêng tư, khách hàng vẫn có
                    thể kéo rèm khi tắm mà.
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
