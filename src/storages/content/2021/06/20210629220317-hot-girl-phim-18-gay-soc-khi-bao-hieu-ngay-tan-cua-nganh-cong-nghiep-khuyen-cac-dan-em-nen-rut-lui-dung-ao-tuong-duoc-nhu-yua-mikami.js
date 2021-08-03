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
"timestamp": '29/06/2021 10:03 PM',
"title": 'Hot girl phim 18+ gây sốc khi báo hiệu ngày tàn của ngành công nghiệp, khuyên các đàn em nên rút lui, đừng ảo tưởng được như Yua Mikami',
"description": 'Tuyên bố của một hot girl trong ngành cho thấy chỉ những cái tên top đầu như Yua Mikami mới "sinh tồn" dễ dàng trong hai tháng qua.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/',
"alt": 'HOT GIRL,GÁI XINH,YUA MIKAMI,CỘNG ĐỒNG MẠNG,',
"category": 'images',
"date": '29/06/2021',
"time": '10:03 PM',
"link": '/hot-girl-phim-18-gay-soc-khi-bao-hieu-ngay-tan-cua-nganh-cong-nghiep-khuyen-cac-dan-em-nen-rut-lui-dung-ao-tuong-duoc-nhu-yua-mikami',
"zcomponent": 'page_20210629220317',
"filepath": './20210629220317-hot-girl-phim-18-gay-soc-khi-bao-hieu-ngay-tan-cua-nganh-cong-nghiep-khuyen-cac-dan-em-nen-rut-lui-dung-ao-tuong-duoc-nhu-yua-mikami.js'
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
  "Hot girl phim 18+ gây sốc khi báo hiệu ngày tàn của ngành công nghiệp, khuyên các đàn em nên rút lui, đừng ảo tưởng được như Yua Mikami";
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 10:03 PM";
const description =
  'Tuyên bố của một hot girl trong ngành cho thấy chỉ những cái tên top đầu như Yua Mikami mới "sinh tồn" dễ dàng trong hai tháng qua.';
const link =
  "hot-girl-phim-18-gay-soc-khi-bao-hieu-ngay-tan-cua-nganh-cong-nghiep-khuyen-cac-dan-em-nen-rut-lui-dung-ao-tuong-duoc-nhu-yua-mikami";
const tagparam = ["HOT GIRL", "GÁI XINH", "YUA MIKAMI", "CỘNG ĐỒNG MẠNG"];
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

export default function page_20210629220317() {
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
                      Dịch bệnh đã ảnh hưởng tới rất nhiều ngành công nghiệp,
                      làm thay đổi một cách toàn diện cuộc sống của nhiều người
                      trên thế giới. Và chắc chắn, một trong những vấn đề bị ảnh
                      hưởng nhiều nhất khi rất nhiều những dịch vụ, sản xuất bị
                      đình trệ chính là kinh tế. Ngành công nghiệp AV Nhật Bản
                      cũng là nơi chịu đựng những hậu quả nặng nề, mặc dù thời
                      gian gần đây đã có một số tín hiệu tích cực trở lại sau
                      thời gian dài bị đóng băng. Nếu muốn biết ảnh hưởng của nó
                      là lớn tới cỡ nào, có lẽ không ai thích hợp hơn khi nghe
                      các cô nàng <strong>hot girl</strong> trong ngành kể
                      chuyện. Tất nhiên, đó không phải là câu chuyện của những{" "}
                      <strong>Yua Mikami</strong> hay Karen Kaede - những diễn
                      viên top đầu rồi.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220317--10-037865.jpg")
                          .default
                      }
                      alt="1, HOT GIRL,GÁI XINH,YUA MIKAMI,CỘNG ĐỒNG MẠNG,"
                      note="Yua Mikami là một trong số cái tên hiếm hoi không bị chịu ảnh hưởng quá nặng nề bởi dịch bệnh"
                    />
                    <p>
                      Trên thực tế, vấn đề này cũng đã được nhiều người liên
                      tưởng tới khi mà trong hai tháng gần đây, tần suất ra mắt
                      tác phẩm mới của các cô nàng <strong>hot girl</strong> đều
                      rất nhỏ giọt mà đa số đều chuyển hướng sang phát triển
                      kênh YouTube, trang cá nhân... Ngay cả như{" "}
                      <strong>Yua Mikami</strong> cũng phải đợi tới cột mốc kỷ
                      niệm 6 năm làm nghề thì mới cho ra mắt một tác phẩm mới.
                      Tuy nhiên, thực tế lại có phần tàn nhẫn hơn như vậy rất
                      nhiều. Mới đây, Rei, một cô nàng hot girl không quá có
                      tiếng trong ngành vừa tuyên bố trên trang cá nhân với các
                      fan hâm mộ về thực tế gây sốc của mình và nhiều người nữa.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220317--11-163309.jpg")
                          .default
                      }
                      alt="2, HOT GIRL,GÁI XINH,YUA MIKAMI,CỘNG ĐỒNG MẠNG,"
                      note="Rei - người vừa khiến không ít fan xôn xao với tuyên bố mới nhất"
                    />
                    <p>
                      Cụ thể, cô nàng cho rằng những người đồng nghiệp của mình
                      tốt nhất đừng nên kêu ca, đau khổ quá nhiều vì không chỉ
                      riêng họ rơi vào hoàn cảnh như vậy. Bản thân Rei cũng chia
                      sẻ trong suốt hai tháng 5 và 6, cô gần như không có bất kỳ
                      thu nhập nào từ ngành công nghiệp AV Nhật Bản. Thời điểm
                      tháng 4, nàng <strong>hot girl</strong> cũng chia sẻ rằng
                      mình vẫn kiếm được khoảng 30.000 yên (xấp xỉ 6 triệu VND).
                      Tuy nhiên, đó cũng là số tiền cuối cùng mà cô nhận được.
                      Và cay đắng hơn, như Rei cho biết, chỉ có khoảng chưa tới
                      10% các nữ diễn viên là kiếm được ra tiền từ việc đóng
                      phim trong hai tháng qua. Tất nhiên, đa số đều là các nữ
                      diễn viên top 1 có tiếng như <strong>Yua Mikami</strong>.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220317--12-102799.jpg")
                          .default
                      }
                      alt="3, HOT GIRL,GÁI XINH,YUA MIKAMI,CỘNG ĐỒNG MẠNG,"
                      note="Chỉ dưới 10% diễn viên có thu nhập từ đóng phim trong hai tháng qua"
                    />
                    <p>
                      "Hầu hết thời gian, tôi quay một tác phẩm mỗi tháng nhưng
                      giờ thì không còn. Để kiếm sống, tôi phải làm những công
                      việc khác" - Rei chia sẻ. Cô đồng thời cũng tiết lộ rằng
                      nhiều đồng nghiệp cũng cần việc làm thêm, đồng thời mong
                      những cô gái trẻ khác đừng nên vội vã gia nhập để sau này
                      phải hối hận như chính cô nàng.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220317--13-937990.jpg")
                          .default
                      }
                      alt="4, HOT GIRL,GÁI XINH,YUA MIKAMI,CỘNG ĐỒNG MẠNG,"
                      note="Cô nàng cũng đưa ra lời khuyên cho những cô gái trẻ"
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
