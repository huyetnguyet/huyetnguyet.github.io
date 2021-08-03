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
"timestamp": '02/08/2021 01:21 AM',
"title": '12 game NFT có thể kiếm tiền "ngon" như Axie Infinity (Phần 2)',
"description": 'Mời các bạn tiếp tục đến với series những tựa game NFT hot nhất thị trường.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/photo-1-16278323277561900075355.jpg',
"alt": 'THẾ GIỚI ẢO,GAME NFT,CHƠI GAME KIẾM TIỀN,PLAY TO EARN,THẾ GIỚI MỞ,TIỀN ẢO,',
"category": 'games',
"date": '02/08/2021',
"time": '01:21 AM',
"link": '/12-game-nft-co-the-kiem-tien-ngon-nhu-axie-infinity-phan-2',
"zcomponent": 'page_20210802012138',
"filepath": './20210802012138-12-game-nft-co-the-kiem-tien-ngon-nhu-axie-infinity-phan-2.js'
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
const title = '12 game NFT có thể kiếm tiền "ngon" như Axie Infinity (Phần 2)';
const author = "Real Madrid";
const source = "Pháp luật và bạn đọc";
const timestamp = "02/08/2021 01:21 AM";
const description =
  "Mời các bạn tiếp tục đến với series những tựa game NFT hot nhất thị trường.";
const link = "12-game-nft-co-the-kiem-tien-ngon-nhu-axie-infinity-phan-2";
const tagparam = [
  "THẾ GIỚI ẢO",
  "GAME NFT",
  "CHƠI GAME KIẾM TIỀN",
  "PLAY TO EARN",
  "THẾ GIỚI MỞ",
  "TIỀN ẢO",
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

export default function page_20210802012138() {
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
                      12 <strong>game NFT</strong> có thể kiếm tiền "ngon" như
                      Axie Infinity (Phần 1)
                    </p>
                    <h5>Vulcan’s Berserk (đã phát hành)</h5>
                    <p>
                      Vulcan’s Berserk là một <strong>game NFT</strong> card
                      phong cách kỳ ảo. Game hướng đến việc xây dựng một thế
                      giới đa vũ trụ VulcanVerse. Trong game, người chơi có thể
                      thu thập và nâng cấp những thẻ sinh vật huyền bí và dùng
                      để chiến đấu với kẻ thù.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/1/photo-1-16278304566941388851852.jpg"
                      alt="1, THẾ GIỚI ẢO,GAME NFT,CHƠI GAME KIẾM TIỀN,PLAY TO EARN,THẾ GIỚI MỞ,TIỀN ẢO,"
                      note="Game có cốt truyện vui nhộn do người chơi điều khiển và các tính năng trực quan được hỗ trợ bởi blockchain."
                    />

                    <p>
                      VulcanVerse là một <strong>thế giới ảo</strong> lấy bối
                      cảnh thời đại Hy Lạp-La Mã. Đây là một series nhiều trò
                      chơi độc lập sử dụng công nghệ blockchain để cho phép
                      người dùng thực sự sở hữu tài sản kỹ thuật số độc quyền.
                      Cốt truyện và sự tạo lập nên VulcanVerse được sáng tạo bởi
                      Steve Jackson và Ian Livingstone, những người đứng đằng
                      sau thành công của Fighting Fantasy.
                    </p>
                    <p>
                      VulcanVerse được vận hành dựa trên công nghệ blockchain,
                      với các mục quan trọng trong <strong>thế giới ảo</strong>{" "}
                      tồn tại dưới dạng NFT. Hiện Vulcan’s Berserk đang được
                      phát hành trên Google Play.{" "}
                    </p>
                    <h5>Sorare (đã phát hành)</h5>
                    <p>
                      {" "}
                      Sorare là một <strong>game NFT</strong> bóng đá giả tưởng.
                      Trò chơi này mô phỏng lại hoàn toàn các cầu thủ, các câu
                      lạc bộ, các giải đấu như là thế giới thực. Tại đây người
                      chơi có thể tự xây dựng đội bóng riêng cho mình với những
                      cầu thủ yêu thích thông qua các thẻ bài.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/photo-1-16278323277561900075355.jpg"
                      alt="2, THẾ GIỚI ẢO,GAME NFT,CHƠI GAME KIẾM TIỀN,PLAY TO EARN,THẾ GIỚI MỞ,TIỀN ẢO,"
                      note=""
                    />
                    <p>
                      Các thẻ bài trong trò chơi này có một số mức độ khan hiếm:
                      độc nhất, siêu hiếm và hiếm. Khi bạn thu thập một thẻ, bạn
                      có toàn quyền sở hữu và bán nó cho những người chơi khác.
                      Trò chơi được chạy dựa trên nền tảng Ethereum với tổng
                      doanh số bán thẻ hàng ngày đạt khoảng 159,000 đô la.
                    </p>
                    <h5>Gods Unchained</h5>
                    <p>
                      Gods Unchained là một game blockchain, nơi bạn kiếm được
                      tiền điện tử bằng cách chơi. Game được dẫn dắt bởi cựu
                      Giám đốc Game of Magic: The Gathering Arena, Chris Clay.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/photo-1-1627832393552533681439.jpg"
                      alt="3, THẾ GIỚI ẢO,GAME NFT,CHƠI GAME KIẾM TIỀN,PLAY TO EARN,THẾ GIỚI MỞ,TIỀN ẢO,"
                      note=""
                    />
                    <p>
                      Trong game dựa trên Ethereum này, người chơi thu thập các
                      thẻ bài kỹ thuật số và sử dụng chúng để cạnh tranh với
                      những người chơi khác.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Để giành chiến thắng, người chơi cần phải có chiến lược
                      xây dựng một bộ bài với nhiều loại chiến thuật khác nhau.
                      Khi thắng trò chơi trong thứ hạng, người chơi sẽ kiếm được
                      Flux và có thể sử dụng Flux để tạo thẻ chất lượng cao.
                    </p>
                    <h5>My Neighbor Alice (chưa phát hành)</h5>
                    <p>
                      My Neighbor Alice là game xây dựng{" "}
                      <strong>thế giới mở</strong> với sự tham gia của nhiều
                      người. Nó dường như thu hút không chỉ những người chơi
                      game blockchain mà còn cả cộng đồng game thủ nói chung.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/1/photo-1-1627832462928323151013.jpg"
                      alt="4, THẾ GIỚI ẢO,GAME NFT,CHƠI GAME KIẾM TIỀN,PLAY TO EARN,THẾ GIỚI MỞ,TIỀN ẢO,"
                      note=""
                    />
                    <p>
                      Game xoay quanh thế giới của Alice và quần thể các hòn đảo
                      mà trên đó bất kỳ ai cũng có thể mua và phát triển các
                      mảnh đất bằng những sáng tạo của riêng mình. Trong game
                      người chơi có thể thiết kế và xây dựng vùng đất của mình
                      bằng các vật phẩm trong trò chơi hoặc các NFT khác nhau.
                    </p>
                    <p>
                      Hình dạng và cấu trúc của các NFT rất đa dạng, từ thực
                      vật, hoa, cây cối, tòa nhà, động vật…và người chơi có thể
                      mua bán chúng. Điều này giúp cho My Neighbor Alice tạo ra
                      một nền kinh tế quy mô nhỏ, cung cấp cho người chơi khả
                      năng để trao đổi những tài sản độc đáo được định danh bởi
                      NFT.
                    </p>
                    <p>
                      ALICE là token đóng vai trò như tiền tệ trong game. Nó
                      được sử dụng trên Marketplace để mua tài sản như đất đai,
                      các NFT và những bộ kỹ năng đặc biệt trong trò chơi.
                    </p>
                    <p>(Còn tiếp....)</p>
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
