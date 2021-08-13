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
"timestamp": '11/08/2021 10:50 AM',
"title": 'Shark Hưng học 1 đại học dễ quá nên học luôn 2 - 3 trường, 4 lần tốt nghiệp Thạc sĩ, còn gây sốt khi lọt top thế giới về mảng này',
"description": 'Đằng sau sự tinh thông kiến thức của Shark Hưng là cả quá trình đi học miệt mài cả vị Phó chủ tịch.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/photo-1-16285906520021581419114.png',
"alt": 'chương trình thực tế,đại học quốc gia,shark tank,shark hưng,',
"category": 'news',
"date": '11/08/2021',
"time": '10:50 AM',
"link": '/shark-hung-hoc-1-dai-hoc-de-qua-nen-hoc-luon-2-3-truong-4-lan-tot-nghiep-thac-si-con-gay-sot-khi-lot-top-the-gioi-ve-mang-nay',
"zcomponent": 'page_20210811105041',
"filepath": './20210811105041-shark-hung-hoc-1-dai-hoc-de-qua-nen-hoc-luon-2-3-truong-4-lan-tot-nghiep-thac-si-con-gay-sot-khi-lot-top-the-gioi-ve-mang-nay.js'
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
  "Shark Hưng học 1 đại học dễ quá nên học luôn 2 - 3 trường, 4 lần tốt nghiệp Thạc sĩ, còn gây sốt khi lọt top thế giới về mảng này";
const author = "NAN,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "11/08/2021 10:50 AM";
const description =
  "Đằng sau sự tinh thông kiến thức của Shark Hưng là cả quá trình đi học miệt mài cả vị Phó chủ tịch.";
const link =
  "shark-hung-hoc-1-dai-hoc-de-qua-nen-hoc-luon-2-3-truong-4-lan-tot-nghiep-thac-si-con-gay-sot-khi-lot-top-the-gioi-ve-mang-nay";
const tagparam = [
  "chương trình thực tế",
  "đại học quốc gia",
  "shark tank",
  "shark hưng",
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

export default function page_20210811105041() {
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
                      Được biết đến là một trong những "cá mập" trong{" "}
                      <strong>chương trình thực tế</strong> nổi tiếng{" "}
                      <strong>Shark Tank</strong> (Thương Vụ Bạc Tỷ), Phó chủ
                      tịch HĐQT Phạm Thanh Hưng là một trong những người sở hữu
                      khối kiến thức khổng lồ.
                    </p>
                    <p>
                      <strong>Shark Hưng</strong> được ví như "từ điển bách khoa
                      toàn thư" khi động đến vấn đề kinh doanh nào cũng biết
                      hết. Shark Hưng cũng được biết là hình mẫu học tập của
                      giới trẻ, khi từng nhắc đến thành tích đi học của mình:
                    </p>
                    <p>
                      "Ngày xưa học đại học, cảm giác học 1 trường dễ quá, thừa
                      thời gian nên tôi không học 1 trường mà học cùng lúc 2-3
                      trường. Tôi đã tốt nghiệp đồng thời 2 trường là Đại học
                      Bách Khoa Hà Nội và <strong>Đại học Quốc gia</strong> Hà
                      Nội, đồng thời 4 lần học Thạc sĩ và học vài ngôn ngữ cùng
                      lúc".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/photo-1-16285906520021581419114.png"
                      alt="1, chương trình thực tế,đại học quốc gia,shark tank,shark hưng,"
                      note=""
                    />
                    <p>
                      Vì thấy học dễ quá nên vị "cá mập" này đã học 2-3 trường
                      cùng một lúc, không những thế lại còn tốt nghiệp 4 lần
                      Thạc sĩ và kiêm thêm việc học vài ngôn ngữ cùng một lúc.
                    </p>
                    <p>
                      Được biết, <strong>Shark Hưng</strong> là Thạc sĩ Kinh
                      doanh (MBA) - Trường Quản trị Kinh doanh, viện công nghệ
                      châu Á (Bangkok, Thailand) với ngành học Quản trị kinh
                      doanh Quốc tế, chuyên ngành Quản lý và Chuyển giao công
                      nghệ và còn là Kỹ sư Cơ khí luyện kim - Đại học Bách Khoa
                      Hà Nội - Ngành học: Đúc - Nhiệt luyện, Cử nhân Ngôn ngữ -
                      Đại học Ngoại ngữ - <strong>Đại học Quốc gia</strong> Hà
                      Nội - Ngành học: Tiếng Anh.
                    </p>
                    <p>
                      Chính nhờ điều này, <strong>Shark Hưng</strong> đã lọt top
                      những người có nhiều bằng Thạc sĩ nhất thế giới!
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/photo-1-16285906565172015554648.jpg"
                      alt="2, chương trình thực tế,đại học quốc gia,shark tank,shark hưng,"
                      note=""
                    />
                    <p>
                      Trong tuyển dụng nhân sự, vị Phó Chủ tịch cũng có nhiều
                      câu nói truyền cảm hứng.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      <strong>Shark Hưng</strong> từng gây bão khi trả lời câu
                      hỏi: "Ở cương vị người làm chủ tuyển dụng người làm thuê,
                      tiêu chuẩn nào để ông nhận người?".
                    </p>
                    <p>
                      Vị "cá mập" đã nhấn mạnh việc: "Điều đầu tiên tôi xin các
                      bạn bỏ chữ XIN trong Đơn Xin Việc".
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/photo-1-16285906850491209495768.jpg"
                      alt="3, chương trình thực tế,đại học quốc gia,shark tank,shark hưng,"
                      note=""
                    />
                    <p>
                      "Đừng bao giờ nói đi ‘xin’ việc làm. Tôi chả có gì để CHO
                      các bạn cả. Các bạn đi bán cái các bạn có và tôi là người
                      mua cái các bạn chào. Vì thế trong tuyển dụng, hãy nói về
                      việc các bạn có gì để bán. Sức lao động? Là thứ rẻ nhất
                      rồi. Thời gian? Rất công bằng, Chúa ban cho chúng ta 24
                      giờ 1 ngày, không ai có nhiều hơn ai. Cái khác nhau ở chỗ:
                      Với sức khỏe đó, với thời gian đó, các bạn tạo ra bao
                      nhiêu giá trị".
                    </p>
                    <p>
                      Điều thứ hai ông Hưng muốn nhắn nhủ, tuyển dụng là câu
                      chuyện mua bán. Một bên mua sức lực, trí tuệ, kinh nghiệm,
                      một bên bán cái mình có.
                    </p>
                    <p>Ảnh: Internet</p>
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
