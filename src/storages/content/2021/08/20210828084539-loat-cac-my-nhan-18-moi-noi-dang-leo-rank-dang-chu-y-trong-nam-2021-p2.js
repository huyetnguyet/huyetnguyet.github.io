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
"timestamp": '28/08/2021 08:45 AM',
"title": 'Loạt các mỹ nhân 18+ mới nổi đang "leo rank" đáng chú ý trong năm 2021 (P.2)',
"description": 'Các cái tên mới đã thu hút được ít nhiều sự chú ý của fan hâm mộ trong năm 2021 này.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/26/-1629964673701503504772.jpg',
"alt": 'MINAMO,UMI YATSUGAKE,MOMOJIRI KANAME,IDOL,',
"category": 'images',
"date": '28/08/2021',
"time": '08:45 AM',
"link": '/loat-cac-my-nhan-18-moi-noi-dang-leo-rank-dang-chu-y-trong-nam-2021-p2',
"zcomponent": 'page_20210828084539',
"filepath": './20210828084539-loat-cac-my-nhan-18-moi-noi-dang-leo-rank-dang-chu-y-trong-nam-2021-p2.js'
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
  'Loạt các mỹ nhân 18+ mới nổi đang "leo rank" đáng chú ý trong năm 2021 (P.2)';
const author = "DS";
const source = "Pháp luật và bạn đọc";
const timestamp = "28/08/2021 08:45 AM";
const description =
  "Các cái tên mới đã thu hút được ít nhiều sự chú ý của fan hâm mộ trong năm 2021 này.";
const link =
  "loat-cac-my-nhan-18-moi-noi-dang-leo-rank-dang-chu-y-trong-nam-2021-p2";
const tagparam = ["MINAMO", "UMI YATSUGAKE", "MOMOJIRI KANAME", "IDOL"];
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

export default function page_20210828084539() {
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
                    <h5>4. Minamo</h5>
                    <p>
                      {" "}
                      Vào tháng 5 vừa qua, hãng sản xuất 18+ Soft on Demand đã
                      cho ra mắt một tân binh "100 năm mới có một người" có tên{" "}
                      <strong>Minamo</strong>. Cư dân mạng Nhật Bản ngay lập tức
                      truy tìm tung tích của cô gái này và không khó để họ nhận
                      ra cô chính là Shizuku Taiyo – một gravure{" "}
                      <strong>idol</strong> từng làm mưa làm gió suốt mùa thu
                      2019.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/26/-1629964673701503504772.jpg"
                      alt="1, MINAMO,UMI YATSUGAKE,MOMOJIRI KANAME,IDOL,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/26/-1629964654271906468585.jpg"
                      alt="2, MINAMO,UMI YATSUGAKE,MOMOJIRI KANAME,IDOL,"
                      note=""
                    />

                    <p>
                      Trước khi trở thành người mẫu ảnh, <strong>Minamo</strong>{" "}
                      là nàng hot girl xinh đẹp của xứ Osaka. Cô từng được nhiều
                      trang web và tạp chí ảnh tại Nhật Bản khen ngợi là một
                      trong những nhan sắc đáng chú ý và quyến rũ nhất từng xuất
                      hiện trong năm 2017. Dù vậy, sự nghiệp của Shizuku Taiyo
                      chỉ kéo dài đúng 3 tháng. Tất cả những thông tin về Taiyo
                      gần như được xoá bỏ kể cả mạng xã hội. Suốt thời gian sau
                      đó, gần như không có một thông tin nào về cô gái gốc Kyoto
                      này.
                    </p>
                    <p>
                      {" "}
                      Và rồi sau 2 năm, cô gái trẻ xuất hiện trở lại với một
                      danh xưng và nghề nghiệp khác. Cô trở thành cái tên mới
                      nhất của Soft on Demand và sẽ ra mắt sản phẩm đầu tiên vào
                      tháng 6 tới. Thời còn là một người mẫu áo tắm, cô được
                      công ty chủ quản giới thiệu là "vì sao 100 năm mới xuất
                      hiện" và SOD chỉ đơn giản là sao chép y nguyên lại khuôn
                      mẫu ấy để lăng xê.
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      Sự kì vọng của SOD này vào <strong>Minamo</strong> là rất
                      lớn khi cô liên tục được ông lớn trong ngành 18+ quảng bá
                      trước bằng những cuốn sách ảnh trước đó và cả 1 talk show
                      được lên sóng trực tiếp trên youtube SOD – những đặc quyền
                      chưa từng có tiền lệ của hãng phim này.
                    </p>
                    <h5>5. Umi Yatsugake</h5>
                    <p>
                      <strong>Umi Yatsugake</strong> sinh ngày 2/9/2000, gia
                      nhập ngành giải trí vào tháng 10/2020 với tư cách diễn
                      viên 18+ của công ty Prestige. Người đẹp tới Tokyo này sở
                      hữu số đo 80 - 57 - 85 cm, được coi như một trong những
                      tiềm năng mới triển vọng trong thế hệ sinh năm 2000 của
                      ngành công nghiệp 18+.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/26/-16299647153491451146920.jpg"
                      alt="3, MINAMO,UMI YATSUGAKE,MOMOJIRI KANAME,IDOL,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/26/-1629964762763533280947.jpg"
                      alt="4, MINAMO,UMI YATSUGAKE,MOMOJIRI KANAME,IDOL,"
                      note=""
                    />

                    <p>
                      Trước khi tham gia vào ngành công nghiệp 18+, Umi từng là
                      một Youtuber, và cái tên Umi của cô nàng được lấy từ chính
                      tên kênh của cô nàng. Dù rất ăn hình nhờ khuôn mặt xinh
                      đẹp, nhưng Umi bị phàn nàn là gầy quá. Trước khi chính
                      thức gia nhập Prestige, cô nàng đã phải ăn tập nhiều hơn
                      để tăng thêm 8kg để "có da có thịt" so với thân hình trước
                      đó.
                    </p>
                    <h5>6. Momojiri Kaname</h5>
                    <p>
                      <strong>Momojiri Kaname</strong> sinh ngày 8/8/2000 tại
                      thành phố Kyoto, Nhật Bản. Cô nàng gia nhập ngành giải trí
                      vào tháng 10/2019 khi làm người mẫu áo tắm trên các tạp
                      chí dành cho đàn ông. Phải đến tháng 5/2020, cô nàng mới
                      chính thức gia nhập ngành công nghiệp AV khi đầu quân cho
                      studio mới nổi Faleno. Sở hữu khuôn mặt baby cùng thân
                      hình bùng nổ 90 - 56 - 86 cm, cô gái có biệt danh
                      "Momo-chan" đã ngay lập tức được nhiều người chú ý.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/26/photo-1-16299655806651862146242.jpg"
                      alt="5, MINAMO,UMI YATSUGAKE,MOMOJIRI KANAME,IDOL,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/26/-1629965597681438201531.jpg"
                      alt="6, MINAMO,UMI YATSUGAKE,MOMOJIRI KANAME,IDOL,"
                      note=""
                    />

                    <p>
                      Theo Momo chia sẻ, cô nàng đã sở hữu gò bồng đảo ngoại cỡ
                      ngay từ khi còn nhỏ, thế nên cô nàng rất mặc cảm với điều
                      này, thậm chí cô nàng còn không thấy thoải mái với việc
                      được người khác khen là ngực khủng và cảm thấy không thoải
                      mái với nó. Thậm chí, khi lần đầu tiên xuất hiện trong các
                      sản phẩm 18+, cô nàng còn ngượng ngùng vì chưa từng nghĩ
                      mình dám làm điều này. Dù vậy, khi xem lại bộ phim đầu
                      tay, Momojiri chia sẻ rằng thứ khiến cô nuối tiếc nhất
                      chính là việc mình vẫn còn hơi thừa cân một chút so với
                      tiêu chuẩn.{" "}
                    </p>
                    <p>
                      Trước đây, Momo từng có bạn trai vào năm 16 tuổi, nhưng
                      chưa từng dám nghĩ đến chuyện "vượt rào" vào thời điểm đó.
                      Về sau, cô nàng quyết định trở thành người mẫu áo tắm để
                      thay đổi cuộc sống của mình. Trong khi tham gia các dự án
                      chụp ảnh, cô bắt đầu biết đến AV và cảm thấy hứng thú.
                      Thậm chí, cô nàng còn nói ý định này với mẹ mình và bị
                      phản đối. Thế nhưng Momojiri vẫn quyết định tự lựa chọn
                      con đường của mình và thuyết phục mẹ cô rằng cô sẽ có
                      trách nhiệm với cuộc sống của mình.
                    </p>
                    <p>Bài viết được thực hiện với sự trợ giúp của AV Crush.</p>
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
