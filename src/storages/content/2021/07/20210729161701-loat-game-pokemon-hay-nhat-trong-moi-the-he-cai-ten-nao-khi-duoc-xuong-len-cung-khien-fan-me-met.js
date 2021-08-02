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
"timestamp": '29/07/2021 04:17 PM',
"title": 'Loạt game Pokémon hay nhất trong mỗi thế hệ, cái tên nào khi được xướng lên cũng khiến fan mê mệt',
"description": 'Trải qua tám thế hệ trò chơi điện tử, người hâm mộ Pokémon đã có thể chơi một số tựa game tuyệt vời, nhưng đâu mới là cái tên hay nhất từ mỗi thế hệ?',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/10/photo-1-16258922973121614617511.jpg',
"alt": 'POKÉMON,POKÉMON GOLD,POKÉMON YELLOW,GAME POKÉMON,CÁC THẾ HỆ POKÉMON,POKÉMON EMERALD,POKÉMON PLATINUM,',
"category": 'games',
"date": '29/07/2021',
"time": '04:17 PM',
"link": '/loat-game-pokemon-hay-nhat-trong-moi-the-he-cai-ten-nao-khi-duoc-xuong-len-cung-khien-fan-me-met',
"zcomponent": 'page_20210729161701',
"filepath": './20210729161701-loat-game-pokemon-hay-nhat-trong-moi-the-he-cai-ten-nao-khi-duoc-xuong-len-cung-khien-fan-me-met.js'
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
  "Loạt game Pokémon hay nhất trong mỗi thế hệ, cái tên nào khi được xướng lên cũng khiến fan mê mệt";
const author = "MT";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:17 PM";
const description =
  "Trải qua tám thế hệ trò chơi điện tử, người hâm mộ Pokémon đã có thể chơi một số tựa game tuyệt vời, nhưng đâu mới là cái tên hay nhất từ mỗi thế hệ?";
const link =
  "loat-game-pokemon-hay-nhat-trong-moi-the-he-cai-ten-nao-khi-duoc-xuong-len-cung-khien-fan-me-met";
const tagparam = [
  "POKÉMON",
  "POKÉMON GOLD",
  "POKÉMON YELLOW",
  "GAME POKÉMON",
  "CÁC THẾ HỆ POKÉMON",
  "POKÉMON EMERALD",
  "POKÉMON PLATINUM",
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

export default function page_20210729161701() {
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
                    <strong>Pokémon</strong> kể từ khi được ra mắt cho đến nay
                    với tổng cộng 8 thế hệ đã trở thành một thương hiệu game
                    đình đám và vẫn giữ nguyên sức hút cho đến ngày hôm nay.
                    Hiện tại, không ít fan đang mong chờ về loạt game thuộc thế
                    hệ thứ 9.
                  </p>
                  <p>
                    Theo truyền thống, mỗi thế hệ game <strong>Pokémon</strong>{" "}
                    sẽ được Nintendo và Game Freak cho ra mắt từ hai đến ba phần
                    với những tên gọi khác nhau. Chính vì vậy mà ta hãy điểm qua
                    những ấn phẩm hay nhất, tính theo mỗi thế hệ nhé!
                  </p>
                  <h5>
                    8. Thế hệ 1: <strong>Pokémon</strong> Yellow
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/10/photo-1-16258922973121614617511.jpg"
                    alt="1, POKÉMON,POKÉMON GOLD,POKÉMON YELLOW,GAME POKÉMON,CÁC THẾ HỆ POKÉMON,POKÉMON EMERALD,POKÉMON PLATINUM,"
                    note=""
                  />
                  <p>
                    Năm 1998 đánh dấu thế hệ đầu tiên thuộc chuỗi game{" "}
                    <strong>Pokémon</strong> ra mắt, với Red and Blue. Ngay sau
                    đó, người chơi còn đón chào thêm cả phần game Yellow, với
                    điểm nhấn như Charizard có thể học cách bay lượn cũng như
                    Pikachu không thể tiến hóa như anime.
                  </p>
                  <p>
                    Sau khi ra mắt, <strong>Pokémon</strong> Yellow được đánh
                    giá là xuất sắc nhất thế hệ đầu tiên.
                  </p>
                  <h5>
                    7. Thế hệ 2: <strong>Pokémon</strong> Gold
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/10/photo-1-16258922984961637282480.jpg"
                    alt="2, POKÉMON,POKÉMON GOLD,POKÉMON YELLOW,GAME POKÉMON,CÁC THẾ HỆ POKÉMON,POKÉMON EMERALD,POKÉMON PLATINUM,"
                    note=""
                  />
                  <p>
                    Một năm sau đó, thế hệ 2 với <strong>Pokémon</strong> Gold
                    and Silver ra mắt người chơi toàn cầu. Trong đó, phần Gold
                    được đánh giá cao nhất, với Pokémon huyền thoại là Ho-Oh
                    nhận về nhiều lượt yêu thích hơn so với Lugia.
                  </p>
                  <h5>
                    6. Thế hệ 3: <strong>Pokémon</strong> Emerald
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/10/photo-2-1625892300517379600253.jpg"
                    alt="3, POKÉMON,POKÉMON GOLD,POKÉMON YELLOW,GAME POKÉMON,CÁC THẾ HỆ POKÉMON,POKÉMON EMERALD,POKÉMON PLATINUM,"
                    note=""
                  />
                  <p>
                    Tiếp đến sẽ là thế hệ 3, ra mắt với <strong>Pokémon</strong>{" "}
                    Ruby and Sapphire. Với nhiều người, tựa game đã đem đến hai
                    Pokémon huyền thoại được đánh giá rất tốt gồm Kyogre và
                    Groudon, so với các nhóm Aqua và Magma không quá nổi bật.
                    Tuy vậy, thế hệ này còn có một phiên bản tổng hòa những điểm
                    mạnh từ Ruby và Sapphire, <strong>Pokémon Emerald</strong>.
                  </p>
                  <p>
                    Với trọng tâm là Rayquaza, <strong>Pokémon</strong> được yêu
                    thích nhất thế hệ 3 cùng với điểm nhấn như Battle Frontier.
                    Thêm vào đó còn là nhiều Pokémon hơn so với hai ấn bản
                    trước.
                  </p>
                  <h5>
                    5. Thế hệ 4: <strong>Pokémon</strong> Platinum
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/10/photo-3-1625892298979761333606.jpg"
                    alt="4, POKÉMON,POKÉMON GOLD,POKÉMON YELLOW,GAME POKÉMON,CÁC THẾ HỆ POKÉMON,POKÉMON EMERALD,POKÉMON PLATINUM,"
                    note=""
                  />
                  <p>
                    Đối với nhiều người chơi, <strong>Pokémon</strong> Platinum
                    được đánh giá là phiên bản xuất sắc nhất thuộc thế hệ thứ 4.
                    Phần game có một cốt truyện hay, điểm nhấn Pokémon huyền
                    thoại Giratina và Distortion World. Kết hợp với đồ họa được
                    chăm chút tỉ mỉ, lên đến giới hạn cuối cùng cho phần cứng
                    của hệ máy Nintendo DS lúc bấy giờ. Các Pokémon như Gliar,
                    Electivire và Magmortar đều là những điểm nhấn thú vị.
                  </p>
                  <h5>
                    4. Thế hệ 5: <strong>Pokémon</strong> Black and White
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/10/photo-4-16258922985132134363497.jpg"
                    alt="5, POKÉMON,POKÉMON GOLD,POKÉMON YELLOW,GAME POKÉMON,CÁC THẾ HỆ POKÉMON,POKÉMON EMERALD,POKÉMON PLATINUM,"
                    note=""
                  />
                  <p>
                    Không ngoa khi nói, loạt game <strong>Pokémon</strong> đã
                    đánh dấu một bước đổi mới bằng thế hệ 5. Thế hệ 5 với cái
                    tên nổi bật là Black and White đã có nhiều cải tiến về mặt
                    đồ họa, gameplay và cốt truyện thú vị mặc dù gây ra không ít
                    tranh cãi giữa cộng đồng fan về chất lượng tổng thể.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Cả hai phần Black and White đều cân tài cân sức, khi Zekrom
                    để lại ấn tượng hơn Reshiram. Trong khi đó, bối cảnh bên
                    phần White như thành phố Opelucid tốt hơn người anh em của
                    mình.
                  </p>
                  <h5>
                    3. Thế hệ 6: <strong>Pokémon</strong> X
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/10/photo-5-1625892299507891560093.jpg"
                    alt="6, POKÉMON,POKÉMON GOLD,POKÉMON YELLOW,GAME POKÉMON,CÁC THẾ HỆ POKÉMON,POKÉMON EMERALD,POKÉMON PLATINUM,"
                    note=""
                  />
                  <p>
                    Đến với thế hệ 6, loạt <strong>Pokémon</strong> phát triển
                    thêm yếu tố về hệ thần tiên thông qua X and Y. Điều đặc biệt
                    là đội ngũ sản xuất lại quyết định chỉ đưa yếu tố thần tiên
                    vào đúng một trong hai Pokémon huyền thoại tại vùng Kalos.
                    Kẻ được chọn chính là Xerneas (X), Pokémon hệ thần tiên và
                    bóng tối.
                  </p>
                  <p>
                    Trong khi đó, Yveltal chỉ mang hệ bóng tối và bay lượn mà đã
                    quá đỗi bình thường với người chơi. Cả hai phần game đều có
                    ngoại cảnh và câu chuyện thú vị, nhưng{" "}
                    <strong>Pokémon</strong> X lại được đánh giá cao hơn cả.
                  </p>
                  <h5>
                    2. Thế hệ 7: <strong>Pokémon</strong> Ultra Sun
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/10/photo-6-16258923000131009045935.jpg"
                    alt="7, POKÉMON,POKÉMON GOLD,POKÉMON YELLOW,GAME POKÉMON,CÁC THẾ HỆ POKÉMON,POKÉMON EMERALD,POKÉMON PLATINUM,"
                    note=""
                  />
                  <p>
                    Khởi đầu bằng Sun and Moon, nhưng điểm nhấn trong thế hệ 7
                    lại là <strong>Pokémon</strong> Ultra Sun and Ultra Moon với
                    dàn Ultra Beast. Quả thực Ultra Beast là một chi tiết cực kỳ
                    mới mẽ, khi dàn Pokémon này du hành từ chiều không gian
                    khác, qua đó có thiết kế đặc biệt hơn những Pokémon còn lại.
                  </p>
                  <p>
                    Nhiều nhận định cho rằng phần Ultra Sun được đánh giá cao
                    hơn về cả nội dung lẫn <strong>Pokémon</strong> huyền thoại
                    như Solgaleo.
                  </p>
                  <h5>
                    1. Thế hệ 8: <strong>Pokémon</strong> Sword
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/10/photo-7-16258922985621751712069.jpg"
                    alt="8, POKÉMON,POKÉMON GOLD,POKÉMON YELLOW,GAME POKÉMON,CÁC THẾ HỆ POKÉMON,POKÉMON EMERALD,POKÉMON PLATINUM,"
                    note=""
                  />
                  <p>
                    Cái tên cuối cùng góp mặt trong danh sách lần này sẽ là thế
                    hệ 8 với <strong>Pokémon</strong> Sword and Shield. Tuy rất
                    được mong chờ và có những sáng tạo thú vị như là khu vực
                    hoang dã, nhưng lại không nhận về đánh giá tích cực vì ít có
                    sự thay đổi hoặc cải tiến so với những phiên bản tiền nhiệm.
                  </p>
                  <p>
                    Với fan, <strong>Pokémon</strong> Sword chính là phần game
                    hay nhất thế hệ 8, với điểm nhấn về sức mạnh bá đạo từ
                    Pokémon huyền thoại Zacian.
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
