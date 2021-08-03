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
"title": '13 báu vật ma thuật của đảo Anh, những truyền thuyết bị lãng quên (P.1)',
"description": 'Các báu vật này được nhắc đến trong văn bản cổ của xứ Welsh với tiêu đề "Tri Thlws ar Ddeg Ynys Prydain", dịch ra có nghĩa là "Tên của 13 báu vật ở phía bắc đảo Anh".',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/9/sword-of-rhydderch-the-generous0-16258376823891587814041.jpg',
"alt": 'KHÁM PHÁ,ĐỜI SỐNG,TRUYỀN THUYẾT,LỊCH SỬ,THẦN THOẠI,',
"category": 'news',
"date": '29/07/2021',
"time": '04:16 PM',
"link": '/13-bau-vat-ma-thuat-cua-dao-anh-nhung-truyen-thuyet-bi-lang-quen-p1',
"zcomponent": 'page_20210729161642',
"filepath": './20210729161642-13-bau-vat-ma-thuat-cua-dao-anh-nhung-truyen-thuyet-bi-lang-quen-p1.js'
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
const title =
  "13 báu vật ma thuật của đảo Anh, những truyền thuyết bị lãng quên (P.1)";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:16 PM";
const description =
  'Các báu vật này được nhắc đến trong văn bản cổ của xứ Welsh với tiêu đề "Tri Thlws ar Ddeg Ynys Prydain", dịch ra có nghĩa là "Tên của 13 báu vật ở phía bắc đảo Anh".';
const link =
  "13-bau-vat-ma-thuat-cua-dao-anh-nhung-truyen-thuyet-bi-lang-quen-p1";
const tagparam = [
  "KHÁM PHÁ",
  "ĐỜI SỐNG",
  "TRUYỀN THUYẾT",
  "LỊCH SỬ",
  "THẦN THOẠI",
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

export default function page_20210729161642() {
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
                      Mười ba báu vật của đảo Anh là một loạt các món đồ ma
                      thuật trong truyền thống của xứ Welsh. Trong các bản thảo
                      viết tay của thế kỷ 15 – 16, như truyện về vua Arthur xứ
                      Welsh "Culhwch and Olwen", đều có đề cập đến những món đồ
                      này. Theo sách vở ghi lại, chúng được cất giấu ở phía bắc
                      đảo Anh.
                    </p>
                    <h5>
                      1. Dyrnwyn, gleddyf Rhydderch Hael (Chuôi Trắng, thanh
                      kiếm của Rhydderch Hào Phóng)
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/9/sword-of-rhydderch-the-generous0-16258376823891587814041.jpg"
                      alt="1, KHÁM PHÁ,ĐỜI SỐNG,TRUYỀN THUYẾT,LỊCH SỬ,THẦN THOẠI,"
                      note=""
                    />
                    <p>
                      Thanh kiếm kì lạ này thuộc về Rhydderch Hael, một vị vua
                      sống ở thế kỷ thứ 7 của vương quốc Britton có tên gọi Alt
                      Clut, ngày nay vương quốc này có lẽ thuộc Strathclyde,
                      Scotland. Khi thanh kiếm được người xứng đáng rút ra, toàn
                      thân kiếm sẽ bốc cháy. Mặc dù Rhydderch sẵn lòng giao
                      thanh kiếm cho bất kỳ ai hỏi mượn, nhưng sau khi biết điểm
                      kỳ lạ của kiếm thì họ đều từ chối nhận.
                    </p>
                    <h5>
                      2. Mwys Gwyddno Garnanir (Giỏ trái cây của Gwyddno Chân
                      Dài)
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/9/basket-of-plenty0-1625837701422336213902.jpg"
                      alt="2, KHÁM PHÁ,ĐỜI SỐNG,TRUYỀN THUYẾT,LỊCH SỬ,THẦN THOẠI,"
                      note=""
                    />
                    <p>
                      Gwyddno Chân Dài là vị vua của Canolbarth, một vùng đất
                      huyền thoại đã bị nhấn chìm ngoài khơi xứ Wales (ngày nay
                      là Vịnh Cardigan). Ông ta sở hữu giỏ trái cây ma thuật,
                      một chiếc giỏ bằng liễu gai có thể đựng được nhiều thức
                      ăn. Tương truyền, đồ ăn dành cho một người được đặt vào
                      giỏ và đóng lại. Sau đó, mở giỏ ra, thức ăn sẽ đủ cho hàng
                      trăm người.
                    </p>
                    <h5>
                      3. Korn Bran Galed o’r Gogledd (Chiếc sừng của Bran
                      Niggard từ phương bắc)
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/9/horn-of-bran0-162583780841518268464.jpg"
                      alt="3, KHÁM PHÁ,ĐỜI SỐNG,TRUYỀN THUYẾT,LỊCH SỬ,THẦN THOẠI,"
                      note=""
                    />
                    <p>
                      Theo <strong>truyền thuyết</strong> xứ Welsh, chiếc sừng
                      này từng thuộc về Herakles, người đã lấy nó từ đầu Nessus
                      sau khi hạ gục tên nhân mã này. Chiếc sừng sẽ chứa đầy bất
                      kỳ thức uống gì mà người dùng muốn có.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>4. Kar Morgan Mwynfawr (Cỗ xe của Morgan Giàu Có)</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/9/chariot-of-morgan0-162583782509196713854.jpg"
                      alt="4, KHÁM PHÁ,ĐỜI SỐNG,TRUYỀN THUYẾT,LỊCH SỬ,THẦN THOẠI,"
                      note=""
                    />
                    <p>
                      Morgan, vua xứ Glamorgan, cháu trai và có thể là người kế
                      vị của vua Meurig, người cai trị các vương quốc Welsh cổ ở
                      Gwent và Glywysing trong khoảng thời gian khoảng từ năm
                      400-600 TCN. Người ta đồn rằng Morgian sở hữu một cỗ xe
                      ngựa có thể đi rất nhanh đến bất kỳ địa điểm nào mà người
                      sử dụng nó mong muốn.
                    </p>
                    <h5>
                      5. Kebystr Klydno Eiddin (Dây cương ngựa của Clydno
                      Eiddyn)
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/9/magical-horse-halter-of-clydno-eiddyn0-16258381030282142308354.jpg"
                      alt="5, KHÁM PHÁ,ĐỜI SỐNG,TRUYỀN THUYẾT,LỊCH SỬ,THẦN THOẠI,"
                      note=""
                    />
                    <p>
                      Món đồ thứ 5 trong kho báu là dây cương cố định buộc ở
                      chân giường của Clydno Eiddin, người cai trị ở Hen Ogledd,
                      một khu vực nói tiếng Britton mà ngày nay năm ở miền bắc
                      nước Anh và thuộc miền nam Scotland trong thời kỳ đầu
                      Trung Cổ. Eiddyn là tên gọi tiếng Britthon của Edinburgh,
                      ám chỉ đến mối liên hệ với vùng lãnh thổ này. Theo{" "}
                      <strong>truyền thuyết</strong>, bộ dây cương sẽ mang đến
                      cho Clydno bất kỳ con ngựa nào mà ông ta muốn có.
                    </p>
                    <h5>
                      6. Kyllell Llawfrodedd Farchog (Con dao của kỵ sĩ
                      Llawfrodedd)
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/9/knife-of-llawfrodedd-the-horseman0-1625838121520276823108.jpg"
                      alt="6, KHÁM PHÁ,ĐỜI SỐNG,TRUYỀN THUYẾT,LỊCH SỬ,THẦN THOẠI,"
                      note=""
                    />
                    <p>
                      Llawfrodedd Farchog là người hùng trong truyền thống Welsh
                      và là nhân vật huyền thoại trong triều đình của vua
                      Arthur, theo các câu chuyện Culhwch and Olwen cũng như
                      Breuddwyd Rhonabwy kể lại. người ta kể rằng ông sở hữu một
                      con dao có thể phục vụ cho bộ đội 24 người lính trên bàn
                      ăn. Con dao là món đồ tuyệt vời trong buổi yến tiệc, nhưng
                      cũng có thể là vũ khí chết người trên chiến trường.
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
