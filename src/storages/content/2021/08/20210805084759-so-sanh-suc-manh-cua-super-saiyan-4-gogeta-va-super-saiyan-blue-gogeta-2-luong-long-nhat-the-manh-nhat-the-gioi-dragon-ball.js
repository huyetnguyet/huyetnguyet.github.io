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
"timestamp": '05/08/2021 08:47 AM',
"title": 'So sánh sức mạnh của Super Saiyan 4 Gogeta và Super Saiyan Blue Gogeta, 2 "lưỡng long nhất thể" mạnh nhất thế giới Dragon Ball',
"description": 'Liệu sự hợp nhất nào của Gogeta là đỉnh cao của cuộc chiến trong thế giới Dragon Ball?',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/anh-1-16280620138171675379246.png',
"alt": 'DRAGON BALL,7 VIÊN NGỌC RỒNG,HỢP THỂ GOGETA,SUPER SAIYAN 4,DRAGON BALL GT,DRAGON BALL SUPER,SUPER SAIYAN BLUE,',
"category": 'games',
"date": '05/08/2021',
"time": '08:47 AM',
"link": '/so-sanh-suc-manh-cua-super-saiyan-4-gogeta-va-super-saiyan-blue-gogeta-2-luong-long-nhat-the-manh-nhat-the-gioi-dragon-ball',
"zcomponent": 'page_20210805084759',
"filepath": './20210805084759-so-sanh-suc-manh-cua-super-saiyan-4-gogeta-va-super-saiyan-blue-gogeta-2-luong-long-nhat-the-manh-nhat-the-gioi-dragon-ball.js'
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
  'So sánh sức mạnh của Super Saiyan 4 Gogeta và Super Saiyan Blue Gogeta, 2 "lưỡng long nhất thể" mạnh nhất thế giới Dragon Ball';
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "05/08/2021 08:47 AM";
const description =
  "Liệu sự hợp nhất nào của Gogeta là đỉnh cao của cuộc chiến trong thế giới Dragon Ball?";
const link =
  "so-sanh-suc-manh-cua-super-saiyan-4-gogeta-va-super-saiyan-blue-gogeta-2-luong-long-nhat-the-manh-nhat-the-gioi-dragon-ball";
const tagparam = [
  "DRAGON BALL",
  "7 VIÊN NGỌC RỒNG",
  "HỢP THỂ GOGETA",
  "SUPER SAIYAN 4",
  "DRAGON BALL GT",
  "DRAGON BALL SUPER",
  "SUPER SAIYAN BLUE",
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

export default function page_20210805084759() {
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
                      Trong <strong>Dragon Ball</strong> Z thì Goku và Vegeta
                      được xem là những nhân vật mạnh nhất, vì thế hợp thể của 2
                      người này là Gogeta cũng là một trong những sức mạnh kinh
                      khủng nhất. Và trong sự phát triển liên tục của Dragon
                      Ball qua các phiên bản khác nhau đã tạo ra 2 phiên bản
                      khác nhau. Trong <strong>Dragon Ball GT</strong> lên đến
                      đỉnh điểm là Goku và Vegeta đã hợp nhất thành{" "}
                      <strong>Super Saiyan 4</strong> Gogeta. Trong phần khác,{" "}
                      <strong>Dragon Ball Super</strong> đã chứng kiến cả 2 hợp
                      nhất thành <strong>Super Saiyan Blue</strong> Gogeta. Với
                      sức mạnh của mình, cả 2 hợp thể này đều xếp hạng trong số
                      những nhân vật mạnh nhất trong lịch sử Dragon Ball.
                    </p>
                    <p>
                      Tuy nhiên, nếu cả hai bằng cách nào đó đối đầu với nhau,
                      thì hợp thể nào sẽ mạnh nhất? Thật khó để so sánh sức mạnh
                      của <strong>Super Saiyan 4</strong> Gogeta với sức mạnh
                      của <strong>Super Saiyan Blue</strong> Gogeta.
                    </p>
                    <h5>
                      <strong>Super Saiyan Blue</strong> mạnh hơn Super Saiyan 4
                    </h5>
                    <p>
                      Điều đầu tiên cần xác định là{" "}
                      <strong>Super Saiyan Blue</strong> có mạnh hơn{" "}
                      <strong>Super Saiyan 4</strong> hay không?
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/anh-1-16280620138171675379246.png"
                      alt="1, DRAGON BALL,7 VIÊN NGỌC RỒNG,HỢP THỂ GOGETA,SUPER SAIYAN 4,DRAGON BALL GT,DRAGON BALL SUPER,SUPER SAIYAN BLUE,"
                      note=""
                    />
                    <p>
                      Chúng ta hãy xem xét khi Goku chiến đấu với cả Beerus và
                      Baby Vegeta, Goku lần đầu tiên ở dạng Super Saiyan 3, dạng
                      mạnh nhất của anh ấy cho đến thời điểm đó. Cả hai lần,
                      Beerus và Baby đều đánh bại anh ta ở dạng này. Khi biến
                      hình thành <strong>Super Saiyan 4</strong> thì Goku đã
                      đánh bại Baby Vegeta - mặc dù có sự giúp đỡ từ bạn bè và
                      Majuub.
                    </p>
                    <p>
                      Tiếp đến là trạng thái Super Saiyan God Goku đã đẩy được
                      Beerus, người không thể phủ nhận là mạnh hơn Baby Vegeta.
                      Bên cạnh đó rõ ràng là Super Saiyan God và{" "}
                      <strong>Super Saiyan 4</strong> có thể so sánh được về mặt
                      sức mạnh. Còn về <strong>Super Saiyan Blue</strong> thì có
                      thể mạnh hơn một khoảng cách.
                    </p>
                    <p>
                      Do đó, có lý do rằng <strong>Super Saiyan Blue</strong>{" "}
                      mạnh hơn đáng kể so với <strong>Super Saiyan 4</strong>.
                      Nó giống như so sánh dạng cơ bản của Goku với dạng Super
                      Saiyan đầu tiên của anh ấy về mặt sức mạnh.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>
                      Gogeta trong <strong>Dragon Ball</strong> Super mạnh hơn
                      Dragon Ball GT
                    </h5>
                    <p>
                      Trong <strong>Dragon Ball</strong> thì mọi hợp thể đều có
                      những chỉ số sức mạnh vượt trội, vì vậy hai Gogeta có thể
                      sẽ có sự khác nhau về sức mạnh trong từng hoàn cảnh. Goku
                      và Vegeta mạnh hơn khi họ hợp nhất trong{" "}
                      <strong>Dragon Ball Super</strong> hay khi họ hợp nhất
                      trong Dragonball GT khi chống lại Omega Shenron? Một lần
                      nữa, câu trả lời có vẻ là nghiêng về phía Super .
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/anh-2-16280620138381976737839.jpg"
                      alt="2, DRAGON BALL,7 VIÊN NGỌC RỒNG,HỢP THỂ GOGETA,SUPER SAIYAN 4,DRAGON BALL GT,DRAGON BALL SUPER,SUPER SAIYAN BLUE,"
                      note=""
                    />
                    <p>
                      Vào thời điểm họ hợp nhất thành Gogeta trong lúc chống lại
                      Broly thì họ đã trải qua Giả đấu Sức mạnh trong Super. Lúc
                      này Goku đã đạt được dạng Bản năng vô cực của mình, còn
                      Vegeta cũng tiến bộ hơn rất nhiều về mặt sức mạnh. Cả 2 đã
                      được thông qua quá trình luyện tập cường độ cao dưới sự
                      huấn luyện của Thần hủy diệt Beerus và Thiên sứ Whis.
                    </p>
                    <p>
                      Còn Goku và Vegeta trong <strong>Dragon Ball</strong> GT
                      thì chưa đạt đến mức sức mạnh đó. Tuy nhiên chúng ta cũng
                      biết trong GT nổi tiếng là phóng đại sức mạnh.{" "}
                      <strong>Super Saiyan 4</strong> Goku bị Omega Shenron thổi
                      bay, trong khi Kid Goku căn cứ hỗ trợ Spirit Bomb có thể
                      thực hiện các vụ nổ nhanh chóng cùng cường độ mà không hề
                      nao núng. Tuy nhiên cho dù thế nào đi nữa thì cả Goku và
                      Vegeta chắc chắn yếu hơn so với Super. Họ vẫn chưa thể so
                      sánh được với sức mạnh của một vị thần hay đạt đến bản
                      năng vô cực như trong phiên bản này.
                    </p>
                    <h5>
                      <strong>Super Saiyan 4</strong> Gogeta và{" "}
                      <strong>Super Saiyan Blue</strong> Gogeta cái nào mạnh
                      hơn?
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/anh-3-16280620138431575907794.jpg"
                      alt="3, DRAGON BALL,7 VIÊN NGỌC RỒNG,HỢP THỂ GOGETA,SUPER SAIYAN 4,DRAGON BALL GT,DRAGON BALL SUPER,SUPER SAIYAN BLUE,"
                      note=""
                    />
                    <p>
                      Từ 2 điều trên chúng ta có thể thấy{" "}
                      <strong>Super Saiyan 4</strong> Gogeta của{" "}
                      <strong>Dragon Ball</strong> GT không có cơ hội chống lại{" "}
                      <strong>Super Saiyan Blue</strong> Gogeta của Super. Nhưng
                      nếu trong trường hợp ngược lại Super Saiyan 4 Gogeta của{" "}
                      <strong>Dragon Ball Super</strong> có thể mạnh hơn Super
                      Saiyan Blue Gogeta của GT. Vì thế để xác định được trạng
                      thái nào mạnh hơn chúng ta phải dựa vào hoàn cảnh và nằm
                      trong phiên bản nào.
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
