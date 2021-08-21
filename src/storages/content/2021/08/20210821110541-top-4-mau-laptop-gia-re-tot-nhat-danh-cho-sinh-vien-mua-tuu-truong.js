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
"timestamp": '21/08/2021 11:05 AM',
"title": 'Top 4 mẫu laptop giá rẻ tốt nhất dành cho sinh viên mùa tựu trường',
"description": 'Với phân khúc 10 - 15 triệu, người dùng có thể sở hữu một chiếc laptop cho dân văn phòng, học sinh - sinh viên để học tập và làm việc online tại nhà thời điểm giãn cách xã hội. Dưới đây là top 4 mẫu laptop văn phòng tầm trung tốt nhất tại hệ thống CellphoneS.',
"src": 'https://kenh14cdn.com/thumb_w/800/pr/2021/photo-1-1629467890674303829136-0-22-527-866-crop-1629469654988-63765095888195.jpg',
"alt": 'laptop giá rẻ,mùa tựu trường,dân văn phòng,laptop văn phòng,',
"category": 'tech',
"date": '21/08/2021',
"time": '11:05 AM',
"link": '/top-4-mau-laptop-gia-re-tot-nhat-danh-cho-sinh-vien-mua-tuu-truong',
"zcomponent": 'page_20210821110541',
"filepath": './20210821110541-top-4-mau-laptop-gia-re-tot-nhat-danh-cho-sinh-vien-mua-tuu-truong.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "tech";
const categoryLink = "/tech";
const title =
  "Top 4 mẫu laptop giá rẻ tốt nhất dành cho sinh viên mùa tựu trường";
const author = "QUANG VŨ,";
const source = "Trí Thức Trẻ";
const timestamp = "21/08/2021 11:05 AM";
const description =
  "Với phân khúc 10 - 15 triệu, người dùng có thể sở hữu một chiếc laptop cho dân văn phòng, học sinh - sinh viên để học tập và làm việc online tại nhà thời điểm giãn cách xã hội. Dưới đây là top 4 mẫu laptop văn phòng tầm trung tốt nhất tại hệ thống CellphoneS.";
const link =
  "top-4-mau-laptop-gia-re-tot-nhat-danh-cho-sinh-vien-mua-tuu-truong";
const tagparam = [
  "laptop giá rẻ",
  "mùa tựu trường",
  "dân văn phòng",
  "laptop văn phòng",
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

export default function page_20210821110541() {
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
                      Với phân khúc 10 - 15 triệu, người dùng có thể sở hữu một
                      chiếc laptop cho <strong>dân văn phòng</strong>, học sinh
                      - sinh viên để học tập và làm việc online tại nhà thời
                      điểm giãn cách xã hội. Dưới đây là top 4 mẫu{" "}
                      <strong>laptop văn phòng</strong> tầm trung tốt nhất tại
                      hệ thống CellphoneS.
                    </p>
                    <h5>
                      Laptop ASUS VivoBook X413JA (giá ưu đãi ~ 10.89 triệu
                      đồng)
                    </h5>
                    <p>
                      Chưa đến 11 triệu đồng, bạn đã có một mẫu{" "}
                      <strong>laptop văn phòng</strong> mỏng nhẹ đến từ thương
                      hiệu lớn ASUS. Chiếc VivoBook X413JA tiêu chí mỏng nhẹ,
                      chỉ dày 1.8cm và nặng 1.4kg, giúp bạn tiện lợi trong quá
                      trình di chuyển, làm việc hay học tập.
                    </p>
                    <ContentImage
                      src="https://channel.mediacdn.vn/2021/8/20/photo-1-1629467890674303829136.jpg"
                      alt="2, laptop giá rẻ,mùa tựu trường,dân văn phòng,laptop văn phòng,"
                      note=""
                    />
                    <p>
                      Mẫu Vivobook 14 inch này có thiết kế thời trang, lịch lãm
                      với viền màn hình khá mỏng, khiến đây là mẫu máy bán chạy
                      tại CellphoneS thời gian qua.
                    </p>
                    <p>
                      Về cấu hình, ASUS VivoBook X413JA có màn hình 14 inch Full
                      HD chất lượng ổn, chip Intel Core i3-1005G1, RAM DDR4-2400
                      dung lượng 4GB, ổ SSD lưu trữ dữ liệu 128GB. Chưa hết, mẫu
                      laptop này còn hỗ trợ chuẩn Wi-Fi 6 với tốc độ truyền tải
                      siêu tốc, cùng thỏi pin 42Wh cho thời lượng sử dụng ấn
                      tượng.
                    </p>
                    <p>
                      Vivobook X413JA trang bị đầy đủ cổng kết nối HDMI, thẻ nhớ
                      microSD, 1 cổng USB-A và 1 cổng sạc USB-C.
                    </p>
                    <h5>
                      Laptop Acer Aspire 3 A315-56-37DV (giá ưu đãi chỉ hơn 11
                      triệu đồng)
                    </h5>
                    <p>
                      Nếu bạn là một kế toán, sinh viên,{" "}
                      <strong>dân văn phòng</strong> làm việc số liệu nhiều...
                      thì chiếc laptop Acer Aspire 3 A315-56-37DV sẽ rất tiện
                      lợi, vì sao? Bởi mẫu <strong>laptop văn phòng</strong> này
                      có màn hình lớn 15.6 inch Full HD sắc nét, hiển thị rõ
                      ràng các chi tiết số liệu.
                    </p>
                    <ContentImage
                      src="https://channel.mediacdn.vn/2021/8/20/photo-1-1629467892810846288797.jpg"
                      alt="3, laptop giá rẻ,mùa tựu trường,dân văn phòng,laptop văn phòng,"
                      note=""
                    />

                    <p>
                      Chưa hết, máy còn có bàn phím số riêng biệt, chắc chắn là
                      một lợi ích không nhỏ cho những người thường xuyên thao
                      tác với các con số.
                    </p>
                    <p>
                      Mặc dù có màn hình tới 15.6 inch nhưng Acer Aspire 3
                      A315-56-37DV vẫn có thể xem là một mẫu{" "}
                      <strong>laptop văn phòng</strong> mỏng nhẹ bởi máy dày
                      chưa đến 2cm và nặng chỉ 1.7kg.
                    </p>
                    <p>
                      Về cấu hình, Acer Aspire 3 A315-56-37DV sử dụng chip Intel
                      Core i3-1005G1, RAM 4GB, ổ SSD 256GB mượt mà cùng nhiều
                      cổng kết nối gồm: 1 cổng USB 3.1, 2 cổng USB 2.0, 1 cổng
                      HDMI và cả cổng cắm tai nghe 3.5mm.
                    </p>
                    <h5>
                      Laptop HP 240 G8 342G7PA (giá ưu đãi ~ 11.69 triệu đồng)
                    </h5>
                    <RelationNewsInPage category={category} />
                    <p>
                      Thêm một mẫu laptop cho <strong>dân văn phòng</strong> nữa
                      đến từ thương hiệu HP. Chiếc máy tính xách tay này có tên
                      gọi HP 240 G8 342G7PA và đi kèm mức giá hết sức phải
                      chăng, chỉ hơn 11 triệu đồng.
                    </p>
                    <ContentImage
                      src="https://channel.mediacdn.vn/2021/8/20/photo-2-16294678928121108512068.jpg"
                      alt="4, laptop giá rẻ,mùa tựu trường,dân văn phòng,laptop văn phòng,"
                      note=""
                    />

                    <p>
                      HP 240 G8 342G7PA có nhiều ưu điểm cho{" "}
                      <strong>dân văn phòng</strong> như chỉ dày chưa tới 2cm và
                      nặng chỉ 1.47kg với màn hình 14 inch gọn gàng, dễ dàng di
                      chuyển và làm việc mọi nơi.
                    </p>
                    <p>
                      Ngoài ra, HP 240 G8 342G7PA còn đi kèm chip Core
                      i3-1005G1, 4GB RAM, ổ SSD 256GB thoải mái để bạn lưu trữ
                      văn bản, tài liệu…
                    </p>
                    <p>
                      Với cấu hình trên, bạn sẽ dễ dàng cài đặt, sử dụng mượt mà
                      mọi phần mềm, công việc của <strong>dân văn phòng</strong>
                      . Chưa hết, bạn cũng có thể chơi game, xem phim, lướt web,
                      nghe nhạc...
                    </p>
                    <h5>
                      Laptop MSI Modern 14 B11MO (giá bán 13.99 triệu tặng kèm
                      chuột MSI)
                    </h5>
                    <p>
                      Phân khúc cao hơn, bạn có thể sở hữu ngay một trong những
                      mẫu <strong>laptop văn phòng</strong> tốt nhất hiện nay,
                      đó chính là MSI Modern 14 B11MO. Chưa hết, đây cũng là một
                      trong những mẫu laptop văn phòng mỏng nhẹ, cực kỳ phù hợp
                      cho <strong>dân văn phòng</strong>, thậm chí là cả giới
                      doanh nhân.
                    </p>
                    <ContentImage
                      src="https://channel.mediacdn.vn/2021/8/20/photo-3-1629467892814590160488.jpg"
                      alt="5, laptop giá rẻ,mùa tựu trường,dân văn phòng,laptop văn phòng,"
                      note=""
                    />

                    <p>
                      MSI Modern 14 B11MO có vẻ ngoài tinh tế, lịch lãm với
                      thiết kế đặc trưng, chỉ dày chưa đến 2cm và nhẹ chỉ 1.3kg,
                      nhờ vậy mà người dùng có thể dễ dàng cầm đi ở bất cứ đâu.
                      Màn hình 14 inch độ phân giải Full HD sắc nét. Đặc biệt
                      viền cạnh rất mỏng, nhờ vậy mà MSI Modern 14 B11MO có vẻ
                      ngoài gọn gàng như một mẫu laptop 13 inch vậy.
                    </p>
                    <p>
                      Về cấu hình, MSI Modern 14 B11MO sở hữu chip Intel Core
                      i3-1115G4 mới, bộ nhớ RAM lên tới 8GB, ổ lưu trữ SSD
                      256GB, giúp máy hoạt động mượt mà ở mọi tác vụ văn phòng,
                      thậm chí là chơi các game phổ biến hiện nay.
                    </p>
                    <p>
                      Đặc biệt hơn, MSI Modern 14 B11MO còn đi kèm với rất nhiều
                      cổng kết nối như USB-A, Display Port, USB-C, HDMI, cổng
                      cắm tai nghe 3.5mm và đạt cả chuẩn độ bền quân đội
                      MIL-STD-810G.
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
