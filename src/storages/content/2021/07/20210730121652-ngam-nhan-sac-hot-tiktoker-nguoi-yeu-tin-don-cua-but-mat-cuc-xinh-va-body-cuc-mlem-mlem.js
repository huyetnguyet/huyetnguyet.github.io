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
"timestamp": '30/07/2021 12:16 PM',
"title": 'Ngắm nhan sắc hot TikToker "người yêu tin đồn" của Bụt, mặt cực xinh và body cực "mlem mlem"',
"description": '"Hot girl 2k4" Lê Thị Khánh Huyền đang được cộng đồng mạng quan tâm bởi tin đồn tình cảm với chàng Bụt.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/nghi-van-hot-tiktoker-le-thi-khanh-huyen-la-co-gai-trong-story-cua-tinh-cu-linh-ngoc-dam-1627483775-1-16276479825931298548263.jpg',
"alt": 'lê thị khánh huyền,Khánh Huyền tiktoker,Chàng Bụt,người yêu cũ Linh Ngọc Đàm,bụt,Bụt có người yêu mới,game thủ,streamer,TikToker,',
"category": 'images',
"date": '30/07/2021',
"time": '12:16 PM',
"link": '/ngam-nhan-sac-hot-tiktoker-nguoi-yeu-tin-don-cua-but-mat-cuc-xinh-va-body-cuc-mlem-mlem',
"zcomponent": 'page_20210730121652',
"filepath": './20210730121652-ngam-nhan-sac-hot-tiktoker-nguoi-yeu-tin-don-cua-but-mat-cuc-xinh-va-body-cuc-mlem-mlem.js'
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
  'Ngắm nhan sắc hot TikToker "người yêu tin đồn" của Bụt, mặt cực xinh và body cực "mlem mlem"';
const author = "NGOCLONG,";
const source = "Trí Thức Trẻ";
const timestamp = "30/07/2021 12:16 PM";
const description =
  '"Hot girl 2k4" Lê Thị Khánh Huyền đang được cộng đồng mạng quan tâm bởi tin đồn tình cảm với chàng Bụt.';
const link =
  "ngam-nhan-sac-hot-tiktoker-nguoi-yeu-tin-don-cua-but-mat-cuc-xinh-va-body-cuc-mlem-mlem";
const tagparam = [
  "lê thị khánh huyền",
  "Khánh Huyền tiktoker",
  "Chàng Bụt",
  "người yêu cũ Linh Ngọc Đàm",
  "bụt",
  "Bụt có người yêu mới",
  "game thủ",
  "streamer",
  "TikToker",
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

export default function page_20210730121652() {
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
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/nghi-van-hot-tiktoker-le-thi-khanh-huyen-la-co-gai-trong-story-cua-tinh-cu-linh-ngoc-dam-1627483775-1-16276479825931298548263.jpg"
                    alt="1, lê thị khánh huyền,Khánh Huyền tiktoker,Chàng Bụt,người yêu cũ Linh Ngọc Đàm,bụt,Bụt có người yêu mới,game thủ,streamer,TikToker,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/h7-1627590345514650674113.jpg"
                    alt="2, lê thị khánh huyền,Khánh Huyền tiktoker,Chàng Bụt,người yêu cũ Linh Ngọc Đàm,bụt,Bụt có người yêu mới,game thủ,streamer,TikToker,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/h16-16275903455901743439761.jpg"
                    alt="3, lê thị khánh huyền,Khánh Huyền tiktoker,Chàng Bụt,người yêu cũ Linh Ngọc Đàm,bụt,Bụt có người yêu mới,game thủ,streamer,TikToker,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/h14-1627590345577524090525.jpg"
                    alt="4, lê thị khánh huyền,Khánh Huyền tiktoker,Chàng Bụt,người yêu cũ Linh Ngọc Đàm,bụt,Bụt có người yêu mới,game thủ,streamer,TikToker,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/h15-16275903455841183795843.jpg"
                    alt="5, lê thị khánh huyền,Khánh Huyền tiktoker,Chàng Bụt,người yêu cũ Linh Ngọc Đàm,bụt,Bụt có người yêu mới,game thủ,streamer,TikToker,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/h3-1627590345484405814588.jpg"
                    alt="6, lê thị khánh huyền,Khánh Huyền tiktoker,Chàng Bụt,người yêu cũ Linh Ngọc Đàm,bụt,Bụt có người yêu mới,game thủ,streamer,TikToker,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/h1-1627590345452867191525.jpg"
                    alt="7, lê thị khánh huyền,Khánh Huyền tiktoker,Chàng Bụt,người yêu cũ Linh Ngọc Đàm,bụt,Bụt có người yêu mới,game thủ,streamer,TikToker,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/h6-1627590345507836757010.jpg"
                    alt="8, lê thị khánh huyền,Khánh Huyền tiktoker,Chàng Bụt,người yêu cũ Linh Ngọc Đàm,bụt,Bụt có người yêu mới,game thủ,streamer,TikToker,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/h5-1627590345498703541876.jpg"
                    alt="9, lê thị khánh huyền,Khánh Huyền tiktoker,Chàng Bụt,người yêu cũ Linh Ngọc Đàm,bụt,Bụt có người yêu mới,game thủ,streamer,TikToker,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/h12-16275903455651508343769.jpg"
                    alt="10, lê thị khánh huyền,Khánh Huyền tiktoker,Chàng Bụt,người yêu cũ Linh Ngọc Đàm,bụt,Bụt có người yêu mới,game thủ,streamer,TikToker,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/h10-1627590345552355159688.jpg"
                    alt="11, lê thị khánh huyền,Khánh Huyền tiktoker,Chàng Bụt,người yêu cũ Linh Ngọc Đàm,bụt,Bụt có người yêu mới,game thủ,streamer,TikToker,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/h11-16275903455581529867657.jpg"
                    alt="12, lê thị khánh huyền,Khánh Huyền tiktoker,Chàng Bụt,người yêu cũ Linh Ngọc Đàm,bụt,Bụt có người yêu mới,game thủ,streamer,TikToker,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/h9-1627590345544446455191.jpg"
                    alt="13, lê thị khánh huyền,Khánh Huyền tiktoker,Chàng Bụt,người yêu cũ Linh Ngọc Đàm,bụt,Bụt có người yêu mới,game thủ,streamer,TikToker,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/h8-1627590345536252351526.jpg"
                    alt="14, lê thị khánh huyền,Khánh Huyền tiktoker,Chàng Bụt,người yêu cũ Linh Ngọc Đàm,bụt,Bụt có người yêu mới,game thủ,streamer,TikToker,"
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
