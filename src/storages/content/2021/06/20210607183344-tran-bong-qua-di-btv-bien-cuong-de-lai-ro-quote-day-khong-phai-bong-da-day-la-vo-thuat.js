import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 07/06/2021 06:33 PM",
"title": Trận bóng đi qua, BLV Biên Cương để lại 'rổ' quote: Đây không phải bóng đá, đây là võ thuật!",
"description": Những phát biểu của BLV Biên Cương luôn thu hút sự chú ý của khán giả.",
"src": https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/10-1623091570504298968086.jpg",
"alt": Blv Bien Cuong, Dt Viet Nam, Da Bong, Bien Cuong, Dua Con Cua Than Gio, ",
"category": news",
"date": 07/06/2021",
"time": 06:33 PM",
"link": "/tran-bong-qua-di-btv-bien-cuong-de-lai-ro-quote-day-khong-phai-bong-da-day-la-vo-thuat",
"zcomponent": page_20210607183344",
"filepath": ./20210607183344-tran-bong-qua-di-btv-bien-cuong-de-lai-ro-quote-day-khong-phai-bong-da-day-la-vo-thuat.js"
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
  "Trận bóng đi qua, BLV Biên Cương để lại 'rổ' quote: Đây không phải bóng đá, đây là võ thuật!";
const author = "SA/ ẢNH: THẾ HUÂN,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "07/06/2021 06:33 PM";
const description =
  "Những phát biểu của BLV Biên Cương luôn thu hút sự chú ý của khán giả.";
const link =
  "tran-bong-qua-di-btv-bien-cuong-de-lai-ro-quote-day-khong-phai-bong-da-day-la-vo-thuat";
const tagparam = [
  "blv-bien-cuong",
  "dt-viet-nam",
  "da-bong",
  "bien-cuong",
  "dua-con-cua-than-gio",
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

export default function page_20210607183344() {
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
                <p>
                  Đêm 7/6 rạng sáng 8/6, rất nhiều người dân Việt Nam không ngủ
                  để cổ vũ ĐT Việt Nam trong trận đấu với ĐT Indonesia tại vòng
                  loại World Cup 2022. Kết quả chung cuộc 4 - 0 nghiêng về đội
                  tuyển Việt Nam vẫn đang làm nức lòng người hâm mộ.
                </p>
                <ContentImage
                  src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/3-16230888011231793305657.png"
                  alt="Blv Bien Cuong, Dt Viet Nam, Da Bong, Bien Cuong, Dua Con Cua Than Gio, "
                  note=""
                />
                <p>
                  Trong trận đấu này, ngoài những màn biểu diễn của các cầu thủ
                  trên sân cỏ, ai cũng mong đợi phần bình luận đến từ "đứa con
                  của thần gió" - BLV Biên Cương. Không phụ sự mong đợi, BLV
                  Biên Cương tiếp tục duy trì phong độ bình luận, cho ra đời
                  những câu quote đi vào lòng dân mạng.
                </p>
                <p>Và đây là cập nhật cho những ai đã bỏ lỡ mất nhé!</p>
                <ContentImage
                  src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/10-1623091570504298968086.jpg"
                  alt="Blv Bien Cuong, Dt Viet Nam, Da Bong, Bien Cuong, Dua Con Cua Than Gio, "
                  note=""
                />
                <ContentImage
                  src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/11-1623092200031944099431.jpg"
                  alt="Blv Bien Cuong, Dt Viet Nam, Da Bong, Bien Cuong, Dua Con Cua Than Gio, "
                  note=""
                />
                <ContentImage
                  src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/7-16230912087421829705794.jpg"
                  alt="Blv Bien Cuong, Dt Viet Nam, Da Bong, Bien Cuong, Dua Con Cua Than Gio, "
                  note=""
                />
                <ContentImage
                  src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/8-16230912087722025146840.jpg"
                  alt="Blv Bien Cuong, Dt Viet Nam, Da Bong, Bien Cuong, Dua Con Cua Than Gio, "
                  note=""
                />
                <ContentImage
                  src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/6-1623091208660211602637.jpg"
                  alt="Blv Bien Cuong, Dt Viet Nam, Da Bong, Bien Cuong, Dua Con Cua Than Gio, "
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
