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
"timestamp": '28/08/2021 08:48 AM',
"title": 'Những custom map chống cửa từng một thời làm điên đảo làng game Việt, tới giờ chơi lại vẫn thấy hay',
"description": 'Những map này từng một thời lấy đi không ít thời gian của các game thủ Việt.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/21/photo-1-1629527412470825721201.jpg',
"alt": 'GAME,GAME THỦ,TIN TỨC GAME,BÀI VIẾT ĐÁNG CHÚ Ý,',
"category": 'games',
"date": '28/08/2021',
"time": '08:48 AM',
"link": '/nhung-custom-map-chong-cua-tung-mot-thoi-lam-dien-dao-lang-game-viet-toi-gio-choi-lai-van-thay-hay',
"zcomponent": 'page_20210828084824',
"filepath": './20210828084824-nhung-custom-map-chong-cua-tung-mot-thoi-lam-dien-dao-lang-game-viet-toi-gio-choi-lai-van-thay-hay.js'
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
  "Những custom map chống cửa từng một thời làm điên đảo làng game Việt, tới giờ chơi lại vẫn thấy hay";
const author = "Mặt Trứng";
const source = "Trí Thức Trẻ";
const timestamp = "28/08/2021 08:48 AM";
const description =
  "Những map này từng một thời lấy đi không ít thời gian của các game thủ Việt.";
const link =
  "nhung-custom-map-chong-cua-tung-mot-thoi-lam-dien-dao-lang-game-viet-toi-gio-choi-lai-van-thay-hay";
const tagparam = ["GAME", "GAME THỦ", "TIN TỨC GAME", "BÀI VIẾT ĐÁNG CHÚ Ý"];
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

export default function page_20210828084824() {
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
                      Ở thời điểm mà những LMHT, DOTA 2 còn chưa ra mắt,
                      Warcraft 3 gần như là một trong những tựa{" "}
                      <strong>game</strong> có số lượng người chơi đông đảo nhất
                      tại Việt Nam. Vì bên cạnh những custom map như DOTA
                      Allstar hay D-DAY, Warcraft 3 còn mang tới vô số những map
                      chống cửa - nơi mà những người chơi sẽ cùng bắt tay nhau,
                      hợp tác để qua ải với độ khó tăng dần theo thời gian. Thậm
                      chí, nhiều <strong>game thủ</strong> còn dùng cả thanh
                      xuân chỉ để chống cửa. Và ở thời điểm hiện tại, mặc dù đã
                      không còn quá thịnh hành như xưa, thế nhưng chắc chắn, các
                      custom map chống cửa này vẫn cực kỳ hay và đáng để chơi
                      lại.
                    </p>
                    <h5>GreenTD</h5>
                    <p>
                      Về cơ bản, GreenTD là một trong những map Tower Defense
                      điển hình và thậm chí, từng xuất hiện vô số những server
                      riêng trên Arena phục vụ cho các <strong>game</strong> thủ
                      chơi custom map này. Chẳng quá nếu nói rằng khi nhắc tới
                      các tựa game xây trụ chống cửa, GreenTD là đại diện nổi
                      bật nhất.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/21/photo-1-1629527412470825721201.jpg"
                      alt="1, GAME,GAME THỦ,TIN TỨC GAME,BÀI VIẾT ĐÁNG CHÚ Ý,"
                      note=""
                    />

                    <p>
                      Người chơi sẽ cùng nhau xây dựng các tháp trụ để tiêu diệt
                      các đợt lính xuất hiện. Lính sẽ ngày càng mạnh hơn và kèm
                      theo các đợt boss. Có thể dùng vàng khi tiêu diệt lính để
                      nâng cấp tháp trụ. Khi vượt qua các đợt lính yêu cầu sẽ
                      dành chiến thắng. Nghe qua có vẻ đơn giản nhưng GreenTD
                      quả thực rất khó và thu hút người chơi. Cần có sự nhanh
                      nhạy và đầu óc tư duy tốt mới có thể vượt qua được yêu cầu
                      của map. Có rất nhiều dạng biến thể của chống cửa nhưng
                      chung quy lại vẫn là xây dựng tháp trụ để phòng thủ đợt
                      lính đi đến điểm cố định.
                    </p>
                    <h5>X Hero Siege</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/21/photo-1-16295275774991631626355.jpg"
                      alt="2, GAME,GAME THỦ,TIN TỨC GAME,BÀI VIẾT ĐÁNG CHÚ Ý,"
                      note=""
                    />

                    <p>
                      Một map chống cổng phong cách điều khiển tướng quen thuộc.
                      Về cơ bản, X-Hero Siege vận hành với cơ chế khá đơn giản
                      khi nhiệm vụ của bạn chỉ là chống lại những đợt quái vật
                      tấn công dồn dập, đôi lúc có cả boss. Nhưng điểm thú vị
                      của X Hero Siege lại nằm ở chỗ, song song với những màn
                      def quái ấy, có vô số những sự kiện nhỏ lẻ giúp các vị
                      tướng của bạn gia tăng sức mạnh. Từ việc chạy trốn, sinh
                      tồn khỏi búa lùn Paladin cho tới những thử thách luyện cấp
                      độ tại tháp, tất cả đã làm nên sự thú vị của X Hero Siege.
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      Tất nhiên, cũng cần phải kể tới việc custom map này có rất
                      nhiều chế độ, trong đó nổi bật là việc cho người chơi lựa
                      chọn 2 tướng luân phiên ra trận. Ngoài ra, bạn cũng tùy
                      chọn để mở khóa bao nhiêu đường lính tấn công mình.
                    </p>
                    <h5>Enfos Team Survival</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/21/photo-1-1629527922729410764901.jpg"
                      alt="3, GAME,GAME THỦ,TIN TỨC GAME,BÀI VIẾT ĐÁNG CHÚ Ý,"
                      note=""
                    />

                    <p>
                      {" "}
                      Một trong những custom map lâu đời nhưng vẫn có sức hút
                      nhất của Warcraft, không gì khác chính là Enfos Team
                      Survival. Trong Enfo, nhiệm vụ của bạn chỉ đơn giản là cố
                      gắng "thủ thành" lâu hơn đối thủ là thắng mà thôi. Tuy
                      nhiên, có rất nhiều cách để tác động lên đối thủ mà một
                      trong số đó chính là việc nhồi thêm lính trong các đợt vây
                      hãm bên kia bản đồ. Tất nhiên, đây cũng là một trong những
                      tựa <strong>game</strong> "mất tình anh em" bậc nhất trong
                      Warcraft 3.
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
