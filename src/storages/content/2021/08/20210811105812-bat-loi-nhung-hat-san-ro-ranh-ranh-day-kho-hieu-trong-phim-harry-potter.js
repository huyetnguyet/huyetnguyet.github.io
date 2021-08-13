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
"timestamp": '11/08/2021 10:58 AM',
"title": '"Bắt lỗi" những hạt sạn rõ rành rành đầy khó hiểu trong phim Harry Potter',
"description": 'Dù là một bộ phim bom tấn của Hollywood và được làm trong nhiều năm, thế nhưng sai sót của Harry Potter là rất nhiều và rất dễ bị phát hiện ra.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-16286523770431525969444.png',
"alt": 'HARRY POTTER,',
"category": 'news',
"date": '11/08/2021',
"time": '10:58 AM',
"link": '/bat-loi-nhung-hat-san-ro-ranh-ranh-day-kho-hieu-trong-phim-harry-potter',
"zcomponent": 'page_20210811105812',
"filepath": './20210811105812-bat-loi-nhung-hat-san-ro-ranh-ranh-day-kho-hieu-trong-phim-harry-potter.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title =
  '"Bắt lỗi" những hạt sạn rõ rành rành đầy khó hiểu trong phim Harry Potter';
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "11/08/2021 10:58 AM";
const description =
  "Dù là một bộ phim bom tấn của Hollywood và được làm trong nhiều năm, thế nhưng sai sót của Harry Potter là rất nhiều và rất dễ bị phát hiện ra.";
const link =
  "bat-loi-nhung-hat-san-ro-ranh-ranh-day-kho-hieu-trong-phim-harry-potter";
const tagparam = ["HARRY POTTER"];
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

export default function page_20210811105812() {
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
                      {" "}
                      <strong>Harry Potter</strong> là một trong những bộ phim
                      bom tấn dành cho thiếu nhi hay nhất mọi thời đại. Để làm
                      được điều này, đội ngũ Warner Bros. đã tốn rất nhiều chi
                      phí, thời gian và công sức để cậu bé phép thuật lên tới
                      màn ảnh rộng trong suốt 8 phần phim khác nhau. Dù được đầu
                      tư kỹ lưỡng là vậy, thế nhưng Harry Potter vẫn dính những
                      hạt sạn nhỏ không đáng có. Dù sao thì, nó cũng để lại
                      những điều thú vị để người xem có thể thấy thấy được đôi
                      khi làm biên tập phim cũng có lúc sơ sót.
                    </p>
                    <p>
                      Bộ ba Harry - Ron - Hermione đều có "lỗi" thiết kế, khi
                      vết sẹo của Harry thì bị dịch chuyển tức thời, mái tóc
                      xoăn của Hermion thì bị làm thẳng, còn Ron thì nhẹ hơn xíu
                      khi mái tóc được tạo hình sai kiểu.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-16286523770431525969444.png"
                      alt="1, HARRY POTTER,"
                      note=""
                    />

                    <p>
                      Sự cồng kềnh của kỹ xảo đã dẫn đến việc những thiết bị thu
                      âm trên lưng các diễn viên vẫn còn bị lộ nguyên khi lên
                      hình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-1628653383939426389813.jpg"
                      alt="2, HARRY POTTER,"
                      note=""
                    />

                    <p>Ơ kìa, máu đi đâu mất rồi thế Harry.</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-16286534408191736209564.jpg"
                      alt="3, HARRY POTTER,"
                      note=""
                    />

                    <p>
                      Nếu ai còn nhớ thì giáo sư Quirrell trong tập đầu tiên vốn
                      có mái đầu hói, nhưng đội ngũ hóa trang lại sơ suất điều
                      này.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/11/photo-3-16286492752301458142051.jpg"
                      alt="4, HARRY POTTER,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Chiếc xe trở hàng của Ron đã được thay đổi hoàn toàn mà ít
                      ai để ý.{" "}
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-16286533426081079933029.jpg"
                      alt="5, HARRY POTTER,"
                      note=""
                    />
                    <p>
                      Sai sót đến từ đội ngũ quay phim khi bỗng nhiên lạc đâu ra
                      một anh chàng quay phim lọt vào khung hình, thế nhưng đội
                      ngũ dựng cũng không bỏ đi.{" "}
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/11/photo-4-16286492752841824110696.jpg"
                      alt="6, HARRY POTTER,"
                      note=""
                    />
                    <p>
                      Lộ rõ cả dây bảo hiểm để cưỡi chổi đi đánh Quidditch của
                      cậu bé Harry ngày nào này.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-1628653514704262763734.jpg"
                      alt="7, HARRY POTTER,"
                      note=""
                    />
                    <p>
                      Hình như cuốn sách cũng muốn hóng chuyện của Harry và
                      Hermione nên quyết định mở ra.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-16286534720781921257521.jpg"
                      alt="8, HARRY POTTER,"
                      note=""
                    />

                    <p>
                      Bà Lily trước lúc lâm chung cũng đã kịp đổi áo để lên hình
                      cho đẹp.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/11/photo-5-1628649275382515669488.jpg"
                      alt="9, HARRY POTTER,"
                      note=""
                    />
                    <p>
                      Tương tự là với Harry, cậu chàng cũng bị mặc lỗi đổi áo
                      trong 2 cảnh kế tiếp nhau.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-16286533330391049509354.jpg"
                      alt="10, HARRY POTTER,"
                      note=""
                    />

                    <p>
                      {" "}
                      Chiếc thìa kỳ lạ lúc có lúc không xuất hiện trên tách trà
                      của giáo sư Umbridge.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/11/photo-7-1628649275410602077536.jpg"
                      alt="11, HARRY POTTER,"
                      note=""
                    />
                    <p>
                      Không rõ vì sao nhưng đến khúc chuyển cảnh thì Harry lại
                      do ngồi chung với Hermione mà chẳng hề có giải thích gì.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/11/photo-8-16286492754771993542528.jpg"
                      alt="12, HARRY POTTER,"
                      note=""
                    />
                    <p>
                      Nhà Dursley từng có ý định chặn Harry rời khỏi nhà, tuy
                      nhiên chặn thế này thì Harry có đi rồi về họ cũng không
                      biết được.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/11/photo-1-16286527340581144720732.jpg"
                      alt="13, HARRY POTTER,"
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
