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
"timestamp": '17/06/2021 02:07 PM',
"title": 'Top 7 manga bóng đá giúp bạn giải trí trong thời gian chờ đợi vòng loại World Cup 2022 cuối cùng của đội tuyển Việt Nam',
"description": 'Tiếp bước Tsubasa, Itto, Fantasista vang danh một thời, 7 manga bóng đá sau đây là những siêu phẩm mà các fan của môn thể thao vua không nên bỏ qua trong khi chờ đợi vòng loại World Cup 2022 cuối cùng của đội tuyển Việt Nam.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/ma1-16239080157491600788916.png',
"alt": 'Top Manga, Nhan Vat Manga, Le Hoi Manga, Anime Manga, Shop Manga, Game Manga, Shop Anime Manga, ',
"category": 'games',
"date": '17/06/2021',
"time": '02:07 PM',
"link": '/top-7-manga-bong-da-giup-ban-giai-tri-trong-thoi-gian-cho-doi-vong-loai-world-cup-2022-cuoi-cung-cua-doi-tuyen-viet-nam',
"zcomponent": 'page_20210617140743',
"filepath": './20210617140743-top-7-manga-bong-da-giup-ban-giai-tri-trong-thoi-gian-cho-doi-vong-loai-world-cup-2022-cuoi-cung-cua-doi-tuyen-viet-nam.js'
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
  "Top 7 manga bóng đá giúp bạn giải trí trong thời gian chờ đợi vòng loại World Cup 2022 cuối cùng của đội tuyển Việt Nam";
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "17/06/2021 02:07 PM";
const description =
  "Tiếp bước Tsubasa, Itto, Fantasista vang danh một thời, 7 manga bóng đá sau đây là những siêu phẩm mà các fan của môn thể thao vua không nên bỏ qua trong khi chờ đợi vòng loại World Cup 2022 cuối cùng của đội tuyển Việt Nam.";
const link =
  "top-7-manga-bong-da-giup-ban-giai-tri-trong-thoi-gian-cho-doi-vong-loai-world-cup-2022-cuoi-cung-cua-doi-tuyen-viet-nam";
const tagparam = [
  "top-manga",
  "nhan-vat-manga",
  "le-hoi-manga",
  "anime-manga",
  "shop-manga",
  "game-manga",
  "shop-anime-manga",
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

export default function page_20210617140743() {
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
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <h3>Blue Lock</h3>{" "}
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/ma1-16239080157491600788916.png"
                    alt="1Top Manga, Nhan Vat Manga, Le Hoi Manga, Anime Manga, Shop Manga, Game Manga, Shop Anime Manga, "
                    note=""
                  />
                  <p>
                    Blue Lock là manga nói về công cuộc tìm kiếm tiền đạo xuất
                    sắc nhất. 300 thí sinh tham gia đều là cầu thủ trẻ nổi trội
                    ở các trường trung học. Để là người tồn tại cuối cùng, họ sẽ
                    phải thể hiện khả năng và cạnh tranh với nhau. Người chiến
                    thắng sẽ đưa bóng đá Nhật Bản lên một tầm cao mới.
                  </p>
                  <h3>Ao Ashi</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/ma2-16239080206831998457958.jpg"
                    alt="2Top Manga, Nhan Vat Manga, Le Hoi Manga, Anime Manga, Shop Manga, Game Manga, Shop Anime Manga, "
                    note=""
                  />
                  <p>
                    Nhân vật chính của manga Ao Ashi là cậu học sinh trung học
                    năm 3 Ashito Aoi. Một ngày nọ, cậu được Tatsuya Fukuya - cựu
                    binh đội tuyển J-Club Tokyo City Experion chiêu mộ. Với sự
                    dẫn dắt của Tatsuya, Aoi cùng nhiều tài năng trẻ khác bắt
                    đầu hành trình vươn lên thành đội tuyển mạnh nhất Nhật Bản
                    và chinh phục ước mơ vươn tới đỉnh cao trong bóng đá của
                    mình.
                  </p>
                  <h3>Sayonara Watashi No Cramer</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/ma3-16239080260551490967508.jpg"
                    alt="3Top Manga, Nhan Vat Manga, Le Hoi Manga, Anime Manga, Shop Manga, Game Manga, Shop Anime Manga, "
                    note=""
                  />
                  <p>
                    Sáng tác bởi tác giả của Tháng Tư Là Lời Nói Dối Của Em,
                    Sayonara Watashi No Cramer là manga bóng đá nữ nhẹ nhàng
                    nhưng cực kỳ lôi cuốn đan xen với các tình tiết đầy cảm xúc.
                    Bên cạnh đó những cô nàng cầu thủ bóng đá chân dài và thân
                    hình bốc lửa sẽ là một trong những điều tạo nên sự khác biệt
                    của manga Sayonara Watashi No Cramer.
                  </p>
                  <h3>Area No Kishi</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/ma4-16239080366731408174330.jpg"
                    alt="4Top Manga, Nhan Vat Manga, Le Hoi Manga, Anime Manga, Shop Manga, Game Manga, Shop Anime Manga, "
                    note=""
                  />
                  <p>
                    Area No Kishi là manga nói về Suguru Aizawa, một cầu thủ tài
                    năng, đóng vai trò át chủ bài cho đội tuyển quốc gia Nhật
                    Bản. Trong khi đó, em trai của cậu đồng thời là nhân vật
                    chính của câu chuyện Kakeru Aizawa lại không hề có tài năng
                    gì. Sau khi nhận được cơ hội vượt lên chính mình, Kakeru dấn
                    thân vào con đường cầu thủ chuyên nghiệp và cùng với người
                    anh của mình tạo thành một cặp đôi lợi hại.
                  </p>
                  <h3>Days</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/ma5-16239080430921833434178.jpg"
                    alt="5Top Manga, Nhan Vat Manga, Le Hoi Manga, Anime Manga, Shop Manga, Game Manga, Shop Anime Manga, "
                    note=""
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    Câu chuyện về Tsukushi, một chàng trai yếu ớt bỗng trở thành
                    át chủ bài cho đội bóng trung học nổi tiếng nhất Nhật Bản.
                    Manga Days sẽ mang đến cho độc giả những khát khao về nỗ lực
                    vượt qua chính mình, đồng thời cũng là bài học cho chúng ta
                    rằng đừng bao giờ xem thường người khác.
                  </p>
                  <h3>Mai Ball</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/ma6-1623908051222165717375.jpg"
                    alt="6Top Manga, Nhan Vat Manga, Le Hoi Manga, Anime Manga, Shop Manga, Game Manga, Shop Anime Manga, "
                    note=""
                  />
                  <p>
                    Mai Ball là bộ manga nói về bóng đá nữ với những câu chuyện
                    drama vô cùng hấp dẫn và tạo hình nhân vật vô cùng ecchi.
                    Tuy không mang tính thể thao cao như những cái tên khác
                    trong danh sách này nhưng Mai Ball vẫn là một tác phẩm giải
                    trí rất đáng để độc giả thưởng thức.
                  </p>
                  <h3>Giant Killing</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/ma7-16239080563541285656409.jpg"
                    alt="7Top Manga, Nhan Vat Manga, Le Hoi Manga, Anime Manga, Shop Manga, Game Manga, Shop Anime Manga, "
                    note=""
                  />
                  <p>
                    Giant Killing là bộ manga kể câu chuyện xoay quanh huấn
                    luyện viên Tatsumi Takeshi. Anh lãnh đạo một đội bóng tầm
                    trung không có gì quá nổi bật. Tuy nhiên, nhờ vào tài năng
                    quản lí của mình, Tatsumi đã liên tục đưa đội bóng vượt qua
                    vô số đối thủ nặng kí và chinh phục những nấc thang thành
                    công trong sự nghiệp của mình.
                  </p>
                  <p>
                    Trên đây là top 7 manga bóng đá giúp bạn giải trí trong thời
                    gian chờ đợi vòng loại World Cup 2022 cuối cùng của đội
                    tuyển Việt Nam. Các bạn yêu thích cái tên nào nhất, hãy để
                    lại ý kiến của mình nhé!
                  </p>
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
