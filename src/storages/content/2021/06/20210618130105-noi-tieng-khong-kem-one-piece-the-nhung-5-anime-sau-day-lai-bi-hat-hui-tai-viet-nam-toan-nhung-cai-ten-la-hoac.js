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
"timestamp": '18/06/2021 01:01 PM',
"title": 'Nổi tiếng không kém One Piece thế nhưng 5 anime sau đây lại bị "hắt hủi" tại Việt Nam, toàn những cái tên lạ hoắc',
"description": 'Nổi tiếng không kém gì Pokémon, One Piece, Conan tại đất nước Nhật Bản thế nhưng 5 series anime sau đây lại không được quan tâm tại Việt Nam, thậm chí có những cái tên mà chẳng ai biết đến.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/ani1-16239912086061456127846.jpeg',
"alt": 'SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,ĐÁNH GIÁ ANIME,REVIEW ANIME,TV ANIME,MANGA ANIME,TOP ANIME,',
"category": 'games',
"date": '18/06/2021',
"time": '01:01 PM',
"link": '/noi-tieng-khong-kem-one-piece-the-nhung-5-anime-sau-day-lai-bi-hat-hui-tai-viet-nam-toan-nhung-cai-ten-la-hoac',
"zcomponent": 'page_20210618130105',
"filepath": './20210618130105-noi-tieng-khong-kem-one-piece-the-nhung-5-anime-sau-day-lai-bi-hat-hui-tai-viet-nam-toan-nhung-cai-ten-la-hoac.js'
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
  'Nổi tiếng không kém One Piece thế nhưng 5 anime sau đây lại bị "hắt hủi" tại Việt Nam, toàn những cái tên lạ hoắc';
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "18/06/2021 01:01 PM";
const description =
  "Nổi tiếng không kém gì Pokémon, One Piece, Conan tại đất nước Nhật Bản thế nhưng 5 series anime sau đây lại không được quan tâm tại Việt Nam, thậm chí có những cái tên mà chẳng ai biết đến.";
const link =
  "noi-tieng-khong-kem-one-piece-the-nhung-5-anime-sau-day-lai-bi-hat-hui-tai-viet-nam-toan-nhung-cai-ten-la-hoac";
const tagparam = [
  "SHOP ANIME - MANGA",
  "PHONG CÁCH ANIME",
  "TRAILER ANIME",
  "MOVIE ANIME",
  "ĐÁNH GIÁ ANIME",
  "REVIEW ANIME",
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

export default function page_20210618130105() {
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
                    <p>Digimon</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/ani1-16239912086061456127846.jpeg"
                      alt="1, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,ĐÁNH GIÁ ANIME,REVIEW ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <p>
                      Ra mắt cùng thời với Pokemon, Digimon ban đầu xuất hiện
                      dưới dạng Tamagotchi - hay còn gọi là "thú ảo". Nhận được
                      sự ủng hộ mạnh mẽ của khách hàng, Digimon phát triển thành
                      một chuỗi series anime Digimon Adventure đồng thời mở ra
                      thế giới game Digimon World. Sau hơn 20 năm phát triển,
                      Digimon hiện đã trở thành một trong những thương hiệu đình
                      đám nhất của ngành công nghiệp anime - game tại Nhật Bản.
                    </p>
                    <p>
                      Đầu những năm 2000, Digimon cũng khá thịnh hành tại Việt
                      Nam, nhất là khi các cô bán đồ chơi ở cổng trường nhập về
                      máy nuôi thú ảo. Riêng anime Digimon Adventure cũng được
                      chiếu trên TV và thu hút không ít khán giả hâm mộ. Dù vậy,
                      càng về sau thì Digimon dần "biến mất" khỏi nước ta và chỉ
                      còn một số ít khán giả trung thành theo dõi thương hiệu
                      này mà thôi. Các bạn đã từng theo dõi anime này hay chưa?
                    </p>
                    <p>Love Live</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/ani2-162399121307168934518.jpg"
                      alt="2, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,ĐÁNH GIÁ ANIME,REVIEW ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <p>
                      Love Live là một thương hiệu anime có rất nhiều phiên bản
                      khác nhau đã được tung ra. Câu chuyện chủ yếu xoay quanh
                      các nữ idol đáng yêu và con đường sự nghiệp của họ. Ngoài
                      việc là một anime giải trí, Love Live còn là nơi để các
                      idol, ca sĩ trẻ của Nhật Bản thể hiện tài năng của mình.
                      Cũng chính vì điều này nên anime Love Live rất được yêu
                      thích tại Nhật Bản trong suốt nhiều năm qua. Tại Việt Nam
                      thì chỉ một số ít khán giả am hiểu văn hóa giải trí Nhật
                      Bản mới thật sự yêu thích Love Live.
                    </p>
                    <p>Cowboy Bebop</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/ani3-16239912170751061382468.jpg"
                      alt="3, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,ĐÁNH GIÁ ANIME,REVIEW ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <p>
                      Cowboy Bebop là anime được đánh giá rất cao, không chỉ ở
                      Nhật Bản mà cả ở các nước phương Tây. Hiện tại, Cowboy
                      Bebop đang là anime có điểm số IMDb cao nhất. Tại Việt
                      Nam, Cowboy Bebop đã ra mắt quá lâu và nội dung của phim
                      khá kén người xem nên anime này được khá ít người biết
                      đến.
                    </p>
                    <p>Neon Genesis Evangelion</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/ani6-1623991286207739375735.jpg"
                      alt="4, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,ĐÁNH GIÁ ANIME,REVIEW ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <p>
                      Nhắc đến anime Nhật Bản mà không nhắc đến Neon Genesis
                      Evangelion thì là một thiếu sót nghiêm trọng. Xuất hiện ở
                      thời điểm anime lấy chủ đề robot đang cực kì thịnh hành,
                      Neon Genesis Evangelion đã "thổi bay" tâm trí khán giả
                      toàn thế giới với câu chuyện cực kì sâu sắc và phần hình
                      ảnh đậm chất nghệ thuật.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Năm 2006, Japan Media Art Festival đã xếp hạng Neon
                      Genesis Evangelion là anime nổi tiếng nhất mọi thời đại.
                      Cho đến nay, thương hiệu này vẫn ra mắt các sản phẩm mới
                      và được đón nhận nồng nhiệt tại Nhật Bản. Bất chấp sự nổi
                      tiếng tại Nhật Bản thì tại Việt Nam, Neon Genesis
                      Evangelion cũng có một lượng fan tuy nhiên không đáng kể.
                    </p>
                    <p>Sazae-san</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/ani5-16239912238931831062916.png"
                      alt="5, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,ĐÁNH GIÁ ANIME,REVIEW ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <p>
                      Sazae-san là anime phải nói là "đậm chất Nhật Bản" nhất
                      trong số các anime từng được làm ra. Kéo dài từ năm 1969
                      với hơn 7000 tập phim của Sazae-san đã đồng hành cùng
                      người dân xứ sở hoa anh đào qua mọi thăng trầm lịch sử
                      đồng thời đem lại tiếng cười giải trí không biết bao nhiêu
                      thế hệ tại đất nước này. Vì là một anime rất "Nhật Bản"
                      thế nên Sazae-san chỉ được biết đến như "phim hoạt hình
                      dài tập nhất lịch sử" chứ gần như không có nhiều cơ hội
                      tại các đất nước khác trong đó có Việt Nam.
                    </p>
                    <p>
                      Trên đây là 5 anime nổi tiếng không kém One Piece tại Nhật
                      Bản nhưng lại bị "hắt hủi" tại Việt Nam. Các bạn đã từng
                      xem qua cái tên này trong số 5 tác phẩm mà chúng tôi vừa
                      kể trên hay chưa, hãy để lại ý kiến của mình nhé!
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
