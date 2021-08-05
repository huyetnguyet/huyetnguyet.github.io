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
"timestamp": '04/08/2021 06:59 PM',
"title": 'Pokémon: Câu chuyện đau lòng mà không phải ai cũng biết về quá khứ của Jessie, hot girl Team Rocket',
"description": 'Jessie của Team Rocket nổi tiếng với bản chất mưu mô và hay cạnh tranh, thế nhưng đằng sau đó là cô cũng là một người vô cùng đáng thương.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/3/anh-1-1627986987887728224467.jpg',
"alt": 'POKÉMON,TEAM ROCKET,JESSIE,PIKACHU,QUÁ KHỨ TEAM ROCKET,ANIME NHẬT BẢN,',
"category": 'games',
"date": '04/08/2021',
"time": '06:59 PM',
"link": '/pokemon-cau-chuyen-dau-long-ma-khong-phai-ai-cung-biet-ve-qua-khu-cua-jessie-hot-girl-team-rocket',
"zcomponent": 'page_20210804185900',
"filepath": './20210804185900-pokemon-cau-chuyen-dau-long-ma-khong-phai-ai-cung-biet-ve-qua-khu-cua-jessie-hot-girl-team-rocket.js'
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
  "Pokémon: Câu chuyện đau lòng mà không phải ai cũng biết về quá khứ của Jessie, hot girl Team Rocket";
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "04/08/2021 06:59 PM";
const description =
  "Jessie của Team Rocket nổi tiếng với bản chất mưu mô và hay cạnh tranh, thế nhưng đằng sau đó là cô cũng là một người vô cùng đáng thương.";
const link =
  "pokemon-cau-chuyen-dau-long-ma-khong-phai-ai-cung-biet-ve-qua-khu-cua-jessie-hot-girl-team-rocket";
const tagparam = [
  "POKÉMON",
  "TEAM ROCKET",
  "JESSIE",
  "PIKACHU",
  "QUÁ KHỨ TEAM ROCKET",
  "ANIME NHẬT BẢN",
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

export default function page_20210804185900() {
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
                      Nếu là người thích xem <strong>Pokémon</strong> phiên bản
                      anime, chắc hẳn bạn không lạ gì{" "}
                      <strong>Team Rocket</strong> - những kẻ ngốc nghếch chỉ
                      thích <strong>Pikachu</strong> và luôn tìm cách bắt cóc
                      chú chuột điện lông vàng này. Thế nhưng hầu như tất cả mọi
                      lần thi đấu với Ash, James và <strong>Jessie</strong> đều
                      thất bại thảm hại và bị đá đít đi ngay sau đó. Thế nhưng
                      Team Rocket là một "gia vị" không thể thiếu trong Pokémon.
                      Dù lần xuất hiện nào cũng khá là "fail" nhưng luôn làm
                      người xem phải bật cười, vì thế nên họ được rất nhiều
                      người yêu mến.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/3/anh-1-1627986987887728224467.jpg"
                      alt="1, POKÉMON,TEAM ROCKET,JESSIE,PIKACHU,QUÁ KHỨ TEAM ROCKET,ANIME NHẬT BẢN,"
                      note=""
                    />
                    <p>
                      Tuy nhiên chắc hẳn ít ai biết đến quá khứ của biệt đội
                      này, mỗi thành viên trong bộ ba team đều có những quá khứ
                      bi thảm của riêng mình, và câu chuyện của{" "}
                      <strong>Jessie</strong> đã khiến nhiều người phải "nhức
                      nhối".
                    </p>
                    <p>
                      Nhắc để ai chưa biết thì Miyamoto, mẹ của{" "}
                      <strong>Jessie</strong> chính là thành viên cấp cao của{" "}
                      <strong>Team Rocket</strong> và là người đầu tiên ghi lại
                      đoạn băng ghi âm của Mew trong một nhiệm vụ đến Nam Mỹ.
                      Trước đó cô được Madame Boss cử đi tìm cách bắt Mew, đồng
                      nghĩa với việc cô phải bỏ lại con gái mình. Và bất hạnh
                      thay trong nhiệm vụ này, cô đã bị mắc kẹt trong một trận
                      tuyết lở và được cho là đã chết.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/anh-3-16279869879312093057878.jpg"
                      alt="2, POKÉMON,TEAM ROCKET,JESSIE,PIKACHU,QUÁ KHỨ TEAM ROCKET,ANIME NHẬT BẢN,"
                      note=""
                    />
                    <p>
                      Vì thế <strong>Jessie</strong>, chỉ mới khoảng năm tuổi,
                      sau đó được gửi đến sống trong một trại trẻ mồ côi. Mọi
                      thứ không dễ dàng gì cho Jessie trong ngôi nhà mới này.
                      Không có tiền, thiếu thốn mọi thứ và cô nói rằng có những
                      ngày thức ăn duy nhất là tuyết. Tuy nhiên Jessie lúc đó
                      vẫn rất ngây thơ và lạc quan, cô luôn ước mơ được nhanh
                      lớn và trở nên nổi tiếng. Nhưng cuộc đời dường như nghiệt
                      ngã với cô khi liên tiếp những kế hoạch tương lai bị thất
                      bại.
                    </p>
                    <p>
                      Trong thời thơ ấu của mình, <strong>Jessie</strong> đã
                      phải lòng một chàng trai thế nhưng cô đã không đi cùng anh
                      mà quyết định ở lại cùng 2 người bạn đào tạo để trở thành
                      thần tượng nhạc pop. Trong khi hai người bạn của cô ấy đã
                      vượt qua buổi thử giọng của họ, Jessie thì không.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Sau khi đến tuổi trưởng thành, <strong>Jessie</strong> rời
                      nhà để đến học tại trường điều dưỡng Pokemon. Cho dù cô có
                      thể hiện tài năng với một số kỹ năng cần thiết để trở
                      thành một y tá, nhưng cô vẫn không thể tốt nghiệp. Sau đó
                      cuộc sống của cô tại trường Y cũng không khá khẩm là mấy.
                      Tại một thời điểm nào đó, cô ấy là một người mẫu, cô ấy
                      tham gia một băng đảng xe đạp, cô ấy là một cô gái thời
                      tiết và cô ấy được cho là đã có một thời gian ngắn làm
                      ninja.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/3/anh-4-1627986987949162041908.gif"
                      alt="3, POKÉMON,TEAM ROCKET,JESSIE,PIKACHU,QUÁ KHỨ TEAM ROCKET,ANIME NHẬT BẢN,"
                      note=""
                    />
                    <p>
                      Có thể thấy một chuỗi những thất bại đã kéo dài suốt cuộc
                      đời <strong>Jessie</strong>, cô luôn đơn độc một mình
                      không có mục đích cho tương lai và vô cùng bí tắc. Và chỉ
                      khi gặp Meowth và James, cuộc đời của Jessie rất có thể đã
                      khác đi rất nhiều. Cô có mục tiêu trong cuộc sống, có đồng
                      đội để chia sẻ. Mặc dù đội của cô ấy không nổi tiếng và
                      cũng luôn thất bại thế nhưng dường như cô ấy đã không còn
                      một mình. Và giờ đây Jessie đã có bạn để có thể cổ vũ tinh
                      thần trong cuộc sống cũng như tiếp tục thất bại cùng nhau.
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
