import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature, RelationNews } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 06/06/2021 07:42 PM",
"title": Lee Kwang Soo và hành trình ở Running Man: Khởi đầu bằng nước mưa, kết thúc đẫm nước mắt",
"description": Sau 11 năm đồng hành cùng Running Man, Lee Kwang Soo cuối cùng cũng phải nói lời chia tay ngôi nhà thứ 2 của mình.",
"src": ",
"alt": Lee Kwang Soo, Lee Kwang Soo Roi Running Man, Sao Han, Kpop, Running Man, ",
"category": news",
"date": 06/06/2021",
"time": 07:42 PM",
"link": "/lee-kwang-soo-va-hanh-trinh-o-running-man-khoi-dau-bang-nuoc-mua-ket-thuc-dam-nuoc-mat",
"zcomponent": page_20210606074256",
"filepath": ./20210606074256-lee-kwang-soo-va-hanh-trinh-o-running-man-khoi-dau-bang-nuoc-mua-ket-thuc-dam-nuoc-mat.js"
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
  "Lee Kwang Soo và hành trình ở Running Man: Khởi đầu bằng nước mưa, kết thúc đẫm nước mắt";
const author = "ANGUS,";
const source = "Trí Thức Trẻ";
const timestamp = "06/06/2021 07:42 PM";
const description =
  "Sau 11 năm đồng hành cùng Running Man, Lee Kwang Soo cuối cùng cũng phải nói lời chia tay ngôi nhà thứ 2 của mình.";
const link =
  "lee-kwang-soo-va-hanh-trinh-o-running-man-khoi-dau-bang-nuoc-mua-ket-thuc-dam-nuoc-mat";
const tagparam = [
  "lee-kwang-soo",
  "lee-kwang-soo-roi-running-man",
  "sao-han",
  "kpop",
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

export default function page_20210606074256() {
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
                      Vào ngày 11/7/2010, một gameshow về vận động với tên gọi
                      Running Man chính thức được ra mắt khán giả Hàn Quốc cũng
                      như toàn thế giới. Chương trình quy tụ những ngôi sao nổi
                      tiếng ở nhiều lĩnh vực và đội hình nổi tiếng nhất có thể
                      kể đến như Yoo Jae Suk, Ji Suk Jin, Kim Jong Kook, Haha,
                      Gary,
                      <strong>Lee Kwang Soo</strong>, Song Ji Hyo...
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/6/photo-2-1622994189590992603592.jpg"
                      alt="Lee Kwang Soo, Lee Kwang Soo Roi Running Man, Sao Han, Kpop, Running Man, "
                      note="Lee Kwang Soo đọc thư chia tay trong nước mắt"
                    />
                    <p>
                      Trải qua 11 năm phát sóng, Running Man vẫn nhận được rất
                      nhiều tình cảm từ khán giả hâm mộ, đặc biệt là "hoàng tử
                      châu Á"<strong>Lee Kwang Soo</strong>. Còn nhớ, ngày Lee
                      Kwang Soo tham gia chương trình thì tên tuổi của anh vẫn
                      không mấy nổi bật trong showbiz. Hình ảnh râu ria mà anh
                      chàng mang đến cũng bị đánh giá là "già" hơn hẳn cậu bạn
                      cùng tuổi Song Joong Ki.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/6/20170427-010451-gvbdte21363x738-1622996161627502816211.png"
                      alt="Lee Kwang Soo, Lee Kwang Soo Roi Running Man, Sao Han, Kpop, Running Man, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/6/6/anh-5-1553741770869794632848-16229953176911409542805.gif"
                      alt="Lee Kwang Soo, Lee Kwang Soo Roi Running Man, Sao Han, Kpop, Running Man, "
                      note="Ngày đầu Kwang Soo đến với Running Man thì trời đổ mưa"
                    />
                    <p>
                      Những tưởng Kwang Soo sẽ mãi đồng hành cùng
                      <strong>Running Man</strong> nhưng tai nạn năm 2020 đã
                      khiến mọi chuyện dừng lại. Anh chàng sẽ chính thức nói lời
                      chia tay chương trình vào tập phát sóng tuần tới. Không
                      chỉ các thành viên mà khán giả cũng sẽ vô cùng tiếc nuối
                      khi từ nay không còn được thấy Kwang Soo trong chương
                      trình.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/6/photo2021-06-0622-59-16-16229961035601805667447.jpg"
                      alt="Lee Kwang Soo, Lee Kwang Soo Roi Running Man, Sao Han, Kpop, Running Man, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/6/6/giphy-1-1622994223406456632908.gif"
                      alt="Lee Kwang Soo, Lee Kwang Soo Roi Running Man, Sao Han, Kpop, Running Man, "
                      note="Anh bắt đầu bằng cơn mưa, ra đi đẫm nước mắt"
                    />
                  </div>
                  <AdsHorizontal />
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
