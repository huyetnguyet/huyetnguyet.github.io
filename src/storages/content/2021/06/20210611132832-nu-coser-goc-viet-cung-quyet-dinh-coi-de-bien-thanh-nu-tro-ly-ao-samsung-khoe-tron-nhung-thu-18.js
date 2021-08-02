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
"timestamp": '11/06/2021 01:28 PM',
"title": 'Nữ coser gốc Việt cũng quyết định “cởi” để biến thành nữ trợ lý ảo Samsung, khoe trọn những thứ "18+"',
"description": 'Có vẻ như, nữ trợ lý ảo của Samsung vẫn chưa hết hot khi mới đây, nàng cosplayer gốc Việt cũng quyết định “cởi” để biến thân.',
"src": 'storages/images/content/2021/20210611132832--10-789976.jpg',
"alt": 'Sam, Samsung, Gai Xinh, Cosplayer, images, Hanna Bunny, Coser, ',
"category": 'images',
"date": '11/06/2021',
"time": '01:28 PM',
"link": '/nu-coser-goc-viet-cung-quyet-dinh-coi-de-bien-thanh-nu-tro-ly-ao-samsung-khoe-tron-nhung-thu-18',
"zcomponent": 'page_20210611132832',
"filepath": './20210611132832-nu-coser-goc-viet-cung-quyet-dinh-coi-de-bien-thanh-nu-tro-ly-ao-samsung-khoe-tron-nhung-thu-18.js'
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
  'Nữ coser gốc Việt cũng quyết định “cởi” để biến thành nữ trợ lý ảo Samsung, khoe trọn những thứ "18+"';
const author = "Lee Chueng Hee";
const source = "Pháp luật và bạn đọc";
const timestamp = "11/06/2021 01:28 PM";
const description =
  "Có vẻ như, nữ trợ lý ảo của Samsung vẫn chưa hết hot khi mới đây, nàng cosplayer gốc Việt cũng quyết định “cởi” để biến thân.";
const link =
  "nu-coser-goc-viet-cung-quyet-dinh-coi-de-bien-thanh-nu-tro-ly-ao-samsung-khoe-tron-nhung-thu-18";
const tagparam = [
  "sam",
  "samsung",
  "gai-xinh",
  "cosplayer",
  "18",
  "hanna-bunny",
  "coser",
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

export default function page_20210611132832() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    Trong tuần vừa qua, một trong những nhân vật được cư dân
                    mạng quan tâm nhất chính là nàng nữ trợ lý ảo của{" "}
                    <strong>Sam</strong>sung với cái tên là Sam. Không chỉ
                    Samfan mà ngay cả game thủ trên toàn thế giới cũng ngây ngất
                    với phiên bản nữ trợ lý ảo bốc lửa đến từ{" "}
                    <strong>Samsung</strong>. Như đã từng giới thiệu tại một vài
                    bài viết trước đây, Sam được thiết kế bởi công ty kỹ thuật
                    số tại Brazil có tên là Lightfarm. Nữ trợ lý ảo 3D này là
                    một phần của một dự án bị từ chối và bị xóa bỏ.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Thế nhưng với sức hấp dẫn rất lớn đến từ mạng xã hội thời
                    gian gần đây thì có lẽ <strong>Sam</strong>sung sẽ phải suy
                    nghĩ lại. Nhất là khi cô nàng Sam này đang dần trở nên phổ
                    biến từ mạng xã hội, game cho đến các trang web “đen” với
                    lượt tìm kiếm tăng cao. Mới đây, nàng <strong>coser</strong>{" "}
                    gốc Việt là <strong>Hanna Bunny</strong> cũng quyết định
                    “cởi” để hóa thân thành cô nàng nữ trợ lý ảo của{" "}
                    <strong>Samsung</strong>. Hãy cùng chiêm ngưỡng tại đây nhé:
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210611132832--10-789976.jpg")
                        .default
                    }
                    alt="Sam, Samsung, Gai Xinh, Cosplayer, images, Hanna Bunny, Coser, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210611132832--11-955207.png")
                        .default
                    }
                    alt="Sam, Samsung, Gai Xinh, Cosplayer, images, Hanna Bunny, Coser, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210611132832--12-992300.jpg")
                        .default
                    }
                    alt="Sam, Samsung, Gai Xinh, Cosplayer, images, Hanna Bunny, Coser, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210611132832--13-name=large")
                        .default
                    }
                    alt="Sam, Samsung, Gai Xinh, Cosplayer, images, Hanna Bunny, Coser, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210611132832--14-name=large")
                        .default
                    }
                    alt="Sam, Samsung, Gai Xinh, Cosplayer, images, Hanna Bunny, Coser, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210611132832--15-name=large")
                        .default
                    }
                    alt="Sam, Samsung, Gai Xinh, Cosplayer, images, Hanna Bunny, Coser, "
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
