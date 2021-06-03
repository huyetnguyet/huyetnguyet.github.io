import React from "react";
import "../../components/page.css";
import { AdsHorizontal, AdsVertical } from "../../components/adsMethods";

import {
  Content,
  ContentImage,
  FacebookShareButton,
} from "../../components/content";

/* Data Input */
/*

 <ContentItem
title="Vũ Thị Anh Thư lộ ảnh thời chưa phẫu thuật thẩm mỹ?"
content="So sánh ảnh trước đây, nhiều người cho rằng Vũ Thị Anh Thư đã đụng chạm "dao kéo" nhiều bộ phận trên cơ thể để có nhan sắc như hiện tại."
src="https://sohanews.sohacdn.com/160588918557773824/2021/6/1/v2-16225299233441943712939.jpg"
alt="Vũ Thị Anh Thư"
types="images"
time="01/06/2021 19:00"
link="/vu-thi-anh-thu-lo-anh-thoi-chua-phau-thuat-tham-my"
/>

*/
/* ---------------------------------------------------------------- */

const category = "images";
const categoryLink = "/images";

const title = "Vũ Thị Anh Thư lộ ảnh thời chưa phẫu thuật thẩm mỹ?";
const author = "Na Na";
const timestamp = " Theo Pháp luật và Bạn đọc | 01/06/2021 19:00";
const description =
  "So sánh ảnh trước đây, nhiều người cho rằng Vũ Thị Anh Thư đã đụng chạm 'dao kéo' nhiều bộ phận trên cơ thể để có nhan sắc như hiện tại.";
const link = "vu-thi-anh-thu-lo-anh-thoi-chua-phau-thuat-tham-my";
const source = "Pháp luật và Bạn đọc";

const tags = ["Vũ Thị Anh Thư", "lộ clip nóng"];

/* ---------------------------------------------------------------- */

/* 
<ContentImage
src=""
alt="Vũ Thị Anh Thư"
note=""
/>
                  */

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

export default function Templates() {
  return (
    <>
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
              <div className="author">{author}</div>
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
                    Vũ Thị Anh Thư sinh năm 1998 và từng là sinh viên khoa Thanh
                    Nhạc của Đại học Sư phạm nghệ thuật Trung ương. Dù học hát
                    chuyên nghiệp, song cô lại thử sức với vai trò người mẫu
                    đóng quảng cáo và từng làm diễn viên đảm nhận vai phụ một số
                    phim như: Đại gia chân đất, Sinh tử, Về nhà đi con...
                  </p>
                  <ContentImage
                    src="https://sohanews.sohacdn.com/160588918557773824/2021/6/1/v2-16225299233441943712939.jpg"
                    alt="Vũ Thị Anh Thư"
                    note=""
                  />
                  <p>
                    Năm 2020, Anh Thư đánh tiếng tham gia "Hoa hậu Việt Nam".
                    Tuy hình ảnh, thông tin có xuất hiện trên trang quảng bá của
                    cuộc thi và được đánh giá là ứng viên có nhan sắc cuốn hút,
                    song cô lại không tham gia vòng sơ khảo.
                  </p>
                  <ContentImage
                    src="https://sohanews.sohacdn.com/160588918557773824/2021/6/1/v1-1622529923367111527363.jpg"
                    alt="Vũ Thị Anh Thư"
                    note="Gần đây, Anh Thư tiếp tục trở thành cái tên gây bàn tán khi vướng phải vào một scandal ầm ĩ."
                  />
                  <ContentImage
                    src="https://sohanews.sohacdn.com/160588918557773824/2021/6/1/v5-162252992325912975549.jpg"
                    alt="Vũ Thị Anh Thư"
                    note=""
                  />
                  <ContentImage
                    src="https://sohanews.sohacdn.com/160588918557773824/2021/6/1/v9-1622529923139388890259.jpg"
                    alt="Vũ Thị Anh Thư"
                    note="Chưa dừng lại ở đó, câu chuyện cô từng phẫu thuật thẩm mỹ cũng được bàn ra tán vào trên các diễn đàn."
                  />
                  <ContentImage
                    src="https://sohanews.sohacdn.com/160588918557773824/2021/6/1/v4-16225299232771262438331.png"
                    alt="Vũ Thị Anh Thư"
                    note="Nhiều người phát hiện Anh Thư từng nhận quảng cáo cho dịch vụ gọt hàm, nâng cấp vòng 1 trước khi chia sẻ nguyện vọng ghi danh vào 'Hoa hậu Việt Nam'."
                  />
                  <ContentImage
                    src="https://sohanews.sohacdn.com/160588918557773824/2021/6/1/v8-16225299231951503975792.jpg"
                    alt="Vũ Thị Anh Thư"
                    note="Và trong một bức ảnh chụp ở quá khứ, cô để lộ việc chỉ sở hữu làn da ngăm đen vóc dáng chưa cân đối và gợi cảm như vài năm trở lại đây."
                  />
                  <ContentImage
                    src="https://sohanews.sohacdn.com/160588918557773824/2021/6/1/v7-16225299232232100333077.jpg"
                    alt="Vũ Thị Anh Thư"
                    note="Với khoảnh khắc chụp ở góc gần hơn, Anh Thư chưa có những đường nét thanh thoát, xinh đẹp trên gương mặt như lúc đã nhiều người biết tới."
                  />
                </div>
              </div>

              <div className="randomNewFeature"></div>

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
