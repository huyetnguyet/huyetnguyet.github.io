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
"timestamp": '06/08/2021 09:36 AM',
"title": 'Hành trình thay đổi body của "bông hồng lai" Somi: Fan lo lắng vì vòng eo siêu thực lộ cả xương sườn?',
"description": 'Qua thời gian, center đời đầu của chuỗi show tuyển tú Produce - Jeon Somi ngày một đổi khác, trưởng thành và vô cùng cuốn hút.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-1-16282351309751096494008.jpg',
"alt": 'Jeon Somi,somi,produce,Produce 101,sixteen,JYP,JYP Entertainment,The Black Label,Teddy,vóc dáng,nuột nà,búp bê sống,',
"category": 'stars',
"date": '06/08/2021',
"time": '09:36 AM',
"link": '/hanh-trinh-thay-doi-body-cua-bong-hong-lai-somi-fan-lo-lang-vi-vong-eo-sieu-thuc-lo-ca-xuong-suon',
"zcomponent": 'page_20210806093626',
"filepath": './20210806093626-hanh-trinh-thay-doi-body-cua-bong-hong-lai-somi-fan-lo-lang-vi-vong-eo-sieu-thuc-lo-ca-xuong-suon.js'
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
  'Hành trình thay đổi body của "bông hồng lai" Somi: Fan lo lắng vì vòng eo siêu thực lộ cả xương sườn?';
const author = "JAFAR,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "06/08/2021 09:36 AM";
const description =
  "Qua thời gian, center đời đầu của chuỗi show tuyển tú Produce - Jeon Somi ngày một đổi khác, trưởng thành và vô cùng cuốn hút.";
const link =
  "hanh-trinh-thay-doi-body-cua-bong-hong-lai-somi-fan-lo-lang-vi-vong-eo-sieu-thuc-lo-ca-xuong-suon";
const tagparam = [
  "Jeon Somi",
  "somi",
  "produce",
  "Produce 101",
  "sixteen",
  "JYP",
  "JYP Entertainment",
  "The Black Label",
  "Teddy",
  "vóc dáng",
  "nuột nà",
  "búp bê sống",
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

export default function page_20210806093626() {
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
                      Nổi lên từ chương trình thực tế sống còn{" "}
                      <strong>SIXTEEN</strong> của <strong>JYP</strong>, tuy
                      không được ra mắt cùng TWICE nhưng{" "}
                      <strong>
                        Jeon <strong>Somi</strong>
                      </strong>{" "}
                      đã hút về một lượng fan đáng kể. Ngay từ thời điểm đó,
                      "bông hồng lai" đã có mặt trong nhiều topic hot về nhan
                      sắc, cô nàng được kỳ vọng sẽ là ngôi sao chủ lực trong
                      nhóm nhạc mới của JYP.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-1-16282351278141800492618.jpg"
                      alt="1, Jeon Somi,somi,produce,Produce 101,sixteen,JYP,JYP Entertainment,The Black Label,Teddy,vóc dáng,nuột nà,búp bê sống,"
                      note="Somi gây ấn tượng mạnh bởi vẻ đẹp lai bừng sáng, khuôn mặt lanh lợi trong SIXTEEN"
                    />
                    <p>
                      Không lâu sau, <strong>Somi</strong> rời{" "}
                      <strong>JYP</strong> để đến <strong>Produce</strong> 101
                      tìm con đường mới. Thành công đã mỉm cười với cô khi nữ
                      idol giành vị trí Quán quân, trở thành một phần của I.O.I.
                      Từ lúc này, Somi được đi show nhiều hơn, khán giả cũng
                      thấy được tính cách hài hước pha chút trẻ con của cô nàng
                      rất hợp với các chương trình giải trí.
                    </p>
                    <p>
                      <strong>Vóc dáng</strong> <strong>nuột nà</strong> thời{" "}
                      <strong>Produce</strong> 101 của "bông hồng lai"
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-2-16282351310381847150739.jpg"
                      alt="2, Jeon Somi,somi,produce,Produce 101,sixteen,JYP,JYP Entertainment,The Black Label,Teddy,vóc dáng,nuột nà,búp bê sống,"
                      note="Somi thời gian là thành viên của I.O.I sở hữu body săn chắc, sexy không thua kém đàn chị nào"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-3-1628235131112203355220.jpg"
                      alt="3, Jeon Somi,somi,produce,Produce 101,sixteen,JYP,JYP Entertainment,The Black Label,Teddy,vóc dáng,nuột nà,búp bê sống,"
                      note="Nhí nhảnh trên Weekly Idol"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-4-162823513116167913041.jpg"
                      alt="4, Jeon Somi,somi,produce,Produce 101,sixteen,JYP,JYP Entertainment,The Black Label,Teddy,vóc dáng,nuột nà,búp bê sống,"
                      note="Bùng nổ nhan sắc khi quay Knowing Brother"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-5-1628235131190168046454.jpg"
                      alt="5, Jeon Somi,somi,produce,Produce 101,sixteen,JYP,JYP Entertainment,The Black Label,Teddy,vóc dáng,nuột nà,búp bê sống,"
                      note="Bên cạnh chế độ ăn uống nghiêm khắc, Somi tiết lộ bí quyết giúp có thân hình hoàn hảo là nhờ vào việc tập pilates"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-6-16282351312471340229711.jpg"
                      alt="6, Jeon Somi,somi,produce,Produce 101,sixteen,JYP,JYP Entertainment,The Black Label,Teddy,vóc dáng,nuột nà,búp bê sống,"
                      note="Body không khuyết điểm của thần tượng 10X xứ Hàn"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Ngày 2/8 vừa qua,{" "}
                      <strong>
                        Jeon <strong>Somi</strong>
                      </strong>{" "}
                      đã chính thức trở lại đường đua âm nhạc bằng single Dumb
                      Dumb. Cô nàng đã ăn uống, tập luyện rất khắt khe để ép cân
                      xuống còn mức 46,6kg. Hiện tại, nhan sắc của nữ idol sinh
                      năm 2001 càng ngày càng ấn tượng nhờ{" "}
                      <strong>vóc dáng</strong> <strong>nuột nà</strong>, gương
                      mặt lai Tây không khác gì búp bê Barbie sống.
                    </p>
                    <p>
                      Tuy nhiên <strong>vóc dáng</strong> mình hạc xương mai của
                      cô khiến nhiều khán giả lo lắng. Họ cho rằng chỉ số cơ thể
                      của{" "}
                      <strong>
                        Jeon <strong>Somi</strong>
                      </strong>{" "}
                      đáng báo động. Trong ảnh mới đăng trên Instagram cá nhân,
                      Somi khoe vòng eo bé xíu lộ cả xương sườn, một số ý kiến
                      khuyên cô nàng nên tăng cân để cơ thể cân đối và đảm bảo
                      sức khỏe.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-8-1628235131345952491061.jpg"
                      alt="7, Jeon Somi,somi,produce,Produce 101,sixteen,JYP,JYP Entertainment,The Black Label,Teddy,vóc dáng,nuột nà,búp bê sống,"
                      note="Hình thể của Somi sau khi tích cực giảm cân"
                    />
                    <p>
                      Từ khi{" "}
                      <strong>
                        Jeon <strong>Somi</strong>
                      </strong>{" "}
                      đầu quân cho <strong>The Black Label</strong> - công ty
                      con của YG Entertainment do <strong>Teddy</strong> đứng
                      đầu, cô nàng như "cá gặp nước", phong cách thời trang, âm
                      nhạc đều được định hình lại, cuốn hút lượng fan mới
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-10-16282351317491752424435.jpg"
                      alt="8, Jeon Somi,somi,produce,Produce 101,sixteen,JYP,JYP Entertainment,The Black Label,Teddy,vóc dáng,nuột nà,búp bê sống,"
                      note="Bên cạnh đó, vẫn rất nhiều fan khen ngợi cô nàng giảm cân mặt nhìn Tây hơn,khuôn mặt nhìn đẹp hơn. Tuy gầy hơn trước nhưng cơ thể vẫn săn gọn, khỏe mạnh"
                    />
                    <p>Ảnh: Internet</p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-1-16282351309751096494008.jpg"
                      alt="9, Jeon Somi,somi,produce,Produce 101,sixteen,JYP,JYP Entertainment,The Black Label,Teddy,vóc dáng,nuột nà,búp bê sống,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-9-1628235131453372072344.jpg"
                      alt="10, Jeon Somi,somi,produce,Produce 101,sixteen,JYP,JYP Entertainment,The Black Label,Teddy,vóc dáng,nuột nà,búp bê sống,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-11-1628235131496408015421.jpg"
                      alt="11, Jeon Somi,somi,produce,Produce 101,sixteen,JYP,JYP Entertainment,The Black Label,Teddy,vóc dáng,nuột nà,búp bê sống,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-12-16282351318111238492187.jpg"
                      alt="12, Jeon Somi,somi,produce,Produce 101,sixteen,JYP,JYP Entertainment,The Black Label,Teddy,vóc dáng,nuột nà,búp bê sống,"
                      note=""
                    />
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
