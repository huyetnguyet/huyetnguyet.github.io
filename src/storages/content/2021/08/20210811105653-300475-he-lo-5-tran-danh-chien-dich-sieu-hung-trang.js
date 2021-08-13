import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import {
  Content,
  ContentImage,
  FacebookShareButton,
} from "components/content";

import { Helmet } from "react-helmet";



/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '11/08/2021 10:56 AM',
"title": '300475 hé lộ 5 trận đánh, chiến dịch siêu hùng tráng',
"description": '300475 đang trong quá trình phát triển.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-16285889554181442125226.jpg',
"alt": 'DỰ ÁN GAME,GAME THUẦN VIỆT,300475,CHIẾN DỊCH HỒ CHÍ MINH,ĐIỆN BIÊN PHỦ TRÊN KHÔNG,GAME LỊCH SỬ,KHÁNG CHIẾN CHỐNG MỸ,',
"category": 'games',
"date": '11/08/2021',
"time": '10:56 AM',
"link": '/300475-he-lo-5-tran-danh-chien-dich-sieu-hung-trang',
"zcomponent": 'page_20210811105653',
"filepath": './20210811105653-300475-he-lo-5-tran-danh-chien-dich-sieu-hung-trang.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = 'games';
const categoryLink = '/games';
const title = '300475 hé lộ 5 trận đánh, chiến dịch siêu hùng tráng';
const author = 'Real Madrid';
const source = 'Pháp luật và bạn đọc';
const timestamp = '11/08/2021 10:56 AM';
const description = '300475 đang trong quá trình phát triển.';
const link = '300475-he-lo-5-tran-danh-chien-dich-sieu-hung-trang';
const tagparam = ["DỰ ÁN GAME","GAME THUẦN VIỆT","300475","CHIẾN DỊCH HỒ CHÍ MINH","ĐIỆN BIÊN PHỦ TRÊN KHÔNG","GAME LỊCH SỬ","KHÁNG CHIẾN CHỐNG MỸ",];
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

export default function page_20210811105653() {
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
              <div className="author">{author}</div> - Theo {source} | {timestamp}
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

<p>Mới đây, đội ngũ phát triển <strong>dự án game</strong> thuần Việt <strong>300475</strong> đã hé lộ 5 trận đánh, sự kiện, chiến dịch sẽ được mô phỏng lại trong game. Danh sách cụ thể bao gồm:</p>
<p>Trận Vạn Tường – Chu Lai 1965</p>
<p>Tết Mậu Thân – Huế 1968</p>
<p>Khe Sanh - Làng vây 1968</p>
<p>Điện Biên Phủ Trên Không 1972</p>
<p>Chiến dịch Hồ Chí Minh – 1975</p>
<p>Khi lựa chọn các sự kiện, chiến dịch, trận đánh, Studio đã quyết định dựa trên nhiều tiêu chí. Đó là phải là những sự kiện có tính chất tiêu biểu, lại phải đảm bảo sự đa dạng về bối cảnh, thời điểm, tính chất... và phù hợp với các yếu tố gameplay. Vì vậy, chắc chắn sẽ không có sự xuất hiện của tất cả mọi sự kiện hay diễn biến của toàn bộ cuộc <strong>kháng chiến chống Mỹ</strong>.</p>
<RelationNewsInPage category={category} />
<p>Ở thời điểm hiện tại, 5 trận đánh, sự kiện, chiến dịch nêu trên đã được đội ngũ phát triển thống nhất lựa chọn. Những nội dung khác của game sẽ được liên tục cập nhật và gửi đến cộng đồng game thủ thông tin sớm nhất.</p>
<p>Được biết, <strong>300475</strong> là <strong>dự án game</strong> mới nhất do Hiker Games sản xuất. Đây sẽ là tựa game về đề lịch sử, tái hiện lại <strong>chiến dịch Hồ Chí Minh</strong> huyền thoại.</p>
<p>Khác với dự án 7557 (đã phát hành cách đây hơn 10 năm), <strong>300475</strong> sẽ được triển khai theo hình thức huy động vốn từ cộng đồng. Game sẽ được chia làm 3 giai đoạn phát triển, kéo dài trong vòng khoảng 30 tháng. Hiker Games đặt kỳ vọng sẽ huy động được khoảng 20 tỷ để thực hiện dự án 300475.</p>
<p>Tiếp bước thành công của 7554, dự án <strong>300475</strong> được ra mắt và hứa hẹn sẽ tiếp tục mang đến cho cộng đồng game thủ một sản phẩm chất lượng.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-16285889554181442125226.jpg' alt='1, DỰ ÁN GAME,GAME THUẦN VIỆT,300475,CHIẾN DỊCH HỒ CHÍ MINH,ĐIỆN BIÊN PHỦ TRÊN KHÔNG,GAME LỊCH SỬ,KHÁNG CHIẾN CHỐNG MỸ,' note=''/>


                    </div>
                  <AdsHorizontal />
                </div></div>

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
