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
"timestamp": '02/08/2021 01:22 AM',
"title": 'Khai thật đi! Bạn đã từng đập chuột, bàn phím vì các nhiệm vụ huyền thoại, khó đến mức “phát điên” này chưa?',
"description": 'Có lẽ trong series GTA thì đây xứng đáng là chuỗi nhiệm vụ khó bậc nhất khiến người chơi vô cùng ức chế.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/photo-1-1627836247715331530341.jpg',
"alt": 'GTA,GTA VICE CITY,GTA SAN ANDREAS,TIN TỨC GAME,DEMOLITION MAN,',
"category": 'games',
"date": '02/08/2021',
"time": '01:22 AM',
"link": '/khai-that-di-ban-da-tung-dap-chuot-ban-phim-vi-cac-nhiem-vu-huyen-thoai-kho-den-muc-phat-dien-nay-chua',
"zcomponent": 'page_20210802012229',
"filepath": './20210802012229-khai-that-di-ban-da-tung-dap-chuot-ban-phim-vi-cac-nhiem-vu-huyen-thoai-kho-den-muc-phat-dien-nay-chua.js'
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
const title =
  "Khai thật đi! Bạn đã từng đập chuột, bàn phím vì các nhiệm vụ huyền thoại, khó đến mức “phát điên” này chưa?";
const author = "Lee Chueng Hee";
const source = "Pháp luật và bạn đọc";
const timestamp = "02/08/2021 01:22 AM";
const description =
  "Có lẽ trong series GTA thì đây xứng đáng là chuỗi nhiệm vụ khó bậc nhất khiến người chơi vô cùng ức chế.";
const link =
  "khai-that-di-ban-da-tung-dap-chuot-ban-phim-vi-cac-nhiem-vu-huyen-thoai-kho-den-muc-phat-dien-nay-chua";
const tagparam = [
  "GTA",
  "GTA VICE CITY",
  "GTA SAN ANDREAS",
  "TIN TỨC GAME",
  "DEMOLITION MAN",
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

export default function page_20210802012229() {
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
                      <strong>GTA</strong> là một trong những thương hiệu game
                      hay nhất trên thế giới, trải dài hơn một chục trò chơi
                      trên cả PC, Console và sau này là Mobile. Và trong suốt
                      chiều dài lịch sử của tựa game này, có không ít các nhiệm
                      vụ khiến người chơi cáu đến mức “phát điên”. Hãy cùng điểm
                      lại một vài nhiệm vụ huyền thoại trong series GTA nhé.
                    </p>
                    <h5>
                      Death Row (<strong>GTA</strong> Vice City)
                    </h5>
                    <p>
                      Phần khó nhất của nhiệm vụ này có lẽ là bộ đếm thời gian -
                      bạn cần phải nhanh chóng đến bãi phế liệu trước khi Lance
                      chết. Toàn bộ khu vực chứa đầy thử thách để làm chậm người
                      chơi và máu của Lance thì cứ tiếp tục giảm. Sau khi ra
                      khỏi khu vực, bạn sẽ bị truy đuổi bởi nhiều kẻ địch hơn
                      nữa. Nhiệm vụ của người chơi là lái xe nhanh nhất có thể
                      để đưa Lance đến bệnh viện, đồng thời đối phó với những kẻ
                      truy đuổi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/photo-1-1627836247715331530341.jpg"
                      alt="1, GTA,GTA VICE CITY,GTA SAN ANDREAS,TIN TỨC GAME,DEMOLITION MAN,"
                      note=""
                    />
                    <p>
                      Hầu hết game thủ dành quá nhiều thời gian trong bãi phế
                      liệu, khiến cho Lance chết trên đường đến bệnh viện.
                    </p>
                    <h5>
                      Flight School/ Learning to fly (<strong>GTA</strong> San
                      Andreas)
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/photo-1-1627836254962786422459.jpg"
                      alt="2, GTA,GTA VICE CITY,GTA SAN ANDREAS,TIN TỨC GAME,DEMOLITION MAN,"
                      note=""
                    />
                    <p>
                      Học bay là một chuỗi nhiệm vụ khủng khiếp trong{" "}
                      <strong>GTA</strong> San Andreas Điều khiến nhiệm vụ này
                      trở thành một trong những nhiệm vụ khó nhất trong series
                      GTA thực sự là việc điều khiển - các phương tiện bay trên
                      không của GTA SA được xem là siêu khó. Đa số người chơi sẽ
                      không thể hoàn thành việc bay qua các vòng theo yêu cầu
                      của người chơi và thường sẽ phải “yêu lại từ đầu”.
                    </p>
                    <h5>
                      SAM (<strong>GTA</strong> III)
                    </h5>
                    <RelationNewsInPage category={category} />
                    <p>
                      SAM hay còn gọi là 'Surface To Air Missile', được cho là
                      một trong những nhiệm vụ khó khăn nhất trong series{" "}
                      <strong>GTA</strong>. Trong nhiệm vụ này, Claude cần thu
                      hồi một vài kiện hàng trên máy bay hạ cánh ở sân bay. Phần
                      khó của việc này là bạn cần nhắm mục tiêu phóng tên lửa
                      của mình vào đúng thời điểm máy bay hạ cánh trên đường
                      băng. Nếu bạn bỏ lỡ, nhiệm vụ không thành công và bạn cần
                      phải làm lại.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/photo-1-16278362637451975293799.jpg"
                      alt="3, GTA,GTA VICE CITY,GTA SAN ANDREAS,TIN TỨC GAME,DEMOLITION MAN,"
                      note=""
                    />
                    <p>
                      Sau khi bắn rơi máy bay, bước tiếp theo là thu thập các
                      kiện hàng trên đường băng ... đồng thời xử lý kẻ đang cản
                      trở bạn. Nhìn chung, đây là một nhiệm vụ không mấy vui vẻ
                      gì cho lắm.
                    </p>
                    <h5>
                      <strong>Demolition Man</strong> (<strong>GTA</strong> Vice
                      City)
                    </h5>
                    <p>
                      Nhiệm vụ này yêu cầu game thủ dùng máy bay để cài bom và
                      phá huỷ một toà nhà đang xây dựng. Vì đây là nhiệm vụ yêu
                      cầu độ khó cao, bạn phải chạy đến chiếc Top Fun để bắt đầu
                      công việc. Thực hiện: Đầu tiên hãy nhặt những trái bom,
                      sau đó thả vào từng cái thùng trên mỗi tầng. Ngoài ra, còn
                      phải tiêu diệt bọn bảo vệ bằng cách dùng cánh quạt của máy
                      bay tấn công chúng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/photo-1-16278362691421878658058.jpg"
                      alt="4, GTA,GTA VICE CITY,GTA SAN ANDREAS,TIN TỨC GAME,DEMOLITION MAN,"
                      note=""
                    />
                    <p>
                      Nghe thì tưởng chừng thật đơn giản, song điều khiển chiếc
                      trực thăng bay lên hạ xuống còn khó chứ đừng nói là giữ
                      thăng bằng, "quắp" bom, rồi thả vào từng vị trí chỉ định
                      trên bản đồ, chưa kể là còn vô số kẻ thù luôn sẵn sàng khí
                      tài để tiêu diệt bạn. Nhiệm vụ này được nhiều game thủ
                      đánh giá là khó bậc nhất trong Vice City cũng như trong
                      lịch sử game thế giới bởi độ ức chế mà nó đem lại.
                    </p>
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
