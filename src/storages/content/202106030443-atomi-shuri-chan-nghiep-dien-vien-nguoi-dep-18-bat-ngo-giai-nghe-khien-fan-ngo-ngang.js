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

 <ContentItem
title=""
content=""
src=""
alt=""
types=""
time=""
link="/"
/>

*/
/* ---------------------------------------------------------------- */

const category = "images";
const categoryLink = "/images";

const title =
  "ATOMI SHURI chán nghiệp diễn viên, người đẹp 18+ bất ngờ giải nghệ khiến fan ngỡ ngàng";
const author = "DS";
const source = "Trí Thức Trẻ";
const date = "03/06/2021";
const time = "04:43 PM";
const description =
  "Atomi Shuri mới đây đã tuyên bố giải nghệ sau 6 năm theo đuổi nghề.";
const link =
  "atomi-shuri-chan-nghiep-dien-vien-nguoi-dep-18-bat-ngo-giai-nghe-khien-fan-ngo-ngang";

const tags = ["IDOL", "GIẢI NGHỆ", "ATOMI SHURI"];

/* ---------------------------------------------------------------- */

/* 
<ContentImage
src=""
alt="ATOMI SHURI"
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

export default function page_202106030443() {
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
              <div className="author">{author}</div> - Theo {source} | {date}{" "}
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
                    Atomi Shuri sinh ngày 10/6/1995, sinh ra tại thủ đô Tokyo,
                    Nhật Bản. Ra mắt vào năm 2015 dưới trướng của studio
                    Prestige, cho đến nay Shuri đã có gần 700 tác phẩm trong
                    suốt 6 năm hoạt động. Điều này góp phần khẳng định rằng, dù
                    không phải là một trong những người nổi tiếng nhất, thế
                    nhưng Atomi Shuri cũng có sức hút nhất định với người hâm mộ
                    của cô cũng như công chúng.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-1622701223670344972247.jpeg"
                    alt="ATOMI SHURI"
                    note=""
                  />
                  <p>
                    Mới đây trên YouTube, Atomi Shuri đã đưa tới một tuyên bố
                    không phải là tin tức vui vẻ với các fan, đó là cô nàng
                    chính thức giải nghệ. Thông qua vlog được đăng tải trên
                    youtube, cô nàng chia sẻ rằng bản thân vẫn còn hứng thú với
                    việc đóng phim, tuy nhiên cô muốn gác lại để tập trung vào
                    kế hoạch tương lai tốt hơn.{" "}
                  </p>
                  <p>
                    Sau khi giải nghệ, Atomi Shuri vẫn tiếp tục làm các nội dung
                    YouTube và hoạt động dưới tư cách thành viên cũng như
                    producer của Mipiina – nhóm nhạc idol do công ty Bambi
                    Production thành lập. Khác với Minami Hatsukawa, cô sẽ dừng
                    hẳn việc đóng phim và không ra mắt tác phẩm nghỉ hưu. Bù
                    lại, sẽ có một photobook được sản xuất để tri ân các fan.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-1622701277947892406614.jpeg"
                    alt="ATOMI SHURI"
                    note=""
                  />
                  <p>
                    Nhìn lại thời gian hoạt động suốt 6 năm dưới tư cách một
                    diễn viên phim người lớn, Shuri cho rằng công việc này đã
                    thay đổi cô từ một sinh viên đại học bình thường, nhan sắc
                    không có gì nổi trội thành một idol được nhiều người biết
                    đến và yêu mến.{" "}
                  </p>
                  <p>
                    Nhờ đó, cô trở nên tự tin và hoà đồng hơn cũng như khai phá
                    những tiềm năng của bản thân. Shuri không quên gửi lời cảm
                    ơn đến các diễn viên, đạo diễn, những người làm việc trong
                    ngành công nghiệp 18+ cũng như studio mà cô từng tham gia đã
                    luôn đồng hành và hỗ trợ trong suốt thời gian qua.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-16227013273241102997126.jpeg"
                    alt="ATOMI SHURI"
                    note=""
                  />
                  <p>
                    Hiện tại, Atomi Shuri đang tập trung vào việc quảng bá các
                    sản phẩm cuối của cô với các fan khắp xứ sở hoa anh đào,
                    cũng như gửi lời cảm ơn tới các fan hâm mộ trong suốt thời
                    gian vừa qua trước khi chính thức giải nghệ. Hy vọng rằng,
                    nữ diễn viên xinh đẹp sinh năm 1995 sẽ tiếp tục thành công ở
                    mọi lĩnh vực khác trong sự nghiệp chứ không chỉ là một diễn
                    viên phim người lớn nữa.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-16227023047911566676013.jpeg"
                    alt="ATOMI SHURI"
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
