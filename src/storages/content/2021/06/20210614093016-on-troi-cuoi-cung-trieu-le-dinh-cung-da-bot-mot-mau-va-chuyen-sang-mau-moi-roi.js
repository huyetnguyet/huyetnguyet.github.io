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
"timestamp": '14/06/2021 09:30 AM',
"title": 'Ơn Trời! Cuối cùng Triệu Lệ Dĩnh cũng đã bớt một màu và chuyển sang... màu mới rồi!',
"description": 'Sau quãng thời gian chỉ lên đồ một màu thì nay Triệu Lệ Dĩnh đã được đổi style mới mẻ hơn.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210614093016--10-686311.jpg',
"alt": 'Sao Do Thoi Trang, Trieu Le Dinh, Sao Hoa Ngu, Star Style, Style Cua Sao, ',
"category": 'images',
"date": '14/06/2021',
"time": '09:30 AM',
"link": '/on-troi-cuoi-cung-trieu-le-dinh-cung-da-bot-mot-mau-va-chuyen-sang-mau-moi-roi',
"zcomponent": 'page_20210614093016',
"filepath": './20210614093016-on-troi-cuoi-cung-trieu-le-dinh-cung-da-bot-mot-mau-va-chuyen-sang-mau-moi-roi.js'
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
  "Ơn Trời! Cuối cùng Triệu Lệ Dĩnh cũng đã bớt một màu và chuyển sang... màu mới rồi!";
const author = "TWUS,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "14/06/2021 09:30 AM";
const description =
  "Sau quãng thời gian chỉ lên đồ một màu thì nay Triệu Lệ Dĩnh đã được đổi style mới mẻ hơn.";
const link =
  "on-troi-cuoi-cung-trieu-le-dinh-cung-da-bot-mot-mau-va-chuyen-sang-mau-moi-roi";
const tagparam = [
  "sao-do-thoi-trang",
  "trieu-le-dinh",
  "sao-hoa-ngu",
  "star-style",
  "style-cua-sao",
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

export default function page_20210614093016() {
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
              >
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
                    Thời gian gần đây, Triệu Lệ Dĩnh ngày càng nhận được nhiều
                    lời khen về style và thần thái khi đã có sự tiến bộ vượt
                    bậc, sang chảnh hơn hẳn khi xưa.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614093016--10-686311.jpg")
                        .default
                    }
                    alt="Sao Do Thoi Trang, Trieu Le Dinh, Sao Hoa Ngu, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614093016--11-104661.jpg")
                        .default
                    }
                    alt="Sao Do Thoi Trang, Trieu Le Dinh, Sao Hoa Ngu, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <p>
                    Tuy nhiên, nàng chỉ nhất nhất trung thành với trang phục màu
                    trắng khiến hình ảnh cứ mãi đóng khung trong 1 sắc tái tẻ
                    nhạt, không chút ấn tượng.
                  </p>

                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614093016--12-182485.jpg")
                        .default
                    }
                    alt="Sao Do Thoi Trang, Trieu Le Dinh, Sao Hoa Ngu, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <p>
                    Sau quãng thời gian chỉ mải miết cho Triệu Lệ Dĩnh lên đồ
                    một màu thì stylist cũng đã dần thay đổi. Trong sự kiện diễn
                    ra gần đây, mỹ nhân họ Triệu diện mẫu đầm hồng pastel ngọt
                    ngào như tiểu thư tuổi 18. Tuy bộ cánh vẫn mang tông pastel
                    nhẹ nhàng nhưng đã có phần khác biệt so với những bộ đồ
                    trắng nhàm chán mà cô diện trước đó.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614093016--13-930972.jpg")
                        .default
                    }
                    alt="Sao Do Thoi Trang, Trieu Le Dinh, Sao Hoa Ngu, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <p>
                    Ngoài ra, trong hình ảnh quảng cáo mới đây của Triệu Lệ
                    Dĩnh, cô cũng được stylist chuẩn bị bộ cánh mang tông vàng
                    và tím khác biệt. Trang phục tươi sáng, ngọt ngào vừa đủ tôn
                    lên vẻ trẻ trung của Triệu Lệ Dĩnh mà vẫn khiến hình ảnh của
                    cô thêm phần mới mẻ, không bị nhàm chán.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p></p>
                  <p>
                    Triệu Lệ Dĩnh vốn có gương mặt bầu bĩnh và nước da sáng nên
                    cô hợp với những bộ cánh có sắc màu tươi tắn hẳn. Thay vì
                    chỉ mãi đóng khung với những bộ cánh màu trắng, cô có thể
                    thử nghiệm với nhiều màu sắc khác biệt để làm mới hình ảnh.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614093016--14-288823.jpg")
                        .default
                    }
                    alt="Sao Do Thoi Trang, Trieu Le Dinh, Sao Hoa Ngu, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614093016--15-306756.jpg")
                        .default
                    }
                    alt="Sao Do Thoi Trang, Trieu Le Dinh, Sao Hoa Ngu, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614093016--16-504619.jpg")
                        .default
                    }
                    alt="Sao Do Thoi Trang, Trieu Le Dinh, Sao Hoa Ngu, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <p>
                    Sao Đỏ Thời Trang dành tặng Triệu Lệ Dĩnh điểm khuyến khích
                    khi đã nỗ lực làm mới hình ảnh, đổi màu trang phục sau thời
                    gian chỉ mãi diện đồ trắng. Hy vọng cô sẽ tiếp tục phát huy
                    và mang đến nhiều style thú vị hơn.
                  </p>

                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614093016--17-157763.jpg")
                        .default
                    }
                    alt="Sao Do Thoi Trang, Trieu Le Dinh, Sao Hoa Ngu, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614093016--18-961295.jpg")
                        .default
                    }
                    alt="Sao Do Thoi Trang, Trieu Le Dinh, Sao Hoa Ngu, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614093016--19-971688.jpg")
                        .default
                    }
                    alt="Sao Do Thoi Trang, Trieu Le Dinh, Sao Hoa Ngu, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614093016--20-751082.jpg")
                        .default
                    }
                    alt="Sao Do Thoi Trang, Trieu Le Dinh, Sao Hoa Ngu, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614093016--21-583613.jpg")
                        .default
                    }
                    alt="Sao Do Thoi Trang, Trieu Le Dinh, Sao Hoa Ngu, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <p>Ảnh: Internet</p>
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
