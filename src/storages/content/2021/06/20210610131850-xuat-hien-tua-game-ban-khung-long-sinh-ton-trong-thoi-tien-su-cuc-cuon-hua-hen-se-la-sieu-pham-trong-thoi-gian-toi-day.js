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
"timestamp": '10/06/2021 01:18 PM',
"title": 'Xuất hiện tựa game bắn khủng long, sinh tồn trong thời tiền sử cực cuốn, hứa hẹn sẽ là siêu phẩm trong thời gian tới đây',
"description": 'Mặc dù mới đang ở bước Early Access, thế nhưng tựa game này đã nhận được rất nhiều những bình luận tích cực.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/photo-1-1623147814364791725203.jpg',
"alt": 'Game, Game Thu, Tin Tuc Game, Second Exhibition, ',
"category": 'games',
"date": '10/06/2021',
"time": '01:18 PM',
"link": '/xuat-hien-tua-game-ban-khung-long-sinh-ton-trong-thoi-tien-su-cuc-cuon-hua-hen-se-la-sieu-pham-trong-thoi-gian-toi-day',
"zcomponent": 'page_20210610131850',
"filepath": './20210610131850-xuat-hien-tua-game-ban-khung-long-sinh-ton-trong-thoi-tien-su-cuc-cuon-hua-hen-se-la-sieu-pham-trong-thoi-gian-toi-day.js'
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
  "Xuất hiện tựa game bắn khủng long, sinh tồn trong thời tiền sử cực cuốn, hứa hẹn sẽ là siêu phẩm trong thời gian tới đây";
const author = "Mặt Trứng";
const source = "Trí Thức Trẻ";
const timestamp = "10/06/2021 01:18 PM";
const description =
  "Mặc dù mới đang ở bước Early Access, thế nhưng tựa game này đã nhận được rất nhiều những bình luận tích cực.";
const link =
  "xuat-hien-tua-game-ban-khung-long-sinh-ton-trong-thoi-tien-su-cuc-cuon-hua-hen-se-la-sieu-pham-trong-thoi-gian-toi-day";
const tagparam = ["game", "game-thu", "tin-tuc-game", "second-exhibition"];
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

export default function page_20210610131850() {
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
                    Trải qua một năm đầy biến động với những ảnh hưởng to lớn từ
                    dịch bệnh, thời gian gần đây, ngành <strong>game</strong>{" "}
                    thế giới cũng dần dần xuất hiện những tín hiệu tích cực.
                    Liên tục là những siêu phẩm mới ấp ủ thời gian ra mắt. Có
                    thể kể tới những cái tên như Naraka: Bladepoint - tựa game
                    được ví như PUBG phiên bản kiếm hiệp và mới đây nhất, thêm
                    một game FPS thế giới mở mang phong cách cực kỳ mới lạ hứa
                    hẹn sẽ vươn tầm siêu phẩm dành cho các game thủ, đó chính là{" "}
                    <strong>Second Exhibition</strong>.
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/220a1ff0-9875-4f09-b141-9e15a690ef66-1623147080486210058483.jpg"
                    alt="Game, Game Thu, Tin Tuc Game, Second Exhibition, "
                    note="Second Exhibition - tựa game thế giới mở đang nhận được rất nhiều những phản hồi tích cực"
                  />
                  <p>
                    Về cơ bản, <strong>Second Exhibition</strong> vẫn là một tựa{" "}
                    <strong>game</strong> thuần FPS nhưng có pha lẫn yếu tố RPG
                    một cách nhẹ nhàng, và các game thủ hoàn toàn có thể lựa
                    chọn phương án chơi solo hoặc với tổ đội ba người. Lấy bối
                    cảnh thời kỳ tương lai, khi loài khủng long đã đột biến và
                    chiếm lấy trái đất, các game thủ sẽ phải vào vai một biệt
                    đội lính đánh thuê với sứ mệnh cao cả là tiêu diệt loài động
                    vật hoang dã này, giành lại sự kiểm soát hành tinh. Trong
                    Second Exhibition, mỗi nhân vật sẽ có một khả năng riêng
                    biệt và mang theo cho mình hai vũ khí chính để bắt đầu hành
                    trình phiêu lưu thế giới mở đầy lý thú này.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/photo-1-1623147666541195230770.jpg"
                    alt="Game, Game Thu, Tin Tuc Game, Second Exhibition, "
                    note="Tựa game lấy bối cảnh thời kỳ tương lai, khi trái Đất đã bị xâm chiếm bởi khủng long"
                  />
                  <p>
                    Yếu tố RPG được thể hiện ở chỗ sau mỗi lần tiêu diệt khủng
                    long, người chơi sẽ nhận được một chút vàng và XP - thứ dùng
                    để nâng cấp súng cũng như mở khóa các kỹ năng mới. Tuy
                    nhiên, yếu tố sinh tồn cũng được đề cao, khi nên nhớ, lượng
                    súng ống đạn dược không phải là vô tận và chẳng phải ở đâu
                    cũng có những trại tiếp tế sẵn sàng cho người chơi. Thậm
                    chí, với yếu tố trực tuyến thường trực, ngay cả khi muốn cắm
                    máy đi vệ sinh, người chơi cũng phải tìm một chỗ trốn kỹ
                    lưỡng để ẩn giấu nhân vật của mình, tránh đi sự tấn công từ
                    những con khủng long hung hãn.
                  </p>
                  <p>
                    Mặc dù chỉ mới ra mắt phiên bản chơi trước Early Access, thế
                    nhưng tính tới thời điểm hiện tại,{" "}
                    <strong>Second Exhibition</strong> vẫn đang nhận được vô số
                    những đánh giá tích cực từ phía cộng đồng{" "}
                    <strong>game</strong> thủ trên thế giới. Dựa theo một số
                    nguồn tin, trò chơi này sẽ chính thức phát hành trên đa nền
                    tảng, chậm nhất là vào cuối năm nay với những sự tăng tiến
                    và đa dạng hóa các loại khủng long, kỹ năng và cả súng ống.
                  </p>
                  <p>
                    Cũng theo một số nguồn tin,{" "}
                    <strong>Second Exhibition</strong> hoàn toàn không được gắn
                    thẻ Free to Play. Thế nên, khả năng lớn là các{" "}
                    <strong>game</strong> thủ sẽ phải chi trả một số tiền để có
                    thể sở hữu tựa game được đánh giá là siêu phẩm đầy tiềm năng
                    này đấy.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/photo-1-1623147814364791725203.jpg"
                    alt="Game, Game Thu, Tin Tuc Game, Second Exhibition, "
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/photo-1-1623147917874892296806.jpg"
                    alt="Game, Game Thu, Tin Tuc Game, Second Exhibition, "
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/photo-1-1623147965688500406874.png"
                    alt="Game, Game Thu, Tin Tuc Game, Second Exhibition, "
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
