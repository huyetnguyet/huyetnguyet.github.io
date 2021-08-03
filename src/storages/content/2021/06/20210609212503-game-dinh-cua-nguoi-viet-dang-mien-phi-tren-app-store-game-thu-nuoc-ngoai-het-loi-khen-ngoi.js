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
"timestamp": '09/06/2021 09:25 PM',
"title": 'Khó tin, game đỉnh của người Việt nhận mưa lời khen từ quốc tế, "thèm khát" 1 lần game mở miễn phí như này',
"description": 'Có những tựa game mà ngay cả cộng đồng game thủ cũng ít người biết được đó là sản phẩm do người Việt làm ra.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/10/-1623296014399440917318.jpg',
"alt": 'Shadow Of Death, App Store, Game Mien Phi, Tin Tuc Game, ',
"category": 'games',
"date": '09/06/2021',
"time": '09:25 PM',
"link": '/game-dinh-cua-nguoi-viet-dang-mien-phi-tren-app-store-game-thu-nuoc-ngoai-het-loi-khen-ngoi',
"zcomponent": 'page_20210609212503',
"filepath": './20210609212503-game-dinh-cua-nguoi-viet-dang-mien-phi-tren-app-store-game-thu-nuoc-ngoai-het-loi-khen-ngoi.js'
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
  'Khó tin, game đỉnh của người Việt nhận mưa lời khen từ quốc tế, "thèm khát" 1 lần game mở miễn phí như này';
const author = "Lee Chueng Hee";
const source = "Pháp luật và bạn đọc";
const timestamp = "09/06/2021 09:25 PM";
const description =
  "Có những tựa game mà ngay cả cộng đồng game thủ cũng ít người biết được đó là sản phẩm do người Việt làm ra.";
const link =
  "game-dinh-cua-nguoi-viet-dang-mien-phi-tren-app-store-game-thu-nuoc-ngoai-het-loi-khen-ngoi";
const tagparam = [
  "shadow-of-death",
  "app-store",
  "game-mien-phi",
  "tin-tuc-game",
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

export default function page_20210609212503() {
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
                      Có lẽ không nhiều người biết đến cái tên{" "}
                      <strong>Shadow of Death</strong>, một tựa game thuộc thể
                      loại nhập vai hành động ARPG trên nền tảng di động. Tựa
                      game này vốn dĩ được phát triển bởi người Việt và được
                      đăng tải lên <strong>App Store</strong> cũng như “đánh”
                      vào thị trường nước ngoài nhiều hơn trong nước. Đó cũng
                      chính là lý do mà không nhiều game thủ Việt biết đến cái
                      tên này.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Thực chất, đây cũng là một trong những hướng đi được nhiều
                      studio game trong nước hướng đến. Họ phát triển các sản
                      phẩm phù hợp với thị hiếu của game thủ nước ngoài và tấn
                      công sang các thị trường này, nơi mà người chơi sẵn sàng
                      bỏ ra một khoản tiền để mua game, miễn là sản phẩm đó có
                      chất lượng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/10/-1623296014399440917318.jpg"
                      alt="Shadow Of Death, App Store, Game Mien Phi, Tin Tuc Game, "
                      note=""
                    />
                    <p>
                      Thú vị là, <strong>Shadow of Death</strong> chính là tựa
                      game nhận được nhiều đánh giá tích cực từ cộng đồng game
                      thủ nước ngoài với chất lượng đồ họa khá đẹp mắt và đặc
                      biệt nhất phải kể đến hiệu ứng ánh sáng được sử dụng trong
                      tựa game này. Từ các kỹ năng đánh thường đến chiêu thức
                      đều thỏa mãn được điểm nhìn của người chơi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/10/-1623296023706667692302.jpg"
                      alt="Shadow Of Death, App Store, Game Mien Phi, Tin Tuc Game, "
                      note=""
                    />
                    <p>
                      Game thủ nước ngoài vốn đặc biệt thích thú với các trò
                      chơi nhập vai hành động theo kiểu Hack n Slash và đó chính
                      là lý do mà họ sẵn sàng bỏ ra một khoản tiền khoảng 2$ để
                      tải về tựa game này. Tuy nhiên thì như đã nói ở trên,{" "}
                      <strong>Shadow of Death</strong> không có mặt trên{" "}
                      <strong>App Store</strong> Việt và đó là lý do giải thích
                      vì sao mà dù đang được miễn phí giới hạn, game thủ Việt
                      cũng không thể tìm thấy sản phẩm này trên App Store.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/10/-16232960319511271272036.jpg"
                      alt="Shadow Of Death, App Store, Game Mien Phi, Tin Tuc Game, "
                      note=""
                    />
                    <p>
                      Nếu muốn tải về <strong>Shadow of Death</strong> thì có lẽ
                      người chơi phải chuyển đổi khu vực của{" "}
                      <strong>App Store</strong> sang một thị trường khác. Tuy
                      khá mất công nhưng nếu là một fan của dòng game nhập vai
                      hành động thì có lẽ công sức này cũng không phí hoài một
                      chút nào bởi như đã nói ở trên, Shadow of Death là một sản
                      phẩm chất lượng và nhận được nhiều đánh giá tích cực của
                      cộng đồng game thủ nước ngoài.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/10/-1623296038252885526772.jpg"
                      alt="Shadow Of Death, App Store, Game Mien Phi, Tin Tuc Game, "
                      note=""
                    />
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
