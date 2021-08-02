import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 07/06/2021 06:33 PM",
"title": Văn Toàn được đồng đội cõng lên xe trở về khách sạn sau trận thắng Indonesia",
"description": Hình ảnh Văn Toàn được Văn Toản cõng lên xe buýt của đội tuyển Việt Nam sau trận thắng Indonesia đang khiến fan vô cùng lo lắng.",
"src": ",
"alt": Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Tuyen Viet Nam, Van Toan, Cong Phuong, ",
"category": news",
"date": 07/06/2021",
"time": 06:33 PM",
"link": "/van-toan-duoc-dong-doi-cong-len-xe-tro-ve-khach-san-sau-tran-thang-indonesia",
"zcomponent": page_20210607183313",
"filepath": ./20210607183313-van-toan-duoc-dong-doi-cong-len-xe-tro-ve-khach-san-sau-tran-thang-indonesia.js"
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
  "Văn Toàn được đồng đội cõng lên xe trở về khách sạn sau trận thắng Indonesia";
const author = "ANDY PARK,";
const source = "Nhịp sống Việt";
const timestamp = "07/06/2021 06:33 PM";
const description =
  "Hình ảnh Văn Toàn được Văn Toản cõng lên xe buýt của đội tuyển Việt Nam sau trận thắng Indonesia đang khiến fan vô cùng lo lắng.";
const link =
  "van-toan-duoc-dong-doi-cong-len-xe-tro-ve-khach-san-sau-tran-thang-indonesia";
const tagparam = [
  "tuyen-viet-nam-tham-du-vong-loai-world-cup-2022",
  "tuyen-viet-nam",
  "van-toan",
  "cong-phuong",
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

export default function page_20210607183313() {
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
                    Theo thông tin từ CLB HAGL, tiền đạo Nguyễn Văn Toàn đã bị
                    đau do pha va cham trong tình huống gần cuối hiệp 1 trận
                    Việt Nam gặp Indonesia. Văn Toàn bứt tốc, tiếp cận khung
                    thành Indonesia nhưng cầu thủ số 4 đối phương đã lạo tới húc
                    ngang khiến Văn Toàn ngã lăn. Anh vẫn có thể tiếp tục thi
                    đấu nhưng được thay ra khi hiệp 1 kết thúc. Hiệp 2, Công
                    Phượng vào thay Văn Toàn.
                  </p>
                  <p>
                    Sau trận, Văn Toàn không thể tự di chuyển, anh được Văn Toản
                    cõng lên xe buýt trở về khách sạn. Các cầu thủ được yêu cầu
                    không tắm tại phòng thay đồ sân thi đấu nên họ nhanh chóng
                    thay trang phục rồi lên xe trở về.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-1-1623097159194116242689.jpg"
                    alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Tuyen Viet Nam, Van Toan, Cong Phuong, "
                    note="Văn Toàn được Văn Toản cõng lên xe buýt sau trận (Ảnh: TT)"
                  />
                  <p>
                    Ngay khi hình ảnh Văn Toản cõng Văn Toàn được đăng tải,
                    nhiều người hâm mộ bày tỏ sự lo lắng cho cầu thủ sinh năm
                    1996. Văn Toàn đang có 1 phong độ ổn định khi thi đấu cho
                    HAGL. Lên đội tuyển, anh được HLV Park Hang-seo điền tên
                    trong đội hình thi đấu chính thức ngay từ hiệp 1 trận gặp
                    Indonesia và có nhiều tình huống nguy hiểm. Hiện chưa rõ
                    tình trạng sức khỏe của Văn Toàn.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-1-16230971599242090655739.jpg"
                    alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Tuyen Viet Nam, Van Toan, Cong Phuong, "
                    note=""
                  />
                  <p>
                    Ở trận đấu đêm 7/6, đội tuyển Việt Nam đã giành chiến thắng
                    chung cuộc 4-0 trước Indonesia. Những cầu thủ ghi bàn lần
                    lượt là Tiến Linh, Quang Hải, Công Phượng, Văn Thanh. Đội
                    tuyển sẽ nghỉ ngơi 1 ngày sau đó tiếp tục chuẩn bị cho trận
                    tới gặp Malaysia ngày 11/6.
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
