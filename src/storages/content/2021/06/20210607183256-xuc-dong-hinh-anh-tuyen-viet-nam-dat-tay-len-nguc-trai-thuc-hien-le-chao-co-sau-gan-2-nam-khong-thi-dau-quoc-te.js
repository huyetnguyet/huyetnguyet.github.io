import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 07/06/2021 06:32 PM",
"title": Xúc động hình ảnh tuyển Việt Nam đặt tay lên ngực trái, thực hiện lễ chào cờ sau gần 2 năm không thi đấu quốc tế",
"description": Đã gần 2 năm, đội tuyển Việt Nam mới lại có một trận đấu quốc tế chính thức mang lại nhiều cảm xúc như vậy.",
"src": ",
"alt": Indonesia, Viet Nam, Viet Nam Vs Indonesia, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, ",
"category": news",
"date": 07/06/2021",
"time": 06:32 PM",
"link": "/xuc-dong-hinh-anh-tuyen-viet-nam-dat-tay-len-nguc-trai-thuc-hien-le-chao-co-sau-gan-2-nam-khong-thi-dau-quoc-te",
"zcomponent": page_20210607183256",
"filepath": ./20210607183256-xuc-dong-hinh-anh-tuyen-viet-nam-dat-tay-len-nguc-trai-thuc-hien-le-chao-co-sau-gan-2-nam-khong-thi-dau-quoc-te.js"
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
  "Xúc động hình ảnh tuyển Việt Nam đặt tay lên ngực trái, thực hiện lễ chào cờ sau gần 2 năm không thi đấu quốc tế";
const author = "HIẾU LƯƠNG,";
const source = "Nhịp sống Việt";
const timestamp = "07/06/2021 06:32 PM";
const description =
  "Đã gần 2 năm, đội tuyển Việt Nam mới lại có một trận đấu quốc tế chính thức mang lại nhiều cảm xúc như vậy.";
const link =
  "xuc-dong-hinh-anh-tuyen-viet-nam-dat-tay-len-nguc-trai-thuc-hien-le-chao-co-sau-gan-2-nam-khong-thi-dau-quoc-te";
const tagparam = [
  "indonesia",
  "viet-nam",
  "viet-nam-vs-indonesia",
  "tuyen-viet-nam-tham-du-vong-loai-world-cup-2022",
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

export default function page_20210607183256() {
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
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-1-1623088048557732454516.jpg"
                    alt="Indonesia, Viet Nam, Viet Nam Vs Indonesia, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, "
                    note="23h45 ngày 7/6 (theo giờ Việt Nam), tuyển Việt Nam ra sân trong trận đấu vòng loại World Cup 2022 gặp Indonesia"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-1-16230880494192036577319.jpg"
                    alt="Indonesia, Viet Nam, Viet Nam Vs Indonesia, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, "
                    note="Trước trận, hai đội chào cờ và hát Quốc ca. Các chàng trai áo đỏ đặt tay lên ngực trái nơi có lá cờ Tổ quốc, hát vang lời ca hào hùng. Sau gần 2 năm, hình ảnh này của đội tuyển gợi lên niềm tự hào trong lòng người hâm mộ"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-2-16230880505071250157854.jpg"
                    alt="Indonesia, Viet Nam, Viet Nam Vs Indonesia, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, "
                    note="Nhóm cầu thủ dự bị cũng hát Quốc ca trang nghiêm trên khán đài"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-3-16230880509941548409947.jpg"
                    alt="Indonesia, Viet Nam, Viet Nam Vs Indonesia, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, "
                    note="Khi Indonesia hát Quốc ca, tuyển thủ Việt Nam đứng nghiêm lắng nghe"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-4-1623088049438258128842.jpg"
                    alt="Indonesia, Viet Nam, Viet Nam Vs Indonesia, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, "
                    note="Sau chào cờ, hai đội xếp hàng chụp ảnh theo kiểu giãn cách vì tình hình dịch bệnh Covid-19"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-5-16230880499342116736690.jpg"
                    alt="Indonesia, Viet Nam, Viet Nam Vs Indonesia, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, "
                    note="Các cầu thủ vỗ tay cảm ơn CĐV Việt Nam tại UAE đã đến sân cổ vũ cho đội tuyển"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-6-162308804994215442000.jpg"
                    alt="Indonesia, Viet Nam, Viet Nam Vs Indonesia, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, "
                    note="Người hâm mộ đang trông chờ vào màn trình diễn đỉnh cao của thầy trò HLV Park Hang-seo để đem về 3 điểm giúp đội tuyển tiến gần mục tiêu vào vòng loại 3 World Cup 2022"
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
