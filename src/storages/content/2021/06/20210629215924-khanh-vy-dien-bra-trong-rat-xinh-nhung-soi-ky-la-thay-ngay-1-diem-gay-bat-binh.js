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
"timestamp": '29/06/2021 09:59 PM',
"title": 'Khánh Vy diện bra trông rất xinh nhưng soi kỹ là thấy ngay 1 điểm gây "bất bình"',
"description": 'Bình thường Khánh Vy chọn đồ rất ổn, thế còn nội y thì đã thực sự ổn chưa?',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210629215924--10-572464.jpg',
"alt": 'Khánh Vy,nội y,MC Khánh Vy,hot girl 7 thứ tiếng,không mặc xấu,',
"category": 'images',
"date": '29/06/2021',
"time": '09:59 PM',
"link": '/khanh-vy-dien-bra-trong-rat-xinh-nhung-soi-ky-la-thay-ngay-1-diem-gay-bat-binh',
"zcomponent": 'page_20210629215924',
"filepath": './20210629215924-khanh-vy-dien-bra-trong-rat-xinh-nhung-soi-ky-la-thay-ngay-1-diem-gay-bat-binh.js'
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
  'Khánh Vy diện bra trông rất xinh nhưng soi kỹ là thấy ngay 1 điểm gây "bất bình"';
const author = "CHÚ CÁ TRÊ X CHIM VÀNH KHEN,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "29/06/2021 09:59 PM";
const description =
  "Bình thường Khánh Vy chọn đồ rất ổn, thế còn nội y thì đã thực sự ổn chưa?";
const link =
  "khanh-vy-dien-bra-trong-rat-xinh-nhung-soi-ky-la-thay-ngay-1-diem-gay-bat-binh";
const tagparam = [
  "Khánh Vy",
  "nội y",
  "MC Khánh Vy",
  "hot girl 7 thứ tiếng",
  "không mặc xấu",
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

export default function page_20210629215924() {
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
                    Theo đuổi hình tượng một MC khoa giáo,{" "}
                    <strong>Khánh Vy</strong> trước nay luôn diện những bộ trang
                    phục "kín cổng cao tường". Thế nhưng mới đây, "
                    <strong>hot girl 7 thứ tiếng</strong>" lại có cú chuyển mình
                    đầy táo bạo khi thực hiện một bộ ảnh diện{" "}
                    <strong>nội y</strong> vô cùng cuốn hút.
                  </p>
                  <p>
                    Những ai dõi theo <strong>Khánh Vy</strong> hẳn đều biết, dù
                    lịch trình bận rộn song cô nàng rất chú ý đến việc tập luyện
                    và ăn uống để giữ thân hình cân đối, khoẻ mạnh. Có điều,
                    thân hình nhỏ nhắn, mảnh mai lại chưa tạo lợi thế cho cô
                    trong bộ ảnh lần này.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215924--10-572464.jpg")
                        .default
                    }
                    alt="1, Khánh Vy,nội y,MC Khánh Vy,hot girl 7 thứ tiếng,không mặc xấu,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215924--11-456260.jpg")
                        .default
                    }
                    alt="2, Khánh Vy,nội y,MC Khánh Vy,hot girl 7 thứ tiếng,không mặc xấu,"
                    note=""
                  />
                  <p>
                    Có thể thấy, người đẹp chưa thể hiện được vẻ quyến rũ khi
                    diện <strong>nội y</strong>. Do chọn đồ chưa khéo, phần vòng
                    1 nhỏ nhắn của cô nàng dường như "bơi" trong chiếc áo lót.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215924--12-849316.jpg")
                        .default
                    }
                    alt="3, Khánh Vy,nội y,MC Khánh Vy,hot girl 7 thứ tiếng,không mặc xấu,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215924--13-173127.jpg")
                        .default
                    }
                    alt="4, Khánh Vy,nội y,MC Khánh Vy,hot girl 7 thứ tiếng,không mặc xấu,"
                    note=""
                  />
                  <p>
                    Với những người có vòng 1 hơi khiêm tốn như{" "}
                    <strong>Khánh Vy</strong>, <strong>Không Mặc Xấu</strong>{" "}
                    khuyên bạn nên lựa chọn 3 kiểu bra dưới đây để nâng tầm cho
                    vòng 1:
                  </p>
                  <p>
                    Bra ren sẽ là lựa chọn số 1 cho những quý cô thanh lịch, gợi
                    cảm lại không hề phô phang.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215924--14-001532.jpg")
                        .default
                    }
                    alt="5, Khánh Vy,nội y,MC Khánh Vy,hot girl 7 thứ tiếng,không mặc xấu,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215924--15-466358.jpg")
                        .default
                    }
                    alt="6, Khánh Vy,nội y,MC Khánh Vy,hot girl 7 thứ tiếng,không mặc xấu,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215924--16-915929.jpg")
                        .default
                    }
                    alt="7, Khánh Vy,nội y,MC Khánh Vy,hot girl 7 thứ tiếng,không mặc xấu,"
                    note=""
                  />

                  <p>
                    Bra lụa/ bra cotton không gọng đơn giản nhưng rất "vào việc"
                    khi ôm sát khuôn ngực, mang đến vẻ quyến rũ khó chối từ.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215924--17-765243.png")
                        .default
                    }
                    alt="8, Khánh Vy,nội y,MC Khánh Vy,hot girl 7 thứ tiếng,không mặc xấu,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215924--18-599948.png")
                        .default
                    }
                    alt="9, Khánh Vy,nội y,MC Khánh Vy,hot girl 7 thứ tiếng,không mặc xấu,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215924--19-512428.jpg")
                        .default
                    }
                    alt="10, Khánh Vy,nội y,MC Khánh Vy,hot girl 7 thứ tiếng,không mặc xấu,"
                    note=""
                  />

                  <RelationNewsInPage category={category} />
                  <p>
                    Bra thể thao cũng là lựa chọn không tồi, thoải mái, năng
                    động, trẻ trung mà không hề mất đi vẻ sexy.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215924--20-626437.jpg")
                        .default
                    }
                    alt="11, Khánh Vy,nội y,MC Khánh Vy,hot girl 7 thứ tiếng,không mặc xấu,"
                    note=""
                  />
                  <p>
                    Nhưng chất liệu thôi là chưa đủ. Điều quan trọng hơn cả, bạn
                    cần chọn size áo phù hợp với khuôn ngực của mình. Việc mặc
                    quá rộng hay quá chật sẽ gây cản trở trong quá trình hoạt
                    động, đồng thời còn làm giảm độ thẩm mỹ.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215924--21-281058.jpg")
                        .default
                    }
                    alt="12, Khánh Vy,nội y,MC Khánh Vy,hot girl 7 thứ tiếng,không mặc xấu,"
                    note=""
                  />
                  <p>
                    Hãy nắm chắc trong tay số đo vòng ngực của mình trước khi
                    chọn bra, sử dụng thước dây và thu thập 2 loại số đo: Số đo
                    ở chân ngực (Cỡ cúp ngực) và số đo ở đỉnh ngực (Đường đỉnh
                    ngực). Tiếp đến, bạn chỉ cần lấy số đo vòng đỉnh ngực trừ đi
                    số đo vòng chân ngực là đã tìm ra size vòng 1 của mình rồi!
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215924--22-762217.jpg")
                        .default
                    }
                    alt="13, Khánh Vy,nội y,MC Khánh Vy,hot girl 7 thứ tiếng,không mặc xấu,"
                    note=""
                  />
                  <p>
                    Mỗi hãng và mỗi khu vực sẽ có những kiểu số đo size áo ngực
                    khác nhau. Bạn cần tìm mua sản phẩm uy tín, đảm bảo nguồn
                    gốc xuất xứ và có bảng size chuẩn xác để tránh "những cú
                    nhầm" nhé!
                  </p>
                  <p>Ảnh: Instagram nhân vật, Sưu tầm</p>
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
