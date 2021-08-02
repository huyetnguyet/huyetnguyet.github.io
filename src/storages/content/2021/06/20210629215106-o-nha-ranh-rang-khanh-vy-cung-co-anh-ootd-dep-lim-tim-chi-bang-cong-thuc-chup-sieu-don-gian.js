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
"timestamp": '29/06/2021 09:51 PM',
"title": 'Ở nhà rảnh rang, Khánh Vy cũng có ảnh OOTD đẹp "lịm tim" chỉ bằng công thức chụp siêu đơn giản',
"description": 'Tham khảo ngay loạt gợi ý hay ho này từ Khánh Vy, đảm bảo bạn ngồi ở nhà thở thôi cũng có ảnh đẹp!',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210629215106--10-316484.jpg',
"alt": 'star style,fashion,thời trang,làm đẹp,Makeup,sống ảo,selfie,chụp ảnh,Khánh Vy,show your best contest,Nhà Lên Đèn, Em Lên Đồ,Vũ trụ ở nhà không la cà,',
"category": 'stars',
"date": '29/06/2021',
"time": '09:51 PM',
"link": '/o-nha-ranh-rang-khanh-vy-cung-co-anh-ootd-dep-lim-tim-chi-bang-cong-thuc-chup-sieu-don-gian',
"zcomponent": 'page_20210629215106',
"filepath": './20210629215106-o-nha-ranh-rang-khanh-vy-cung-co-anh-ootd-dep-lim-tim-chi-bang-cong-thuc-chup-sieu-don-gian.js'
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
  'Ở nhà rảnh rang, Khánh Vy cũng có ảnh OOTD đẹp "lịm tim" chỉ bằng công thức chụp siêu đơn giản';
const author = "HÀ TRẦN,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "29/06/2021 09:51 PM";
const description =
  "Tham khảo ngay loạt gợi ý hay ho này từ Khánh Vy, đảm bảo bạn ngồi ở nhà thở thôi cũng có ảnh đẹp!";
const link =
  "o-nha-ranh-rang-khanh-vy-cung-co-anh-ootd-dep-lim-tim-chi-bang-cong-thuc-chup-sieu-don-gian";
const tagparam = [
  "star style",
  "fashion",
  "thời trang",
  "làm đẹp",
  "Makeup",
  "sống ảo",
  "selfie",
  "chụp ảnh",
  "Khánh Vy",
  "show your best contest",
  "Nhà Lên Đèn, Em Lên Đồ",
  "Vũ trụ ở nhà không la cà",
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

export default function page_20210629215106() {
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
                    Sắm cả tủ đồ đẹp chỉ mong được gặp bạn gặp bè mà chả thấy ai
                    ngoại trừ "Cô Vít". Ngồi chờ dịch dã qua đi để cắt mác áo
                    quần thế thì biết đến bao giờ hả các bạn ơi. Nghe lời{" "}
                    <strong>Khánh Vy</strong>, ở nhà lên đồ, "
                    <strong>sống ảo</strong>" như này mới đúng chuẩn "anh hùng
                    thời nào cũng chiến". Cô bạn đã gửi về{" "}
                    <strong>Nhà Lên Đèn, Em Lên Đồ</strong> cả loạt ảnh chụp tại
                    gia siêu xịn xò, khiến fan càng muốn tham gia luôn và ngay
                    để trúng quà khủng.{" "}
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215106--10-316484.jpg")
                        .default
                    }
                    alt="1, star style,fashion,thời trang,làm đẹp,Makeup,sống ảo,selfie,chụp ảnh,Khánh Vy,show your best contest,Nhà Lên Đèn, Em Lên Đồ,Vũ trụ ở nhà không la cà,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215106--11-586072.jpg")
                        .default
                    }
                    alt="2, star style,fashion,thời trang,làm đẹp,Makeup,sống ảo,selfie,chụp ảnh,Khánh Vy,show your best contest,Nhà Lên Đèn, Em Lên Đồ,Vũ trụ ở nhà không la cà,"
                    note=""
                  />

                  <p>
                    Cần gì cầu kì lắm đâu, mặc 1 bộ xiêm y thật đẹp, trang điểm
                    nhẹ nhàng, đứng trước gương là nàng đã tỏa sáng với cái
                    "vibe" chuẩn chỉnh vốn có. Trong chiếc đầm tay bồng trắng
                    tựa nàng thơ, <strong>Khánh Vy</strong> càng khiến người ta
                    phải tấm tắc trước vẻ đẹp trong sáng, đầy tri thức của mình.
                    Đường cut out ở lưng và eo cũng khiến cô nàng nhìn tinh tế,
                    hiện đại hơn bội phần.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215106--12-648541.jpg")
                        .default
                    }
                    alt="3, star style,fashion,thời trang,làm đẹp,Makeup,sống ảo,selfie,chụp ảnh,Khánh Vy,show your best contest,Nhà Lên Đèn, Em Lên Đồ,Vũ trụ ở nhà không la cà,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215106--13-548764.jpg")
                        .default
                    }
                    alt="4, star style,fashion,thời trang,làm đẹp,Makeup,sống ảo,selfie,chụp ảnh,Khánh Vy,show your best contest,Nhà Lên Đèn, Em Lên Đồ,Vũ trụ ở nhà không la cà,"
                    note=""
                  />
                  <p>
                    Cũng phải nói thêm rằng từ trước đó, nàng đã khiến MXH phải
                    "á ố" vì màn thay đổi phong cách ngay tại nhà. Kết hợp bra
                    với jeans mở cúc, cô nàng tiện khoe luôn vòng 1 cũng rất ra
                    gì cùng eo thon giấu kĩ bấy lâu nay. Background giường trắng
                    đơn giản càng tôn lên vẻ ngoài ngày một "lên hương" của Vy.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215106--14-449156.jpg")
                        .default
                    }
                    alt="5, star style,fashion,thời trang,làm đẹp,Makeup,sống ảo,selfie,chụp ảnh,Khánh Vy,show your best contest,Nhà Lên Đèn, Em Lên Đồ,Vũ trụ ở nhà không la cà,"
                    note=""
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    Căng lên 1 tấm vải trắng, sắm sửa đạo cụ với vài nhành hoa,
                    vậy là bạn đã có được 70% bộ ảnh đẹp xao xuyến tựa{" "}
                    <strong>Khánh Vy</strong> rồi đó. Giờ chỉ cần diện thêm 1
                    chiếc váy 2 dây sexy vào nữa và "cầu diễn" thôi.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215106--15-713596.jpg")
                        .default
                    }
                    alt="6, star style,fashion,thời trang,làm đẹp,Makeup,sống ảo,selfie,chụp ảnh,Khánh Vy,show your best contest,Nhà Lên Đèn, Em Lên Đồ,Vũ trụ ở nhà không la cà,"
                    note=""
                  />
                  <p>
                    Chụp xong cả loạt ảnh xinh thế này mà ém riêng mình mình thì
                    phí lắm vì bao nhiêu công sức chỉnh màu, căn bố cục thế kia
                    cơ mà. Chưa hết, <strong>Khánh Vy</strong> đã cùng{" "}
                    <strong>Nhà Lên Đèn, Em Lên Đồ</strong> tạo ra sân chơi để
                    dân tình được dịp đăng tải những bức ảnh xinh xắn của mình
                    lên Instagram. Đăng ảnh xong vừa được nổi tiếng lại vừa rinh
                    về quà khủng, đúng là 1 mũi tên trúng 2 đích mà!
                  </p>
                  <p>Ảnh: Instagram NV</p>
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
