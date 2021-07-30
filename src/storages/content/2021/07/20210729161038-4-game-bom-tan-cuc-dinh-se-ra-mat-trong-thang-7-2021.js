import React from "react";
import "components/page.css";
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
"timestamp": '29/07/2021 04:10 PM',
"title": '4 game bom tấn cực đỉnh sẽ ra mắt trong tháng 7/2021',
"description": 'Tháng 7 này sẽ chào đón nhiều game bom tấn đỉnh cao.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/photo-1-16253820610221131739331.jpg',
"alt": 'GAME BOM TẤN,THỜI CHIẾN QUỐC,ĐẠI TƯỚNG QUÂN,LIÊN MINH HUYỀN THOẠI,CÔNG THỨC 1,',
"category": 'games',
"date": '29/07/2021',
"time": '04:10 PM',
"link": '/4-game-bom-tan-cuc-dinh-se-ra-mat-trong-thang-7-2021',
"zcomponent": 'page_20210729161038',
"filepath": './20210729161038-4-game-bom-tan-cuc-dinh-se-ra-mat-trong-thang-7-2021.js'
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
const title = "4 game bom tấn cực đỉnh sẽ ra mắt trong tháng 7/2021";
const author = "Real Madrid";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:10 PM";
const description = "Tháng 7 này sẽ chào đón nhiều game bom tấn đỉnh cao.";
const link = "4-game-bom-tan-cuc-dinh-se-ra-mat-trong-thang-7-2021";
const tagparam = [
  "GAME BOM TẤN",
  "THỜI CHIẾN QUỐC",
  "ĐẠI TƯỚNG QUÂN",
  "LIÊN MINH HUYỀN THOẠI",
  "CÔNG THỨC 1",
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

export default function page_20210729161038() {
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
                <div className="contentBody">
                  <h5>Samurai Warriors 5</h5>
                  <p>Hệ máy: PC, PS4, Xbox One, Switch</p>
                  <p>Phát hành: 27/7</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/photo-1-16253820610221131739331.jpg"
                    alt="1, GAME BOM TẤN,THỜI CHIẾN QUỐC,ĐẠI TƯỚNG QUÂN,LIÊN MINH HUYỀN THOẠI,CÔNG THỨC 1,"
                    note=""
                  />
                  <p>
                    Samurai Warriors 5 sẽ là một làn gió mới, mang tới hình ảnh
                    khác biệt cho dòng game chặt chém lâu đời của hãng. Trò chơi
                    bao gồm cả phần cốt truyện hoàn toàn mới, thiết kế lại nhân
                    vật từ đầu cũng như phong cách đồ họa chi tiết đẹp mắt hơn.
                    Tựa game đưa người chơi đến <strong>thời chiến quốc</strong>{" "}
                    ở Nhật Bản phong kiến với hai nhân vật trung tâm rực sáng là{" "}
                    <strong>đại tướng quân</strong> Nobunaga Oda và Mitsuhide
                    Akechi. Bối cảnh diễn ra ở giai đoạn sau của cuộc nội chiến
                    1467 đến năm 1477.
                  </p>
                  <p>
                    Samurai Warriors 5 chắc chắn vẫn mang tới những chiến trường
                    rộng lớn với số lượng quân địch lên đến hàng trăm, hàng
                    ngàn, tha hồ cho bạn càn quét, đuổi cùng giết tận. Qua
                    trailer đầu tiên, nhiều fan không khỏi thích thú khi thấy
                    phần hình ảnh của Samurai Warriors 5 thực sự ổn, mượt và
                    đẹp.
                  </p>
                  <h5>Pokémon Unite</h5>
                  <p>Hệ máy: Switch, Android, iOS</p>
                  <p>Phát hành: Cuối tháng 7</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/photo-1-16253821707411116800770.jpg"
                    alt="2, GAME BOM TẤN,THỜI CHIẾN QUỐC,ĐẠI TƯỚNG QUÂN,LIÊN MINH HUYỀN THOẠI,CÔNG THỨC 1,"
                    note=""
                  />
                  <p>
                    Với tên gọi Pokémon Unite, đây là sản phẩm của TiMi Studios,
                    một công ty con của Tencent, nơi từng sản xuất 2 tựa game
                    đình đám là Honor of Kings và Call of Duty: Mobile.
                  </p>
                  <p>
                    Với thể loại MOBA truyền thống, Pokémon Unite sẽ là đấu
                    trường nơi 10 người chơi sẽ so tài. Mỗi đội gồm 5 người, thi
                    đấu với nhau trên 1 bản đồ có 3 đường. Với những người đã
                    quen với <strong>Liên Minh Huyền Thoại</strong>, DOTA 2 trên
                    PC hay Liên Quân Mobile trên di động thì sẽ dễ để làm quen
                    với Pokémon Unite.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/photo-1-1625382171819697180329.jpg"
                    alt="3, GAME BOM TẤN,THỜI CHIẾN QUỐC,ĐẠI TƯỚNG QUÂN,LIÊN MINH HUYỀN THOẠI,CÔNG THỨC 1,"
                    note=""
                  />
                  <p>
                    Là một tựa game Pokemon, đương nhiên các nhân vật bạn được
                    chọn trong game sẽ là Pokemon. Từ Pikachu, Bulbasaur,
                    Squirtle, Charmander cho đến các Pokemon huyền thoại như
                    Zapdos, Articuno hay Moltres... tất cả sẽ đều có mặt trong
                    Pokémon Unite.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Theo dự kiến, Pokémon Unite sẽ phát hành hoàn toàn miễn phí
                    trên 2 hệ máy Nintendo Switch và di động. Không những thế,
                    game cũng hỗ trợ chơi chéo giữa 2 nền tảng này để cộng đồng
                    người chơi dễ dàng giao lưu, mở rộng.
                  </p>
                  <h5>Orcs Must Die! 3</h5>
                  <p>Hệ máy: PC, PS4, PS5,Xbox One, Xbox Series X/S</p>
                  <p>Phát hành: 23/7</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/photo-1-16253823106521298125109.jpg"
                    alt="4, GAME BOM TẤN,THỜI CHIẾN QUỐC,ĐẠI TƯỚNG QUÂN,LIÊN MINH HUYỀN THOẠI,CÔNG THỨC 1,"
                    note=""
                  />
                  <p>
                    Nếu bạn ghét những con orc vừa xấu vừa ác thì hãy tới Orcs
                    Must Die! 3 để tự tay tra tấn chúng nào. Dòng game hành
                    động, thủ thành sôi động đã quay trở lại, đẹp hơn, lớn hơn,
                    nhiều đồ chơi hơn. Trò chơi sắp phát hành ngày 23/7 tới cho
                    Xbox Series, PlayStation 4, Xbox One, và PC, PS5.
                  </p>
                  <p>
                    Orcs Must Die! 3 mở ra những màn chém giết orc ở một cấp độ
                    lớn hơn trước rất nhiều. Bạn có thể chơi đơn hoặc hợp tác
                    cùng người khác, sử dụng kho bẫy, vũ khí khổng lồ của mình
                    để ngăn những con orc ngu ngốc đang lao đến. Đặc biệt, chế
                    độ War Scenarios mới đã đưa đến những đội quân orc cực lớn
                    để thử sức bạn đấy.
                  </p>
                  <h5>F1 2021</h5>
                  <p>Hệ máy: PC, PS4, PS5, Xbox One, Xbox Series X/S</p>
                  <p>Phát hành: 16/7</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/4/photo-1-16253824393611938323042.jpg"
                    alt="5, GAME BOM TẤN,THỜI CHIẾN QUỐC,ĐẠI TƯỚNG QUÂN,LIÊN MINH HUYỀN THOẠI,CÔNG THỨC 1,"
                    note=""
                  />
                  <p>
                    F1 2021 là tựa game mô phỏng thể thao được phát hành vào
                    tháng 7/2021 bởi Feral Interactive và Codemasters. Đúng như
                    tên gọi của mình, trò chơi sẽ đưa bạn đến với thế giới siêu
                    tốc độ của những chiếc xe đưa <strong>Công thức 1</strong>.
                    Với nền tảng đồ họa tuyệt đẹp cũng như cơ chế gameplay chân
                    thực, F1 2021 sẽ đưa bạn vào nhịp đập của những giây phút
                    đua xe căng thẳng không kém gì thức tế.
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
