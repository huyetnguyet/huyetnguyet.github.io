import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '29/06/2021 09:54 PM',
"title": 'Top 5 tân binh anime hấp dẫn nhất mùa hè 2021, cái tên nào khiến bạn ấn tượng nhất?',
"description": '5 cái tên sau đây được xem là những tân binh anime đáng xem nhất hè 2021.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/and1-16247787631831417625429.jpg',
"alt": 'SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,',
"category": 'games',
"date": '29/06/2021',
"time": '09:54 PM',
"link": '/top-5-tan-binh-anime-hap-dan-nhat-mua-he-2021-cai-ten-nao-khien-ban-an-tuong-nhat',
"zcomponent": 'page_20210629215449',
"filepath": './20210629215449-top-5-tan-binh-anime-hap-dan-nhat-mua-he-2021-cai-ten-nao-khien-ban-an-tuong-nhat.js'
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
  "Top 5 tân binh anime hấp dẫn nhất mùa hè 2021, cái tên nào khiến bạn ấn tượng nhất?";
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "29/06/2021 09:54 PM";
const description =
  "5 cái tên sau đây được xem là những tân binh anime đáng xem nhất hè 2021.";
const link =
  "top-5-tan-binh-anime-hap-dan-nhat-mua-he-2021-cai-ten-nao-khien-ban-an-tuong-nhat";
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

export default function page_20210629215449() {
  return (
    <>
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
                  <h5>Mahouka Koukou No Yuutousei</h5>
                  <p>Lịch công chiếu: 3 tháng 7 năm 2021.</p>
                  <p>Thể loại: Fantasy, khoa học viễn tưởng.</p>
                  <p>Studio: Connect.</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/and1-16247787631831417625429.jpg"
                    alt="1, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                    note=""
                  />
                  <p>
                    Mahouka Koukou No Yuutousei là anime nói về một lớp học sinh
                    mới sắp bắt đầu nhập học tại trường trung học pháp thuật.
                    Mahouka Koukou no Yuutousei sẽ đưa khán giả theo chân Miyuki
                    Shiba, em gái của Tatsuya và khám phá những câu chuyện thú
                    vị trong bộ anime này.
                  </p>
                  <h5>Genjitsu Shugi Yuusha No Oukoku Saikenki</h5>
                  <p>Lịch công chiếu: 4 tháng 7 năm 2021.</p>
                  <p>Thể loại: Fantasy, hành động.</p>
                  <p>Studio: J.C.Staff.</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/and2-16247787696922077843916.png"
                    alt="2, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                    note=""
                  />
                  <p>
                    Genjitsu Shugi Yuusha No Oukoku Saikenki sẽ đưa khán giả
                    theo chân Kazuya Souma, người bất ngờ bị chuyển đến một thế
                    giới khác, nơi mà mọi người đang chờ đợi sự xuất hiện của
                    một anh hùng. Nhưng ý tưởng về chủ nghĩa anh hùng của Souma
                    thực tế hơn nhiều, anh ấy muốn xây dựng lại nền kinh tế đang
                    phát triển mạnh mẽ của vùng đất mới mà anh ấy đã đặt chân
                    đến. Được hứa hôn với công chúa và lên ngôi, anh hùng theo
                    chủ nghĩa hiện thực này phải tập hợp những người tài giỏi để
                    giúp anh ta đưa đất nước trở lại bình thường.
                  </p>
                  <h5>Tantei wa Mou, Shindeiru</h5>
                  <p>Lịch công chiếu: 21h30 ngày 4 tháng 7 năm 2021.</p>
                  <p>Thể loại: Tình cảm, hài hước.</p>
                  <p>Studio: ENGI.</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/and3-1624778774069688144334.jpg"
                    alt="3, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                    note=""
                  />
                  <p>
                    Anime Tantei wa Mou, Shindeiru sẽ đưa chúng ta theo chân một
                    thanh niên đã trở thành trợ thủ của một thám tử được gọi là
                    Siesta trong một vụ tấn công máy bay trên không vào bốn năm
                    trước. Kimihiko và Siesta đã cùng nhau phiêu lưu trong khi
                    chống lại một tổ chức bí mật, nhưng mọi chuyện đã chấm dứt
                    sau cái chết của Siesta. Dù hiện tại, Kimihito đã cố gắng
                    trở lại cuộc sống buồn tẻ, bình thường với tư cách là học
                    sinh trung học, nhưng mọi chuyện không có đơn giản như vậy,
                    cho dù thám tử đã chết.
                  </p>
                  <RelationNewsInPage category={category} />
                  <h5>Heion Sedai no Idaten-tachi</h5>
                  <p>Lịch công chiếu: 0h55 ngày 23 tháng 7 năm 2021.</p>
                  <p>Thể loại: Hành động, phiêu lưu.</p>
                  <p>Studio: MAPPA.</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/and4-1624778789152382858780.jpg"
                    alt="4, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                    note=""
                  />
                  <p>
                    Các vị thần đã xuất hiện khi nhân loại đang trên bờ vực diệt
                    vong bởi những gì mà lũ quỷ đã làm với Trái Đất. Các vị thần
                    đó được gọi là "Idaten" đã chiến đấu và phong ấn lũ quỷ dữ
                    đó cách đây 800 năm. Ngày nay, "Idaten" không có kinh nghiệm
                    chiến đấu và họ đang sống với một cuộc sống bình yên. Nhưng
                    bây giờ, lũ quỷ đó đang hồi sinh và trận chiến giữa thần,
                    người và quỷ sắp bắt đầu.
                  </p>
                  <h5>Bokutachi no Remake</h5>
                  <p>Lịch công chiếu: 22h ngày 3 tháng 7 năm 2021.</p>
                  <p>Thể loại: Hài hước.</p>
                  <p>Studio: asread.</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/and5-16247787946431012535938.jpg"
                    alt="5, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                    note=""
                  />
                  <p>
                    Bokutachi no Remake là anime xoay quanh câu chuyện về Kyouya
                    Hashiba, một nhà lập trình game có sự nghiệp không thành
                    công. Công ty của anh phá sản, buộc anh phải trở về quê
                    sống. Anh nằm trên giường và nghĩ về những người sáng tạo
                    game thành công trong thế hệ của mình. Khi mở mắt ra, Kyouya
                    phát hiện rằng mình đã được quay trở về thời điểm 10 năm
                    trước, khi anh vừa bắt đầu học đại học. Anh có cơ hội làm
                    lại cuộc đời, khởi điểm từ một cậu sinh viên ngành Mĩ thuật,
                    sống trong một căn nhà thuê chung với bốn người. Anh một lần
                    nữa trải qua những năm tháng trưởng thành của mình cùng
                    những người sáng tạo mà anh biết là họ sẽ nổi tiếng trong
                    tương lai. Nhưng mọi thứ có thể sẽ diễn ra không như anh
                    mong đợi.
                  </p>
                  <p>
                    Trên đây là top 5 tân binh anime hấp dẫn nhất mùa hè 2021,
                    cái tên nào khiến bạn ấn tượng nhất? Hãy để lại ý kiến của
                    mình nhé!
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
