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
"timestamp": '29/07/2021 04:25 PM',
"title": 'Mãn nhãn chiêm ngưỡng loạt quốc kỳ các nước tham dự Tokyo Olympic 2020 được vẽ theo phong cách anime',
"description": 'Quốc kỳ Việt Nam đẹp quá anh em nhỉ?',
"src": '',
"alt": 'QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,',
"category": 'news',
"date": '29/07/2021',
"time": '04:25 PM',
"link": '/man-nhan-chiem-nguong-loat-quoc-ky-cac-nuoc-tham-du-tokyo-olympic-2020-duoc-ve-theo-phong-cach-anime',
"zcomponent": 'page_20210729162539',
"filepath": './20210729162539-man-nhan-chiem-nguong-loat-quoc-ky-cac-nuoc-tham-du-tokyo-olympic-2020-duoc-ve-theo-phong-cach-anime.js'
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
  "Mãn nhãn chiêm ngưỡng loạt quốc kỳ các nước tham dự Tokyo Olympic 2020 được vẽ theo phong cách anime";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:25 PM";
const description = "Quốc kỳ Việt Nam đẹp quá anh em nhỉ?";
const link =
  "man-nhan-chiem-nguong-loat-quoc-ky-cac-nuoc-tham-du-tokyo-olympic-2020-duoc-ve-theo-phong-cach-anime";
const tagparam = ["QUỐC KỲ", "QUỐC KỲ VẼ AIME", "TOKYO OLYMPIC 2020", "ANIME"];
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

export default function page_20210729162539() {
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
                    Trong khoảng thời gian gần đây, một số nghệ sĩ Nhật Bản đã
                    cùng nhau tạo ra một chiến dịch quảng bá không chính thức
                    cho <strong>Tokyo Olympic 2020</strong> được lấy cảm hứng từ
                    một chủ đề mà họ vô cùng đam mê, đó là{" "}
                    <strong>Anime</strong>. Cụ thể, các nghệ sĩ tài hoa đã "nhân
                    cách hóa" <strong>quốc kỳ</strong> của các quốc gia tham gia
                    Tokyo Olympic 2020 thành những nhân vật anime sẵn sàng chiến
                    đấu. Điểm đặc trưng chung của tất cả những tác phẩm này là
                    mỗi nhân vật đều được thiết kế rất Nhật Bản.
                  </p>
                  <p>
                    Từng tác phẩm được tạo ra đều dựa trên văn hóa, lịch sử và
                    bản sắc dân tộc của mỗi quốc gia tương ứng, mang đến sự đa
                    dạng hài hòa về mặt hình ảnh. Đặc biệt, hình ảnh của Việt
                    Nam được nhiều người đánh giá là có thiết kế khá ấn tượng,
                    rất nhiều cư dân mạng Việt Nam đã dành lời khen có cánh cho
                    thiết kế này.
                  </p>
                  <p>
                    Dưới đây mời các bạn cùng chiêm ngưỡng loạt ảnh{" "}
                    <strong>quốc kỳ</strong> của các quốc gia tham dự{" "}
                    <strong>Tokyo Olympic 2020</strong> khi được vẽ theo phong
                    cách <strong>anime</strong> nhé!
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16272808098881406095513.jpg"
                    alt="1, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Việt Nam"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627280828043858844025.jpg"
                    alt="2, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Belgium"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16272808401701698571127.jpg"
                    alt="3, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Argentina"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627280852559786999900.jpg"
                    alt="4, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Australia"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627280865932303613328.jpg"
                    alt="5, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Brazil"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16272808780231300561428.jpg"
                    alt="6, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="United Kingdom"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16272808936211204258662.jpg"
                    alt="7, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Canada"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627280906058260990970.jpg"
                    alt="8, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="China"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627280923827755024491.jpg"
                    alt="9, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Denmark"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627280939086190899074.jpg"
                    alt="10, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Finland"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16272809551781340879142.jpg"
                    alt="11, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="France"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16272809672331600786402.jpg"
                    alt="12, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Germany"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16272809788591927238467.jpg"
                    alt="13, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="India"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627280994564758315558.jpg"
                    alt="14, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Indonesia"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627281007444948731982.jpg"
                    alt="15, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Italia"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-162728101894410016549.jpg"
                    alt="16, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Japan"
                  />
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16272810390521064783012.jpg"
                    alt="17, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Malaysia"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16272810522851190554920.jpg"
                    alt="18, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Mexico"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627281071204608138333.jpg"
                    alt="19, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Netherlands"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16272810832281398553483.jpg"
                    alt="20, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Norway"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627281095518228167875.jpg"
                    alt="21, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Philippines"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16272811073351376940753.jpg"
                    alt="22, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Russia"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627281124959994759371.jpg"
                    alt="23, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Singapore"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627281137343654926411.jpg"
                    alt="24, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="South Africa"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627281149150678882111.jpg"
                    alt="25, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="South Korea"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627281187238508175569.jpg"
                    alt="26, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Sweden"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16272811980971272915991.jpg"
                    alt="27, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Switzerland"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627281211303272155833.jpg"
                    alt="28, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Thailand"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16272812249781953405557.jpg"
                    alt="29, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="UAE"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627281239274863624492.jpg"
                    alt="30, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="USA"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-162728125599253064692.jpg"
                    alt="31, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Venezuela"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627281268235869157005.jpg"
                    alt="32, QUỐC KỲ,QUỐC KỲ VẼ AIME,TOKYO OLYMPIC 2020,ANIME,"
                    note="Spain"
                  />
                  <p>
                    Sau khi xem loạt ảnh này, bạn thích hình ảnh nào nhất? Hãy
                    chia sẻ nhé!
                  </p>
                  <p>Tổng hợp</p>
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
