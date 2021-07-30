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
"timestamp": '29/07/2021 04:22 PM',
"title": 'Cái chết của Ung Chính sau cả trăm năm vẫn là bí ẩn nay được hé lộ qua một hồ sơ mật, chính sử không dám ghi lại',
"description": 'Nguyên nhân thực sự đằng sau cái chết của Ung Chính là gì?',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/22/-16269520845031092644030.jpg',
"alt": 'Ung Chính,Lịch sử Trung Quốc,',
"category": 'news',
"date": '29/07/2021',
"time": '04:22 PM',
"link": '/cai-chet-cua-ung-chinh-sau-ca-tram-nam-van-la-bi-an-nay-duoc-he-lo-qua-mot-ho-so-mat-chinh-su-khong-dam-ghi-lai',
"zcomponent": 'page_20210729162250',
"filepath": './20210729162250-cai-chet-cua-ung-chinh-sau-ca-tram-nam-van-la-bi-an-nay-duoc-he-lo-qua-mot-ho-so-mat-chinh-su-khong-dam-ghi-lai.js'
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
  "Cái chết của Ung Chính sau cả trăm năm vẫn là bí ẩn nay được hé lộ qua một hồ sơ mật, chính sử không dám ghi lại";
const author = "PHẠM TRANG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "29/07/2021 04:22 PM";
const description =
  "Nguyên nhân thực sự đằng sau cái chết của Ung Chính là gì?";
const link =
  "cai-chet-cua-ung-chinh-sau-ca-tram-nam-van-la-bi-an-nay-duoc-he-lo-qua-mot-ho-so-mat-chinh-su-khong-dam-ghi-lai";
const tagparam = ["Ung Chính", "Lịch sử Trung Quốc"];
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

export default function page_20210729162250() {
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
                    Trong số mười hai vị hoàng đế của triều Thanh, có thể nói
                    cuộc đời của Hoàng đế <strong>Ung Chính</strong> chứa nhiều
                    bí ẩn nhất. Về việc ông kế vị ngai vàng thế nào, nguyên nhân
                    cái chết đều là một bí ẩn lớn đối với hậu thế. Đến nay, một
                    phần những bí ẩn này đã được giải đáp qua một tài liệu mật.
                    Mọi người sau khi biết được không khỏi cảm thán, chẳng trách
                    ngay cả chính sử triều Thanh cũng không dám lưu lại.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/22/-16269520850801595646324.jpg"
                    alt="3, Ung Chính,Lịch sử Trung Quốc,"
                    note=""
                  />
                  <p>
                    Căn cứ vào một hồ sơ mật của hoàng gia, tức sổ sách của Nội
                    chính bộ, có ghi chép lại một số nội dung về việc mua bán
                    trong cung. Đặc biệt có thể thấy, 5 năm trước khi{" "}
                    <strong>Ung Chính</strong> qua đời đã mua một số lượng lớn
                    than củi và quặng bạc, lên tới khoảng 2000 kg. Đồng thời,
                    cũng có không ít lưu huỳnh, chì đen cùng nhiều chất khác
                    được đưa đến vườn Viên Minh.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/22/-16269520845031092644030.jpg"
                    alt="1, Ung Chính,Lịch sử Trung Quốc,"
                    note=""
                  />
                  <p>
                    Nhìn thấy danh sách này, chắc chắn mỗi người đều đã có cho
                    mình đáp án. Những thứ này vào thời cổ đại cùng lúc xuất
                    hiện chỉ có thể nói lên 1 điều: Có người đang tinh luyện
                    dược hoàn. <strong>Ung Chính</strong> thực sự đã sử dụng
                    loại thuốc này, hơn nữa còn thưởng cho triều thần. Như vậy,
                    đáp án về cái chết của Hoàng đế Ung Chính đã có lời đáp.
                    Những viên tiên đan được tinh luyện này, bình thường sẽ chứa
                    hàm lượng kim loại lớn vượt quá ngưỡng cho phép, thời gian
                    sử dụng lâu dài sẽ trúng độc kim loại rồi dẫn đến tử vong.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Sau khi <strong>Ung Chính</strong> chết, Càn Long lên ngôi.
                    Là một đứa con hiếu thảo, ông đương nhiên không thể để
                    nguyên nhân cái chết của phụ vương lan truyền khắp thiên hạ,
                    cũng như bôi nhọ danh dự của Hoàng gia nên đã tận lực che
                    giấu sự thật. Khó trách những sử quan cũng không dám ghi lại
                    trong sử sách.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/22/-16269520850801595646324.jpg"
                    alt="2, Ung Chính,Lịch sử Trung Quốc,"
                    note=""
                  />
                  <p>Theo: Sohu</p>
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
