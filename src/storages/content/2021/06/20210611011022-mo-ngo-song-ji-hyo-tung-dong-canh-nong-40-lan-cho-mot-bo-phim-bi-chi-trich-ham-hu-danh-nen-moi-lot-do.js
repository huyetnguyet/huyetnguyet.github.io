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
"timestamp": '11/06/2021 01:10 AM',
"title": '"Mợ ngố" Song Ji Hyo từng đóng cảnh nóng 40 lần cho một bộ phim, bị chỉ trích ham hư danh nên mới lột đồ',
"description": 'Vì những cảnh nóng quá trần trụi ở Song Hoa Điếm, Song Ji Hyo từng bị chỉ trích thậm tệ.',
"src": 'storages/images/content/2021/20210611011022--11-896287.jpg',
"alt": 'A Frozen Flower, Song Hoa Diem, Song Ji Hyo, Jo In Sung, Canh Giuong Chieu, Phim Dien Anh, Phim Han Quoc, Canh Nong, ',
"category": 'images',
"date": '11/06/2021',
"time": '01:10 AM',
"link": '/mo-ngo-song-ji-hyo-tung-dong-canh-nong-40-lan-cho-mot-bo-phim-bi-chi-trich-ham-hu-danh-nen-moi-lot-do',
"zcomponent": 'page_20210611011022',
"filepath": './20210611011022-mo-ngo-song-ji-hyo-tung-dong-canh-nong-40-lan-cho-mot-bo-phim-bi-chi-trich-ham-hu-danh-nen-moi-lot-do.js'
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
  '"Mợ ngố" Song Ji Hyo từng đóng cảnh nóng 40 lần cho một bộ phim, bị chỉ trích ham hư danh nên mới lột đồ';
const author = "LỆ,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "11/06/2021 01:10 AM";
const description =
  "Vì những cảnh nóng quá trần trụi ở Song Hoa Điếm, Song Ji Hyo từng bị chỉ trích thậm tệ.";
const link =
  "mo-ngo-song-ji-hyo-tung-dong-canh-nong-40-lan-cho-mot-bo-phim-bi-chi-trich-ham-hu-danh-nen-moi-lot-do";
const tagparam = [
  "a-frozen-flower",
  "song-hoa-diem",
  "song-ji-hyo",
  "jo-in-sung",
  "canh-giuong-chieu",
  "phim-dien-anh",
  "phim-han-quoc",
  "canh-nong",
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

export default function page_20210611011022() {
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
                      Một trong số những bộ phim trần trụi nhất màn ảnh Hàn phải
                      kể đến Song Hoa Điếm (<strong>A Frozen Flower</strong>) -
                      tác phẩm từng gây tranh cãi một thời khi xây dựng hình ảnh
                      một vị vua đồng tính. Đây cũng là phim khiến cho "mợ ngố"{" "}
                      <strong>Song Ji Hyo</strong> được mệnh danh là nữ hoàng
                      cảnh nóng màn ảnh Hàn và nhận về không ít chỉ trích.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210611011022--10-539325.jpg")
                          .default
                      }
                      alt="A Frozen Flower, Song Hoa Diem, Song Ji Hyo, Jo In Sung, Canh Giuong Chieu, Phim Dien Anh, Phim Han Quoc, Canh Nong, "
                      note="Song Ji Hyo đã không còn là nữ hoàng cảnh nóng năm nào"
                    />
                    <p>
                      Trong phim, <strong>Song Ji Hyo</strong> phải cởi 100% và
                      có những cảnh nóng trần trụi đến mức “như thật” với{" "}
                      <strong>Jo In Sung</strong>. Thời điểm đó nhiều khán giả
                      cho rằng sau quá nhiều vai diễn phụ mờ nhạt, Song Ji Hyo
                      sẵn sàng cởi đồ trên màn hình để được một lần nổi tiếng.
                      Dĩ nhiên Song Ji Hyo không mấy bận tâm đến những lời đàm
                      tiếu này, cô chỉ biết mình phải mất 9 tháng cho bộ phim
                      dài hơn 2 tiếng và phải đóng cảnh nóng tới 40 lần mới đạt
                      như ý muốn của đạo diễn.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210611011022--11-896287.jpg")
                          .default
                      }
                      alt="A Frozen Flower, Song Hoa Diem, Song Ji Hyo, Jo In Sung, Canh Giuong Chieu, Phim Dien Anh, Phim Han Quoc, Canh Nong, "
                      note=""
                    />
                    <p>
                      Nữ diễn viên cho biết: "Tôi chưa bao giờ nghĩ đến việc
                      phải hở bao nhiêu cho bộ phim này. Những cảnh giường chiếu
                      để khán giả hiểu hơn về nội tâm nhân vật. Ngoài những tư
                      thế theo đạo diễn yêu cầu, tôi luôn cố gắng thể hiện cả
                      biểu cảm trên mặt mình nữa."
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210611011022--12-639968.jpg")
                          .default
                      }
                      alt="A Frozen Flower, Song Hoa Diem, Song Ji Hyo, Jo In Sung, Canh Giuong Chieu, Phim Dien Anh, Phim Han Quoc, Canh Nong, "
                      note=""
                    />
                    <p>
                      Và quả thật dù bị chỉ trích nhưng Song Hoa Điếm cũng khiến
                      cái tên <strong>Song Ji Hyo</strong> được biết đến nhiều
                      hơn, cô có nhiều cơ hội hơn để thể hiện khả năng diễn xuất
                      ấn tượng của mình. Sắp tới đây khán giả cũng sẽ được gặp
                      lại "mợ ngố" ở phim truyền hình Come to the Witch
                      Restaurant.
                    </p>

                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210611011022--13-27070.jpeg")
                          .default
                      }
                      alt="A Frozen Flower, Song Hoa Diem, Song Ji Hyo, Jo In Sung, Canh Giuong Chieu, Phim Dien Anh, Phim Han Quoc, Canh Nong, "
                      note=""
                    />
                    <p>Nguồn ảnh: Tổng hợp</p>
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
