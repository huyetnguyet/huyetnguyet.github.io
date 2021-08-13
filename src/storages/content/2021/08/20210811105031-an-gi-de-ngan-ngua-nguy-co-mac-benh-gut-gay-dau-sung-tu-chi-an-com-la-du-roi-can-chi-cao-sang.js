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
"title": 'Ăn gì để ngăn ngừa nguy cơ mắc bệnh gút gây đau sưng tứ chi? Ăn cơm là đủ rồi, cần chi cao sang',
"description": 'Ngày càng có nhiều người trẻ mắc bệnh gút, căn bệnh gây ra những cơn đau, sưng viêm tứ chi khiến bạn phải "sống dở chết dở". Để ngăn ngừa nguy cơ đối mặt với nó, chúng ta đều biết cần giữ cho mình 1 chế độ ăn lành mạnh nhưng liệu bạn có biết rằng chỉ cần... ăn cơm là đủ "kháng" gút?',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/photo-1-16285955955311001452446.jpg',
"alt": 'bệnh gút,gạo ong biển,',
"category": 'life',
"date": '11/08/2021',
"time": '10:50 AM',
"link": '/an-gi-de-ngan-ngua-nguy-co-mac-benh-gut-gay-dau-sung-tu-chi-an-com-la-du-roi-can-chi-cao-sang',
"zcomponent": 'page_20210811105031',
"filepath": './20210811105031-an-gi-de-ngan-ngua-nguy-co-mac-benh-gut-gay-dau-sung-tu-chi-an-com-la-du-roi-can-chi-cao-sang.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "life";
const categoryLink = "/life";
const title =
  "Ăn gì để ngăn ngừa nguy cơ mắc bệnh gút gây đau sưng tứ chi? Ăn cơm là đủ rồi, cần chi cao sang";
const author = "ANH MINH,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "11/08/2021 10:50 AM";
const description =
  'Ngày càng có nhiều người trẻ mắc bệnh gút, căn bệnh gây ra những cơn đau, sưng viêm tứ chi khiến bạn phải "sống dở chết dở". Để ngăn ngừa nguy cơ đối mặt với nó, chúng ta đều biết cần giữ cho mình 1 chế độ ăn lành mạnh nhưng liệu bạn có biết rằng chỉ cần... ăn cơm là đủ "kháng" gút?';
const link =
  "an-gi-de-ngan-ngua-nguy-co-mac-benh-gut-gay-dau-sung-tu-chi-an-com-la-du-roi-can-chi-cao-sang";
const tagparam = ["bệnh gút", "gạo ong biển"];
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

export default function page_20210811105031() {
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
                      Tại Việt Nam, theo số liệu được đăng tải trên website Bệnh
                      viện 115, tỷ lệ <strong>bệnh gút</strong> là 0,14% dân số
                      năm 2003 và tăng nhanh lên 1% dân số vào năm 2014. Trong
                      đó, 75% người bệnh ở trong độ tuổi lao động (còn rất trẻ).
                    </p>
                    <p>
                      <strong>Bệnh gút</strong> là một loại viêm khớp liên quan
                      đến cơn đau đột ngột, sưng và viêm các khớp. Gần một nửa
                      số trường hợp bệnh gút ảnh hưởng đến ngón chân cái, trong
                      khi các trường hợp khác ảnh hưởng đến ngón tay, cổ tay,
                      đầu gối và gót chân. Các cơn đau nhức thường xảy ra vào
                      ban đêm và kéo dài 3-10 ngày, tạo ra cảm giác vô cùng đau
                      đớn, khó chịu cho người bệnh.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/photo-1-1628596376105229761303.jpeg"
                      alt="1, bệnh gút,gạo ong biển,"
                      note="Người bị bệnh gút có xu hướng ngày càng trẻ hóa"
                    />
                    <p>
                      Những triệu chứng hoặc "cuộc tấn công" của{" "}
                      <strong>bệnh gút</strong> xảy ra khi có quá nhiều axit
                      uric trong máu. Axit uric là một chất thải được cơ thể tạo
                      ra khi tiêu hóa một số loại thực phẩm. Khi nồng độ axit
                      uric cao, các tinh thể của nó có thể tích tụ trong các
                      khớp của bạn. Quá trình này gây ra sưng, viêm và đau dữ
                      dội.
                    </p>
                    <p>
                      Điều này khiến cho nó khác với các bệnh về xương khớp
                      thường gặp ở người trung niên và cao tuổi là gút có thể
                      xuất hiện ngay cả ở người trẻ nếu họ có chế độ ăn uống
                      không tốt.
                    </p>
                    <p>
                      Thực phẩm chúng ta ăn chuyển hóa thành khoảng 30% tổng
                      lượng axit uric được tạo ra trong cơ thể.
                    </p>
                    <p>
                      Một số loại thực phẩm nhất định có thể kích hoạt một "cuộc
                      tấn công" của <strong>bệnh gút</strong> bằng cách làm tăng
                      nồng độ axit uric trong cơ thể của bạn. Thực phẩm kích
                      thích thường chứa nhiều purin, một chất được tìm thấy tự
                      nhiên trong thực phẩm. Khi bạn tiêu hóa purin, cơ thể sẽ
                      tạo ra axit uric như một chất thải.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/-16285960027231146846967.jpg"
                      alt="2, bệnh gút,gạo ong biển,"
                      note="Thực phẩm có thể làm tăng hoặc giảm nồng độ axit uric trong máu"
                    />
                    <p>
                      Đây không phải là vấn đề đáng lo ngại đối với những người
                      khỏe mạnh, vì cơ thể có thể dễ dàng loại bỏ axit uric dư
                      thừa với lượng nhỏ. Tuy nhiên, nếu bạn có chế độ ăn uống
                      chứa quá nhiều purin một cách thường xuyên thì axit uric
                      sẽ tích tụ và gây ra <strong>bệnh gút</strong>.
                    </p>
                    <p>
                      Và cái gì cũng có tính 2 mặt của nó, thực phẩm có thể làm
                      tăng nồng độ axit uric của bạn nhưng cũng có những loại sẽ
                      mang lại tác dụng làm giảm chỉ số này và giúp bạn ngăn
                      ngừa nguy cơ mắc bệnh.
                    </p>
                    <p>
                      Chế độ ăn phòng ngừa <strong>bệnh gút</strong> bao gồm
                      nhiều rau, trái cây và carbohydrate phức hợp (ngũ cốc và
                      đậu), trong đó phải kể đến 3 loại thực phẩm sau:
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      - Các sản phẩm từ sữa ít béo: Chẳng hạn như sữa tách béo
                      và sữa chua, có thể làm giảm nồng độ axit uric trong máu
                      và do đó làm giảm nguy cơ bị <strong>bệnh gút</strong>.
                      Các sản phẩm sữa giàu chất béo không có tác dụng ngăn ngừa
                      bệnh gút tương tự như vậy.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/photo-1-16285959203991005050767.jpg"
                      alt="3, bệnh gút,gạo ong biển,"
                      note="Anh đào nguyên chất có lợi cho sức khỏe, ngăn ngừa bệnh gút"
                    />
                    <p>
                      - Anh đào: Từ lâu, anh đào đã được cho là có thể ngăn ngừa
                      nguy cơ mắc <strong>bệnh gút</strong>, và có một số bằng
                      chứng khoa học chứng minh điều này. Anh đào tươi hay đông
                      lạnh, nước ép anh đào 100% nguyên chất không đường, hoặc
                      chiết xuất anh đào đều có thể có lợi.
                    </p>
                    <p>
                      - Một số loại gạo: Các nghiên cứu trên thế giới cho thấy
                      carbohydrate phức hợp (ngũ cốc và đậu) không làm tăng nồng
                      độ axit uric trong máu, vì vậy, nó an toàn với người bị{" "}
                      <strong>bệnh gút</strong>. Thậm chí, có một số loại gạo
                      còn mang lại lợi ích ngăn ngừa nguy cơ mắc bệnh gút.
                    </p>
                    <p>
                      Bên cạnh gạo lứt, gạo hữu cơ Thần nông Ong biển là một
                      trong số đó. Thông qua các thí nghiệm sinh lý và sinh hóa,
                      kiểm tra hoạt tính chống gút, PGS. Trần Đăng Xuân, Trưởng
                      phòng thí nghiệm Sinh lý thực vật và Hóa sinh, Đại học
                      Hiroshima (Nhật Bản) nhận thấy sự kết hợp của hợp chất
                      Momilactone A và B (viết tắt là MA và MB) có trong{" "}
                      <strong>gạo Ong biển</strong> theo tỷ lệ 4:1 cho kết quả
                      ức chế tối ưu enzyme xanthine oxidase liên quan đến chống{" "}
                      <strong>bệnh gút</strong>.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/photo-1-16285955955311001452446.jpg"
                      alt="4, bệnh gút,gạo ong biển,"
                      note="Hợp chất Momilactone A và B (Ảnh: ongbien.vn)"
                    />
                    <p>
                      Từ đó, có thể thấy MA và MB là các hợp chất tiềm năng
                      chống <strong>bệnh gút</strong> mới thông qua khả năng ức
                      chế hoạt động của các enzymes liên quan đến bệnh gút. Qua
                      đó, PGS. Xuân khẳng định việc ăn một lượng{" "}
                      <strong>gạo Ong biển</strong> nhất định hàng ngày có thể
                      giúp giảm nguy cơ mắc bệnh gút.
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
