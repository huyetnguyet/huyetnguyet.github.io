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
"title": 'Có thể cài Windows 11, game crack và cả Epic Games Store trên Steam Deck',
"description": 'Steam Deck sẽ tạo ra một cuộc cách mạng mới.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-1626587589951893523105.jpg',
"alt": 'MÁY CHƠI GAME,HỆ ĐIỀU HÀNH,HỆ MÁY CONSOLE,NINTENDO SWITCH,STEAM DECK,',
"category": 'tech',
"date": '29/07/2021',
"time": '04:06 PM',
"link": '/co-the-cai-windows-11-game-crack-va-ca-epic-games-store-tren-steam-deck',
"zcomponent": 'page_20210729160609',
"filepath": './20210729160609-co-the-cai-windows-11-game-crack-va-ca-epic-games-store-tren-steam-deck.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "tech";
const categoryLink = "/tech";
const title =
  "Có thể cài Windows 11, game crack và cả Epic Games Store trên Steam Deck";
const author = "TVG";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:06 PM";
const description = "Steam Deck sẽ tạo ra một cuộc cách mạng mới.";
const link =
  "co-the-cai-windows-11-game-crack-va-ca-epic-games-store-tren-steam-deck";
const tagparam = [
  "MÁY CHƠI GAME",
  "HỆ ĐIỀU HÀNH",
  "HỆ MÁY CONSOLE",
  "NINTENDO SWITCH",
  "STEAM DECK",
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

export default function page_20210729160609() {
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
                    Như chúng tôi đã đưa tin, sau rất nhiều tin đồn rò rỉ vào
                    tháng 5 vừa qua, Valve đã chính thức công bố{" "}
                    <strong>Steam Deck</strong>, một hệ{" "}
                    <strong>máy chơi game</strong> cầm tay sẽ ra mắt vào cuối
                    năm nay, hứa hẹn sẽ là đối thủ trực tiếp của hệ máy chơi
                    game cầm tay <strong>Nintendo Switch</strong> và Switch OLED
                    mới ra mắt.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-1626587589951893523105.jpg"
                    alt="1, MÁY CHƠI GAME,HỆ ĐIỀU HÀNH,HỆ MÁY CONSOLE,NINTENDO SWITCH,STEAM DECK,"
                    note=""
                  />
                  <p>
                    <strong>Steam Deck</strong> có kiểu dáng tương tự như của{" "}
                    <strong>Nintendo Switch</strong> nhưng lớn hơn một chút với
                    các tính năng của một PC Gaming hoàn chỉnh. Nó chạy một
                    phiên bản <strong>hệ điều hành</strong> mang tên SteamOS của
                    Valve, hoàn chỉnh với giao diện giống các{" "}
                    <strong>hệ máy console</strong> khác hiện nay và có thể truy
                    cập vào Steam một cách dễ dàng. Nó có thể xuất ra màn hình
                    rời cũng như cho phép người dùng cài bất kỳ ứng dụng bên thứ
                    3 nào.
                  </p>
                  <p>
                    Về phần cứng, <strong>Steam Deck</strong> có màn hình LCD 7
                    inch tần số quét 60HZ , độ phân giải 1280x800, trang bị CPU
                    tùy chỉnh của AMD với 4 nhân, 8 luồng, 8 đơn vị tính toán
                    RDNA 2 cho GPU và 16 GB của RAM LPDDR5. Thực tế mà nói, điều
                    đó làm cho nó mạnh hơn đáng kể so với Switch, cho phép nó
                    chạy các tựa game hiện tại một cách ấn tượng. Trong video
                    giới thiệu, Steam Deck có thể chơi được tựa game Jedi Fallen
                    Order ở mức thiết đặt High Settings.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-16265875909821062171152.jpg"
                    alt="2, MÁY CHƠI GAME,HỆ ĐIỀU HÀNH,HỆ MÁY CONSOLE,NINTENDO SWITCH,STEAM DECK,"
                    note=""
                  />
                  <p>
                    Nó có hệ thống nút điều khiển ở hai bên bao gồm hai nút di
                    chuyển chính, D-pad và bố cục bốn nút. Ngoài ra còn có hai
                    bàn di chuột - một ở hai bên của máy, dưới các ngón tay cái
                    - để tăng độ chính xác. <strong>Steam Deck</strong> có tám
                    trigger ở mặt sau của nó. Steam Deck sẽ chạy các tựa game
                    trong kho game của tài khoản Steam người dùng. Người chơi sẽ
                    chỉ cần đăng nhập vào tài khoản của họ, bạn bè và danh mục
                    của họ sẽ theo dõi họ trên thiết bị cầm tay. Steam Deck có
                    khả năng chạy các tựa game một cách mượt mà như Baldur's
                    Gate 3 , Crusader Kings 3 , Disco Elysium , Hades và Star
                    Wars Jedi: Fallen Order.
                  </p>
                  <p>
                    Trong một cuộc phỏng vấn với IGN , nhà phát triển Valve là
                    Pierre-Loup Griffais cho biết: "<strong>Steam Deck</strong>{" "}
                    có thể chạy khá nhiều thứ mà bạn có thể chạy trên PC thông
                    thường khi bạn có thể vừa chơi game cũng như làm việc, lượt
                    web và xem video trực tuyến."
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Trong quá trình trải nghiệm trên tay{" "}
                    <strong>Steam Deck</strong>, IGN cũng cho biết rằng game thủ
                    hoàn toàn có thể xóa SteamOS được cài đặt sẵn và thay thế nó
                    bằng Windows. Mặc dù điều đó có thể sẽ ảnh hưởng đến hiệu
                    suất chơi game của Steam Deck (do phiên bản SteamOS mới này
                    được tối ưu hóa cho phần cứng của Steam Deck), nhưng điều đó
                    có nghĩa là game thủ có thể cài đặt bất kỳ ứng dụng nào bạn
                    thường sử dụng trên PC (ngay cả việc cài game crack). Thậm
                    chí, game thủ có thể cài Epic Games Store (đối thủ của
                    Steam) để chơi các tựa game miễn phí mà nền tảng này tặng
                    hàng tuần.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/18/photo-2-16265875925061653043541.jpg"
                    alt="3, MÁY CHƠI GAME,HỆ ĐIỀU HÀNH,HỆ MÁY CONSOLE,NINTENDO SWITCH,STEAM DECK,"
                    note=""
                  />
                  <p>
                    <strong>Steam Deck</strong> sẽ có sẵn trong ba phiên bản
                    dung lượng và giá bán khác nahu với cùng kích thước và cấu
                    hình giống nhau. Phiên bản rẻ nhất có giá 399 USD (tương
                    đương 9 triệu VNĐ) với 64 GB dung lượng lưu trữ. Tiếp theo
                    là phiên bản 256GB dung lượng lưu trữ có giá 529 USD (hơn 12
                    triệu VNĐ) và phiên bản đắt nhất có giá 649 USB (gần 15
                    triệu VNĐ) với 512 GB dung lượng và màn hình chống lóa.
                    Steam Deck chưa có ngày phát hành chính thức nhưng nó hiện
                    đang được ấn định cho ra mắt vào kỳ nghỉ lễ năm 2021.
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
