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
"timestamp": '19/08/2021 12:51 PM',
"title": 'Đừng nói Nobita nghèo nữa, nghe giá căn nhà gia đình Nobi ở mà hú hồn luôn!',
"description": 'Nghiên cứu về nhà đất của một tác giả viết tiểu thuyết tại Nhật Bản khiến người xem bất ngờ về giá trị căn nhà của Nobita.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/photo-1-16290954413781077324210.jpg',
"alt": 'Nobita,Doraemon,truyện tranh doremon,phim Nhật Bản,Phim hoạt hình,truyện tranh Nhật Bản,',
"category": 'games',
"date": '19/08/2021',
"time": '12:51 PM',
"link": '/dung-noi-nobita-ngheo-nua-nghe-gia-can-nha-gia-dinh-nobi-o-ma-hu-hon-luon',
"zcomponent": 'page_20210819125153',
"filepath": './20210819125153-dung-noi-nobita-ngheo-nua-nghe-gia-can-nha-gia-dinh-nobi-o-ma-hu-hon-luon.js'
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
  "Đừng nói Nobita nghèo nữa, nghe giá căn nhà gia đình Nobi ở mà hú hồn luôn!";
const author = "LỆ,";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 12:51 PM";
const description =
  "Nghiên cứu về nhà đất của một tác giả viết tiểu thuyết tại Nhật Bản khiến người xem bất ngờ về giá trị căn nhà của Nobita.";
const link =
  "dung-noi-nobita-ngheo-nua-nghe-gia-can-nha-gia-dinh-nobi-o-ma-hu-hon-luon";
const tagparam = [
  "Nobita",
  "Doraemon",
  "truyện tranh doremon",
  "phim Nhật Bản",
  "Phim hoạt hình",
  "truyện tranh Nhật Bản",
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

export default function page_20210819125153() {
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
                      Nghiên cứu về nhà đất của một tác giả viết tiểu thuyết tại
                      Nhật Bản khiến người xem bất ngờ về giá trị căn nhà của{" "}
                      <strong>Nobita</strong>.
                    </p>
                    <p>
                      Nếu là một fan hâm mộ xịn của bộ truyện/ phim{" "}
                      <strong>Doraemon</strong>, chắc hẳn bạn đã từng tò mò về
                      căn nhà nhỏ nhắn, ấm cúng nhưng vô cùng tiện nghi mà gia
                      đình Nobi ở. Có bao giờ bạn tự hỏi một căn nhà như vậy sẽ
                      có giá thành bao nhiêu?
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/photo-1-16290945660961984692154.jpg"
                      alt="1, Nobita,Doraemon,truyện tranh doremon,phim Nhật Bản,Phim hoạt hình,truyện tranh Nhật Bản,"
                      note="Mặt ngoài nhà Nobita"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/photo-1-1629094834747210402061.jpg"
                      alt="2, Nobita,Doraemon,truyện tranh doremon,phim Nhật Bản,Phim hoạt hình,truyện tranh Nhật Bản,"
                      note="Chính xác căn nhà sẽ trông như thế này"
                    />
                    <p>
                      Nói về vị trí, nhà của <strong>Nobita</strong> ở khu
                      Nerima, gần trung tâm thành phố, cửa sổ hướng thẳng ra
                      tháp Toyko. Vào khoảng thời gian bộ truyện bắt đầu, Toyko
                      đã đất chật người đông, giá nhà đất luôn nằm trong top cao
                      nhất thế giới. Một căn nhà 2 tầng ở phố cổ như trong
                      truyện có giá vào khoảng 616 nghìn USD (khoảng 14 tỷ VND).
                      Nếu nhà Nobi không mua mà là ở thuê thì mỗi tháng cũng sẽ
                      phải bỏ ra tầm 32 - 35 triệu VND, đó là còn chưa kể đến
                      phần sân vườn rộng rãi.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/vk5hey4vl1-16290949292151070565979.jpg"
                      alt="3, Nobita,Doraemon,truyện tranh doremon,phim Nhật Bản,Phim hoạt hình,truyện tranh Nhật Bản,"
                      note="Nghe giá thành là biết nhà Nobita cũng không phải dạng vừa rồi"
                    />
                    <p>
                      Ngoài nhà của <strong>Nobita</strong>, một số căn nhà khác
                      trong thế giới anime Nhật cũng được bóc giá. Nhà của cậu
                      nhóc Shinnosuke trong bộ Shin, Cậu Bé Bút Chì nằm ở
                      Kasukabe, tỉnh Saitama. Giá nhà đất ở tỉnh này có vẻ mềm
                      hơn so với Tokyo khá nhiều, nên căn nhà chỉ có giá khoảng
                      176 nghìn USD (khoảng 4 tỷ VND). Căn nhà của cô bé Usagi,
                      thủy thủ Mặt Trăng nằm ở khu Azabu-Juban, Tokyo. Một căn
                      biệt thự với vườn rộng hiện giờ đang có giá khoảng 4 triệu
                      USD (khoảng hơn 91 tỷ VND).
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/-1629094971617726870109.jpg"
                      alt="4, Nobita,Doraemon,truyện tranh doremon,phim Nhật Bản,Phim hoạt hình,truyện tranh Nhật Bản,"
                      note="Nhà của Shin có kiến trúc khá giống nhà của Nobita nhưng xa trung tâm nên rẻ hơn rất nhiều"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/photo-1-16290954413781077324210.jpg"
                      alt="5, Nobita,Doraemon,truyện tranh doremon,phim Nhật Bản,Phim hoạt hình,truyện tranh Nhật Bản,"
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
