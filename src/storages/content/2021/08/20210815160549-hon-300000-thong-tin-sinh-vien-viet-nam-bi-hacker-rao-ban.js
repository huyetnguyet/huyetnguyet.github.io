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
"timestamp": '15/08/2021 04:05 PM',
"title": 'Hơn 300.000 thông tin sinh viên Việt Nam bị hacker rao bán',
"description": 'Thông tin cá nhân của nhiều sinh viên Việt Nam đã bị hacker đánh cắp.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/photo-1-16290169678581550254612.jpg',
"alt": 'SINH VIÊN VIỆT NAM,THÔNG TIN CÁ NHÂN,HACK,HACKER,NGƯỜI DÙNG VIỆT,',
"category": 'tech',
"date": '15/08/2021',
"time": '04:05 PM',
"link": '/hon-300000-thong-tin-sinh-vien-viet-nam-bi-hacker-rao-ban',
"zcomponent": 'page_20210815160549',
"filepath": './20210815160549-hon-300000-thong-tin-sinh-vien-viet-nam-bi-hacker-rao-ban.js'
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
const title = "Hơn 300.000 thông tin sinh viên Việt Nam bị hacker rao bán";
const author = "Đỗ Kỷ QTM";
const source = "Trí Thức Trẻ";
const timestamp = "15/08/2021 04:05 PM";
const description =
  "Thông tin cá nhân của nhiều sinh viên Việt Nam đã bị hacker đánh cắp.";
const link = "hon-300000-thong-tin-sinh-vien-viet-nam-bi-hacker-rao-ban";
const tagparam = [
  "SINH VIÊN VIỆT NAM",
  "THÔNG TIN CÁ NHÂN",
  "HACK",
  "HACKER",
  "NGƯỜI DÙNG VIỆT",
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

export default function page_20210815160549() {
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
                      Mới đây, trên diễn đàn Raidforums tiếp tục xuất hiện một
                      bài đăng bán dữ liệu của <strong>người dùng Việt</strong>.
                      Tài khoản đăng bán tuyên bố có trong tay hơn 300.000 hồ sơ
                      sinh viên từ 10 trường đại học của Việt Nam.
                    </p>
                    <p>
                      Hồ sơ bao gồm tên, tuổi, địa chỉ, số điện thoại của các
                      sinh viên. Đặc biệt, một số sinh viên còn bị lộ cả những
                      thông tin nhạy cảm như số tài khoản ngân hàng, ảnh chụp
                      chứng minh thư nhân dân, địa chỉ của phụ huynh...
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/photo-1-16290169678581550254612.jpg"
                      alt="1, SINH VIÊN VIỆT NAM,THÔNG TIN CÁ NHÂN,HACK,HACKER,NGƯỜI DÙNG VIỆT,"
                      note=""
                    />
                    <p>
                      Tài khoản đăng bán không tiết lộ hắn ta lấy được số dữ
                      liệu này bằng cách nào, từ khi nào. Bên cạnh các thông tin
                      cơ bản, <strong>hack</strong>er cũng đăng mẫu thông tin
                      của hai sinh viên để chứng minh số dữ liệu mình có trong
                      tay là thật.
                    </p>
                    <p>
                      Dựa theo cách đặt tên tài khoản là xiaolin1983 thì nhiều
                      khả năng kẻ rao bán số dữ liệu này là người Việt. Tài
                      khoản này cũng mới được tạo và chỉ có duy nhất một bài
                      đăng bán dữ liệu sinh viên.
                    </p>
                    <p>
                      Một số tờ báo đã liên hệ với hai sinh viên bị lộ thông tin
                      để kiểm tra thì nhận được phản hồi rằng toàn bộ dữ liệu bị
                      lộ đều trùng khớp với <strong>thông tin cá nhân</strong>{" "}
                      của họ. Cả hai sinh viên đều không hiểu tại sao dữ liệu
                      của mình lại bị lộ.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Sau khi đăng bán được 2 ngày, tới sáng ngày 15/8 bài đăng
                      bán hồ sơ sinh viên của xiaolin1983 đột ngột biến mất.
                    </p>
                    <h5>
                      Với <strong>thông tin cá nhân</strong> rò rỉ{" "}
                      <strong>hack</strong>er làm được gì?
                    </h5>
                    <p>
                      Kẻ xấu, <strong>hack</strong>er có hàng trăm cách để khai
                      thác các dữ liệu cá nhân bị rò rỉ trên internet. Nhẹ nhàng
                      nhất thì bạn có thể bị làm phiền bởi các bên cung cấp dịch
                      vụ qua điện thoại. Nặng hơn một chút thì thông tin của bạn
                      có thể được dùng để đăng ký vay tín dụng. Cuối cùng, kẻ
                      xấu có thể lợi dụng thông tin đã biết về bản thân bạn để
                      tiến hành các chiến dịch lừa đảo tinh vi.
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
