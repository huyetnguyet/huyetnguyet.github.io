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
"timestamp": '29/07/2021 04:19 PM',
"title": 'Top 10 công việc kỳ lạ mà siêu anh hùng đã làm để kiếm tiền trang trải cuộc sống trong comic (P.2)',
"description": 'Không phải ai cũng có nhiều tiền như Batman và Iron Man, một số siêu anh hùng phải làm việc để kiếm sống.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-16266035178331141843848.jpg',
"alt": 'MARVEL,DC,GREEN LANTERN,SIÊU ANH HÙNG,NGHỆ NGHIỆP CỦA SIÊU ANH HÙNG,',
"category": 'news',
"date": '29/07/2021',
"time": '04:19 PM',
"link": '/top-10-cong-viec-ky-la-ma-sieu-anh-hung-da-lam-de-kiem-tien-trang-trai-cuoc-song-trong-comic-p2',
"zcomponent": 'page_20210729161939',
"filepath": './20210729161939-top-10-cong-viec-ky-la-ma-sieu-anh-hung-da-lam-de-kiem-tien-trang-trai-cuoc-song-trong-comic-p2.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title =
  "Top 10 công việc kỳ lạ mà siêu anh hùng đã làm để kiếm tiền trang trải cuộc sống trong comic (P.2)";
const author = "MT";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:19 PM";
const description =
  "Không phải ai cũng có nhiều tiền như Batman và Iron Man, một số siêu anh hùng phải làm việc để kiếm sống.";
const link =
  "top-10-cong-viec-ky-la-ma-sieu-anh-hung-da-lam-de-kiem-tien-trang-trai-cuoc-song-trong-comic-p2";
const tagparam = [
  "MARVEL",
  "DC",
  "GREEN LANTERN",
  "SIÊU ANH HÙNG",
  "NGHỆ NGHIỆP CỦA SIÊU ANH HÙNG",
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

export default function page_20210729161939() {
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
                    <strong>Marvel</strong> và <strong>DC</strong> xuyên suốt
                    chiều dài phát triển đã cho ra mắt rất nhiều{" "}
                    <strong>siêu anh hùng</strong> khác nhau, mang trong mình
                    khả năng vượt trội. Trong số đó, có không ít những cái tên
                    như Batman và Iron Man sở hữu khối tài sản kếch xù mà nhiều
                    người phải mơ ước.
                  </p>
                  <p>
                    Nhưng cũng có một vài người ngoài hành hiệp trượng nghĩa ra,
                    họ cũng cần làm việc để trang trải cho cuộc sống thường nhật
                    cũng như thỏa đam mê. Và có không ít những ngành nghề của{" "}
                    <strong>siêu anh hùng</strong> sau đây mà độc giả cảm thấy
                    vừa thú vị nhưng cũng không kém phần kỳ lạ.
                  </p>
                  <h5>
                    5. <strong>Green Lantern</strong>: Phi công lái thử nghiệm
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-16266035178331141843848.jpg"
                    alt="1, MARVEL,DC,GREEN LANTERN,SIÊU ANH HÙNG,NGHỆ NGHIỆP CỦA SIÊU ANH HÙNG,"
                    note=""
                  />
                  <p>
                    <strong>Green Lantern</strong>/Hal Jordan là một phi công
                    lái thử nghiệm tại Không quân Hoa Kỳ. Sau đó, anh quyết định
                    chuyển sang làm việc cho công ty tư nhân Ferris Air. Nhiệm
                    vụ chính của Hal trong công việc này là kiểm tra bộ điều
                    khiển và thúc đẩy động cơ máy bay lên đến mức giới hạn cao
                    nhất, nhằm đảm bảo rằng phương tiện sẽ sẵn sàng cho các phi
                    công chính.
                  </p>
                  <p>
                    Hiện tại nhiệm vụ của anh giờ đây là thành viên của binh
                    đoàn <strong>Green Lantern</strong>, và Hal Jordan vẫn cho
                    thấy được kỹ năng điều khiển máy bay ở mức thượng thừa.
                  </p>
                  <h5>4. Doc Samson: Bác sĩ tâm lý cho siêu anh hùng</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-16266035187631838542753.jpg"
                    alt="2, MARVEL,DC,GREEN LANTERN,SIÊU ANH HÙNG,NGHỆ NGHIỆP CỦA SIÊU ANH HÙNG,"
                    note=""
                  />
                  <p>
                    Doctor Leonard Samson trong <strong>Marvel</strong> là bác
                    sĩ tâm lý cho khá nhiều <strong>siêu anh hùng</strong>. Cái
                    tên đầu tiên là Hulk/Bruce Banner, khi Samson đã hỗ trợ cho
                    anh cách kiểm soát được cơn giận.
                  </p>
                  <p>
                    Những cái tên khác từng được Doc Samson tư vấn tâm lý còn có
                    She-Hulk, Captain <strong>Marvel</strong>, War Machine, nhóm
                    Thunderbolts. Với lượng gamma trong người, Samson đã tham
                    gia Alpha Flight với cái tên Sasquatch.
                  </p>
                  <h5>3. The Thing: Đô vật chuyên nghiệp</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-2-16266035192751114605365.jpg"
                    alt="3, MARVEL,DC,GREEN LANTERN,SIÊU ANH HÙNG,NGHỆ NGHIỆP CỦA SIÊU ANH HÙNG,"
                    note=""
                  />
                  <p>
                    Ben Grimm/The Thing ngoài việc làm anh hùng ra thì anh còn
                    là đô vật chuyên nghiệp thuộc hiệp hội UCWF, một tập hợp của
                    các các thể sở hữu siêu sức mạnh gồm <strong>Marvel</strong>{" "}
                    Boy, Ikaris và Demolition Man.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Với vai trò này, The Thing trong nhiều đầu truyện đã trở
                    thành một đô vật nổi tiếng được nhiều khán giả yêu quý.
                  </p>
                  <h5>2. Luke Cage: Dịch vụ anh hùng cho thuê</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-3-16266035198091755361694.jpg"
                    alt="4, MARVEL,DC,GREEN LANTERN,SIÊU ANH HÙNG,NGHỆ NGHIỆP CỦA SIÊU ANH HÙNG,"
                    note=""
                  />
                  <p>
                    Trong <strong>Marvel</strong> Comics, Luke Cage đã tận dụng
                    năng lực của mình vào việc kinh doanh với dịch vụ anh hùng
                    cho thuê. Chính từ dịch vụ này, mà anh đã kiếm được một
                    khoản kếch xù, qua đó một bước lên mây thành đại gia. Một
                    khoảng thời gian sau đó, dịch vụ anh hùng cho thuê lại thuộc
                    quyền quản lý của Oracle Inc, một công ty được điều hành bởi
                    Namor the Sub-Mariner.
                  </p>
                  <p>
                    Một số thành viên từng tham gia dịch vụ này gồm Iron Fist,
                    Ant-Man, Hercules, Hulk, She-Hulk, Black Knight, Misty
                    Knight, Falcon, Paladin, Elektra, Spider-Man, Ghost Rider,
                    Punisher và Deadpool.
                  </p>
                  <h5>1. Captain America: Họa sĩ</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-4-16266035187922145132832.jpg"
                    alt="5, MARVEL,DC,GREEN LANTERN,SIÊU ANH HÙNG,NGHỆ NGHIỆP CỦA SIÊU ANH HÙNG,"
                    note=""
                  />
                  <p>
                    Cuối cùng sẽ là đội trưởng Mỹ, Steve Rogers. Từ comic cho
                    tới MCU, fan vốn đã quen với hình ảnh Captain America có
                    xuất thân là một quân nhân đầy nghiêm nghị và quả cảm. Nhưng
                    anh thực chất còn là một họa sĩ đầy tài năng.
                  </p>
                  <p>
                    Với khả năng của mình, Steve được chính{" "}
                    <strong>Marvel</strong> Comics (phiên bản giả tưởng của
                    Marvel ngoài đời thực tạo ra) tuyển dụng vào đội ngũ sáng
                    tác. Điều thú vị nhất là khi Steve lại trở thành họa sĩ
                    truyện tranh cho đầu truyện về chính bản thân anh.
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
