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
"timestamp": 07/06/2021 12:37 AM",
"title": Nữ streamer đăng hình khoe giảm cân thành công nhưng vòng 1 lớn bất thường lại “phản chủ”",
"description": Thông báo đã giảm cân nhưng vòng một nở nang hơn thường của nữ streamer mới là điều thu hút sự chú ý.",
"src": ",
"alt": Lien Quan Mobile, Streamer, Thao Nari, Cong Dong Mang, ",
"category": images",
"date": 07/06/2021",
"time": 12:37 AM",
"link": "/nu-streamer-dang-hinh-khoe-giam-can-thanh-cong-nhung-vong-1-lon-bat-thuong-lai-phan-chu",
"zcomponent": page_20210607003706",
"filepath": ./20210607003706-nu-streamer-dang-hinh-khoe-giam-can-thanh-cong-nhung-vong-1-lon-bat-thuong-lai-phan-chu.js"
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
  "Nữ streamer đăng hình khoe giảm cân thành công nhưng vòng 1 lớn bất thường lại “phản chủ”";
const author = "Kayle";
const source = "Pháp luật và bạn đọc";
const timestamp = "07/06/2021 12:37 AM";
const description =
  "Thông báo đã giảm cân nhưng vòng một nở nang hơn thường của nữ streamer mới là điều thu hút sự chú ý.";
const link =
  "nu-streamer-dang-hinh-khoe-giam-can-thanh-cong-nhung-vong-1-lon-bat-thuong-lai-phan-chu";
const tagparam = [
  "lien-quan-mobile",
  "streamer",
  "thao-nari",
  "cong-dong-mang",
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

export default function page_20210607003706() {
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
                      Với biệt danh được người hâm mộ ưu ái gọi "Nancy phiên bản
                      Việt",<strong>streamer</strong>
                    </p>
                    <p>
                      Không quá thường xuyên nhưng qua những hình ảnh update
                      cuộc sống hôn nhân của mình, người hâm mộ có thể thấy nữ
                      <strong>streamer</strong>
                    </p>
                    <p>
                      Chưa hết, kể từ khi lấy chồng, Thảo Nari còn được người
                      hâm mộ khen “nhuận sắc” đặc biệt là vòng một vốn dĩ đã nở
                      nang giờ còn “ngộp thở” hơn nữa. Ngay cả khi dù cho nữ
                      <strong>streamer</strong>
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/18462954211810926890606273872170329324311932n-16230345725971858300541.jpg"
                      alt="Lien Quan Mobile, Streamer, Thao Nari, Cong Dong Mang, "
                      note="Hình ảnh của Thảo Nari khi cô nàng khoe giảm được 1kg."
                    />
                    <p>
                      Ngay cả những người anh chị em thân thiết trong làng Liên
                      Quân Mobile như caster Tùng Họa Mi, MC Vũ Phương Thảo cũng
                      phải vào bình luận thể hiện cảm xúc bất ngờ, “khó thở” của
                      mình trước nhan sắc nữ đồng nghiệp. Còn fan thì liên tiếp
                      thả tương tác cũng như bình luận khen
                      <strong>streamer</strong>
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/19495138111986911606341131705495736842107744n-1-16230345726861891383002.jpg"
                      alt="Lien Quan Mobile, Streamer, Thao Nari, Cong Dong Mang, "
                      note="Đồng nghiệp của cô nàng phải vào cảm thán."
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/7/screenshot1094-16230347015301274871554-1623034716515803816868.png"
                      alt="Lien Quan Mobile, Streamer, Thao Nari, Cong Dong Mang, "
                      note="Liên tiếp những lời khen cho nhan sắc cô nàng."
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/screenshot1093-1623034701558801618773-16230347360511178204719.png"
                      alt="Lien Quan Mobile, Streamer, Thao Nari, Cong Dong Mang, "
                      note="Có ý kiến còn cho rằng cô nàng phẫu thuật thẩm mỹ."
                    />
                    <p>
                      Dù không còn thường xuyên chiếm sóng mạng xã hội như khi
                      còn độc thân thế nhưng có thể thấy độ “hot” của nữ
                      <strong>streamer</strong>
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/7/screenshot1092-16230347015621350004253.png"
                      alt="Lien Quan Mobile, Streamer, Thao Nari, Cong Dong Mang, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/16931321811602336978131938955148948506674585n-1623034572515191900238.jpg"
                      alt="Lien Quan Mobile, Streamer, Thao Nari, Cong Dong Mang, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/1895604181191539364682626882596393436589389n-1623034572629955823258.jpg"
                      alt="Lien Quan Mobile, Streamer, Thao Nari, Cong Dong Mang, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/18656427911954035876295373859620581471565326n-1623034572648112664270.jpg"
                      alt="Lien Quan Mobile, Streamer, Thao Nari, Cong Dong Mang, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/17589714111686674336364868476587413931840155n-16230345725271636007182.jpg"
                      alt="Lien Quan Mobile, Streamer, Thao Nari, Cong Dong Mang, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/16066248811458251892540442864290302795333094n-16230345724771572914388.jpg"
                      alt="Lien Quan Mobile, Streamer, Thao Nari, Cong Dong Mang, "
                      note=""
                    />
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
