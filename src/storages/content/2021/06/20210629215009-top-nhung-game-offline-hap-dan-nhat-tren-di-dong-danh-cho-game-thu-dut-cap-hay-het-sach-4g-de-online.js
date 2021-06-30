import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '29/06/2021 09:50 PM',
"title": 'Top những game offline hấp dẫn nhất trên di động dành cho game thủ “đứt cáp” hay hết sạch 4G để online',
"description": 'Nếu rơi vào các tình huống mất mạng, đứt cáp hoặc không còn dữ liệu 4G để online thì game thủ không nên bỏ qua các tựa game dưới đây.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/23/photo-1-1624465989685829439736.jpg',
"alt": 'TOP GAME MOBILE,TOP GAME,TOP GAME HAY NHẤT,TOP GAME MOBILE HAY NHẤT,LIMBO,GAME OFFLINE,TOP GAME OFFLINE,TOP GAME OFFLINE HAY NHẤT,GAME MOBILE OFFLINE,TOP GAME MOBILE OFFLINE,',
"category": 'games',
"date": '29/06/2021',
"time": '09:50 PM',
"link": '/top-nhung-game-offline-hap-dan-nhat-tren-di-dong-danh-cho-game-thu-dut-cap-hay-het-sach-4g-de-online',
"zcomponent": 'page_20210629215009',
"filepath": './20210629215009-top-nhung-game-offline-hap-dan-nhat-tren-di-dong-danh-cho-game-thu-dut-cap-hay-het-sach-4g-de-online.js'
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
  "Top những game offline hấp dẫn nhất trên di động dành cho game thủ “đứt cáp” hay hết sạch 4G để online";
const author = "Lee Chueng Hee";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 09:50 PM";
const description =
  "Nếu rơi vào các tình huống mất mạng, đứt cáp hoặc không còn dữ liệu 4G để online thì game thủ không nên bỏ qua các tựa game dưới đây.";
const link =
  "top-nhung-game-offline-hap-dan-nhat-tren-di-dong-danh-cho-game-thu-dut-cap-hay-het-sach-4g-de-online";
const tagparam = [
  "TOP GAME MOBILE",
  "TOP GAME",
  "TOP GAME HAY NHẤT",
  "TOP GAME MOBILE HAY NHẤT",
  "LIMBO",
  "GAME OFFLINE",
  "TOP GAME OFFLINE",
  "TOP GAME OFFLINE HAY NHẤT",
  "GAME MOBILE OFFLINE",
  "TOP GAME MOBILE OFFLINE",
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

export default function page_20210629215009() {
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
                  <h5>Alto's Odyssey</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/23/photo-1-1624465989685829439736.jpg"
                    alt="1, TOP GAME MOBILE,TOP GAME,TOP GAME HAY NHẤT,TOP GAME MOBILE HAY NHẤT,LIMBO,GAME OFFLINE,TOP GAME OFFLINE,TOP GAME OFFLINE HAY NHẤT,GAME MOBILE OFFLINE,TOP GAME MOBILE OFFLINE,"
                    note=""
                  />
                  <p>
                    Alto's Odyssey là trò chơi hoàn hảo nếu bạn muốn thư giãn.
                    Nó có nhạc nền tuyệt vời và đồ họa theo thiên hướng nhẹ
                    nhàng giúp người chơi thoải mái ngay cả khi chơi trong thời
                    gian dài. Cách điều khiển trong tựa game này cũng khá trực
                    quan vì chỉ cần một nút cũng đủ để khiến cho game thủ làm
                    chủ được mọi thứ.
                  </p>
                  <h5>GRID</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/23/photo-1-1624465995344433217548.png"
                    alt="2, TOP GAME MOBILE,TOP GAME,TOP GAME HAY NHẤT,TOP GAME MOBILE HAY NHẤT,LIMBO,GAME OFFLINE,TOP GAME OFFLINE,TOP GAME OFFLINE HAY NHẤT,GAME MOBILE OFFLINE,TOP GAME MOBILE OFFLINE,"
                    note=""
                  />
                  <p>
                    GRID Autosports ra mắt cách đây 2 năm và đã trở thành một
                    trong những game đua xe hay nhất dành cho nền tảng di động.
                    Thứ nhất, GRID là một trò chơi không có "quá trình mở khóa"
                    thông thường mà mọi tựa game khác đều làm. Gameplay chân
                    thật, cách điều khiển trực quan, đồ họa đẹp và hỗ trợ tay
                    cầm cùng nhiều nội dung (hơn 100 xe và đường đua)… khiến
                    GRID trở thành một trong số các sản phẩm đua xe hấp dẫn.
                  </p>
                  <h5>Smash Hit</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/23/photo-1-1624466000324810127581.jpg"
                    alt="3, TOP GAME MOBILE,TOP GAME,TOP GAME HAY NHẤT,TOP GAME MOBILE HAY NHẤT,LIMBO,GAME OFFLINE,TOP GAME OFFLINE,TOP GAME OFFLINE HAY NHẤT,GAME MOBILE OFFLINE,TOP GAME MOBILE OFFLINE,"
                    note=""
                  />
                  <p>
                    Trong Smash Hit, người chơi tham gia vào một cuộc hành trình
                    qua một chiều không gian khác, bắn những viên bi thép để phá
                    hủy mọi thứ trên đường đi của họ. Nghe thì thật là đơn giản,
                    nhưng Smash Hit là một trong số các tựa game có sức thuyết
                    phục cực kỳ lớn. Tựa game này đòi hỏi nhiều sự tập trung
                    cũng như khả năng phản xạ của game thủ để vừa có thể phá hủy
                    mọi thứ trên đường đi mà không bỏ sót bất cứ thứ gì.
                  </p>
                  <h5>The Room: Old Sins</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/23/photo-1-16244660072421200724694.jpg"
                    alt="4, TOP GAME MOBILE,TOP GAME,TOP GAME HAY NHẤT,TOP GAME MOBILE HAY NHẤT,LIMBO,GAME OFFLINE,TOP GAME OFFLINE,TOP GAME OFFLINE HAY NHẤT,GAME MOBILE OFFLINE,TOP GAME MOBILE OFFLINE,"
                    note=""
                  />
                  <p>
                    The Room: Old Sins là sự kết hợp giữa lối chơi khám phá,
                    tính chiến thuật cùng thể loại giải đố đầy thử thách dựa
                    trên một cốt truyện hấp dẫn. Người chơi sẽ bị cuốn hút vào
                    trong những câu chuyện bí ẩn, khám phá các địa điểm đáng sợ
                    với những bất ngờ rình rập để tìm ra sự bí ẩn chôn giấu.
                  </p>
                  <RelationNewsInPage category={category} />
                  <h5>Badland</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/23/photo-1-1624466013260777913374.jpg"
                    alt="5, TOP GAME MOBILE,TOP GAME,TOP GAME HAY NHẤT,TOP GAME MOBILE HAY NHẤT,LIMBO,GAME OFFLINE,TOP GAME OFFLINE,TOP GAME OFFLINE HAY NHẤT,GAME MOBILE OFFLINE,TOP GAME MOBILE OFFLINE,"
                    note=""
                  />
                  <p>
                    Badland là một game phiêu lưu hành động ấy bối cảnh trong
                    một khu rừng tuyệt đẹp với đầy đủ các loài động thực vật đặc
                    biệt. Người chơi sẽ điều khiển một trong những cư dân trong
                    rừng và thực hiện một cuộc phiêu lưu để tìm hiểu những gì đã
                    xảy ra với khu rừng.
                  </p>
                  <h5>Crashlands</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/23/photo-1-16244660233521665320908.jpg"
                    alt="6, TOP GAME MOBILE,TOP GAME,TOP GAME HAY NHẤT,TOP GAME MOBILE HAY NHẤT,LIMBO,GAME OFFLINE,TOP GAME OFFLINE,TOP GAME OFFLINE HAY NHẤT,GAME MOBILE OFFLINE,TOP GAME MOBILE OFFLINE,"
                    note=""
                  />
                  <p>
                    Crashlands là một game nhập vai sinh tồn. Trong trò chơi
                    này, bạn sẽ phải sống sót và khám phá một hành tinh xa lạ
                    sau khi hạ cánh xuống nó. Nhiệm vụ của bạn là bảo vệ một gói
                    hàng và chuyển nó đến vị trí mục tiêu. Mọi thứ trên hành
                    tinh đều xa lạ và người chơi phải tìm cách để tồn tại. Hệ
                    thống vũ khí và trang bị là điểm mạnh của trò chơi này.
                  </p>
                  <h5>Limbo</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/23/photo-1-16244660504602054656693.jpg"
                    alt="7, TOP GAME MOBILE,TOP GAME,TOP GAME HAY NHẤT,TOP GAME MOBILE HAY NHẤT,LIMBO,GAME OFFLINE,TOP GAME OFFLINE,TOP GAME OFFLINE HAY NHẤT,GAME MOBILE OFFLINE,TOP GAME MOBILE OFFLINE,"
                    note=""
                  />
                  <p>
                    <strong>Limbo</strong> là một tựa game giải đố phiêu lưu
                    được phát triển bởi studio Playdead. Đây là một tựa game
                    tương đối đặc biệt với hình ảnh chỉ có hai màu đen trắng. Hệ
                    thống vật lý trong game đặc biệt ảnh hưởng đến các nhân vật
                    người chơi và các đối tượng trong môi trường. Nhiệm vụ của
                    bạn là hướng dẫn một cậu bé vô danh vượt qua nhiều môi
                    trường và cạm bẫy nguy hiểm khác nhau để tìm kiếm em gái mất
                    tích của mình.
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
