import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 08/06/2021 02:04 PM",
"title": Không o ép mình trong hình mẫu idol sexy 'đại trà', nữ streamer chấp nhận làm 'người tối cổ' tự tin với phong cách riêng",
"description": “Quay xe” đi ngược với hình tượng xây dựng trước đây của mình, nữ streamer Liên Quân được người hâm mộ ủng hộ với sự thay đổi mới.",
"src": https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/photo-1-162314875179286100347.jpg",
"alt": Streamer, Trang Banana, Lien Quan Mobile, Hot Girl, Sexy, ",
"category": images",
"date": 08/06/2021",
"time": 02:04 PM",
"link": "/khong-o-ep-minh-trong-hinh-mau-idol-sexy-dai-tra-nu-streamer-chap-nhan-lam-nguoi-toi-co-tu-tin-voi-phong-cach-rieng",
"zcomponent": page_20210608140402",
"filepath": ./20210608140402-khong-o-ep-minh-trong-hinh-mau-idol-sexy-dai-tra-nu-streamer-chap-nhan-lam-nguoi-toi-co-tu-tin-voi-phong-cach-rieng.js"
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
  "Không o ép mình trong hình mẫu idol sexy 'đại trà', nữ streamer chấp nhận làm 'người tối cổ' tự tin với phong cách riêng";
const author = "Kayle";
const source = "Trí Thức Trẻ";
const timestamp = "08/06/2021 02:04 PM";
const description =
  "“Quay xe” đi ngược với hình tượng xây dựng trước đây của mình, nữ streamer Liên Quân được người hâm mộ ủng hộ với sự thay đổi mới.";
const link =
  "khong-o-ep-minh-trong-hinh-mau-idol-sexy-dai-tra-nu-streamer-chap-nhan-lam-nguoi-toi-co-tu-tin-voi-phong-cach-rieng";
const tagparam = [
  "streamer",
  "trang-banana",
  "lien-quan-mobile",
  "hot-girl",
  "sexy",
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

export default function page_20210608140402() {
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
                    Từng có thời gian “làm mưa làm gió” cộng đồng game thủ với
                    nick name <strong>Trang Banana</strong>, nữ{" "}
                    <strong>streamer</strong> tên thật là Hà Kiều Trang, sinh
                    năm 1998 được fan chú ý với sự phóng khoáng, táo bạo thông
                    qua những bộ ảnh <strong>sexy</strong>, nóng bỏng.{" "}
                  </p>
                  <p>
                    Có nhiều cơ hội mới tìm đến sau khi nổi tiếng, cô nàng này
                    tiến thân thử sức nhiều hơn: mẫu ảnh, diễn viên..., vậy nên
                    cũng không thể chăm chút cho những giờ live của mình như
                    trước được nữa. Tuy vậy, cô vẫn là nữ{" "}
                    <strong>streamer</strong> Liên Quân Mobile người hâm mộ quan
                    tâm.
                  </p>
                  <p>
                    Cập nhật những hình ảnh mới nhất của cô nàng này từ Facebook
                    cá nhân, fan của Trang Chuối không khó để nhận ra rằng, nữ{" "}
                    <strong>streamer</strong> này đã thay đổi nhiều. Không còn
                    là <strong>hot girl</strong> bị gắn mác “khoe thân” giờ đây
                    cô nàng mang vẻ đẹp nhẹ nhàng. Không chạy theo hình mẫu
                    những chân dài có đường cong chữ S, Kiều Trang tự tin với sự
                    mũm mĩm, dễ thương của mình.
                  </p>
                  <p>
                    Dẫu vậy thì với gương mặt má “bánh bao” này, cô nàng bị nhầm
                    tưởng có can thiệp “dao kéo”, tiêm má baby.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/photo-1-16231487362601731458250.jpg"
                    alt="Streamer, Trang Banana, Lien Quan Mobile, Hot Girl, Sexy, "
                    note="Đây là lý do của sự mũm mĩm."
                  />
                  <p>
                    Hoạt động trong lĩnh vực không thiếu drama, với cá tính của
                    mình, <strong>Trang Banana</strong> quan niệm: Tiền bạc phân
                    minh, ái tình dứt khoát. Với Trang, mọi lời gạ gẫm đều có
                    chung một kết quả là số 0. Cô cũng chia sẻ cách xử lý khi bị
                    gạ gẫm là vẫn lịch sự từ chối nhẹ nhàng. Nhưng nếu đối tượng
                    không còn tôn trọng nữa thì sẽ cô nàng nghiêm túc dằn mặt.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/photo-1-162314875179286100347.jpg"
                    alt="Streamer, Trang Banana, Lien Quan Mobile, Hot Girl, Sexy, "
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/6/8/19019347129267598775671134010843828094984770n-16231489822501263801521.jpg"
                    alt="Streamer, Trang Banana, Lien Quan Mobile, Hot Girl, Sexy, "
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/6/8/18651190329267597675671242337274566143886459n-16231489822732018001530.jpg"
                    alt="Streamer, Trang Banana, Lien Quan Mobile, Hot Girl, Sexy, "
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/6/8/17186979828963067372790943708196124820257641n-16231489987511450456599.jpg"
                    alt="Streamer, Trang Banana, Lien Quan Mobile, Hot Girl, Sexy, "
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/6/8/17189780828963067606124255368353556461514250n-16231489987711620360866.jpg"
                    alt="Streamer, Trang Banana, Lien Quan Mobile, Hot Girl, Sexy, "
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/6/8/19420506918147757520276054698773308224438327n-16231492442091326844754.jpg"
                    alt="Streamer, Trang Banana, Lien Quan Mobile, Hot Girl, Sexy, "
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/6/8/19273846218147758120275992542766511337228339n-1623149244235660859917.jpg"
                    alt="Streamer, Trang Banana, Lien Quan Mobile, Hot Girl, Sexy, "
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/6/8/19562069418147757320276073359700782585064632n-16231492442751930766418.jpg"
                    alt="Streamer, Trang Banana, Lien Quan Mobile, Hot Girl, Sexy, "
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/6/8/17378315328991942569903421609749206445854224n-16231490169851182684987.jpg"
                    alt="Streamer, Trang Banana, Lien Quan Mobile, Hot Girl, Sexy, "
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/6/8/17407081528991942969903385841777638180627439n-1623149017006933788940.jpg"
                    alt="Streamer, Trang Banana, Lien Quan Mobile, Hot Girl, Sexy, "
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/8/screenshot1132-16231490488541303962892.png"
                    alt="Streamer, Trang Banana, Lien Quan Mobile, Hot Girl, Sexy, "
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/8/screenshot1133-1623149056027955755972.png"
                    alt="Streamer, Trang Banana, Lien Quan Mobile, Hot Girl, Sexy, "
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/photo-1-16231488381731788357195.jpg"
                    alt="Streamer, Trang Banana, Lien Quan Mobile, Hot Girl, Sexy, "
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
