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
"timestamp": '14/06/2021 09:24 AM',
"title": 'Lee Kwang Soo liên tục xin lỗi trong đoạn thư chia tay gửi đồng đội Running Man',
"description": 'Tâm thư của Kwang Soo trong tập cuối cùng khiến fan không thể kìm được nước mắt.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/13/photo-1-16235849348172030459849.jpg',
"alt": 'Lee Kwang Soo, Lee Kwang Soo Roi Running Man Sau 11 Nam, Running Man, ',
"category": 'news',
"date": '14/06/2021',
"time": '09:24 AM',
"link": '/kwang-soo-viet-thu-tay-gui-cac-thanh-vien-va-fan-moi-nguoi-bay-gio-hay-quen-em-di',
"zcomponent": 'page_20210614092438',
"filepath": './20210614092438-kwang-soo-viet-thu-tay-gui-cac-thanh-vien-va-fan-moi-nguoi-bay-gio-hay-quen-em-di.js'
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
  "Lee Kwang Soo liên tục xin lỗi trong đoạn thư chia tay gửi đồng đội Running Man";
const author = "BELL SHINO,";
const source = "Trí Thức Trẻ";
const timestamp = "14/06/2021 09:24 AM";
const description =
  "Tâm thư của Kwang Soo trong tập cuối cùng khiến fan không thể kìm được nước mắt.";
const link =
  "kwang-soo-viet-thu-tay-gui-cac-thanh-vien-va-fan-moi-nguoi-bay-gio-hay-quen-em-di";
const tagparam = [
  "lee-kwang-soo",
  "lee-kwang-soo-roi-running-man-sau-11-nam",
  "running-man",
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

export default function page_20210614092438() {
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
                    Tập 559 <strong>Running Man</strong> tuần này đã để lại
                    nhiều cảm xúc cho người hâm mộ khi là tập ghi hình cuối cùng
                    của <strong>Lee Kwang Soo</strong> trước khi anh nói lời tạm
                    biệt chương trình.
                  </p>
                  <p>
                    Ngoài những thử thách với loạt kỷ niệm khó quên, các thành
                    viên cũng viết thư tay gửi Kwang Soo sau 11 năm đã đồng hành
                    cùng nhau. Ngược lại, Kwang Soo cũng đã chia sẻ nỗi lòng khi
                    anh rời chương trình. Những dòng chữ viết rồi lại gạch của
                    "chàng Hươu" cũng đủ thấy tâm trạng rối bời của Kwang Soo,
                    khiến khán giả không thể kìm được cảm xúc.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Trong bức thư cuối cùng của mình, Kwang Soo chia sẻ: "Cảm ơn
                    mọi người đã tạo nên em ngày hôm nay và cho em cảm giác của
                    1 gia đình. Em xin lỗi. Xin lỗi mọi người. Thật lòng xin
                    lỗi... 11 năm qua có thể em đã làm chưa tốt, nhưng em đã cố
                    gắng hết mình. Cho dù bị chấn thương nhưng em luôn cố gắng
                    làm tốt nhất có thể. Thời gian tới mọi người hãy quan tâm và
                    yêu thương <strong>Running Man</strong> nhiều hơn nữa nhé!
                    Cảm ơn mọi người".
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/13/photo-1-16235849348172030459849.jpg"
                    alt="Lee Kwang Soo, Lee Kwang Soo Roi Running Man Sau 11 Nam, Running Man, "
                    note=""
                  />
                  <p>
                    Ảnh: Cắt từ chương trình, Internet; Nguồn: FC{" "}
                    <strong>Running Man</strong> Việt Nam
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
