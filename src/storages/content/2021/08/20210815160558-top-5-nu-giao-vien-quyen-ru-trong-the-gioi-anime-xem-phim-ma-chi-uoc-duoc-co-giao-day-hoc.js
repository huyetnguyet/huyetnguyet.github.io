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
"timestamp": '15/08/2021 04:05 PM',
"title": 'Top 5 nữ giáo viên quyến rũ trong thế giới anime, xem phim mà chỉ ước được cô giáo dạy học',
"description": 'Cùng điểm qua 5 nữ giáo viên quyến rũ trong thế giới anime mà chúng tôi tổng hợp được nhé!',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/15/hau1-16290102927791420650839.gif',
"alt": 'SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,',
"category": 'games',
"date": '15/08/2021',
"time": '04:05 PM',
"link": '/top-5-nu-giao-vien-quyen-ru-trong-the-gioi-anime-xem-phim-ma-chi-uoc-duoc-co-giao-day-hoc',
"zcomponent": 'page_20210815160558',
"filepath": './20210815160558-top-5-nu-giao-vien-quyen-ru-trong-the-gioi-anime-xem-phim-ma-chi-uoc-duoc-co-giao-day-hoc.js'
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
  "Top 5 nữ giáo viên quyến rũ trong thế giới anime, xem phim mà chỉ ước được cô giáo dạy học";
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "15/08/2021 04:05 PM";
const description =
  "Cùng điểm qua 5 nữ giáo viên quyến rũ trong thế giới anime mà chúng tôi tổng hợp được nhé!";
const link =
  "top-5-nu-giao-vien-quyen-ru-trong-the-gioi-anime-xem-phim-ma-chi-uoc-duoc-co-giao-day-hoc";
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

export default function page_20210815160558() {
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
                    <h5>Shizuka Marikawa (Highschool of the Dead)</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/15/hau1-16290102927791420650839.gif"
                      alt="1, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <p>
                      Chắc không ai quên được bà cô y tá trong bộ anime
                      HighSchool of the Dead - Shizuka Marikawa phải không nào.
                      Được ví như "bò sữa" chính hiệu, cô giáo này đã cùng nhóm
                      học sinh do Takashi dẫn đầu chạy trốn ra khỏi ngôi trường
                      bị Zombie tấn công. Và cô cũng chính là người dẫn cả nhóm
                      đến nhà bạn của mình ở ngoại ô thành phố, nơi có đầy đủ
                      súng ống đạn dược và lương thực đủ cho cả nhóm sử dụng.
                      Ngoài ra cô còn khá hữu dụng với cả nhóm với tính cách "lả
                      lơi" của mình. Không ít lần cô giáo này đã khiến các em
                      học sinh té ngửa với những màn "tấu hài" cực mạnh của
                      mình.
                    </p>
                    <h5>Tearju Lunatique (To Love Ru)</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/hau2-1629010296413325740845.jpg"
                      alt="2, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <p>
                      Tearju Lunatique là người tạo ra Yami (Golden Darkness) và
                      Kurosaki Mea trong anime To Love Ru. Tearju Lunatique đã
                      sử dụng tế bào của chính mình để tạo ra Yami nhưng không
                      làm điều tương tự với Mea. Cô là một thiên tài trong công
                      nghệ sinh học vũ trụ từ khi còn nhỏ. Trong anime To Love
                      Ru, Tearju Lunatique đóng vai một giáo viên chủ nhiệm xinh
                      đẹp tại trường mà Rito theo học. Ngoại hình xinh đẹp cộng
                      thêm đức tính tuyệt vời là những điều tạo nên sức hấp dẫn
                      của nhân vật này.
                    </p>
                    <h5>Irina Jelavi (Assassination Classroom)</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/hau3-16290103011632025900797.jpg"
                      alt="3, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <p>
                      Irina Jelavi là giáo viên tiếng Anh của lớp 3-E trường
                      trung học cơ sở Kunugigaoka nổi tiếng trong anime
                      Assassination Classroom. Cô thực chất là một sát thủ
                      chuyên nghiệp được chính phủ thuê để ám sát Korosensei.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Irina là một cô gái trẻ cao ráo và xinh đẹp. Cô có nước da
                      trắng, đôi mắt màu xanh nước biển và mái tóc vàng lượn
                      sóng dài đến ngang eo. Sở hữu vòng ngực lớn và thân hình
                      với những đường cong gợi cảm, cô có thể quyến rũ và lợi
                      dụng mục tiêu ám sát của mình để đạt được mục đích. Cô
                      thường mặc những bộ đồ hàng hiệu và thời thượng, làm nổi
                      bật vẻ ngoài của mình. Cũng vì thế, Karasuma hay khiển
                      trách cô vì ăn mặc không phù hợp với 1 giáo viên.
                    </p>
                    <h5>Rito Tsukimi (Absolute Duo)</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/15/hau4-1629010307161802572913.gif"
                      alt="4, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <p>
                      Rito Tsukimi là giáo viên chủ nhiệm của Tooru và Julie ở
                      học viện Kouryou trong anime Absolute Duo. Cô vừa tốt
                      nghiệp học viện Kouryou, sau đó trở thành giáo viên. Rito
                      Tsukimi biết tất cả bí mật và cũng là người quen của
                      Sakuya Tsukumo, hiệu trưởng của học viện Kouryou. Nữ giáo
                      viên xinh đẹp này đã tạo ra vô vàn tiếng cười đầy giải trí
                      với những trò đùa bá đạo của mình.
                    </p>
                    <h5>Sakie Satou (Interview with Monster Girls)</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/15/hau5-1629010311722769675328.gif"
                      alt="5, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />
                    <p>
                      Sakie Satou là một succubus (yêu nữ mê hoặc đàn ông). Cô
                      là giáo viên dạy toán nổi tiếng trong anime Interview with
                      Monster Girls. Vì cơ thể Sakie có thể tiết ra chất kích
                      thích người khác, cô thường phải rất cẩn thận để tránh
                      tiếp xúc đàn ông và con trai. Nên cô luôn ăn mặc rất kín
                      đáo và bắt chuyến tàu buổi sớm để đi làm. Thế nhưng nhờ
                      khả năng đặc biệt của mình mà Sakie Satou không ít lần
                      khiến khán giả phải cười điên đảo với những rắc rối xung
                      quanh cuộc sống của một nữ giáo viên có sức hút kỳ lạ với
                      đàn ông.
                    </p>
                    <p>
                      Trên đây là top 5 nữ giáo viên quyến rũ nhất trong thế
                      giới anime, cái tên nào khiến bạn ấn tượng nhất? Hãy để
                      lại ý kiến của mình về vấn đề này nhé!
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
