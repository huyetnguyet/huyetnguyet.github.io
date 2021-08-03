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
"timestamp": '29/07/2021 04:06 PM',
"title": 'Steam Deck: 10 triệu mua máy cầm tay chiến mọi loại game bom tấn, liệu anh em có tin vào sản phẩm thần kì này không?',
"description": 'Mới đây Valve đã nhá hàng sản phẩm máy chơi game “cây nhà lá vườn” do chính công ty sản xuất, đáp ứng mọi nhu cầu của game thủ.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/photo-1-16264933757941782750761.jpg',
"alt": 'GAME,GAME THỦ,TIN TỨC GAME,STEAM,',
"category": 'games',
"date": '29/07/2021',
"time": '04:06 PM',
"link": '/steam-deck-10-trieu-mua-may-cam-tay-chien-moi-loai-game-bom-tan-lieu-anh-em-co-tin-vao-san-pham-than-ki-nay-khong',
"zcomponent": 'page_20210729160628',
"filepath": './20210729160628-steam-deck-10-trieu-mua-may-cam-tay-chien-moi-loai-game-bom-tan-lieu-anh-em-co-tin-vao-san-pham-than-ki-nay-khong.js'
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
  "Steam Deck: 10 triệu mua máy cầm tay chiến mọi loại game bom tấn, liệu anh em có tin vào sản phẩm thần kì này không?";
const author = "LinhxD";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:06 PM";
const description =
  "Mới đây Valve đã nhá hàng sản phẩm máy chơi game “cây nhà lá vườn” do chính công ty sản xuất, đáp ứng mọi nhu cầu của game thủ.";
const link =
  "steam-deck-10-trieu-mua-may-cam-tay-chien-moi-loai-game-bom-tan-lieu-anh-em-co-tin-vao-san-pham-than-ki-nay-khong";
const tagparam = ["GAME", "GAME THỦ", "TIN TỨC GAME", "STEAM"];
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

export default function page_20210729160628() {
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
                      Sau nhiều thời gian đồn đoán kéo dài từ tháng 5 tới bây
                      giờ, Valve đã chính thức công bố tới các{" "}
                      <strong>game</strong> thủ một sản phẩm máy console cầm tay
                      đáng để kỳ vọng có tên <strong>Steam</strong> Deck. Lịch
                      ra mắt của sản phẩm này là cuối năm 2021, song những thông
                      tin trước mắt đang làm <strong>game thủ</strong> tỏ ra vô
                      cùng thích thú và quan tâm.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/photo-1-16264933757941782750761.jpg"
                      alt="1, GAME,GAME THỦ,TIN TỨC GAME,STEAM,"
                      note=""
                    />
                    <p>
                      Theo như Valve giới thiệu, <strong>Steam</strong> Deck như
                      là một chiếc PC cầm tay, cho phép bạn chơi mọi loại{" "}
                      <strong>game</strong> trên kho Steam cũng như nhiều tựa
                      game khác ở mọi lúc mọi nơi. Chúng ta cùng xem cấu hình
                      chiếc máy này có gì mà Valve lại tự tin đến thế nhé.
                    </p>
                    <p>
                      <strong>Steam</strong> Deck sử dụng hệ điều hành SteamOS
                      do Valve phát triển. Hệ điều hành này cho phép người chơi
                      thoải mái cài đặt ứng dụng từ bên thứ ba. Nghĩa là{" "}
                      <strong>game</strong> thủ có thể xoá hẳn SteamOS và cài
                      đặt hệ điều hành Windows hay những tựa game khác thay vì
                      khoá như hệ máy console/handheld của Sony, Microsoft,
                      Nintendo.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/photo-1-1626493378257900256315.jpg"
                      alt="2, GAME,GAME THỦ,TIN TỨC GAME,STEAM,"
                      note=""
                    />
                    <p>
                      Về cấu hình, chiếc máy này sở hữu màn hình LCD cảm ứng đa
                      điểm 7inch, độ phân giải 1280x800 và tần số quét là 60hz.
                      Chip của AMD, 16GB RAM và cuối cùng là lượng pin khủng lên
                      đến 40Wh.
                    </p>
                    <p>
                      So với các hệ máy cầm tay có tiếng như Nintendo hay Sony
                      Playstation Portable, thì <strong>Steam</strong> Deck có
                      cấu hình vượt trội hơn hẳn. Chiếc máy này tự tin chiến
                      được một số những con <strong>game</strong> AAA hiện giờ
                      nhưng với cấu hình vừa đủ.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Điểm nội trội thứ hai phải kể đến việc mở khoá hoàn toàn
                      cho <strong>game</strong> thủ để có thể chơi các tựa game
                      bên ngoài <strong>Steam</strong>. Không chỉ Steam, người
                      chơi có thể tải game từ những cửa hàng khác như Epic Games
                      Store, Uplay,…
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/photo-2-1626493377742190563468.jpg"
                      alt="3, GAME,GAME THỦ,TIN TỨC GAME,STEAM,"
                      note=""
                    />
                    <p>
                      Với những công năng của một chiếc PC di động như vậy bạn
                      chỉ cần bỏ ra 399USD (9.1 triệu vnđ) cho chiếc{" "}
                      <strong>Steam</strong> Deck cơ bản 64GB. Ngoài ra còn bản
                      256GB và 512GB với nhiều hiệu năng cao cấp hơn nữa nếu{" "}
                      <strong>game</strong> thủ muốn bỏ thêm tiền để được trải
                      nghiệm.
                    </p>
                    <p>
                      Trong tương lai, <strong>Steam</strong> Deck được dự báo
                      sẽ có xuất phát điểm khá cao và có khả năng soán ngôi
                      nhiều thế hệ máy đã dày dặn kinh nghiệm trước đó.
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
