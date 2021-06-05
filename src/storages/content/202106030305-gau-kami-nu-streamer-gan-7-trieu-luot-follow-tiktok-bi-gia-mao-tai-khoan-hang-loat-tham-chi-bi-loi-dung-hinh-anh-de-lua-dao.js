import React from "react";
import "../../components/page.css";
import { AdsHorizontal, AdsVertical } from "../../components/adsMethods";
import { RandomFeature } from "../../components/methods";

import {
  Content,
  ContentImage,
  FacebookShareButton,
} from "../../components/content";

/* Data Input */
/*
title="Gấu Kami, nữ streamer gần 7 triệu lượt follow TikTok bị giả mạo tài khoản hàng loạt, thậm chí bị lợi dụng hình ảnh để lừa đảo"
content="Gấm Kami - nữ streamer/TikToker cực hot hiện nay đang bị nhiều kẻ gian giả mạo tài khoản TikTok và mục đích không chỉ là câu view, câu like mà thậm chí còn dùng để lừa đảo."
src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/2/photo-1-1622620397947621513281.jpg"
alt="Gấu Kami"
types="News"
time="03/06/2021 03:05 AM "
link="/gau-kami-nu-streamer-gan-7-trieu-luot-follow-tiktok-bi-gia-mao-tai-khoan-hang-loat-tham-chi-bi-loi-dung-hinh-anh-de-lua-dao"
*/
/* ---------------------------------------------------------------- */

const category = "news";
const categoryLink = "/news";

const title =
  "Gấu Kami, nữ streamer gần 7 triệu lượt follow TikTok bị giả mạo tài khoản hàng loạt, thậm chí bị lợi dụng hình ảnh để lừa đảo";
const author = "KENTTT";
const source = "TRÍ THỨC TRẺ";
const date = "03/06/2021";
const time = "03:05 AM";
const description =
  "Gấm Kami - nữ streamer/TikToker cực hot hiện nay đang bị nhiều kẻ gian giả mạo tài khoản TikTok và mục đích không chỉ là câu view, câu like mà thậm chí còn dùng để lừa đảo.";
const link =
  "gau-kami-nu-streamer-gan-7-trieu-luot-follow-tiktok-bi-gia-mao-tai-khoan-hang-loat-tham-chi-bi-loi-dung-hinh-anh-de-lua-dao";

const tags = [
  "streamer",
  "Gấm Kami",
  "bida",
  "người theo dõi",
  "giả mạo",
  "Free Fire",
  "liên quân",
];

/* ---------------------------------------------------------------- */

/* 
<ContentImage
src=""
alt=""
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

export default function page_202106030305() {
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
                    Là cái tên đang cực hot thời gian qua cùng vô số những video
                    chơi bida triệu view,{" "}
                    <div className="highlight">Gấm Kami</div> đã trở thành
                    streamer có lượng người theo dõi khủng nhất TikTok khi cán
                    mốc 6,9 triệu người theo dõi. Tuy nhiên cũng chính sự nổi
                    tiếng nhanh chóng này khiến cô nàng bị giả mạo tài khoản
                    TikTok. Hàng loạt kênh YouTube sử dụng tên và hình ảnh của
                    nữ streamer này và thu về hàng chục, hàng trăm nghìn
                    followers và cả triệu view.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/2/photo-1-1622619285555307338790.jpg"
                    alt="Gấu Kami"
                    note="Ngoại trừ tài khoản TikTok có gần 7 triệu người theo dõi thì nhiều kênh giả mạo cũng thu hút lượt người đăng ký rất khủng"
                  />
                  <p>
                    Nhưng đáng nói nhất chính là việc các tài khoản TikTok mạo
                    danh Gấm Kami không chỉ dùng để câu like, câu view mà thậm
                    chí còn bán phần mềm gian lận (hack) và có dấu hiệu lừa đảo
                    game thủ.
                  </p>
                  <p>
                    Theo đó, kẻ mạo danh ghép hình ảnh nữ streamer này vào các
                    video mà chủ yếu là 2 tựa game có lượng fan đông đảo là Free
                    Fire và Liên Quân Mobile để lừa những game thủ nhẹ dạ cả
                    tin. Kèm theo đó là những lời mời gọi vô cùng hấp dẫn: "Shop
                    đang khuyến mại 20k trúng 40.000 Kim Cương", "Vào quân đoàn
                    Gấm nha, Gấm sẽ cấp nhân vật miễn phí"...
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/2/-1622619015963229977353.jpg"
                    alt="Gấu Kami"
                    note="Hình ảnh Gấm Kami livestream được ghép vào các clip"
                  />
                  <p>
                    Được biết, là một fan cuồng của bida nên Gấm Kami thời gian
                    qua chỉ làm những nội dung liên quan đến trò chơi giải trí
                    này cũng như các video đời sống hằng ngày. Ngay cả những
                    phiên livestream của cô nàng cũng chơi một số tựa game bida
                    online và Gấm Kami không hề chơi các tựa game này cũng như
                    kêu gọi game thủ vào các shop online.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/2/photo-1-1622620397947621513281.jpg"
                    alt="Gấu Kami"
                    note="Cô nàng streamer Gấm Kami là một cơ thủ cực trình độ đấy nhé!"
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
