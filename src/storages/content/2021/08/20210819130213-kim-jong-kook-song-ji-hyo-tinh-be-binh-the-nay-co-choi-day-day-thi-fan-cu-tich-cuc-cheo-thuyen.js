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
"timestamp": '19/08/2021 01:02 PM',
"title": 'Kim Jong Kook - Song Ji Hyo tình bể bình thế này, có chối đây đẩy thì fan cứ tích cực "chèo thuyền"!',
"description": 'Qua những hình ảnh này, khán giả có thể phần nào hiểu ra lý do Kim Jong Kook và Song Ji Hyo lại được yêu thích đến như vậy.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/photo-1-1629268367708796859063.jpg',
"alt": 'sao Hàn,loveline,kim jong kook,song ji hyo,hẹn hò,sao hẹn hò,yêu đương,đẩy thuyền,running man,',
"category": 'stars',
"date": '19/08/2021',
"time": '01:02 PM',
"link": '/kim-jong-kook-song-ji-hyo-tinh-be-binh-the-nay-co-choi-day-day-thi-fan-cu-tich-cuc-cheo-thuyen',
"zcomponent": 'page_20210819130213',
"filepath": './20210819130213-kim-jong-kook-song-ji-hyo-tinh-be-binh-the-nay-co-choi-day-day-thi-fan-cu-tich-cuc-cheo-thuyen.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  'Kim Jong Kook - Song Ji Hyo tình bể bình thế này, có chối đây đẩy thì fan cứ tích cực "chèo thuyền"!';
const author = "JAFAR,";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 01:02 PM";
const description =
  "Qua những hình ảnh này, khán giả có thể phần nào hiểu ra lý do Kim Jong Kook và Song Ji Hyo lại được yêu thích đến như vậy.";
const link =
  "kim-jong-kook-song-ji-hyo-tinh-be-binh-the-nay-co-choi-day-day-thi-fan-cu-tich-cuc-cheo-thuyen";
const tagparam = [
  "sao Hàn",
  "loveline",
  "kim jong kook",
  "song ji hyo",
  "hẹn hò",
  "sao hẹn hò",
  "yêu đương",
  "đẩy thuyền",
  "running man",
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

export default function page_20210819130213() {
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
                      Qua những hình ảnh này, khán giả có thể phần nào hiểu ra
                      lý do <strong>Kim Jong Kook</strong> và{" "}
                      <strong>Song Ji Hyo</strong> lại được yêu thích đến như
                      vậy.
                    </p>
                    <p>
                      Sau khi Monday Couple tan rã, mức độ yêu thích của khán
                      giả dành cho cặp đôi SpartAce{" "}
                      <strong>Kim Jong Kook</strong> và{" "}
                      <strong>Song Ji Hyo</strong> ngày càng được "
                      <strong>đẩy thuyền</strong>" nhiệt tình. Dù mới đây "mợ
                      ngố" phủ nhận <strong>loveline</strong> nhưng không thể
                      phủ nhận được những tương tác thân thiết ngọt như mía lùi
                      khiến người xem quắn quéo của cả hai suốt bao năm qua.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/photo-1-1629268370040775171444.jpg"
                      alt="5, sao Hàn,loveline,kim jong kook,song ji hyo,hẹn hò,sao hẹn hò,yêu đương,đẩy thuyền,running man,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/photo-2-16292683700821628376569.jpg"
                      alt="1, sao Hàn,loveline,kim jong kook,song ji hyo,hẹn hò,sao hẹn hò,yêu đương,đẩy thuyền,running man,"
                      note="Nhìn người đẹp không chớp mắt"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/6-16292688918641501132467.gif"
                      alt="2, sao Hàn,loveline,kim jong kook,song ji hyo,hẹn hò,sao hẹn hò,yêu đương,đẩy thuyền,running man,"
                      note="Song Ji Hyo là người có năng lượng của Mộc nên Kim Jong Kook là một nguồn nước lớn rất phù hợp với cô"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/7-1629268892035647680955.gif"
                      alt="3, sao Hàn,loveline,kim jong kook,song ji hyo,hẹn hò,sao hẹn hò,yêu đương,đẩy thuyền,running man,"
                      note="Cặp đôi được 85 đến 95 điểm"
                    />
                    <RelationNewsInPage category={category} />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/photo-1-1629268367708796859063.jpg"
                      alt="4, sao Hàn,loveline,kim jong kook,song ji hyo,hẹn hò,sao hẹn hò,yêu đương,đẩy thuyền,running man,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/8-1629268892043877015696.gif"
                      alt="6, sao Hàn,loveline,kim jong kook,song ji hyo,hẹn hò,sao hẹn hò,yêu đương,đẩy thuyền,running man,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/photo-3-1629268370147877558182.jpg"
                      alt="8, sao Hàn,loveline,kim jong kook,song ji hyo,hẹn hò,sao hẹn hò,yêu đương,đẩy thuyền,running man,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/18/0-1629268521324723308434.gif"
                      alt="9, sao Hàn,loveline,kim jong kook,song ji hyo,hẹn hò,sao hẹn hò,yêu đương,đẩy thuyền,running man,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/18/1-16292685857621405854889.gif"
                      alt="10, sao Hàn,loveline,kim jong kook,song ji hyo,hẹn hò,sao hẹn hò,yêu đương,đẩy thuyền,running man,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/18/2-1629268630784962056958.gif"
                      alt="11, sao Hàn,loveline,kim jong kook,song ji hyo,hẹn hò,sao hẹn hò,yêu đương,đẩy thuyền,running man,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/18/3-16292687079701513989640.gif"
                      alt="12, sao Hàn,loveline,kim jong kook,song ji hyo,hẹn hò,sao hẹn hò,yêu đương,đẩy thuyền,running man,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/18/4-16292687764391288788763.gif"
                      alt="13, sao Hàn,loveline,kim jong kook,song ji hyo,hẹn hò,sao hẹn hò,yêu đương,đẩy thuyền,running man,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/18/5-1629268850210677080164.gif"
                      alt="14, sao Hàn,loveline,kim jong kook,song ji hyo,hẹn hò,sao hẹn hò,yêu đương,đẩy thuyền,running man,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/18/9-1629268927674266712687.gif"
                      alt="15, sao Hàn,loveline,kim jong kook,song ji hyo,hẹn hò,sao hẹn hò,yêu đương,đẩy thuyền,running man,"
                      note=""
                    />
                    <p>Ảnh: Sưu tầm</p>
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
