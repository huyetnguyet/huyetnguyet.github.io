import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 07/06/2021 06:36 PM",
"title": Duy Mạnh bóp cổ cầu thủ Indonesia sau pha phạm lỗi nguy hiểm với Tuấn Anh",
"description": Các cầu thủ Indonesia liên tục phạm lỗi bằng những pha vào bóng quyết liệt quá mức cần thiết đối với các tuyển thủ Việt Nam.",
"src": ",
"alt": Duy Manh, Quang Haii, Doi Tuyen Viet Nam, Cau Thu Indonesia, ",
"category": news",
"date": 07/06/2021",
"time": 06:36 PM",
"link": "/duy-manh-bop-co-cau-thu-indonesia-sau-pha-pham-loi-nguy-hiem-voi-tuan-anh",
"zcomponent": page_20210607183631",
"filepath": ./20210607183631-duy-manh-bop-co-cau-thu-indonesia-sau-pha-pham-loi-nguy-hiem-voi-tuan-anh.js"
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
  "Duy Mạnh bóp cổ cầu thủ Indonesia sau pha phạm lỗi nguy hiểm với Tuấn Anh";
const author = "HIẾU LƯƠNG,";
const source = "Nhịp Sống Việt";
const timestamp = "07/06/2021 06:36 PM";
const description =
  "Các cầu thủ Indonesia liên tục phạm lỗi bằng những pha vào bóng quyết liệt quá mức cần thiết đối với các tuyển thủ Việt Nam.";
const link =
  "duy-manh-bop-co-cau-thu-indonesia-sau-pha-pham-loi-nguy-hiem-voi-tuan-anh";
const tagparam = [
  "duy-manh",
  "quang-haii",
  "doi-tuyen-viet-nam",
  "cau-thu-indonesia",
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

export default function page_20210607183631() {
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
            <div className="author">{author}</div> - Theo {source} | {timestamp}
          </p>
        </div>
        <FacebookShareButton link={facebookLinkShare} />

        <div class="containerContent">
          <AdsHorizontal />
          <div className="content">
            <div className="contentContainer">
              <p className="description">{description}</p>
              <div className="contentBody">
                <ContentImage
                  src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-1-16230894293341279999988.jpg"
                  alt="Duy Manh, Quang Haii, Doi Tuyen Viet Nam, Cau Thu Indonesia, "
                  note="Các cầu thủ trẻ Indonesia đã dùng cách chơi bóng cực rát để tiếp tuyển Việt Nam. Phút 24, hậu vệ Pratama có pha vào bóng bằng gầm giày với Tuấn Anh khiến người xem phẫn nộ. Nhưng cầu thủ số 5 của Indonesia không phải nhận thẻ phạt"
                />
                <ContentImage
                  src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-1-16230894306521371202549.jpg"
                  alt="Duy Manh, Quang Haii, Doi Tuyen Viet Nam, Cau Thu Indonesia, "
                  note="Thấy Tuấn Anh nằm sân đau đớn, các đồng đội lập tức tiến đến bảo vệ anh. Duy Mạnh tranh cãi với Pratama về pha bóng triệt hạ của đối thủ"
                />
                <ContentImage
                  src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-2-1623089431163204652133.jpg"
                  alt="Duy Manh, Quang Haii, Doi Tuyen Viet Nam, Cau Thu Indonesia, "
                  note="Pratama cũng phản ứng, không ngại tranh cãi khiến Duy Mạnh tức giận"
                />
                <ContentImage
                  src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-3-16230894305991210492944.jpg"
                  alt="Duy Manh, Quang Haii, Doi Tuyen Viet Nam, Cau Thu Indonesia, "
                  note="Anh dùng tay bóp cổ hậu vệ Indonesia"
                />
                <ContentImage
                  src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-4-162308943120223709742.jpg"
                  alt="Duy Manh, Quang Haii, Doi Tuyen Viet Nam, Cau Thu Indonesia, "
                  note="Cầu thủ khác của 2 đội lập tức can ngăn những cái đầu nóng"
                />
                <ContentImage
                  src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-5-16230894307381944483777.jpg"
                  alt="Duy Manh, Quang Haii, Doi Tuyen Viet Nam, Cau Thu Indonesia, "
                  note="Ở các sân chơi quốc tế, không hiếm gặp những khoảnh khắc cầu thủ Việt Nam bảo vệ nhau sau những tình huống chơi xấu của đối phương"
                />
                <ContentImage
                  src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-6-16230894309941551519569.jpg"
                  alt="Duy Manh, Quang Haii, Doi Tuyen Viet Nam, Cau Thu Indonesia, "
                  note="Quang Hải kéo Duy Mạnh đi xa nhưng cầu thủ Indonesia tiếp tục cự cãi"
                />
                <ContentImage
                  src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-8-16230894312671381905926.jpg"
                  alt="Duy Manh, Quang Haii, Doi Tuyen Viet Nam, Cau Thu Indonesia, "
                  note="Ở các sân chơi quốc tế, không hiếm gặp những khoảnh khắc cầu thủ Việt Nam bảo vệ nhau sau những tình huống chơi xấu của đối phương"
                />
                <ContentImage
                  src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-9-16230894316361131777618.jpg"
                  alt="Duy Manh, Quang Haii, Doi Tuyen Viet Nam, Cau Thu Indonesia, "
                  note="Duy Mạnh trao đổi với trọng tài chính"
                />
                <ContentImage
                  src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-10-16230894311431991339689.jpg"
                  alt="Duy Manh, Quang Haii, Doi Tuyen Viet Nam, Cau Thu Indonesia, "
                  note="Quế Ngọc Hải cũng cần một sự công bằng cho Tuấn Anh"
                />
                <p></p>
                <ContentImage
                  src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-7-16230894309631325892674.jpg"
                  alt="Duy Manh, Quang Haii, Doi Tuyen Viet Nam, Cau Thu Indonesia, "
                  note=""
                />
                <ContentImage
                  src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-11-1623089431084279263441.jpg"
                  alt="Duy Manh, Quang Haii, Doi Tuyen Viet Nam, Cau Thu Indonesia, "
                  note="Bạn huấn luyện tuyển Việt Nam cũng đứng ngồi không yên khi chứng kiến các học trò bị phạm lỗi"
                />
                <ContentImage
                  src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-12-16230894317022049611900.jpg"
                  alt="Duy Manh, Quang Haii, Doi Tuyen Viet Nam, Cau Thu Indonesia, "
                  note=""
                />
                <ContentImage
                  src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-13-1623089431284924870648.jpg"
                  alt="Duy Manh, Quang Haii, Doi Tuyen Viet Nam, Cau Thu Indonesia, "
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
      </Content>
    </>
  );
}
