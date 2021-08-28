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
"timestamp": '28/08/2021 08:45 AM',
"title": 'Tải ngay loạt game mobile offline siêu hấp dẫn dưới đây, đã hay lại còn miễn phí 100%',
"description": 'Những tựa game này đảm bảo đủ ba tiêu chí “Ngon, Bổ và hoàn toàn Miễn Phí”.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/26/photo-1-16299532016221939272110.jpg',
"alt": 'GAME,GAME THỦ,TIN TỨC GAME,',
"category": 'games',
"date": '28/08/2021',
"time": '08:45 AM',
"link": '/tai-ngay-loat-game-mobile-offline-sieu-hap-dan-duoi-day-da-hay-lai-con-mien-phi-100',
"zcomponent": 'page_20210828084521',
"filepath": './20210828084521-tai-ngay-loat-game-mobile-offline-sieu-hap-dan-duoi-day-da-hay-lai-con-mien-phi-100.js'
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
  "Tải ngay loạt game mobile offline siêu hấp dẫn dưới đây, đã hay lại còn miễn phí 100%";
const author = "LinhxD";
const source = "Trí Thức Trẻ";
const timestamp = "28/08/2021 08:45 AM";
const description =
  "Những tựa game này đảm bảo đủ ba tiêu chí “Ngon, Bổ và hoàn toàn Miễn Phí”.";
const link =
  "tai-ngay-loat-game-mobile-offline-sieu-hap-dan-duoi-day-da-hay-lai-con-mien-phi-100";
const tagparam = ["GAME", "GAME THỦ", "TIN TỨC GAME"];
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

export default function page_20210828084521() {
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
                    <h5>1. My Friend Pedro</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/26/photo-1-16299532016221939272110.jpg"
                      alt="1, GAME,GAME THỦ,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Sau sự thành công của My Friend Pedro trên PC thì giờ đây
                      nhà phát triển đã đầu tư một phiên bản đặc biệt dành riêng
                      cho di động. Khác với những tựa <strong>game</strong> bắn
                      súng thông thường, những yếu tố như: ảo, hài, nhảm nhí và
                      phi logic là những gì MFP mang đến. Nhiệm vụ của người
                      chơi là vượt qua mọi bàn chơi như một Deadpool, hạ gục mọi
                      kẻ địch để giải cứu những quả chuối. Gameplay tiết tấu
                      nhanh, lối chơi khác lạ và chỉ có trải nghiệm mới có thể
                      cảm nhận rõ được sự thú vị của trò chơi này.
                    </p>
                    <h5>2. The Wild Case</h5>{" "}
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/26/photo-1-16299532025151905931007.jpg"
                      alt="2, GAME,GAME THỦ,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Phải thốt lên rằng đây là một bộ phim điện ảnh với mạch
                      truyện có chiều sâu và vô cùng chặt chẽ. Bắt đầu vào{" "}
                      <strong>game</strong> bạn sẽ vào vai một chàng thám tử
                      đang nhận nhiệm vụ về những điều bí ẩn trong một ngôi làng
                      đậm chất của vùng đồng quê. Tại đây có vô vàn những điều
                      bí ẩn đang chờ bạn giải mã. Với lối chơi click and point
                      tìm manh mối đơn giản, game đã nhận về những lượt đánh giá
                      tích cực từ cả cốt truyện lẫn tiết tấu hợp lý. Có vô vàn
                      những nhiệm vụ và cuộc hội thoại thú vị, rất thích hợp cho
                      những <strong>game thủ</strong> điểm tĩnh thích sự tỉ mỉ.
                    </p>
                    <h5>3. Louis The Game</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/26/photo-2-16299532035172068894715.jpg"
                      alt="3, GAME,GAME THỦ,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Louis: The <strong>Game</strong> ra mắt nhân dịp kỉ niệm
                      200 năm của thương hiệu thời trang nổi tiếng Louis
                      Vuitton. Nhân vật chính của trò chơi này là Vivienne, linh
                      vật của thương hiệu. Cô là một búp bê gỗ được trang trí
                      với các họa tiết hoa và kí hiệu LV nổi tiếng.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Xuyên suốt trò chơi, Vivienne sẽ phải đối mặt với nhiều
                      nhiệm vụ khác nhau và những nhiệm vụ này sẽ đưa{" "}
                      <strong>game</strong> thủ đi qua lịch sử lâu đời của Louis
                      Vuitton. Người chơi sẽ được biết cách Vuitton từ một người
                      lái xe ba bánh trở thành nhà sáng lập của thương hiệu nổi
                      tiếng toàn cầu.
                    </p>
                    <h5>4. Trial Xtreme 4 Remastered</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/26/photo-3-1629953203002694626038.jpg"
                      alt="4, GAME,GAME THỦ,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Được đánh giá là tựa <strong>game</strong> đua xe địa hình
                      hay nhất trên đi động nhờ cơ chế vật lý siêu thực của
                      mình. Giờ đây tựa game này được cải tiến một nền đồ hoạ
                      mới 3D chân thực sống động. Tại đây bạn sẽ cùng chiếc xe
                      địa hình của mình băng qua nhiều công trình phức tạp khác
                      nhau từ sa mạc cho tới thành thị. Có hơn 90 màn chơi cùng
                      nhiều thử thách khác nhau đang chờ bạn trong Trial Xtreme
                      4 Remastered.
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
