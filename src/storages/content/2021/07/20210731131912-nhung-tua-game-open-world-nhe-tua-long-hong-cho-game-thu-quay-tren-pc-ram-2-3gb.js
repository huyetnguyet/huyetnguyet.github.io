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
"timestamp": '31/07/2021 01:19 PM',
"title": 'Những tựa game open world nhẹ tựa lông hồng cho game thủ quẩy trên PC RAM 2-3GB',
"description": 'RAM khiêm tốn không phải là vấn đề lớn với các game thủ nếu chơi các tựa game open world này.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/the-elder-scrolls-v-skyrim-full-crack-16276392897441598181578.jpg',
"alt": 'GAME,OPEN WORLD,',
"category": 'games',
"date": '31/07/2021',
"time": '01:19 PM',
"link": '/nhung-tua-game-open-world-nhe-tua-long-hong-cho-game-thu-quay-tren-pc-ram-2-3gb',
"zcomponent": 'page_20210731131912',
"filepath": './20210731131912-nhung-tua-game-open-world-nhe-tua-long-hong-cho-game-thu-quay-tren-pc-ram-2-3gb.js'
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
  "Những tựa game open world nhẹ tựa lông hồng cho game thủ quẩy trên PC RAM 2-3GB";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "31/07/2021 01:19 PM";
const description =
  "RAM khiêm tốn không phải là vấn đề lớn với các game thủ nếu chơi các tựa game open world này.";
const link =
  "nhung-tua-game-open-world-nhe-tua-long-hong-cho-game-thu-quay-tren-pc-ram-2-3gb";
const tagparam = ["GAME", "OPEN WORLD"];
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

export default function page_20210731131912() {
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
                      Các tựa <strong>game</strong> <strong>open world</strong>{" "}
                      thường đòi hỏi khá cao về mặt cấu hình để giúp trải nghiệm
                      của người chơi được mượt mà. Đa số các game hiện nay có
                      trên thị trường đều đòi hỏi cấu hình RAM từ 4GB trở nên.
                      Tuy nhiên, nếu RAM PC chỉ khiêm tốn ở mức 2-3GB thì cũng
                      đừng quá lo lắng, bởi vẫn có kha khá tựa game open world
                      nhẹ như lông hồng cho những chiếc RAM "yếu" như thế này.
                    </p>
                    <h5> Skyrim</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/the-elder-scrolls-v-skyrim-full-crack-16276392897441598181578.jpg"
                      alt="1, GAME,OPEN WORLD,"
                      note=""
                    />
                    <p>
                      Skyrim nằm đầu danh sách bởi đây là một tựa{" "}
                      <strong>game</strong> ăn khách. Thế giới game mở rộng với
                      rất nhiều khu vực khác nhau. Để di chuyển giữa các địa
                      điểm, người chơi có thể mất vài phút đến nửa tiếng đồng
                      hồ. Có rất nhiều trứng phục sinh rải rác xung quanh, vì
                      thế không có việc lặp cảnh.
                    </p>
                    <p>
                      Ngoài Soul Cairn, Forgotten Vale và Solstheim trong DLC,
                      tựa <strong>game</strong> <strong>open world</strong>{" "}
                      Skyrim rất hoàn hảo đối với các PC có cấu hình chỉ 2-3GB.
                      Người chơi hoàn toàn có thể cài đặt thêm một số mod để
                      chuyến phiêu lưu thêm hấp dẫn.
                    </p>
                    <h5>Fallout 3</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/30/download-fallout-3-chan-hadoan-tv-1627639323881466400762.jpg"
                      alt="2, GAME,OPEN WORLD,"
                      note=""
                    />
                    <p>
                      Một tựa <strong>game</strong> hấp dẫn lấy bối cảnh tương
                      lai với những màn đấu súng. Tương tự như Skyrim, Fallout 3
                      được đánh giá cao ở điểm có nhiều mod và DLC rất tốt. RAM
                      ít không phải vấn đề với Fallout 3, miễn là PC có
                      processor và card đồ họa "xịn".
                    </p>
                    <h5>Minecraft</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/minecraftnen1768x512-1627639353987645827137.jpg"
                      alt="3, GAME,OPEN WORLD,"
                      note=""
                    />
                    <p>
                      Nếu người chơi chỉ đơn giản là tìm kiếm một tựa{" "}
                      <strong>game</strong> <strong>open world</strong> với thế
                      giới mở rộng thì Minecraft là lựa chọn lý tưởng. Về mặt lý
                      thuyết, thế giới trong game mở rộng vô tận. Mod base cũng
                      tốt ngang với Skyrim, dù gameplay hoàn toàn khác.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Cấu hình mặc định của Minecraft chỉ cần RAM 1 GB, nhưng
                      nếu RAM lớn hơn thì có thể cài đặt thêm các mod giúp trò
                      chơi thêm hấp dẫn.
                    </p>

                    <h5>Grand Theft Auto: San Andreas</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/30/link-t25e125ba25a3i-game-gta-sa-vi25e125bb2587t-h25c325b3a-mi25e125bb2585n-ph25c325ad-th25c325a0nh-c25c325b4ng-16276394375762046515541.png"
                      alt="4, GAME,OPEN WORLD,"
                      note=""
                    />
                    <p>
                      Thật may mắn khi series <strong>game</strong>{" "}
                      <strong>open world</strong> đình đám Grand Theft Auto vẫn
                      có những phần game dành cho RAM 2-3 GB. Nếu người chơi
                      muốn trải nghiệm cảm giác nhập vai, đua xe, thực hiện
                      những nhiệm vụ của mafia… thì Grand Theft Auto: San
                      Andreas là lựa chọn tốt. Hơn nữa, đây còn là tựa game được
                      đánh giá rất cao về thiết lập thế giới lẫn gameplay.
                    </p>
                    <h5>True Crime New York City</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/truecrime-5a243af513f12900383ff8d0-1627639467547453498210.jpg"
                      alt="5, GAME,OPEN WORLD,"
                      note=""
                    />
                    <p>
                      Một tựa <strong>game</strong> <strong>open world</strong>{" "}
                      hành động nhập vai khác cũng khá mượt mà với các PC có RAM
                      khiêm tốn. Thế giới trong game được nhiều game thủ miêu tả
                      là đẹp, rất thật và phần nhìn cực thì thỏa mãn dù không
                      đòi hỏi cấu hình quá cao.
                    </p>
                    <h5>Mafia</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/30/capsule616x353-1627639502583305163804.jpg"
                      alt="6, GAME,OPEN WORLD,"
                      note=""
                    />
                    <p>
                      Đây có thể được xem là phiên bản cổ điển hơn của Grand
                      Theft Auto. <strong>Game</strong> lấy bối cảnh những năm
                      1910. Khi chơi Mafia, người chơi sẽ thấy rằng thế giới
                      trong game không quá to, nhưng rất chất lượng. Ngoài cốt
                      truyện ấn tượng, game có gameplay cuốn hút. Khá nhiều
                      người nhận xét rằng Mafia khiến họ liên tưởng đến những
                      siêu phẩm như The Godfather và Scarface.
                    </p>
                    <h5>Far Cry 3</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/112-16276395620912132069101.jpg"
                      alt="7, GAME,OPEN WORLD,"
                      note=""
                    />
                    <p>
                      Không giống như các <strong>game</strong> thuộc series
                      Grand Theft Auto, với Far Cry 3, người chơi có thể đi đến
                      bất cứ đâu trên bản đồ với trang bị kỹ càng từ đầu đến
                      chân. Game khá nhẹ nhàng, nên người chơi cũng sẽ không
                      phải lo lắng quá nhiều về tuổi thọ RAM nếu chẳng may họ có
                      cày game quá miệt mài. Gameplay khá thoải mái, vì thế
                      người chơi hoàn toàn có thể cảm thấy như họ là một ông vua
                      theo đúng nghĩa đen.
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
