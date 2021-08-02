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
"timestamp": '29/07/2021 04:05 PM',
"title": 'Bộ giáp Rescue của vợ Iron Man mạnh mẽ tới mức nào trong MCU?',
"description": 'Bạn có tò mò về sức mạnh của bộ giáp mà Tony Stark chế tạo cho Pepper Potts không?',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-1626576566449109487457.jpg',
"alt": 'TONY STARK,IRON MAN,MARVEL,RESCUE,PEPPER POTTS,BỘ GIÁP RESCUE,',
"category": 'tech',
"date": '29/07/2021',
"time": '04:05 PM',
"link": '/bo-giap-rescue-cua-vo-iron-man-manh-me-toi-muc-nao-trong-mcu',
"zcomponent": 'page_20210729160539',
"filepath": './20210729160539-bo-giap-rescue-cua-vo-iron-man-manh-me-toi-muc-nao-trong-mcu.js'
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
const title = "Bộ giáp Rescue của vợ Iron Man mạnh mẽ tới mức nào trong MCU?";
const author = "MT";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:05 PM";
const description =
  "Bạn có tò mò về sức mạnh của bộ giáp mà Tony Stark chế tạo cho Pepper Potts không?";
const link = "bo-giap-rescue-cua-vo-iron-man-manh-me-toi-muc-nao-trong-mcu";
const tagparam = [
  "TONY STARK",
  "IRON MAN",
  "MARVEL",
  "RESCUE",
  "PEPPER POTTS",
  "BỘ GIÁP RESCUE",
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

export default function page_20210729160539() {
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
                    <strong>Iron Man</strong>/<strong>Tony Stark</strong> nổi
                    tiếng trong <strong>Marvel</strong> không chỉ là về bản tính
                    cao ngạo, mà còn nằm ở trí tuệ siêu việt khi tạo ra không ít
                    bộ giáp tân tiến. Không dừng lại ở đó, Tony còn tạo ra một
                    bộ giáp có tên gọi là <strong>Rescue</strong> cho người bạn
                    đời của anh, <strong>Pepper Potts</strong>.{" "}
                    <strong>Bộ giáp Rescue</strong> chính thức ra mắt trong
                    Avengers: Endgame, với tông màu xanh chủ đạo như trong
                    nguyên tác. Cả hai vợ chồng nhà Stark đã có không ít khoảnh
                    khắc “song kiếm hợp bích” trong trận đại chiến với Thanos và
                    bè lũ tay sai của gã Titan điên.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-1626576566449109487457.jpg"
                    alt="1, TONY STARK,IRON MAN,MARVEL,RESCUE,PEPPER POTTS,BỘ GIÁP RESCUE,"
                    note=""
                  />
                  <p>
                    So với phiên bản comic thiên về cứu hộ, bộ giáp{" "}
                    <strong>Rescue</strong> trong MCU được trang bị thêm khả
                    năng chiến đấu. Nói chung đây là bộ giáp mà Tony dành tặng
                    cho Pepper, để cô tự bảo vệ cho bản thân và con gái Morgan.
                    Và câu hỏi ở đây là bộ giáp mạnh mẽ tới mức nào?
                  </p>
                  <p>
                    Trong Endgame, năng lực chiến đấu của{" "}
                    <strong>Rescue</strong> được thể hiện rõ nét nhất là khi
                    Pepper dùng tia năng lượng để cùng với Shuri, The Wasp kìm
                    chân Thanos. Nguồn năng lượng bắn ra từ{" "}
                    <strong>bộ giáp Rescue</strong> khi ấy được nhận định là
                    không hề thua kém, thậm chí còn sở hữu uy lực ngang ngửa với
                    bộ giáp Mark LXXXV của <strong>Tony Stark</strong>. Cũng
                    chính nhờ vào uy lực như vậy, mà Pepper đã dễ dàng hạ gục
                    một trong những Leviathan của Thanos, cho thấy Tony cũng đầu
                    tư rất nhiều vào bộ giáp này. Và có thể làm cho Thanos ngã
                    xuống dưới đất cũng là một điểm nhấn về uy lực từ bộ giáp
                    Rescue.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Chỉ có một điểm khác biệt là nằm công nghệ làm nên bộ giáp.
                    So với công nghệ nano tiên tiến nhất mà Tony sử dụng từ
                    Infinity War, bộ giáp <strong>Rescue</strong> của Pepper vẫn
                    được chế tạo theo phong cách thường thấy từ titanium như
                    những Iron suit trở về trước. Đây là một điểm khá đáng tiếc,
                    khi công nghệ nano giúp di chuyển một cách thoải mái và linh
                    hoạt hơn, gia tăng sự bền bỉ. Tuy vậy,{" "}
                    <strong>bộ giáp Rescue</strong> vẫn có khả năng sử dụng vũ
                    khí như của Tony.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-16265765673481105101748.jpg"
                    alt="2, TONY STARK,IRON MAN,MARVEL,RESCUE,PEPPER POTTS,BỘ GIÁP RESCUE,"
                    note=""
                  />
                  <p>
                    Quả thực <strong>Rescue</strong> là một trong những thành
                    quả tân tiến nhất mà <strong>Tony Stark</strong> từng tạo ra
                    vào thời điểm hiện tại, cùng với bộ giáp mang công nghệ nano
                    bằng trí thông minh xuất chúng của mình. Pepper cũng đã cho
                    thấy bản thân sử dụng bộ giáp khá thành thạo và sẽ còn lợi
                    hại hơn nữa nếu có thêm công nghệ nano.
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
