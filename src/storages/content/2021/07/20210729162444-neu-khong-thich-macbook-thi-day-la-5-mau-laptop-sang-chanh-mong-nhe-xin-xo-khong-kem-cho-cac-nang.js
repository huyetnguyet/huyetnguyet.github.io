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
"timestamp": '29/07/2021 04:24 PM',
"title": 'Nếu không thích MacBook thì đây là 5 mẫu laptop sang chảnh mỏng nhẹ xịn xò không kém cho các nàng',
"description": 'MacBook sang xịn thật nhưng không phải ai cũng thích dùng, và đây là những gợi ý không kém phần chất lượng trong tầm giá 25 triệu.',
"src": 'https://kenh14cdn.com/2020/11/6/frame-285-16046320623751918346486.png',
"alt": 'laptop,Macbook,webuy,thích thì mua,Vũ trụ ở nhà không la cà,đồ điện tử,đồ công nghệ,',
"category": 'tech',
"date": '29/07/2021',
"time": '04:24 PM',
"link": '/neu-khong-thich-macbook-thi-day-la-5-mau-laptop-sang-chanh-mong-nhe-xin-xo-khong-kem-cho-cac-nang',
"zcomponent": 'page_20210729162444',
"filepath": './20210729162444-neu-khong-thich-macbook-thi-day-la-5-mau-laptop-sang-chanh-mong-nhe-xin-xo-khong-kem-cho-cac-nang.js'
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
  "Nếu không thích MacBook thì đây là 5 mẫu laptop sang chảnh mỏng nhẹ xịn xò không kém cho các nàng";
const author = "PH - WEBUY,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "29/07/2021 04:24 PM";
const description =
  "MacBook sang xịn thật nhưng không phải ai cũng thích dùng, và đây là những gợi ý không kém phần chất lượng trong tầm giá 25 triệu.";
const link =
  "neu-khong-thich-macbook-thi-day-la-5-mau-laptop-sang-chanh-mong-nhe-xin-xo-khong-kem-cho-cac-nang";
const tagparam = [
  "laptop",
  "Macbook",
  "webuy",
  "thích thì mua",
  "Vũ trụ ở nhà không la cà",
  "đồ điện tử",
  "đồ công nghệ",
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

export default function page_20210729162444() {
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
                      <strong>Laptop</strong> Windows mà vẻ ngoài sang chảnh như{" "}
                      <strong>MacBook</strong> thì lựa chọn đầu tiên không thể
                      bỏ qua dòng XPS của Dell. Lớp vỏ hợp kim nhôm nhiều màu
                      sắc để lựa chọn có độ mỏng chỉ 14mm, nhẹ 1,2kg, cộng thêm
                      viền màn hình siêu mỏng nữa nên độ di động của XPS 13 9300
                      là “khỏi bàn”.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/genk-top-list-16272300440121807391683.jpg"
                      alt="7, laptop,Macbook,webuy,thích thì mua,Vũ trụ ở nhà không la cà,đồ điện tử,đồ công nghệ,"
                      note=""
                    />
                    <p>
                      Màn hình của máy có chất lượng cao, màu sắc rực rỡ, sáng
                      đẹp, làm việc hay cày phim đều đã mắt, trong khi cấu hình
                      hoàn toàn đủ sức cân tốt các tác vụ văn phòng, giải trí
                      nhẹ nhàng.
                    </p>
                    <p>
                      Dân văn phòng hay phải gõ văn bản nhiều thì nên cân nhắc
                      dòng Yoga Slim 7. <strong>MacBook</strong> trước giờ không
                      được đánh giá cao về bàn phím, và nếu chuyển sang dùng{" "}
                      <strong>laptop</strong> của Lenovo sẽ thấy khác một trời
                      một vực, gõ sướng tay hơn nhiều.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/genk-top-list1-16272300441181760118555.jpg"
                      alt="8, laptop,Macbook,webuy,thích thì mua,Vũ trụ ở nhà không la cà,đồ điện tử,đồ công nghệ,"
                      note=""
                    />
                    <p>
                      Bên cạnh đó, Yoga Slim 7 còn nhiều điểm cộng khác như màn
                      hình sáng đẹp, viền mỏng, thiết kế sang chảnh từng chi
                      tiết và cấu hình mạnh mẽ đời mới.
                    </p>
                    <p>
                      Nói về <strong>laptop</strong> Windows cao cấp thì không
                      thể bỏ qua Surface Laptop 4. Dòng máy này có màn hình cảm
                      ứng lớn 13.5 inch sáng đẹp sắc nét, thiết kế là lạ nhìn là
                      “mê mẩn” với nắp kim loại nhám và bàn phím phủ vải mềm
                      mại.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/genk-top-list2-16272300441041046675222.jpg"
                      alt="9, laptop,Macbook,webuy,thích thì mua,Vũ trụ ở nhà không la cà,đồ điện tử,đồ công nghệ,"
                      note=""
                    />
                    <p>
                      Với cấu hình mạnh mẽ vượt trội ở phiên bản chip Ryzen 5,
                      nàng nào có nhu cầu chỉnh sửa hình ảnh, video bên cạnh
                      công việc chính thì không nên bỏ qua.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Nếu ngoài công việc văn phòng và giải trí đơn giản như xem
                      phim, các nàng còn có hoa tay, thích vẽ vời thì một chiếc{" "}
                      <strong>laptop</strong> 2-in-1 với màn hình cảm ứng xoay
                      lật 360 độ kèm bút cảm ứng như Spectre X360 chính là “chân
                      ái”.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/genk-top-list3-1627230044177582160829.jpg"
                      alt="10, laptop,Macbook,webuy,thích thì mua,Vũ trụ ở nhà không la cà,đồ điện tử,đồ công nghệ,"
                      note=""
                    />
                    <p>
                      Chiếc máy vừa có thiết kế đẹp lạ sang chảnh với đường cắt
                      kim cương, trọng lượng chỉ 1,3kg, vừa có cấu hình mạnh mẽ
                      dùng thoải mái mọi tác vụ.
                    </p>
                    <p>
                      Với màn hình cảm ứng OLED sáng đẹp tuyệt vời, Zenbook Flip
                      UX425EA cực hợp với các nàng mê phim. Hình ảnh đẹp lung
                      linh, màu đen sâu thẳm cùng độ sắc nét cao sẽ giúp trải
                      nghiệm cày phim đã hơn nhiều các loại{" "}
                      <strong>laptop</strong> khác, kể cả{" "}
                      <strong>MacBook</strong>.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/genk-top-list4-1627230043917267150352.jpg"
                      alt="11, laptop,Macbook,webuy,thích thì mua,Vũ trụ ở nhà không la cà,đồ điện tử,đồ công nghệ,"
                      note=""
                    />
                    <p>
                      Bên cạnh đó, máy cũng có cấu hình mạnh để làm việc thoải
                      mái hơn. Nàng nào hay phải đi ra ngoài cũng sẽ thấy yên
                      tâm vì máy chỉ nhẹ đúng 1,3kg thôi.
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
