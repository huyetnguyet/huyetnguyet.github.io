import React from "react";
import "../../components/page.css";
import { AdsHorizontal, AdsVertical } from "../../components/adsMethods";
import { RandomFeature } from "../../components/methods";

import {
  Content,
  ContentImage,
  FacebookShareButton,
} from "../../components/content";

/* Data Input */
/*

 <ContentItem
title="Hợp tác hãng xe McLaren, PUBG Mobile tung event hấp dẫn, siêu tốc bậc nhất làng game tháng 6"
content="Có thể nói cơ hội trải nghiệm siêu xe McLaren ngoài đời chưa bao giờ dễ đến thế đối với cộng đồng game thủ PUBG Mobile trong mùa hè này."
src="https://channel.mediacdn.vn/thumb_w/640/2021/6/2/photo-1-1622618650933658080991.jpg"
alt="PUBG Mobile"
types="games"
time="02/06/2021 03:30 PM"
link="/hop-tac-hang-xe-mclaren-pubg-mobile-tung-event-hap-dan-sieu-toc-bac-nhat-lang-game-thang-6"
/>

*/
/* ---------------------------------------------------------------- */

const category = "games";
const categoryLink = "/games";

const title =
  "Hợp tác hãng xe McLaren, PUBG Mobile tung event hấp dẫn, siêu tốc bậc nhất làng game tháng 6";
const author = "A.D";
const source = "Trí Thức Trẻ";
const date = "02/06/2021";
const time = "03:30 PM";
const description =
  "Có thể nói cơ hội trải nghiệm siêu xe McLaren ngoài đời chưa bao giờ dễ đến thế đối với cộng đồng game thủ PUBG Mobile trong mùa hè này.";
const link =
  "hop-tac-hang-xe-mclaren-pubg-mobile-tung-event-hap-dan-sieu-toc-bac-nhat-lang-game-thang-6";

const tags = ["PUBG MOBILE", "GAME"];

/* ---------------------------------------------------------------- */

/* 
<ContentImage
src=""
alt=""
note=""
/>
                  */

const facebookLinkShare =
  "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fhuyetnguyet.com%2F" +
  link +
  "&layout=button_count&size=small&width=77&height=20&appId";

const updatedTags = tags.map((tag) => {
  const link =
    "https://www.google.com/search?q=huyetnguyet+" + tag.replace(" ", "+");
  return (
    <a href={link} className="tag">
      {tag}
    </a>
  );
});

export default function Templates() {
  return (
    <>
      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              >
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
              <div className="author">{author}</div> - Theo {source} | {date} -
              {time}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <div className="contentBody">
                  <p>
                    Mới đây, làng game thế giới đã đón nhận một tin tức vô cùng
                    sốt dẻo, khi PUBG Mobile tiếp tục công bố thương vụ hợp tác
                    đình đám tiếp theo của mình. Sau bom tấn điện ảnh "Godzilla
                    vs Kong" thì hãng xe McLaren sẽ là cái tên tiếp theo sát
                    cánh cùng tựa game sinh tồn số một thế giới này kể từ ngày
                    01/06. Được biết, tổng cộng sẽ có 19,999 siêu xe McLaren
                    được mở bán trong PUBG Mobile trên toàn cầu, với 6 mẫu thiết
                    kế xe mang màu sắc và hiệu ứng riêng biệt.
                  </p>
                  <ContentImage
                    src="https://channel.mediacdn.vn/thumb_w/640/2021/6/2/photo-1-1622618642854899203721.jpg"
                    alt="PUBG MOBILE"
                    note=""
                  />
                  <p>
                    Để chào mừng việc hợp tác này, PUBG Mobile Việt Nam cũng đã
                    triển khai các hoạt động vô cùng thú vị dành cho các bạn
                    game thủ. Đó là event "Đi tìm Trùm siêu xe - người Việt Nam
                    đầu tiên sở hữu trọn bộ skin McLaren hoặc "Tìm người nhanh
                    tay, tinh mắt tìm ra Trùm siêu xe", với thời gian bắt đầu từ
                    00:00 ngày 01/06 cho tới 23:59 ngày 03/06. Được biết, các
                    bạn chỉ cần comment tại đây theo cú pháp cũng vô cùng đơn
                    giản như sau:
                  </p>
                  <p>
                    - Nếu bạn là "Trùm siêu xe" mà mọi người đang tìm kiếm,
                    người sở hữu trọn bộ skin McLaren nhanh nhất thì hãy
                    comment:
                  </p>
                  <p>
                    #TRUMSIEUXEPUBGM + Role ID của bạn + Ảnh chụp chứng minh kho
                    đồ của bạn với trọn bộ 6 skin xe McLaren
                  </p>
                  <p>
                    - Nếu bạn nhanh tay, tinh mắt tìm ra "Trùm siêu xe" thì
                    comment rằng:
                  </p>
                  <p>
                    #TRUMSIEUXEPUBGM + Role ID của bạn + Tên ingame hoặc Role ID
                    của "Trùm siêu xe"
                  </p>
                  <ContentImage
                    src="https://channel.mediacdn.vn/thumb_w/640/2021/6/2/photo-1-1622618650933658080991.jpg"
                    alt="PUBG MOBILE"
                    note=""
                  />
                  <p>
                    Ngoài ra, phần thưởng dành cho sự kiện này cũng vô cùng hấp
                    dẫn, khi những người thắng cuộc sẽ có cơ hội nhận được các
                    phần quà như sau:
                  </p>
                  <p>
                    - 01 suất trải nghiệm xe McLaren ngoài đời thật và xuất hiện
                    trong video McLaren sang-xịn-mịn từ PUBG MOBILE
                  </p>
                  <p>
                    - 01 tai nghe Airpods Max - thiết bị giúp trải nghiệm tiếng
                    động cơ siêu xe trong game thêm phần sống động và chân thật
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
