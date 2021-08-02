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
"timestamp": '31/07/2021 01:19 PM',
"title": 'Khi quốc kỳ Việt Nam "hóa người", profile mê phở và giỏi xem bói khiến netizen thích thú',
"description": 'Nhìn thông tin của "anh chàng Việt Nam" netizen không khỏi cảm thán "chất quá!".',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-1627707697606365323420.jpg',
"alt": 'QUỐC KỲ VIỆT NAM,TOKYO OLYMPIC 2020,WORLD FLAGS,QUỐC KỲ VIỆT NAM BIẾN THÀNH NGƯỜI,',
"category": 'news',
"date": '31/07/2021',
"time": '01:19 PM',
"link": '/khi-quoc-ky-viet-nam-hoa-nguoi-profile-me-pho-va-gioi-xem-boi-khien-netizen-thich-thu',
"zcomponent": 'page_20210731131929',
"filepath": './20210731131929-khi-quoc-ky-viet-nam-hoa-nguoi-profile-me-pho-va-gioi-xem-boi-khien-netizen-thich-thu.js'
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
  'Khi quốc kỳ Việt Nam "hóa người", profile mê phở và giỏi xem bói khiến netizen thích thú';
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "31/07/2021 01:19 PM";
const description =
  'Nhìn thông tin của "anh chàng Việt Nam" netizen không khỏi cảm thán "chất quá!".';
const link =
  "khi-quoc-ky-viet-nam-hoa-nguoi-profile-me-pho-va-gioi-xem-boi-khien-netizen-thich-thu";
const tagparam = [
  "QUỐC KỲ VIỆT NAM",
  "TOKYO OLYMPIC 2020",
  "WORLD FLAGS",
  "QUỐC KỲ VIỆT NAM BIẾN THÀNH NGƯỜI",
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

export default function page_20210731131929() {
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
                    Để chào mừng <strong>Tokyo Olympic 2020</strong>, một dự án
                    phi chính thức đã được thực hiện, cụ thể là một số nghệ sĩ
                    Nhật Bản đã cùng nhau tạo ra một chiến dịch quảng bá không
                    chính thức cho Tokyo Olympic 2020 lấy tên là{" "}
                    <strong>World Flags</strong>. Nói rõ hơn, World Flags là dự
                    án được các hoạ sĩ Nhật vẽ các quốc kỳ theo phong cách nhân
                    vật Samurai để mừng thế vận hội Tokyo 2020. Ngoài ra còn để
                    tuyên truyền và tìm hiểu văn hóa, lịch sử của các quốc gia
                    trên thế giới. Điểm độc đáo là mỗi quốc kỳ của từng quốc gia
                    đều được hô biến thành các nhân vật Samurai và có hẳn
                    profile ấn tượng.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-1627707697606365323420.jpg"
                    alt="1, QUỐC KỲ VIỆT NAM,TOKYO OLYMPIC 2020,WORLD FLAGS,QUỐC KỲ VIỆT NAM BIẾN THÀNH NGƯỜI,"
                    note=""
                  />
                  <p>
                    Từng tác phẩm được tạo ra đều dựa trên văn hóa, lịch sử và
                    bản sắc dân tộc của mỗi quốc gia tương ứng, mang đến sự đa
                    dạng hài hòa về mặt hình ảnh. Trong bài viết hôm nay chúng
                    ta hãy chỉ nhìn vào hình ảnh của Việt Nam thôi nhé!
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>Hãy soi 1 lượt profile của "anh chàng Việt Nam" nào:</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/5eesnzmqtmcvdb9bxevebg-16277077363212143314398.png"
                    alt="2, QUỐC KỲ VIỆT NAM,TOKYO OLYMPIC 2020,WORLD FLAGS,QUỐC KỲ VIỆT NAM BIẾN THÀNH NGƯỜI,"
                    note=""
                  />
                  <p>
                    Sinh ngày 30 tháng 11. Theo suy đoán của 1 số fan thì ngày
                    sinh 30/11 có liên quan đến sự kiện Nam Kỳ Khởi Nghĩa, vì đó
                    cũng là lần đầu tiên cờ đỏ sao vàng xuất hiện.
                  </p>
                  <p>Chiều cao: 1m75</p>
                  <p>Nhóm máu: B</p>
                  <p>Sở thích: chăm sóc thú cưng</p>
                  <p>Kỹ năng đặc biệt: xem bói</p>
                  <p>Điểm yếu: quản lý lịch trình</p>
                  <p>Món ăn yêu thích: Phở</p>
                  <p>
                    Tính cách: Hiền lành, dễ chịu nhưng lại giả đò nghiêm nghị
                    vì xung quanh có quá nhiều người hành tung tự do.
                  </p>
                  <p>
                    Có thể sử dụng thức thần để triệu hồi hổ cưng (Toraichi,
                    Toraji, Torazo), và sử dụng dấu sao năm cánh để xử lý các kỹ
                    thuật đặc biệt.
                  </p>
                  <p>
                    Vì yêu động vật nên đôi khi anh ta nhầm lẫn và triệu hồi một
                    con chó con thay vì Toraichi.
                  </p>
                  <p>Câu cửa miệng là "Chân hồng âm dương sư tham kiến!".</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/31/photo-1-1627707287461260504903.jpg"
                    alt="3, QUỐC KỲ VIỆT NAM,TOKYO OLYMPIC 2020,WORLD FLAGS,QUỐC KỲ VIỆT NAM BIẾN THÀNH NGƯỜI,"
                    note=""
                  />
                  <p>
                    Nhìn vào profile trên thì rõ ràng anh Việt Nam khá ấn tượng
                    đúng không nào. Mấy cái kỹ năng đặc biệt, món ăn yêu thích
                    và sở thích cũng thật sự rất Việt Nam. Bạn có thích{" "}
                    <strong>quốc kỳ Việt Nam</strong> được nhân cách hóa thành
                    nhân vật Anime như thế này không? Hãy chia sẻ nhé!
                  </p>
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
