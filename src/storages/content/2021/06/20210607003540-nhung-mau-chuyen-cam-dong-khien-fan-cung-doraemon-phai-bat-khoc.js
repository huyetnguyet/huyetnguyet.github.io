import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature, RelationNews } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 07/06/2021 12:35 AM",
"title": Những mẩu chuyện cảm động khiến fan cứng Doraemon phải bật khóc",
"description": Những câu chuyện tuy ngắn nhưng được tác giả xây dựng rất tinh tế và đáng suy ngẫm trong Doraemon",
"src": https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/19019348518284753639987308299421896979616123n-16230411840921566000971.jpg",
"alt": Kham Pha, Manga, Anime, Doraemon, Giai Tri, Xuat Ban, ",
"category": news",
"date": 07/06/2021",
"time": 12:35 AM",
"link": "/nhung-mau-chuyen-cam-dong-khien-fan-cung-doraemon-phai-bat-khoc",
"zcomponent": page_20210607003540",
"filepath": ./20210607003540-nhung-mau-chuyen-cam-dong-khien-fan-cung-doraemon-phai-bat-khoc.js"
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
const title = "Những mẩu chuyện cảm động khiến fan cứng Doraemon phải bật khóc";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "07/06/2021 12:35 AM";
const description =
  "Những câu chuyện tuy ngắn nhưng được tác giả xây dựng rất tinh tế và đáng suy ngẫm trong Doraemon";
const link = "nhung-mau-chuyen-cam-dong-khien-fan-cung-doraemon-phai-bat-khoc";
const tagparam = [
  "kham-pha",
  "manga",
  "anime",
  "doraemon",
  "giai-tri",
  "xuat-ban",
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

export default function page_20210607003540() {
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
                      Doraemon thường khai thác những câu chuyện đời thường xoay
                      quanh cậu bé Nobita. Sự hài hước, dí dỏm và sáng tạo của
                      tác giả đã thu hút nhiều thế hệ độc giả không chỉ ở Nhật
                      Bản mà còn cả ở Việt Nam. Tuy nhiên, bên cạnh đó bộ truyện
                      cũng có không ít mẩu chuyện cảm động, trưởng thành ghi dấu
                      ấn sâu đậm trong tâm trí độc giả<strong> Doraemon</strong>
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/19019348518284753639987308299421896979616123n-16230411840921566000971.jpg"
                      alt="Kham Pha, Manga, Anime, Doraemon, Giai Tri, Xuat Ban, "
                      note=""
                    />
                    <p>
                      Câu chuyện được nhiều độc giả nhớ đến nhất trong
                      <strong> Doraemon</strong>
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/7/19200082118285376339925031461217216494114434n-16230412059191303445293.jpg"
                      alt="Kham Pha, Manga, Anime, Doraemon, Giai Tri, Xuat Ban, "
                      note=""
                    />
                    <p>
                      Anh thanh niên trước lúc đi xa đã đến nhà cô gái để thổ lộ
                      lòng mình thay cho lời tạm biệt. Đáng tiếc là cô gái vắng
                      nhà, anh đành gửi lời qua khung cửa sổ. Nhờ bảo bối ghi
                      hình khung cửa mà Nobita và<strong> Doraemon</strong>
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/19461982218285061606623178952414173729424097n-162304122605985548839.jpg"
                      alt="Kham Pha, Manga, Anime, Doraemon, Giai Tri, Xuat Ban, "
                      note=""
                    />
                    <p>
                      Một câu chuyện cảm động về tình cảm gắn bó giữa con người
                      với động vật. Ông chúa Nobiro của Nobita đã kể về chú voi
                      Hanao trong sở thú Tokyo thời chiến mà chú từng đến thăm
                      nhiều lần. Thế nhưng khi chiến tranh qua đi, Nobiro biết
                      được voi Hanao đã bị giết. Mãi sau này khi Nobiro đi lạc
                      trong khu rừng Ấn Độ, vào khoảnh khắc cận kề cái chết, ông
                      đã gặp lại voi Hanao và được nó cứu giúp. Sau khi nghe câu
                      chuyện này, đôi bạn Nobita và<strong> Doraemon</strong>
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/7/18842338518285258973270106460015706833926642n-1623041256638436796572.jpg"
                      alt="Kham Pha, Manga, Anime, Doraemon, Giai Tri, Xuat Ban, "
                      note=""
                    />
                    <p>
                      Nobita gặp được một ông chú nhà văn nghèo. Dù bắt đầu viết
                      tiểu thuyết từ thời sinh viên, nhưng mãi chưa thành danh.
                      Trong lúc chán đời, nhà văn đã nhờ Nobita xem bói để biết
                      tương lai của mình ra sao. Đôi bạn Nobita và
                      <strong> Doraemon</strong>
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/7/19161358818285407239921945777094390704296333n-16230412842801393159741.jpg"
                      alt="Kham Pha, Manga, Anime, Doraemon, Giai Tri, Xuat Ban, "
                      note=""
                    />
                    <p>
                      Mẩu chuyện nhẹ nhàng để giáo dục trẻ em về tình thương
                      dành cho động vật. Câu chuyện bắt đầu với một cậu bé ngược
                      đãi chú chó của mình. Nhờ món bảo bối của
                      <strong> Doraemon</strong>
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/1948233221828594780653455548756859567308621n-1623041310930509836993.jpg"
                      alt="Kham Pha, Manga, Anime, Doraemon, Giai Tri, Xuat Ban, "
                      note=""
                    />
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
