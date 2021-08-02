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
"timestamp": '18/06/2021 01:00 PM',
"title": 'Yua Mikami "hái ra tiền" nhiều cỡ nào từ ngành công nghiệp 18+?',
"description": 'Ai cũng biết Yua Mikami là ngôi sao số 1 của ngành công nghiệp 18+, nhưng cô nàng ăn nên làm ra thế nào thì vẫn là một dấu hỏi.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210618130042--10-789875.jpg',
"alt": 'IDOL,YUA MIKAMI,',
"category": 'images',
"date": '18/06/2021',
"time": '01:00 PM',
"link": '/yua-mikami-hai-ra-tien-nhieu-co-nao-tu-nganh-cong-nghiep-18',
"zcomponent": 'page_20210618130042',
"filepath": './20210618130042-yua-mikami-hai-ra-tien-nhieu-co-nao-tu-nganh-cong-nghiep-18.js'
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
const title = 'Yua Mikami "hái ra tiền" nhiều cỡ nào từ ngành công nghiệp 18+?';
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "18/06/2021 01:00 PM";
const description =
  "Ai cũng biết Yua Mikami là ngôi sao số 1 của ngành công nghiệp 18+, nhưng cô nàng ăn nên làm ra thế nào thì vẫn là một dấu hỏi.";
const link = "yua-mikami-hai-ra-tien-nhieu-co-nao-tu-nganh-cong-nghiep-18";
const tagparam = ["IDOL", "YUA MIKAMI"];
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

export default function page_20210618130042() {
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
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    Trong làng phim người lớn tại xứ sở hoa anh đào hiện nay,
                    thật khó để tìm được một cái tên nào nổi danh hơn{" "}
                    <strong>Yua Mikami</strong>. Xuất thân từ một ca sĩ thần
                    tượng không có được nhiều thành công, cô nàng chuyển sang
                    lĩnh vực 18+ và nhanh chóng trở thành một trong những ngôi
                    sao nổi tiếng nhất, không chỉ tại Nhật Bản mà còn ở trên
                    toàn châu Á ở thời điểm hiện tại.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130042--10-789875.jpg")
                        .default
                    }
                    alt="1, IDOL,YUA MIKAMI,"
                    note=""
                  />
                  <p>
                    {" "}
                    Hiện tại, <strong>Yua Mikami</strong> đang vô cùng thành
                    công ở tất cả mọi lĩnh vực mà cô tham gia. Không chỉ đứng
                    đầu các bảng xếp hạng phim người lớn hiện nay, cô nàng còn
                    gặt hái được thành công đáng kể ở cả lĩnh vực ca hát khi
                    tham gia cả 2 nhóm nhạc Ebisu Muscats và Honey Popcorn.
                    Không chỉ vậy, cô nàng còn rất bận rộn với những dự án riêng
                    như làm người mẫu, tham gia các show truyền hình hay là phát
                    triển thương hiệu thời trang cá nhân mang tên Miyour's.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130042--11-440974.jpg")
                        .default
                    }
                    alt="2, IDOL,YUA MIKAMI,"
                    note=""
                  />
                  <p>
                    Vào 1/6 vừa qua, <strong>Yua Mikami</strong> đã khoe với fan
                    về ngày kỷ niệm 6 năm bước chân vào ngành công nghiệp 18+
                    của cô nàng. Ở tuổi 15, cô nàng vẫn còn là{" "}
                    <strong>idol</strong> trẻ tuổi khi là thành viên của nhóm
                    nhạc SKE48 và chẳng thể tưởng tượng được rằng, cô sẽ trở
                    thành ngôi sao số 1 trong nghề diễn viên phim người lớn như
                    ở thời điểm hiện tại.
                  </p>
                  <p>
                    Sau khi gia nhập ngành công nghiệp 18+,{" "}
                    <strong>Yua Mikami</strong> từng nhận phải những chỉ trích
                    khá quyết liệt của công chúng. Dù vậy, cô nàng sinh năm 1993
                    vẫn rất thản nhiên đáp lại:"Cứ chờ đi, tôi sẽ chứng minh bản
                    thân. Tôi sẽ trở thành kẻ dẫn đầu."
                  </p>
                  <p>
                    Quả thực, <strong>Yua Mikami</strong> không hề nói chơi. Sau
                    6 năm làm việc, hiện tại cô nàng đã vượt mặt qua toàn bộ các
                    đàn chị và là đang là ngôi sao đắt giá trong ngành công
                    nghiệp AV. Yua đã đạt hàng loạt giải thưởng, ngoài ra tại
                    các bảng xếp hạng bán đĩa tại Nhật Bản, Yua chưa bao giờ lọt
                    ra khỏi top 3 những cái tên ăn khách nhất.{" "}
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130042--12-326690.jpg")
                        .default
                    }
                    alt="3, IDOL,YUA MIKAMI,"
                    note=""
                  />
                  <p>
                    Thành công tới, tiền bạc ắt cũng tới theo. Thù lao của{" "}
                    <strong>Yua Mikami</strong> càng lúc càng tăng lên. Lúc mới
                    vào nghề, Yua đã từng được chi trả một số tiền cực lớn. Dù
                    không nói rõ chính xác số tiền, thế nhưng thu nhập của cô
                    gái này cũng đủ để cô nàng mua một căn hộ hạng 2 tại khu
                    Setagaya, Tokyo.
                  </p>
                  <p>
                    Báo chí Hong Kong và Đài Loan cũng đã đưa nhiều thông tin
                    cho rằng, thu nhập của <strong>Yua Mikami</strong> trong
                    lĩnh vực 18+ là hơn 20 triệu yen/ tháng. Tuy nhiên, con số
                    này được cô nàng phủ nhận và cho rằng không chính xác. Dù
                    vậy, cô nàng chia sẻ rằng nguồn thu từ ngành 18+ vẫn đóng
                    góp một phần rất đáng kể và cô nàng cũng chưa có ý định dừng
                    đóng phim.{" "}
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Hiện nay, với danh tiếng của <strong>Yua Mikami</strong>, số
                    tiền này phải tăng lên gấp bội. Để so sánh với các ngôi sao
                    chính thống thì cánh báo chí đã lấy cát-xê của hai cựu thành
                    viên hàng đầu nhóm AKB48 là Rino Sashihara và Yuki Kashiwagi
                    tương ứng với con số 43 triệu Yên (9 tỷ VND) và 33 triệu Yên
                    (7 tỷ VND).
                  </p>
                  <p>
                    Theo nhiều nguồn tin hàng lang, thu nhập của{" "}
                    <strong>Yua Mikami</strong> không cao hơn quá nhiều so với
                    các ngôi sao chính thống, nhưng cũng ở mức độ "ngang ngửa".
                    Cát xê của cô gái 27 tuổi này hoàn toàn có thể nằm ở mức từ
                    30 - 50 triệu yen/ tháng (6,3 tỷ - 11 tỷ VND).{" "}
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130042--13-384814.jpg")
                        .default
                    }
                    alt="4, IDOL,YUA MIKAMI,"
                    note=""
                  />
                  <p>
                    Hiện tại, ngoài AV, nguồn thu nhập của Yua đến chủ yếu từ
                    việc bán đồ thương hiệu thời trang của bản thân, làm người
                    mẫu, ca hát cũng như bán các cuốn sách ảnh. Mỗi lần ra mắt,
                    sản phẩm của cô luôn được bán hết sạch chỉ trong vòng một
                    vài ngày. Không khó hiểu vì sao, người ta lại gọi{" "}
                    <strong>Yua Mikami</strong> là cỗ máy kiếm tiền của làng
                    phim 18+ Nhật Bản.
                  </p>
                  <p>
                    Hiện tại, vẫn chưa có dấu hiệu nào cho thấy{" "}
                    <strong>Yua Mikami</strong> sẽ mất đi vị trí của mình trong
                    tương lai. Mặc dù làng phim 18+ liên tục xuất hiện các tân
                    binh mới, thế nhưng vị trí của cô gái sinh năm 1993 vào lúc
                    này có thể gọi là "không thể suy chuyển". Chừng nào cô nàng
                    vẫn muốn đóng phim 18+ thì vẫn sẽ là ngôi sao ăn khách nhất.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130042--14-676698.jpg")
                        .default
                    }
                    alt="5, IDOL,YUA MIKAMI,"
                    note=""
                  />
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
