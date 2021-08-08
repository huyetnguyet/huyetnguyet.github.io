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
"timestamp": '08/08/2021 11:02 AM',
"title": '[Review] My Time at Portia phiên bản di động: Khi cả thế giới nằm trong tầm tay bạn!',
"description": 'Trò chơi My Time at Portia đã được ra mắt trên thiết bị di động vào ngày 4 tháng 8 vừa qua.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-162832600068850224543.jpg',
"alt": 'MY TIME AT PORTIA,REVIEW,',
"category": 'games',
"date": '08/08/2021',
"time": '11:02 AM',
"link": '/review-my-time-at-portia-phien-ban-di-dong-khi-ca-the-gioi-nam-trong-tam-tay-ban',
"zcomponent": 'page_20210808110211',
"filepath": './20210808110211-review-my-time-at-portia-phien-ban-di-dong-khi-ca-the-gioi-nam-trong-tam-tay-ban.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title =
  "[Review] My Time at Portia phiên bản di động: Khi cả thế giới nằm trong tầm tay bạn!";
const author = "Giang Gamek";
const source = "Trí Thức Trẻ";
const timestamp = "08/08/2021 11:02 AM";
const description =
  "Trò chơi My Time at Portia đã được ra mắt trên thiết bị di động vào ngày 4 tháng 8 vừa qua.";
const link =
  "review-my-time-at-portia-phien-ban-di-dong-khi-ca-the-gioi-nam-trong-tam-tay-ban";
const tagparam = ["MY TIME AT PORTIA", "REVIEW"];
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

export default function page_20210808110211() {
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
                      <strong>My Time at Portia</strong> là một con game không
                      thể thiếu nếu bạn là người thích loại trò chơi mô phỏng
                      như Animal Crossing. Được phát hành lần đầu tiên vào năm
                      2018, My Time at Portia đã nhanh chóng trở nên phổ biến
                      trên thị trường và phần tiếp theo - My Time at Sandrock -
                      hiện đang được phát triển.
                    </p>
                    <p>
                      Trong game, người chơi phải khôi phục lại nhà xưởng đổ nát
                      của Pa, giao lưu với người dân thị trấn, thu thập tài
                      nguyên và thực hiện nhiều nhiệm vụ nguy hiểm. Nếu chưa
                      chơi trên phiên bản PC thì phiên bản di động có thể giúp
                      bạn giải trí cùng lúc trải nghiệm thử.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-162832600068850224543.jpg"
                      alt="1, MY TIME AT PORTIA,REVIEW,"
                      note=""
                    />
                    <p>
                      Đồ họa và hình ảnh tuyệt vời như mọi khi - khung cảnh tươi
                      sáng và hấp dẫn, kẻ thù trong game có mô hình vui nhộn,
                      nội thất và máy móc được thiết kế tốt. Tuy nhiên hình ảnh
                      nhân vật lại có điểm trừ.
                    </p>
                    <p>
                      Trong phần quảng cáo trước đó xuất hiện nhiều nhân vật
                      hơn. Nhân vật người dân thị trấn và người chơi chính có
                      thể tùy chỉnh được nhưng khuôn mặt trông khá vô hồn và đôi
                      khi lộn xộn. Khi nhân vật người chơi chạy trong lúc cầm vũ
                      khí và công cụ, hoạt họa trông rất kỳ quặc và không tự
                      nhiên.
                    </p>
                    <p>
                      Điểm thu hút ở trò chơi <strong>My Time at Portia</strong>{" "}
                      vẫn là cách chế tạo vật dụng. Việc chế tạo trong giai đoạn
                      đầu không còn quá gian nan nữa, khi giờ đây đã có thêm
                      chức năng theo dõi các vật liệu cần thiết cho công việc
                      hiện tại của người chơi. Thanh menu dễ dàng truy cập và dễ
                      hiểu, kèm với đó là sổ tay chi tiết giúp người chơi tìm ra
                      các mục cần thiết.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-1628326002761284005208.jpg"
                      alt="2, MY TIME AT PORTIA,REVIEW,"
                      note=""
                    />
                    <p>
                      Thời gian tải nhanh hơn đáng kể so với chơi trên bảng điều
                      khiển. Một điểm cộng khác nữa là người chơi có thể chơi
                      tùy theo tốc độ của mình và lưu lại quá trình giữa chừng
                      cuộc chơi.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Phiên bản di động đã thay đổi cách khám phá tàn tích trong
                      game. Giờ đây người chơi được trang bị một túi phản lực và
                      máy quét để tìm các di tích và vật liệu xung quanh mình.
                      Tuy nhiên, vì là trên di động nên màn hình sẽ nhỏ hơn
                      nhiều. Việc đấy khiến công việc khai thác dưới lòng đất và
                      tham gia chiến đấu cảm thấy ngột ngạt.
                    </p>
                    <p>
                      Các NPC (Nhân vật không phải người chơi) không mấy hấp dẫn
                      và việc xây dựng mối quan hệ với họ cũng khó khăn. Đối
                      thoại và tính cách của nhân vật thường khá chung chung,
                      nhưng có thể tùy người chơi mà tìm ra một vài nhân vật độc
                      đáo thu hút sự quan tâm của mình.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-2-16283260032731662572446.jpg"
                      alt="3, MY TIME AT PORTIA,REVIEW,"
                      note=""
                    />
                    <p>
                      Các trò chơi nhỏ trong tương tác hàng ngày cũng không đặc
                      biệt lắm, mặc dù ở các sự kiện của game, nếu người chơi
                      kết thân được một bạn đối tác thì họ sẽ giúp bạn công việc
                      nơi trang trại.
                    </p>
                    <p>
                      Nếu <strong>My Time at Portia</strong> đã sẵn là trò chơi
                      yêu thích của bạn thì bạn đừng nên bỏ lỡ phiên bản di động
                      này - đặc biệt là để trải nghiệm các sự kiện mới và nhận
                      các vật phẩm độc đáo chào mừng sự kiện ra mắt.
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
