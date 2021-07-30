import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* Data Input */
/*
          <ContentItem
            title="Ngọc Trinh vô tư đăng clip chỉnh sửa nội y, để lộ cả đồ bảo hộ bên trong nhìn mà “thót tim”"
            content="Ngọc Trinh tiếp tục gây tranh cãi vì hành động vô tư của mình."
            src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/2/base64-16226096789721565082138.png"
            alt="Ngọc Trinh"
            types="images"
            time="02/06/2021 01:19 PM"
            link="/ngoc-trinh-vo-tu-dang-clip-chinh-sua-noi-y-de-lo-ca-do-bao-ho-ben-trong-nhin-ma-thot-tim"
          />
*/
/* ---------------------------------------------------------------- */

const category = "images";
const categoryLink = "/images";

const title =
  "Ngọc Trinh vô tư đăng clip chỉnh sửa nội y, để lộ cả đồ bảo hộ bên trong nhìn mà “thót tim”";
const author = "DUN";
const source = "PHÁP LUẬT & BẠN ĐỌC";
const date = "02/06/2021";
const time = " 01:19 PM";
const description =
  "Ngọc Trinh tiếp tục gây tranh cãi vì hành động vô tư của mình.";
const link =
  "ngoc-trinh-vo-tu-dang-clip-chinh-sua-noi-y-de-lo-ca-do-bao-ho-ben-trong-nhin-ma-thot-tim";

const tags = [
  "Ngọc Trinh",
  "Body Ngọc Trinh",
  "nữ hoàng nội y Ngọc Trinh",
  "sao hớ hênh",
  "sao Việt",
  "showbiz Việt",
];

/* ---------------------------------------------------------------- */

const facebookLinkShare =
  "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fhuyetnguyet.com%2F" +
  link +
  "&layout=button_count&size=small&width=77&height=20&appId";

const updatedTags = tags.map((tag) => {
  const link =
    "https://www.google.com/search?q=huyetnguyet+" + tag.replace(" ", "+");
  return (
    <a href={link} className="tag">
      {tag}
    </a>
  );
});

export default function page_202106021319() {
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
              <div className="author">{author}</div> - Theo {source} | {date} -
              {time}
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
                    Ngọc Trinh là một trong những mỹ nhân gây tranh cãi nhất nhì
                    showbiz Việt vì những bộ hình nóng bỏng mắt cùng phong cách
                    thời trang táo bạo. Chân dài gốc Trà Vinh cũng nhiều lần
                    khiến cộng đồng mạng ngượng chín mặt bởi những khoảnh khắc
                    hớ hênh trong hậu trường.
                  </p>
                  <p>
                    Mới đây, trên Instagram cá nhân, Ngọc Trinh tiếp tục đăng
                    tải đoạn clip diện nội y lưới vô cùng nóng bỏng. Đáng chú ý,
                    chân dài gốc Trà Vinh còn để lộ phần đồ bảo hộ bên trong nội
                    y, trong lúc thoải mái chỉnh tới chỉnh lui trang phục ở chỗ
                    nhạy cảm khiến dân tình "thót tim" vì chỉ sợ người đẹp hớ
                    hênh. Mặc dù đã quá quen với hình ảnh sexy, nóng bỏng của
                    "nữ hoàng nội y" nhưng khoảnh khắc như thế này vẫn khiến
                    không ít người đỏ mặt. Đa số đều cho rằng, Ngọc Trinh là
                    người nổi tiếng do đó cần chú ý và tế nhị hơn khi đăng tải
                    clip diện những trang phục thiếu vải như vậy.
                  </p>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/W5XPPHtTCL0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <p>
                    Clip: Ngọc Trinh để lộ đồ bảo hộ bên trong nội y khi đang
                    chỉnh vùng nhạy cảm
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/2/base64-16226096789721565082138.png"
                    alt="Ngọc Trinh"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/2/base64-1622609719401269359882.png"
                    alt="Ngọc Trinh"
                    note="
                  Khoảnh khắc hớ hênh của Ngọc Trinh khiến không ít người ngượng
                  chín mặt"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/2/ntrinh-16226098736481502758299.jpg"
                    alt="Ngọc Trinh"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/2/ntrinh1-1622609878365320267178.jpg"
                    alt="Ngọc Trinh"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/2/ntrinh2-16226098842251281158225.jpg"
                    alt="Ngọc Trinh"
                    note=" Đây không phải lần đầu Ngọc Trinh gặp 'sự cố' vì những hành
                  động vô tư của mình"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/2/ntrinh4-1622609893830346551222.jpg"
                    alt="Ngọc Trinh"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/2/ntrinh3-16226098884251260623844.jpg"
                    alt="Ngọc Trinh"
                    note="
                  Cộng đồng mạng nhiều lần tranh cãi khi chứng kiến những khoảnh
                  khắc hớ hênh của người đẹp"
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
