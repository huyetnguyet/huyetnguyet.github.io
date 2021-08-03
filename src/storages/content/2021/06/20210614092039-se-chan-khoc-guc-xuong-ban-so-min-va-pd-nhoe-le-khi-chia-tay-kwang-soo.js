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
"timestamp": '14/06/2021 09:20 AM',
"title": 'Se Chan khóc gục xuống bàn, So Min và PD nhòe lệ khi chia tay Kwang Soo',
"description": 'Giây phút chia ly Kwang Soo, hai thành viên ít tuổi nhất Se Chan và So Min đã khóc hết nước mắt.',
"src": '',
"alt": 'Lee Kwang Soo, Lee Kwang Soo Roi Running Man Sau 11 Nam, Yang Se Chan, Jeon So Min, Running Man, ',
"category": 'news',
"date": '14/06/2021',
"time": '09:20 AM',
"link": '/se-chan-khoc-guc-xuong-ban-so-min-va-pd-nhoe-le-khi-chia-tay-kwang-soo',
"zcomponent": 'page_20210614092039',
"filepath": './20210614092039-se-chan-khoc-guc-xuong-ban-so-min-va-pd-nhoe-le-khi-chia-tay-kwang-soo.js'
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
  "Se Chan khóc gục xuống bàn, So Min và PD nhòe lệ khi chia tay Kwang Soo";
const author = "JAFAR,";
const source = "Trí Thức Trẻ";
const timestamp = "14/06/2021 09:20 AM";
const description =
  "Giây phút chia ly Kwang Soo, hai thành viên ít tuổi nhất Se Chan và So Min đã khóc hết nước mắt.";
const link =
  "se-chan-khoc-guc-xuong-ban-so-min-va-pd-nhoe-le-khi-chia-tay-kwang-soo";
const tagparam = [
  "lee-kwang-soo",
  "lee-kwang-soo-roi-running-man-sau-11-nam",
  "yang-se-chan",
  "jeon-so-min",
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

export default function page_20210614092039() {
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
                      Cuối cùng người hâm mộ <strong>Running Man</strong> đã
                      phải chứng kiến giây phút không mong muốn nhất.{" "}
                      <strong>Lee Kwang Soo</strong> sau tập 559 sẽ chính thức
                      nói lời chia tay với khán giả yêu quý chương trình sau 11
                      năm gắn bó.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/13/photo-1-1623584244543812523232.jpg"
                      alt="Lee Kwang Soo, Lee Kwang Soo Roi Running Man Sau 11 Nam, Yang Se Chan, Jeon So Min, Running Man, "
                      note="Choi Bo Pil - PD chính của Running Man cũng không giấu nổi những giọt nước mắt và khóc ngay tại buổi ghi hình"
                    />
                    <p>
                      Giờ phút ngồi lại để cùng nhau nhớ về những kỷ niệm, các
                      thành viên đều không giấu được nỗi buồn. Khác với những
                      đồng nghiệp đã gắn bó với Kwang Soo trong suốt 11 năm, hai
                      thành viên Se Chan và So Min dù là những người mới nhưng
                      vẫn có những kỷ niệm khó quên với đàn anh. Cả hai đã không
                      ngừng rơi nước mắt khi Kwang Soo nói lời từ biệt.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/13/photo-1-16235842431201126222547.jpg"
                      alt="Lee Kwang Soo, Lee Kwang Soo Roi Running Man Sau 11 Nam, Yang Se Chan, Jeon So Min, Running Man, "
                      note="Se Chan đã mít ướt ngay từ những phút đầu tiên"
                    />
                    <p>
                      Không bên cạnh từ những ngày đầu tiên nhưng Kwang Soo đối
                      với Se Chan và So Min đều là người anh rất đặc biệt.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/13/photo-1-1623584502314281771162.jpeg"
                      alt="Lee Kwang Soo, Lee Kwang Soo Roi Running Man Sau 11 Nam, Yang Se Chan, Jeon So Min, Running Man, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/13/photo-2-16235842445921870755020.jpg"
                      alt="Lee Kwang Soo, Lee Kwang Soo Roi Running Man Sau 11 Nam, Yang Se Chan, Jeon So Min, Running Man, "
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/13/photo-1-1623584484750109197376.jpg"
                      alt="Lee Kwang Soo, Lee Kwang Soo Roi Running Man Sau 11 Nam, Yang Se Chan, Jeon So Min, Running Man, "
                      note="Những khoảnh khắc đáng nhớ của Kwang Soo cùng hai em út Se Chan và So Min"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/13/photo-1-1623584491963292932915.jpg"
                      alt="Lee Kwang Soo, Lee Kwang Soo Roi Running Man Sau 11 Nam, Yang Se Chan, Jeon So Min, Running Man, "
                      note="Là những người đến sau nhưng tình cảm khắng khít của họ là điều không thể chối cãi"
                    />
                    <p>Ảnh: Cắt từ chương trình, Internet</p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
