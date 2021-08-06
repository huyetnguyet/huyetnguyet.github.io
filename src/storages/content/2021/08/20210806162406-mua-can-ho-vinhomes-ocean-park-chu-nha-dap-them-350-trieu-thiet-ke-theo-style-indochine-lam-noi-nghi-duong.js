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
"timestamp": '06/08/2021 04:24 PM',
"title": 'Mua căn hộ Vinhomes Ocean Park, chủ nhà "đắp" thêm 350 triệu thiết kế theo style Indochine làm nơi nghỉ dưỡng',
"description": 'Căn hộ được thiết kế tỉ mỉ đến từng chi tiết, đặc biệt là phần sàn gạch và bức tranh tường.',
"src": 'https://kenh14cdn.com/zoom/90_60/203336854389633024/2021/8/4/photo1628084782323-16280847825321220114079.png',
"alt": 'khoe nhà đẹp,căn hộ,màu chủ đạo,thiết kế đẹp,gỗ tự nhiên,Đồ nội thất,giấy dán tường,Vinhomes Ocean Park,house n home,',
"category": 'life',
"date": '06/08/2021',
"time": '04:24 PM',
"link": '/mua-can-ho-vinhomes-ocean-park-chu-nha-dap-them-350-trieu-thiet-ke-theo-style-indochine-lam-noi-nghi-duong',
"zcomponent": 'page_20210806162406',
"filepath": './20210806162406-mua-can-ho-vinhomes-ocean-park-chu-nha-dap-them-350-trieu-thiet-ke-theo-style-indochine-lam-noi-nghi-duong.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "life";
const categoryLink = "/life";
const title =
  'Mua căn hộ Vinhomes Ocean Park, chủ nhà "đắp" thêm 350 triệu thiết kế theo style Indochine làm nơi nghỉ dưỡng';
const author = "HÀ BÍCH NGỌC,";
const source = "Trí Thức Trẻ";
const timestamp = "06/08/2021 04:24 PM";
const description =
  "Căn hộ được thiết kế tỉ mỉ đến từng chi tiết, đặc biệt là phần sàn gạch và bức tranh tường.";
const link =
  "mua-can-ho-vinhomes-ocean-park-chu-nha-dap-them-350-trieu-thiet-ke-theo-style-indochine-lam-noi-nghi-duong";
const tagparam = [
  "khoe nhà đẹp",
  "căn hộ",
  "màu chủ đạo",
  "thiết kế đẹp",
  "gỗ tự nhiên",
  "Đồ nội thất",
  "giấy dán tường",
  "Vinhomes Ocean Park",
  "house n home",
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

export default function page_20210806162406() {
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
                      <strong>Căn hộ</strong> được thiết kế tỉ mỉ đến từng chi
                      tiết, đặc biệt là phần sàn gạch và bức tranh tường.
                    </p>
                    <p>
                      Vì muốn gia đình có 1 không gian nghỉ ngơi cuối tuần, rời
                      xa sự ồn ào của phố xá đông đúc, chủ nhà đã quyết định mua
                      1 <strong>căn hộ</strong> ở khu đô thị{" "}
                      <strong>Vinhomes Ocean Park</strong>. Căn hộ này cũng sẽ
                      là nơi chị về sinh sống sau khi nghỉ hưu.
                    </p>
                    <p>
                      Với <strong>căn hộ</strong> Vinhomes Oceans Park có diện
                      tích 70m2 (gồm 2 phòng ngủ, 2 nhà vệ sinh, 1 phòng khách -
                      bếp), chủ nhà đã quyết định chọn phong cách Indochine vừa
                      hoài cổ vừa hiện đại. Là một người đã có kinh nghiệm làm
                      nhà cũng như rất hiểu biết về nghệ thuật, chị rất tỉ mỉ
                      trong quá trình thiết kế lẫn thi công.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/6/8-3-1628240517469390285723.jpg"
                      alt="6, khoe nhà đẹp,căn hộ,màu chủ đạo,thiết kế đẹp,gỗ tự nhiên,Đồ nội thất,giấy dán tường,Vinhomes Ocean Park,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/6/6-3-16282405174451733289662.jpg"
                      alt="7, khoe nhà đẹp,căn hộ,màu chủ đạo,thiết kế đẹp,gỗ tự nhiên,Đồ nội thất,giấy dán tường,Vinhomes Ocean Park,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/6/tvc-ocean00011921still001-16282405177092138126356.jpg"
                      alt="8, khoe nhà đẹp,căn hộ,màu chủ đạo,thiết kế đẹp,gỗ tự nhiên,Đồ nội thất,giấy dán tường,Vinhomes Ocean Park,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/6/2-3-16282405167561455221645.jpg"
                      alt="9, khoe nhà đẹp,căn hộ,màu chủ đạo,thiết kế đẹp,gỗ tự nhiên,Đồ nội thất,giấy dán tường,Vinhomes Ocean Park,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/6/goc-tu-nha-nhin-tu-va-rem-sang-16282405175722134559085.jpg"
                      alt="10, khoe nhà đẹp,căn hộ,màu chủ đạo,thiết kế đẹp,gỗ tự nhiên,Đồ nội thất,giấy dán tường,Vinhomes Ocean Park,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/6/dsc04047-16282405175461835826553.jpg"
                      alt="11, khoe nhà đẹp,căn hộ,màu chủ đạo,thiết kế đẹp,gỗ tự nhiên,Đồ nội thất,giấy dán tường,Vinhomes Ocean Park,house n home,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/6/32-1-1628240816475184780343.jpg"
                      alt="12, khoe nhà đẹp,căn hộ,màu chủ đạo,thiết kế đẹp,gỗ tự nhiên,Đồ nội thất,giấy dán tường,Vinhomes Ocean Park,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/6/5-2-16282405174291144758729.jpg"
                      alt="13, khoe nhà đẹp,căn hộ,màu chủ đạo,thiết kế đẹp,gỗ tự nhiên,Đồ nội thất,giấy dán tường,Vinhomes Ocean Park,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/6/1-5-1628240516029957228958.jpg"
                      alt="14, khoe nhà đẹp,căn hộ,màu chủ đạo,thiết kế đẹp,gỗ tự nhiên,Đồ nội thất,giấy dán tường,Vinhomes Ocean Park,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/6/4-4-1628240517292221174494.jpg"
                      alt="15, khoe nhà đẹp,căn hộ,màu chủ đạo,thiết kế đẹp,gỗ tự nhiên,Đồ nội thất,giấy dán tường,Vinhomes Ocean Park,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/6/goc-o-trong-vom-2-3-1-16282408111671864275114.jpg"
                      alt="16, khoe nhà đẹp,căn hộ,màu chủ đạo,thiết kế đẹp,gỗ tự nhiên,Đồ nội thất,giấy dán tường,Vinhomes Ocean Park,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/6/tong-phong-ngu-16282405176682104470741.jpg"
                      alt="17, khoe nhà đẹp,căn hộ,màu chủ đạo,thiết kế đẹp,gỗ tự nhiên,Đồ nội thất,giấy dán tường,Vinhomes Ocean Park,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/6/dsc03951-1628240517533690877914.jpg"
                      alt="18, khoe nhà đẹp,căn hộ,màu chủ đạo,thiết kế đẹp,gỗ tự nhiên,Đồ nội thất,giấy dán tường,Vinhomes Ocean Park,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/6/dsc03930-16282405175022109783125.jpg"
                      alt="19, khoe nhà đẹp,căn hộ,màu chủ đạo,thiết kế đẹp,gỗ tự nhiên,Đồ nội thất,giấy dán tường,Vinhomes Ocean Park,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/8/6/pngu3-1628240517595660321638.jpg"
                      alt="20, khoe nhà đẹp,căn hộ,màu chủ đạo,thiết kế đẹp,gỗ tự nhiên,Đồ nội thất,giấy dán tường,Vinhomes Ocean Park,house n home,"
                      note=""
                    />
                    <p>Nguồn: Gạo Design</p>{" "}
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
