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
"timestamp": '29/06/2021 09:44 PM',
"title": 'Lá bài Rồng Trắng Mắt Xanh trị giá nghìn đô trong Yu-Gi-Oh! được mua hết sạch trong ngày đầu ra mắt',
"description": 'Điều này thêm một lần nữa chứng minh được sức hút của trò chơi cũng như tựa manga huyền thoại Yu-Gi-Oh!.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/19/bo1-16241186006802089246700.jpg',
"alt": 'GAME YU-GI-OH!,YU-GI-OH! MANGA,YU-GI-OH! TRADING CARD GAME,TRÒ CHƠI YU-GI-OH! TRADING CARD GAME,VUA TRÒ CHƠI YUGI,THẦN BÀI YUGI,MUTO YUGI,THẺ BÀI YUGI OH,',
"category": 'games',
"date": '29/06/2021',
"time": '09:44 PM',
"link": '/la-bai-rong-trang-mat-xanh-tri-gia-nghin-do-trong-yu-gi-oh-duoc-mua-het-sach-trong-ngay-dau-ra-mat',
"zcomponent": 'page_20210629214434',
"filepath": './20210629214434-la-bai-rong-trang-mat-xanh-tri-gia-nghin-do-trong-yu-gi-oh-duoc-mua-het-sach-trong-ngay-dau-ra-mat.js'
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
  "Lá bài Rồng Trắng Mắt Xanh trị giá nghìn đô trong Yu-Gi-Oh! được mua hết sạch trong ngày đầu ra mắt";
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "29/06/2021 09:44 PM";
const description =
  "Điều này thêm một lần nữa chứng minh được sức hút của trò chơi cũng như tựa manga huyền thoại Yu-Gi-Oh!.";
const link =
  "la-bai-rong-trang-mat-xanh-tri-gia-nghin-do-trong-yu-gi-oh-duoc-mua-het-sach-trong-ngay-dau-ra-mat";
const tagparam = [
  "GAME YU-GI-OH!",
  "YU-GI-OH! MANGA",
  "YU-GI-OH! TRADING CARD GAME",
  "TRÒ CHƠI YU-GI-OH! TRADING CARD GAME",
  "VUA TRÒ CHƠI YUGI",
  "THẦN BÀI YUGI",
  "MUTO YUGI",
  "THẺ BÀI YUGI OH",
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

export default function page_20210629214434() {
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
                      Như chúng ta đã biết thì Yu-Gi-Oh! là manga nổi tiếng được
                      sáng tác bởi Takahashi Kazuki. Nó đã được chuyển thể thành
                      nhiều anime, video game và được biết là trò chơi trading
                      card game. Phần lớn bộ truyện tập trung vào trò chơi hư
                      cấu được gọi là Duel Monster trong đó các nhân vật sử dụng
                      các lá bài để "đấu" bằng các "quái thú" giả lập.{" "}
                      <strong>Yu-Gi-Oh! Trading Card Game</strong> là một trò
                      chơi ngoài đời thực dựa trên Duel Monster và cũng là một
                      trong những tựa game lâu đời và có sức hút đặc biệt với
                      các người chơi trên toàn thế giới.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/19/bo1-16241186006802089246700.jpg"
                      alt="1, GAME YU-GI-OH!,YU-GI-OH! MANGA,YU-GI-OH! TRADING CARD GAME,TRÒ CHƠI YU-GI-OH! TRADING CARD GAME,VUA TRÒ CHƠI YUGI,THẦN BÀI YUGI,MUTO YUGI,THẺ BÀI YUGI OH,"
                      note=""
                    />
                    <p>
                      Thời điểm hiện tại thì Yu-Gi-Oh đã ra mắt đến 7 phần phim
                      với cực kỳ nhiều lá bài mới được tạo ra. Đặc biệt trong số
                      đó thì Rồng Trắng Mắt vẫn là một trong những lá bài mang
                      tính biểu tượng của tựa <strong>game Yu-Gi-Oh!</strong> và
                      được các fan hâm mộ cũng như người chơi cực kỳ yêu thích
                      và khao khát sở hữu nó.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/19/bo2-1624118611078342406178.png"
                      alt="2, GAME YU-GI-OH!,YU-GI-OH! MANGA,YU-GI-OH! TRADING CARD GAME,TRÒ CHƠI YU-GI-OH! TRADING CARD GAME,VUA TRÒ CHƠI YUGI,THẦN BÀI YUGI,MUTO YUGI,THẺ BÀI YUGI OH,"
                      note=""
                    />
                    <p>
                      Để kỷ niệm series Yu-Gi-Oh! thì nhà sản xuất tựa{" "}
                      <strong>game Yu-Gi-Oh!</strong> Trading Card Game đã tung
                      ra lá bài Rồng Trắng Mắt Xanh. Mỗi lá bài Blue-Eyes White
                      Dragon dùng để kỷ niệm này sẽ được gia công đặc biệt sau
                      đó được đựng trong một hộp thủy tinh acrylic trong suốt,
                      giới hạn một nghìn bản và có giá lên đến 1.000 đô la Mỹ.
                      Dù có giá thành rất cao tuy nhiên chỉ đúng sau 1 ngày phát
                      hành, các lá bài này đã được mua hết sạch, thậm chí nhiều
                      fan phàn nàn về việc nhà sản xuất đã tung ra quá ít sản
                      phẩm. Tên chính thức của sản phẩm này là Thẻ Rồng Trắng
                      Mắt Xanh Bạch Kim và nhiều người cho rằng dù đắt nhưng thẻ
                      bài này rất đáng với số tiền mà họ bỏ ra.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Theo như những thông báo thì 1.000 tấm thẻ đã được mua hết
                      trong tích tắc chỉ sau khi được mở bán. Ngay sau đó một
                      tấm Platinum Blue-Eyes White Dragon Cards liền được rao
                      bán với giá 11.000 đô la Mỹ (tương đương với 250 triệu
                      Việt Nam Đồng) cũng đã được bán đấu giá. Theo dự kiến thì
                      tấm bài Platinum Blue-Eyes White Dragon Cards này sẽ có
                      giá trị rất cao, vượt xa con số ban đầu mà nhà sản xuất
                      đưa ra.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/19/bo3-1624118615356898663957.jpg"
                      alt="3, GAME YU-GI-OH!,YU-GI-OH! MANGA,YU-GI-OH! TRADING CARD GAME,TRÒ CHƠI YU-GI-OH! TRADING CARD GAME,VUA TRÒ CHƠI YUGI,THẦN BÀI YUGI,MUTO YUGI,THẺ BÀI YUGI OH,"
                      note=""
                    />
                    <p>
                      Các bạn là một fan của manga Yu-Gi-Oh! và yêu thích trò
                      chơi <strong>Yu-Gi-Oh! Trading Card Game</strong>? Các bạn
                      có muốn được sở hữu thẻ bài Rồng Trắng Mắt Xanh trị giá
                      tới nghìn đô la hay không? Hãy để lại ý kiến của mình về
                      vấn đề này nhé!
                    </p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
