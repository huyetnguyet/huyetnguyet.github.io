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
"timestamp": '02/08/2021 01:22 AM',
"title": 'Đồng coin Axie Infinity rớt giá thảm hại, game thủ Việt náo loạn vì "đu đỉnh"',
"description": 'Game thủ Axie Infinity Việt Nam đang lo lắng vì giá tiền ảo của game liên tục giảm.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/2/3-16278792827231259436558-1627879302333166739249.png',
"alt": 'GAME THỦ VIỆT,GAME NFT,AXIE INFINITY,TIỀN ẢO,SLP,AXS,SLP COIN,',
"category": 'games',
"date": '02/08/2021',
"time": '01:22 AM',
"link": '/dong-coin-axie-infinity-rot-gia-tham-hai-game-thu-viet-nao-loan-vi-du-dinh',
"zcomponent": 'page_20210802012221',
"filepath": './20210802012221-dong-coin-axie-infinity-rot-gia-tham-hai-game-thu-viet-nao-loan-vi-du-dinh.js'
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
  'Đồng coin Axie Infinity rớt giá thảm hại, game thủ Việt náo loạn vì "đu đỉnh"';
const author = "Real Madrid";
const source = "Pháp luật và bạn đọc";
const timestamp = "02/08/2021 01:22 AM";
const description =
  "Game thủ Axie Infinity Việt Nam đang lo lắng vì giá tiền ảo của game liên tục giảm.";
const link =
  "dong-coin-axie-infinity-rot-gia-tham-hai-game-thu-viet-nao-loan-vi-du-dinh";
const tagparam = [
  "GAME THỦ VIỆT",
  "GAME NFT",
  "AXIE INFINITY",
  "TIỀN ẢO",
  "SLP",
  "AXS",
  "SLP COIN",
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

export default function page_20210802012221() {
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
                      Đầu tư lớn vào <strong>Axie Infinity</strong> với mong
                      muốn vừa chơi game vừa kiếm được tiền, rất nhiều{" "}
                      <strong>game thủ Việt</strong> đã đang đứng ngồi không yên
                      khi đồng crypto của game (<strong>SLP</strong>) liên tục
                      mất giá. Theo cập nhật từ sàn Binance, giá trị của SLP đã
                      bốc hơi hơn 50% chỉ trong 1 tuần qua.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/2/1-1627878903568686877508-1627878927912904328738.png"
                      alt="1, GAME THỦ VIỆT,GAME NFT,AXIE INFINITY,TIỀN ẢO,SLP,AXS,SLP COIN,"
                      note="Một game thủ lo lắng vì đầu tư lớn vào game mà chưa biết bao giờ mới thu hồi được vốn."
                    />
                    <p>
                      Dạo qua một vòng quanh các hội nhóm, diễn đàn về game{" "}
                      <strong>Axie Infinity</strong> tại Việt Nam. Có thể thấy
                      tâm lý hoang mang bắt đầu hình thành ở nhóm các game thủ
                      mới, những người tham gia game khi giá{" "}
                      <strong>AXS</strong> đang rất cao.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/2/3-16278792827231259436558-1627879302333166739249.png"
                      alt="2, GAME THỦ VIỆT,GAME NFT,AXIE INFINITY,TIỀN ẢO,SLP,AXS,SLP COIN,"
                      note=""
                    />
                    <p>
                      Để có thể tham gia, game thủ sẽ phải bỏ ít nhất là 1000$ -
                      1200$ (gần 30 triệu VNĐ) để mua 3 thú cưng đầu tiên. Con
                      số này có thể lên tới cả ngàn USD (hàng trăm triệu VNĐ)
                      nếu bạn muốn có một đội hình mạnh hơn, xịn hơn. Giá thú
                      cưng cao hay thấp sẽ phụ thuộc vào giá trị của đồng{" "}
                      <strong>AXS</strong> trên thị trường crypto. Trong bối
                      cảnh AXS tăng trưởng vũ bão như thời gian qua, những người
                      chơi vào sau đã phải bỏ ra số tiền cực lớn để tham gia trò
                      chơi này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/2/4-16278792827482100947833-1627879335434815311837.png"
                      alt="3, GAME THỦ VIỆT,GAME NFT,AXIE INFINITY,TIỀN ẢO,SLP,AXS,SLP COIN,"
                      note=""
                    />
                    <p>
                      Để thu hồi vốn và kiếm tiền từ trò chơi{" "}
                      <strong>Axie Infinity</strong>, game thủ sẽ có tập trung
                      vào hoàn thành các nhiệm vụ trong game để kiếm phần thưởng
                      là token <strong>SLP</strong>. Sau đó sẽ mang SLP lên các
                      sàn giao dịch để bán. Trong thời gian trước khi giá SLP đã
                      lên rất cao (có lúc đến 0,41$), game thủ có thể thu hồi
                      vốn dễ dàng và nhanh chóng tạo ra lợi nhuận.{" "}
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Tuy nhiên trong vài ngày trở lại đây, giá{" "}
                      <strong>SLP</strong> liên tục sụt giảm khiến nhiều người
                      không khỏi lo lắng. Đáng quan ngại hơn là có vẻ như xu
                      hướng giảm của đồng crypto này chưa có dấu hiệu dừng lại.
                      Và nếu tình trạng này vẫn tiếp tục tái diễn hoặc trường
                      hợp xấu hơn là Bitcoin đột ngột giảm giá mạnh thì vốn hóa
                      của SLP sẽ bị thổi bay đi rất nhanh. Khi đó, dù game thủ
                      có cố gắng cày kéo đến đâu đi chăng nữa thì cũng khó mà bù
                      đắp nổi chi phí đầu tư ban đầu.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/2/5-1627879282755829902848-16278793511501096679790.png"
                      alt="4, GAME THỦ VIỆT,GAME NFT,AXIE INFINITY,TIỀN ẢO,SLP,AXS,SLP COIN,"
                      note=""
                    />
                    <p>
                      Ở thời điểm hiện tại, <strong>SLP</strong> vẫn đang giảm
                      giá chóng mặt và chưa có dấu hiệu dừng lại. Không ngoại
                      trừ khả năng đồng crypto này sẽ tạo ra những đáy mới khiến
                      nhà đầu tư cũng như game thủ phải đứng ngồi không yên.
                      Liệu tương lại của <strong>Axie Infinity</strong> sẽ như
                      thế nào? Trò chơi này sẽ tiếp tục phát triển bền vững hay
                      chỉ là "game đa cấp" như nhiều người đang chia sẻ? Chúng
                      ta hãy cùng chờ xem.
                    </p>
                  </div>
                  <AdsHorizontal />
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
