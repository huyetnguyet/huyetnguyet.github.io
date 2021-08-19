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
"timestamp": '19/08/2021 01:02 PM',
"title": 'Nữ MC Việt từng bị chỉ trích dữ dội vì mặc bikini dẫn chương trình',
"description": 'Việc mặc bikini lên sóng truyền hình khiến nữ MC nhận về nhiều ý kiến trái chiều.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/19/screen-shot-2021-08-19-at-124627-16293520790851919126446.png',
"alt": 'Tiên Tri Nước Nga,MC,bikini,phản cảm,gây tranh cãi,chỉ trích,ném đá,World Cup,mc thu hằng,',
"category": 'images',
"date": '19/08/2021',
"time": '01:02 PM',
"link": '/nu-mc-viet-tung-bi-chi-trich-du-doi-vi-mac-bikini-dan-chuong-trinh',
"zcomponent": 'page_20210819130241',
"filepath": './20210819130241-nu-mc-viet-tung-bi-chi-trich-du-doi-vi-mac-bikini-dan-chuong-trinh.js'
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
  "Nữ MC Việt từng bị chỉ trích dữ dội vì mặc bikini dẫn chương trình";
const author = "BELL SHINO,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "19/08/2021 01:02 PM";
const description =
  "Việc mặc bikini lên sóng truyền hình khiến nữ MC nhận về nhiều ý kiến trái chiều.";
const link =
  "nu-mc-viet-tung-bi-chi-trich-du-doi-vi-mac-bikini-dan-chuong-trinh";
const tagparam = [
  "Tiên Tri Nước Nga",
  "MC",
  "bikini",
  "phản cảm",
  "gây tranh cãi",
  "chỉ trích",
  "ném đá",
  "World Cup",
  "mc thu hằng",
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

export default function page_20210819130241() {
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
                      Việc mặc <strong>bikini</strong> lên sóng truyền hình
                      khiến nữ <strong>MC</strong> nhận về nhiều ý kiến trái
                      chiều.
                    </p>
                    <p>
                      Mỗi khi lên sóng truyền hình, <strong>MC</strong> thường
                      diện trang phục chỉnh tề trước khán giả. Tuy nhiên, một
                      kênh truyền hình Việt từng xảy ra trường hợp ngoại lệ,
                      nhận về nhiều <strong>chỉ trích</strong> vì để nữ MC diện{" "}
                      <strong>bikini</strong> dẫn chương trình bóng đá.
                    </p>
                    <p>
                      Vào năm 2018, chương trình đồng hành cùng{" "}
                      <strong>World Cup</strong> tên{" "}
                      <strong>Tiên Tri Nước Nga</strong> từng{" "}
                      <strong>gây tranh cãi</strong> vì để <strong>MC</strong>{" "}
                      Thu Hằng mặc <strong>bikini</strong> táo bạo trên sóng
                      truyền hình. Cụ thể ngoài thể hiện phần kiến thức thể thao
                      phong phú và cách dẫn lưu loát, trong tập ghi hình ở hồ
                      bơi, cô còn thoải mái mặc bikini để cùng dự đoán tỉ số
                      trận đấu với chú hải cầu.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/19/photo-1-16293521330002056257447.jpg"
                      alt="1, Tiên Tri Nước Nga,MC,bikini,phản cảm,gây tranh cãi,chỉ trích,ném đá,World Cup,mc thu hằng,"
                      note="Trong một số phát sóng, MC Thu Hằng mặc một bikini hai mảnh màu cam"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/19/photo-1-16293530123871987113850.jpg"
                      alt="2, Tiên Tri Nước Nga,MC,bikini,phản cảm,gây tranh cãi,chỉ trích,ném đá,World Cup,mc thu hằng,"
                      note="Các ngày trước đó, cô đều chọn những bộ bikini gợi cảm"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Ngay khi chương trình lên sóng, rất nhiều khán giả bày tỏ
                      ý kiến trên trang Facebook của chương trình. Có người nói
                      vui, họ xem chương trình vì <strong>MC</strong> Thu Hằng
                      chứ chẳng cần quan tâm tới việc đội bóng nào thắng hay
                      thua. Những người khác thì cho rằng, hình ảnh MC mặc{" "}
                      <strong>bikini</strong> dẫn chương trình chưa thực sự phù
                      hợp với số đông khán giả Việt, dễ gây{" "}
                      <strong>phản cảm</strong>. Không ít khán giả còn gay gắt{" "}
                      <strong>chỉ trích</strong> cho rằng cách dẫn thiếu tôn
                      trọng cả phụ nữ lẫn người xem. Dù đây có là quyết định của
                      nhà sản xuất nhưng bản thân Thu Hằng cũng bị liên lụy.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/19/photo-1-16293529229451921908541.jpg"
                      alt="3, Tiên Tri Nước Nga,MC,bikini,phản cảm,gây tranh cãi,chỉ trích,ném đá,World Cup,mc thu hằng,"
                      note="Diện bikini, Thu Hằng khiến nhiều người đỏ mặt"
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/19/screen-shot-2021-08-19-at-124627-16293520790851919126446.png"
                      alt="4, Tiên Tri Nước Nga,MC,bikini,phản cảm,gây tranh cãi,chỉ trích,ném đá,World Cup,mc thu hằng,"
                      note=""
                    />

                    <p>Ảnh: Tiên Tri Nước Nga, Internet</p>
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
