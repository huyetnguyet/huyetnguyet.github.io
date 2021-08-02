import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 07/06/2021 12:38 AM",
"title": Ảnh “team qua đường” huyền thoại của Jennie: Cam thường mà đẹp không chê nổi, chắc mỗi sáng thích lắm khi tự soi gương",
"description": Với gương mặt đẹp đỉnh cao cùng vóc dáng hoàn hảo, không gì có thể 'dìm hàng' được Jennie (BLACKPINK).",
"src": https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/a-famous-photo-of-jennie-1623032117432755818906.jpg",
"alt": Jennie, Jennie Blackpink, Blackpink, Sao Han, Idol Kpop, Nhan Sac Sao Han, Anh Cam Thuong, ",
"category": images",
"date": 07/06/2021",
"time": 12:38 AM",
"link": "/anh-team-qua-duong-huyen-thoai-cua-jennie-cam-thuong-ma-dep-khong-che-noi-chac-moi-sang-thich-lam-khi-tu-soi-guong",
"zcomponent": page_20210607003803",
"filepath": ./20210607003803-anh-team-qua-duong-huyen-thoai-cua-jennie-cam-thuong-ma-dep-khong-che-noi-chac-moi-sang-thich-lam-khi-tu-soi-guong.js"
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  "Ảnh “team qua đường” huyền thoại của Jennie: Cam thường mà đẹp không chê nổi, chắc mỗi sáng thích lắm khi tự soi gương";
const author = "HỒNG HẢI,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "07/06/2021 12:38 AM";
const description =
  "Với gương mặt đẹp đỉnh cao cùng vóc dáng hoàn hảo, không gì có thể 'dìm hàng' được Jennie (BLACKPINK).";
const link =
  "anh-team-qua-duong-huyen-thoai-cua-jennie-cam-thuong-ma-dep-khong-che-noi-chac-moi-sang-thich-lam-khi-tu-soi-guong";
const tagparam = [
  "jennie",
  "jennie-blackpink",
  "blackpink",
  "sao-han",
  "idol-kpop",
  "nhan-sac-sao-han",
  "anh-cam-thuong",
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

export default function page_20210607003803() {
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
                    Jennie (BLACKPINK) vốn nổi tiếng là mỹ nhân xinh đẹp hút
                    hồn, dù "lệch chuẩn" gu Hàn vẫn là biểu tượng nhan sắc hàng
                    đầu. Dù trong bất kỳ hoàn cảnh nào, dù trang điểm đậm hay để
                    mặt mộc gương mặt vừa đáng yêu vừa sắc sảo của nữ idol sinh
                    năm 1996 vẫn vô cùng nổi bật Jennie
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/screen-shot-2019-04-20-at-93922-pm-1555775775580125899023-16230325956911552037050.png"
                    alt="Jennie, Jennie Blackpink, Blackpink, Sao Han, Idol Kpop, Nhan Sac Sao Han, Anh Cam Thuong, "
                    note="Trước đó, loạt ảnh chụp vội của Jennie tại Coachella đã gây bão mạng xã hội. Jennie vô cùng nổi bật với diện mạo xinh đẹp, vóc dáng sexy hút mắt"
                  />
                  <p>
                    Mới đây, trên diễn đàn Instiz, netizen Hàn đã "đào" lại 1
                    hình ảnh từ người qua đường chụp Jennie mà được cho là
                    “huyền thoại” trong phạm trù team qua đường. Trong khoảnh
                    khắc này, nữ idol đang cười tươi tắn, cùng chụp ảnh với
                    người hâm mộ. Ảnh được chụp bằng camera thường "sương
                    sương", không chỉnh sáng hay "cà mặt" nhưng vẫn có thể thấy
                    nhan sắc
                    <strong> Jennie</strong>
                  </p>

                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/574568172272390929680689433762400924073984n-15557785053111698580234-16230325956431617175051.jpg"
                    alt="Jennie, Jennie Blackpink, Blackpink, Sao Han, Idol Kpop, Nhan Sac Sao Han, Anh Cam Thuong, "
                    note="Body cực xịn của Jennie càng thêm nổi bật trong ảnh cam thường fan chụp"
                  />
                  <p></p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/a-famous-photo-of-jennie-1623032117432755818906.jpg"
                    alt="Jennie, Jennie Blackpink, Blackpink, Sao Han, Idol Kpop, Nhan Sac Sao Han, Anh Cam Thuong, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/14450780615751480260076814344098544848298000n-1612697360789176231461-16230325955431241259490.jpg"
                    alt="Jennie, Jennie Blackpink, Blackpink, Sao Han, Idol Kpop, Nhan Sac Sao Han, Anh Cam Thuong, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/a-12-1588180220100214947471-16230326460401832740779.jpg"
                    alt="Jennie, Jennie Blackpink, Blackpink, Sao Han, Idol Kpop, Nhan Sac Sao Han, Anh Cam Thuong, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/a-12-1588180220100214947471-16230326460401832740779.jpg"
                    alt="Jennie, Jennie Blackpink, Blackpink, Sao Han, Idol Kpop, Nhan Sac Sao Han, Anh Cam Thuong, "
                    note=""
                  />
                  <p>
                    Trong ảnh chụp "sương sương" của người qua đường,
                    <strong>Jennie</strong>
                  </p>
                  <p>
                    Bên dưới bài đăng, nhiều netizen đã không ngừng cảm thán
                    trước gương mặt xinh đẹp hoàn hảo của Jennie: "Quá xinh đẹp
                    luôn", "Mặt thì nhỏ, mắt mũi miệng đều hoàn hảo hết", "Không
                    biết cảm giác của<strong>Jennie</strong>
                  </p>
                  <p>
                    Đây không phải lần đầu tiên rapper "Hắc Hường" gây sốt với
                    ảnh chụp từ camera thường của người qua đường. Ảnh chụp 100%
                    không chỉnh sửa đã chứng minh<strong>Jennie</strong>
                  </p>
                  <p></p>
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
