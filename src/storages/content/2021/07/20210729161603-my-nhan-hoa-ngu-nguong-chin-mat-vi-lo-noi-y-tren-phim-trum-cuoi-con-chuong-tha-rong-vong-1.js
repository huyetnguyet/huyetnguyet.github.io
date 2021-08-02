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
"timestamp": '29/07/2021 04:16 PM',
"title": 'Mỹ nhân Hoa ngữ ngượng chín mặt vì lộ nội y trên phim: "Trùm cuối" còn chuộng thả rông vòng 1 nữa cơ',
"description": 'Nhiều mỹ nhân đình đám xứ Trung từng bẽ mặt vì mắc lỗi nội y khi đóng phim.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/9/2-16258209658481572498571.jpg',
"alt": 'nhặt sạn phim ảnh,phim trung quốc,phim cổ trang,cổ lực na trát,triệu lệ dĩnh,Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Diệc Phi,Mỹ nhân Hoa ngữ,',
"category": 'stars',
"date": '29/07/2021',
"time": '04:16 PM',
"link": '/my-nhan-hoa-ngu-nguong-chin-mat-vi-lo-noi-y-tren-phim-trum-cuoi-con-chuong-tha-rong-vong-1',
"zcomponent": 'page_20210729161603',
"filepath": './20210729161603-my-nhan-hoa-ngu-nguong-chin-mat-vi-lo-noi-y-tren-phim-trum-cuoi-con-chuong-tha-rong-vong-1.js'
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
  'Mỹ nhân Hoa ngữ ngượng chín mặt vì lộ nội y trên phim: "Trùm cuối" còn chuộng thả rông vòng 1 nữa cơ';
const author = "XỬ NỮ,";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:16 PM";
const description =
  "Nhiều mỹ nhân đình đám xứ Trung từng bẽ mặt vì mắc lỗi nội y khi đóng phim.";
const link =
  "my-nhan-hoa-ngu-nguong-chin-mat-vi-lo-noi-y-tren-phim-trum-cuoi-con-chuong-tha-rong-vong-1";
const tagparam = [
  "nhặt sạn phim ảnh",
  "phim trung quốc",
  "phim cổ trang",
  "cổ lực na trát",
  "triệu lệ dĩnh",
  "Địch Lệ Nhiệt Ba",
  "Dương Mịch",
  "Lưu Diệc Phi",
  "Mỹ nhân Hoa ngữ",
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

export default function page_20210729161603() {
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
                    Dù được đầu tư hoành tráng hay kỹ lưỡng đến đâu, nhiều đoàn
                    làm <strong>phim Trung Quốc</strong> vẫn mắc phải những sai
                    sót không đáng có. Trong số đó, nhiều diễn viên đóng{" "}
                    <strong>phim cổ trang</strong> nhưng vẫn để lộ việc mặc nội
                    y thời hiện đại.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/9/4-1625820965959327665659.jpg"
                    alt="1, nhặt sạn phim ảnh,phim trung quốc,phim cổ trang,cổ lực na trát,triệu lệ dĩnh,Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Diệc Phi,Mỹ nhân Hoa ngữ,"
                    note="Áo lót không dây lộ rõ đằng sau lớp áo mỏng manh của Triệu Lệ Dĩnh trong Cung Tỏa Lưu Ly"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/9/3-1625820965859493172573.jpg"
                    alt="2, nhặt sạn phim ảnh,phim trung quốc,phim cổ trang,cổ lực na trát,triệu lệ dĩnh,Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Diệc Phi,Mỹ nhân Hoa ngữ,"
                    note="Triệu Lệ Dĩnh cũng từng để lộ dây áo lót khi đóng Truy Ngư Truyền Kỳ"
                  />
                  <p>
                    Dây áo lót làm bằng chất liệu trong suốt cũng không thoát
                    được con mắt tinh tường của các "mọt" phim
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/9/2-16258209658481572498571.jpg"
                    alt="5, nhặt sạn phim ảnh,phim trung quốc,phim cổ trang,cổ lực na trát,triệu lệ dĩnh,Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Diệc Phi,Mỹ nhân Hoa ngữ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/9/7-1625820966139454410497.jpg"
                    alt="6, nhặt sạn phim ảnh,phim trung quốc,phim cổ trang,cổ lực na trát,triệu lệ dĩnh,Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Diệc Phi,Mỹ nhân Hoa ngữ,"
                    note=""
                  />
                  <p>
                    "Hạt sạn" này xuất hiện trong nhiều{" "}
                    <strong>phim cổ trang</strong> Hoa ngữ
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/9/1-1625820965744400271840.jpg"
                    alt="3, nhặt sạn phim ảnh,phim trung quốc,phim cổ trang,cổ lực na trát,triệu lệ dĩnh,Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Diệc Phi,Mỹ nhân Hoa ngữ,"
                    note="Nội y có màu sắc sặc sỡ rất dễ khiến diễn viên mắc lỗi trang phục"
                  />
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/9/6-1625820966078672003648.jpg"
                    alt="4, nhặt sạn phim ảnh,phim trung quốc,phim cổ trang,cổ lực na trát,triệu lệ dĩnh,Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Diệc Phi,Mỹ nhân Hoa ngữ,"
                    note="Địch Lệ Nhiệt Ba thậm chí còn không biết trang phục của mình bị rách, vô tình làm lộ nội y khi đóng Tam Sinh Tam Thế Thập Lý Đào Hoa"
                  />
                  <p>
                    <strong>Cổ Lực Na Trát</strong> từng bị khán giả "bắt bài"
                    không mặc áo lót khi đóng phim Sơn Hải Kinh Xích Ảnh Truyền
                    Thuyết và Võ Thần Triệu Tử Long. Quay{" "}
                    <strong>phim cổ trang</strong> giữa thời tiết nắng nóng
                    khiến cô ngại mặc chăng?
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/9/9-16258209663501655985096.jpg"
                    alt="7, nhặt sạn phim ảnh,phim trung quốc,phim cổ trang,cổ lực na trát,triệu lệ dĩnh,Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Diệc Phi,Mỹ nhân Hoa ngữ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/9/8-1625820966270507414838.jpg"
                    alt="8, nhặt sạn phim ảnh,phim trung quốc,phim cổ trang,cổ lực na trát,triệu lệ dĩnh,Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Diệc Phi,Mỹ nhân Hoa ngữ,"
                    note=""
                  />
                  <p>
                    Thế nhưng kể cả trong phim hiện đại thì{" "}
                    <strong>Cổ Lực Na Trát</strong> vẫn chuộng mốt "thả rông"
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/9/10-1625820966436568276179.jpg"
                    alt="9, nhặt sạn phim ảnh,phim trung quốc,phim cổ trang,cổ lực na trát,triệu lệ dĩnh,Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Diệc Phi,Mỹ nhân Hoa ngữ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/9/10-1625820966436568276179.jpg"
                    alt="10, nhặt sạn phim ảnh,phim trung quốc,phim cổ trang,cổ lực na trát,triệu lệ dĩnh,Địch Lệ Nhiệt Ba,Dương Mịch,Lưu Diệc Phi,Mỹ nhân Hoa ngữ,"
                    note=""
                  />
                  <p>Nguồn ảnh: Tổng hợp</p>
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
