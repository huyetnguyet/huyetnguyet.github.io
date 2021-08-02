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
"timestamp": '02/08/2021 01:17 AM',
"title": '12 game NFT có thể kiếm tiền "ngon" như Axie Infinity (Phần 1)',
"description": 'Game NFT đã khởi đầu cho xu hướng chơi game kiếm tiền đang thịnh hành trên thế giới.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277432005911663617292.jpg',
"alt": 'AXIE INFINITY,GAME NFT,CHƠI GAME KIẾM TIỀN,PLAY TO EARN,TIỀN ẢO,AXS,SLP,',
"category": 'games',
"date": '02/08/2021',
"time": '01:17 AM',
"link": '/12-game-nft-co-the-kiem-tien-ngon-nhu-axie-infinity-phan-1',
"zcomponent": 'page_20210802011748',
"filepath": './20210802011748-12-game-nft-co-the-kiem-tien-ngon-nhu-axie-infinity-phan-1.js'
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
const title = '12 game NFT có thể kiếm tiền "ngon" như Axie Infinity (Phần 1)';
const author = "Real Madrid";
const source = "Pháp luật và bạn đọc";
const timestamp = "02/08/2021 01:17 AM";
const description =
  "Game NFT đã khởi đầu cho xu hướng chơi game kiếm tiền đang thịnh hành trên thế giới.";
const link = "12-game-nft-co-the-kiem-tien-ngon-nhu-axie-infinity-phan-1";
const tagparam = [
  "AXIE INFINITY",
  "GAME NFT",
  "CHƠI GAME KIẾM TIỀN",
  "PLAY TO EARN",
  "TIỀN ẢO",
  "AXS",
  "SLP",
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

export default function page_20210802011748() {
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
                    Với xu hướng <strong>game NFT</strong> đang cực kỳ phát
                    triển trong thời gian vừa qua, nhiều dự án đã được ra đời và
                    phát triển. Tiêu biểu nhất chắc chắn chính là{" "}
                    <strong>Axie Infinity</strong>. Với giá trị vốn hóa lên đến
                    2,5 tỷ USD, tựa game do người Việt sản xuất này chính là
                    game NFT đắt giá nhất mọi thời đại.
                  </p>
                  <p>
                    Không chỉ vì vốn hóa cực khủng, một điều hấp dẫn của{" "}
                    <strong>game NFT</strong> là game thủ có thể kiếm được tiền
                    nhờ việc chơi game. Thực tế cho thấy đã có rất nhiều game
                    thủ kiếm được từ vài triệu đến hàng chục triệu đồng nhờ chơi{" "}
                    <strong>Axie Infinity</strong>.
                  </p>
                  <p>
                    Hiểu được nhu cầu chơi <strong>game NFT</strong> của cộng
                    đồng game thủ Việt đang rất cao, chúng tôi xin giới thiệu
                    thêm một vài trò chơi hấp dẫn đang được rất nhiều game thủ
                    tham gia.
                  </p>
                  <h5>Faraland (đã phát hành)</h5>
                  <p>
                    Faraland là một NFT RPG game nhiều người chơi cho phép người
                    chơi sở hữu hàng nghìn chiến binh NFT độc đáo và trang bị
                    cho họ hàng trăm vũ khí, áo giáp và vật nuôi. Mục tiêu của
                    Faraland là trở thành trò chơi hàng đầu trên Binance Smart
                    Chain (BSC).
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277432005911663617292.jpg"
                    alt="1, AXIE INFINITY,GAME NFT,CHƠI GAME KIẾM TIỀN,PLAY TO EARN,TIỀN ẢO,AXS,SLP,"
                    note=""
                  />
                  <p>
                    Faraland không chỉ là nền tảng thu thập NFT mà còn là một
                    nền tảng với lối chơi thú vị, nơi người dùng có thể trải
                    nghiệm các NFT nhân vật của họ theo nhiều cách độc đáo.
                    Faraland có bảy gia tộc và người chơi cá nhân có thể hoàn
                    thành một nhiệm vụ, nâng cấp nhân vật, trang bị, vật nuôi,
                    tham gia các bang hội hoặc chiến đấu với các bang hội khác
                    để nhận tài nguyên canh tác, bảo vệ gia tộc, chiến đấu với
                    ông chủ để kiếm phần thưởng tuyệt vời và trải nghiệm các
                    tính năng của Gacha.
                  </p>
                  <p>
                    Faraland được xây dựng trên Binance Smart Chain với quyền sở
                    hữu tài sản mạnh mẽ, an toàn, nhanh chóng mà không mất quá
                    nhiều phí. Người chơi có toàn quyền sở hữu NFT nhân vật của
                    mình và có thể trao đổi chúng với những người chơi khác.
                  </p>
                  <h5>Decentraland (đã phát hành)</h5>
                  <p>
                    Decentraland là một game thế giới ảo và một cộng đồng người
                    sử dụng được xây dựng trên công nghệ blockchain. Người dùng
                    phát triển, sở hữu các mảnh đất, tác phẩm nghệ thuật và
                    token không thể thay thế (NFT). Các thành viên cũng có thể
                    tham gia vào các Tổ chức phi tập trung (DAO) của nền tảng.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/31/photo-1-16277435029951117013093.jpeg"
                    alt="2, AXIE INFINITY,GAME NFT,CHƠI GAME KIẾM TIỀN,PLAY TO EARN,TIỀN ẢO,AXS,SLP,"
                    note=""
                  />
                  <p>
                    Với tư cách là một DAO, Decentraland trao cho cộng đồng
                    quyền tham gia vào việc quản lý dự án. Tiền mã hóa gốc của
                    Decentraland - MANA và tất cả các tài sản trong trò chơi đều
                    nằm trên chuỗi khối Ethereum .
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Decentraland là một không gian trực tuyến kết hợp thực tế ảo
                    với công nghệ blockchain. Không giống phần lớn các trò chơi
                    trực tuyến khác, người chơi có quyền kiểm soát trực tiếp các
                    quy tắc trong trò chơi này. DAO cho phép chủ sở hữu token bỏ
                    phiếu trực tiếp về các chính sách trong trò chơi. Cơ chế này
                    ảnh hưởng đến mọi thứ, từ loại mặt hàng nào được phép đầu tư
                    cho đến ngân khố của DAO.
                  </p>
                  <h5>My DeFi Pet (đã phát hành)</h5>
                  <p>
                    My DeFi Pet là một dự án game xây dựng trên blockchain, kết
                    hợp giữa trò chơi truyền thống và DeFi (tài chính phi tập
                    trung), phát triển theo mô hình{" "}
                    <strong>Play to Earn</strong> (chơi game để kiếm tiền). DPET
                    là sáng kiến của đội ngũ phát triển với 3 đặc điểm chính là
                    trò chơi nuôi thú cưng, tính năng DeFi và cá nhân hóa dành
                    cho người dùng.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277436623992136072459.png"
                    alt="3, AXIE INFINITY,GAME NFT,CHƠI GAME KIẾM TIỀN,PLAY TO EARN,TIỀN ẢO,AXS,SLP,"
                    note=""
                  />
                  <p>
                    Khi tham gia My DeFi Pet, người chơi có thể kiểm soát được
                    vật nuôi của mình bằng cách thu thập, lai tạo, tiến hoá và
                    sử dụng các nhân vật ấy để chiến đấu trong không gian game.
                    Mỗi phần sẽ được tách riêng biệt, giúp người chơi có thể
                    nhận các phần thưởng theo từng level.
                  </p>
                  <h5>Crypto Blades (đã phát hành)</h5>
                  <p>
                    CryptoBlades là một trò chơi nhập vai NFT được phát hành
                    trên Binance Smart Chain và phát triển bởi Riveted Games.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277439620411039941033.jpg"
                    alt="4, AXIE INFINITY,GAME NFT,CHƠI GAME KIẾM TIỀN,PLAY TO EARN,TIỀN ẢO,AXS,SLP,"
                    note=""
                  />
                  <p>
                    Cốt lõi của game xoay quanh việc đánh bại kẻ thù, chiến đấu
                    với quái vật, chế tạo vũ khí độc đáo và tham gia các cuộc
                    đột kích để nhận được SKILL - token chính của CryptoBlades.
                    Người chơi có thể mua các nhân vật, skill nhân vật, rèn vũ
                    khí và trang bị những vũ khí đó để tăng sức mạnh tổng thể.
                    Ngoài ra người chơi cũng có thể giao dịch các nhân vật và vũ
                    khí của họ trên marketplace như một tài sản NFT thông
                    thường.
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
