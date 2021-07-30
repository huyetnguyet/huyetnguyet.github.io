import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 07/06/2021 06:38 PM",
"title": Chứng kiến cầu thủ Indonesia liên tục vào bóng triệt hạ, 'Nam vương' boxing Trương Đình Hoàng hiến kế cho thầy trò HLV Park Hang-seo",
"description": Nhà vô địch WBA châu Á Trương Đình Hoàng muốn các cầu thủ của tuyển Việt Nam học qua một khóa boxing để không còn ngại những đối thủ chơi bóng thô bạo.",
"src": ",
"alt": Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Vong Loai World Cup 2022, Tuyen Viet Nam, ",
"category": news",
"date": 07/06/2021",
"time": 06:38 PM",
"link": "/chung-kien-cau-thu-indonesia-lien-tuc-vao-bong-triet-ha-nam-vuong-boxing-truong-dinh-hoang-hien-ke-cho-thay-tro-hlv-park-hang-seo",
"zcomponent": page_20210607183844",
"filepath": ./20210607183844-chung-kien-cau-thu-indonesia-lien-tuc-vao-bong-triet-ha-nam-vuong-boxing-truong-dinh-hoang-hien-ke-cho-thay-tro-hlv-park-hang-seo.js"
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
  "Chứng kiến cầu thủ Indonesia liên tục vào bóng triệt hạ, 'Nam vương' boxing Trương Đình Hoàng hiến kế cho thầy trò HLV Park Hang-seo";
const author = "TOP,";
const source = "Trí Thức Trẻ";
const timestamp = "07/06/2021 06:38 PM";
const description =
  "Nhà vô địch WBA châu Á Trương Đình Hoàng muốn các cầu thủ của tuyển Việt Nam học qua một khóa boxing để không còn ngại những đối thủ chơi bóng thô bạo.";
const link =
  "chung-kien-cau-thu-indonesia-lien-tuc-vao-bong-triet-ha-nam-vuong-boxing-truong-dinh-hoang-hien-ke-cho-thay-tro-hlv-park-hang-seo";
const tagparam = [
  "tuyen-viet-nam-tham-du-vong-loai-world-cup-2022",
  "vong-loai-world-cup-2022",
  "tuyen-viet-nam",
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

export default function page_20210607183844() {
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
                <div className="contentBody">
                  <p>
                    Trong màn so tài diễn ra vào đêm ngày 7/6, các học trò của
                    HLV Park Hang-seo đã liên tục phải nhận những pha vào bóng
                    ác ý tới từ cầu thủ bên phía Indonesia. Một trong những tình
                    huống này đã khiến tiền vệ Tuấn Anh phải nằm sân ở phút 22
                    trước khi được thay ra không lâu sau đó.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-1-16230975810571700345349.jpg"
                    alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Vong Loai World Cup 2022, Tuyen Viet Nam, "
                    note="Pha phạm lỗi nguy hiểm của cầu thủ đội bạn khiến Tuấn Anh nằm sân. Ảnh: Hiếu Lương"
                  />
                  <p>
                    Lối đá thô bạo của đội bóng xứ vạn đảo khiến người hâm mộ
                    Việt Nam không khỏi bức xúc. Cách đây ít giờ, nhà vô địch
                    WBA châu Á Trương Đình Hoàng đã khiến nhiều fan bật cười khi
                    hiến kế cho Quang Hải và đồng đội cách để tự tin hơn trong
                    trường hợp phải đối đầu cùng những đối thủ như Indonesia.
                  </p>
                  <p>
                    "Bữa sau về tập 1 khóa Boxing để đá cho tự tin anh em ạ. Mấy
                    chú Indo tập Pencak Silat chuyển qua thì phải", tay đấm 31
                    tuổi viết trên trang cá nhân. Lời chia sẻ của Trương Đình
                    Hoàng được cộng đồng mạng thả tim tích cực sau đó.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-1-16230975822461769638760.png"
                    alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Vong Loai World Cup 2022, Tuyen Viet Nam, "
                    note="Bài đăng trên trang cá nhân của nhà vô địch boxing châu Á Trương Đình Hoàng. Ảnh chụp màn hình"
                  />
                  <p>
                    Trở lại với trận đấu, lối đá tiêu cực cũng chỉ giúp
                    Indonesia trụ vững sau 45 phút đầu tiên. Sang hiệp 2, các
                    cầu thủ của chúng ta đã thi đấu thăng hoa với những bàn
                    thắng liên tiếp. Đầu tiên là bàn thắng mở tỷ số của tiền đạo
                    Tiến Linh ở phút thứ 51.
                  </p>
                  <p>
                    Tiếp đó, lần lượt Quang Hải, Công Phượng và Văn Thanh ghi
                    tên lên bảng tỷ số ấn định chiến thắng 4-0 cho tuyển Việt
                    Nam. Với kết quả này, chúng ta giữ vững ngôi đầu với 14 điểm
                    qua 6 trận đấu.
                  </p>
                  <p>
                    Vào 23h45 ngày 11/7, tuyển Việt Nam sẽ có trận gặp đối thủ
                    cạnh tranh trực tiếp Malaysia.
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
