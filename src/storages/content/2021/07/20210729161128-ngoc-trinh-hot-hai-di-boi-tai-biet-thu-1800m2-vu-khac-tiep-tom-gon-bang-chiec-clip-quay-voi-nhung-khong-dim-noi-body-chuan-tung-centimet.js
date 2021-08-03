import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '29/07/2021 04:11 PM',
"title": 'Ngọc Trinh đi bơi tại biệt thự 1800m2, Vũ Khắc Tiệp "tóm gọn" bằng clip quay vội nhưng không dìm nổi body chuẩn chỉnh',
"description": 'Người hâm mộ một lần nữa "mắt tròn mắt dẹt" với chiếc clip "sương sương" ghi lại khoảnh khắc quyến rũ không lối thoát của Ngọc Trinh.',
"src": '',
"alt": 'Ngọc Trinh,nữ hoàng nội y Ngọc Trinh,Body Ngọc Trinh,nữ hoàng nội y,Vũ Khắc Tiệp,ông bầu Vũ Khắc Tiệp,ông bầu Venus,sao Việt,đại chiến bikini,Sao diện bikini,',
"category": 'stars',
"date": '29/07/2021',
"time": '04:11 PM',
"link": '/ngoc-trinh-hot-hai-di-boi-tai-biet-thu-1800m2-vu-khac-tiep-tom-gon-bang-chiec-clip-quay-voi-nhung-khong-dim-noi-body-chuan-tung-centimet',
"zcomponent": 'page_20210729161128',
"filepath": './20210729161128-ngoc-trinh-hot-hai-di-boi-tai-biet-thu-1800m2-vu-khac-tiep-tom-gon-bang-chiec-clip-quay-voi-nhung-khong-dim-noi-body-chuan-tung-centimet.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  'Ngọc Trinh đi bơi tại biệt thự 1800m2, Vũ Khắc Tiệp "tóm gọn" bằng clip quay vội nhưng không dìm nổi body chuẩn chỉnh';
const author = "MON,";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:11 PM";
const description =
  'Người hâm mộ một lần nữa "mắt tròn mắt dẹt" với chiếc clip "sương sương" ghi lại khoảnh khắc quyến rũ không lối thoát của Ngọc Trinh.';
const link =
  "ngoc-trinh-hot-hai-di-boi-tai-biet-thu-1800m2-vu-khac-tiep-tom-gon-bang-chiec-clip-quay-voi-nhung-khong-dim-noi-body-chuan-tung-centimet";
const tagparam = [
  "Ngọc Trinh",
  "nữ hoàng nội y Ngọc Trinh",
  "Body Ngọc Trinh",
  "nữ hoàng nội y",
  "Vũ Khắc Tiệp",
  "ông bầu Vũ Khắc Tiệp",
  "ông bầu Venus",
  "sao Việt",
  "đại chiến bikini",
  "Sao diện bikini",
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

export default function page_20210729161128() {
  return (
    <>
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
                      Được <strong>Vũ Khắc Tiệp</strong> chuẩn bị cho hẳn một
                      căn phòng toàn màu hồng rộng 80m2,{" "}
                      <strong>Ngọc Trinh</strong> nhanh chóng dọn đồ "theo chàng
                      về dinh". Chân dài xứ Trà Vinh chẳng ngần ngại mang hết
                      quần áo, giày dép, túi xách hàng hiệu sang căn biệt thự
                      này để phục vụ cho việc "sống ảo".{" "}
                      <strong>Nữ hoàng nội y</strong> liên tục khiến dân tình
                      "mắt chữ O miệng chữ A" khi thả dáng tại "lâu đài tình ái"
                      với các shoot hình gợi cảm.
                    </p>
                    <p>
                      Body <strong>Ngọc Trinh</strong> nuột nà, quyến rũ là điều
                      mà ai cũng biết. Thế nhưng trong clip được{" "}
                      <strong>ông bầu Venus</strong> đăng tải mới đây, dân tình
                      còn phải xuýt xoa hơn nữa. Dù đoạn clip chỉ ghi lại khoảnh
                      khắc người đẹp xuất hiện chớp nhoáng khi chạy đi bơi nhưng
                      cũng đủ để khiến netizen trầm trồ. Vốn chuộng phong cách
                      "thiếu ngược hở xuôi", chân dài 8x chỉ diện chiếc bikini 2
                      mảnh màu hồng nhỏ xíu, khoe trọn vòng eo con kiến trứ danh
                      và đôi chân dài cực phẩm. Mới chuyển qua ở mà Ngọc Trinh
                      đã có 7749 bức ảnh đẹp, dự kiến trong thời gian tới cô
                      nàng và <strong>Vũ Khắc Tiệp</strong> sẽ tiếp tục "khuẩy
                      đảo" MXH bằng hàng loạt khoảnh khắc thú vị tại đây.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/4/photo-1-16253595832721777633316.png"
                      alt="1, Ngọc Trinh,nữ hoàng nội y Ngọc Trinh,Body Ngọc Trinh,nữ hoàng nội y,Vũ Khắc Tiệp,ông bầu Vũ Khắc Tiệp,ông bầu Venus,sao Việt,đại chiến bikini,Sao diện bikini,"
                      note="Ngọc Trinh hớt hải chạy đi bơi, không biết có điều gì mà người đẹp lại vội thế này?"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/4/photo-1-1625359594227356021684.png"
                      alt="2, Ngọc Trinh,nữ hoàng nội y Ngọc Trinh,Body Ngọc Trinh,nữ hoàng nội y,Vũ Khắc Tiệp,ông bầu Vũ Khắc Tiệp,ông bầu Venus,sao Việt,đại chiến bikini,Sao diện bikini,"
                      note="Đập vào mắt dân tình là vòng eo con kiến và đôi chân dài cực phẩm của mỹ nhân xứ Trà Vinh"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/4/photo-1-1625361315149525605694.png"
                      alt="3, Ngọc Trinh,nữ hoàng nội y Ngọc Trinh,Body Ngọc Trinh,nữ hoàng nội y,Vũ Khắc Tiệp,ông bầu Vũ Khắc Tiệp,ông bầu Venus,sao Việt,đại chiến bikini,Sao diện bikini,"
                      note="Kể từ khi cơ ngơi triệu đô của Vũ Khắc Tiệp được hoàn thiện, Ngọc Trinh chăm khoe body hơn hẳn"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/4/photo-1-16253595653832022361299.jpg"
                      alt="4, Ngọc Trinh,nữ hoàng nội y Ngọc Trinh,Body Ngọc Trinh,nữ hoàng nội y,Vũ Khắc Tiệp,ông bầu Vũ Khắc Tiệp,ông bầu Venus,sao Việt,đại chiến bikini,Sao diện bikini,"
                      note="Dù diện trang phục kín hay hở thì mỹ nhân 8x vẫn toát lên vẻ gợi cảm khó cưỡng"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/4/photo-1-16253597488761862861970.png"
                      alt="5, Ngọc Trinh,nữ hoàng nội y Ngọc Trinh,Body Ngọc Trinh,nữ hoàng nội y,Vũ Khắc Tiệp,ông bầu Vũ Khắc Tiệp,ông bầu Venus,sao Việt,đại chiến bikini,Sao diện bikini,"
                      note="Biệt thự xa hoa của ông bầu Venus vốn đã đẹp, nay lại được Ngọc Trinh liên tục check-in làm tăng thêm độ hot"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/4/photo-1-16253597488761862861970.png"
                      alt="6, Ngọc Trinh,nữ hoàng nội y Ngọc Trinh,Body Ngọc Trinh,nữ hoàng nội y,Vũ Khắc Tiệp,ông bầu Vũ Khắc Tiệp,ông bầu Venus,sao Việt,đại chiến bikini,Sao diện bikini,"
                      note="Tối 2/7, đôi bạn thân vừa nấu ăn vừa livestream trò chuyện với khán giả"
                    />
                    <p>
                      Thời gian tới, dân tình sẽ tiếp tục được chiêm ngưỡng 7749
                      bức ảnh và clip khoe trọn body chuẩn từng centimet của
                      chân dài xứ Trà
                    </p>
                    <p>Ảnh & clip: Sưu tầm, Instagram nhân vật</p>
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
