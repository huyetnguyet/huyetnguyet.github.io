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
"timestamp": '29/07/2021 04:24 PM',
"title": 'Chân có dài, có đẹp đến mấy mà mặc váy tennis kiểu này thì đố ai dám nhìn các chị em!',
"description": 'Váy tennis đúng là giúp khoe chân thật nhưng mặc sao cho duyên thì không phải ai cũng biết.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/26/dan-gai-dep-bi-che-lo-vi-1778552547293415744040624037406399480137656n-1619232494-869-width1242height1886-1-16272770382601129431429.jpg',
"alt": 'fashion,thời trang,không mặc xấu,lộ hàng,pha lộ hàng,ăn mặc phản cảm,ăn mặc hớ hênh,chân váy ngắn,váy tennis,váy ngắn,',
"category": 'images',
"date": '29/07/2021',
"time": '04:24 PM',
"link": '/chan-co-dai-co-dep-den-may-ma-mac-vay-tennis-kieu-nay-thi-do-ai-dam-nhin-cac-chi-em',
"zcomponent": 'page_20210729162453',
"filepath": './20210729162453-chan-co-dai-co-dep-den-may-ma-mac-vay-tennis-kieu-nay-thi-do-ai-dam-nhin-cac-chi-em.js'
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
  "Chân có dài, có đẹp đến mấy mà mặc váy tennis kiểu này thì đố ai dám nhìn các chị em!";
const author = "HÀ TRẦN,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "29/07/2021 04:24 PM";
const description =
  "Váy tennis đúng là giúp khoe chân thật nhưng mặc sao cho duyên thì không phải ai cũng biết.";
const link =
  "chan-co-dai-co-dep-den-may-ma-mac-vay-tennis-kieu-nay-thi-do-ai-dam-nhin-cac-chi-em";
const tagparam = [
  "fashion",
  "thời trang",
  "không mặc xấu",
  "lộ hàng",
  "pha lộ hàng",
  "ăn mặc phản cảm",
  "ăn mặc hớ hênh",
  "chân váy ngắn",
  "váy tennis",
  "váy ngắn",
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

export default function page_20210729162453() {
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
                      Mùa hè chính là thời gian lí tưởng nhất trong năm để các
                      chị, các em trưng trổ chân dài cùng body mướt mượt. Chẳng
                      thế mà gần đây, <strong>váy tennis</strong> bỗng nhiên
                      được ưu ái hơn cả. Trẻ trung, năng động, đậm chất high
                      teen là thế, vậy mà item này lắm lúc cũng khiến chị em khó
                      xử lắm cơ. Làm sao để vừa khoe chân dài mà trông không
                      phản cảm, xem ra không phải ai cũng biết.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/26/photo-1-16272769144311316403358.jpg"
                      alt="1, fashion,thời trang,không mặc xấu,lộ hàng,pha lộ hàng,ăn mặc phản cảm,ăn mặc hớ hênh,chân váy ngắn,váy tennis,váy ngắn,"
                      note="Chưa cần đi lại gì nhiều, đứng 1 chỗ thôi mà cô bạn này đã phô phang phải biết"
                    />
                    <p>
                      Khoảnh khắc khiến người đi đường thực ái ngại, chỉ vung
                      vẩy 1 chút thôi mà nội y đã "Can Lồ Lộ"
                    </p>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/26/dan-gai-dep-bi-che-lo-vi-1778552547293415744040624037406399480137656n-1619232494-869-width1242height1886-1-16272770382601129431429.jpg"
                      alt="2, fashion,thời trang,không mặc xấu,lộ hàng,pha lộ hàng,ăn mặc phản cảm,ăn mặc hớ hênh,chân váy ngắn,váy tennis,váy ngắn,"
                      note=""
                    />
                    <p>
                      Chiếc váy quá ngắn làm lộ ra nếp hằn "ứ ừ" khiến người ta
                      đỏ mặt
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/26/photo-1-16272765810161398056764.jpg"
                      alt="3, fashion,thời trang,không mặc xấu,lộ hàng,pha lộ hàng,ăn mặc phản cảm,ăn mặc hớ hênh,chân váy ngắn,váy tennis,váy ngắn,"
                      note=""
                    />
                    <p>
                      Chỉ 1 cơn gió nhẹ thổi qua thôi là bao "điều thầm kín" lồ
                      lộ hết cả
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/26/photo-1-1627276649672428882113.jpeg"
                      alt="4, fashion,thời trang,không mặc xấu,lộ hàng,pha lộ hàng,ăn mặc phản cảm,ăn mặc hớ hênh,chân váy ngắn,váy tennis,váy ngắn,"
                      note=""
                    />
                    <p>Thực chỉ biết "ối giồi ôi"</p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/26/photo-1-1627276694695990072342.jpg"
                      alt="5, fashion,thời trang,không mặc xấu,lộ hàng,pha lộ hàng,ăn mặc phản cảm,ăn mặc hớ hênh,chân váy ngắn,váy tennis,váy ngắn,"
                      note=""
                    />
                    <p>
                      Ừ thì kiểu váy này đúng là làm tốt nhiệm vụ khoe chân dài
                      thật, cơ mà độ ngắn như vậy thực phản cảm quá mất thôi. Rõ
                      ràng, lỗi không phải ở <strong>váy tennis</strong>, lỗi là
                      do người mặc thiếu tinh tế, chỉn chu. Muốn show trọn đôi
                      chân miên man với item này, mời bạn tham khảo ngay cẩm
                      nang của <strong>Không Mặc Xấu</strong>.
                    </p>
                    <h5>Độ dài váy</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/26/4321a3a466567aa4b5260aed44efd97e-16272780440341817048913.jpg"
                      alt="6, fashion,thời trang,không mặc xấu,lộ hàng,pha lộ hàng,ăn mặc phản cảm,ăn mặc hớ hênh,chân váy ngắn,váy tennis,váy ngắn,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/26/d5886e8c2159edf5134bb7420a2c3b4c-1627278044137680959742.jpg"
                      alt="7, fashion,thời trang,không mặc xấu,lộ hàng,pha lộ hàng,ăn mặc phản cảm,ăn mặc hớ hênh,chân váy ngắn,váy tennis,váy ngắn,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Không còn nghi ngờ gì nữa, độ dài chính là yếu tố tiên
                      quyết, phân định ranh giới giữa sexy và phản cảm. Muốn
                      khoe chân thon mà không lộ liễu, 1 chiếc{" "}
                      <strong>váy tennis</strong> dài ngang đùi nên được ưu tiên
                      hơn cả. Độ dài như vậy sẽ giúp chị em trở nên thanh lịch,
                      hiện đại hơn rất nhiều
                    </p>
                    <h5>Quần bảo hộ</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/26/eddbd30457a04c4fea854719cbb5e73e-16272788926161565723901.jpg"
                      alt="8, fashion,thời trang,không mặc xấu,lộ hàng,pha lộ hàng,ăn mặc phản cảm,ăn mặc hớ hênh,chân váy ngắn,váy tennis,váy ngắn,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/26/8465-8779615044-1579514219-5-1627278892694441452854.png"
                      alt="9, fashion,thời trang,không mặc xấu,lộ hàng,pha lộ hàng,ăn mặc phản cảm,ăn mặc hớ hênh,chân váy ngắn,váy tennis,váy ngắn,"
                      note=""
                    />
                    <p>
                      Cùng là <strong>váy tennis</strong>, sao mà các idol Kpop
                      nhảy nhót hùng hục thế mà vẫn an toàn, trong khi mình đi
                      đứng nhẹ nhàng, không lộ trước thì cũng lộ sau? "Vũ khí"
                      bí mật ở đây chính là quần bảo hộ đó các chị em ạ. Với độ
                      dài ngang hông, quần bảo hộ làm cực tốt nhiệm vụ che những
                      thứ cần che, giúp bạn tránh khỏi tình trạng hớ hênh nơi
                      công cộng
                    </p>
                    <h5>Váy 2 lớp</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/26/138ddf2a0b477e5e24e718fc69439ecf-1627279532053160203321.jpg"
                      alt="10, fashion,thời trang,không mặc xấu,lộ hàng,pha lộ hàng,ăn mặc phản cảm,ăn mặc hớ hênh,chân váy ngắn,váy tennis,váy ngắn,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/26/21c5c04a49ebbf4cb22ab818a906f05a-2-16272793453491722409827.jpg"
                      alt="11, fashion,thời trang,không mặc xấu,lộ hàng,pha lộ hàng,ăn mặc phản cảm,ăn mặc hớ hênh,chân váy ngắn,váy tennis,váy ngắn,"
                      note=""
                    />
                    <p>
                      Thay vì vừa quần vừa váy, chị em có thể cân nhắc sắm 1
                      chiếc <strong>váy tennis</strong> 2 lớp. Lớp thứ 2 bên
                      trong được may khá mỏng với hình dáng nhỏ xinh như 1 chiếc
                      quần bảo hộ, giúp chị em tự tin thoải mái diện váy tennis
                      mà không lo lộ hàng
                    </p>
                    <p>Ảnh: Internet</p>
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
