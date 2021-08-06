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
"timestamp": '06/08/2021 09:38 AM',
"title": 'Top 4 trận đấu tay không mãn nhãn nhất trong thế giới anime, hấp dẫn còn hơn cả Dragon Ball',
"description": 'Bốn trận đấu tay không sau đây sẽ mang lại cho các bạn những cảm xúc chân thật hơn trong các bộ anime.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/6/hl1-1628233738698725479211.gif',
"alt": 'SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,',
"category": 'games',
"date": '06/08/2021',
"time": '09:38 AM',
"link": '/top-4-tran-dau-tay-khong-man-nhan-nhat-trong-the-gioi-anime-hap-dan-con-hon-ca-dragon-ball',
"zcomponent": 'page_20210806093855',
"filepath": './20210806093855-top-4-tran-dau-tay-khong-man-nhan-nhat-trong-the-gioi-anime-hap-dan-con-hon-ca-dragon-ball.js'
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
  "Top 4 trận đấu tay không mãn nhãn nhất trong thế giới anime, hấp dẫn còn hơn cả Dragon Ball";
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "06/08/2021 09:38 AM";
const description =
  "Bốn trận đấu tay không sau đây sẽ mang lại cho các bạn những cảm xúc chân thật hơn trong các bộ anime.";
const link =
  "top-4-tran-dau-tay-khong-man-nhan-nhat-trong-the-gioi-anime-hap-dan-con-hon-ca-dragon-ball";
const tagparam = [
  "SHOP ANIME - MANGA",
  "PHONG CÁCH ANIME",
  "TRAILER ANIME",
  "MOVIE ANIME",
  "REVIEW ANIME",
  "ĐÁNH GIÁ ANIME",
  "TV ANIME",
  "MANGA ANIME",
  "TOP ANIME",
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

export default function page_20210806093855() {
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
                    <h5>Luffy đấu Lucci</h5>
                    <p>
                      Nhắc đến những trận đấu tay không nổi tiếng trong anime
                      thì trận chiến giữa Luffy và Lucci là một trong những cuộc
                      đối đầu kinh điển nhất. Trong rất nhiều trận chiến khác
                      Luffy nhận được sự giúp đỡ theo kiểu nhân vật chính Shonen
                      điển hình. Tuy nhiên, trận chiến chống lại Lucci thực sự
                      là một khoảnh khác mà Luffy đã chiến thắng nhờ nỗ lực của
                      bản thân mình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/6/hl1-1628233738698725479211.gif"
                      alt="1, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <p>
                      Dù trải qua nhiều trận chiến khác nhau, nơi mà Haki ngày
                      càng thể hiện được sức mạnh tuy nhiên cho đến bây giờ arc
                      Ennies Lobby vẫn được nhiều fan One Piece yêu thích. Lý do
                      đơn giản là vì tại arc này, chúng ta đã được chứng kiến
                      một trận đánh mãn nhãn giữa Luffy và Lucci, một trận chiến
                      tay không đúng nghĩa. Cuộc chiến này thật tuyệt vời nếu
                      xét về phương diện của một trận chiến tay đôi, những
                      khoảnh khắc và tốc độ chóng mặt cùng những cú đấm mà hai
                      chiến binh ăn miếng trả miếng thật sự ấn tương và giàu cảm
                      xúc.
                    </p>
                    <h5>Sawamura đấu Ippo</h5>
                    <p>
                      Sẽ là thiếu sót nếu chúng ta nói tới những trận chiến tay
                      không mà bỏ quên thương hiệu Hajime no Ippo, cụ thể là
                      trận Sawamura đấu Ippo. Đối với nhiều khán giả thì
                      Sawamura có lẽ là một trong những đối thủ khó khăn nhất mà
                      Ippo phải đối mặt trong toàn bộ anime Hajime no Ippo.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/hl2-16282337434899629291.jpg"
                      alt="2, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <p>
                      Từ tính cách cho đến chiêu thức, cách mà anime Hajime no
                      Ippo đã rất thành công khi xây dựng nhân vật phản diện
                      Sawamura. Ngoài những đòn đôi công mãn nhãn, âm nhạc là
                      thứ khiến nhiều khán giả phấn khích khi theo dõi cuộc
                      chiến này.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>Chiron đấu Achilles</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/hl3-16282337471031062984095.jpg"
                      alt="3, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <p>
                      Có thể nói cảnh tượng chiến đấu của Chiron và Achilles
                      luôn để lại ấn tượng lớn trong lòng khán giả hâm mộ anime.
                      Hai chiến binh trong trận chiến quyết định đã mang lại cho
                      chúng ta một trong những cảnh hay nhất trong anime
                      Fate/Apocrypha. Với mỗi cú đánh mạnh mẽ, người xem bị cuốn
                      vào một cuộc chiến rất nhập vai và ấn tượng. Trận chiến
                      cuối cùng của họ là sự đền đáp xứng đáng cho chuyến hành
                      trình của Achilles vượt qua chính mình.
                    </p>
                    <h5>Kakashi đấu Obito</h5>
                    <p>
                      Đến với anime Naruto, một trong những trận chiến tay không
                      hiếm hoi và cũng ấn tượng nhất đó là cuộc đụng độ giữa
                      Kakashi và Obito. Kakashi và Obito đối đầu là điều không
                      thể tránh khỏi. Tốc độ chóng mặt và những cảm xúc đỉnh
                      điểm là thứ mang lại cho khán giả Naruto những ấn tượng
                      không bao giờ quên.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/hl4-16282337511991754895019.jpg"
                      alt="4, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <p>
                      Kakashi và Obito luôn đối lập nhau. Câu chuyện về hai
                      ninja từng là đồng đội của nhau, họ đã từng cạnh tranh rất
                      nhiều và có những mục tiêu cho riêng mình. Tính cách của
                      họ khác nhau, một người hướng ngoại, tốt bụng, lạc quan và
                      một người nghiêm khắc, tuân thủ các quy tắc. Tuy nhiên cả
                      hai đều thừa nhận sức mạnh của nhau và chiến đấu cho niềm
                      kiêu hãnh của riêng mình. Cho đến thời điểm hiện tại cuộc
                      đụng độ giữa Kakashi và Obito luôn mang lại nhiều xúc cảm
                      nhất cho fan anime Naruto.
                    </p>
                    <p>
                      Trên đây là top 4 trận đấu tay không mãn nhãn nhất trong
                      thế giới anime, hấp dẫn còn hơn cả Dragon Ball. Các bạn
                      yêu thích cặp đấu nào nhất, hãy để lại ý kiến của mình
                      nhé!
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
