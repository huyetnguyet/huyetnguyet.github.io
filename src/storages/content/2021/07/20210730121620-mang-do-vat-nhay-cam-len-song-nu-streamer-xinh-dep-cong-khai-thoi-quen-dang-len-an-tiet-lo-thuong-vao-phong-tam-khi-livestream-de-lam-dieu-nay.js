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
"timestamp": '30/07/2021 12:16 PM',
"title": 'Mang đồ vật nhạy cảm lên sóng, nữ streamer xinh đẹp công khai thói quen đáng lên án, tiết lộ thường vào phòng tắm khi livestream để làm điều này',
"description": 'Những chia sẻ của cô nàng streamer khiến cho rất nhiều người xem cũng phải cảm thấy tức giận.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/photo-4-16276213516981623035451.jpg',
"alt": 'streamer,nhan sắc gợi cảm,hình ảnh phản cảm,câu nói dối,đáng lên án,nhân vật chính,',
"category": 'images',
"date": '30/07/2021',
"time": '12:16 PM',
"link": '/mang-do-vat-nhay-cam-len-song-nu-streamer-xinh-dep-cong-khai-thoi-quen-dang-len-an-tiet-lo-thuong-vao-phong-tam-khi-livestream-de-lam-dieu-nay',
"zcomponent": 'page_20210730121620',
"filepath": './20210730121620-mang-do-vat-nhay-cam-len-song-nu-streamer-xinh-dep-cong-khai-thoi-quen-dang-len-an-tiet-lo-thuong-vao-phong-tam-khi-livestream-de-lam-dieu-nay.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  "Mang đồ vật nhạy cảm lên sóng, nữ streamer xinh đẹp công khai thói quen đáng lên án, tiết lộ thường vào phòng tắm khi livestream để làm điều này";
const author = "KENTTT,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "30/07/2021 12:16 PM";
const description =
  "Những chia sẻ của cô nàng streamer khiến cho rất nhiều người xem cũng phải cảm thấy tức giận.";
const link =
  "mang-do-vat-nhay-cam-len-song-nu-streamer-xinh-dep-cong-khai-thoi-quen-dang-len-an-tiet-lo-thuong-vao-phong-tam-khi-livestream-de-lam-dieu-nay";
const tagparam = [
  "streamer",
  "nhan sắc gợi cảm",
  "hình ảnh phản cảm",
  "câu nói dối",
  "đáng lên án",
  "nhân vật chính",
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

export default function page_20210730121620() {
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
                    <strong>Nhân vật chính</strong> đang được nhắc tới trong câu
                    chuyện là Seoyoon - một trong những tân binh rất nổi bật của
                    ngành công nghiệp <strong>streamer</strong> Hàn Quốc ở thời
                    điểm hiện tại. Xinh xắn, tài năng và trên hết là rất biết
                    cách tận dụng lợi thế về <strong>nhan sắc gợi cảm</strong>{" "}
                    của mình, Seoyoon nhanh chóng sở hữu lượng fan hâm mộ khổng
                    lồ.{" "}
                  </p>
                  <p>
                    Tuy nhiên, cô nàng cũng đồng thời là cái tên tạo ra vô số
                    những tranh cãi bởi chính phong cách gợi cảm của bản thân.
                    Chưa kể, bản thân Seoyoon, sau rất nhiều sự cố cũng chẳng hề
                    giấu giếm việc mình không hề "ngoan" như nhiều người vẫn lầm
                    tưởng một chút nào.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/photo-1-1627621346701312500185.jpg"
                    alt="1, streamer,nhan sắc gợi cảm,hình ảnh phản cảm,câu nói dối,đáng lên án,nhân vật chính,"
                    note="Seoyoon - cô nàng streamer thường xuyên nhận phải những tranh cãi trái chiều"
                  />
                  <p>
                    Khác hẳn với gương mặt và vẻ đẹp có phần trong sáng, đáng
                    yêu, cô nàng Seoyoon lại chẳng ngại ngần khi công khai những
                    hình ảnh không lấy gì làm đẹp lắm của bản thân mình. Theo
                    đó, trong lần lên sóng làm khách mời của một đồng nghiệp nam
                    khác, Seoyoon đã khiến cả bạn mình lẫn khán giả cực kỳ sốc
                    khi thản nhiên lấy ra một điếu thuốc kèm theo chiếc bật lửa
                    xịn xò rồi châm lửa ngay trên sóng. Hành động có phần phản
                    cảm này đã khiến cho không ít người phải nhăn mặt.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/photo-1-16276213481961276204816.jpg"
                    alt="2, streamer,nhan sắc gợi cảm,hình ảnh phản cảm,câu nói dối,đáng lên án,nhân vật chính,"
                    note="Hành động hút thuốc trên sóng có phần phản cảm của cô nàng streamer"
                  />
                  <p>
                    Đáng nói hơn, ở thời điểm mới ra mắt, cô nàng{" "}
                    <strong>streamer</strong> có vẻ ngoài trong sáng này cũng
                    không ít lần thừa nhận với fan rằng mình chưa bao giờ hút
                    thuốc trong cuộc đời. Để rồi với{" "}
                    <strong>hình ảnh phản cảm</strong> ở trên, nó đã trở thành{" "}
                    <strong>câu nói dối</strong> tồi tệ nhất mà Seoyoon từng
                    thực hiện.
                  </p>
                  <p>
                    Thậm chí, cô nàng còn tỏ ra khá "chuyên nghiệp" khi thú nhận
                    với đồng nghiệp rằng đôi lúc vẫn hút thuốc ngay cả trong quá
                    trình đang lên sóng livestream của mình. Những lúc như vậy,
                    cô nàng thường sẽ lấy cớ và vào phòng tắm để thỏa cơn
                    "ghiền". Đó cũng là lý do tại sao, Seoyoon thường xuyên có
                    những phút "giải lao" trong suốt phiên livestream của mình.
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/photo-2-1627621348276589103041.jpg"
                    alt="3, streamer,nhan sắc gợi cảm,hình ảnh phản cảm,câu nói dối,đáng lên án,nhân vật chính,"
                    note="Sở hữu vẻ ngoài trong sáng, dễ thương"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/photo-3-1627621349427259620671.png"
                    alt="4, streamer,nhan sắc gợi cảm,hình ảnh phản cảm,câu nói dối,đáng lên án,nhân vật chính,"
                    note="Nhưng chẳng ai ngờ cô nàng streamer này lại dám công khai tật xấu một cách thản nhiên tới vậy"
                  />
                  <p>
                    Thực tế, đây cũng không phải là lần đầu tiên mà Seoyoon gặp
                    phải những scandal, lùm xùm như vậy trong sự nghiệp. Trước
                    đó, màn kéo tụt áo khi lên sóng đầy khêu gợi của nữ{" "}
                    <strong>streamer</strong> này cũng từng tạo ra không ít
                    những ồn ào.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/photo-4-16276213516981623035451.jpg"
                    alt="5, streamer,nhan sắc gợi cảm,hình ảnh phản cảm,câu nói dối,đáng lên án,nhân vật chính,"
                    note="Màn lùm xùm trong quá khứ của Seoyoon với bộ trang phục có phần gợi cảm quá mức"
                  />
                  <p>Ảnh: Internet</p>
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
