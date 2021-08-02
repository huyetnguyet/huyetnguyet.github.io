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
"timestamp": '29/07/2021 04:08 PM',
"title": '“Người yêu mai mối” của ViruSs "đào" lại ảnh cũ: Xinh đẹp, thần thái từ nhỏ!',
"description": 'Xem lại hình cũ, fan được dịp ngắm nhan sắc hot girl lai tây từng được “đẩy thuyền” với ViruSs, thần thái sang chảnh từ khi mới lên 4.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/1/photo-1-16251085597431413737173.jpg',
"alt": 'HOT GIRL,STREAMER,VIRUSS,XEMESIS,',
"category": 'images',
"date": '29/07/2021',
"time": '04:08 PM',
"link": '/nguoi-yeu-mai-moi-cua-viruss-dao-lai-anh-cu-xinh-dep-than-thai-tu-nho',
"zcomponent": 'page_20210729160845',
"filepath": './20210729160845-nguoi-yeu-mai-moi-cua-viruss-dao-lai-anh-cu-xinh-dep-than-thai-tu-nho.js'
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
  '“Người yêu mai mối” của ViruSs "đào" lại ảnh cũ: Xinh đẹp, thần thái từ nhỏ!';
const author = "Kayle";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:08 PM";
const description =
  "Xem lại hình cũ, fan được dịp ngắm nhan sắc hot girl lai tây từng được “đẩy thuyền” với ViruSs, thần thái sang chảnh từ khi mới lên 4.";
const link =
  "nguoi-yeu-mai-moi-cua-viruss-dao-lai-anh-cu-xinh-dep-than-thai-tu-nho";
const tagparam = ["HOT GIRL", "STREAMER", "VIRUSS", "XEMESIS"];
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

export default function page_20210729160845() {
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
                    Là bạn thân của Xoài Non - vợ <strong>Xemesis</strong>,
                    Sunna (tên thật là Wilson Nhật Anh) từng được{" "}
                    <strong>streamer</strong> giàu nhất Việt Nam “làm mối” cho
                    chàng bạn thân đào hoa nhưng lận đận trong tình yêu{" "}
                    <strong>ViruSs</strong>. Trước đó, cô nàng nổi tiếng là một{" "}
                    <strong>hot girl</strong> lai Việt – Mỹ với body hoàn hảo.{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/1/photo-1-16251085597431413737173.jpg"
                    alt="1, HOT GIRL,STREAMER,VIRUSS,XEMESIS,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/1/hot-girl-wilson-nhat-anh-sunna-de-nguc-tran-khoe-than-tren-giuong-ngu-6-16251086144241538126526.jpg"
                    alt="2, HOT GIRL,STREAMER,VIRUSS,XEMESIS,"
                    note=""
                  />
                  <p>
                    Mới vừa tròn 18 tuổi nhưng cô nàng đã định hình cho bản thân
                    phong cách thời trang sexy, bốc lửa, quyến rũ và có phần táo
                    bạo. Cùng với vòng một khủng, Sunna làm ai nấy cũng phát hờn
                    với vẻ đẹp cuốn hút mà cô nàng sở hữu.{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/1/hot-girl-wilson-nhat-anh-sunna-de-nguc-tran-khoe-than-tren-giuong-ngu-11-16251086144641558060566.jpg"
                    alt="3, HOT GIRL,STREAMER,VIRUSS,XEMESIS,"
                    note=""
                  />
                  <p>
                    Sở hữu trang cá nhân với gần hàng trăm nghìn lượt follow,
                    mỗi bức ảnh khoe dáng trong những kiểu trang phục cắt xén
                    bạo của cô đều nhận được rất nhiều lượt tương tác và bình
                    luận. Người đẹp 18 tuổi không ngần ngại diện những chiếc áo
                    chỉ buộc độc nhất một sợi dây phía trên cùng quần bikini
                    khỏe hết mọi đường cong cơ thể. Có lẽ vì sinh ra trong gia
                    đình đa văn hóa nên cách ăn mặc của Wilson Nhật Anh có phần
                    phóng khoáng, gợi cảm và táo bạo.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/1/hot-girl-wilson-nhat-anh-sunna-de-nguc-tran-khoe-than-tren-giuong-ngu-12-16251086144972132140548.jpg"
                    alt="4, HOT GIRL,STREAMER,VIRUSS,XEMESIS,"
                    note=""
                  />
                  <p>
                    Khác với “bộ nhận diện thương hiệu” thường xây dựng, mới
                    đây, người yêu mai mối của <strong>ViruSs</strong> đã “đào”
                    lại ảnh cũ, khi cô mới 4 tuổi và đăng tải lên story, khoe
                    với những người yêu mến.{" "}
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Thừa hưởng nét đẹp của bố mẹ, Sunna xinh đẹp như búp bê với
                    đôi mắt to tròn, má phúng phính. Cũng qua đây, fan mới thấy,
                    cô nàng có thần thái từ nhỏ.{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/1/screenshot37-16251086377291400584514.png"
                    alt="5, HOT GIRL,STREAMER,VIRUSS,XEMESIS,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/1/screenshot36-1625108637732745185358.png"
                    alt="6, HOT GIRL,STREAMER,VIRUSS,XEMESIS,"
                    note=""
                  />
                  <p>
                    Hiện tại, bông hồng lai 2k2 sở hữu một body nóng bỏng với số
                    đo 3 vòng chẳng thua kém gì người mẫu, lần lượt là 90, 66 và
                    95 cm. Với lợi thế body nuột, cô nàng này thường xuyên nhận
                    được những lời mời làm mẫu ảnh, gương mặt đại diện cho các
                    hãng thời trang, mỹ phẩm có tiếng.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/1/screenshot39-16251086376542061040642.png"
                    alt="7, HOT GIRL,STREAMER,VIRUSS,XEMESIS,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/1/screenshot40-1625108637579602456809.png"
                    alt="8, HOT GIRL,STREAMER,VIRUSS,XEMESIS,"
                    note=""
                  />
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
