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
"timestamp": '28/08/2021 08:52 AM',
"title": 'One Piece: Điểm độc đáo từ "Phái vô kiếm" của Zoro, không thể gây sát thương nhưng vẫn thổi bay được kẻ thù',
"description": 'Kỹ thuật Mutoryu của Zoro có vẻ như không thể làm tổn thương mục tiêu?',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/28/photo-1-163013486630761511058.jpg',
"alt": 'ZORO,MUTORYU,VÔ THUẬT KIẾM PHÁP,ONE PIECE,DRAGON TWISTER,TATSU MAKI,PHÁI VÔ KIẾM,',
"category": 'games',
"date": '28/08/2021',
"time": '08:52 AM',
"link": '/one-piece-diem-doc-dao-tu-phai-vo-kiem-cua-zoro-khong-the-gay-sat-thuong-nhung-van-thoi-bay-duoc-ke-thu',
"zcomponent": 'page_20210828085214',
"filepath": './20210828085214-one-piece-diem-doc-dao-tu-phai-vo-kiem-cua-zoro-khong-the-gay-sat-thuong-nhung-van-thoi-bay-duoc-ke-thu.js'
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
  'One Piece: Điểm độc đáo từ "Phái vô kiếm" của Zoro, không thể gây sát thương nhưng vẫn thổi bay được kẻ thù';
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "28/08/2021 08:52 AM";
const description =
  "Kỹ thuật Mutoryu của Zoro có vẻ như không thể làm tổn thương mục tiêu?";
const link =
  "one-piece-diem-doc-dao-tu-phai-vo-kiem-cua-zoro-khong-the-gay-sat-thuong-nhung-van-thoi-bay-duoc-ke-thu";
const tagparam = [
  "ZORO",
  "MUTORYU",
  "VÔ THUẬT KIẾM PHÁP",
  "ONE PIECE",
  "DRAGON TWISTER",
  "TATSU MAKI",
  "PHÁI VÔ KIẾM",
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

export default function page_20210828085214() {
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
                      <strong>Mutoryu</strong> (
                      <strong>Vô Thuật Kiếm Pháp</strong>) là kỹ thuật không
                      dùng kiếm trong chiến đấu của <strong>Zoro</strong>. Vì
                      không có kiếm nên dĩ nhiên sẽ không có vụ chém hay chặt gì
                      khi Zoro dùng kỹ thuật này, mà nó chỉ có thể đánh văng đối
                      thủ vào không trung mà thôi.
                    </p>
                    <p>
                      Và có lẽ, do bản chất của nó là một kỹ thuật khẩn cấp, cho
                      đến nay <strong>Mutoryu</strong> của <strong>Zoro</strong>{" "}
                      dường như không thể trực tiếp gây hại cho đối thủ.
                    </p>
                    <h5>1. Nó được sử dụng lần đầu trong Davy Back Fight</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/28/photo-1-163013486630761511058.jpg"
                      alt="1, ZORO,MUTORYU,VÔ THUẬT KIẾM PHÁP,ONE PIECE,DRAGON TWISTER,TATSU MAKI,PHÁI VÔ KIẾM,"
                      note=""
                    />

                    <p>
                      Trong trận đấu Groggy Ball (Bóng Đá Groggy) trong trận
                      chiến Davy Back Fight thì <strong>Zoro</strong> đã nghĩ ra
                      kỹ thuật <strong>Mutoryu</strong> và nó cũng chỉ có một
                      phong cách chiến đấu duy nhất là{" "}
                      <strong>Tatsu Maki</strong> hay còn gọi là "
                      <strong>Dragon Twister</strong>" (Vòi Xoáy Rồng). Đây vốn
                      không phải là phương thức chiến đấu của cậu ngay từ ban
                      đầu, chăng qua do nội quy của trận chiến Davy Back Fight
                      từ bọn hải tặc Foxy là không được dùng kiếm nên Zoro mới
                      phải dùng đến nó. Lấn đầu Zoro dùng Mutoryu là để đối đầu
                      với Pickles.
                    </p>
                    <h5>
                      2. <strong>Mutoryu</strong> được dùng khi{" "}
                      <strong>Zoro</strong> chiến đấu với Dice trong{" "}
                      <strong>One Piece</strong> Film: Gold
                    </h5>
                    <p>
                      Khi chiến đấu với Dice trong Film: Gold, Tesoro đã có thời
                      gian để làm lỏng tất cả các thanh kiếm của{" "}
                      <strong>Zoro</strong>. Sau khi chống lại cú chém của Dice
                      bằng bàn tay tăng cường Haki của mình, Zoro đã thổi bay
                      Dice bằng Kokujo: O Tatsumaki mà không cần kiếm.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/28/photo-1-16301348676111241091801.jpg"
                      alt="2, ZORO,MUTORYU,VÔ THUẬT KIẾM PHÁP,ONE PIECE,DRAGON TWISTER,TATSU MAKI,PHÁI VÔ KIẾM,"
                      note=""
                    />

                    <p>
                      Đòn tấn công này làm Dice giật mình, thổi bay hắn ta đi,
                      nhưng không thực sự làm tổn thương người đàn ông này.
                      Nhưng ngay sau đó <strong>Zoro</strong> đã có thể lấy một
                      trong những thanh kiếm của mình và kết liễu Dice với
                      Shishi Sonson.
                    </p>
                    <h5>
                      3. Khi <strong>Zoro</strong> gây rối nơi đánh bạc, anh ta
                      cũng không hại Yakuza
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/28/photo-2-16301348681471608177465.jpg"
                      alt="3, ZORO,MUTORYU,VÔ THUẬT KIẾM PHÁP,ONE PIECE,DRAGON TWISTER,TATSU MAKI,PHÁI VÔ KIẾM,"
                      note=""
                    />

                    <p>
                      Khi <strong>Zoro</strong> làm loạn nơi đánh bạc trong{" "}
                      <strong>One Piece</strong> 922, mặc dù sức mạnh kỹ thuật{" "}
                      <strong>Tatsu Maki</strong> của Zoro đã tăng lên đến mức
                      có thể gây thiệt hại cho cả tòa nhà mà anh ta đang đứng,
                      nhưng Yakuza vẫn không bận tâm.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Cuối cùng, <strong>Zoro</strong> đã phải sử dụng kỹ thuật
                      Daishinkan để hạ gục tất cả đối thủ của mình bằng những
                      nhát chém không thực sự trúng đích.
                    </p>
                    <h5>
                      4. Nếu không dùng kiếm, có vẻ như tuyệt kỹ{" "}
                      <strong>Tatsu Maki</strong> mất đi sức mạnh hủy diệt
                    </h5>
                    <p>
                      Sau khi xem các ví dụ về việc sử dụng{" "}
                      <strong>Mutoryu</strong> của <strong>Zoro</strong>, có vẻ
                      như nếu không có kiếm, <strong>Tatsu Maki</strong> đã thực
                      sự mất đi sức mạnh hủy diệt của nó. Do đó, Mutoryu chỉ có
                      thể được sử dụng trong những trường hợp khẩn cấp nếu Zoro
                      không cầm vũ khí.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/28/photo-3-16301348676521368588895.jpg"
                      alt="4, ZORO,MUTORYU,VÔ THUẬT KIẾM PHÁP,ONE PIECE,DRAGON TWISTER,TATSU MAKI,PHÁI VÔ KIẾM,"
                      note=""
                    />

                    <p>
                      Vấn đề là trong các tình huống khẩn cấp,{" "}
                      <strong>Mutoryu</strong> tỏ ra rất hữu ích. Ví dụ như
                      trong tình huống với Dice, chúng ta có thể thấy rằng kỹ
                      thuật này đã tạo ra khoảng cách giữa <strong>Zoro</strong>{" "}
                      và kẻ thù, tạo cơ hội cho Zoro có thể lấy lại vũ khí của
                      mình.
                    </p>
                    <p>
                      Kỹ thuật này cũng hữu ích khi <strong>Zoro</strong> được
                      yêu cầu chiến đấu mà không sử dụng kiếm, như bạn có thể
                      thấy trong Davy Back Fight.
                    </p>
                    <p>
                      Mặt khác, tôi nghĩ kỹ thuật này cũng có thể được sử dụng
                      để ném các đồng minh của <strong>Zoro</strong> đi xa nếu
                      chẳng hạn họ phải nhanh chóng di chuyển tới điểm đâu đó,
                      hoặc Zoro muốn sơ tán đột ngột cho đồng đội.
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
