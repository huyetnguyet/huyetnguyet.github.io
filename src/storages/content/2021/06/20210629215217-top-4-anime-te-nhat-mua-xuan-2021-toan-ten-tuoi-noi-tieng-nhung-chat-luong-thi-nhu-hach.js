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
"timestamp": '29/06/2021 09:52 PM',
"title": 'Top 4 anime tệ nhất mùa xuân 2021, toàn tên tuổi nổi tiếng nhưng chất lượng thì như hạch',
"description": 'Ngoài những thành công của Tokyo Revengers hay Cạo Râu Xong Tôi Nhặt Gái Về Nhà thì 4 anime sau đây được xem là gây ra thất vọng nhất mùa xuân 2021',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/26/anp1-16246840029101637187802.jpeg',
"alt": 'SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,',
"category": 'games',
"date": '29/06/2021',
"time": '09:52 PM',
"link": '/top-4-anime-te-nhat-mua-xuan-2021-toan-ten-tuoi-noi-tieng-nhung-chat-luong-thi-nhu-hach',
"zcomponent": 'page_20210629215217',
"filepath": './20210629215217-top-4-anime-te-nhat-mua-xuan-2021-toan-ten-tuoi-noi-tieng-nhung-chat-luong-thi-nhu-hach.js'
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
  "Top 4 anime tệ nhất mùa xuân 2021, toàn tên tuổi nổi tiếng nhưng chất lượng thì như hạch";
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "29/06/2021 09:52 PM";
const description =
  "Ngoài những thành công của Tokyo Revengers hay Cạo Râu Xong Tôi Nhặt Gái Về Nhà thì 4 anime sau đây được xem là gây ra thất vọng nhất mùa xuân 2021";
const link =
  "top-4-anime-te-nhat-mua-xuan-2021-toan-ten-tuoi-noi-tieng-nhung-chat-luong-thi-nhu-hach";
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

export default function page_20210629215217() {
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
                  <h5>Edens Zero</h5>
                  <p>Điểm MAL: 6.77.</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/26/anp1-16246840029101637187802.jpeg"
                    alt="1, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                    note=""
                  />
                  <p>
                    Edens Zero là anime chuyển thể từ manga cùng tên của Mashima
                    Hiro, người cũng đã sáng tạo ra thương hiệu Fairy Tail và
                    được thực hiện bởi studio danh tiếng J.C.Staff. Mang đủ các
                    yếu tố cần thiết để trở thành một siêu phẩm anime tuy nhiên
                    Edens Zero lại khiến nhiều fan tức giận vì sự cẩu thả của
                    nhà sản xuất. Nhiều khán giả cho rằng việc chuyển thể đã
                    thay đổi quá nhiều bản gốc, từ cả tạo hình nhân vật cho đến
                    cách dẫn dắt câu chuyện. Một số fan của manga gốc còn lên
                    tiếng rằng Edens Zero là một bộ anime sỉ nhục người xem và
                    phá vỡ nguyên tác tồi tệ nhất trong lịch sử.
                  </p>
                  <p>
                    Dù sở hữu điểm số không quá tệ nhưng với màn thể hiện trong
                    mùa phim vừa rồi tuy nhiên anime Edens Zero sẽ không thể lặp
                    lại thành công mà Fairy Tail từng làm được trong quá khứ.
                  </p>
                  <h5>The World Ends With You The Animation</h5>
                  <p>Điểm MAL: 5.96.</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/26/anp2-1624684006606759015485.jpg"
                    alt="2, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                    note=""
                  />
                  <p>
                    The World Ends With You The Animation là anime chuyển thể từ
                    tựa game cùng tên trên hệ máy Nintendo DS. Về cơ bản, studio
                    Shin-Ei Animation, Domerica đã làm khá tốt khi đưa câu
                    chuyện của game lên phim nhưng điều đó vẫn là chưa đủ để
                    chiều lòng các fan của The World Ends With You. Rốt cuộc,
                    anime chuyển thể từ game không hấp dẫn là do khán giả đặt
                    sai kì vọng hay do bản thân studio vẫn chưa thật sự tạo được
                    sự bứt phá? Trong khi đó thì nhiều game thủ từng chơi The
                    World Ends With You cho rằng bản anime này thực sự đáng thất
                    vọng.
                  </p>
                  <RelationNewsInPage category={category} />
                  <h5>Sayonara Watashi No Cramer</h5>
                  <p>Điểm MAL: 5.74.</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/26/anp3-16246840111722144516333.jpg"
                    alt="3, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                    note=""
                  />
                  <p>
                    Tương tự Edens Zero, Sayonara Watashi No Cramer cũng là một
                    "nồi lẩu anime thập cẩm" gây thất vọng trong mùa anime đầu
                    năm 2021. Tác phẩm là bản chuyển thể từ manga cùng tên của
                    Arakawa Naoshi, tác giả đã viết nên Shigatsu Wa Kimi No Uso
                    - Tháng Tư Là Lời Nói Dối Của Em. Phim cũng được LIDENFILMS,
                    một studio nổi tiếng đã tạo nên không ít siêu phẩm thực
                    hiện. Với nền tảng sẵn có, Sayonara Watashi No Cramer lẽ ra
                    đã nổi tiếng và nhận được nhiều sự yêu thích từ khán giả.
                    Tuy nhiên kết quả cho thấy rằng anime này đã bị không ít
                    khán giả đánh giá là quá kém, ít hấp dẫn hơn bản gốc rất
                    nhiều. Nhiều fan còn cho rằng studio LIDENFILMS đã quá tập
                    trung cho Tokyo Revengers mà bỏ quên Sayonara Watashi No
                    Cramer.
                  </p>
                  <h5>Battle Athletess Daiundoukai ReSTART!</h5>
                  <p>Điểm MAL: 4.94.</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/26/anp4-16246840145371806668065.jpg"
                    alt="4, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                    note=""
                  />
                  <p>
                    Đây là anime có điểm số thấp nhất mùa xuân 2021 trên nền
                    tảng MyAnimeList. Tựa anime gốc này được thực hiện bởi
                    studio Seven và mang thể loại thể thao kết hợp du hành vũ
                    trụ. Về phần hình ảnh, Battle Athletess Daiundoukai ReSTART!
                    có thể nói là ổn. Điểm khiến cho anime này bị nhiều fan ném
                    đá chính là cốt truyện. Phần nội dung của phim khá nửa vời
                    và kém thu hút nên Battle Athletess Daiundoukai ReSTART! bị
                    các fan ghẻ lạnh
                  </p>
                  <p>
                    Trên đây là top 4 anime tệ nhất mùa xuân 2021, toàn tên tuổi
                    nổi tiếng nhưng chất lượng thì như "sỉ nhục" người xem. Các
                    bạn cho rằng tác phẩm nào là tồi tệ nhất, hãy để lại ý kiến
                    của mình nhé!
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
