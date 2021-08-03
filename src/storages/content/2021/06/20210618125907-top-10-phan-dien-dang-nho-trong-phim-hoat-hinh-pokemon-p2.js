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
"timestamp": '18/06/2021 12:59 PM',
"title": 'Top 10 phản diện đáng nhớ trong phim hoạt hình Pokémon (P.2)',
"description": 'Trong anime, rất nhiều nhân vật phản diện tỏa sáng hơn so với những gì chúng được thể hiện trong game.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/photo-1-1624034373653677183133.jpg',
"alt": 'POKÉMON,PHẢN DIỆN,',
"category": 'games',
"date": '18/06/2021',
"time": '12:59 PM',
"link": '/top-10-phan-dien-dang-nho-trong-phim-hoat-hinh-pokemon-p2',
"zcomponent": 'page_20210618125907',
"filepath": './20210618125907-top-10-phan-dien-dang-nho-trong-phim-hoat-hinh-pokemon-p2.js'
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
const title = "Top 10 phản diện đáng nhớ trong phim hoạt hình Pokémon (P.2)";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "18/06/2021 12:59 PM";
const description =
  "Trong anime, rất nhiều nhân vật phản diện tỏa sáng hơn so với những gì chúng được thể hiện trong game.";
const link = "top-10-phan-dien-dang-nho-trong-phim-hoat-hinh-pokemon-p2";
const tagparam = ["POKÉMON", "PHẢN DIỆN"];
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

export default function page_20210618125907() {
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
                    <h3>6. Lusamine</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/photo-1-1624034373653677183133.jpg"
                      alt="1, POKÉMON,PHẢN DIỆN,"
                      note=""
                    />
                    <p>
                      {" "}
                      Lusamine cũng là một nhân vật ở trong game khác xa với
                      trong anime. Trong trò chơi, không khó để nhận ra cô là
                      một trong những người mẹ tệ hại nhất, còn với anime, cô
                      lại chỉ là một kẻ quá quan tâm đến công việc và{" "}
                      <strong>Pokémon</strong> mà thôi.{" "}
                    </p>
                    <p>
                      Trong cả 2 phiên bản, cô đều là chủ tịch của quỹ Aether và
                      đều rất quan tâm tới Ultra Beasts. Nếu như trong game, mục
                      tiêu của cô ta là trở nên mạnh mẽ hơn nhờ sức mạnh của
                      Ultra Beasts, còn trong anime thì đơn giản là để bảo vệ 2
                      đứa con của mình, Lillie và Gladion.
                    </p>
                    <h3>7. Giovanni</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/photo-1-1624034378195417660070.jpg"
                      alt="2, POKÉMON,PHẢN DIỆN,"
                      note=""
                    />
                    <p>
                      Giovanni chắc chắn là một trong những{" "}
                      <strong>phản diện</strong> nổi tiếng nhất của{" "}
                      <strong>Pokémon</strong>. Ông ta không chỉ là phản diện
                      quyền lực, mà còn là chủ sở hữu team Rocket, một kẻ tội
                      phạm xấu xa và luôn muốn cướp nhiều Pokémon nhất có thể.
                      Ông ta cũng rất điềm tĩnh và có rất nhiều niềm tin cho cấp
                      dưới, kể cả những kẻ vô dụng như Jessie, James và Meowth.
                      Vì việc xuất hiện trong quá nhiều phần khác nhau của
                      Pokémon, Giovanni cũng từ kẻ bị ghét trở nên được yêu
                      thích với nhiều người.{" "}
                    </p>
                    <h3>8. Paul</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/photo-1-1624034875579262444577.jpg"
                      alt="3, POKÉMON,PHẢN DIỆN,"
                      note=""
                    />
                    <p>
                      Paul là một trong những đối thủ khó chịu nhất của Ash.
                      Xuất hiện từ phần Diamond & Pearl, Paul khiến cho người
                      xem phải bất ngờ bởi cách đối xử <strong>Pokémon</strong>{" "}
                      đối nghịch hoàn toàn với Ash - cạu ta sẵn sàng cho đi hoặc
                      thả bất cứ Pokémon không đạt được kỳ vọng. Chimchar đã
                      được Paul thả ra và trở thành Infernape dưới bàn tay của
                      Ash sau đó.
                    </p>
                    <p>
                      Trong mắt Paul, <strong>Pokémon</strong> chỉ là một công
                      cụ và không phải bạn đồng hành. Dù vậy, sau khi thất bại
                      trước Brandon, Paul bắt đầu có sự thay đổi trong hướng
                      phát triển nhân vật. Cậu ta không còn nhẫn tâm nữa, mà bắt
                      đầu ứng xử theo hướng con người hơn. Paul không tình cảm,
                      nhưng cũng không đối xử tệ hại với Pokémon - điều khiến
                      cậu ta trưởng thành và được fan của anime Pokémon đánh giá
                      cao về điều này.{" "}
                    </p>
                    <h3>9. Mewtwo</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/photo-1-16240348816371655654383.jpg"
                      alt="4, POKÉMON,PHẢN DIỆN,"
                      note=""
                    />
                    <p>
                      Mewtwo không hẳn là một kẻ xấu. Nó chỉ đơn giản mang thù
                      oán với con người, sau khi bị đối xử giống như một vật thí
                      nghiệm không thương tiếc bởi các nhà khoa học của Team
                      Rocket. Nó sống trong sự cô độc, tự vấn về mục tiêu của
                      bản thân và tự đi tìm câu trả lời sau đó. Trong con mắt
                      của nó, mọi thứ đều được đánh giá theo sức mạnh, chứ không
                      có thứ gì gọi là tình yêu hay sự quan tâm.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Sau sự kiện trong bộ phim, Mewtwo trở thành một "siêu anh
                      hùng" và bảo vệ các <strong>Pokémon</strong>. Mewtwo vẫn
                      đi vòng quanh thế giới, đi tìm mục đích của chúng nó và
                      thỉnh thoảng chạm trán Ash trong cuộc hành trình của cậu.
                      Nó học hỏi được nhiều điều mới mẻ từ chàng huấn luyện viên
                      trẻ tuổi.
                    </p>
                    <h3>10. Jessie, James & Meowth</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/photo-1-1624034887206871546755.jpg"
                      alt="5, POKÉMON,PHẢN DIỆN,"
                      note=""
                    />
                    <p>
                      Đội Rocket là một phần quan trọng của anime, có lẽ chẳng
                      kiếm gì Ash. Nỗi ám ảnh về việc bắt Pikachu đã khiến chúng
                      chạy quanh khắp thế giới để đuổi theo chú chuột điện lông
                      vàng. Sự kém cỏi của chúng khiến cho người xem phải ngạc
                      nhiên và tự hỏi rằng vì sao Giovanni lại có nhiều sự kiên
                      nhẫn đến thế.{" "}
                    </p>
                    <p>
                      Qua nhiều năm, Team Rocket dần dà trở thành một gia đình.
                      Cả nhóm giúp đỡ nhau một cách tích cực, bảo vệ và động
                      viên lẫn nhau. Jessie, James và Meowth có thể không phải
                      là một đám <strong>phản diện</strong> khá nhất, nhưng lại
                      là những nhân vật đáng nhớ nhất của phim hoạt hình{" "}
                      <strong>Pokémon</strong>.
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
