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
"timestamp": '29/07/2021 04:23 PM',
"title": 'Game thủ thấy gì khi đi hết map các game open world đình đám? (P.1)',
"description": 'Dù bạn tin hay không, các nhà phát triển game open world có đến 1001 cách ngăn bạn đến được rìa thế giới.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/21/-16268588209211899282210.jpg',
"alt": 'OPEN WORLD,GAME,',
"category": 'games',
"date": '29/07/2021',
"time": '04:23 PM',
"link": '/game-thu-thay-gi-khi-di-het-map-cac-game-open-world-dinh-dam-p1',
"zcomponent": 'page_20210729162324',
"filepath": './20210729162324-game-thu-thay-gi-khi-di-het-map-cac-game-open-world-dinh-dam-p1.js'
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
  "Game thủ thấy gì khi đi hết map các game open world đình đám? (P.1)";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:23 PM";
const description =
  "Dù bạn tin hay không, các nhà phát triển game open world có đến 1001 cách ngăn bạn đến được rìa thế giới.";
const link = "game-thu-thay-gi-khi-di-het-map-cac-game-open-world-dinh-dam-p1";
const tagparam = ["OPEN WORLD", "GAME"];
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

export default function page_20210729162324() {
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
                      Thế giới trong <strong>game</strong>{" "}
                      <strong>open world</strong> được giới thiệu là rộng lớn,
                      tuy nhiên, nó vẫn có những giới hạn nhất định. Vì thế để
                      đối phó với việc người chơi quá hiếu kỳ mà chạy đến cuối
                      bản đồ, đội ngũ phát triển game đã nghĩ ra rất nhiều thứ
                      thú vị.
                    </p>
                    <h5>1. Bức tường vô hình</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/21/-16268588209211899282210.jpg"
                      alt="1, OPEN WORLD,GAME,"
                      note=""
                    />
                    <p>
                      Cách thức cổ điển và hữu hiệu trong mọi trường hợp là tạo
                      ra một bức tường vô hình để cản bước nhân vật tìm đến rìa
                      bản đồ. Tuy nhiên, cách này bị nhiều <strong>game</strong>{" "}
                      thủ đánh giá là nhàm chán, thiếu sáng tạo.
                    </p>
                    <h5>2. Tạo ra một đại dương bao la</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/21/-16268588366361832869493.jpg"
                      alt="2, OPEN WORLD,GAME,"
                      note=""
                    />
                    <p>
                      Một cách rất hợp lý và đầy thuyết phục mà nhiều{" "}
                      <strong>game</strong> áp dụng là thiết lập một khu vực đại
                      dương trải dài bất tận. Trong một số game như GTA, Saints
                      Row, Just Cause hay Crackdown, sẽ có thiết lập hòn đảo
                      không thể sử dụng thuyền bè. Nếu sử dụng thuyền, chúng sẽ
                      đắm ngay lập tức hoặc bị lật nếu người chơi cố chạy đi xa.
                    </p>
                    <h5>3. Bức tường kẻ thù</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/21/-16268588526121227397735.jpg"
                      alt="3, OPEN WORLD,GAME,"
                      note=""
                    />
                    <p>
                      Trong Red Dead Redemption 2, nếu cố vượt quá Blackwater
                      trước hồi kết, người chơi sẽ phải đối mặt với vô số kẻ thù
                      trên lưng ngựa và chúng có độ ngắm bắn chính xác đến mức
                      thần kỳ. Nếu người chơi cố thoát khỏi đám đông này, thì họ
                      cũng sẽ bị một viên đạn lạc bắn hạ.
                    </p>
                    <p>
                      Hoặc trong tựa <strong>game</strong> khác là Sabnautica’s
                      "Crater Edge", thì người chơi lại phải đương đầu với với
                      những Ghost Reaper khổng lồ đi săn lùng con mồi. Thiết lập
                      điểm rìa bản đồ như vậy rất hợp lý, vì sẽ chẳng ai thắc
                      mắc vì sao dưới vực thẳm lại có nhiều sinh vật kỳ quái,
                      hung dữ như vậy sinh sống.
                    </p>
                    <h5>4. Dịch chuyển tức thời</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/21/-16268588675931412689145.jpg"
                      alt="4, OPEN WORLD,GAME,"
                      note=""
                    />
                    <p>
                      Cách này thậm chí còn thiếu thuyết phục hơn bức tường vô
                      hình. Bởi khi người chơi đến rìa bản đồ thì họ sẽ bị dịch
                      chuyển ngay lập tức quay trở lại vùng thực hiện nhiệm vụ
                      của bản đồ mà không cần lý do giải thích.
                    </p>
                    <h5>5. Bức tường lớn</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/21/-1626858893669692413435.jpg"
                      alt="5, OPEN WORLD,GAME,"
                      note=""
                    />
                    <p>
                      Về cơ bản thì cách này khiến <strong>game</strong> thủ cảm
                      thấy dễ chịu và bớt "giả trân" hơn so với bức tường vô
                      hình. Nhà sản xuất thường tạo ra một vách đá hoặc thung
                      lũng cao, khiến người chơi không thể vượt qua được, gần
                      giống với ý tưởng về vực sâu không đáy dưới đại dương.
                    </p>
                    <h5>6. Không có rìa thế giới?</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/21/-162685892288215830056.jpg"
                      alt="6, OPEN WORLD,GAME,"
                      note=""
                    />
                    <p>
                      Minecraft lại là một ví dụ khác cho việc danh giới trong{" "}
                      <strong>game</strong> được xử lý khéo léo. Vì thế giới của
                      Minecraft do cộng đồng tham gia tạo dựng nên mức độ rộng
                      lớn hơn hẳn các tựa game <strong>open world</strong> khác,
                      đến mức nhiều người nhầm tưởng nó là vô tận. Tuy nhiên,
                      Minecraft vẫn có giới hạn và nó được gọi là Far Lands.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Có điều là giới hạn này cũng không thật sự nghiêm ngặt
                      lắm, vì nhiều người vẫn có thể vượt qua giới hạn được lập
                      ra để tiếp tục khám phá thế giới.
                    </p>
                    <h5>7. Tường vô hình và tin nhắn cảnh báo</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/21/-16268589413621306040393.jpg"
                      alt="7, OPEN WORLD,GAME,"
                      note=""
                    />
                    <p>
                      Skyrim và Oblivion có lẽ là những trò chơi mà người chơi
                      có thể tìm đến tận rìa thế giới một cách khá dễ dàng. Tuy
                      nhiên, tìm được là một chuyện, có đi được hay không lại là
                      chuyện khác. Lúc màn hình sẽ hiện lên dòng thông báo "I
                      can’t abandon my mission" hoặc "Now is not the time".
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
