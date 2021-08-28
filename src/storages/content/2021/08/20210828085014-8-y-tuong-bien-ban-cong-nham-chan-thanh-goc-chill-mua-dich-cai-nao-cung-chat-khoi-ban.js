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
"timestamp": '28/08/2021 08:50 AM',
"title": '8 ý tưởng biến ban công nhàm chán thành góc chill mùa dịch, cái nào cũng chất khỏi bàn',
"description": 'Đảm bảo tân trang xong bạn sẽ muốn "làm tổ" ở ban công mãi cho mà xem.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-1630139239385988586212.jpeg',
"alt": 'ban công,decor nhà,',
"category": 'life',
"date": '28/08/2021',
"time": '08:50 AM',
"link": '/8-y-tuong-bien-ban-cong-nham-chan-thanh-goc-chill-mua-dich-cai-nao-cung-chat-khoi-ban',
"zcomponent": 'page_20210828085014',
"filepath": './20210828085014-8-y-tuong-bien-ban-cong-nham-chan-thanh-goc-chill-mua-dich-cai-nao-cung-chat-khoi-ban.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "life";
const categoryLink = "/life";
const title =
  "8 ý tưởng biến ban công nhàm chán thành góc chill mùa dịch, cái nào cũng chất khỏi bàn";
const author = "HÀ BÍCH NGỌC,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "28/08/2021 08:50 AM";
const description =
  'Đảm bảo tân trang xong bạn sẽ muốn "làm tổ" ở ban công mãi cho mà xem.';
const link =
  "8-y-tuong-bien-ban-cong-nham-chan-thanh-goc-chill-mua-dich-cai-nao-cung-chat-khoi-ban";
const tagparam = ["ban công", "decor nhà"];
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

export default function page_20210828085014() {
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
                      Đảm bảo tân trang xong bạn sẽ muốn "làm tổ" ở{" "}
                      <strong>ban công</strong> mãi cho mà xem.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-1630139239385988586212.jpeg"
                      alt="1, ban công,decor nhà,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-1630139450032606267760.jpg"
                      alt="2, ban công,decor nhà,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-16301395066761089972995.jpg"
                      alt="3, ban công,decor nhà,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-1630139837661985798700.jpg"
                      alt="4, ban công,decor nhà,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-16301399847901005164017.jpg"
                      alt="5, ban công,decor nhà,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-16301402492361034098021.jpg"
                      alt="6, ban công,decor nhà,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/28/photo-1-1630140367762704148832.jpg"
                      alt="7, ban công,decor nhà,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-16301407502191053194070.jpg"
                      alt="8, ban công,decor nhà,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-16301407502191053194070.jpg"
                      alt="9, ban công,decor nhà,"
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
