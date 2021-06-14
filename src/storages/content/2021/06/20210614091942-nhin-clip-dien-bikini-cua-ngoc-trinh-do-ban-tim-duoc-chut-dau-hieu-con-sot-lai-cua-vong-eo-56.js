import React from "react";
import "components/page.css";
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
"timestamp": '14/06/2021 09:19 AM',
"title": 'Nhìn clip diện bikini của Ngọc Trinh, đố bạn tìm được chút dấu hiệu còn sót lại của vòng eo 56!',
"description": '"Vòng eo 56" từng được coi là biểu tượng không thể tách rời của Ngọc Trinh, nhưng chắc giờ cô sẽ phải đi tìm số đo mới rồi!',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210614091942--10-493647.png',
"alt": 'Ngoc Trinh, Bikini, Vong Eo, Vong 2, Body Sao Viet, Sexy Body, ',
"category": 'images',
"date": '14/06/2021',
"time": '09:19 AM',
"link": '/nhin-clip-dien-bikini-cua-ngoc-trinh-do-ban-tim-duoc-chut-dau-hieu-con-sot-lai-cua-vong-eo-56',
"zcomponent": 'page_20210614091942',
"filepath": './20210614091942-nhin-clip-dien-bikini-cua-ngoc-trinh-do-ban-tim-duoc-chut-dau-hieu-con-sot-lai-cua-vong-eo-56.js'
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
  "Nhìn clip diện bikini của Ngọc Trinh, đố bạn tìm được chút dấu hiệu còn sót lại của vòng eo 56!";
const author = "TUYẾT NGÂY THER,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "14/06/2021 09:19 AM";
const description =
  '"Vòng eo 56" từng được coi là biểu tượng không thể tách rời của Ngọc Trinh, nhưng chắc giờ cô sẽ phải đi tìm số đo mới rồi!';
const link =
  "nhin-clip-dien-bikini-cua-ngoc-trinh-do-ban-tim-duoc-chut-dau-hieu-con-sot-lai-cua-vong-eo-56";
const tagparam = [
  "ngoc-trinh",
  "bikini",
  "vong-eo",
  "vong-2",
  "body-sao-viet",
  "sexy-body",
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

export default function page_20210614091942() {
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
                    Ngoài biệt danh "Nữ hoàng nội y", "Yêu nữ hàng hiệu", ...
                    thế nhân vẫn lấy số đo 56 của vòng 2 ra làm biệt danh cho
                    Ngọc Trinh. Thế nhưng, vạn vật đều chịu sự tác động của thời
                    gian và trong đoạn clip mới đăng tải, Ngọc Trinh đã chứng
                    minh nhận định trên là đúng.
                  </p>{" "}
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614091942--10-493647.png")
                        .default
                    }
                    alt="Ngoc Trinh, Bikini, Vong Eo, Vong 2, Body Sao Viet, Sexy Body, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614091942--11-122155.png")
                        .default
                    }
                    alt="Ngoc Trinh, Bikini, Vong Eo, Vong 2, Body Sao Viet, Sexy Body, "
                    note='Ngọc Trinh lộ "bé mỡ" khi diện bikini'
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614091942--12-080266.png")
                        .default
                    }
                    alt="Ngoc Trinh, Bikini, Vong Eo, Vong 2, Body Sao Viet, Sexy Body, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614091942--13-046123.png")
                        .default
                    }
                    alt="Ngoc Trinh, Bikini, Vong Eo, Vong 2, Body Sao Viet, Sexy Body, "
                    note=""
                  />
                  <p>
                    Diện 1 loạt <strong>bikini</strong> và monokini cut-out ở
                    mạn sườn, Ngọc Trinh đã để lộ ra vòng 2 không còn thon thả
                    như loạt ảnh nàng tự đăng. Trong từng bước catwalk, phần mỡ
                    thừa ở eo Ngọc Trinh chuyển động qua lại như sóng biển, nom
                    đến là thích mắt!
                  </p>
                  <p>
                    Nhìn ảnh tĩnh thế này thì thấy bình thường, chứ xem clip là
                    nhận ra "bé mỡ" của Ngọc Trinh đang dậy sóng đó!
                  </p>
                  <p>Bình "loạn" của dân mạng:</p>
                  <p>- "Hello bé mỡ".</p>
                  <p>- "Không tìm thấy vòng eo 56 đâu luôn! Đây chắc eo 65".</p>
                  <p>
                    - "Cảm giác Trinh mập lên rồi đó, không còn eo ót như hồi
                    trước nữa!".
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    - "Mình thì thấy Trinh bụ bẫm 1 tí trông khoẻ khoắn hơn
                    đó!".
                  </p>
                  <p>
                    - "Chị Trinh ơi bây giờ số đo vòng eo của chị là bao nhiêu
                    rồi?".
                  </p>
                  <p></p>
                  <p>
                    Đã có thời điểm, Ngọc Trinh "say goodbye" với vòng eo 56 để
                    chinh phục số đo 53 cm, trở thành 1 trong những mỹ nhân có
                    vòng eo nhỏ nhất Vbiz. Tuy nhiên theo thông tin do chính chủ
                    cung cấp, vòng eo của người đẹp hiện tại đã lên tới 58 cm.
                    Thôi thì từ hôm nay hãy gọi Ngọc Trinh là "Vòng eo 58" đi
                    vậy...
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614091942--14-02889.jpeg")
                        .default
                    }
                    alt="Ngoc Trinh, Bikini, Vong Eo, Vong 2, Body Sao Viet, Sexy Body, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614091942--15-67664.jpeg")
                        .default
                    }
                    alt="Ngoc Trinh, Bikini, Vong Eo, Vong 2, Body Sao Viet, Sexy Body, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614091942--16-36349.jpeg")
                        .default
                    }
                    alt="Ngoc Trinh, Bikini, Vong Eo, Vong 2, Body Sao Viet, Sexy Body, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614091942--17-63281.jpeg")
                        .default
                    }
                    alt="Ngoc Trinh, Bikini, Vong Eo, Vong 2, Body Sao Viet, Sexy Body, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614091942--18-63281.jpeg")
                        .default
                    }
                    alt="Ngoc Trinh, Bikini, Vong Eo, Vong 2, Body Sao Viet, Sexy Body, "
                    note=""
                  />
                  <p>
                    Nhờ vòng eo siêu nhỏ, Ngọc Trinh có thể dễ dàng "cân" mọi
                    kiểu trang phục chống chỉ định cho người thừa cân
                  </p>
                  <p>Ảnh: Sưu tầm</p>
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
