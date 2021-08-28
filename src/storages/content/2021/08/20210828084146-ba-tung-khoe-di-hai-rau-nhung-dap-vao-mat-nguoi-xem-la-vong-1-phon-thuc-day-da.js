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
"timestamp": '28/08/2021 08:41 AM',
"title": 'Bà Tưng khoe đi hái rau nhưng đập vào mắt người xem là vòng 1 phồn thực đẫy đà',
"description": 'Dân mạng lại tiếp tục được dịp chứng kiến màn khoe khéo vòng 1 của bà Tưng.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/25/aug-25-2021-19-18-34-16298939875832081723256.gif',
"alt": 'Hiện tượng mạng,lê thị huyền anh,bà tưng,sexy,khoe vòng 1,',
"category": 'images',
"date": '28/08/2021',
"time": '08:41 AM',
"link": '/ba-tung-khoe-di-hai-rau-nhung-dap-vao-mat-nguoi-xem-la-vong-1-phon-thuc-day-da',
"zcomponent": 'page_20210828084146',
"filepath": './20210828084146-ba-tung-khoe-di-hai-rau-nhung-dap-vao-mat-nguoi-xem-la-vong-1-phon-thuc-day-da.js'
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
  "Bà Tưng khoe đi hái rau nhưng đập vào mắt người xem là vòng 1 phồn thực đẫy đà";
const author = "THẾ HUÂN,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "28/08/2021 08:41 AM";
const description =
  "Dân mạng lại tiếp tục được dịp chứng kiến màn khoe khéo vòng 1 của bà Tưng.";
const link =
  "ba-tung-khoe-di-hai-rau-nhung-dap-vao-mat-nguoi-xem-la-vong-1-phon-thuc-day-da";
const tagparam = [
  "Hiện tượng mạng",
  "lê thị huyền anh",
  "bà tưng",
  "sexy",
  "khoe vòng 1",
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

export default function page_20210828084146() {
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
                      Nếu được chọn một <strong>hiện tượng mạng</strong> vẫn giữ
                      được phong độ theo năm tháng, người đó chắc chắn phải là{" "}
                      <strong>bà Tưng</strong> (tên thật{" "}
                      <strong>Lê Thị Huyền Anh</strong>, SN 1993). Mặc dù vài
                      năm trở lại đây, bà Tưng không còn hoạt động sôi nổi trên
                      Internet, nhưng vóc dáng nuột, thương hiệu{" "}
                      <strong>sexy</strong> đã tiết chế lại nhiều so với thời
                      gian trước. Nhiều netizen thậm chí còn nhận xét bà Tưng
                      bây giờ xinh hơn ngày xưa.
                    </p>
                    <p>
                      Mới đây, <strong>bà Tưng</strong> lại tiếp tục khiến dân
                      tình không thể ngừng rời mắt khi khoe video hái rau trong
                      vườn. Trọng tâm của bức ảnh lại không nằm ở chuyện hái rau
                      mà ở ngay... vòng 1 của bà Tưng.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/25/aug-25-2021-19-18-34-16298939875832081723256.gif"
                      alt="1, Hiện tượng mạng,lê thị huyền anh,bà tưng,sexy,khoe vòng 1,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/25/aug-25-2021-19-18-46-16298939876111525162238.gif"
                      alt="2, Hiện tượng mạng,lê thị huyền anh,bà tưng,sexy,khoe vòng 1,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/25/aug-25-2021-19-18-57-162989429476512243273.gif"
                      alt="3, Hiện tượng mạng,lê thị huyền anh,bà tưng,sexy,khoe vòng 1,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/25/aug-25-2021-19-19-06-16298942948511252755998.gif"
                      alt="4, Hiện tượng mạng,lê thị huyền anh,bà tưng,sexy,khoe vòng 1,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/25/2298330403814295366774143821396552448236996n-1629894357160964238107.jpeg"
                      alt="5, Hiện tượng mạng,lê thị huyền anh,bà tưng,sexy,khoe vòng 1,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/25/2173947943619135319623485029151203296816407n-1629894357183820915837.jpeg"
                      alt="6, Hiện tượng mạng,lê thị huyền anh,bà tưng,sexy,khoe vòng 1,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/25/2269645343739306174273062847125587757991943n-16298943572151742323083.jpeg"
                      alt="7, Hiện tượng mạng,lê thị huyền anh,bà tưng,sexy,khoe vòng 1,"
                      note=""
                    />

                    <p>Nguồn: Tổng hợp</p>
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
