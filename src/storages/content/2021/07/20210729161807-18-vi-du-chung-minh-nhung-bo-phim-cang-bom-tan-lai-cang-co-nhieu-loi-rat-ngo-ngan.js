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
"timestamp": '29/07/2021 04:18 PM',
"title": '18 ví dụ chứng minh những bộ phim càng bom tấn lại càng có nhiều lỗi rất ngớ ngẩn',
"description": 'Có rất nhiều bộ phim bom tấn quá hay, khiến người xem không còn tinh tế để nhận rằng chúng luôn có những hạt sạn.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-16264291359491681184130.jpg',
"alt": 'THE HOBBIT VÀ THE LORD OF THE RINGS,HARRY POTTER,HARRY POTTER VÀ HỘI PHƯỢNG HOÀNG,SPIDER-MAN,STAR TREK,TWILIGHT,PIRATES OF THE CARIBBEAN,',
"category": 'news',
"date": '29/07/2021',
"time": '04:18 PM',
"link": '/18-vi-du-chung-minh-nhung-bo-phim-cang-bom-tan-lai-cang-co-nhieu-loi-rat-ngo-ngan',
"zcomponent": 'page_20210729161807',
"filepath": './20210729161807-18-vi-du-chung-minh-nhung-bo-phim-cang-bom-tan-lai-cang-co-nhieu-loi-rat-ngo-ngan.js'
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
  "18 ví dụ chứng minh những bộ phim càng bom tấn lại càng có nhiều lỗi rất ngớ ngẩn";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:18 PM";
const description =
  "Có rất nhiều bộ phim bom tấn quá hay, khiến người xem không còn tinh tế để nhận rằng chúng luôn có những hạt sạn.";
const link =
  "18-vi-du-chung-minh-nhung-bo-phim-cang-bom-tan-lai-cang-co-nhieu-loi-rat-ngo-ngan";
const tagparam = [
  "THE HOBBIT VÀ THE LORD OF THE RINGS",
  "HARRY POTTER",
  "HARRY POTTER VÀ HỘI PHƯỢNG HOÀNG",
  "SPIDER-MAN",
  "STAR TREK",
  "TWILIGHT",
  "PIRATES OF THE CARIBBEAN",
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

export default function page_20210729161807() {
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
                  <p>
                    Những người yêu phim rất giỏi “soi” các lỗi trong các bộ
                    phim họ xem. Dưới đây là 18 lỗi mà bạn có thể chưa từng nhận
                    thấy trước đây, nhưng khi bạn nhìn ra, bạn sẽ thấy chúng là
                    những lỗi khó có thể chấp nhận trong những bộ phim nổi
                    tiếng.
                  </p>
                  <h5>The Hobbit và The Lord of the Rings</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-16264291359491681184130.jpg"
                    alt="1, THE HOBBIT VÀ THE LORD OF THE RINGS,HARRY POTTER,HARRY POTTER VÀ HỘI PHƯỢNG HOÀNG,SPIDER-MAN,STAR TREK,TWILIGHT,PIRATES OF THE CARIBBEAN,"
                    note=""
                  />
                  <p>
                    Trong The Hobbit, Legolas có đôi mắt xanh mơ màng, nhưng
                    trong bộ ba phim The Lord of the Rings chúng lại có màu đen.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-16264291875352087983309.jpg"
                    alt="2, THE HOBBIT VÀ THE LORD OF THE RINGS,HARRY POTTER,HARRY POTTER VÀ HỘI PHƯỢNG HOÀNG,SPIDER-MAN,STAR TREK,TWILIGHT,PIRATES OF THE CARIBBEAN,"
                    note=""
                  />
                  <p>
                    Trong bộ phim "Chúa tể của những chiếc nhẫn: Sự trở lại của
                    nhà vua", một trong những chiếc cầu thang đột nhiên biến mất
                    cùng với Frodo.
                  </p>
                  <h5>Harry Potter</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-16264292949851163021201.png"
                    alt="3, THE HOBBIT VÀ THE LORD OF THE RINGS,HARRY POTTER,HARRY POTTER VÀ HỘI PHƯỢNG HOÀNG,SPIDER-MAN,STAR TREK,TWILIGHT,PIRATES OF THE CARIBBEAN,"
                    note=""
                  />
                  <p>
                    Đây không phải là ma thuật, những sợi dây đốt trong các ngọn
                    nến vẫn có thể nhìn thấy rõ ràng.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-16264293417251077644191.jpg"
                    alt="4, THE HOBBIT VÀ THE LORD OF THE RINGS,HARRY POTTER,HARRY POTTER VÀ HỘI PHƯỢNG HOÀNG,SPIDER-MAN,STAR TREK,TWILIGHT,PIRATES OF THE CARIBBEAN,"
                    note=""
                  />
                  <p>
                    Bạn có thể thấy người quay phim trong cảnh này của "
                    <strong>Harry Potter</strong> và Phòng chứa bí mật".
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-16264294240021012593561.jpg"
                    alt="5, THE HOBBIT VÀ THE LORD OF THE RINGS,HARRY POTTER,HARRY POTTER VÀ HỘI PHƯỢNG HOÀNG,SPIDER-MAN,STAR TREK,TWILIGHT,PIRATES OF THE CARIBBEAN,"
                    note=""
                  />
                  <p>
                    Trong "<strong>Harry Potter</strong> và Hội Phượng hoàng",
                    chiếc áo phông của Harry được thay đổi khi ngủ từ chiếc cổ
                    tròn sang chiếc áo có cúc.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-16264294450861905146958.png"
                    alt="6, THE HOBBIT VÀ THE LORD OF THE RINGS,HARRY POTTER,HARRY POTTER VÀ HỘI PHƯỢNG HOÀNG,SPIDER-MAN,STAR TREK,TWILIGHT,PIRATES OF THE CARIBBEAN,"
                    note=""
                  />
                  <p>
                    Người ta luôn nói rằng Harry có đôi mắt xanh lục từ của mẹ
                    mình. Vậy tại sao chúng ta lại thấy cô ấy có đôi mắt nâu
                    trong "<strong>Harry Potter</strong> và Bảo bối Tử thần"?
                  </p>
                  <RelationNewsInPage category={category} />
                  <h5>Spider-Man</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-16264295763511039322531.jpg"
                    alt="7, THE HOBBIT VÀ THE LORD OF THE RINGS,HARRY POTTER,HARRY POTTER VÀ HỘI PHƯỢNG HOÀNG,SPIDER-MAN,STAR TREK,TWILIGHT,PIRATES OF THE CARIBBEAN,"
                    note=""
                  />
                  <p>
                    Trong cảnh này, Mary Jane trượt trên một ít nước trái cây bị
                    đổ, nhưng trong khung hình tiếp theo, vết đổ đã biến mất.
                    Chẳng nhẽ sàn nhà có thể tự làm sạch ư?
                  </p>
                  <h5>Star Trek</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-1626429654204305342943.jpg"
                    alt="8, THE HOBBIT VÀ THE LORD OF THE RINGS,HARRY POTTER,HARRY POTTER VÀ HỘI PHƯỢNG HOÀNG,SPIDER-MAN,STAR TREK,TWILIGHT,PIRATES OF THE CARIBBEAN,"
                    note=""
                  />
                  <p>
                    Đội trưởng Robau được nhìn thấy đeo huy hiệu Starfleet nhưng
                    ngay khi anh ta ngồi vào ghế của mình, huy hiệu kia biến mất
                    một cách kỳ diệu.
                  </p>
                  <h5>Twilight</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-16264296954061853975229.jpg"
                    alt="9, THE HOBBIT VÀ THE LORD OF THE RINGS,HARRY POTTER,HARRY POTTER VÀ HỘI PHƯỢNG HOÀNG,SPIDER-MAN,STAR TREK,TWILIGHT,PIRATES OF THE CARIBBEAN,"
                    note=""
                  />
                  <p>
                    Nếu để ý bạn sẽ thấy rằng trong kính chắn gió chiếc xe của
                    Bella có in hình phản chếu thiết bị camera ghi hình. Đây
                    cũng là lỗi khá phổ biến trong điện ảnh nói chung.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-1626429740589781010901.jpg"
                    alt="10, THE HOBBIT VÀ THE LORD OF THE RINGS,HARRY POTTER,HARRY POTTER VÀ HỘI PHƯỢNG HOÀNG,SPIDER-MAN,STAR TREK,TWILIGHT,PIRATES OF THE CARIBBEAN,"
                    note=""
                  />
                  <p>
                    Bạn có thể thấy rõ một sợi dây chạy dọc bên trong quần jean
                    của Bella.
                  </p>
                  <h5>Men in Black II</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-1626429788986660433190.jpg"
                    alt="11, THE HOBBIT VÀ THE LORD OF THE RINGS,HARRY POTTER,HARRY POTTER VÀ HỘI PHƯỢNG HOÀNG,SPIDER-MAN,STAR TREK,TWILIGHT,PIRATES OF THE CARIBBEAN,"
                    note=""
                  />
                  <p>Chúng ta có thể thấy rõ dây an toàn của Đặc vụ K ở đây.</p>
                  <h5>Pirates of the Caribbean</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-16264298225481713589944.jpg"
                    alt="12, THE HOBBIT VÀ THE LORD OF THE RINGS,HARRY POTTER,HARRY POTTER VÀ HỘI PHƯỢNG HOÀNG,SPIDER-MAN,STAR TREK,TWILIGHT,PIRATES OF THE CARIBBEAN,"
                    note=""
                  />
                  <p>
                    Một nhân vật mặc áo phông trắng vô tình bị lọt vào khung
                    hình.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/16/photo-1-16264302796391687206996.jpg"
                    alt="13, THE HOBBIT VÀ THE LORD OF THE RINGS,HARRY POTTER,HARRY POTTER VÀ HỘI PHƯỢNG HOÀNG,SPIDER-MAN,STAR TREK,TWILIGHT,PIRATES OF THE CARIBBEAN,"
                    note=""
                  />
                  <p>Thuyền trưởng Jack có vẻ là một fan cuồng của Adidas?</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-16264298617542024378470.jpg"
                    alt="14, THE HOBBIT VÀ THE LORD OF THE RINGS,HARRY POTTER,HARRY POTTER VÀ HỘI PHƯỢNG HOÀNG,SPIDER-MAN,STAR TREK,TWILIGHT,PIRATES OF THE CARIBBEAN,"
                    note=""
                  />
                  <p>
                    Trong <strong>Pirates of the Caribbean</strong>: The Curse
                    of the Black Pearl, màu sắc hàm răng của thuyền trưởng
                    Hector Barbossa đã thay đổi chỉ trong vài phút.
                  </p>
                  <h5>Gladiator</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-16264299106471467886174.jpg"
                    alt="15, THE HOBBIT VÀ THE LORD OF THE RINGS,HARRY POTTER,HARRY POTTER VÀ HỘI PHƯỢNG HOÀNG,SPIDER-MAN,STAR TREK,TWILIGHT,PIRATES OF THE CARIBBEAN,"
                    note=""
                  />
                  <p>
                    Gần như chúng ta đều biết rằng Gladiator được xây dựng dựa
                    trên một câu chuyện có thật trong lịch sử. Tuy nhiên, trong
                    cảnh của một trận chiến kinh thiên động địa, một trong những
                    cỗ xe bị lật và bạn có thể thấy một bình khí thời hiện đại
                    được gắn phía sau nó.
                  </p>
                  <h5>Avengers</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-1626429942435241916583.jpg"
                    alt="16, THE HOBBIT VÀ THE LORD OF THE RINGS,HARRY POTTER,HARRY POTTER VÀ HỘI PHƯỢNG HOÀNG,SPIDER-MAN,STAR TREK,TWILIGHT,PIRATES OF THE CARIBBEAN,"
                    note=""
                  />
                  <p>
                    Có vẻ như bộ đồ của Người Sắt có thể chữa lành những vết
                    thương nhỏ?
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/16/photo-1-1626430327374559955815.jpg"
                    alt="17, THE HOBBIT VÀ THE LORD OF THE RINGS,HARRY POTTER,HARRY POTTER VÀ HỘI PHƯỢNG HOÀNG,SPIDER-MAN,STAR TREK,TWILIGHT,PIRATES OF THE CARIBBEAN,"
                    note=""
                  />
                  <p>
                    Rõ ràng là chiếc xe của Thor đã bị hỏng nhưng tại sao nó
                    lạnh lành lặn trở lại?
                  </p>
                  <h5>Pretty Woman</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-16264299931682146257756.jpg"
                    alt="18, THE HOBBIT VÀ THE LORD OF THE RINGS,HARRY POTTER,HARRY POTTER VÀ HỘI PHƯỢNG HOÀNG,SPIDER-MAN,STAR TREK,TWILIGHT,PIRATES OF THE CARIBBEAN,"
                    note=""
                  />
                  <p>
                    Trong tập phim này, Julia Roberts đang ăn một chiếc bánh
                    sừng bò, ở khung hình tiếp theo nó bất ngờ biến thành một
                    chiếc bánh kếp.
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
