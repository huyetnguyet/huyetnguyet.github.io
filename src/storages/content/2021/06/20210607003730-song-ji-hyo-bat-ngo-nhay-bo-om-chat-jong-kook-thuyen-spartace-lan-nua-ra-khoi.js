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
"timestamp": 07/06/2021 12:37 AM",
"title": Song Ji Hyo bất ngờ nhảy bổ ôm chặt Jong Kook, 'thuyền SpartAce' lần nữa ra khơi!",
"description": Hành động thân mật giữa Song Ji Hyo - Kim Jong Kook khiến fan cực kỳ thích thú!",
"src": ",
"alt": Running Man, Song Ji Hyo, Kim Jong Kook, Lee Kwang Soo, Yoo Jae Suk, Spartace, ",
"category": neews",
"date": 07/06/2021",
"time": 12:37 AM",
"link": "/song-ji-hyo-bat-ngo-nhay-bo-om-chat-jong-kook-thuyen-spartace-lan-nua-ra-khoi",
"zcomponent": page_20210607003730",
"filepath": ./20210607003730-song-ji-hyo-bat-ngo-nhay-bo-om-chat-jong-kook-thuyen-spartace-lan-nua-ra-khoi.js"
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "neews";
const categoryLink = "/neews";
const title =
  "Song Ji Hyo bất ngờ nhảy bổ ôm chặt Jong Kook, 'thuyền SpartAce' lần nữa ra khơi!";
const author = "BELL SHINO,";
const source = "Trí Thức Trẻ";
const timestamp = "07/06/2021 12:37 AM";
const description =
  "Hành động thân mật giữa Song Ji Hyo - Kim Jong Kook khiến fan cực kỳ thích thú!";
const link =
  "song-ji-hyo-bat-ngo-nhay-bo-om-chat-jong-kook-thuyen-spartace-lan-nua-ra-khoi";
const tagparam = [
  "running-man",
  "song-ji-hyo",
  "kim-jong-kook",
  "lee-kwang-soo",
  "yoo-jae-suk",
  "spartace",
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

export default function page_20210607003730() {
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
                      Trong tập phát sóng mới nhất, các thành viên Running Man
                      đã tham gia cuộc đua "3 bữa phục vụ Yoo Jae Suk" theo đúng
                      nguyện vọng của "MC quốc dân" trong tập trước đó. Đặc
                      biệt, trong một phần trò chơi giữa 9 thành viên, fan
                      <strong> SpartAce</strong>
                    </p>
                    <p>
                      Cụ thể, theo luật từ chương trình, mỗi thành viên sẽ theo
                      thứ tự nhảy vào các vị trí ngẫu nhiên trên thảm. Trong
                      trường hợp đạp trúng giày đối thủ sẽ có quyền "hoạ mặt"
                      cho thành viên đó, nếu ngã sẽ bị loại. Sau khi
                      <strong> Lee Kwang Soo</strong>
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-16230057709232088822568.jpg"
                      alt="Running Man, Song Ji Hyo, Kim Jong Kook, Lee Kwang Soo, Yoo Jae Suk, Spartace, "
                      note="Jong Kook thành công đạp trúng giày cậu em"
                    />
                    <p></p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-16230057709232088822568.jpg"
                      alt="Running Man, Song Ji Hyo, Kim Jong Kook, Lee Kwang Soo, Yoo Jae Suk, Spartace, "
                      note="Ji Hyo đã bất ngờ nhảy đến ôm chặt Jong Kook"
                    />
                    <p>
                      Khi bị Yoo Jae Suk chất vấn,<strong>Song Ji Hyo</strong>
                      Khi bị<strong> Yoo Jae Suk</strong>
                    </p>
                    <p></p>
                    <p>
                      Dù biết đây chỉ là một trong những phân đoạn mang tính
                      giải trí của chương trình nhưng "fan ruột" của
                      <strong> SpartAce</strong>
                    </p>
                    <p>
                      Sau khi Monday Couple tan rã, Song Ji Hyo luôn được các
                      thành viên ghép đôi cùng
                      <strong> Kim Jong Kook</strong>
                    </p>
                    <p></p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
