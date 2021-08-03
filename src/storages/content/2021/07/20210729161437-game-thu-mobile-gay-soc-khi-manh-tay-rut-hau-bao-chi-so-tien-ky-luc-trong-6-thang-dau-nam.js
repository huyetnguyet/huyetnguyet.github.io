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
"timestamp": '29/07/2021 04:14 PM',
"title": 'Game thủ mobile gây sốc khi mạnh tay rút hầu bao chi số tiền “kỷ lục” trong 6 tháng đầu năm',
"description": 'Dù trong thời kỳ dịch bệnh lũng đoạn, hoành hành, game thủ mobile vẫn chứng minh mình là người chịu chơi nhất khi mạnh tay chi số tiền khủng vào game.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/7/photo-1-16256531735491340483581.jpg',
"alt": 'GAME THỦ,GAME MOBILE,DOANH THU,',
"category": 'games',
"date": '29/07/2021',
"time": '04:14 PM',
"link": '/game-thu-mobile-gay-soc-khi-manh-tay-rut-hau-bao-chi-so-tien-ky-luc-trong-6-thang-dau-nam',
"zcomponent": 'page_20210729161437',
"filepath": './20210729161437-game-thu-mobile-gay-soc-khi-manh-tay-rut-hau-bao-chi-so-tien-ky-luc-trong-6-thang-dau-nam.js'
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
  "Game thủ mobile gây sốc khi mạnh tay rút hầu bao chi số tiền “kỷ lục” trong 6 tháng đầu năm";
const author = "Kayle";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:14 PM";
const description =
  "Dù trong thời kỳ dịch bệnh lũng đoạn, hoành hành, game thủ mobile vẫn chứng minh mình là người chịu chơi nhất khi mạnh tay chi số tiền khủng vào game.";
const link =
  "game-thu-mobile-gay-soc-khi-manh-tay-rut-hau-bao-chi-so-tien-ky-luc-trong-6-thang-dau-nam";
const tagparam = ["GAME THỦ", "GAME MOBILE", "DOANH THU"];
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

export default function page_20210729161437() {
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
                      Không hề thua kém <strong>game thủ</strong> PC hay
                      console, khả năng rút hầu bao chi tiền của người chơi{" "}
                      <strong>game mobile</strong> cũng “không phải dạng vừa
                      đâu”.{" "}
                    </p>
                    <p>
                      Theo thông tin được tổ chức Sensor Tower tiết lộ, những{" "}
                      <strong>game thủ</strong> mobile trên khắp thế giới đã chi
                      đến 44,7 tỷ USD, tức hơn 1 triệu tỷ đồng trong vòng 6
                      tháng đầu tiên của năm nay. Trong đó, những người sử dụng
                      nền tảng iOS chiếm phần lớn khi bỏ ra 26 tỷ USD, còn game
                      thủ Android chiếm phần còn lại.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/7/photo-1-16256531735491340483581.jpg"
                      alt="1, GAME THỦ,GAME MOBILE,DOANH THU,"
                      note=""
                    />
                    <p>
                      Điều đáng lưu ý là Google không được hưởng hết số này bởi
                      Android có nhiều cửa hàng ứng dụng khác nhau chia sẻ số
                      tiền này. Dù vậy đại đa số tiền của{" "}
                      <strong>game thủ</strong> Android vẫn được chi trên Google
                      Play.
                    </p>
                    <p>
                      Mặc dù chi tiêu của người tiêu dùng trong các trò chơi
                      trên thiết bị di động đang tăng với tốc độ chậm hơn năm
                      ngoái, nhưng điều này không cho thấy sự suy thoái mà ngược
                      lại, là sự bình thường hóa sau sự gia tăng quan tâm trong
                      những trường hợp bất thường của đại dịch COVID-19.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/7/photo-1-16256528476181579506742.png"
                      alt="2, GAME THỦ,GAME MOBILE,DOANH THU,"
                      note=""
                    />
                    <p>
                      Bên cạnh đó, một số liệu cho thấy,{" "}
                      <strong>game thủ</strong> là những người chịu chi nhất,
                      hơn những đối tượng dùng mobile khác. Cụ thể, toàn bộ số
                      tiền mà người dùng Android và iOS chi ra cho ứng dụng là
                      gần 65 tỷ USD, có nghĩa là số tiền họ bỏ ra cho game chiếm
                      gần 69%.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Những tựa game được tải nhiều nhất trên các cửa hàng này
                      là Join Clash 3D, High Heels, Bridge Race, Among Us,
                      Garena Free Fire (thường được <strong>game thủ</strong>{" "}
                      gọi vui là “lửa chùa”)... Một số game khác của nhà phát
                      hành Trung Quốc Tencent cũng chiếm nhiều vị trí đầu trong
                      bảng xếp hạng. Những cái tên đáng chú ý khác bao gồm
                      Pokemon Go, PUBG Mobile, Roblox, Genshin Impact, Call of
                      Duty: Mobile,…{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/7/photo-1-16256530611251885231698.jpg"
                      alt="3, GAME THỦ,GAME MOBILE,DOANH THU,"
                      note=""
                    />
                    <p>
                      Trong thời gian tới, nhiều người đã nhìn trước hiện trạng
                      rằng, nhiều bom tấn ra đời sẽ tiếp tục bòn rút túi tiền
                      của <strong>game thủ</strong>: Apex Legends Mobile,
                      Pokemon Unite, Diablo Immortal,…{" "}
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
