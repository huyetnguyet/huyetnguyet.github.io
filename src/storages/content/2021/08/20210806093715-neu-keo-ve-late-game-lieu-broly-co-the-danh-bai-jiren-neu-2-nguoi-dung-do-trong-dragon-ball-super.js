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
"timestamp": '06/08/2021 09:37 AM',
"title": 'Nếu kéo về "late game" liệu Broly có thể đánh bại Jiren nếu 2 người đụng độ trong Dragon Ball Super?',
"description": 'Đó là câu hỏi mà nhiều fan của Dragon Ball Super quan tâm khi mà Broly và Jiren đều là những chiến binh rất mạnh.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/ku2-1628161887430142217655.jpg',
"alt": 'ANIME DRAGON BALL SUPER,MANGA DRAGON BALL SUPER,MOVIE DRAGON BALL SUPER: BROLY,MANGA DRAGON BALL SUPER,SON GOKU,HỢP THỂ GOGETA,ANIME DRAGON BALL SUPER: BROLY,GOKU VS JIREN,JIREN VS BROLY,',
"category": 'games',
"date": '06/08/2021',
"time": '09:37 AM',
"link": '/neu-keo-ve-late-game-lieu-broly-co-the-danh-bai-jiren-neu-2-nguoi-dung-do-trong-dragon-ball-super',
"zcomponent": 'page_20210806093715',
"filepath": './20210806093715-neu-keo-ve-late-game-lieu-broly-co-the-danh-bai-jiren-neu-2-nguoi-dung-do-trong-dragon-ball-super.js'
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
  'Nếu kéo về "late game" liệu Broly có thể đánh bại Jiren nếu 2 người đụng độ trong Dragon Ball Super?';
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "06/08/2021 09:37 AM";
const description =
  "Đó là câu hỏi mà nhiều fan của Dragon Ball Super quan tâm khi mà Broly và Jiren đều là những chiến binh rất mạnh.";
const link =
  "neu-keo-ve-late-game-lieu-broly-co-the-danh-bai-jiren-neu-2-nguoi-dung-do-trong-dragon-ball-super";
const tagparam = [
  "ANIME DRAGON BALL SUPER",
  "MANGA DRAGON BALL SUPER",
  "MOVIE DRAGON BALL SUPER: BROLY",
  "MANGA DRAGON BALL SUPER",
  "SON GOKU",
  "HỢP THỂ GOGETA",
  "ANIME DRAGON BALL SUPER: BROLY",
  "GOKU VS JIREN",
  "JIREN VS BROLY",
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

export default function page_20210806093715() {
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
                      Một trong những nhân vật mới xuất hiện trong series Dragon
                      Ball Super để lại nhiều ấn tượng cho khán giả đó chính là
                      Jiren. Không chỉ nổi bật về tạo hình, tính cách mà bộ
                      chiêu thức của Jiren cũng hết sức ấn tượng. Nếu anh sử
                      dụng toàn bộ sức mạnh, nhân vật duy nhất có thể đánh thắng
                      Jiren là Goku với Bản Năng Vô Cực hoàn hảo.
                    </p>
                    <p>
                      Trong khi đó thì Broly là một trong những người Saiyan
                      mạnh nhất của vũ trụ 7. Broly mạnh đến mức Goku và Vegeta
                      phải hợp thể thành Gogeta mới có thể đánh bại được Broly.
                      Chính vì điều này mà nhiều khán giả đặt ra giả thuyết
                      rằng, điều gì sẽ xảy ra nếu cả hai nhân vật này đối đầu
                      với nhau?
                    </p>
                    <p>
                      Đầu tiên chúng ta sẽ đặt trường hợp Broly phải chiến đấu
                      với Jiren trong Giải Đấu Sức Mạnh, ở thời điểm đó rất có
                      thể Jiren sẽ là người giành chiến thắng. Lý do là vì thời
                      điểm đó Broly cũng giống như Super Saiyan Kale không thể
                      kiểm soát được bản thân khi nổi cơn thịnh nộ. Điều này đã
                      được thể hiện trong phần movie, Broly đã hủy diệt cả chiến
                      trường nhưng nếu anh làm điều này tại Giải Đấu Sức Mạnh sẽ
                      khiến sàn đấu bị sụp đổ, Jiren có thể tận dụng điều này và
                      loại Broly ra khỏi giải đấu.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/ku2-1628161887430142217655.jpg"
                      alt="1, ANIME DRAGON BALL SUPER,MANGA DRAGON BALL SUPER,MOVIE DRAGON BALL SUPER: BROLY,MANGA DRAGON BALL SUPER,SON GOKU,HỢP THỂ GOGETA,ANIME DRAGON BALL SUPER: BROLY,GOKU VS JIREN,JIREN VS BROLY,"
                      note=""
                    />
                    <p>
                      Vậy nếu như không phải là Giải Đấu Sức Mạnh thì liệu Broly
                      có đủ sức đánh bại Jiren. Không phủ nhận rằng Broly sở hữu
                      sức mạnh rất khủng khiếp. Giống như Goku, chúng ta cảm
                      nhận được rằng nếu kẻ địch mạnh hơn thì sức mạnh tiềm ẩn
                      của Broly sẽ càng phát huy và còn mạnh hơn cả đối thủ,
                      điều này có thể đảm bảo một chiến thắng cho anh. Tuy
                      nhiên, phải công nhận một điều rằng Broly là một chiến
                      binh thiếu kinh nghiệm chiến đấu. Anh mới chỉ đánh với
                      những nhân vật đáng gờm khi lần đầu đến Trái Đất. Trước
                      đây, đối thủ duy nhất của Broly là cha mình Paragus, người
                      có sức mạnh còn kém xa Broly rất nhiều.
                    </p>
                    <p>
                      Thêm một điểm yếu chí tử nữa đó là Broly dường như bị mất
                      lý trí khi sử dụng nhiều sức mạnh mà Jiren lại rất giỏi
                      trong việc trừng phạt sai lầm của người khác. Trong Giải
                      Đấu Sức Mạnh, Jiren đã hạ gục Kale một cách nhanh chóng và
                      điều này có thể lặp lại khi anh đụng độ một Saiyan điên
                      cuồng khác là Broly. Jiren này dường như là kiểu người
                      thích kết liễu kẻ thù của mình một cách nhanh chóng và gọn
                      gàng. Nếu Broly chưa sẵn sàng cũng như chưa tìm hiểu kỹ
                      đối thủ thì nhiều khả năng anh sẽ bị đánh bại trước khi có
                      thể tăng sức mạnh của mình lên trạng thái Legendary Super
                      Saiyan.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Chính vì vậy, điều quan trọng đặt ra là liệu Broly có đủ
                      sức để kéo trận đấu giữa anh và Jiren về "late game" hay
                      không? Trong{" "}
                      <strong>movie Dragon Ball Super: Broly</strong>, ban đầu
                      Broly chiến đấu với dạng bình thường. Tuy nhiên khi nó
                      không còn đủ sức mạnh để lấn át đối thủ thì anh đã sử dụng
                      sức mạnh của Great Ape (khỉ đột khổng lồ) nhưng lại không
                      bị mất đi ý thức, mặc dù rất khó để kiếm soát. Và khi cơn
                      thịnh nộ lên cao hơn nữa, anh trở thành một Super Saiyan.
                      Ngay cả khi ở trạng thái Super Saiyan, Broly đã rất khủng
                      khiếp rồi. Goku sử dụng Super Saiyan Blue cũng không thể
                      đối phó được Broly. Để rồi sau đó khi đối mặt với kẻ thù
                      mạnh hơn trạng thái Super Saiyan của mình, Broly lại biến
                      đổi sang hình dạng có mái tóc màu xanh lá cây. Từ những
                      dẫn chứng này chứng tỏ rằng giống như các chiến binh
                      Saiyan khác, nếu như Jiren không nhanh chóng đánh bại
                      Broly thì sức mạnh của chiến binh này sẽ khiến Jiren mất
                      kiểm soát.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/ku4-1628161894620481111618.jpg"
                      alt="2, ANIME DRAGON BALL SUPER,MANGA DRAGON BALL SUPER,MOVIE DRAGON BALL SUPER: BROLY,MANGA DRAGON BALL SUPER,SON GOKU,HỢP THỂ GOGETA,ANIME DRAGON BALL SUPER: BROLY,GOKU VS JIREN,JIREN VS BROLY,"
                      note=""
                    />
                    <p>
                      Ở trạng thái Super Saiyan, Broly thực sự mạnh hơn Kale,
                      nhân vật từng bị Jiren hạ gục trong Giải Đấu Sức Mạnh. Nếu
                      Broly đạt đến trạng thái Legendary Super Saiyan, anh thậm
                      chí còn mạnh hơn cả Kefla. Chúng ta hãy nhớ rằng Broly
                      từng đối mặt với Gogeta, người đã sử dụng hình thức Super
                      Saiyan Blue. Gogeta hoàn toàn có thể đánh bại Jiren. Vì
                      vậy, Broly với trạng thái Legendary Super Saiyan có thể có
                      cơ hội chiến thắng Jiren. Điều quan trọng là Broly có thể
                      kéo dài trận đấu và khiến bạn thân của mình mạnh lên hay
                      không. Nói theo cách của các game thủ là Broly ban đầu sẽ
                      gặp bất lợi trước sức mạnh và những đòn tấn công của
                      Jiren, nhưng nếu kéo "late game" thì sức mạnh của một
                      người Saiyan sẽ đủ giúp anh có thể đánh bại được Jiren.
                    </p>
                    <p>
                      Tất nhiên trận chiến này sẽ khó diễn ra trong mạch chính
                      của bộ truyện Dragon Ball Super. Nếu có cuộc chạm mặt giữa
                      Broly và Jiren thì nhiều khả năng nó sẽ là một movie mới
                      sẽ xuất hiện trong tương lai. Các bạn có mong chờ điều này
                      hay không và có đánh giá như thế nào khi Broly và Jiren
                      đụng độ nhau? Hãy để lại ý kiến của mình nhé!
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/ku3-1628161891262698293449.jpg"
                      alt="3, ANIME DRAGON BALL SUPER,MANGA DRAGON BALL SUPER,MOVIE DRAGON BALL SUPER: BROLY,MANGA DRAGON BALL SUPER,SON GOKU,HỢP THỂ GOGETA,ANIME DRAGON BALL SUPER: BROLY,GOKU VS JIREN,JIREN VS BROLY,"
                      note=""
                    />
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
