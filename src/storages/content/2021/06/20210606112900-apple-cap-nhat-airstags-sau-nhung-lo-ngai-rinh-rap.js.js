import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */
/*
<ContentItem title="Apple cập nhật AirTags sau những lo ngại rình rập" 
src="" 
alt="" 
category="" 
time="" 
link=""/>

{title:"" ,
src:"" ,
alt:"" ,
category:"" ,
time:"" ,
link:"",
filepath:""},


Apple cập nhật AirTags sau những lo ngại rình rập
Apple đã phát hành một bản cập nhật phần mềm cho AirTags sau những lo ngại rằng chúng có thể được sử dụng để theo dõi mọi người một cách bí mật.


<ContentImage
src=""
alt=""
note=""
/>

./20210606112900-apple-cap-nhat-airstags-sau-nhung-lo-ngai-rinh-rap.js
*/

/* ---------------------------------------------------------------- */
const category = "";
const categoryLink = "/";
const title = "Apple cập nhật AirTags sau những lo ngại rình rập";
const author = "Bbc";
const source = "BBC";
const date = "06/06/2021";
const time = "11:29 AM";
const description =
  "Apple đã phát hành một bản cập nhật phần mềm cho AirTags sau những lo ngại rằng chúng có thể được sử dụng để theo dõi mọi người một cách bí mật.";
const link = "apple-cap-nhat-airstags-sau-nhung-lo-ngai-rinh-rap";
const tagparam = ["Apple", "AirTags"];
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

export default function page_20210606112900() {
  return (
    <>
      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              >
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
              <div className="author">{author}</div> - Theo {source} | {date}{" "}
              {time}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <div className="contentBody">
                  <p>
                    Thẻ AirTags được phát hành vào tháng 4 và được quảng bá như
                    một cách để mọi người theo dõi đồ đạc của họ.
                  </p>
                  <ContentImage
                    src="https://ichef.bbci.co.uk/news/800/cpsprodpb/6A4A/production/_118801272_gettyimages-1315307818.jpg"
                    alt="Apple, Airtags"
                    note="AirTags are designed to help people keep track of their belongings"
                  />
                  <p>
                    Tuy nhiên, các nhà phê bình cảnh báo rằng công cụ theo dõi
                    có kích thước bằng đồng xu có thể dễ dàng được sử dụng để
                    theo dõi vị trí thời gian thực của ai đó.
                  </p>
                  <p>
                    Sau khi cập nhật, AirTags sẽ phát ra tiếng bíp nếu họ không
                    ở xa iPhone của chủ nhân - vào một thời điểm ngẫu nhiên
                    trong khoảng từ 8 đến 24 giờ - để cảnh báo cho những người ở
                    gần.
                  </p>
                  <p>
                    AirTags sẽ tự động cập nhật phần mềm của họ khi chúng ở gần
                    iPhone của chủ sở hữu.
                  </p>
                  <h4>Mối quan tâm về gián điệp</h4>
                  <p>
                    Khi công bố AirTags vào tháng 4, Apple cho biết họ đã thiết
                    kế các tính năng để ngăn chúng được sử dụng để theo dõi mọi
                    người.
                  </p>
                  <p>
                    Thiết bị này đủ nhỏ để đặt bên trong túi xách hoặc túi áo
                    khoác, điều này làm dấy lên lo ngại về khả năng sử dụng sai
                    mục đích.
                  </p>
                  <p>
                    Nếu một chiếc iPhone phát hiện thấy trình theo dõi của người
                    khác đang theo dõi nó xung quanh, nó sẽ hiển thị một cảnh
                    báo. Các thẻ cũng được lập trình để phát ra tiếng bíp nếu họ
                    không ở xa iPhone của chủ nhân trong ba ngày, có khả năng
                    cho phép chủ sở hữu bị theo dõi mà họ không hề hay biết.
                  </p>
                  <p>
                    Những người có điện thoại thông minh Android không nhìn thấy
                    cảnh báo trên màn hình.
                  </p>
                  <p>
                    Một số người đánh giá cho biết họ đã sử dụng AirTags để theo
                    dõi thành công bạn bè hoặc gia đình.
                  </p>
                  <p>
                    Kirk McElhearn đã viết trên blog công nghệ Intego rằng anh
                    ấy đã đăng một trong những thiết bị theo dõi cho một người
                    bạn ở nam London.
                  </p>
                  <p>
                    Sau khi thiết bị được giao, người bạn để lại phong bì trên
                    quầy bếp của mình.
                  </p>
                  <p>
                    Ông McElhearn cho biết AirTag của ông đã không thông báo cho
                    bạn của ông về sự hiện diện của nó sau hơn 4 ngày ở trong
                    nhà ông.
                  </p>
                  <p>
                    Một số người đánh giá cũng cho rằng tiếng bíp cảnh báo kéo
                    dài 15 giây không đủ lớn để nghe thấy những tiếng ồn trong
                    gia đình hàng ngày.
                  </p>
                  <h4>Những thay đổi</h4>
                  <p>
                    Sau khi cập nhật, một AirTag sẽ phát ra tiếng bíp vào một
                    thời điểm ngẫu nhiên từ 8 đến 24 giờ nếu nó không ở xa
                    iPhone của chủ nhân.
                  </p>
                  <p>
                    Apple cho biết họ cũng đang có kế hoạch giới thiệu các biện
                    pháp bảo vệ cho người dùng Android.
                  </p>
                  <p>
                    Công ty cho biết: “Cuối năm nay, chúng tôi cũng sẽ giới
                    thiệu một ứng dụng Android cho phép người dùng phát hiện phụ
                    kiện hỗ trợ mạng AirTag hoặc Find My tách khỏi chủ sở hữu có
                    thể đang đi cùng người dùng”.
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
