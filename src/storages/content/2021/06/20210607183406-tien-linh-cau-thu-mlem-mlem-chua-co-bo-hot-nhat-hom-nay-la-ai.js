import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 07/06/2021 06:34 PM",
"title": TIẾN LINH - Cầu thủ 'mlem mlem' chưa có bồ hot nhất hôm nay là ai?",
"description": Với pha ghi bàn mở màn cho đội tuyển Việt Nam, cái tên Tiến Linh đang chiếm trọn spotlight trên MXH.",
"src": https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/anh-chup-man-hinh-2021-06-08-luc-005815-16230888291721087952933.png",
"alt": Cau Thu Dep Trai, Doi Tuyen Viet Nam, Tien Linh, Tien Linh Ghi Ban, Tien Linh Ghi Man Mo Man, Viet Nam Vs Indonesia, Viet Nam Vs Indonesia Tai Vong Loai World Cup, Viet Nam Vs Indonesia Vong Loai World Cup 2022, ",
"category": news",
"date": 07/06/2021",
"time": 06:34 PM",
"link": "/tien-linh-cau-thu-mlem-mlem-chua-co-bo-hot-nhat-hom-nay-la-ai",
"zcomponent": page_20210607183406",
"filepath": ./20210607183406-tien-linh-cau-thu-mlem-mlem-chua-co-bo-hot-nhat-hom-nay-la-ai.js"
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
  "TIẾN LINH - Cầu thủ 'mlem mlem' chưa có bồ hot nhất hôm nay là ai?";
const author = "THẾ HUÂN,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "07/06/2021 06:34 PM";
const description =
  "Với pha ghi bàn mở màn cho đội tuyển Việt Nam, cái tên Tiến Linh đang chiếm trọn spotlight trên MXH.";
const link = "tien-linh-cau-thu-mlem-mlem-chua-co-bo-hot-nhat-hom-nay-la-ai";
const tagparam = [
  "cau-thu-dep-trai",
  "doi-tuyen-viet-nam",
  "tien-linh",
  "tien-linh-ghi-ban",
  "tien-linh-ghi-man-mo-man",
  "viet-nam-vs-indonesia",
  "viet-nam-vs-indonesia-tai-vong-loai-world-cup",
  "viet-nam-vs-indonesia-vong-loai-world-cup-2022",
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

export default function page_20210607183406() {
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
                    Sau hiệp 1 đầy ức chế khi đội tuyển Indonesia liên tục "chơi
                    xấu", có những pha bóng thô bạo với đội tuyển Việt Nam ở
                    vòng loại thứ 2 World Cup khu vực Châu Á đang diễn ra trên
                    sân Al Maktoum ở Dubai, UAE. Vừa bước vào hiệp 2, cầu thủ
                    Tiến Linh đã nả phát đạn "VÀOOOOO" - ghi bàn mở tỷ số cho
                    đội tuyển Việt Nam ngay ở những phút đầu tiên của hiệp 2.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/anh-chup-man-hinh-2021-06-08-luc-005815-16230888291721087952933.png"
                    alt="Cau Thu Dep Trai, Doi Tuyen Viet Nam, Tien Linh, Tien Linh Ghi Ban, Tien Linh Ghi Man Mo Man, Viet Nam Vs Indonesia, Viet Nam Vs Indonesia Tai Vong Loai World Cup, Viet Nam Vs Indonesia Vong Loai World Cup 2022, "
                    note=""
                  />
                  <p>
                    Có thể nói tính đến thời điểm hiện tại, Tiến Linh chính là
                    cầu thủ đẹp trai nhất của đội tuyển Việt Nam trong trận đối
                    đầu với đội tuyển Indonesia! Và tiếp theo đó chính là Quang
                    Hải với pha ghi bàn đưa tỷ số lên 2-0!!!
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/72760648548866092592519412335914906375278n-15737478422491226775220-1623089445572115099583.jpeg"
                    alt="Cau Thu Dep Trai, Doi Tuyen Viet Nam, Tien Linh, Tien Linh Ghi Ban, Tien Linh Ghi Man Mo Man, Viet Nam Vs Indonesia, Viet Nam Vs Indonesia Tai Vong Loai World Cup, Viet Nam Vs Indonesia Vong Loai World Cup 2022, "
                    note="Tiến Linh - nam thầm đẹp trai nhất thời điểm hiện tại"
                  />

                  <p>
                    Được biết, chàng trai sinh năm 1997 này sinh ra ở Hải Dương.
                    Khi lên 6 tuổi, Tiến Linh theo bố vào Bình Dương sinh sống.
                    Sở hữu chiều cao lý tưởng, gương mặt ưa nhìn cùng theo đó là
                    body "mlem mlem", Tiến Linh có thể nói là cầu thủ hớp hồn
                    không ít người từ cái nhìn đầu tiên.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/8/3286098521565700910504341817009936324886528n-1573747842262581611378-16230892892671810064988.jpg"
                    alt="Cau Thu Dep Trai, Doi Tuyen Viet Nam, Tien Linh, Tien Linh Ghi Ban, Tien Linh Ghi Man Mo Man, Viet Nam Vs Indonesia, Viet Nam Vs Indonesia Tai Vong Loai World Cup, Viet Nam Vs Indonesia Vong Loai World Cup 2022, "
                    note="Ngoại hình của Tiến Linh"
                  />
                  <p>
                    Cụ thể, anh chàng này sở hữu chiều cao 1m76, nặng 67kg và
                    hiện đang đá cho CLB Becamex Bình Dương. Tiến Linh từng đoạt
                    danh hiệu "Vua phá lưới U19 Quốc gia" vào năm 2015 và cùng
                    U20 Việt Nam dự VCK U20 World Cup 2017. Trước đây, Tiến Linh
                    từng có mối tình ngọt ngào với bạn gái Ngọc Quyên. Cặp đôi
                    này từng công khai nhiều hình ảnh hạnh phúc, lãng mạn bên
                    nhau. Ngọc Quyên là cô giáo dạy múa sở hữu body nóng bỏng.
                    Cô nàng cũng từng tham gia một vài bộ phim truyền hình và
                    thử sức ở cuộc thi Miss Vinh.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/8/300875933908699947218707898137561023905792n-15737478422582003811711-1623089289290883701843.jpg"
                    alt="Cau Thu Dep Trai, Doi Tuyen Viet Nam, Tien Linh, Tien Linh Ghi Ban, Tien Linh Ghi Man Mo Man, Viet Nam Vs Indonesia, Viet Nam Vs Indonesia Tai Vong Loai World Cup, Viet Nam Vs Indonesia Vong Loai World Cup 2022, "
                    note=""
                  />
                  <p>
                    Tuy nhiên, hiện tại Tiến Linh đang độc thân! Xin khẳng định
                    một lần nữa, Tiến Linh đang độc thân nha "quý zị"!
                  </p>
                  <p>Nguồn: Tổng hợp</p>
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
