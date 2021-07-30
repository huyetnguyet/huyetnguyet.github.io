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
"timestamp": '30/07/2021 12:19 PM',
"title": 'Axie Infinity coin giảm giá chóng mặt, game thủ Việt hoang mang lo lắng',
"description": 'Axie Infinity coin đã bốc hơi 21% giá trị trong 2 ngày qua.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/untitled-1627574937832795816169.png',
"alt": 'AXIE INFINITY,AXS,AXS COIN,GAME THỦ VIỆT,GIỚI CÔNG NGHỆ,CÔNG NGHỆ VIỆT NAM,TIỀN ẢO,CRYPTO,',
"category": 'news',
"date": '30/07/2021',
"time": '12:19 PM',
"link": '/axie-infinity-coin-giam-gia-chong-mat-game-thu-viet-hoang-mang-lo-lang',
"zcomponent": 'page_20210730121904',
"filepath": './20210730121904-axie-infinity-coin-giam-gia-chong-mat-game-thu-viet-hoang-mang-lo-lang.js'
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
  "Axie Infinity coin giảm giá chóng mặt, game thủ Việt hoang mang lo lắng";
const author = "Real Madrid";
const source = "Pháp luật và bạn đọc";
const timestamp = "30/07/2021 12:19 PM";
const description =
  "Axie Infinity coin đã bốc hơi 21% giá trị trong 2 ngày qua.";
const link =
  "axie-infinity-coin-giam-gia-chong-mat-game-thu-viet-hoang-mang-lo-lang";
const tagparam = [
  "AXIE INFINITY",
  "AXS",
  "AXS COIN",
  "GAME THỦ VIỆT",
  "GIỚI CÔNG NGHỆ",
  "CÔNG NGHỆ VIỆT NAM",
  "TIỀN ẢO",
  "CRYPTO",
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

export default function page_20210730121904() {
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
                    Trong những ngày vừa qua, <strong>Axie Infinity</strong> là
                    cái tên hot nhất của làng game nói riêng và{" "}
                    <strong>giới công nghệ</strong> Việt Nam nói chúng. Với giá
                    trị vốn hóa lên đến hơn 2,8 tỷ USD, đây chính là tựa game
                    NFT đắt nhất mọi thời đại.
                  </p>
                  <p>
                    Sở dĩ <strong>Axie Infinity</strong> được định giá cao đến
                    vậy là do đồng token <strong>AXS</strong> (một loại tiền tệ
                    được sử dụng trong game) đang tăng giá vũ bão trong thời
                    gian qua. Theo dữ liệu từ coinmarketcap, AXS đang là một
                    trong những <strong>Crypto</strong> có chỉ số tăng trưởng
                    mạnh nhất thế giới ở thời điểm hiện tại.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-1-16275751001531216140909.jpg"
                    alt="3, AXIE INFINITY,AXS,AXS COIN,GAME THỦ VIỆT,GIỚI CÔNG NGHỆ,CÔNG NGHỆ VIỆT NAM,TIỀN ẢO,CRYPTO,"
                    note=""
                  />
                  <p>
                    Trong cơn sốt mang tên <strong>Axie Infinity</strong>, rất
                    nhiều <strong>game thủ Việt</strong> đã tìm hiểu và đầu tư
                    lớn vào tựa game này. Để có thể tham gia, game thủ sẽ phải
                    bỏ ít nhất là 800$ - 1000$ (hơn 20 triệu VNĐ) để mua 3 thú
                    cưng đầu tiên. Con số này có thể lên tới cả ngàn USD nếu bạn
                    muốn có một đội hình mạnh hơn, xịn hơn. Giá thú cưng cao hay
                    thấp sẽ phụ thuộc vào giá trị của đồng <strong>AXS</strong>{" "}
                    trên thị trường <strong>crypto</strong>. Trong bối cảnh AXS
                    tăng trưởng vũ bão như thời gian qua, những người chơi vào
                    sau đã phải bỏ ra số tiền cực lớn để tham gia trò chơi này.
                  </p>
                  <p>
                    Để thu hồi vốn và kiếm tiền từ trò chơi{" "}
                    <strong>Axie Infinity</strong>, game thủ sẽ có 2 cách. Dạng
                    1 là làm nhiệm vụ và các công việc hàng ngày để kiếm phần
                    thưởng là token SLP. Sau đó sẽ mang SLP lên các sàn giao
                    dịch để bán.
                  </p>
                  <p>
                    Kiểu kiếm tiền thứ 2 trong <strong>Axie Infinity</strong> là
                    cho lai tạo và phối giống các loại thú với nhau. Sau khi
                    sinh ra lứa tiếp theo, người chơi có thể mang lên chợ để
                    bán. Giá các loại thú cũng tùy loại, từ vài trăm đô đến cả
                    nghìn đô. Tuy nhiên, cách này thường sẽ mất nhiều thời gian
                    và công sức hơn.
                  </p>
                  <p>
                    Trong thời điểm cả <strong>AXS</strong> và SLP đều tăng giá,
                    game thủ <strong>Axie Infinity</strong> là những người được
                    lợi nhiều nhất. Tuy nhiên, cuộc sống không phải màu hồng như
                    nhiều người vẫn nghĩ. Theo cập nhật từ Coinmarketcap, giá
                    trị của AXS và SLP đang giảm chóng mặt trong 2 ngày trở lại
                    đây.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-1-1627575119448438591218.jpeg"
                    alt="1, AXIE INFINITY,AXS,AXS COIN,GAME THỦ VIỆT,GIỚI CÔNG NGHỆ,CÔNG NGHỆ VIỆT NAM,TIỀN ẢO,CRYPTO,"
                    note="AXS đã bốc hơi 21% giá trị trong 2 ngày qua."
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    Cụ thể, <strong>AXS</strong> đã có ngày giảm giá thứ 2 liên
                    tiếp, từ mốc 53,5$ xuống 42.1$, giảm 21% giá trị. Tương tự
                    như vậy là SLP, từ mốc 0,41$ xuống 0,25$, giảm 39%. Đây có
                    thể coi là biên độ giảm giá thuộc loại mạnh nhất trên thị
                    trường trong 2 ngày qua.{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/untitled-1627574937832795816169.png"
                    alt="2, AXIE INFINITY,AXS,AXS COIN,GAME THỦ VIỆT,GIỚI CÔNG NGHỆ,CÔNG NGHỆ VIỆT NAM,TIỀN ẢO,CRYPTO,"
                    note=""
                  />
                  <p>
                    Mặc dù so với giá cách đây vài tháng thì mức hiện tại của{" "}
                    <strong>AXS</strong> và SLP vẫn đang khá cao. Tuy nhiên xét
                    về ngắn hạn trong vài ngày qua, số lượng game thủ "đu đỉnh"
                    là không hề ít chút nào. Họ đã phải bỏ vốn ra để mua thú
                    cưng khi mà giá AXS đang cao ngất ngưởng.{" "}
                  </p>
                  <p>
                    Đáng quan ngại hơn là có vẻ như xu hướng giảm của 2 đồng{" "}
                    <strong>crypto</strong> kể trên đều chưa có dấu hiệu dừng
                    lại. Và nếu tình trạng này vẫn tiếp tục tái diễn hoặc trường
                    hợp xấu hơn là Bitcoin đột ngột giảm giá mạnh thì vốn hóa
                    của <strong>AXS</strong> và SLP sẽ bị thổi bay đi rất nhanh.
                    Khi đó, dù game thủ có cố gắng cày kéo đến đâu đi chăng nữa
                    thì cũng khó mà bù đắp nổi chi phí đầu tư ban đầu.
                  </p>
                  <p>
                    Trước một xu thế mới, lợi khuyên cho các bạn là hãy cẩn thận
                    và tìm hiểu kỹ càng trước khi "đánh cược" với hầu bao của
                    mình.
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
