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
 <ContentItem
 title="Tải ngay game Turn-Based cực đỉnh Warhammer Quest: Silver Tower, miễn phí 100%"
content="Warhammer Quest: Silver Tower là cái tên không thể bỏ qua với người yêu thích thể loại chiến thuật theo lượt." 
src="https://gamek.mediacdn.vn/133514250583805952/2021/6/3/photo-1-1622716375224530270223.jpg" 
alt="Warhammer Quest Silver Tower" 
category="games" 
time="03/06/2021 05:37 PM" 
link="/tai-ngay-game-turn-based-cuc-dinh-warhammer-quest-silver-tower-mien-phi-100"/>

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
  "Tải ngay game Turn-Based cực đỉnh Warhammer Quest: Silver Tower, miễn phí 100%";
const author = "Real Madrid";
const source = "Pháp luật và bạn đọc";
const date = "03/06/2021";
const time = "05:37 PM";
const description =
  "Warhammer Quest: Silver Tower là cái tên không thể bỏ qua với người yêu thích thể loại chiến thuật theo lượt.";
const link =
  "tai-ngay-game-turn-based-cuc-dinh-warhammer-quest-silver-tower-mien-phi-100";
const tagparam = [
  "warhammer-quest-silver-tower",
  "turn-based",
  "game-mien-phi",
  "steam",
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

export default function page_20210603053727() {
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
              >
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
              <div className="author">{author}</div> - Theo {source} | {date}{" "}
              {time}
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
                      Được chuyển thể từ board game nổi tiếng, Warhammer Quest:
                      Silver Tower là trò chơi chiến thuật theo lượt (Turn-Based
                      Strategy), nơi bạn sẽ điều khiển các vị anh hùng của mình
                      chiến đấu và vượt qua các thử thách.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/3/photo-1-1622716375224530270223.jpg"
                      alt="Warhammer Quest Silver Tower"
                      note=""
                    />
                    <p>
                      Trong mỗi lượt đi, bạn sẽ có 2 lần hành động. Bạn có thể
                      tùy ý dùng chúng để di chuyển, tấn công, phòng ngữ hoặc
                      dùng sức mạnh đặc biệt (khi đã tích đủ năng lượng). Game
                      có nhiều lớp nhân vật khác nhau, từ những chiến binh cận
                      chiến mạnh mẽ (những người đóng vai trò tanker) cho đến
                      cung thủ tầm xa và cả những nhân vật chuyên sử dụng sức
                      mạnh phép thuật.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/3/photo-1-16227163893301846490738.jpg"
                      alt="Warhammer Quest Silver Tower"
                      note=""
                    />
                    <p>
                      Mục tiêu của bạn sẽ thay đổi theo từng thử thách. Không
                      chỉ đơn giản là đánh bại đối thủ, bạn còn phải sinh tồn
                      trong những trận chiến nguy hiểm hoặc chạy đua để hoàn
                      thành các mục tiêu trước khi địch lao về phía bạn như vũ
                      bão.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-1622716423618939240719.jpg"
                      alt="Warhammer Quest Silver Tower"
                      note=""
                    />
                    <p>
                      Trang bị vũ khí quý hiếm và các vật phẩm nâng cấp mạnh mẽ,
                      bạn sẽ sớm chiêu mộ được cả một lực lượng chiến đấu luôn
                      sẵn sàng tham gia mọi thử thách, bao gồm các nhiệm vụ hàng
                      ngày và nhiệm vụ chủ chốt.
                    </p>
                    <p>
                      Với những người yêu thích thể loại chiến thuật theo lượt,
                      Warhammer Quest: Silver Tower là cái tên không thể bỏ qua,
                      nhất là khi tựa game này đang phát hành miễn phí 100% trên
                      Steam.
                    </p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
