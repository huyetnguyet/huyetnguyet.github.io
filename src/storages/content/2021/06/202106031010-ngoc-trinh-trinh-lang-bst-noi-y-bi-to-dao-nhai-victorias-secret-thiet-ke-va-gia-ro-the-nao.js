import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* Data Input */
/*

 <ContentItem
title="Ngọc Trinh trình làng BST nội y bị tố đạo nhái Victoria's Secret: Thiết kế và "giá rổ" thế nào?"
content="Với khoảng 500k là bạn đã sắm được trọn bộ đồ lót của Venus' Secret."
src="https://afamilycdn.com/150157425591193600/2021/6/2/1879373681503831137856513896795404376676089n-162263222469382786144.jpg"
alt="Ngọc Trinh"
types="images"
time="03/06/2021 10:10 AM"
link="/ngoc-trinh-trinh-lang-bst-noi-y-bi-to-dao-nhai-victorias-secret-thiet-ke-va-gia-ro-the-nao"
/>

*/
/* ---------------------------------------------------------------- */

const category = "images";
const categoryLink = "/images";

const title =
  "Ngọc Trinh trình làng BST nội y bị tố đạo nhái Victoria's Secret: Thiết kế và 'giá rổ' thế nào?";
const author = "BER";
const source = "PHÁP LUẬT VÀ BẠN ĐỌC";
const date = "03/06/2021";
const time = "10:10 AM";
const description =
  "Với khoảng 500k là bạn đã sắm được trọn bộ đồ lót của Venus' Secret.";
const link =
  "ngoc-trinh-trinh-lang-bst-noi-y-bi-to-dao-nhai-victorias-secret-thiet-ke-va-gia-ro-the-nao";

const tags = ["Ngọc Trinh", "Đẹp", "Nội y", "Sao việt", "Thời trang"];

/* ---------------------------------------------------------------- */

/* 
<ContentImage
src=""
alt=""
note=""
/>
                  */

const facebookLinkShare =
  "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fhuyetnguyet.com%2F" +
  link +
  "&layout=button_count&size=small&width=77&height=20&appId";

const updatedTags = tags.map((tag) => {
  const link =
    "https://www.google.com/search?q=huyetnguyet+" + tag.replace(" ", "+");
  return (
    <a href={link} className="tag">
      {tag}
    </a>
  );
});

export default function page_202106031010() {
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
              >
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
              <div className="author">{author}</div> - Theo {source} | {date} -
              {time}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <div className="contentBody">
                  <p>
                    Còn nhớ cách đây không lâu, Ngọc Trinh và Vũ Khắc Tiệp đã
                    trình làng thương hiệu nội y mà họ hợp tác chung. Ngay lập
                    tức thương hiệu này đã vướng ồn ào đạo nhái Victoria's
                    Secret khi màu sắc, thiết kế có nhiều điểm hao hao thương
                    hiệu nội y nổi tiếng thế giới. Mới đây,
                    <div className="highlight">Ngọc Trinh</div> đã trình làng
                    những thiết kế mới nhất của Venus' Secret, liệu thiết kế và
                    giá rổ có tương xứng?
                  </p>
                  <ContentImage
                    src="https://afamilycdn.com/150157425591193600/2021/6/2/4xtzl-16226322245511325336102.jpg"
                    alt="Ngọc Trinh"
                    note="Ngay từ khi ra mắt, thương hiệu nội y của Ngọc Trinh - Vũ Khắc Tiệp đã bị tố đạo nhái hình ảnh của Victoria's Secret."
                  />
                  <ContentImage
                    src="https://afamilycdn.com/150157425591193600/2021/6/2/personalshoppervs1539676386c9b9d6890progressive-1622632224845462366970.jpg"
                    alt="Ngọc Trinh"
                    note="Đến túi mua đồ của Venus' Secret cũng na ná Victoria's Secret từ màu sắc, thiết kế đến phông chữ."
                  />
                  <p>
                    Mặc kệ nghi án đạo nhái, mới đây{" "}
                    <div className="highlight">Ngọc Trinh</div> đã chính thức
                    tung ra những thiết kế đầu tiên của thương hiệu nội y này.
                    Bản thân cô cũng trở thành người mẫu quảng bá nội y cho
                    Venus' Secret.
                  </p>
                  <ContentImage
                    src="https://afamilycdn.com/150157425591193600/2021/6/2/1922322241503830604523238550791542568816532n-16226322248061881167739.jpg"
                    alt="Ngọc Trinh"
                    note=""
                  />
                  <ContentImage
                    src="https://afamilycdn.com/150157425591193600/2021/6/2/1900468221503833504522943762486159736231053n-16226322247461069493247.jpg"
                    alt="Ngọc Trinh"
                    note=""
                  />
                  <p>
                    Các thiết kế của Venus' Secret khá đa dạng từ thiết kế đến
                    màu sắc. Tuy nhiên với cương vị người mẫu nội y, hình ảnh và
                    lối tạo dáng của <div className="highlight">Ngọc Trinh</div>{" "}
                    bị đánh giá khá nhàm chán, một màu.
                  </p>
                  <ContentImage
                    src="https://afamilycdn.com/150157425591193600/2021/6/2/1924030751503830471189917155216407453610639n-1622632224817765345262.jpg"
                    alt="Ngọc Trinh"
                    note=""
                  />
                  <ContentImage
                    src="https://afamilycdn.com/150157425591193600/2021/6/2/1888887111503832371189722880627772891972042n-1622632224723286685152.jpg"
                    alt="Ngọc Trinh"
                    note=""
                  />
                  <p>
                    Mức giá của những món nội y này dao động trong khoảng 300 -
                    400k/áo và 80 - 140k/quần. Mức giá này được đánh giá là khá
                    hợp lý, không quá đắt đỏ.
                  </p>
                  <ContentImage
                    src="https://afamilycdn.com/150157425591193600/2021/6/2/1910275841503831971189763563885076191114716n-16226322247571013741138.jpg"
                    alt="Ngọc Trinh"
                    note=""
                  />
                  <ContentImage
                    src="https://afamilycdn.com/150157425591193600/2021/6/2/1890461441503832437856384022592384163363732n-16226322247342123990508.jpg"
                    alt="Ngọc Trinh"
                    note=""
                  />
                  <p>
                    Khoảng 400 - 500k là bạn đã sắm được cả bộ nội y từ Venus'
                    Secret mà <div className="highlight">Ngọc Trinh</div> đang
                    là người quảng bá. Bạn có thể tham khảo thêm một số thiết kế
                    cụ thể dưới đây.
                  </p>
                  <ContentImage
                    src="https://afamilycdn.com/150157425591193600/2021/6/2/1879373681503831137856513896795404376676089n-162263222469382786144.jpg"
                    alt="Ngọc Trinh"
                    note="Áo (356k), quần (126k)"
                  />
                  <ContentImage
                    src="https://afamilycdn.com/150157425591193600/2021/6/2/1873174681503831637856462612537643905414418n-1622632224684905968458.jpg"
                    alt="Ngọc Trinh"
                    note="Áo (310k), quần (110k)"
                  />
                  <ContentImage
                    src="https://afamilycdn.com/150157425591193600/2021/6/2/1882788131503833271189632577710140059636857n-162263222470654341399.jpg"
                    alt="Ngọc Trinh"
                    note="Áo (356k), quần (126k)"
                  />
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
