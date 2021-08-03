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
"timestamp": '29/06/2021 10:03 PM',
"title": 'Thích thú với loạt meme Aphrodite "nâng ngực" trong anime Record Of Ragnarok, càng ngắm càng mát vào ngày hè',
"description": 'Cùng đến với loạt ảnh meme của nữ thần sắc đẹp Aphrodite trong anime Shuumatsu No Valkyrie - Record Of Ragnarok nhé!',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/aou1-162494151203817476037.jpg',
"alt": 'SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,GAME ANIME,MANGA ANIME,TOP ANIME,',
"category": 'games',
"date": '29/06/2021',
"time": '10:03 PM',
"link": '/thich-thu-voi-loat-meme-aphrodite-nang-nguc-trong-anime-record-of-ragnarok-cang-ngam-cang-mat-vao-ngay-he',
"zcomponent": 'page_20210629220308',
"filepath": './20210629220308-thich-thu-voi-loat-meme-aphrodite-nang-nguc-trong-anime-record-of-ragnarok-cang-ngam-cang-mat-vao-ngay-he.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title =
  'Thích thú với loạt meme Aphrodite "nâng ngực" trong anime Record Of Ragnarok, càng ngắm càng mát vào ngày hè';
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "29/06/2021 10:03 PM";
const description =
  "Cùng đến với loạt ảnh meme của nữ thần sắc đẹp Aphrodite trong anime Shuumatsu No Valkyrie - Record Of Ragnarok nhé!";
const link =
  "thich-thu-voi-loat-meme-aphrodite-nang-nguc-trong-anime-record-of-ragnarok-cang-ngam-cang-mat-vao-ngay-he";
const tagparam = [
  "SHOP ANIME - MANGA",
  "PHONG CÁCH ANIME",
  "TRAILER ANIME",
  "MOVIE ANIME",
  "REVIEW ANIME",
  "ĐÁNH GIÁ ANIME",
  "TV ANIME",
  "GAME ANIME",
  "MANGA ANIME",
  "TOP ANIME",
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

export default function page_20210629220308() {
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
                      Shuumatsu No Valkyrie - Record Of Ragnarok là tựa
                      manga/anime vô cùng đình đám thời gian gần đây. Sau khi
                      anime này lên sóng Netflix, Record Of Ragnarok ngày càng
                      được khán giả toàn thế giới biết đến ngày càng nhiều và
                      được đón nhận hết sức nồng nhiệt. Thậm chí nhiều fan anime
                      cho rằng Record Of Ragnarok sẽ là một trong những siêu
                      phẩm đáng xem nhất trong năm 2021 này.
                    </p>
                    <p>
                      Anime Record Of Ragnarok lấy chủ đề về những trận đấu giữa
                      các vị thần mạnh nhất và những con người mạnh nhất, hầu
                      hết các nhân vật đều là những cái tên được nhiều người
                      biết đến. Trong số đó, Aphrodite có lẽ là được fan quan
                      tâm nhiều nhất khi có không ít ảnh chế, meme hài hước lấy
                      cảm hứng từ vị nữ thần này. Nổi bật nhất có lẽ phải kể đến
                      trend "nâng ngực" độc đáo được người hâm mộ "fanart" với
                      các nhân vật từ nhiều manga, anime hay các tựa game nổi
                      tiếng như Jujutsu Kaisen, Genshin Impact, Naruto, One
                      Piece. Cùng chúng tôi điểm qua những meme ấn tượng này
                      nhé!
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/aou1-162494151203817476037.jpg"
                      alt="1, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,GAME ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/aou2-16249415154271808871993.jpg"
                      alt="2, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,GAME ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/aou3-16249415240102066915327.jpg"
                      alt="3, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,GAME ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/aou4-1624941519386112678441.jpg"
                      alt="4, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,GAME ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/aou5-16249415279731775350009.jpg"
                      alt="5, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,GAME ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/aou6-1624941531438541435978.jpg"
                      alt="6, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,GAME ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/aou8-1624941538705217726908.jpg"
                      alt="7, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,GAME ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <p>
                      Trên đây là những meme về nữ thần sắc đẹp Aphrodite trong
                      anime Shuumatsu No Valkyrie - Record Of Ragnarok. Các bạn
                      thấy những hình ảnh này như thế nào, hãy để lại ý kiến của
                      mình nhé!
                    </p>
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
