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
"timestamp": '11/06/2021 01:11 AM',
"title": 'Game "tập làm nông dân" My Time At Portia sắp có mặt trên nền tảng di dộng',
"description": 'Một phiên bản vui tươi và mới lạ hơn so với bản gốc trên PC của trò chơi My Time At Portia.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/11/photo-1-16233453346472028627908.jpg',
"alt": 'My Time In Portia, Game Mobile, Ios, Android, ',
"category": 'games',
"date": '11/06/2021',
"time": '01:11 AM',
"link": '/game-tap-lam-nong-dan-my-time-at-portia-sap-co-mat-tren-nen-tang-di-dong',
"zcomponent": 'page_20210611011115',
"filepath": './20210611011115-game-tap-lam-nong-dan-my-time-at-portia-sap-co-mat-tren-nen-tang-di-dong.js'
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
  'Game "tập làm nông dân" My Time At Portia sắp có mặt trên nền tảng di dộng';
const author = "Giang Gamek";
const source = "Trí Thức Trẻ";
const timestamp = "11/06/2021 01:11 AM";
const description =
  "Một phiên bản vui tươi và mới lạ hơn so với bản gốc trên PC của trò chơi My Time At Portia.";
const link =
  "game-tap-lam-nong-dan-my-time-at-portia-sap-co-mat-tren-nen-tang-di-dong";
const tagparam = ["my-time-in-portia", "game-mobile", "ios", "android"];
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

export default function page_20210611011115() {
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
                    Pathea Games hôm nay đã thông báo trò chơi My Time at Portia
                    sẽ ra mắt trên <strong>iOS</strong> và{" "}
                    <strong>Android</strong> vào ngày 4 tháng 8. Trò chơi nhập
                    vai mô phỏng hiện đã có thể đăng ký trước tại Google Play và
                    App Store, với nhiều phần thưởng hứa hẹn khi đạt được mốc
                    đăng ký.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/11/photo-1-16233453346472028627908.jpg"
                    alt="My Time In Portia, Game Mobile, Ios, Android, "
                    note=""
                  />

                  <p>
                    Trò chơi My Time at Portia được phát hành lần đầu tiên vào
                    năm 2018. Người chơi phải khôi phục lại nhà xưởng đổ nát của
                    Pa, giao lưu với người dân thị trấn, thu thập tài nguyên và
                    thực hiện nhiều nhiệm vụ nguy hiểm. Trò chơi đã nhanh chóng
                    trở nên phổ biến trên thị trường và phần tiếp theo - My Time
                    at Sandrock - hiện đang được phát triển. Nếu chưa chơi trên
                    phiên bản PC thì phiên bản di động có thể giúp bạn giải trí
                    cùng lúc trải nghiệm thử.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/11/photo-1-1623345337160483914876.jpg"
                    alt="My Time In Portia, Game Mobile, Ios, Android, "
                    note=""
                  />
                  <p>
                    Nhà phát triển Pathea Games đã tiết lộ các cột mốc đăng ký
                    trước cho việc ra mắt trên thiết bị di động. Chiến dịch này
                    nhằm tặng những phần thưởng độc đáo dựa trên số lượng người
                    chơi đăng ký trò chơi trước ngày ra mắt vào tháng 8.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/11/photo-2-16233453372201038151446.jpg"
                    alt="My Time In Portia, Game Mobile, Ios, Android, "
                    note=""
                  />
                  <p>Người chơi có thể chờ đợi những gói quà sau:</p>
                  <p>o 5.000 lượt đăng ký: Hộp quà năng lượng + Hộp lưu trữ</p>
                  <p>
                    o 10.000 lượt đăng ký: Đồ bơi (Dành riêng cho phiên bản di
                    động)
                  </p>
                  <p>
                    o 15.000 lượt đăng ký: Ghế massage (Dành riêng cho phiên bản
                    di động)
                  </p>
                  <p>
                    o 30.000 lượt đăng ký: Cabin nấm (Dành riêng cho phiên bản
                    di động)
                  </p>
                  <p>
                    o 40.000 lượt đăng ký: Món quà từ Sandrock dành cho Portia
                    (Dành riêng cho phiên bản di động)
                  </p>
                  <p>
                    Phần lớn trò chơi My Time at Portia vẫn sẽ giữ nguyên trên
                    phiên bản di động. Đương nhiên giao diện người dùng sẽ được
                    làm lại để phù hợp hơn với điều khiển màn hình cảm ứng.
                    Pathea Games cho biết người chơi có thể yên tâm "khám phá
                    toàn bộ Portia trên điện thoại của mình".
                  </p>
                  <p>
                    Ngoài ra còn có một số tính năng tiện lợi mới trên{" "}
                    <strong>iOS</strong> và <strong>Android</strong>, chẳng hạn
                    như Tự động sao lưu, Hệ thống thu thập tài nguyên được đơn
                    giản hóa và Thành tích trong trò chơi. Dưới đây là danh sách
                    đầy đủ các thay đổi:
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    o Giao diện người dùng và UX tùy chỉnh cho nền tảng di động.
                  </p>
                  <p>o Chức năng tự động lưu vào bộ lưu trữ gốc.</p>
                  <p>
                    o Hệ thống theo dõi mặt hàng để đơn giản hóa quá trình thu
                    thập tài nguyên.
                  </p>
                  <p>
                    o "Hệ thống thành tích" trong trò chơi với phần thưởng tương
                    ứng sau khi mở khóa.
                  </p>
                  <p>
                    o Chứng nhận Hoàn thành để ghi lại khoảng thời gian người
                    chơi có ở Portia.
                  </p>
                  <p>
                    o Chức năng Lọc và Mở Tất cả trong hộp thư để tiết kiệm thời
                    gian.
                  </p>
                  <p>
                    o Chức năng Lắp ráp nhanh trong Hệ thống lắp ráp cho phép
                    người chơi nhanh chóng lắp ráp các mặt hàng để dễ đạt mục
                    tiêu lắp ráp và khai thác các bộ phận tương ứng.
                  </p>
                  <p>
                    Trò chơi My Time at Portia sẽ ra mắt trên thiết bị di động
                    vào ngày 4 tháng 8 và hiện đã có thể đăng ký trước trên App
                    Store và Google Play.
                  </p>
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
