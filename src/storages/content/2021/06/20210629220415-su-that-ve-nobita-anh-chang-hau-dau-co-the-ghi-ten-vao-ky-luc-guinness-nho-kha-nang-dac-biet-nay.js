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
"timestamp": '29/06/2021 10:04 PM',
"title": 'Sự thật về Nobita: "Anh chàng hậu đậu" có thể ghi tên vào "kỷ lục Guinness" nhờ khả năng đặc biệt này',
"description": 'Có thể bạn không nhận ra, Nobita có một khả năng đặc biệt khiến nhiều người phải kinh ngạc.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/6/25/anh-1-16246037787701447091743.jpg',
"alt": 'NOBITA,DOAREMON,MANGA NHẬT BẢN,SỰ THẬT VỀ NOBITA,',
"category": 'games',
"date": '29/06/2021',
"time": '10:04 PM',
"link": '/su-that-ve-nobita-anh-chang-hau-dau-co-the-ghi-ten-vao-ky-luc-guinness-nho-kha-nang-dac-biet-nay',
"zcomponent": 'page_20210629220415',
"filepath": './20210629220415-su-that-ve-nobita-anh-chang-hau-dau-co-the-ghi-ten-vao-ky-luc-guinness-nho-kha-nang-dac-biet-nay.js'
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
  'Sự thật về Nobita: "Anh chàng hậu đậu" có thể ghi tên vào "kỷ lục Guinness" nhờ khả năng đặc biệt này';
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "29/06/2021 10:04 PM";
const description =
  "Có thể bạn không nhận ra, Nobita có một khả năng đặc biệt khiến nhiều người phải kinh ngạc.";
const link =
  "su-that-ve-nobita-anh-chang-hau-dau-co-the-ghi-ten-vao-ky-luc-guinness-nho-kha-nang-dac-biet-nay";
const tagparam = ["NOBITA", "DOAREMON", "MANGA NHẬT BẢN", "SỰ THẬT VỀ NOBITA"];
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

export default function page_20210629220415() {
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
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    Trong bộ truyện nổi tiếng Doraemon, nhắc tới{" "}
                    <strong>Nobita</strong> là độc giả nhớ ngay tới một cậu bé
                    hậu đầu, lười biếng, hay ỷ lại Doraemon và đặc biệt là học
                    rất dốt. Nổi tiếng với việc "ăn trứng ngỗng" trong các bài
                    kiểm tra, nhưng có thể bạn không ngờ được rằng cậu còn học
                    kém hơn cả tưởng tượng đến mức có thể nhận được cả kỷ lục
                    Guinness.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/25/anh-1-16246037787701447091743.jpg"
                    alt="1, NOBITA,DOAREMON,MANGA NHẬT BẢN,SỰ THẬT VỀ NOBITA,"
                    note=""
                  />
                  <p>
                    Mới đây Rikao Yanagita, một giảng viên tại khoa khoa học và
                    kỹ thuật của Đại học Meiji và là tác giả của bộ sách Phòng
                    thí nghiệm Khoa học trong mơ (The Dream-Science Laboratory),
                    đã tổng hợp lại số lần <strong>Nobita</strong> ăn "trứng
                    ngỗng" trong các bài kiểm tra và chỉ ra cậu học kém đến thế
                    nào.
                  </p>
                  <p>
                    Theo đó thì sau hai ngày cày hết 45 tập truyện tranh
                    Doraemon, Yanagita phát hiện ra rằng những vấn đề xoay quanh
                    chủ đề học tập và việc học kém của <strong>Nobita</strong>{" "}
                    có tổng cộng 170 chương. Đầu tiên là điểm kiểm tra của
                    Nobita được đề cập đến trong 45 tập truyện tổng cộng 43 lần,
                    điều đáng chú ý ở đây là Nobita ăn "trứng ngỗng" trong 26
                    bài kiểm tra, tức là khoảng 60% tổng số bài kiểm tra của cậu
                    đạt được 0 điểm. Điểm 0 đầu tiên của cậu xuất hiện trong Tập
                    2, và từ đó đến Tập 20, Nobita bị điểm 0 trong các bài kiểm
                    tra của mình 7 lần liên tiếp.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/25/anh-2-16246037787881504981237.jpg"
                    alt="2, NOBITA,DOAREMON,MANGA NHẬT BẢN,SỰ THẬT VỀ NOBITA,"
                    note=""
                  />
                  <p>
                    Nhưng đó vẫn không là gì so với chiến tích cực khủng sau
                    đây, mọi chuyện bắt nguồn khi Yanagita để một chi tiết vô
                    cùng thú vị tập phim anime chuyển thể từ chương "Test ni
                    Ankipan" của Doraemon. Theo đó thì <strong>Nobita</strong>{" "}
                    đã trả lời sai liên tục 20 câu liên tiếp trong bài kiểm tra,
                    quan trọng hơn là hai mươi câu đó được làm theo thể thức
                    đúng/sai.
                  </p>
                  <p>
                    Tức là tỷ lệ nằm ở 50%, nhưng với <strong>Nobita</strong>{" "}
                    thì bằng một cách thần kỳ nào đó cậu đã trả lời sai tất cả.
                    Tỷ lệ để một người có thể làm được như Nobita là 1/(2 ^ 40),
                    hoặc cụ thể hơn là 1 trên 1,099,511,627,776.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Đây có thể coi là một con số và thành tích cực kỳ đáng nể
                    khi không phải ai cũng có thể làm được. Quả thật, khả năng
                    trả lời câu hỏi và vận may của <strong>Nobita</strong> khiến
                    người khác không còn gì để nói, nếu như Nobita có mặt ở
                    ngoài đời thật thì không chừng cậu sẽ đạt được kỷ lục
                    Guinness của thế giới với khả năng đặc biệt này.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/25/1-1624592899788112071807.jpg"
                    alt="3, NOBITA,DOAREMON,MANGA NHẬT BẢN,SỰ THẬT VỀ NOBITA,"
                    note=""
                  />
                  <p>
                    Bạn thấy sao về thành tích khủng này của{" "}
                    <strong>Nobita</strong>, nó có thật sự là điểm xấu hay
                    không? Nói chung ngoài việc học kém ra thì Nobita vẫn còn
                    rất nhiều đức tính tốt đẹp khác như thật thà, tốt bụng và
                    luôn hết lòng vì bạn bè. Vì thế chúng ta hãy bỏ qua những
                    điểm thiếu sót của anh chàng hậu đậu này nhé!
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
