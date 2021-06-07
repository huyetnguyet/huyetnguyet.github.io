import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 07/06/2021 10:40 AM",
"title": Đấu Trường Chân Lý: Tộc Thây Ma và Kayle nhận những nerf vô cùng nặng nề từ Riot tại bản 11.12",
"description": Khả năng lao vào tuyến sau của Thây Ma Biến Dị gần như sẽ bị loại bỏ khỏi Đấu Trường Chân Lý.",
"src": https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-16227952697041628641001.jpg",
"alt": Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Riven, Kayle, Brand, Karma, Katarina, Leblanc, ",
"category": games",
"date": 07/06/2021",
"time": 10:40 AM",
"link": "/dau-truong-chan-ly-toc-thay-ma-va-kayle-nhan-nhung-nerf-vo-cung-nang-ne-tu-riot-tai-ban-1112",
"zcomponent": page_20210607104018",
"filepath": ./20210607104018-dau-truong-chan-ly-toc-thay-ma-va-kayle-nhan-nhung-nerf-vo-cung-nang-ne-tu-riot-tai-ban-1112.js"
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
  "Đấu Trường Chân Lý: Tộc Thây Ma và Kayle nhận những nerf vô cùng nặng nề từ Riot tại bản 11.12";
const author = "A Đồi";
const source = "Pháp luật và bạn đọc";
const timestamp = "07/06/2021 10:40 AM";
const description =
  "Khả năng lao vào tuyến sau của Thây Ma Biến Dị gần như sẽ bị loại bỏ khỏi Đấu Trường Chân Lý.";
const link =
  "dau-truong-chan-ly-toc-thay-ma-va-kayle-nhan-nhung-nerf-vo-cung-nang-ne-tu-riot-tai-ban-1112";
const tagparam = [
  "dau-truong-chan-ly",
  "riot-games",
  "riot",
  "game",
  "tin-game",
  "riven",
  "kayle",
  "brand",
  "karma",
  "katarina",
  "leblanc",
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

export default function page_20210607104018() {
  return (
    <>
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
                <div className="contentBody">
                  <p>
                    Tính tới thời điểm hiện tại của bản 11.11, tộc Thây Ma đang
                    tỏ ra áp đảo meta hoàn toàn khi cung cấp cho{" "}
                    <strong>game</strong> thủ quá nhiều lợi ích. Bạn có thể xoay
                    chuyển đội hình vô cùng dễ dàng với tộc Thây Ma và có thể
                    chơi nhiều loại chủ lực khác từ vật lý như Draven,{" "}
                    <strong>Riven</strong>, Sett cho tới phép thuật với Vel'Koz.
                    Hơn nữa, việc Thây Ma Biến Dị luôn luôn lao thẳng vào tuyến
                    sau của team địch khiến tộc Thây Ma có thể giải quyết chủ
                    lực đối thủ một cách quá dễ dàng.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-16227952697041628641001.jpg"
                    alt="Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Riven, Kayle, Brand, Karma, Katarina, Leblanc, "
                    note=""
                  />
                  <p>
                    Vì vậy mà ở phiên bản 11.12 sắp tới,{" "}
                    <strong>
                      <strong>Riot</strong> <strong>Game</strong>s
                    </strong>{" "}
                    đã đưa ra những chỉnh sửa vô cùng quan trọng tới sức mạnh
                    của Thây Ma Biến Dị. Đặc biệt nhất chính là việc Thây Ma
                    Biến Dị giờ đây sẽ dừng lại khi hất tung được 2 tướng địch
                    thay vì lao thẳng vào tuyến sau như trước. Bên cạnh đó thì{" "}
                    <strong>Kayle</strong> cũng nhận một đợt nerf tương đối
                    nặng. Những thông tin chính thức được công bố bởi Giám đốc
                    dự án Đấu Trường Chân Lý - Riot Mortdog:
                  </p>
                  <h4>Thay đổi về hệ thống</h4>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/1-1623031139637136565535.png"
                    alt="Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Riven, Kayle, Brand, Karma, Katarina, Leblanc, "
                    note=""
                  />
                  <p>
                    Tỷ lệ xuất hiện của cửa hàng tại cấp độ 4 thay đổi từ
                    55/30/15/0/0% thành 50/30/20/0/0%. Tỷ lệ xuất hiện của cửa
                    hàng tại cấp độ 5 thay đổi từ 45/33/20/2/0% thành
                    40/33/25/2/0%.
                  </p>
                  <p>
                    Hòm thưởng: Các món đồ như Bùa Rèn Ma Thuật, Nam Châm Ma
                    Thuật giờ đây có thể rơi ra từ hòm thưởng màu Xanh. Lượng
                    vàng, tướng mà bạn nhận được từ những hòm thưởng đó vẫn
                    không đổi.
                  </p>
                  <p>
                    Sát thương chí mạng cơ bản của tất cả các vị tướng giảm từ
                    150% xuống 130%.
                  </p>
                  <h4>Mốc tộc - hệ mới</h4>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/2-162303134314545938274.png"
                    alt="Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Riven, Kayle, Brand, Karma, Katarina, Leblanc, "
                    note=""
                  />
                  <p>
                    6 Đồ Long: Tăng 140% sát thương kỹ năng cho các tướng Đồ
                    Long và 100% sát thương kỹ năng cho đồng minh.
                  </p>
                  <p>4 Thiết Giáp: Tăng 180 giáp cho cả đội hình.</p>
                  <p>
                    6 Tái Tạo: Các tướng Tái Tạo sẽ hồi 10% máu/năng lượng tối
                    đa mỗi giây.
                  </p>
                  <p>
                    4 Tà Thần: Các tướng Tà Thần khi hồi sinh sẽ nhận được 100%
                    máu tối đa.
                  </p>
                  <p>
                    6 Ma Pháp Sư: Tăng 80% sát thương kỹ năng và nhận thêm 8%
                    sát thương kỹ năng mỗi khi dùng chiêu.
                  </p>
                  <p>
                    9 Chiến Binh: Tướng Chiến Binh sẽ nhận khiên tương đương với
                    60% máu tối đa và 10 SMCK mỗi giây.
                  </p>
                  <h4>Thay đổi về tộc - hệ</h4>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/3-16230316123271921286464.png"
                    alt="Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Riven, Kayle, Brand, Karma, Katarina, Leblanc, "
                    note=""
                  />
                  <p>
                    Thây Ma: Thây Ma Biến Dị giờ đây sẽ dừng lao lên phía trước
                    sau khi hất tung được 2 tướng của đối thủ. Thây Ma Biến Dị
                    khi dùng chiêu sẽ loại bỏ hiệu ứng giảm tốc độ đánh, SMCK.
                    Lượng giáp/kháng phép của Thây Ma Biến Dị tăng từ 40/50/60
                    thành 40/65/75. SMCK cơ bản giảm từ 100/160/220 xuống
                    90/150/200. SMCK cộng thêm giảm từ 10/16/22 xuống 9/15/20.
                  </p>
                  <p>
                    Thần Sứ: Lượng sát thương cộng thêm tăng từ 10% lên 15%.
                  </p>
                  <p>
                    Thiên Thần: Lượng giáp/kháng phép và sát thương kỹ năng cộng
                    thêm tăng từ 30/50/70 lên 30/55/80.
                  </p>
                  <p>
                    Chiến Binh: Lượng khiên ở mốc 3 tướng tăng từ 20% lên 25%
                    máu tối đa.
                  </p>
                  <h4>Thay đổi về tướng</h4>
                  <h4>Tướng 1 vàng</h4>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/4-16230319793681094699398.png"
                    alt="Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Riven, Kayle, Brand, Karma, Katarina, Leblanc, "
                    note=""
                  />
                  <p>
                    Lissandra: Sát thương kỹ năng lên mục tiêu chính tăng từ
                    250/300/400 lên 280/330/450. Sát thương lan ở lần nổ thứ hai
                    tăng từ 125/150/200 lên 140/165/225.
                  </p>
                  <p>
                    Vayne: Sát thương kỹ năng tăng từ 65/90/140 lên 70/100/140.
                  </p>
                  <p>Vladimir: Năng lượng tối đa giảm từ 85 xuống 80.</p>
                  <p>Ziggs: Máu cơ bản giảm từ 500 xuống 450.</p>
                  <h4>Tướng 2 vàng</h4>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/5-1623031979441207403306.png"
                    alt="Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Riven, Kayle, Brand, Karma, Katarina, Leblanc, "
                    note=""
                  />
                  <p>
                    <strong>Brand</strong>: Thời gian khóa năng lượng tăng từ 1
                    giây lên 1,5 giây.
                  </p>
                  <p>
                    Hecarim: Sát thương kỹ năng giảm từ 450/600/1200 xuống
                    275/350/700. Khả năng hồi phục giảm từ 300/400/800 xuống
                    275/350/700.
                  </p>
                  <p>
                    <strong>LeBlanc</strong>: Sát thương kỹ năng giảm từ
                    200/250/500 xuống 100/150/250. Thời gian làm choáng thay đổi
                    từ 2 giây ở mọi cấp thành 1,5/2/2,5 giây. Máu khởi điểm tăng
                    từ 550 lên 600.
                  </p>
                  <p>
                    Nautilus: SMCK cơ bản tăng từ 65 lên 80. Sát thương kỹ năng
                    tăng từ 150/250/700 lên 200/300/750.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/6-16230319794611231566270.png"
                    alt="Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Riven, Kayle, Brand, Karma, Katarina, Leblanc, "
                    note=""
                  />
                  <p>Sejuani: SMCK cơ bản tăng từ 45 lên 65.</p>
                  <p>Thresh: SMCK cơ bản tăng từ 55 lên 75.</p>
                  <h4>Tướng 3 vàng</h4>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/7-16230319794651462564471.png"
                    alt="Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Riven, Kayle, Brand, Karma, Katarina, Leblanc, "
                    note=""
                  />
                  <p>
                    <strong>Katarina</strong>: Sát thương của lần tung dao ở cấp
                    độ 3 sao giảm từ 450 xuống 420. Sát thương của lần dịch
                    chuyển ở cấp độ 3 sao giảm từ 225 xuống 210.
                  </p>
                  <p>Nunu & Willump: Năng lượng tối đa tăng từ 70 lên 75.</p>
                  <p>
                    <strong>Riven</strong>: SMCK gia tăng khi dùng chiêu ở cấp
                    độ 3 sao giảm từ 150% xuống 130%.
                  </p>
                  <p>
                    Zyra: Năng lượng thay đổi từ 60/120 thành 40/100. Sát thương
                    kỹ năng giảm từ 250/350/700 xuống 200/325/700.
                  </p>
                  <h4>Tướng 4 vàng</h4>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/8-16230319795181714338150.png"
                    alt="Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Riven, Kayle, Brand, Karma, Katarina, Leblanc, "
                    note=""
                  />
                  <p>
                    Jax: Tốc độ đánh cộng thêm khi dùng chiêu tăng từ 20/25/60%
                    lên 30/35/100%.
                  </p>
                  <p>
                    <strong>Karma</strong>: Thời gian khóa năng lượng tăng từ
                    1,25 lên 1,5 giây. Năng lượng tối đa giảm từ 60 xuống 50.
                    Năng lượng được giảm mỗi khi dùng chiêu giảm từ 20/20/40
                    xuống 15/15/30. Sát thương kỹ năng tăng từ 200/250/600 lên
                    240/300/700.
                  </p>
                  <h4>Tướng 5 vàng</h4>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/9-1623031979593939670349.png"
                    alt="Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Riven, Kayle, Brand, Karma, Katarina, Leblanc, "
                    note=""
                  />
                  <p>
                    <strong>Kayle</strong>: Số đòn đánh để nhận được 1 giây miễn
                    nhiễm sát thương tăng từ 7 lên 10.
                  </p>
                  <h4>Thay đổi về trang bị</h4>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/10-1623031979596199669945.png"
                    alt="Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Riven, Kayle, Brand, Karma, Katarina, Leblanc, "
                    note=""
                  />
                  <p>
                    Quyền Trượng Đại Thiên Thần: Lượng sát thương kỹ năng nhận
                    thêm dựa theo mana tăng từ 40% lên 45%.
                  </p>
                  <p>
                    Quyền Trượng Đại Ác Ma: Lượng máu hồi phục dựa theo mana
                    tăng từ 350% lên 400%.
                  </p>
                  <p>Huyết Kiếm: Hút máu giảm từ 40% xuống 33%.</p>
                  <p>
                    Hắc Huyết Kiếm: Sát thương tự gây lên bản thân tướng giảm từ
                    33% xuống 25% máu tối đa.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/11-1623031979686644093001.png"
                    alt="Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Riven, Kayle, Brand, Karma, Katarina, Leblanc, "
                    note=""
                  />
                  <p>
                    Nắm Đấm Công Lý: Lượng SMCK và sát thương kỹ năng nhận thêm
                    tăng từ 40 lên 45.
                  </p>
                  <p>Nỏ Sét: Khả năng trừ kháng phép tăng từ 40% lên 50%.</p>
                  <p>
                    Găng Liều Lĩnh: Giờ đây sẽ gây sát thương tương đương với
                    năng lượng tối đa nhân với cấp độ sao lên tướng sở hữu mỗi
                    khi tung chiêu.
                  </p>
                  <p>
                    Vuốt Bẫy Thù Hận: Đổi tên thành Banshee's Claw (tạm dịch là
                    Móng Vuốt Oan Hồn).
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
