import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 07/06/2021 06:39 PM",
"title": Cả MXH không ngủ để cổ vũ ĐT Việt Nam đá bóng: Gay cấn quá rồi",
"description": Có đang coi đá bóng 'khum' mọi người ơi!",
"src": ",
"alt": Dt Viet Nam, Viet Nam Da Bong, Indonesia, ",
"category": news",
"date": 07/06/2021",
"time": 06:39 PM",
"link": "/ca-mxh-khong-ngu-de-co-vu-dt-viet-nam-da-bong-gay-can-qua-roi",
"zcomponent": page_20210607183917",
"filepath": ./20210607183917-ca-mxh-khong-ngu-de-co-vu-dt-viet-nam-da-bong-gay-can-qua-roi.js"
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
const title = "Cả MXH không ngủ để cổ vũ ĐT Việt Nam đá bóng: Gay cấn quá rồi";
const author = "SA,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "07/06/2021 06:39 PM";
const description = "Có đang coi đá bóng 'khum' mọi người ơi!";
const link = "ca-mxh-khong-ngu-de-co-vu-dt-viet-nam-da-bong-gay-can-qua-roi";
const tagparam = ["dt-viet-nam", "viet-nam-da-bong", "indonesia"];
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

export default function page_20210607183917() {
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
                  <p>
                    Từ 19/11/2019 tới giờ, dân tình mới có cơ hội được thưởng
                    thức một trận bóng đá tưng bừng của đội tuyển Việt Nam, khỏi
                    phải nói, cõi mạng bây giờ đã rần rần đến cỡ nào.{" "}
                  </p>
                  <p>
                    Ngay thời điểm hiện tại, cả MXH dường như không ngủ để xem
                    trận đấu của ĐT Việt Nam - <strong>Indonesia</strong> tại
                    vòng loại World Cup 2022. Chỉ lướt 1 vòng thôi cũng đủ thấy
                    không khí dân mạng cổ vũ cho những chàng trai áo đỏ rần rần
                    cỡ nào.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/img2822-16230856119531719395093.png"
                    alt="Dt Viet Nam, Viet Nam Da Bong, Indonesia, "
                    note="Yến Xuân - bạn gái Lâm Tây"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/base64-1623086554569140717000.png"
                    alt="Dt Viet Nam, Viet Nam Da Bong, Indonesia, "
                    note="Thiếu gia Hà thành Thế Anh"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/base64-16230865264841352253184.png"
                    alt="Dt Viet Nam, Viet Nam Da Bong, Indonesia, "
                    note="Rich kid Trung Japan"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/11-1623086973539294037795.jpg"
                    alt="Dt Viet Nam, Viet Nam Da Bong, Indonesia, "
                    note="Huy Cung"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/14-16230869737101381951783.jpg"
                    alt="Dt Viet Nam, Viet Nam Da Bong, Indonesia, "
                    note="Lương Mỹ Kỳ"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/15-1623086973724205866255.jpg"
                    alt="Dt Viet Nam, Viet Nam Da Bong, Indonesia, "
                    note="Thiếu gia Phan Hoàng"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/16-16230869737381985710343.jpg"
                    alt="Dt Viet Nam, Viet Nam Da Bong, Indonesia, "
                    note="Yumi Thiên Nga"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/17-16230869737561097503390.jpg"
                    alt="Dt Viet Nam, Viet Nam Da Bong, Indonesia, "
                    note="Á hậu Huyền My và em trai"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/18-1623086973773269613228.jpg"
                    alt="Dt Viet Nam, Viet Nam Da Bong, Indonesia, "
                    note="Trinh Phạm"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/img2820-1623085611908697810337.png"
                    alt="Dt Viet Nam, Viet Nam Da Bong, Indonesia, "
                    note="Võ Ngọc Trân"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/base64-1623087171828238677402.png"
                    alt="Dt Viet Nam, Viet Nam Da Bong, Indonesia, "
                    note="Cindy Lư"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/12-162308697355244484917.jpg"
                    alt="Dt Viet Nam, Viet Nam Da Bong, Indonesia, "
                    note="Các page cũng nhộn nhịp không kém"
                  />

                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/10-16230869734101237646667.jpg"
                    alt="Dt Viet Nam, Viet Nam Da Bong, Indonesia, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/4-1623085611493983512682.jpg"
                    alt="Dt Viet Nam, Viet Nam Da Bong, Indonesia, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/2-1623085611244964302187.jpg"
                    alt="Dt Viet Nam, Viet Nam Da Bong, Indonesia, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/2-1623085611244964302187.jpg"
                    alt="Dt Viet Nam, Viet Nam Da Bong, Indonesia, "
                    note=""
                  />
                </div>
                <p>Ảnh: Tổng hợp</p>
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
