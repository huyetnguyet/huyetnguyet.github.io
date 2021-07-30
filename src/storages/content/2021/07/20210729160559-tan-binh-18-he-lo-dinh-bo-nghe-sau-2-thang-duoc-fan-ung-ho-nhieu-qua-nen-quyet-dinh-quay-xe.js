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
"timestamp": '29/07/2021 04:05 PM',
"title": 'Tân binh 18+ hé lộ định bỏ nghề sau 2 tháng, được fan ủng hộ nhiều quá nên quyết định "quay xe"',
"description": 'Ban đầu, Nozomi Ishihara có ý định đóng càng nhiều phim càng tốt, sau đó sẽ "nghỉ hưu" non chỉ sau 2 tháng.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-16265969479391177303039.jpeg',
"alt": 'IDOL,NOZOMI ISHIHARA,',
"category": 'images',
"date": '29/07/2021',
"time": '04:05 PM',
"link": '/tan-binh-18-he-lo-dinh-bo-nghe-sau-2-thang-duoc-fan-ung-ho-nhieu-qua-nen-quyet-dinh-quay-xe',
"zcomponent": 'page_20210729160559',
"filepath": './20210729160559-tan-binh-18-he-lo-dinh-bo-nghe-sau-2-thang-duoc-fan-ung-ho-nhieu-qua-nen-quyet-dinh-quay-xe.js'
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
  'Tân binh 18+ hé lộ định bỏ nghề sau 2 tháng, được fan ủng hộ nhiều quá nên quyết định "quay xe"';
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:05 PM";
const description =
  'Ban đầu, Nozomi Ishihara có ý định đóng càng nhiều phim càng tốt, sau đó sẽ "nghỉ hưu" non chỉ sau 2 tháng.';
const link =
  "tan-binh-18-he-lo-dinh-bo-nghe-sau-2-thang-duoc-fan-ung-ho-nhieu-qua-nen-quyet-dinh-quay-xe";
const tagparam = ["IDOL", "NOZOMI ISHIHARA"];
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

export default function page_20210729160559() {
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
                    <strong>Nozomi Ishihara</strong> sinh năm 2001, gia nhập
                    ngành công nghiệp 18+ vào tháng 6/2020. Với khuôn mặt xinh
                    đẹp, thân hình nóng bỏng cùng tính cách duyên dáng, cô nàng
                    nhanh chóng được các cư dân mạng chú ý và đem so sánh với
                    các "nữ thần AV" trước đây. Một điều khác khiến cho Nozomi
                    Ishihara trở nên nổi trội bởi cô nàng hoạt động với tần suất
                    chóng mặt - hơn 10 phim 1 tháng, tạo nên cơn sốt mới trong
                    làng AV khi đẩy cho tên tuổi của Nozomi Ishihara lên cao
                    hơn.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-16265969479391177303039.jpeg"
                    alt="1, IDOL,NOZOMI ISHIHARA,"
                    note=""
                  />
                  <p>
                    Trong khoảng 3 tháng giữa năm 2020,{" "}
                    <strong>Nozomi Ishihara</strong> liên tục giữ vị trí số 1
                    trong bảng xếp hạng của các nền tảng 18+, vượt qua cả các
                    đàn chị Yua Mikami, Eimi Fukada, v.v... Nhận thấy sức hút
                    của cô gái trẻ, thậm chí các studio lớn của ngành công
                    nghiệp AV cũng đã vào cuộc.
                  </p>
                  <p>
                    {" "}
                    Trước đây, <strong>Nozomi Ishihara</strong> chỉ là 1 nữ diễn
                    viên tự do và được trả lương ở mức khá thấp, nếu so sánh với
                    các diễn viên độc quyền. Tuy nhiên, hãng phim Moodyz đã chìa
                    tay ra với Nozomi mời 1 bản hợp đồng với mức lót tay có giá
                    trị lớn để mời cô gái này ký hợp đồng độc quyền.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-1626596962542734849726.jpeg"
                    alt="2, IDOL,NOZOMI ISHIHARA,"
                    note=""
                  />
                  <p>
                    Cho tới nay, cô nàng đã có hơn 1 năm hoạt động trong ngành
                    công nghiệp 18+. Đến lúc này, cô gái sinh năm 2001 mới nhìn
                    lại và tâm sự với các fan hâm mộ về những thứ đã xảy ra
                    trong suốt 1 năm vừa qua. Theo như cô nàng chia sẻ, lúc mới
                    tham gia vào ngành công nghiệp AV, mọi dự định hoàn toàn
                    khác xa với những gì cô làm ở thời điểm hiện tại.
                  </p>
                  <p>
                    Ban đầu, <strong>Nozomi Ishihara</strong> có ý định đóng
                    càng nhiều phim càng tốt, sau đó sẽ "nghỉ hưu" non chỉ sau 2
                    tháng. Dù vậy, mọi thứ lại khá suôn sẻ và cô nàng cảm thấy
                    vui hơn dự tính rất nhiều. Bản thân Nozomi cũng nhận được
                    rất nhiều sự ủng hộ không chỉ từ fan, mà còn có cả những câu
                    nói khích lệ từ người quản lý, đạo diễn và nhà sản xuất.
                    Cuối cùng, cô nàng quyết định "ở lại" với nghề.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Cô nàng cũng cảm thấy may mắn vì nhanh chóng được nhiều
                    người biết đến trên mạng xã hội. Chỉ sau khoảng 2 tháng làm
                    diễn viên 18+, <strong>Nozomi Ishihara</strong> đã có được
                    hơn 90 nghìn người theo dõi. Việc dịch bệnh xảy ra cũng giúp
                    cho cô nàng có nhiều thời gian để tương tác trực tiếp với
                    fan trên mạng xã hội và trở nên nổi tiếng hơn.{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-1626597041276242658510.jpeg"
                    alt="3, IDOL,NOZOMI ISHIHARA,"
                    note=""
                  />
                  <p>
                    Là một cô gái đến từ tỉnh lẻ, thế nên Nozomi dành rất nhiều
                    thời gian cho điện thoại mỗi khi rảnh rỗi. Cô nàng cũng rất
                    thích chụp ảnh selfie, làm dáng và đăng tải lên cho mọi
                    người xem, sau đó xem phản ứng và bình luận của từng người.{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-1626597176644916185181.jpeg"
                    alt="4, IDOL,NOZOMI ISHIHARA,"
                    note=""
                  />
                  <p>
                    Vào thời điểm này, <strong>Nozomi Ishihara</strong> đã cảm
                    thấy thoải mái hơn rất nhiều, do cô nàng đã thích nghi được
                    với tình trạng hiện tại. Tuy nhiên, cô nàng cũng muốn dịch
                    bệnh sẽ sớm qua và sẽ sớm gặp được mọi người nhiều hơn trong
                    thời gian sắp tới.{" "}
                  </p>
                  <p>Bài viết được thực hiện với sự trợ giúp của AV Crush.</p>
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
