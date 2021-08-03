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
"timestamp": '03/08/2021 11:13 AM',
"title": 'Nở rộ các dự án chơi game kiếm tiền ăn theo Axie Infinity',
"description": 'Dù phần nhiều là dự án trên giấy, vô số đồng tiền ảo của các dự án game blockchain (hay game kiếm ra tiền) đã mọc lên như nấm hút hàng triệu USD của những nhà đầu tư mạo hiểm.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-1-16279711334191957670293.jpg',
"alt": 'AXIE INFINITY,GAME,NFT,',
"category": 'games',
"date": '03/08/2021',
"time": '11:13 AM',
"link": '/no-ro-cac-du-an-choi-game-kiem-tien-an-theo-axie-infinity',
"zcomponent": 'page_20210803111304',
"filepath": './20210803111304-no-ro-cac-du-an-choi-game-kiem-tien-an-theo-axie-infinity.js'
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
const title = "Nở rộ các dự án chơi game kiếm tiền ăn theo Axie Infinity";
const author = "Phương Nguyễn";
const source = "ICTnews";
const timestamp = "03/08/2021 11:13 AM";
const description =
  "Dù phần nhiều là dự án trên giấy, vô số đồng tiền ảo của các dự án game blockchain (hay game kiếm ra tiền) đã mọc lên như nấm hút hàng triệu USD của những nhà đầu tư mạo hiểm.";
const link = "no-ro-cac-du-an-choi-game-kiem-tien-an-theo-axie-infinity";
const tagparam = ["AXIE INFINITY", "GAME", "NFT"];
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

export default function page_20210803111304() {
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
                      <strong>Axie Infinity</strong> vẫn đang là cái tên thu hút
                      sự chú ý lớn nhất của cộng đồng tiền mã hóa. Tuy nhiên,
                      trong khi trò chơi này đã phát hành và thu hút lượng người
                      chơi rất lớn, vô số các dự án <strong>game</strong>{" "}
                      blockchain ăn theo khác đã mọc lên để thu hút những nhà
                      đầu tư tham vọng kiếm tiền thật từ tiền ảo.
                    </p>
                    <p>
                      Đầu tiên phải kể đến đồng Itam <strong>Game</strong>s
                      (Itam), một dự án được cho là của nhà phát triển Hàn Quốc
                      cùng tên. Nhà phát triển tuyên bố đồng Itam sẽ được sử
                      dụng trên trò chơi Lime Odyssey M và bắt đầu bán ra gói
                      vật phẩm ảo từ cuối tháng 7 vừa qua.
                    </p>
                    <p>
                      Biến động giá khó lường của đồng Itam giữa cơn sốt tiền ảo
                      hệ <strong>game</strong> blockchain.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-1-16279711334191957670293.jpg"
                      alt="1, AXIE INFINITY,GAME,NFT,"
                      note=""
                    />
                    <p>
                      Itam <strong>Game</strong>s hứa hẹn sẽ phát hành game ngay
                      trong tháng 8 này với lộ trình phát hành sáu game nữa sử
                      dụng chung đồng Itam. Tuy nhiên, game thì chưa thấy đâu,
                      các nhà đầu tư đang như ngồi trên đống lửa khi đã trót đu
                      đỉnh ở 0,04 USD và hiện đồng này chỉ còn giá trị dưới 0,02
                      USD với khối lượng giao dịch dưới 5 triệu USD.
                    </p>
                    <p>
                      Một dự án khác là DungeonSwap (DND) khá khẩm hơn khi đã
                      xây dựng tương đối đầy đủ hệ thống giao dịch, chiến đấu,
                      trả thưởng… DungeonSwap được mô tả là một{" "}
                      <strong>game</strong> nhập vai bàn cờ với hệ thống chiến
                      đấu theo lượt tương đối đơn giản.
                    </p>
                    <p>
                      Đồng DND của dự án cũng lập đỉnh 16 USD vào ngày 26/7
                      nhưng với khối lượng giao dịch rất thấp dưới 500.000 USD.
                      Vì thế, chỉ sau vài ngày, đồng này mau chóng chìm sâu
                      xuống đáy 3 USD với khối lượng giao dịch khoảng 40 triệu
                      USD ở thời điểm hiện tại.
                    </p>
                    <p>
                      Cũng theo phong cách nuôi thú, một dự án mang tên
                      CryptoZoon (Zoon) bắt đầu thu hút được đông đảo nhà đầu tư
                      mua vào ở đợt mở bán sớm (presale) hôm 29/7. Nhưng một sự
                      cố kỹ thuật đã khiến đồng này tụt từ đỉnh 0,32 USD xuống
                      còn 0,021 USD với giao dịch trong 24 giờ qua là khoảng 20
                      triệu USD.
                    </p>
                    <p>
                      Một dự án nuôi thú khác là DinoX vừa mở bán đã có khối
                      lượng giao dịch lên tới 17 triệu USD sau một giờ. Đồng
                      tiền ảo của dự án hiện có giá trị 0,6 USD. Song cả
                      CryptoZoon lẫn DinoX đều được thiết kế theo phong cách
                      nuôi thú khá đơn giản và không có gì đột phá so với{" "}
                      <strong>Axie Infinity</strong>.
                    </p>
                    <p>
                      Thậm chí, đồ họa của CryptoZoon và DinoX còn đơn giản hơn
                      rất nhiều và cả hai trò chơi mới có bản web chứ chưa có
                      phiên bản cho Android hay iOS.
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      My Neighbor Alice là dự án <strong>game</strong>{" "}
                      blockchain khá nổi tiếng vì liên tục lùi ngày phát hành dù
                      đã cung ứng 21 triệu đồng Alice ra thị trường.
                    </p>

                    <p>
                      Nổi tiếng nhất trong số các dự án <strong>game</strong>{" "}
                      blockchain phải kể đến My Neighbor Alice (Alice), một game
                      nông trại lấy cảm hứng từ dòng game nổi tiếng Animal
                      Crossing của Nintendo. Ở thời điểm mở bán hồi tháng 3,
                      đồng Alice từng lập đỉnh 30 USD với khối lượng giao dịch
                      đạt gần 2 tỷ USD.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-1-1627971134708200073551.jpg"
                      alt="2, AXIE INFINITY,GAME,NFT,"
                      note=""
                    />
                    <p>
                      Nhưng nhà phát triển lại liên tục trì hoãn ngày ra mắt
                      trên Steam và gần đây mới mở tạm phiên bản web nuôi cây để
                      ăn theo trào lưu chơi <strong>game</strong> kiếm ra tiền.
                      Alice hiện có giá 13 USD với vốn hóa 285 triệu USD.
                    </p>
                    <p>
                      Nhìn chung, rủi ro với các dự án tiền ảo đã công bố và mở
                      bán sớm nhưng chưa có sản phẩm là khá rõ ràng. Chưa kể
                      việc chạy theo trào lưu (trend) còn hàm chứa rủi ro cao
                      cho chính nhà phát triển dự án đó. Nhà đầu tư vì vậy cần
                      thận trọng và tìm hiểu kỹ càng các dự án để đánh giá đúng
                      tiềm năng cũng như cơ hội phát triển.
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
