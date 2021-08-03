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
 title="Hé lộ kết cấu cốt truyện của game thuần Việt 300475"
content="300475 đang trong quá trình phát triển đúng dự kiến." 
src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-1622708652103288680148.jpg" 
alt="300475" 
category="games" 
time="03/06/2021 05:40 PM" 
link="/he-lo-ket-cau-cot-truyen-cua-game-thuan-viet-300475"/>

<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */

const category = "games";
const categoryLink = "/games";

const title = "Hé lộ kết cấu cốt truyện của game thuần Việt 300475";
const author = "Real Madrid";
const source = "Pháp luật và bạn đọc";
const date = "03/06/2021";
const time = "05:40 PM";
const description = "300475 đang trong quá trình phát triển đúng dự kiến.";
const link = "he-lo-ket-cau-cot-truyen-cua-game-thuan-viet-300475";
const tagparam = [
  "game-thuan-viet",
  "du-an-game",
  "hiker-games",
  "300475",
  "mien-nam-viet-nam",
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

export default function page_20210603054034() {
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
                      Như vậy là đã tròn 1 tháng kể từ ngày trò chơi 300475 được
                      Hiker Games tiết lộ, đến nay, dự án game này đã nhận được
                      hơn 700 triệu tiền quyên góp từ cộng đồng. Mặc dù con số
                      hiện tại mới chỉ đạt 3,67% kỳ vọng mà Hiker Games đặt ra,
                      tuy nhiên những tiếng vang lúc đầu có thể coi là bàn đạp
                      lớn để dự án này tiếp tục trong tương lai.
                    </p>
                    <p>
                      {" "}
                      Trong nhật ký tuần 4 dự án 300475, Hiker Games đã tiết lộ
                      một số mẫu thiết kế nhân vật cũng như kết cấu cốt truyện
                      cực kỳ độc đáo của tựa game này. Theo đó, 300475 sẽ không
                      cố xây dựng một kết cấu phức tạp, dễ tạo ra các tình huống
                      khiên cưỡng, phi logic, không tới, "sến sẩm". Nói một cách
                      dễ hiểu hơn là ở mỗi màn chơi của game, người chơi sẽ được
                      trải nghiệm các câu chuyện độc lập và riêng biệt thay vì
                      một cốt truyện xuyên suốt như nhiều trò chơi khác.
                    </p>
                    <p>
                      Từ cách tiếp cận này, Hiker Games cho biết họ đã đã tìm ra
                      một giải pháp rất hợp lý, dùng để kết nối các màn chơi với
                      nhau một cách logic trong game, song song đó vẫn tạo ra ấn
                      tượng mạnh về cảm xúc. Giải pháp này, cũng sẽ giúp cho
                      game trở nên dễ "tiếp cận" hơn với đa số công chúng, vốn
                      dĩ vẫn có rất nhiều người còn "kỳ thị" game. Một điểm cộng
                      nữa của giải pháp này, là nó sẽ giúp cho việc mở rộng game
                      về sau rất thuận lợi.
                    </p>
                    <p>
                      Những hình ảnh mới nhất về chiến sỹ Mặt trận Dân tộc Giải
                      phóng Miền Nam Việt Nam.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-1622708652103288680148.jpg"
                      alt="300475"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-1622708604530338962332.jpg"
                      alt="300475"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-16227086068371358550262.jpg"
                      alt="300475"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-2-1622708607348321213813.png"
                      alt="300475"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/3/photo-3-1622708608377999668974.png"
                      alt="300475"
                      note=""
                    />
                    <p>Những hình ảnh mới nhất về lính Mỹ</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-4-1622708608892408401291.jpg"
                      alt="300475"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/3/photo-5-16227086078731240337040.png"
                      alt="300475"
                      note=""
                    />
                    <p>
                      Một số mô hình 3D của các phương tiện, sử dụng cho môi
                      trường, bối cảnh
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-6-1622708606856632293887.png"
                      alt="300475"
                      note=""
                    />
                    <p>
                      Theo dự kiến của đội ngũ sản xuất, teaser video của 300475
                      sẽ sớm được ra mắt trong thời gian gần tới đây.
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
