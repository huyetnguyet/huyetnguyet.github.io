import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '18/06/2021 01:02 PM',
"title": 'Nóng: Nữ streamer sexy nhất Việt Nam - Mai Dora bất ngờ ngất xỉu ngay trên sóng livestream',
"description": 'Hiện tại người hâm mộ đang vô cùng lo lắng cho sức khỏe của nữ streamer Mai Dora.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210618130259--12-851489.jpg',
"alt": '',
"category": 'images',
"date": '18/06/2021',
"time": '01:02 PM',
"link": '/nong-nu-streamer-sexy-nhat-viet-nam-mai-dora-bat-ngo-ngat-xiu-ngay-tren-song-livestream',
"zcomponent": 'page_20210618130259',
"filepath": './20210618130259-nong-nu-streamer-sexy-nhat-viet-nam-mai-dora-bat-ngo-ngat-xiu-ngay-tren-song-livestream.js'
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
  "Nóng: Nữ streamer sexy nhất Việt Nam - Mai Dora bất ngờ ngất xỉu ngay trên sóng livestream";
const author = "GIA MINH,";
const source = "Trí Thức Trẻ";
const timestamp = "18/06/2021 01:02 PM";
const description =
  "Hiện tại người hâm mộ đang vô cùng lo lắng cho sức khỏe của nữ streamer Mai Dora.";
const link =
  "nong-nu-streamer-sexy-nhat-viet-nam-mai-dora-bat-ngo-ngat-xiu-ngay-tren-song-livestream";
const tagparam = [];
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

export default function page_20210618130259() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <p>
                    Nữ MC nóng bỏng của giải đấu VCS Mai Dora mới đây đã làm
                    người hâm mộ vô cùng lo lắng cho sức khỏe cô nàng khi nữ MC
                    bất ngờ ngất xỉu ngay trong lúc livestream.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130259--11-303271.jpg")
                        .default
                    }
                    alt="2, "
                    note=""
                  />
                  <p>
                    Cụ thể, trong livestream ngày 18/6, khi đang giao lưu cùng
                    người hâm mộ thì Mai Dora bất chợt lộ ra biểu cảm mệt mỏi.
                    Trong suốt thời gian đó, cô nàng liên tục thực hiện những
                    hành động như ôm đầu, che mặt như để che giấu rằng mình đang
                    không được ổn.
                  </p>
                  <p>
                    Sau đó, nữ MC định đứng lên để ra ngoài thì bất ngờ khụy
                    xuống, rồi biến mất khỏi camera trước sự lo lắng của người
                    hâm mộ. Livestream cũng được kết thúc ngay sau đó. Ngay lúc
                    này, fan đang cực kỳ lo lắng về tình trạng sức khỏe của Mai
                    Dora.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130259--12-851489.jpg")
                        .default
                    }
                    alt="3, "
                    note="Mai Dora đã biểu hiện trạng thái bất ổn bởi cơ thể bị kiệt sức"
                  />
                  <p>Mai Dora bất ngờ xỉu trong lúc livestream</p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Chúng tôi đã trao đổi với quản lý của Mai Dora. Hiện cô nàng
                    hiện tại đã tỉnh lại. Nguyên nhân cho việc ngất xỉu là bởi
                    nữ streamer không chú ý đến việc ăn uống, dẫn đến cơ thể bị
                    kiệt sức rồi xảy ra sự cố đáng tiếc. Hy vọng Mai Dora sẽ
                    quan tâm bản thân mình nhiều hơn tránh lặp lại tình huống
                    như trên.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130259--13-329373.jpg")
                        .default
                    }
                    alt="4, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130259--14-181886.jpg")
                        .default
                    }
                    alt="5, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130259--15-695121.jpg")
                        .default
                    }
                    alt="6, "
                    note=""
                  />
                  <p>Ảnh: Internet</p>
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
