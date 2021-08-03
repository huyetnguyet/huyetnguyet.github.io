import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature, RelationNews } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 08/06/2021 02:04 PM",
"title": Ngắm nhìn nhan sắc tuyệt phẩm của 'em gái quốc dân' Kudo Mio, người từng hóa thân thành 'siêu nhân hồng'",
"description": Kudo Mio là chủ nhân của những màn 'biến hình' thành 'siêu nhân hồng' nổi tiếng trong Mashin Sentai Kiramager.",
"src": https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/lai1-16231402824472146662111.jpg",
"alt": Festival Cosplay, Le Hoi Cosplay, Bo Anh Cosplay, Chum Anh Cosplay, Anh Cosplay, Nhan Vat Cosplay, Kudo Mio, Kamen Rider Ghost, Mashin Sentai Kiramager, ",
"category": images",
"date": 08/06/2021",
"time": 02:04 PM",
"link": "/ngam-nhin-nhan-sac-tuyet-pham-cua-em-gai-quoc-dan-kudo-mio-nguoi-tung-hoa-than-thanh-sieu-nhan-hong",
"zcomponent": page_20210608140447",
"filepath": ./20210608140447-ngam-nhin-nhan-sac-tuyet-pham-cua-em-gai-quoc-dan-kudo-mio-nguoi-tung-hoa-than-thanh-sieu-nhan-hong.js"
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
  "Ngắm nhìn nhan sắc tuyệt phẩm của 'em gái quốc dân' Kudo Mio, người từng hóa thân thành 'siêu nhân hồng'";
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "08/06/2021 02:04 PM";
const description =
  "Kudo Mio là chủ nhân của những màn 'biến hình' thành 'siêu nhân hồng' nổi tiếng trong Mashin Sentai Kiramager.";
const link =
  "ngam-nhin-nhan-sac-tuyet-pham-cua-em-gai-quoc-dan-kudo-mio-nguoi-tung-hoa-than-thanh-sieu-nhan-hong";
const tagparam = [
  "festival-cosplay",
  "le-hoi-cosplay",
  "bo-anh-cosplay",
  "chum-anh-cosplay",
  "anh-cosplay",
  "nhan-vat-cosplay",
  "kudo-mio",
  "kamen-rider-ghost",
  "mashin-sentai-kiramager",
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

export default function page_20210608140447() {
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
                      <strong>Kudo Mio</strong> được mệnh danh là "em gái quốc
                      dân" của Nhật Bản. Kudo Mio sinh ngày 8 tháng 10 năm 1999
                      tại Tokyo, Nhật Bản. Ngay từ lúc mới học lớp 4, Mio đã bắt
                      đầu sự nghiệp người mẫu nhờ vào vẻ ngoài đáng yêu và tài
                      năng thiên bẩm của mình. Sau nhiều năm hoạt động, Mio lấn
                      sân sang mảng điện ảnh, ghi dấu trong lòng khán giả với
                      nhiều vai diễn khác nhau. Gần đây, cô đã hóa thân thành
                      Kanon Fukami trong <strong>Kamen Rider Ghost</strong> và
                      siêu nhân hồng - Kiramei Pink/ Ooharu Sayo trong{" "}
                      <strong>Mashin Sentai Kiramager</strong>.
                    </p>
                    <p>
                      Dậy thì thành công là cụm từ mà nhiều khán giả dành tặng
                      cho cô gái này. Không chỉ đẹp từ bé mà lớn lên, Mio khiến
                      không ít khán giả chết mê chết mệt vì vẻ đẹp của mình.
                      Cùng chúng tôi ngắm nhìn nhan sắc tuyệt vời của cô gái
                      được mệnh danh là "em gái quốc dân" này nhé!
                    </p>
                    <p>
                      Các bạn thấy sao về nhan sắc của "em gái quốc dân"{" "}
                      <strong>Kudo Mio</strong> từng hóa thân thành "siêu nhân
                      hồng" trong <strong>Mashin Sentai Kiramager</strong>? Hãy
                      để lại ý kiến của mình nhé!
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/lai1-16231402824472146662111.jpg"
                      alt="Festival Cosplay, Le Hoi Cosplay, Bo Anh Cosplay, Chum Anh Cosplay, Anh Cosplay, Nhan Vat Cosplay, Kudo Mio, Kamen Rider Ghost, Mashin Sentai Kiramager, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/lai2-16231402860361912838413.png"
                      alt="Festival Cosplay, Le Hoi Cosplay, Bo Anh Cosplay, Chum Anh Cosplay, Anh Cosplay, Nhan Vat Cosplay, Kudo Mio, Kamen Rider Ghost, Mashin Sentai Kiramager, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/lai3-1623140546246234525676.jpg"
                      alt="Festival Cosplay, Le Hoi Cosplay, Bo Anh Cosplay, Chum Anh Cosplay, Anh Cosplay, Nhan Vat Cosplay, Kudo Mio, Kamen Rider Ghost, Mashin Sentai Kiramager, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/lai4-16231405500892081168589.jpg"
                      alt="Festival Cosplay, Le Hoi Cosplay, Bo Anh Cosplay, Chum Anh Cosplay, Anh Cosplay, Nhan Vat Cosplay, Kudo Mio, Kamen Rider Ghost, Mashin Sentai Kiramager, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/lai5-16231405537752062169563.jpg"
                      alt="Festival Cosplay, Le Hoi Cosplay, Bo Anh Cosplay, Chum Anh Cosplay, Anh Cosplay, Nhan Vat Cosplay, Kudo Mio, Kamen Rider Ghost, Mashin Sentai Kiramager, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/lai8-1623140715804288902573.jpg"
                      alt="Festival Cosplay, Le Hoi Cosplay, Bo Anh Cosplay, Chum Anh Cosplay, Anh Cosplay, Nhan Vat Cosplay, Kudo Mio, Kamen Rider Ghost, Mashin Sentai Kiramager, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/lai9-16231407198181010910596.jpg"
                      alt="Festival Cosplay, Le Hoi Cosplay, Bo Anh Cosplay, Chum Anh Cosplay, Anh Cosplay, Nhan Vat Cosplay, Kudo Mio, Kamen Rider Ghost, Mashin Sentai Kiramager, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/lai10-16231407233521656523168.jpg"
                      alt="Festival Cosplay, Le Hoi Cosplay, Bo Anh Cosplay, Chum Anh Cosplay, Anh Cosplay, Nhan Vat Cosplay, Kudo Mio, Kamen Rider Ghost, Mashin Sentai Kiramager, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/lai11-1623140726991196762730.jpg"
                      alt="Festival Cosplay, Le Hoi Cosplay, Bo Anh Cosplay, Chum Anh Cosplay, Anh Cosplay, Nhan Vat Cosplay, Kudo Mio, Kamen Rider Ghost, Mashin Sentai Kiramager, "
                      note=""
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
