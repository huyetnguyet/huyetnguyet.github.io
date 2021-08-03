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
"timestamp": '29/06/2021 09:55 PM',
"title": 'Tìm hiểu vì sao anh chàng đầu trọc Krillin ngày càng "out meta" trong Dragon Ball?',
"description": 'Là một trong những nhân vật xuất hiện lâu đời trong Dragon Ball, tuy nhiên Krillin ngày càng trở nên yếu đuối và "vô dụng".',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/ki1-16247679904461224239578.jpg',
"alt": 'NHÂN VẬT DRAGON BALL,MANGA DRAGON BALL,ANIME DRAGON BALL,KRILLIN,SON GOKU,ANDROID 18,',
"category": 'games',
"date": '29/06/2021',
"time": '09:55 PM',
"link": '/tim-hieu-vi-sao-anh-chang-dau-troc-krillin-ngay-cang-out-meta-trong-dragon-ball',
"zcomponent": 'page_20210629215515',
"filepath": './20210629215515-tim-hieu-vi-sao-anh-chang-dau-troc-krillin-ngay-cang-out-meta-trong-dragon-ball.js'
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
  'Tìm hiểu vì sao anh chàng đầu trọc Krillin ngày càng "out meta" trong Dragon Ball?';
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "29/06/2021 09:55 PM";
const description =
  'Là một trong những nhân vật xuất hiện lâu đời trong Dragon Ball, tuy nhiên Krillin ngày càng trở nên yếu đuối và "vô dụng".';
const link =
  "tim-hieu-vi-sao-anh-chang-dau-troc-krillin-ngay-cang-out-meta-trong-dragon-ball";
const tagparam = [
  "NHÂN VẬT DRAGON BALL",
  "MANGA DRAGON BALL",
  "ANIME DRAGON BALL",
  "KRILLIN",
  "SON GOKU",
  "ANDROID 18",
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

export default function page_20210629215515() {
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
                      Là một trong những nhân vật đã quá quen mặt với các fan
                      của Dragon Ball trong nhiều năm qua,{" "}
                      <strong>Krillin</strong> chính là người bạn thân nhất của{" "}
                      <strong>Son Goku</strong>. Ban đầu Krillin là nhân vật tài
                      có kỹ năng chiến đấu khá tốt và là một chiến binh dũng
                      cảm. Tuy nhiên càng về sau, Krillin ngày càng "out meta"
                      trong Dragon Ball.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/ki1-16247679904461224239578.jpg"
                      alt="1, NHÂN VẬT DRAGON BALL,MANGA DRAGON BALL,ANIME DRAGON BALL,KRILLIN,SON GOKU,ANDROID 18,"
                      note=""
                    />
                    <p>
                      Lý do đầu tiên khiến sức mạnh của <strong>Krillin</strong>{" "}
                      bị tụt lại so với các chiến binh khác là vì anh không tập
                      luyện và không đầu tư thời gian cho việc này. Thay vì cùng
                      với vợ của mình là <strong>Android 18</strong> tập luyện
                      thì Krillin lại chọn cách nghỉ ngơi và đầu tư nhiều hơn
                      cho gia đình. Có thể nói rằng sức mạnh của Android 18 đã
                      vượt qua Krillin kể từ khi cô xuất hiện lần đầu tiên.
                      Không biết có phải vì xấu hổ hay không tuy nhiên Krillin
                      lại hiếm khi cho vợ của mình là Android 18 tham gia vào
                      những trận chiến để giúp đỡ mình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/ki2-16247679940351592536731.jpg"
                      alt="2, NHÂN VẬT DRAGON BALL,MANGA DRAGON BALL,ANIME DRAGON BALL,KRILLIN,SON GOKU,ANDROID 18,"
                      note=""
                    />
                    <p>
                      Cũng giống như nhiều người khác, <strong>Krillin</strong>{" "}
                      là người biết sử dụng Ma Phong Ba. Kỹ thuật này đã được
                      các nhân vật sử dụng nhiều lần để phong ấn những kẻ thù
                      mạnh hơn mình, ví dụ như khi Master Roshi tạm thời phong
                      ấn đối thủ của mình tại Giải Đấu Sức Mạnh. Tuy nhiên không
                      hiểu vì sao Krillin ngày càng không quan tâm lắm tới việc
                      phát triển kỹ thuật này.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Một khoảnh khắc quan trọng đối với{" "}
                      <strong>Krillin</strong> trên hành tinh Namek là gặp được
                      Guru, người tạo ra Porunga. Bằng cách đặt tay lên đầu
                      Krillin, ông đã giải phóng sức mạnh tiềm ẩn của anh, khiến
                      cho Krillin mạnh hơn trước gấp nhiều lần. Sau thời điểm
                      ấy, nếu Krillin tiếp tục luyện tập, có khả năng anh sẽ
                      khiến sức mạnh của mình tiếp tục tăng lên vượt trội. Muốn
                      có được điều này thì Krillin cần phải nhờ Old Kai mở khóa
                      khả năng tiềm ẩn. Điều này rất tốt, vì ông có thể làm cho
                      sức mạnh của một người thậm chí còn vượt qua cả giới hạn
                      bình thường, Old Kai sẽ giúp cho Krillin sở hữu một sức
                      mạnh mới mà anh chưa từng thử qua. Thế nhưng Krillin lại
                      không quan tâm điều này và ngày càng thụt lùi trong Dragon
                      Ball.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/27/ki3-16247680259331077625643.jpg"
                      alt="3, NHÂN VẬT DRAGON BALL,MANGA DRAGON BALL,ANIME DRAGON BALL,KRILLIN,SON GOKU,ANDROID 18,"
                      note=""
                    />
                    <p>
                      Hiện tại thì <strong>Krillin</strong> chỉ đóng vai trò là
                      người hỗ trợ bằng cách xuất hiện đúng lúc Goku đang bị
                      thương, cho bạn của mình ăn đậu thần và chờ đợi vào màn
                      "cân team" của Goku. Các bạn thấy sao về việc Krillin ngày
                      càng "out meta" trong Dragon Ball? Hãy để lại ý kiến của
                      mình nhé!
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
