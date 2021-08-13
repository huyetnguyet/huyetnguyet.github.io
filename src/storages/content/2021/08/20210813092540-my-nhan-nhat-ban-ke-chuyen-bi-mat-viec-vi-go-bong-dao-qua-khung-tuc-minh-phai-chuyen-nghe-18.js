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
"timestamp": '13/08/2021 09:25 AM',
"title": 'Mỹ nhân Nhật Bản kể chuyện bị mất việc vì gò bồng đảo quá khủng, tức mình chuyển nghề 18+',
"description": 'Ngay từ lúc còn đi học, cô nàng Riri Nanatsumori đã sở hữu bộ ngực lớn hơn so với các bạn đồng trang lứa.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-16287504068951491005346.jpg',
"alt": 'RIRI NANATSUMORI,IDOL,',
"category": 'tech',
"date": '13/08/2021',
"time": '09:25 AM',
"link": '/my-nhan-nhat-ban-ke-chuyen-bi-mat-viec-vi-go-bong-dao-qua-khung-tuc-minh-phai-chuyen-nghe-18',
"zcomponent": 'page_20210813092540',
"filepath": './20210813092540-my-nhan-nhat-ban-ke-chuyen-bi-mat-viec-vi-go-bong-dao-qua-khung-tuc-minh-phai-chuyen-nghe-18.js'
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
  "Mỹ nhân Nhật Bản kể chuyện bị mất việc vì gò bồng đảo quá khủng, tức mình chuyển nghề 18+";
const author = "DS";
const source = "Pháp luật và bạn đọc";
const timestamp = "13/08/2021 09:25 AM";
const description =
  "Ngay từ lúc còn đi học, cô nàng Riri Nanatsumori đã sở hữu bộ ngực lớn hơn so với các bạn đồng trang lứa.";
const link =
  "my-nhan-nhat-ban-ke-chuyen-bi-mat-viec-vi-go-bong-dao-qua-khung-tuc-minh-phai-chuyen-nghe-18";
const tagparam = ["RIRI NANATSUMORI", "IDOL"];
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

export default function page_20210813092540() {
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
                      <strong>Riri Nanatsumori</strong> sinh năm 1995, là tân
                      binh tháng 8/2020 của studio nổi tiếng trong ngành công
                      nghiệp phim người lớn - S1. Giống với Yua Mikami, cô gái
                      mang 2 dòng máu Nhật Bản - Phillipines vốn là 1 người mẫu
                      thời trang trong showbiz, nhưng bất ngờ chuyển hướng sang
                      làm diễn viên phim người lớn bắt đầu từ giữa năm nay.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-1628750404743401246016.jpg"
                      alt="2, RIRI NANATSUMORI,IDOL,"
                      note=""
                    />
                    <p>
                      Với vẻ ngoài xinh đẹp cùng thể hình cực chuẩn, không khó
                      hiểu vì sao mà Riri nhận được rất nhiều sự chú ý của các
                      cư dân mạng. Và như 1 lẽ dĩ nhiên, người ta nhận ra ngay
                      "thân phận" cũ của cô nàng trước đây là người mẫu. Trên
                      trang mạng xã hội Twitter, Suzuka Matsumoto cũng có 100
                      nghìn người theo dõi. Điều này đã khiến cho cư dân mạng
                      xôn xao khi 1 cô nàng có tên tuổi bỗng dưng chuyển nghề
                      sang diễn viên 18+, đồng thời đẩy tên tuổi Riri lên chóng
                      mặt.{" "}
                    </p>
                    <p>
                      Mới đây trong một buổi phỏng vấn , cô nàng đã có những
                      chia sẻ cá nhân về lý do tham gia vào nghề diễn viên 18+.
                      Theo đó, Riri cảm thấy khá phiền phức, thậm chí từng bị từ
                      chối công việc chỉ bởi cô nàng sở hữu "gò bồng đảo" lớn
                      hơn bình thường. Đa phần các tạp chí thời trang điều yêu
                      cầu người mẫu mảnh mai, thế nên cô nàng gặp khá nhiều
                      phiền toái để tìm được công việc phù hợp.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-16287530296331831218726.jpg"
                      alt="3, RIRI NANATSUMORI,IDOL,"
                      note=""
                    />
                    <p>
                      Ngay từ lúc còn đi học, cô nàng đã sở hữu bộ ngực lớn hơn
                      so với các bạn đồng trang lứa. Thế nên cô nàng không
                      thường chọn được loại áo ngực phù hợp và rất hay bị các
                      bạn học khác chú ý. Điều này khiến cho Riri không thoải
                      mái, cô nàng thậm chí từng cố gắng ăn kiêng để có cơ thể
                      mảnh mai hơn.{" "}
                    </p>
                    <p>
                      Việc chuyển sang nghề mới đã giúp cảm thấy vui vẻ hơn
                      nhiều. Giờ đây, cô nàng có thể kiếm thoải mái hơn trong
                      chuyện ăn uống cũng như thời trang, bởi cô nàng không còn
                      bị ràng buộc nữa. Thậm chí, Riri còn không ngại mặc những
                      bộ đồ nóng bỏng để khoe thân hình gợi cảm của mình. Thêm
                      nữa Riri cũng nói về chuyện cô nàng đạt top 1 bảng xếp
                      hạng về sản phẩm bán chạy nhất trong năm 2020. Bản thân
                      Riri cũng khá bất ngờ về điều này, bởi cô nàng trình làng
                      trong nửa cuối năm 2020 nên rất khó để leo lên top đầu
                      bảng xếp hạng.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Hiện tại, Riri đã chuyển sang nghề diễn viên được 1 năm và
                      có được nhiều fan hâm mộ. Cô nàng hiện đại học hỏi được
                      rất nhiều điều, và sẽ tiếp tục cố gắng để kế nhiệm người
                      đàn chị Yua Mikami trong thời gian sắp tới.{" "}
                    </p>
                    <p>Bài viết được thực hiện với sự trợ giúp của AV Crush.</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-16287504068951491005346.jpg"
                      alt="1, RIRI NANATSUMORI,IDOL,"
                      note=""
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
