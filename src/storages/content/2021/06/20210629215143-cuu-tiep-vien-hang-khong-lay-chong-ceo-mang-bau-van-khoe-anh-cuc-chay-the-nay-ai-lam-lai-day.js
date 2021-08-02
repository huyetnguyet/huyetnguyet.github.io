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
"timestamp": '29/06/2021 09:51 PM',
"title": 'Cựu tiếp viên hàng không lấy chồng CEO mang bầu vẫn khoe ảnh cực cháy, thế này ai làm lại đây!',
"description": 'Sắc vóc như thế này có mê không cơ chứ.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210629215143--11-654452.jpg',
"alt": 'vũ ngọc châm,Vũ Ngọc Châm mang thai,CEO,chồng CEO,vũ ngọc châm và bạn trai,',
"category": 'stars',
"date": '29/06/2021',
"time": '09:51 PM',
"link": '/cuu-tiep-vien-hang-khong-lay-chong-ceo-mang-bau-van-khoe-anh-cuc-chay-the-nay-ai-lam-lai-day',
"zcomponent": 'page_20210629215143',
"filepath": './20210629215143-cuu-tiep-vien-hang-khong-lay-chong-ceo-mang-bau-van-khoe-anh-cuc-chay-the-nay-ai-lam-lai-day.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  "Cựu tiếp viên hàng không lấy chồng CEO mang bầu vẫn khoe ảnh cực cháy, thế này ai làm lại đây!";
const author = "NE,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "29/06/2021 09:51 PM";
const description = "Sắc vóc như thế này có mê không cơ chứ.";
const link =
  "cuu-tiep-vien-hang-khong-lay-chong-ceo-mang-bau-van-khoe-anh-cuc-chay-the-nay-ai-lam-lai-day";
const tagparam = [
  "vũ ngọc châm",
  "Vũ Ngọc Châm mang thai",
  "CEO",
  "chồng CEO",
  "vũ ngọc châm và bạn trai",
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

export default function page_20210629215143() {
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
                    Từng khuấy đảo MXH khi liên tục xuất hiện trên sóng các
                    chương trình như The Look, Người Ấy Là Ai,{" "}
                    <strong>Vũ Ngọc Châm</strong> dần im hơi lặng tiếng hơn hẳn
                    sau khi kết hôn với chồng <strong>CEO</strong>. Thi thoảng,
                    netizen mới thấy gái xinh đăng tải vài ba tấm ảnh khoe sắc
                    trên trang cá nhân. Trước đó, cô nàng xinh đẹp này cũng là
                    một tiếp viên hàng không.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215143--10-395698.jpg")
                        .default
                    }
                    alt="1, vũ ngọc châm,Vũ Ngọc Châm mang thai,CEO,chồng CEO,vũ ngọc châm và bạn trai,"
                    note="Vũ Ngọc Châm - gái xinh hot hit một thời"
                  />
                  <p>
                    Thế mà mới đây, gái xinh lại bất ngờ tung ảnh throwback khoe
                    dáng khi đang mang bầu 25 tuần khiến bao người trầm trồ ngợi
                    khen. Trước đó, <strong>Vũ Ngọc Châm</strong> cũng khiến
                    netizen được phen xôn xao khi đăng tải hình ảnh ở những
                    tháng cuối thai kỳ dù trước đó không hề lộ chút ít hint mang
                    thai nào.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215143--11-654452.jpg")
                        .default
                    }
                    alt="2, vũ ngọc châm,Vũ Ngọc Châm mang thai,CEO,chồng CEO,vũ ngọc châm và bạn trai,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215143--12-582765.jpg")
                        .default
                    }
                    alt="3, vũ ngọc châm,Vũ Ngọc Châm mang thai,CEO,chồng CEO,vũ ngọc châm và bạn trai,"
                    note=""
                  />
                  <p>
                    <strong>Vũ Ngọc Châm</strong> khoe dáng nuột nà dù đang
                    trong thai kỳ
                  </p>
                  <p>
                    Dễ thấy, dù đang trong thai kỳ,{" "}
                    <strong>Vũ Ngọc Châm</strong> không có quá nhiều thay đổi về
                    sắc vóc, vẫn giữ vững phong độ "đỉnh của chóp". Diện trên
                    mình bộ bodysuit màu đen sexy, bà bầu Vũ Ngọc Châm vẫn vô
                    cùng nuột nà. Phu nhân giám đốc vẫn tự tin phô diễn đường
                    cong, vòng 1 nóng bỏng cùng đôi chân thon gọn trong tấm ảnh
                    trước gương.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Đến tận những tháng cuối thai kỳ,{" "}
                    <strong>Vũ Ngọc Châm</strong> mới tung "thính" chuẩn bị đón
                    con đầu lòng khiến bao người bất ngờ
                  </p>
                  <p>
                    Không thể phủ nhận, nhan sắc mẹ bầu{" "}
                    <strong>Vũ Ngọc Châm</strong> xứng đáng 10 điểm khi vẫn rạng
                    rỡ, tươi tắn trong thời gian mang thai
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215143--13-543721.jpg")
                        .default
                    }
                    alt="4, vũ ngọc châm,Vũ Ngọc Châm mang thai,CEO,chồng CEO,vũ ngọc châm và bạn trai,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215143--14-775480.jpg")
                        .default
                    }
                    alt="5, vũ ngọc châm,Vũ Ngọc Châm mang thai,CEO,chồng CEO,vũ ngọc châm và bạn trai,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215143--15-699598.jpg")
                        .default
                    }
                    alt="6, vũ ngọc châm,Vũ Ngọc Châm mang thai,CEO,chồng CEO,vũ ngọc châm và bạn trai,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215143--16-651888.jpg")
                        .default
                    }
                    alt="7, vũ ngọc châm,Vũ Ngọc Châm mang thai,CEO,chồng CEO,vũ ngọc châm và bạn trai,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215143--17-651888.jpg")
                        .default
                    }
                    alt="8, vũ ngọc châm,Vũ Ngọc Châm mang thai,CEO,chồng CEO,vũ ngọc châm và bạn trai,"
                    note=""
                  />
                  <p>Ảnh: Tổng hợp</p>
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
