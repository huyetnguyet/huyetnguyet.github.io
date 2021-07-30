import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*
 <ContentItem
 title="Nợ nần chồng chất, lừa cả tiền fan, nữ streamer xinh đẹp tuyên bố cùng đường, đóng phim 18+ để trả nợ"
content="Rất nhiều người đã phải cảm thấy bất ngờ trước dự định này của cô nàng streamer." 
src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/2/photo-1-16226287706571521534897.jpg" 
alt="Streamer" 
category="images" 
time="03/06/2021 06:50 PM" 
link="/no-nan-chong-chat-lua-ca-tien-fan-nu-streamer-xinh-dep-tuyen-bo-cung-duong-dong-phim-18-de-tra-no"/>

<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  "Nợ nần chồng chất, lừa cả tiền fan, nữ streamer xinh đẹp tuyên bố cùng đường, đóng phim 18+ để trả nợ";
const author = "MẶT TRỨNG,";
const source = "Pháp luật & Bạn đọc";
const date = "03/06/2021";
const time = "06:50 PM";
const description =
  "Rất nhiều người đã phải cảm thấy bất ngờ trước dự định này của cô nàng streamer.";
const link =
  "no-nan-chong-chat-lua-ca-tien-fan-nu-streamer-xinh-dep-tuyen-bo-cung-duong-dong-phim-18-de-tra-no";
const tagparam = [
  "streamer",
  "no-nan-chong-chat",
  "dam-me-co-bac",
  "suy-nghi-tich-cuc",
  "fan-ham-mo",
  "binh-luan-trai-chieu",
  "trang-ca-nhan",
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

export default function page_20210603065007() {
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
                    Nhân vật đang được nhắc tới trong câu chuyện là Dương Bảo
                    Bối, một cái tên mà cách đây chừng 1-2 năm thôi vẫn đang
                    được coi là ngọc nữ trong làng streamer. Sở hữu gương mặt
                    ngây thơ, trong sáng kèm theo vóc dáng gợi cảm, Dương Bảo
                    Bối nhanh chóng thu hút được một lượng fan hâm mộ khổng lồ
                    ngay từ những ngày đầu debut sự nghiệp streamer.
                  </p>
                  <p>
                    Tuy nhiên, với những biến cố thời gian gần đây do đam mê cờ
                    bạc, vui thú đỏ đen mà cô nàng rơi vào cảnh nợ nần ngập đầu.
                    Tới mức mà nàng hot girl thuở nào còn phải lừa cả tiền của
                    fan qua hình thức bán đồ online, vay nợ với lãi suất cắt cổ
                    và "ôm" cả tiền của nhãn hàng.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/2/photo-1-16226287706571521534897.jpg"
                    alt="Streamer"
                    note="
                    Dương Bảo Bối thời vẫn còn là hot girl trong sáng, ngây thơ
                    nổi tiếng"
                  />
                  <p></p>
                  <p>
                    Cụ thể, sau khi bị bóc trần vụ việc, nàng streamer cũng đã
                    lên tiếng xin lỗi, hứa hẹn sẽ trả nợ đồng thời tiết lộ bản
                    thân thậm chí đã từng nghĩ tới ý định tự tử. Cũng may là sau
                    đó cô nàng đã suy nghĩ tích cực hơn, quay lại với công việc
                    streamer và làm việc một cách rất chăm chỉ, dẫu cho không ít
                    fan của Dương Bảo Bối đã quay lưng lại với cô nàng.
                  </p>
                  <p>
                    Tuy nhiên, dường như vậy là không đủ để trả nợ, mới đây
                    thôi, nhiều người đã phải bất ngờ khi phát hiện ra cô nàng
                    liên hệ với SWAG - một kênh với các clip và nội dung 18+ phổ
                    biến của giới streamer.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/2/photo-1-16226287802821071007056.jpg"
                    alt="Streamer"
                    note="
                    Cùng đường, cô nàng streamer đành phải hợp tác với SWAG để
                    sớm ngày trả nợ"
                  />
                  <p></p>
                  <p>
                    Bản thân Dương Bảo Bối cũng chẳng hề giấu giếm thông tin
                    này. Bên cạnh việc thiết lập trạng thái trên trang cá nhân,
                    nữ streamer cũng dành hẳn một buổi lên sóng để nói về vấn đề
                    tham gia SWAG. Cụ thể, cô nàng cho rằng giờ mình đã cùng
                    đường, và phải chấp nhận làm việc cật lực để kiếm sống thôi.
                    Bên cạnh tham gia làm và lên sóng với các nội dung 18+ cho
                    SWAG, Dương Bảo Bối cũng đồng thời quảng cáo cho rất nhiều
                    nhãn hàng chăm sóc răng miệng, bói bài Tarot hay các nhãn
                    hàng làm đẹp khác.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/2/photo-2-16226287803241944991713.jpg"
                    alt="Streamer"
                    note="
                    Chẳng những tham gia đóng phim và clip 18+, Dương Bảo Bối
                    giờ sẵn sàng làm đủ việc để trả tiền"
                  />
                  <p></p>
                  <p>
                    Tuy nhiên, việc chấp nhận đi vào con đường 18+ cũng khiến
                    cho cô nàng gặp phải rất nhiều những bình luận trái chiều.
                    Một số fan thậm chí còn đưa ra các bình luận tiêu cực, tuyên
                    bố sẽ tẩy chay các bộ phim của nữ streamer, đồng thời gọi
                    đây là một điều sai trái không nên lặp lại. Bên cạnh đó, một
                    số người cũng tỏ ra ngờ vực về tính hợp pháp của hành động
                    này từ phía Dương Bảo Bối.
                  </p>
                  <p>
                    Tuy nhiên, như cô nàng đã chia sẻ: "Tôi cùng đường rồi" thì
                    đúng là chẳng biết được điều gì sẽ xảy ra nữa, và cũng dễ
                    hiểu cho quyết định đầy táo bạo này của Dương Bảo Bối.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/2/photo-3-16226287803721797258230.jpg"
                    alt="Streamer"
                    note=""
                  />
                  <p>Ảnh: Internet</p>
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
