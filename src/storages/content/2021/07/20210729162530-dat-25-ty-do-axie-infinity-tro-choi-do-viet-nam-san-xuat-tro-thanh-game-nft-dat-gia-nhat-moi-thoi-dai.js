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
"timestamp": '29/07/2021 04:25 PM',
"title": 'Đạt 2,5 tỷ đô, Axie Infinity - trò chơi do Việt Nam sản xuất trở thành game NFT đắt giá nhất mọi thời đại',
"description": 'Axie Infinity trở thành niềm tự hào của làng game Việt.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16272953989991650537087.png',
"alt": 'AXIE INFINITY,GAME VIỆT,TỶ ĐÔ,BITCOIN,TIỀN ẢO,CRYPTO,CÔNG NGHỆ VIỆT NAM,',
"category": 'games',
"date": '29/07/2021',
"time": '04:25 PM',
"link": '/dat-25-ty-do-axie-infinity-tro-choi-do-viet-nam-san-xuat-tro-thanh-game-nft-dat-gia-nhat-moi-thoi-dai',
"zcomponent": 'page_20210729162530',
"filepath": './20210729162530-dat-25-ty-do-axie-infinity-tro-choi-do-viet-nam-san-xuat-tro-thanh-game-nft-dat-gia-nhat-moi-thoi-dai.js'
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
  "Đạt 2,5 tỷ đô, Axie Infinity - trò chơi do Việt Nam sản xuất trở thành game NFT đắt giá nhất mọi thời đại";
const author = "Real Madrid";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:25 PM";
const description = "Axie Infinity trở thành niềm tự hào của làng game Việt.";
const link =
  "dat-25-ty-do-axie-infinity-tro-choi-do-viet-nam-san-xuat-tro-thanh-game-nft-dat-gia-nhat-moi-thoi-dai";
const tagparam = [
  "AXIE INFINITY",
  "GAME VIỆT",
  "TỶ ĐÔ",
  "BITCOIN",
  "TIỀN ẢO",
  "CRYPTO",
  "CÔNG NGHỆ VIỆT NAM",
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

export default function page_20210729162530() {
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
                    Với tốc độ tăng trưởng "không thể ngăn cản nổi",{" "}
                    <strong>Axie Infinity</strong> đã trở thành tựa game NFT đắt
                    giá nhất mọi thời đại với giá trị vốn hóa gần 2,5 tỷ USD (~
                    60 nghìn tỷ VNĐ). Đây là niềm tự hào không chỉ của làng game
                    thủ mà còn lan sang cả giới{" "}
                    <strong>công nghệ Việt Nam</strong>.{" "}
                  </p>
                  <p>
                    Theo dữ liệu tự Coinmarketcap, đồng AXS của{" "}
                    <strong>Axie Infinity</strong> đã tăng trưởng hơn 138% trong
                    vòng 1 tuần qua, đạt mốc 40,5 $/đồng (dữ liệu cập nhật 17h
                    ngày 26/7, giờ Việt Nam). Tính rộng hơn trong vòng 1 tháng
                    qua, AXS đã tăng 1157%, từ 3,5 $ lên hơn 40 $. Đây là mức
                    tăng trưởng ấn tượng nhất của thị trường{" "}
                    <strong>Crypto</strong> thế giới trong thời điểm ảm đạm suốt
                    2 tháng qua.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/untitled-16272954487391996043420.png"
                    alt="1, AXIE INFINITY,GAME VIỆT,TỶ ĐÔ,BITCOIN,TIỀN ẢO,CRYPTO,CÔNG NGHỆ VIỆT NAM,"
                    note="Axie Infinity tăng trưởng hơn 1000% chỉ trong 1 tháng qua."
                  />
                  <p>
                    Với giá trị vốn hóa đạt trên 2,5 tỷ USD,{" "}
                    <strong>Axie Infinity</strong> đã vượt qua Decentraland để
                    trở thành tựa game NFT đắt giá nhất mọi thời đại (tính đến
                    thời điểm hiện tại). Thậm chí nếu so sánh trên bình diện
                    toàn thị trường game, giá trị vốn hóa hiện tại của Axie
                    Infinity đủ sức giúp trò chơi này lọt top những trò chơi đắt
                    giá nhất lịch sử.
                  </p>
                  <p>
                    Được biết, <strong>Axie Infinity</strong> là một tựa game
                    NFT chạy trên nền tảng blockchain. Trò chơi được lấy cảm
                    hứng từ tựa game <strong>Crypto</strong>Kitties. Về cơ bản
                    thì Axie Infinity là một tựa game nuôi thủ ảo nơi người chơi
                    có thể chiến đấu, thu thập, nuôi và xây dựng một vương quốc
                    trên đất liền cho thú cưng của mình.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Axie cũng mang những đặc điểm của mạng xã hội và nền tảng
                    việc làm do có thế mạnh về cộng đồng cũng như cơ hội sở hữu
                    AXS coin nhờ tham gia trò chơi trong giai đoạn sớm. Người
                    đứng sau tất cả thành công của{" "}
                    <strong>Axie Infinity</strong> là CEO Nguyễn Thành Trung và
                    đội ngủ phát triển gồm rất nhiều các bạn trẻ Việt Nam đầy
                    tài năng.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/photo-1-1627295564861620292641.jpg"
                    alt="2, AXIE INFINITY,GAME VIỆT,TỶ ĐÔ,BITCOIN,TIỀN ẢO,CRYPTO,CÔNG NGHỆ VIỆT NAM,"
                    note="Đội ngũ của gồm nhiều người Việt trẻ tài năng của Sky Mavis."
                  />
                  <p>
                    Vào tháng 5/2021, Sky Mavis cùng dự án{" "}
                    <strong>Axie Infinity</strong> đã gọi vốn thành công tại
                    vòng Series A của Shark Tank phiên bản Mỹ. Tỷ phú Mark Cuban
                    và nhiều nhà đầu tư khác rót cho Sky Mavis số tiền trị giá
                    7,5 triệu USD.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16272953989991650537087.png"
                    alt="3, AXIE INFINITY,GAME VIỆT,TỶ ĐÔ,BITCOIN,TIỀN ẢO,CRYPTO,CÔNG NGHỆ VIỆT NAM,"
                    note=""
                  />
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
