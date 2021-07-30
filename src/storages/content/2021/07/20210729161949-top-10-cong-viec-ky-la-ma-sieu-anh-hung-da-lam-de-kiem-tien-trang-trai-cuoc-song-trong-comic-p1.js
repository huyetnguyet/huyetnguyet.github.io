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
"timestamp": '29/07/2021 04:19 PM',
"title": 'Top 10 công việc kỳ lạ mà siêu anh hùng đã làm để kiếm tiền trang trải cuộc sống trong comic (P.1)',
"description": 'Không phải ai cũng có nhiều tiền như Batman và Iron Man, một số siêu anh hùng phải làm việc để kiếm sống.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-1626603187021266884680.jpg',
"alt": 'MARVEL,GHOST RIDER,SIÊU ANH HÙNG,CÔNG VIỆC CỦA SIÊU ANH HÙNG,BLACK CANARY,DC,',
"category": 'news',
"date": '29/07/2021',
"time": '04:19 PM',
"link": '/top-10-cong-viec-ky-la-ma-sieu-anh-hung-da-lam-de-kiem-tien-trang-trai-cuoc-song-trong-comic-p1',
"zcomponent": 'page_20210729161949',
"filepath": './20210729161949-top-10-cong-viec-ky-la-ma-sieu-anh-hung-da-lam-de-kiem-tien-trang-trai-cuoc-song-trong-comic-p1.js'
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
  "Top 10 công việc kỳ lạ mà siêu anh hùng đã làm để kiếm tiền trang trải cuộc sống trong comic (P.1)";
const author = "MT";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:19 PM";
const description =
  "Không phải ai cũng có nhiều tiền như Batman và Iron Man, một số siêu anh hùng phải làm việc để kiếm sống.";
const link =
  "top-10-cong-viec-ky-la-ma-sieu-anh-hung-da-lam-de-kiem-tien-trang-trai-cuoc-song-trong-comic-p1";
const tagparam = [
  "MARVEL",
  "GHOST RIDER",
  "SIÊU ANH HÙNG",
  "CÔNG VIỆC CỦA SIÊU ANH HÙNG",
  "BLACK CANARY",
  "DC",
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

export default function page_20210729161949() {
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
                  <p>
                    <strong>Marvel</strong> và <strong>DC</strong> xuyên suốt
                    chiều dài phát triển đã cho ra mắt rất nhiều{" "}
                    <strong>siêu anh hùng</strong> khác nhau, mang trong mình
                    khả năng vượt trội. Trong số đó, có không ít những cái tên
                    như Batman và Iron Man sở hữu khối tài sản kếch xù mà nhiều
                    người phải mơ ước.
                  </p>
                  <p>
                    Nhưng cũng có một vài người ngoài hành hiệp trượng nghĩa ra,
                    họ cũng cần làm việc để trang trải cho cuộc sống thường nhật
                    cũng như thỏa đam mê. Và có không ít những ngành nghề của{" "}
                    <strong>siêu anh hùng</strong> sau đây mà độc giả cảm thấy
                    vừa thú vị nhưng cũng không kém phần kỳ lạ:
                  </p>
                  <h5>
                    10. <strong>Ghost Rider</strong>: Nhào lộn xe moto
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-1626603187021266884680.jpg"
                    alt="1, MARVEL,GHOST RIDER,SIÊU ANH HÙNG,CÔNG VIỆC CỦA SIÊU ANH HÙNG,BLACK CANARY,DC,"
                    note=""
                  />
                  <p>
                    Trước khi trở thành <strong>Ghost Rider</strong>, cái tên
                    Johnny Blaze vốn có xuất thân là một vận động viên nhào lộn
                    xe moto. Ngay từ khi chỉ mới là một cậu nhóc, Johnny đã có
                    niềm đam mê được truyền qua từ người cha Barton. Nhưng thật
                    không may là ông đã qua đời trong quá trình đang thực hiện
                    màn nhào lộn. Còn người mẹ cũng ra đi ngay sau khi giao kèo
                    với Mephisto.
                  </p>
                  <p>
                    Thế là anh được người chú thân thiết với gia đình, Crash
                    Simpsons nhận nuôi và coi anh không khác gì con ruột cả. Một
                    thời gian sau, Johnny lại phải chứng kiến thêm một bi kịch
                    xảy ra, khi vợ của Crash là Mona ra đi trong buổi biểu diễn
                    xe moto, hệt như người mẹ quá cố. Crash sau đó cũng lâm bệnh
                    nặng, buộc anh phải giao kèo với ác quỷ Mephisto để cứu chữa
                    cho ông. Cái giá phải trả là anh phải bán linh hồn cho quỷ
                    dữ và trở thành một <strong>Ghost Rider</strong>. Johnny tuy
                    không còn theo nghề, nhưng vẫn giữ nguyên kỹ năng lái xe
                    moto đỉnh cao.
                  </p>
                  <h5>
                    9. <strong>Black Canary</strong> và Dazzler: Ca sĩ
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-1626603188222496595480.jpg"
                    alt="2, MARVEL,GHOST RIDER,SIÊU ANH HÙNG,CÔNG VIỆC CỦA SIÊU ANH HÙNG,BLACK CANARY,DC,"
                    note=""
                  />
                  <p>
                    Cả <strong>Marvel</strong> và <strong>DC</strong> đều sở hữu
                    những mỹ nhân với giọng ca làm say đắm lòng người là Dazzler
                    và <strong>Black Canary</strong>. Với Dazzler của Marvel,
                    khi cô nàng này không chỉ hát hay mà còn nhảy disco cừ khôi.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Trong khi đó, <strong>Black Canary</strong> là trưởng nhóm
                    kiêm giọng ca chính cho một ban nhạc punk rock nổi tiếng
                    trong vũ trụ <strong>DC</strong>.
                  </p>
                  <h5>8. Jane Foster: Chăm sóc cho người chết</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-2-1626603189768982883386.jpg"
                    alt="3, MARVEL,GHOST RIDER,SIÊU ANH HÙNG,CÔNG VIỆC CỦA SIÊU ANH HÙNG,BLACK CANARY,DC,"
                    note=""
                  />
                  <p>
                    Người tình của thần sấm Thor, Jane Foster ban đầu là một
                    tiến sĩ với bộ óc thiên tài. Nhưng sau này cô lại chuyển
                    sang một công việc khác. Bắt đầu từ sự kiện khi mà Jane được
                    chuẩn đoán mắc phải căn bệnh ung thư và tiếp nhận danh hiệu
                    Thor cùng với cây búa Mjolnir. Chính Mjolnir đã thanh lọc
                    hóa chất nằm trong cơ thể của Jane từ quá trình hóa trị mỗi
                    khi mà cô trở thành Thor.
                  </p>
                  <p>
                    Jane Foster sau đó chỉ tập trung vào việc chữa trị và từ bỏ
                    danh xưng Thor. Nhưng một thời gian sau, Jane trở thành
                    Valkyrie, đồng thời cũng chuyển sang một công việc mới là
                    nhân viên chăm sóc cho người đã khuất tại nhà tang lễ.
                  </p>
                  <h5>7. Puck: Bảo vệ tại hộp đêm</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-3-1626603189237767155615.jpg"
                    alt="4, MARVEL,GHOST RIDER,SIÊU ANH HÙNG,CÔNG VIỆC CỦA SIÊU ANH HÙNG,BLACK CANARY,DC,"
                    note=""
                  />
                  <p>
                    Puck, thành viên của nhóm siêu hùng Alpha Flight trong{" "}
                    <strong>Marvel</strong> Comics với cơ thể có cấu trúc của
                    "cao su nén" giúp anh sở hữu sức mạnh thể chất, tốc độ và
                    sức bền vượt xa so với người bình thường. Điều đặc biệt các
                    đặc điểm sinh học của anh càng được nâng cao mỗi khi bị tấn
                    công.
                  </p>
                  <p>
                    Không chỉ trong vai trò của một người hùng, mà Puck còn tận
                    dụng năng lực của mình cho công việc bảo vệ tại hộp đêm.
                  </p>
                  <h5>
                    6. Nhiều <strong>siêu anh hùng</strong>: Thám tử tư
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-4-1626603188723267286445.jpg"
                    alt="5, MARVEL,GHOST RIDER,SIÊU ANH HÙNG,CÔNG VIỆC CỦA SIÊU ANH HÙNG,BLACK CANARY,DC,"
                    note=""
                  />
                  <p>
                    Có rất nhiều <strong>siêu anh hùng</strong> trở thành thám
                    tử tư. Jessica Jones trong <strong>Marvel</strong> là một ví
                    dụ điển hình. Còn phải kể đến những Jessica Drew/Spider
                    Woman, Misty Knight và Colleen Wing/The Daughters of the
                    Dragon cũng đều là những thám tử tư.
                  </p>
                  <p>
                    Bên <strong>DC</strong> Comics có một vài cái tên như
                    Question và nhân dạng John Jones của Martian Manhunter với
                    kinh nghiệm lâu năm. Thậm chí là John Constantine đôi khi
                    cũng được xem như một thám tử tư chuyên nhận các vụ án liên
                    quan đến yếu tố siêu nhiên.
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
