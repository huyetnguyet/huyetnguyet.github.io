import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 07/06/2021 10:39 AM",
"title": Fan xúc động khi biết ý nghĩa dãy số trên áo Lee Kwang Soo trong tập cuối ghi hình Running Man",
"description": Ê-kíp Running Man khiến người hâm mộ rất cảm động khi tinh tế đặt con số ý nghĩa này trong tập cuối chia tay Lee Kwang Soo.",
"src": ",
"alt": Lee Kwang Soo, Lee Kwang Soo Roi Running Man Sau 11 Nam, Running Man, ",
"category": news",
"date": 07/06/2021",
"time": 10:39 AM",
"link": "/fan-xuc-dong-khi-biet-y-nghia-day-so-tren-ao-lee-kwang-soo-trong-tap-cuoi-ghi-hinh-running-man",
"zcomponent": page_20210607103948",
"filepath": ./20210607103948-fan-xuc-dong-khi-biet-y-nghia-day-so-tren-ao-lee-kwang-soo-trong-tap-cuoi-ghi-hinh-running-man.js"
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
  "Fan xúc động khi biết ý nghĩa dãy số trên áo Lee Kwang Soo trong tập cuối ghi hình Running Man";
const author = "BELL SHINO,";
const source = "Trí Thức Trẻ";
const timestamp = "07/06/2021 10:39 AM";
const description =
  "Ê-kíp Running Man khiến người hâm mộ rất cảm động khi tinh tế đặt con số ý nghĩa này trong tập cuối chia tay Lee Kwang Soo.";
const link =
  "fan-xuc-dong-khi-biet-y-nghia-day-so-tren-ao-lee-kwang-soo-trong-tap-cuoi-ghi-hinh-running-man";
const tagparam = [
  "lee-kwang-soo",
  "lee-kwang-soo-roi-running-man-sau-11-nam",
  "running-man",
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

export default function page_20210607103948() {
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
                    Trailer tập phát sóng cuối cùng của{" "}
                    <strong>Running Man</strong> có sự góp mặt của{" "}
                    <strong>Lee Kwang Soo</strong> khiến người hâm mộ không thể
                    kìm nổi nước mắt. Tất cả các thành viên đều nghẹn ngào trong
                    giờ phút nói lời chia tay cùng "Thánh nhọ" sau nhiều năm
                    "chạy" cùng nhau như người thân trong gia đình.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/19127129046244096909215973861846989639936871n-16230502418581478682244.jpeg"
                    alt="Lee Kwang Soo, Lee Kwang Soo Roi Running Man Sau 11 Nam, Running Man, "
                    note="Tập cuối cùng có Kwang Soo là thành viên chính thức sẽ lên sóng vào ngày 13/6, khép lại hành trình của anh sau 11 năm gắn bó cùng Running Man"
                  />
                  <p>
                    Trong trailer, trên chiếc áo của Kwang Soo có ghi số 3991.
                    Sau khi tìm hiểu, các fan đã phát hiện ra ý nghĩa đặc biệt
                    của con số này.{" "}
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/18918575643928001940841387690197652193687852n-16230493559001906054696.jpeg"
                    alt="Lee Kwang Soo, Lee Kwang Soo Roi Running Man Sau 11 Nam, Running Man, "
                    note=""
                  />
                  <p>
                    Ngày 11/7/2010 là ngày Kwang Soo xuất hiện lần đầu với tư
                    cách là thành viên chính thức của{" "}
                    <strong>Running Man</strong>. Ngày 13/6/2021 là ngày "Hoàng
                    tử châu Á" xuất hiện lần cuối với tư cách là thành viên cố
                    định của chương trình. Số 3991 trên áo của Kwang Soo trong
                    tập 559 tới đây, chính là số ngày gắn bó của Kwang Soo trong
                    11 năm tham gia Running Man. Có thể thấy, ê-kíp chương trình
                    đã rất tinh tế khi để "chàng Hươu" mặc chiếc áo có dãy số
                    này trong ngày cuối chia tay mọi người.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-2-1622994189590992603592-16230504527311881116045.jpeg"
                    alt="Lee Kwang Soo, Lee Kwang Soo Roi Running Man Sau 11 Nam, Running Man, "
                    note=""
                  />
                  <p>Ảnh: Cắt từ chương trình, Internet</p>
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
